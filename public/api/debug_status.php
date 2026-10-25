<?php
header('Content-Type: application/json; charset=utf-8');

$docRoot = $_SERVER['DOCUMENT_ROOT'] ?? '';
$scriptDir = __DIR__;
$parentDir = dirname(__DIR__);

$parentFiles = [];
if (is_dir($parentDir)) {
    $scan = scandir($parentDir);
    foreach ($scan as $f) {
        if ($f !== '.' && $f !== '..') {
            $full = $parentDir . '/' . $f;
            $parentFiles[] = [
                'name' => $f,
                'size' => is_file($full) ? filesize($full) : null,
                'modified' => date('c', filemtime($full)),
                'is_dir' => is_dir($full)
            ];
        }
    }
}

echo json_encode([
    'timestamp' => date('c'),
    'document_root' => $docRoot,
    'script_dir' => $scriptDir,
    'parent_dir' => $parentDir,
    'parent_files_count' => count($parentFiles),
    'index_html_info' => file_exists($parentDir . '/index.html') ? [
        'size' => filesize($parentDir . '/index.html'),
        'modified' => date('c', filemtime($parentDir . '/index.html'))
    ] : null,
    'cwd' => getcwd()
], JSON_PRETTY_PRINT);
