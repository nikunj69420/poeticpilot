import { icon, logoMark, btn, WA, EMAIL, PHONE_DELHI, PHONE_BLR, PHONE_ALT, LIVE } from "./ui.mjs";

export const NAV = [
  { label: "About", href: "about.html", key: "about" },
  {
    label: "Programmes",
    key: "programmes",
    items: [
      { label: "PPA Elite Program", href: "elite.html", note: "One mentor, one roadmap — DGCA to airline" },
      { label: "CPL Ground Classes", href: "cpl-ground-classes.html", note: "All DGCA CPL subjects, by airline pilots" },
      { label: "ATPL Ground Classes", href: "atpl.html", note: "Met, Radio & Instruments, General Navigation" },
      { label: "Airline Preparation", href: "airline-prep.html", note: "Written, ADAPT/CUT-E, GD, psychometry, interview" },
    ],
  },
  {
    label: "Flight Training",
    key: "flight",
    items: [
      { label: "Flying Training", href: "flight-training.html", note: "CPL flying in India & abroad" },
      { label: "A320 / B737 Type Rating", href: "type-rating.html", note: "South Africa, with pre & post-type support" },
      { label: "Multi Engine Rating", href: "multi-engine.html", note: "DGCA-approved twin-engine training" },
      { label: "Foreign CPL Conversion", href: "cpl-conversion.html", note: "Paperwork, DGCA exams, conversion flying" },
      { label: "Instructor Rating (AFIR)", href: "instructor-rating.html", note: "Teach, build hours, grow your career" },
    ],
  },
  {
    label: "Cadet",
    key: "cadet",
    items: [
      { label: "Cadet Programmes", href: "cadet.html", note: "How airline cadet pathways work" },
      { label: "IndiGo Cadet Programme", href: "indigo-cadet.html", note: "FTA, Skyborne, Insight, Chimes & more" },
      { label: "Air India Cadet Programme", href: "air-india-cadet.html", note: "India and USA pathways" },
    ],
  },
  { label: "Gallery", href: "gallery.html", key: "gallery" },
  { label: "Blog", href: "blog.html", key: "blog" },
];

const desktopNav = (active) => `
<ul class="nav" role="list">
  ${NAV.map((n) =>
    n.items
      ? `<li>
    <a class="nav-link" href="${n.items[0].href}" aria-haspopup="true"${n.key === active ? ' aria-current="page"' : ""}>${n.label}${icon.chevron}</a>
    <div class="dropdown">
      ${n.items.map((i) => `<a href="${i.href}"><strong>${i.label}</strong><span>${i.note}</span></a>`).join("")}
    </div>
  </li>`
      : `<li><a class="nav-link" href="${n.href}"${n.key === active ? ' aria-current="page"' : ""}>${n.label}</a></li>`,
  ).join("")}
</ul>`;

const mobileNav = () => `
<div class="mobile-menu" id="mobile-menu">
  <nav aria-label="Mobile">
    <ul>
      <li><a class="m-link" href="index.html">Home</a></li>
      ${NAV.map((n, idx) =>
        n.items
          ? `<li>
        <button class="m-link" aria-expanded="false" aria-controls="m-sub-${idx}">${n.label}${icon.plus}</button>
        <div class="m-sub" id="m-sub-${idx}" hidden>${n.items.map((i) => `<a href="${i.href}">${i.label}</a>`).join("")}</div>
      </li>`
          : `<li><a class="m-link" href="${n.href}">${n.label}</a></li>`,
      ).join("")}
      <li><a class="m-link" href="contact.html">Contact</a></li>
    </ul>
  </nav>
  <div class="m-foot">
    ${btn("contact.html", "Request a call back")}
    <a class="btn btn-ghost" href="${LIVE}student-login" target="_blank" rel="noopener"><span>Student login</span>${icon.arrowUpRight}</a>
  </div>
</div>`;

const header = (active) => `
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="index.html" aria-label="Poetic Pilot Academy — home">
      ${logoMark()}
      <span class="brand-name"><strong>Poetic Pilot</strong><span>Academy · DGCA</span></span>
    </a>
    <nav aria-label="Primary">${desktopNav(active)}</nav>
    <div class="header-cta">
      <a class="btn btn-ghost btn-sm" href="${LIVE}student-login" target="_blank" rel="noopener">Student login</a>
      ${btn("contact.html", "Contact", "primary", { sm: true })}
      <button class="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu"><span class="bars"><span></span><span></span></span></button>
    </div>
  </div>
</header>
${mobileNav()}`;

const footer = () => `
<footer class="site-footer tone-dark" data-tone="dark" data-rail-label="Landing">
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="brand" href="index.html" aria-label="Poetic Pilot Academy — home">${logoMark()}<span class="brand-name"><strong>Poetic Pilot</strong><span>Academy · DGCA</span></span></a>
        <p>DGCA-focused ground school and airline preparation, taught by active airline pilots in Delhi, Bengaluru and live online across India.</p>
        <div class="socials">
          <a href="https://www.instagram.com/poeticpilotacademy" target="_blank" rel="noopener" aria-label="Instagram">${icon.instagram}</a>
          <a href="https://www.youtube.com/@PPAClasses" target="_blank" rel="noopener" aria-label="YouTube">${icon.youtube}</a>
          <a href="https://www.linkedin.com/company/poetic-pilot-academy" target="_blank" rel="noopener" aria-label="LinkedIn">${icon.linkedin}</a>
          <a href="${WA}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon.whatsapp}</a>
        </div>
      </div>
      <div>
        <h4>Programmes</h4>
        <ul>
          <li><a href="elite.html">PPA Elite Program</a></li>
          <li><a href="cpl-ground-classes.html">CPL Ground Classes</a></li>
          <li><a href="atpl.html">ATPL Ground Classes</a></li>
          <li><a href="airline-prep.html">Airline Preparation</a></li>
          <li><a href="cadet.html">Cadet Programmes</a></li>
        </ul>
      </div>
      <div>
        <h4>Flight training</h4>
        <ul>
          <li><a href="flight-training.html">Flying Training</a></li>
          <li><a href="type-rating.html">A320 / B737 Type Rating</a></li>
          <li><a href="multi-engine.html">Multi Engine Rating</a></li>
          <li><a href="cpl-conversion.html">CPL Conversion</a></li>
          <li><a href="instructor-rating.html">Instructor Rating</a></li>
        </ul>
      </div>
      <div>
        <h4>Talk to us</h4>
        <ul>
          <li><a href="tel:${PHONE_DELHI}">088003 20787 · Delhi</a></li>
          <li><a href="tel:${PHONE_BLR}">98737 77380 · Bengaluru</a></li>
          <li><a href="tel:${PHONE_ALT}">98737 77381</a></li>
          <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
          <li><a href="contact.html">Visit a base</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-word" aria-hidden="true">Poetic <em>Pilot</em></div>
    <div class="footer-bottom">
      <span>© <span data-year>2026</span> Poetic Pilot Academy. All rights reserved.</span>
      <span><a href="about.html">About</a> · <a href="gallery.html">Gallery</a> · <a href="blog.html">Blog</a> · <a href="contact.html">Contact</a></span>
    </div>
  </div>
</footer>`;

const chrome = () => `
<div class="flight-rail" aria-hidden="true">
  <div class="rail-track"></div>
  <div class="rail-fill"></div>
  <div class="rail-plane">${icon.plane.replace("<svg", '<svg style="transform:rotate(180deg)"')}</div>
  <div class="rail-label">Departure</div>
</div>
<a class="float-wa" href="${WA}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">${icon.whatsapp}</a>
<div class="pt" aria-hidden="true">
  <div class="pt-panel"></div>
  <div class="pt-line"></div>
  ${logoMark("pt-mark")}
</div>`;

export function layout(page) {
  const title = page.title.includes("Poetic Pilot Academy") ? page.title : `${page.title} | Poetic Pilot Academy`;
  return `<!doctype html>
<html lang="en-IN" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${page.description}">
<meta name="theme-color" content="#0b1220">
<link rel="canonical" href="${LIVE}${page.canonical ?? ""}">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${page.description}">
<meta property="og:image" content="assets/video/hero-poster.jpg">
<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
<script>
(function(){var d=document.documentElement;d.classList.remove('no-js');d.classList.add('js','flood');var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;d.classList.add(r?'reduced':'anim');try{if(!r&&sessionStorage.getItem('ppa-pt')==='1'){d.classList.add('is-entering');}sessionStorage.removeItem('ppa-pt');}catch(e){}setTimeout(function(){if(!window.__ppa){d.classList.remove('anim','is-entering','flood');}},4000);})();
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/vendor/lenis.css">
<link rel="stylesheet" href="assets/css/main.css">
</head>
<body class="page-${page.key}">
<a class="skip-link" href="#main">Skip to content</a>
${header(page.nav)}
<main id="main">
${page.body}
</main>
${footer()}
${chrome()}
<script src="assets/vendor/gsap.min.js" defer></script>
<script src="assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="assets/vendor/SplitText.min.js" defer></script>
<script src="assets/vendor/lenis.min.js" defer></script>
<script src="assets/js/main.js" defer></script>
</body>
</html>
`;
}
