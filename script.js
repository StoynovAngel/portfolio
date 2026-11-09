const LINKEDIN_URL = 'https://www.linkedin.com/in/angel-stoynov/';

const SKILL_GROUPS = [
  {
    title: 'Backend',
    items: [
      { name: 'Java', level: 'pro' },
      { name: 'Spring Boot', level: 'pro' },
      { name: 'Python', level: 'adv' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'JavaScript', level: 'fund' },
      { name: 'TypeScript', level: 'fund' },
      { name: 'React', level: 'adv' },
      { name: 'React Native', level: 'adv' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'HanaDB', level: 'pro' },
      { name: 'PostgreSQL', level: 'adv' },
      { name: 'MongoDB', level: 'fund' },
      { name: 'MySQL', level: 'fund' },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Jenkins', level: 'adv' },
      { name: 'Docker', level: 'adv' },
      { name: 'Azure', level: 'fund' },
    ],
  },
  {
    title: 'Security (SAST & SCA)',
    items: [
      { name: 'CodeQL', level: 'pro' },
      { name: 'Mend', level: 'pro' },
      { name: 'BlackDuck', level: 'pro' },
      { name: 'Sirius', level: 'pro' },
      { name: 'SonarCloud', level: 'pro' },
    ],
  },
  {
    title: 'AI & ML',
    items: [
      { name: 'Generative AI Hub', level: 'adv' },
      { name: 'SAP AI Core', level: 'adv' },
      { name: 'Prompt Engineering', level: 'adv' },
    ],
  },
];

const PROJECTS = [
  {
    title: 'XSUAA-for-XSA',
    badge: 'SECURITY',
    badgeModifier: 'project__badge--fork',
    module: 'uaa-security.war',
    desc: "SAP's fork of Cloudfoundry UAA running the OAuth2 / OIDC / SAML identity layer on SAP HANA for the on-premise XSA platform. I ship auth, token issuance and SAML SP code, and added CSRF protection to the hana-oidc module across its X.509 and Kerberos SSO flows.",
    tags: ['Java 21', 'Spring Security 6', 'OpenSAML', 'SAP HANA', 'Flyway'],
  },
  {
    title: 'SBSS',
    badge: 'PLATFORM',
    badgeModifier: '',
    module: 'service-broker',
    desc: 'Service-broker security component. I migrated it to Java 21 and assumed ownership of its CI/CD toolchain, wiring JaCoCo coverage into the main pipeline.',
    tags: ['Java 21', 'Jenkins', 'JaCoCo', 'CI/CD'],
  },
  {
    title: 'XSA Cockpit API',
    badge: 'FEATURE',
    badgeModifier: '',
    module: 'uaa-security',
    desc: 'Paginated REST endpoint consumed by the XSA Cockpit admin UI, built on the UAA core with the standard controller/service/repository layering.',
    tags: ['Java', 'Spring MVC', 'REST', 'Pagination'],
  },
  {
    title: 'AutoNow',
    badge: 'DIPLOMA',
    badgeModifier: '',
    module: 'Personal project',
    desc: 'My diploma project: a vehicle-ordering platform with two front ends - a React Native mobile app for customers to order different types of vehicles, and a web admin panel where staff process those orders. Java / Spring Boot back end, containerised with Docker. The one project here whose source is fully open, with the API surface browsable online.',
    tags: ['TypeScript', 'Java', 'Spring Boot', 'Docker'],
    links: [
      { label: 'Source', url: 'https://github.com/StoynovAngel/AutoNow' },
      { label: 'API docs', url: 'https://stoynovangel.github.io/AutoNow/' },
    ],
  },
];

const CERTS = [
  { title: 'Google AI Professional Certificate', issuer: 'Google · Coursera', date: 'Oct 2026', note: '8-course program', file: 'assets/certs/google-ai-professional.pdf' },
  { title: 'Google AI Fundamentals', issuer: 'Coursera', date: 'Oct 2026', note: 'Credly badge', file: 'assets/certs/google-ai-fundamentals.pdf' },
  { title: 'Google AI for App Building', issuer: 'Coursera', date: 'Oct 2026', note: 'Credly badge', file: 'assets/certs/google-ai-app-building.pdf' },
  { title: 'Introduction to Generative AI Hub in SAP AI Core', issuer: 'SAP', date: 'Nov 2026', note: '', file: 'assets/certs/sap-genai-hub.pdf' },
  { title: 'Delivering Responsible AI at SAP', issuer: 'SAP', date: 'Nov 2026', note: 'Ethics, security, compliance', file: 'assets/certs/sap-responsible-ai.pdf' },
  { title: 'Efficient AI Development: A Token-Conscious Approach', issuer: 'SAP', date: 'Nov 2026', note: '', file: 'assets/certs/sap-efficient-ai.pdf' },
  { title: 'Joule Work Desktop - Your AI Assistant', issuer: 'SAP', date: 'Nov 2026', note: '', file: 'assets/certs/sap-joule-desktop.pdf' },
  { title: 'Introduction to Python', issuer: 'JetBrains', date: 'Nov 2026', note: '', file: 'assets/certs/jetbrains-python.pdf' },
];

const setLinkedInLinks = () =>
  document.querySelectorAll('[data-link="linkedin"]').forEach((a) => (a.href = LINKEDIN_URL));

const renderSkills = () => {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = SKILL_GROUPS.map(
    (group) => `<div class="skill-group"><h3>${group.title}</h3><div class="skill-tags">${group.items
      .map((item) => `<span class="skill-tag" data-level="${item.level}">${item.name}</span>`)
      .join('')}</div></div>`
  ).join('');
};

const renderSkillLegend = () => {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  const legendHtml = `<div class="skill-legend">
  <span class="legend-item"><span class="skill-tag" data-level="pro">Professional</span></span>
  <span class="legend-item"><span class="skill-tag" data-level="adv">Advanced</span></span>
  <span class="legend-item"><span class="skill-tag" data-level="fund">Fundamental</span></span>
</div>`;
  grid.insertAdjacentHTML('beforebegin', legendHtml);
};

const renderProjectLegend = () => {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  const legendHtml = `<div class="project-legend">
  <span class="legend-item"><span class="project__badge">Standard project</span></span>
  <span class="legend-item"><span class="project__badge project__badge--fork">Upstream fork</span></span>
</div>`;
  grid.insertAdjacentHTML('beforebegin', legendHtml);
};

const renderProjects = () => {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(
    (project) => `<article class="project">
  <div class="project__top">
    <span class="project__badge${project.badgeModifier ? ` ${project.badgeModifier}` : ''}">${project.badge}</span>
    <span class="project__module">${project.module}</span>
  </div>
  <h3 class="project__title">${project.title}</h3>
  <p class="project__desc">${project.desc}</p>
  <div class="project__tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>${
    project.links && project.links.length
      ? `
  <div class="project__links">${project.links
    .map((link) => `<a class="project__link" href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`)
    .join('')}</div>`
      : ''
  }
</article>`
  ).join('');
};

const renderCerts = () => {
  const strip = document.getElementById('cert-strip');
  if (!strip) return;
  strip.innerHTML = CERTS.map(
    (cert) => `<a class="cert" role="listitem" href="${cert.file}" target="_blank" rel="noopener">
  <span class="cert__issuer">${cert.issuer}</span>
  <span class="cert__title">${cert.title}</span>
  <span class="cert__foot">${cert.date}${cert.note ? ` · ${cert.note}` : ''}</span>
</a>`
  ).join('');
};

const initNavToggle = () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove('nav--open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
};

const initActiveNav = () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const ids = ['work', 'skills', 'projects', 'certs', 'about'];
  const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      nav.querySelectorAll('a').forEach((link) => link.classList.remove('is-active'));
      const active = nav.querySelector(`a[href="#${visible.target.id}"]`);
      if (active) active.classList.add('is-active');
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
};

const initScrollReveal = () => {
  const elements = document.querySelectorAll('.sr');
  if (!elements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((el) => el.classList.add('sr--in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('sr--in');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
};

const initCopyEmail = () => {
  const link = document.querySelector('.js-copy-email');
  const toast = document.querySelector('.toast');
  if (!link) return;

  link.addEventListener('click', async function (event) {
    event.preventDefault();
    const email = this.dataset.email;
    try {
      if (!navigator.clipboard) throw new Error('clipboard unavailable');
      await navigator.clipboard.writeText(email);
      if (toast) {
        toast.textContent = `Copied ${email}`;
        toast.classList.add('toast--show');
        setTimeout(() => toast.classList.remove('toast--show'), 1800);
      }
    } catch {
      window.location.href = this.href;
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setLinkedInLinks();
  renderSkillLegend();
  renderSkills();
  renderProjectLegend();
  renderProjects();
  renderCerts();
  initNavToggle();
  initActiveNav();
  initScrollReveal();
  initCopyEmail();
});
