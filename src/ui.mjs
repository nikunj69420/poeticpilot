// Shared building blocks for every page. Pages compose these; nothing is styled inline.

export const UP = "https://poeticpilotacademy.com/wp-content/uploads/";
export const LIVE = "https://poeticpilotacademy.com/";

export const PHONE_DELHI = "08800320787";
export const PHONE_BLR = "9873777380";
export const PHONE_ALT = "9873777381";
export const WA = "https://wa.me/918800320787";
export const EMAIL = "info@poeticpilotacademy.com";

const svg = (body, vb = "0 0 24 24", extra = "") =>
  `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${body}</svg>`;

export const icon = {
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  arrowUpRight: svg('<path d="M7 17L17 7M8 7h9v9"/>'),
  chevron: svg('<path d="M6 9l6 6 6-6"/>'),
  plus: svg('<path d="M12 5v14M5 12h14"/>'),
  close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  left: svg('<path d="M15 6l-6 6 6 6"/>'),
  right: svg('<path d="M9 6l6 6-6 6"/>'),
  phone: svg('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/>'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
  pin: svg('<path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
  compass: svg('<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>'),
  cloud: svg('<path d="M7 18h10a4 4 0 00.6-7.96A6 6 0 006.2 9.1 4.5 4.5 0 007 18z"/>'),
  book: svg('<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 19V5"/><path d="M9 7h6"/>'),
  gear: svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>'),
  headset: svg('<path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20a3 3 0 01-3 2h-3"/>'),
  plane: svg('<path d="M21 15.5v-2l-8-5V4a1.5 1.5 0 00-3 0v4.5l-8 5v2l8-2.5V18l-2 1.5V21l3.5-1 3.5 1v-1.5L13 18v-5z"/>'),
  shield: svg('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'),
  users: svg('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0"/><path d="M16 4.5a3.5 3.5 0 010 7M21.5 20a6.5 6.5 0 00-4-6"/>'),
  target: svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
  star: svg('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'),
  clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  doc: svg('<path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>'),
  globe: svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>'),
  chart: svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
  heart: svg('<path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z"/>'),
  mic: svg('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>'),
  whatsapp:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.3-.4.7-1.4a.5.5 0 000-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.2 2.2 2.2 0 00.1-1.3c0-.1-.2-.2-.5-.3z"/></svg>',
  instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>'),
  youtube: svg('<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/>'),
  linkedin: svg('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7"/>'),
};

export const logoMark = (cls = "brand-mark") => `
<svg class="${cls}" viewBox="0 0 120 40" aria-hidden="true">
  <g fill="#F5C518">
    <path d="M4 11h38l-3.2 4.4H8.6z"/><path d="M11 18.6h29l-3.2 4.4H15.6z"/><path d="M18 26.2h20l-3.2 4.4H22.6z"/>
    <path d="M116 11H78l3.2 4.4h30.2z"/><path d="M109 18.6H80l3.2 4.4h21.2z"/><path d="M102 26.2H82l3.2 4.4h12.2z"/>
    <path d="M47 5h26l4 4.5v14.8L60 37 43 24.3V9.5z"/>
  </g>
  <path fill="#0B1220" fill-rule="evenodd" d="M54 11h8.6a6 6 0 010 12H58.4v7.6H54zm4.4 3.8v4.4h3.8a2.2 2.2 0 000-4.4z"/>
</svg>`;

export const btn = (href, label, variant = "primary", opts = {}) => {
  const ext = /^https?:/.test(href) && !href.startsWith(LIVE + "#") ? ' target="_blank" rel="noopener"' : "";
  const mag = opts.magnetic ? " data-magnetic" : "";
  const arrow = opts.noArrow ? "" : icon.arrow;
  const ico = opts.icon ? icon[opts.icon] : "";
  return `<a class="btn btn-${variant}${opts.sm ? " btn-sm" : ""}" href="${href}"${ext}${mag}>${ico}<span>${label}</span>${opts.icon ? "" : arrow}</a>`;
};

export const linkArrow = (href, label) => {
  const ext = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
  return `<a class="link-arrow" href="${href}"${ext}>${label}${icon.arrow}</a>`;
};

export const eyebrow = (t) => `<span class="eyebrow">${t}</span>`;

export const sectionHead = ({ kicker, title, lead, layout = "", reveal = true }) => `
<div class="section-head ${layout}">
  <div class="stack">
    ${kicker ? `<div data-reveal="fade">${eyebrow(kicker)}</div>` : ""}
    <h2 data-split>${title}</h2>
  </div>
  ${lead ? `<p class="lead"${reveal ? ' data-reveal="fade"' : ""}>${lead}</p>` : ""}
</div>`;

export const pageHero = ({ crumbs = [], kicker, title, lead, actions = "", tags = [] }) => `
<section class="page-hero tone-dark" data-tone="dark" data-hero data-rail-label="${crumbs.length ? crumbs[crumbs.length - 1][0] : "Overview"}">
  <div class="hero-media" aria-hidden="true">
    <video data-autoplay autoplay muted loop playsinline preload="metadata" poster="assets/video/hero-poster.jpg">
      <source src="assets/video/hero-loop.webm" type="video/webm">
      <source src="assets/video/hero-loop.mp4" type="video/mp4">
    </video>
  </div>
  <div class="wrap">
    <nav aria-label="Breadcrumb" data-hero-item data-reveal><ol class="crumbs"><li><a href="index.html">Home</a></li>${crumbs
      .map(([label, href]) => `<li>${href ? `<a href="${href}">${label}</a>` : `<span aria-current="page">${label}</span>`}</li>`)
      .join("")}</ol></nav>
    ${kicker ? `<div style="margin-top:28px" data-hero-item data-reveal>${eyebrow(kicker)}</div>` : ""}
    <h1 data-split>${title}</h1>
    ${lead ? `<p class="lead" data-hero-item data-reveal>${lead}</p>` : ""}
    ${tags.length ? `<div class="hero-tags" data-hero-item data-reveal>${tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>` : ""}
    ${actions ? `<div class="actions" data-hero-item data-reveal>${actions}</div>` : ""}
  </div>
</section>`;

export const ticks = (items) => `<ul class="ticks">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

export const featureCard = ({ ic, title, text, num, href, cta }) => `
<${href ? `a href="${href}"` : "div"} class="card${href ? "" : ""}">
  ${ic ? `<div class="icon-badge">${icon[ic]}</div>` : ""}
  ${num ? `<span class="card-index">${num}</span>` : ""}
  <h3>${title}</h3>
  <p>${text}</p>
  ${cta ? `<div class="card-foot"><span class="link-arrow">${cta}${icon.arrow}</span></div>` : ""}
</${href ? "a" : "div"}>`;

export const journey = (steps) => `
<div class="journey" data-journey>
  <div class="journey-line" aria-hidden="true"><i></i></div>
  ${steps
    .map(
      (s, i) => `
  <div class="step">
    <div class="step-dot">${String(i + 1).padStart(2, "0")}</div>
    <div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </div>
  </div>`,
    )
    .join("")}
</div>`;

export const faq = (items) => `
<div class="faq">
  ${items
    .map(
      (q) => `
  <details>
    <summary>${q.q}<i aria-hidden="true"></i></summary>
    <div class="faq-body"><p>${q.a}</p></div>
  </details>`,
    )
    .join("")}
</div>`;

export const facts = (rows) => `<dl class="facts">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>`;

export const ctaBand = ({ title, text, primary = ["contact.html", "Request a call back"], secondary = [WA, "WhatsApp us"] }) => `
<section class="section-tight" data-rail-label="Get started">
  <div class="wrap">
    <div class="cta-band" data-reveal="scale">
      <svg class="cta-route" viewBox="0 0 560 300" fill="none" aria-hidden="true">
        <path d="M20 250 C 160 40, 400 40, 540 200" stroke="#0B1220" stroke-opacity=".22" stroke-width="2" stroke-dasharray="3 10" stroke-linecap="round"/>
        <circle cx="20" cy="250" r="7" stroke="#0B1220" stroke-width="2"/>
        <circle cx="540" cy="200" r="7" fill="#0B1220"/>
        <path d="M296 84l14-6-4 15-4-5z" fill="#0B1220"/>
      </svg>
      <h2 data-split>${title}</h2>
      <p>${text}</p>
      <div class="actions">
        ${btn(primary[0], primary[1], "ink", { magnetic: true })}
        <a class="btn btn-ghost" href="${secondary[0]}" target="_blank" rel="noopener">${icon.whatsapp}<span>${secondary[1]}</span></a>
      </div>
    </div>
  </div>
</section>`;

export const basesBlock = () => `
<div class="grid grid-2" data-stagger>
  <article class="base">
    <span class="base-code">VIDP · BASE 01</span>
    <h3>Delhi — Dwarka</h3>
    <address>1st floor, A-41 &amp; 42, Ramphal Chowk Rd, Chandar Vihar, Block B, Sector 7, Dwarka, New Delhi 110077</address>
    <div class="actions">
      ${btn("tel:" + PHONE_DELHI, "088003 20787", "primary", { sm: true, icon: "phone" })}
      <a class="btn btn-ghost btn-sm" href="https://maps.app.goo.gl/dgEprShcNSjqBDhv7" target="_blank" rel="noopener">${icon.pin}<span>Directions</span></a>
    </div>
  </article>
  <article class="base">
    <span class="base-code">VOBL · BASE 02</span>
    <h3>Bengaluru — Aswathnagar</h3>
    <address>1st Floor, Daffodil Building, 2/6 80 Feet Road, opposite Nethra Eye Hospital, Aswathnagar, Bengaluru 560094</address>
    <div class="actions">
      ${btn("tel:" + PHONE_BLR, "98737 77380", "primary", { sm: true, icon: "phone" })}
      <a class="btn btn-ghost btn-sm" href="https://www.google.com/maps/search/?api=1&query=Poetic+Pilot+Academy+Bangalore" target="_blank" rel="noopener">${icon.pin}<span>Directions</span></a>
    </div>
  </article>
</div>`;

export const img = (src, alt, { lazy = true, w, h } = {}) =>
  `<img src="${src}" alt="${alt}"${lazy ? ' loading="lazy"' : ""} decoding="async"${w ? ` width="${w}"` : ""}${h ? ` height="${h}"` : ""}>`;

export const marqueePosters = (srcs, { reverse = false, speed = 40, label = "" } = {}) => `
<div class="marquee" data-marquee data-speed="${speed}"${reverse ? " data-reverse" : ""} role="region" aria-label="${label}">
  <div class="marquee-track">
    ${srcs.map(([s, alt]) => `<div class="poster">${img(UP + s, alt)}</div>`).join("")}
  </div>
</div>`;
