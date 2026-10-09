<?php
// ==============================================================================
// Satyarthi Solar Solution - Hardened Configuration & Security Module
// ==============================================================================

// 1. Prevent Direct Web Invocation
if (basename($_SERVER['SCRIPT_FILENAME'] ?? '') === 'config.php') {
    http_response_code(403);
    header('Content-Type: application/json; charset=utf-8');
    die(json_encode(['error' => 'Direct script access is forbidden.']));
}

// 2. Controlled Debug Mode
// WARNING: Keep APP_DEBUG false in production to prevent leaking server paths and stack traces!
define('APP_DEBUG', filter_var(getenv('APP_DEBUG') ?: false, FILTER_VALIDATE_BOOLEAN));

if (!APP_DEBUG) {
    ini_set('display_errors', '0');
    ini_set('display_startup_errors', '0');
    error_reporting(0);
} else {
    ini_set('display_errors', '1');
    ini_set('display_startup_errors', '1');
    error_reporting(E_ALL);
}

// 3. Email Notification Configuration
define('NOTIFICATION_EMAIL', getenv('NOTIFICATION_EMAIL') ?: 'satyarthisolarsolution@gmail.com');

// 4. Database Credentials (Configurable via Environment Variables or cPanel)
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_USER', getenv('DB_USER') ?: '');
define('DB_PASS', getenv('DB_PASS') ?: '');
define('DB_NAME', getenv('DB_NAME') ?: '');

// 5. Admin Authentication & Cryptographic Hashing
// Salt for SHA-256 fallback (Can also be overridden by env variable)
define('ADMIN_SALT', getenv('ADMIN_SALT') ?: 'solar_satyarthi_secure_salt_2026');

// Stored SHA-256 hash for default admin password (satyarthi2026 + salt)
// Or standard bcrypt hash starting with $2y$
define('ADMIN_PASSWORD_HASH', getenv('ADMIN_PASSWORD_HASH') ?: '39a5cfeed284dfba473ea3b101f398312f9d8b41755f2c7b1df7ec94d8dc3efc');

// Session Expiration Time (4 Hours)
define('SESSION_LIFETIME_SECONDS', 14400);

// Max Login Attempts Before IP Lockout
define('MAX_LOGIN_ATTEMPTS', 5);
define('LOCKOUT_WINDOW_SECONDS', 900); // 15 Minutes

// Rate Limiting for Lead Submissions
define('MAX_LEAD_SUBMISSIONS_PER_IP', 5);
define('LEAD_RATE_WINDOW_SECONDS', 600); // 10 Minutes

// 6. Security Helper Functions

/**
 * Send standard defensive security headers and validated CORS
 */
function set_secure_api_headers() {
    header('Content-Type: application/json; charset=utf-8');
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: SAMEORIGIN');
    header('X-XSS-Protection: 1; mode=block');
    header('Referrer-Policy: strict-origin-when-cross-origin');

    // Strict CORS: Validate against current server domain
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $serverHost = $_SERVER['HTTP_HOST'] ?? '';

    if (!empty($origin)) {
        $parsedOrigin = parse_url($origin);
        $originHost = $parsedOrigin['host'] ?? '';
        
        // Allow same host or local development
        if ($originHost === $serverHost || in_array($originHost, ['localhost', '127.0.0.1'])) {
            header('Access-Control-Allow-Origin: ' . $origin);
            header('Access-Control-Allow-Credentials: true');
        }
    } else {
        // Fallback for same-origin browser fetches
        header('Access-Control-Allow-Origin: *');
    }

    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

    // Handle preflight OPTIONS request
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
}

/**
 * Constant-time password verification supporting bcrypt and salted SHA-256
 */
function verify_admin_password($inputPassword) {
    if (empty($inputPassword)) return false;

    $storedHash = ADMIN_PASSWORD_HASH;

    // 1. Check if bcrypt
    if (strpos($storedHash, '$2') === 0) {
        return password_verify($inputPassword, $storedHash);
    }

    // 2. Salted SHA-256 with constant-time comparison
    $computedHash = hash('sha256', $inputPassword . ADMIN_SALT);
    return hash_equals($storedHash, $computedHash);
}

/**
 * Get Client IP Address (with proxy header protection)
 */
function get_client_ip() {
    // Only trust REMOTE_ADDR to prevent IP spoofing unless behind a trusted reverse proxy
    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

/**
 * Helper to get active session file path
 */
function get_secure_data_dir() {
    $dir = __DIR__ . '/data';
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
    }
    return $dir;
}
?>
