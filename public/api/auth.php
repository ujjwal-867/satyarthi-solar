<?php
// ==============================================================================
// Satyarthi Solar Solution - Hardened Admin Authentication Controller
// ==============================================================================

require_once __DIR__ . '/config.php';
set_secure_api_headers();

$action = $_GET['action'] ?? 'login';
$clientIp = get_client_ip();
$dataDir = get_secure_data_dir();
$attemptsFile = $dataDir . '/login_attempts.json';
$sessionsFile = $dataDir . '/sessions.json';

// Helper: Read JSON safely
function read_json_file($path) {
    if (!file_exists($path)) return [];
    $content = file_get_contents($path);
    return json_decode($content, true) ?: [];
}

// Helper: Write JSON safely with file locking
function write_json_file($path, $data) {
    file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT), LOCK_EX);
}

// Helper: Clean up expired sessions and old attempt records
function cleanup_expired_records($sessionsFile, $attemptsFile) {
    $now = time();

    // Clean sessions
    if (file_exists($sessionsFile)) {
        $sessions = read_json_file($sessionsFile);
        $activeSessions = array_filter($sessions, function($s) use ($now) {
            return isset($s['expiresAt']) && $s['expiresAt'] > $now;
        });
        write_json_file($sessionsFile, array_values($activeSessions));
    }

    // Clean login attempts older than lockout window
    if (file_exists($attemptsFile)) {
        $attempts = read_json_file($attemptsFile);
        $activeAttempts = array_filter($attempts, function($a) use ($now) {
            return isset($a['lastAttempt']) && ($now - $a['lastAttempt']) < LOCKOUT_WINDOW_SECONDS;
        });
        write_json_file($attemptsFile, $activeAttempts);
    }
}

// Run opportunistic cleanup
cleanup_expired_records($sessionsFile, $attemptsFile);

// Helper: Extract Bearer Token
function get_bearer_token() {
    $headers = null;
    if (isset($_SERVER['Authorization'])) {
        $headers = trim($_SERVER['Authorization']);
    } else if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $headers = trim($_SERVER['HTTP_AUTHORIZATION']);
    } else if (function_exists('apache_request_headers')) {
        $requestHeaders = apache_request_headers();
        $headers = $requestHeaders['Authorization'] ?? $requestHeaders['authorization'] ?? null;
    }

    if (!empty($headers)) {
        if (preg_match('/Bearer\s(\S+)/i', $headers, $matches)) {
            return $matches[1];
        }
    }
    return null;
}

// ==============================================================================
// 1. ACTION: LOGIN (POST)
// ==============================================================================
if ($action === 'login') {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed. Use POST.']);
        exit();
    }

    // A. Check Brute-Force Rate Limiting for this IP
    $attempts = read_json_file($attemptsFile);
    $ipRecord = $attempts[$clientIp] ?? null;

    if ($ipRecord && $ipRecord['count'] >= MAX_LOGIN_ATTEMPTS) {
        $timePassed = time() - $ipRecord['lastAttempt'];
        if ($timePassed < LOCKOUT_WINDOW_SECONDS) {
            $remainingMins = ceil((LOCKOUT_WINDOW_SECONDS - $timePassed) / 60);
            http_response_code(429);
            echo json_encode([
                'error' => "Too many failed attempts. Access locked for security. Please try again in {$remainingMins} minute(s)."
            ]);
            exit();
        } else {
            // Lockout window expired, reset attempts
            unset($attempts[$clientIp]);
            write_json_file($attemptsFile, $attempts);
        }
    }

    // B. Parse Credentials
    $rawInput = file_get_contents('php://input');
    $inputData = json_decode($rawInput, true);
    $password = $inputData['password'] ?? '';

    if (empty($password)) {
        http_response_code(400);
        echo json_encode(['error' => 'Password / Security PIN is required.']);
        exit();
    }

    // C. Verify Password
    if (!verify_admin_password($password)) {
        // Record failed attempt
        $attempts = read_json_file($attemptsFile);
        $currentCount = isset($attempts[$clientIp]) ? $attempts[$clientIp]['count'] + 1 : 1;
        $attempts[$clientIp] = [
            'count'       => $currentCount,
            'lastAttempt' => time()
        ];
        write_json_file($attemptsFile, $attempts);

        // Security penalty delay (prevents high-frequency automated brute force)
        usleep(400000); // 400ms

        $remainingAttempts = max(0, MAX_LOGIN_ATTEMPTS - $currentCount);
        http_response_code(401);
        echo json_encode([
            'error' => 'Invalid administrative credentials.',
            'remainingAttempts' => $remainingAttempts
        ]);
        exit();
    }

    // D. Password Success: Clear attempts & Issue Cryptographic Token
    unset($attempts[$clientIp]);
    write_json_file($attemptsFile, $attempts);

    $token = bin2hex(random_bytes(32)); // 64 hex characters
    $tokenHash = hash('sha256', $token);
    $expiresAt = time() + SESSION_LIFETIME_SECONDS;

    $sessions = read_json_file($sessionsFile);
    $sessions[] = [
        'tokenHash' => $tokenHash,
        'clientIp'  => $clientIp,
        'userAgent' => substr($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown', 0, 150),
        'createdAt' => time(),
        'expiresAt' => $expiresAt
    ];
    write_json_file($sessionsFile, $sessions);

    echo json_encode([
        'success'   => true,
        'message'   => 'Admin authenticated successfully.',
        'token'     => $token,
        'expiresAt' => $expiresAt
    ]);
    exit();
}

// ==============================================================================
// 2. ACTION: VERIFY (GET/POST)
// ==============================================================================
if ($action === 'verify') {
    $token = get_bearer_token();
    if (!$token) {
        http_response_code(401);
        echo json_encode(['valid' => false, 'error' => 'Missing authorization token.']);
        exit();
    }

    $tokenHash = hash('sha256', $token);
    $sessions = read_json_file($sessionsFile);
    $found = false;

    foreach ($sessions as $session) {
        if (hash_equals($session['tokenHash'], $tokenHash)) {
            if ($session['expiresAt'] > time()) {
                $found = true;
                break;
            }
        }
    }

    if ($found) {
        echo json_encode(['valid' => true, 'message' => 'Token active.']);
    } else {
        http_response_code(401);
        echo json_encode(['valid' => false, 'error' => 'Session expired or invalid.']);
    }
    exit();
}

// ==============================================================================
// 3. ACTION: LOGOUT (POST)
// ==============================================================================
if ($action === 'logout') {
    $token = get_bearer_token();
    if ($token) {
        $tokenHash = hash('sha256', $token);
        $sessions = read_json_file($sessionsFile);
        $remaining = array_filter($sessions, function($s) use ($tokenHash) {
            return !hash_equals($s['tokenHash'], $tokenHash);
        });
        write_json_file($sessionsFile, array_values($remaining));
    }

    echo json_encode(['success' => true, 'message' => 'Session terminated.']);
    exit();
}

http_response_code(400);
echo json_encode(['error' => 'Invalid action requested.']);
?>
