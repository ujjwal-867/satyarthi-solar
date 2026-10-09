<?php
// ==============================================================================
// Satyarthi Solar Solution - Hardened Public Lead Submission Handler
// ==============================================================================

require_once __DIR__ . '/config.php';
set_secure_api_headers();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed. Use POST.']);
    exit();
}

$clientIp = get_client_ip();
$dataDir = get_secure_data_dir();
$rateLimitFile = $dataDir . '/ratelimit.json';

// ==============================================================================
// 1. IP Rate Limiting (Defense against form flooding / DoS)
// ==============================================================================
$now = time();
$rateRecords = [];
if (file_exists($rateLimitFile)) {
    $rateRecords = json_decode(file_get_contents($rateLimitFile), true) ?: [];
}

// Clean old records
$activeRateRecords = [];
foreach ($rateRecords as $ip => $timestamps) {
    $validTimestamps = array_filter($timestamps, function($ts) use ($now) {
        return ($now - $ts) < LEAD_RATE_WINDOW_SECONDS;
    });
    if (!empty($validTimestamps)) {
        $activeRateRecords[$ip] = array_values($validTimestamps);
    }
}

// Check client IP
$clientSubmissions = $activeRateRecords[$clientIp] ?? [];
if (count($clientSubmissions) >= MAX_LEAD_SUBMISSIONS_PER_IP) {
    http_response_code(429);
    echo json_encode([
        'error' => 'Too many requests. For security, please wait a few minutes before submitting another inquiry, or call our 24x7 helpline directly at +91 8112991941.'
    ]);
    exit();
}

// ==============================================================================
// 2. Parse & Honeypot Spam Bot Inspection
// ==============================================================================
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON request payload.']);
    exit();
}

// Honeypot check: If hidden bot trap fields are filled, silently drop
if (!empty($data['website']) || !empty($data['_bot_trap']) || !empty($data['fax'])) {
    // Return fake success to confuse spam scrapers
    echo json_encode(['success' => true, 'message' => 'Inquiry received.']);
    exit();
}

// ==============================================================================
// 3. Strict Input Sanitization & Validation
// ==============================================================================
$rawName = trim($data['name'] ?? '');
$rawPhone = trim($data['phone'] ?? '');
$rawEmail = trim($data['email'] ?? '');

if (empty($rawName) || empty($rawPhone)) {
    http_response_code(400);
    echo json_encode(['error' => 'Name and Mobile Number are required.']);
    exit();
}

// Sanitize name: remove tags, limit length
$cleanName = htmlspecialchars(strip_tags(substr($rawName, 0, 100)), ENT_QUOTES, 'UTF-8');

// Validate & clean phone number: strip non-digits
$digitsOnly = preg_replace('/\D/', '', $rawPhone);
// If 12 digits starting with 91, extract 10 digits
if (strlen($digitsOnly) === 12 && substr($digitsOnly, 0, 2) === '91') {
    $digitsOnly = substr($digitsOnly, 2);
}
// Check standard 10-digit mobile number
if (strlen($digitsOnly) !== 10 || !preg_match('/^[6-9]\d{9}$/', $digitsOnly)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please provide a valid 10-digit Indian mobile number (e.g. 8112991941).']);
    exit();
}
$cleanPhone = $digitsOnly;

// Validate email if provided
$cleanEmail = '';
if (!empty($rawEmail)) {
    $emailCandidate = substr($rawEmail, 0, 100);
    if (filter_var($emailCandidate, FILTER_VALIDATE_EMAIL)) {
        // Prevent CRLF injection in email headers
        $cleanEmail = str_replace(["\r", "\n"], '', $emailCandidate);
    }
}

// Sanitize other optional fields
$cleanLocation = htmlspecialchars(strip_tags(substr($data['location'] ?? 'Gorakhpur', 0, 100)), ENT_QUOTES, 'UTF-8');
$cleanService  = htmlspecialchars(strip_tags(substr($data['service'] ?? 'Residential Rooftop Solar', 0, 120)), ENT_QUOTES, 'UTF-8');
$cleanBill     = htmlspecialchars(strip_tags(substr($data['bill'] ?? '', 0, 40)), ENT_QUOTES, 'UTF-8');
$cleanRoofArea = htmlspecialchars(strip_tags(substr($data['roofArea'] ?? '', 0, 40)), ENT_QUOTES, 'UTF-8');
$cleanMessage  = htmlspecialchars(strip_tags(substr($data['message'] ?? '', 0, 1000)), ENT_QUOTES, 'UTF-8');

// Build sanitized Lead record
$lead = [
    'id'        => 'LEAD-' . time() . '-' . rand(100, 999),
    'name'      => $cleanName,
    'phone'     => $cleanPhone,
    'email'     => $cleanEmail,
    'location'  => $cleanLocation,
    'service'   => $cleanService,
    'bill'      => $cleanBill,
    'roofArea'  => $cleanRoofArea,
    'message'   => $cleanMessage,
    'status'    => 'New',
    'createdAt' => date('c'),
    'ip'        => substr($clientIp, 0, 45)
];

// Record IP for rate limiting
$clientSubmissions[] = $now;
$activeRateRecords[$clientIp] = $clientSubmissions;
file_put_contents($rateLimitFile, json_encode($activeRateRecords, JSON_PRETTY_PRINT), LOCK_EX);

// ==============================================================================
// 4. File-Based Storage with File Locking (Atomic Save)
// ==============================================================================
$dataFile = $dataDir . '/leads.json';
$leads = [];
if (file_exists($dataFile)) {
    $leads = json_decode(file_get_contents($dataFile), true) ?: [];
}
array_unshift($leads, $lead);
file_put_contents($dataFile, json_encode($leads, JSON_PRETTY_PRINT), LOCK_EX);

// ==============================================================================
// 5. Optional MySQL Insertion with Prepared Statements (Zero SQL Injection)
// ==============================================================================
if (!empty(DB_USER) && !empty(DB_NAME)) {
    try {
        $pdo = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4', DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_SILENT,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]);
        $stmt = $pdo->prepare("INSERT INTO leads (lead_id, name, phone, email, location, service, bill, roof_area, message, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'New')");
        $stmt->execute([
            $lead['id'],
            $lead['name'],
            $lead['phone'],
            $lead['email'],
            $lead['location'],
            $lead['service'],
            $lead['bill'],
            $lead['roofArea'],
            $lead['message']
        ]);
    } catch (Exception $e) {
        // Silently continue since JSON storage is already preserved
        if (APP_DEBUG) {
            error_log("Database insertion note: " . $e->getMessage());
        }
    }
}

// ==============================================================================
// 6. Email Notification with Anti-Header Injection Protection
// ==============================================================================
if (defined('NOTIFICATION_EMAIL') && !empty(NOTIFICATION_EMAIL)) {
    $to = NOTIFICATION_EMAIL;
    $subject = "☀️ New Solar Lead: " . $lead['name'] . " (" . $lead['location'] . ")";
    $body = "New Solar & Electronics Inquiry from Website:\n\n"
          . "Name: " . $lead['name'] . "\n"
          . "Phone: " . $lead['phone'] . "\n"
          . "Email: " . ($lead['email'] ?: 'Not Provided') . "\n"
          . "Location: " . $lead['location'] . "\n"
          . "Interested Service: " . $lead['service'] . "\n"
          . "Monthly Electricity Bill: ₹" . $lead['bill'] . "\n"
          . "Roof Area: " . $lead['roofArea'] . " sq ft\n"
          . "Message: " . $lead['message'] . "\n"
          . "Received At: " . date('d-m-Y H:i:s') . "\n\n"
          . "Call Client: tel:" . $lead['phone'] . "\n"
          . "Chat WhatsApp: https://wa.me/91" . $lead['phone'];

    $safeFromHost = preg_replace('/[^a-zA-Z0-9.-]/', '', $_SERVER['SERVER_NAME'] ?? 'satyarthisolar.com');
    $headers = "From: noreply@" . $safeFromHost . "\r\n"
             . "Reply-To: " . ($lead['email'] ?: NOTIFICATION_EMAIL) . "\r\n"
             . "X-Mailer: PHP/" . phpversion();

    @mail($to, $subject, $body, $headers);
}

// Response
echo json_encode([
    'success' => true,
    'message' => 'Lead received successfully.',
    'leadId'  => $lead['id']
]);
?>
