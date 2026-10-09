<?php
// ==============================================================================
// Satyarthi Solar Solution - Protected Leads Management API
// ==============================================================================

require_once __DIR__ . '/config.php';
set_secure_api_headers();

// 1. Enforce Authentication via Bearer Token
function authenticate_admin_request() {
    $headers = null;
    if (isset($_SERVER['Authorization'])) {
        $headers = trim($_SERVER['Authorization']);
    } else if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $headers = trim($_SERVER['HTTP_AUTHORIZATION']);
    } else if (function_exists('apache_request_headers')) {
        $requestHeaders = apache_request_headers();
        $headers = $requestHeaders['Authorization'] ?? $requestHeaders['authorization'] ?? null;
    }

    $token = null;
    if (!empty($headers) && preg_match('/Bearer\s(\S+)/i', $headers, $matches)) {
        $token = $matches[1];
    }

    if (!$token) {
        http_response_code(401);
        echo json_encode(['error' => 'Access denied. Missing admin Bearer authorization token.']);
        exit();
    }

    $sessionsFile = get_secure_data_dir() . '/sessions.json';
    if (!file_exists($sessionsFile)) {
        http_response_code(401);
        echo json_encode(['error' => 'Access denied. No active sessions found.']);
        exit();
    }

    $tokenHash = hash('sha256', $token);
    $sessions = json_decode(file_get_contents($sessionsFile), true) ?: [];
    $isValid = false;

    foreach ($sessions as $session) {
        if (isset($session['tokenHash']) && hash_equals($session['tokenHash'], $tokenHash)) {
            if (isset($session['expiresAt']) && $session['expiresAt'] > time()) {
                $isValid = true;
                break;
            }
        }
    }

    if (!$isValid) {
        http_response_code(401);
        echo json_encode(['error' => 'Session expired or invalid. Please re-authenticate.']);
        exit();
    }
}

// Authenticate request before any data processing
authenticate_admin_request();

$dataFile = get_secure_data_dir() . '/leads.json';
$leads = [];
if (file_exists($dataFile)) {
    $leads = json_decode(file_get_contents($dataFile), true) ?: [];
}

$method = $_SERVER['REQUEST_METHOD'];

// ==============================================================================
// GET: Retrieve list of leads
// ==============================================================================
if ($method === 'GET') {
    echo json_encode([
        'success' => true,
        'count'   => count($leads),
        'leads'   => $leads
    ]);
    exit();
}

// ==============================================================================
// POST: Update lead status
// ==============================================================================
if ($method === 'POST') {
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    $leadId = $input['leadId'] ?? $input['id'] ?? null;
    $newStatus = $input['status'] ?? null;
    $notes = $input['notes'] ?? null;

    if (!$leadId || !$newStatus) {
        http_response_code(400);
        echo json_encode(['error' => 'leadId and new status are required.']);
        exit();
    }

    // Whitelist allowed statuses
    $allowedStatuses = ['New', 'Contacted', 'Site Visit', 'Converted', 'Rejected'];
    if (!in_array($newStatus, $allowedStatuses)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid status value.']);
        exit();
    }

    $updated = false;
    foreach ($leads as &$l) {
        if ($l['id'] === $leadId) {
            $l['status'] = $newStatus;
            if ($notes !== null) {
                $l['notes'] = htmlspecialchars(strip_tags($notes), ENT_QUOTES, 'UTF-8');
            }
            $l['updatedAt'] = date('c');
            $updated = true;
            break;
        }
    }

    if ($updated) {
        file_put_contents($dataFile, json_encode($leads, JSON_PRETTY_PRINT), LOCK_EX);
        echo json_encode(['success' => true, 'message' => "Lead {$leadId} updated to {$newStatus}."]);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Lead not found.']);
    }
    exit();
}

// ==============================================================================
// DELETE: Remove spam/junk lead
// ==============================================================================
if ($method === 'DELETE') {
    $leadId = $_GET['id'] ?? null;
    if (!$leadId) {
        http_response_code(400);
        echo json_encode(['error' => 'Lead ID is required for deletion.']);
        exit();
    }

    $initialCount = count($leads);
    $leads = array_filter($leads, function($l) use ($leadId) {
        return $l['id'] !== $leadId;
    });

    if (count($leads) < $initialCount) {
        file_put_contents($dataFile, json_encode(array_values($leads), JSON_PRETTY_PRINT), LOCK_EX);
        echo json_encode(['success' => true, 'message' => "Lead {$leadId} deleted."]);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Lead not found.']);
    }
    exit();
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed.']);
?>
