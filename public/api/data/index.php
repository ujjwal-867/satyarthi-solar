<?php
// Defense-in-depth: Prevent directory traversal and file listing
http_response_code(403);
header('Content-Type: application/json; charset=utf-8');
die(json_encode(['error' => 'Forbidden directory access.']));
?>
