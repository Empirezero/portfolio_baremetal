<?php
/**
 * index.php — Manual PHP Router (Day 2)
 *
 * Routes:
 *   GET  /          → pages/home.php
 *   GET  /about     → pages/about.php
 *   GET  /projects  → pages/projects.php
 *   GET  /contact   → pages/contact.php
 *   POST /contact   → php/contact.php
 *   *               → pages/404.php
 */

$path   = rtrim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
$path   = $path === '' ? '/' : $path;
$method = $_SERVER['REQUEST_METHOD'];

// Strip subfolder if running under xampp e.g. /portfolio/about → /about
$base = dirname($_SERVER['SCRIPT_NAME']);
if ($base !== '/' && strpos($path, $base) === 0) {
    $path = substr($path, strlen($base));
}
$path = $path === '' ? '/' : $path;

switch ($path) {
    case '/':
        require __DIR__ . '/pages/home.php';
        break;

    case '/about':
        require __DIR__ . '/pages/about.php';
        break;
    case '/skills':
        require __DIR__ . '/pages/skills.php';
        break;
    case '/experience':
        require __DIR__ . '/pages/experience.php';
        break;

    case '/projects':
        require __DIR__ . '/pages/projects.php';
        break;

    case '/contact':
        if ($method === 'POST') {
            require __DIR__ . '/php/contact.php';
        } else {
            require __DIR__ . '/pages/contact.php';
        }
        break;

    default:
        http_response_code(404);
        require __DIR__ . '/pages/404.php';
        break;
}
?>
