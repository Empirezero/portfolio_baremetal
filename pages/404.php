<?php
$pageTitle = '404 | Dan Portfolio';
require __DIR__ . '/../partials/header.php';
?>

  <section class="section" style="text-align:center">
    <h1 style="font-family:var(--font-display);font-size:clamp(4rem,15vw,9rem);color:var(--gold);opacity:0.12;line-height:1">404</h1>
    <h2 style="font-family:var(--font-display);font-size:1.4rem;margin-bottom:1rem">Page Not Found</h2>
    <p style="color:var(--gray);margin-bottom:2rem;font-size:0.88rem">The page you're looking for doesn't exist.</p>
    <a href="<?= $baseUrl ?>/" class="proj-link">← Back Home</a>
  </section>

<?php require __DIR__ . '/../partials/footer.php'; ?>
