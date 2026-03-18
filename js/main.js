/**
 * main.js — Vanilla JS runtime for Dan's Portfolio
 */

const socialIconMap = {
  github:    "fa-brands fa-github",
  linkedin:  "fa-brands fa-linkedin-in",
  twitter:   "fa-brands fa-x-twitter",
  x:         "fa-brands fa-x-twitter",
  youtube:   "fa-brands fa-youtube",
  instagram: "fa-brands fa-instagram",
  facebook:  "fa-brands fa-facebook-f",
  default:   "fa-solid fa-link",
};

function getSocialIcon(url = "", title = "") {
  const key = (url + title).toLowerCase();
  for (const [name, cls] of Object.entries(socialIconMap)) {
    if (key.includes(name)) return cls;
  }
  return socialIconMap.default;
}

function renderSocials() {
  const container = document.getElementById("nav-socials");
  if (!container) return;
  container.innerHTML = portfolioData.socials
    .map(s => `
      <a href="${s.url}" target="_blank" rel="noopener" class="social-link" title="${s.title}">
        <i class="${getSocialIcon(s.url, s.title)}"></i>
      </a>`)
    .join("");
}

function renderHero() {
  const { pageInfo } = portfolioData;
  const role = document.getElementById("hero-role");
  if (role) role.textContent = pageInfo.role || "Full-Stack Developer";
  startTypewriter();
}

function startTypewriter() {
  const name  = portfolioData.pageInfo.title || "Developer";
  const words = [
    `Hi, my name is ${name}`,
    "I'm a guy who loves gaming",
    "<ButLovesToCodeMore/>",
  ];
  const el = document.getElementById("typewriter");
  if (!el) return;
  let wi = 0, ci = 0, deleting = false;
  function tick() {
    const word = words[wi];
    if (deleting) {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
      setTimeout(tick, 60);
    } else {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(tick, 2000); }
      else setTimeout(tick, 80);
    }
  }
  tick();
}

function renderAbout() {
  const { pageInfo } = portfolioData;
  const name = document.getElementById("about-name");
  const bio  = document.getElementById("about-bio");
  if (name) name.textContent = pageInfo.title || "Your Name";
  if (bio)  bio.textContent  = pageInfo.backgroundInformation || "No background info.";
}

function renderExperience() {
  const track = document.getElementById("experience-track");
  if (!track) return;
  if (!portfolioData.experiences.length) {
    track.innerHTML = `<p style="color:var(--gray);padding:2rem;">No experience added yet.</p>`;
    return;
  }
  track.innerHTML = portfolioData.experiences.map(exp => {
    const start    = new Date(exp.dateStarted).toDateString();
    const end      = exp.isCurrentWorkingHere ? "Present" : new Date(exp.dateEnded).toDateString();
    const techImgs = exp.technologies.map(t =>
      `<img src="${t.image}" alt="${t.title}" title="${t.title}" onerror="this.style.display='none'"/>`
    ).join("");
    const points = exp.points.map(p => `<li>${p}</li>`).join("");
    return `
      <article class="exp-card">
        <img class="exp-company-img" src="${exp.companyImage}" alt="${exp.company}"
             onerror="this.style.background='var(--blue)';this.style.opacity='0.5'"/>
        <h4 class="exp-job-title">${exp.jobTite}</h4>
        <p class="exp-company">${exp.company}</p>
        <div class="exp-tech-icons">${techImgs}</div>
        <p class="exp-dates">${start} — ${end}</p>
        <ul class="exp-points">${points}</ul>
      </article>`;
  }).join("");
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  grid.innerHTML = portfolioData.skills.map((skill, i) => `
    <div class="skill-item" style="animation-delay:${i * 0.05}s">
      <img class="skill-img" src="${skill.image}" alt="${skill.title}"
           onerror="this.src='https://placehold.co/56x56/333/fff?text=${skill.title[0]}'"/>
      <p class="skill-title">${skill.title}</p>
      <p class="skill-progress">${skill.progress ?? "N/A"}%</p>
    </div>`).join("");
}

function renderProjects() {
  const track = document.getElementById("projects-track");
  if (!track) return;
  const total = portfolioData.projects.length;
  if (!total) {
    track.innerHTML = `<p style="color:var(--gray);padding:2rem;">No projects added yet.</p>`;
    return;
  }
  track.innerHTML = portfolioData.projects.map((proj, i) => {
    const techImgs = proj.technologies.map(t =>
      `<img src="${t.image}" alt="${t.title}" title="${t.title}" onerror="this.style.display='none'"/>`
    ).join("");
    const link = proj.linkToBuild
      ? `<a href="${proj.linkToBuild}" target="_blank" class="proj-link">View Project</a>`
      : "";
    return `
      <div class="proj-slide">
        <img class="proj-img" src="${proj.image}" alt="${proj.title}" onerror="this.style.display='none'"/>
        <div class="proj-info">
          <p class="proj-number"><span>Case Study ${i + 1} of ${total}:</span></p>
          <h4 class="proj-title">${proj.title}</h4>
          <div class="proj-tech">${techImgs}</div>
          <p class="proj-summary">${proj.summary}</p>
          ${link}
        </div>
      </div>`;
  }).join("");
}
// ── HAMBURGER MENU ──
function initHamburger() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('mobile-menu--open');
    hamburger.classList.toggle('hamburger--open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('mobile-menu--open');
      hamburger.classList.remove('hamburger--open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('mobile-menu--open');
      hamburger.classList.remove('hamburger--open');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderSocials();
  renderHero();
  renderAbout();
  renderExperience();
  renderSkills();
  renderProjects();
   initHamburger();
});

