<?php
$pageTitle = 'Dan Portfolio';
require __DIR__ . '/../partials/header.php';
?>

  <!-- HERO -->
  <section id="hero" class="section snap-section">
    <div class="bg-circles">
      <div class="circle circle-ping c1"></div>
      <div class="circle circle-ping c2"></div>
      <div class="circle circle-ping c3"></div>
      <div class="circle circle-pulse c4"></div>
      <div class="circle c5"></div>
    </div>
    <div class="hero-content">
      <img id="hero-img" class="hero-avatar" src="<?= $baseUrl ?>/assets/hero.jpg" alt="Profile">
      <p class="hero-role" id="hero-role">Full-Stack Developer</p>
      <h1 class="hero-title">
        <span id="typewriter"></span><span class="cursor">|</span>
      </h1>
      <div class="hero-buttons">
        <a href="<?= $baseUrl ?>/about"    class="hero-btn">About</a>
        <a href="#experience"              class="hero-btn">Experience</a>
        <a href="#skills"                  class="hero-btn">Skills</a>
        <a href="<?= $baseUrl ?>/projects" class="hero-btn">Projects</a>
      </div>
    </div>
  </section>

  <!-- EXPERIENCE -->
  <section id="experience" class="section snap-section">
    <h3 class="section-title">Experience</h3>
    <div class="experience-track" id="experience-track">
      <!-- Injected by JS -->
    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills" class="section snap-section">
    <h3 class="section-title">Skills</h3>
    <p class="skills-hint">Hover over a skill for current proficiency</p>
    <div class="skills-grid" id="skills-grid">
      <!-- Injected by JS -->
    </div>
  </section>

<?php require __DIR__ . '/../partials/footer.php'; ?>
