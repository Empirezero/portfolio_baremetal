<?php
$pageTitle = 'About | Dan Portfolio';
require __DIR__ . '/../partials/header.php';
?>

  <!-- ABOUT -->
  <section id="about" class="section snap-section">
    <h3 class="section-title">About</h3>
    <div class="about-inner">
      <div class="about-img-wrap">
        <img id="about-img" src="<?= $baseUrl ?>/assets/hero.jpg" alt="Profile" class="about-avatar">
      </div>
      <div class="about-text">
        <h4 id="about-name" class="about-name">Your Name</h4>
        <p  id="about-bio"  class="about-bio">Loading…</p>
      </div>
    </div>
  </section>

<?php require __DIR__ . '/../partials/footer.php'; ?>
