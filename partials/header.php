<?php

/**
 * partials/header.php
 * Shared HTML head + navigation included by every page.
 * Set $pageTitle before requiring this file.
 */

// Detect current page for active nav link
$fullPath    = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$base        = dirname($_SERVER['SCRIPT_NAME']);
$currentPath = ($base !== '/' && strpos($fullPath, $base) === 0)
  ? substr($fullPath, strlen($base))
  : $fullPath;
$currentPath = rtrim($currentPath, '/') ?: '/';

function navClass($path, $current)
{
  return $path === $current ? 'nav-link nav-link--active' : 'nav-link';
}

// Build base URL for assets (works in both localhost/portfolio and root installs)
$baseUrl = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/\\');
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?= htmlspecialchars($pageTitle ?? 'Dan Portfolio') ?></title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <link rel="stylesheet" href="<?= $baseUrl ?>/css/style.css" />
</head>

<body>

  <!-- HEADER -->
  <header id="header">
    <nav class="nav-container">

      <!-- Social icons injected by JS -->
      <div class="nav-socials" id="nav-socials"></div>

      <!-- Page links with PHP active state -->
      <div class="nav-links">
        <a href="<?= $baseUrl ?>/" class="<?= navClass('/', $currentPath) ?>">Home</a>
        <a href="<?= $baseUrl ?>/about" class="<?= navClass('/about', $currentPath) ?>">About</a>
        <a href="<?= $baseUrl ?>/projects" class="<?= navClass('/projects', $currentPath) ?>">Projects</a>
        <a href="<?= $baseUrl ?>/contact" class="<?= navClass('/contact', $currentPath) ?>">Contact</a>
        <a href="<?= $baseUrl ?>/skills" class="<?= navClass('/skills', $currentPath) ?>">Skills</a>
        <a href="<?= $baseUrl ?>/experience" class="<?= navClass('/experience', $currentPath) ?>">Experience</a>
      </div>

      <a href="<?= $baseUrl ?>/contact" class="nav-contact">
        <i class="fa-regular fa-envelope"></i>
        <span>Get in Touch</span>
      </a>

    </nav>
  </header>