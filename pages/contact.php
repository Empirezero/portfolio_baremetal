<?php
$pageTitle = 'Contact | Dan Portfolio';
$success   = $_GET['success'] ?? null;
$error     = $_GET['error']   ?? null;
require __DIR__ . '/../partials/header.php';
?>

  <!-- CONTACT -->
  <section id="contact" class="section snap-section">
    <h3 class="section-title">Contact</h3>
    <div class="contact-inner">

      <h4 class="contact-tagline">I have just what you need.</h4>
      <span class="contact-sub">Let Us Talk</span>

      <div class="contact-info">
        <div class="contact-info-item">
          <i class="fa-solid fa-phone pulse-icon"></i>
          <span>+254793669634</span>
        </div>
        <div class="contact-info-item">
          <i class="fa-regular fa-envelope pulse-icon"></i>
          <span>dancanngugi79@gmail.com</span>
        </div>
        <div class="contact-info-item">
          <i class="fa-solid fa-location-dot pulse-icon"></i>
          <span>Rainbow Resort Lane</span>
        </div>
      </div>

      <?php if ($success): ?>
        <p class="form-msg success">✓ Message sent successfully!</p>
      <?php elseif ($error): ?>
        <p class="form-msg error">✗ <?= htmlspecialchars($error) ?></p>
      <?php endif; ?>

      <form action="<?= $baseUrl ?>/contact" method="POST" class="contact-form">
        <div class="form-row">
          <input type="text"  name="name"    placeholder="Name"    class="form-input" required
                 value="<?= htmlspecialchars($_POST['name']    ?? '') ?>"/>
          <input type="email" name="email"   placeholder="Email"   class="form-input" required
                 value="<?= htmlspecialchars($_POST['email']   ?? '') ?>"/>
        </div>
        <input    type="text" name="subject"  placeholder="Subject" class="form-input"
                  value="<?= htmlspecialchars($_POST['subject'] ?? '') ?>"/>
        <textarea             name="message"  placeholder="Message" class="form-input form-textarea"
                  required><?= htmlspecialchars($_POST['message'] ?? '') ?></textarea>
        <button type="submit" class="submit-btn">Send</button>
      </form>

    </div>
  </section>

<?php require __DIR__ . '/../partials/footer.php'; ?>
