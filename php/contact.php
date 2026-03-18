<?php
/**
 * php/contact.php — POST /contact handler
 * Validates → sends email → redirects (Post/Redirect/Get pattern)
 */

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . dirname($_SERVER['SCRIPT_NAME']) . '/contact');
    exit;
}

$baseUrl = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/\\');

// ── READ & SANITIZE ──
$name    = trim(filter_input(INPUT_POST, 'name',    FILTER_SANITIZE_SPECIAL_CHARS) ?? '');
$email   = trim(filter_input(INPUT_POST, 'email',   FILTER_SANITIZE_EMAIL)         ?? '');
$subject = trim(filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_SPECIAL_CHARS) ?? 'Portfolio Contact');
$message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS) ?? '');

// ── VALIDATE ──
$errors = [];
if (empty($name))                               $errors[] = "Name is required.";
if (empty($email))                              $errors[] = "Email is required.";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Invalid email address.";
if (empty($message))                            $errors[] = "Message is required.";

if (!empty($errors)) {
    header("Location: {$baseUrl}/contact?error=" . urlencode(implode(' ', $errors)));
    exit;
}

// ── SEND EMAIL ──
$to      = "dancanngugi79@gmail.com";
$headers = implode("\r\n", [
    "From: Portfolio Contact <noreply@danportfolio.com>",
    "Reply-To: {$name} <{$email}>",
    "Content-Type: text/plain; charset=UTF-8",
    "X-Mailer: PHP/" . phpversion(),
]);

$body = "New message from your portfolio:\n\n"
      . "Name:    {$name}\n"
      . "Email:   {$email}\n"
      . "Subject: {$subject}\n\n"
      . "Message:\n{$message}\n\n"
      . "---\nSent from Dan's Portfolio";

$sent = mail($to, "Portfolio: {$subject}", $body, $headers);

header($sent
    ? "Location: {$baseUrl}/contact?success=1"
    : "Location: {$baseUrl}/contact?error=" . urlencode("Failed to send. Please email directly.")
);
exit;
?>
