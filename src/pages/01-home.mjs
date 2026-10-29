import { UP, LIVE, icon, btn, linkArrow, eyebrow, sectionHead, featureCard, ctaBand, basesBlock, img, marqueePosters } from "../ui.mjs";

const programmes = [
  {
    num: "01",
    title: "PPA Elite Program",
    text: "Start-to-end mentorship — DGCA computer number, ground classes, medicals, flying school, ATPL and airline selection under one roadmap.",
    tags: ["8 career phases", "End-to-end"],
    href: "elite.html",
    featured: true,
  },
  {
    num: "02",
    title: "CPL Ground Classes",
    text: "Air Navigation, Meteorology, Regulations, Technical General and RTR — taught by active airline pilots with DGCA-pattern mock tests.",
    tags: ["Delhi", "Bengaluru", "Live online"],
    href: "cpl-ground-classes.html",
  },
  {
    num: "03",
    title: "ATPL Ground Classes",
    text: "ATPL-level Meteorology, Radio & Instruments and General Navigation, with guided mock orals for the written + oral papers.",
    tags: ["Written + oral"],
    href: "atpl.html",
  },
  {
    num: "04",
    title: "Airline Preparation",
    text: "Written exams, COMPASS / CUT-E / ADAPT, group discussion, psychometry and one-on-one mock interviews with airline pilots.",
    tags: ["300+ selections in 24 months"],
    href: "airline-prep.html",
  },
  {
    num: "05",
    title: "Cadet Preparation",
    text: "Aptitude, psychometric and interview coaching for the IndiGo and Air India cadet pilot programmes, plus documentation support.",
    tags: ["IndiGo", "Air India"],
    href: "cadet.html",
  },
];

const fame = [
  ["2026/10/fame1.jpg", "All India Topper — Harshit, 90/100 in Technical General"],
  ["2026/10/fame2.jpg", "Hall of Fame — All India Topper"],
  ["2026/10/fame3.jpg", "Hall of Fame — All India Topper"],
  ["2026/10/fame4.jpg", "Hall of Fame — All India Topper"],
  ["2026/10/fame5.jpg", "Hall of Fame — All India Topper"],
  ["cplgc/result-1.webp", "DGCA results — top achievers"],
];
const airline = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => [`2026/10/airline${n}.jpg`, "Airline-selected Poetic Pilot Academy student"]);

export default {
  file: "index.html",
  key: "home",
  nav: "",
  canonical: "",
  title: "DGCA CPL Ground Classes & Pilot Training in India | Poetic Pilot Academy",
  description:
    "DGCA CPL ground classes, ATPL, airline interview preparation and cadet coaching taught by active airline pilots. Delhi, Bengaluru and live online across India.",
  body: `
<section class="hero tone-dark" data-tone="dark" data-hero data-hero-carry data-rail-label="Departure">
  <div class="hero-media" aria-hidden="true">
    <video data-autoplay autoplay muted loop playsinline preload="auto" poster="assets/video/hero-poster.jpg">
      <source src="assets/video/hero-loop.webm" type="video/webm">
      <source src="assets/video/hero-loop.mp4" type="video/mp4">
    </video>
  </div>
  <div class="hero-content wrap">
    <a class="tag" href="contact.html" data-hero-item data-reveal style="border-color:rgba(244,241,234,.24);color:var(--cream)"><span style="width:8px;height:8px;border-radius:50%;background:var(--gold-400)"></span>Now in Bengaluru — visit our new Aswathnagar base</a>
    <div style="margin-top:28px" data-hero-item data-reveal>${eyebrow("DGCA ground school · Delhi · Bengaluru · Online")}</div>
    <h1 data-split>DGCA pilot training, <em>taught by airline pilots.</em></h1>
    <p class="lead" data-hero-item data-reveal>CPL and ATPL ground classes, airline interview preparation and personal mentorship — built strictly on the DGCA syllabus and real airline selection standards.</p>
    <div class="actions" data-hero-item data-reveal>
      ${btn("#programmes", "Explore programmes", "primary", { magnetic: true })}
      ${btn("contact.html", "Request a call back", "ghost", { noArrow: true })}
    </div>
    <div class="hero-meta" data-hero-item data-reveal>
      <div><strong>1000+</strong><span>students trained</span></div>
      <div><strong>300+</strong><span>airline selections in 24 months</span></div>
      <div><strong>Toppers</strong><span>All India toppers, paper after paper</span></div>
      <div><strong>2 + live</strong><span>bases and online classes</span></div>
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="About">
  <div class="wrap">
    <div class="split wide-left">
      <div class="stack">
        <div data-reveal="fade">${eyebrow("Who we are")}</div>
        <h2 data-split>A ground school built around one thing — <em>clarity.</em></h2>
        <div class="prose" data-reveal>
          <p>Poetic Pilot Academy is a DGCA-focused aviation academy specialising in <strong>CPL ground classes, airline interview preparation</strong> and structured pilot training. Every course and practice resource follows the DGCA syllabus and airline selection standards.</p>
          <p>From CPL theory to airline-specific preparation like A320 systems, we combine classroom training, mentorship and free no-login practice question banks used by pilot candidates across India.</p>
        </div>
        <div class="actions" data-reveal>${linkArrow("about.html", "Read our story")}</div>
      </div>
      <figure class="media ratio-4x5" data-img-reveal>
        ${img(UP + "2026/06/IMG_9643.jpeg", "A full classroom of student pilots during a DGCA ground class at Poetic Pilot Academy")}
        <figcaption class="media-badge"><b>All India toppers</b> batch after batch</figcaption>
      </figure>
    </div>
    <div class="stats" style="margin-top:clamp(56px,8vw,112px)" data-stagger>
      <div class="stat"><strong><span data-count="1000">1000</span><sup>+</sup></strong><span>Students trained across India</span></div>
      <div class="stat"><strong><span data-count="300">300</span><sup>+</sup></strong><span>Airline selections in the last 24 months</span></div>
      <div class="stat"><strong><span data-count="7000">7000</span><sup>+</sup></strong><span>Flight hours behind our lead instructors</span></div>
      <div class="stat"><strong><span data-count="5">5</span></strong><span>Flying destinations we guide students to</span></div>
    </div>
  </div>
</section>

<section class="section tone-dark" id="programmes" data-tone="dark" data-rail-section data-rail-label="Programmes">
  <div class="wrap">
    ${sectionHead({
      kicker: "Programmes",
      title: "Five programmes. <em>One flight path.</em>",
      lead: "Pick the stage you are at — or let the Elite Program carry you through all of them, from your first DGCA application to airline selection.",
      layout: "split",
    })}
  </div>
  <div class="rail-wrap">
    <div class="wrap">
      <div class="rail">
        ${programmes
          .map(
            (p) => `
        <a class="card program${p.featured ? " featured" : ""}" href="${p.href}">
          <span class="program-num">${p.num} / 05</span>
          <h3>${p.title}</h3>
          <p>${p.text}</p>
          <div class="program-meta">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
          <div class="program-foot"><strong>Know more</strong><span class="program-arrow">${icon.arrow}</span></div>
        </a>`,
          )
          .join("")}
      </div>
    </div>
  </div>
</section>

<section class="section-tight tone-dark" data-tone="dark" aria-hidden="true">
  <div class="marquee text-marquee" data-marquee data-speed="60">
    <div class="marquee-track">
      <span>DGCA <em>CPL</em></span><i class="dot"></i><span>ATPL</span><i class="dot"></i><span>A320 <em>systems</em></span><i class="dot"></i><span>ADAPT · CUT-E · COMPASS</span><i class="dot"></i><span>Cadet <em>prep</em></span><i class="dot"></i><span>RTR</span><i class="dot"></i>
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Why PPA">
  <div class="wrap">
    ${sectionHead({
      kicker: "Why pilots choose PPA",
      title: "Trusted by pilots <em>across India.</em>",
      lead: "Real classrooms, real airline pilots and results you can check — every programme is mapped to DGCA standards and airline selection criteria.",
      layout: "split",
    })}
    <div class="grid grid-3" data-stagger>
      ${featureCard({ ic: "plane", title: "Taught by airline pilots", text: "Train under airline pilots with 10+ years of teaching and operational experience on modern commercial jets." })}
      ${featureCard({ ic: "star", title: "Top DGCA results", text: "1000+ students trained, consistent All India toppers and airline selections every recruitment cycle." })}
      ${featureCard({ ic: "book", title: "DGCA-aligned curriculum", text: "Programmes and practice material follow the DGCA syllabus and exam pattern, updated as the pattern changes." })}
      ${featureCard({ ic: "users", title: "Real classroom training", text: "Offline ground classes in Delhi and Bengaluru with small batches, plus interactive live online classes." })}
      ${featureCard({ ic: "target", title: "Personal mentorship", text: "One-to-one guidance, doubt sessions and interview preparation — you always know your next step." })}
      ${featureCard({ ic: "chart", title: "Complete ground training", text: "A structured programme mapped to DGCA PPL, CPL and ATPL as well as airline selection standards." })}
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="Hall of Fame">
  <div class="wrap">
    ${sectionHead({
      kicker: "Hall of Fame",
      title: "Our All India toppers <em>and airline pilots.</em>",
      lead: "Every poster is a student who sat in our classrooms. Toppers in DGCA papers, cadets selected by IndiGo and Air India, and pilots flying the line today.",
      layout: "split",
    })}
  </div>
  <div class="stack" style="--gap:20px">
    ${marqueePosters(fame, { speed: 34, label: "All India toppers" })}
    ${marqueePosters(airline, { speed: 34, reverse: true, label: "Airline-selected candidates" })}
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Instructors">
  <div class="wrap">
    <div class="split top">
      <div class="stack" style="position:sticky;top:calc(var(--header-h) + 32px)">
        <div data-reveal="fade">${eyebrow("Your instructors")}</div>
        <h2 data-split>Learn from pilots who <em>fly the line.</em></h2>
        <p class="lead" data-reveal>All ground training and mentorship is led by experienced airline pilots with thousands of flight hours. They bring real operations, cockpit decision-making and current industry practice into every DGCA class.</p>
        <div class="actions" data-reveal>${btn("about.html#instructors", "Meet all instructors", "ink")}</div>
      </div>
      <div class="grid grid-2" data-stagger>
        <article class="person">
          <div class="media">${img(UP + "aboutus/mentor1.JPG", "Captain Mohit Teotia")}</div>
          <span class="role">Founder · Nav &amp; Met</span>
          <h3>Capt. Mohit Teotia</h3>
          <p>Line Training Captain with 7,000+ flight hours.</p>
        </article>
        <article class="person" style="margin-top:clamp(0px,6vw,80px)">
          <div class="media">${img(UP + "aboutus/mentor2.jpg", "Captain Nikhil")}</div>
          <span class="role">B737 · Technical</span>
          <h3>Capt. Nikhil</h3>
          <p>B737 expert with 7,000+ flight hours.</p>
        </article>
        <article class="person">
          <div class="media">${img(UP + "aboutus/mentor3.jpg", "Captain Sakshi")}</div>
          <span class="role">Radio Telephony</span>
          <h3>Capt. Sakshi</h3>
          <p>RTR specialist with an individual approach.</p>
        </article>
        <article class="person" style="margin-top:clamp(0px,6vw,80px)">
          <div class="media">${img(UP + "aboutus/mentor5.jpg", "Captain Unnati")}</div>
          <span class="role">Air Regulations</span>
          <h3>Capt. Unnati</h3>
          <p>100+ pilots mentored with a flawless pass record.</p>
        </article>
      </div>
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Resources">
  <div class="wrap">
    ${sectionHead({
      kicker: "A complete learning ecosystem",
      title: "Classroom, mentor <em>and practice</em> — in one place.",
      layout: "center",
    })}
    <div class="grid grid-3" data-stagger>
      ${featureCard({ ic: "compass", num: "CLASSROOM", title: "CPL Ground Classes", text: "Structured DGCA CPL ground training covering Air Regulations, Meteorology, Navigation, Technical General and RTR.", href: "cpl-ground-classes.html", cta: "DGCA CPL ground classes" })}
      ${featureCard({ ic: "plane", num: "AIRLINE", title: "Airline & A320 preparation", text: "System-based A320 practice questions, technical interviews and selection-focused guidance for airline drives.", href: "airline-prep.html", cta: "Airline preparation" })}
      ${featureCard({ ic: "doc", num: "FREE", title: "Free practice question banks", text: "No-login DGCA and airline practice question banks built for serious candidates preparing for exams and interviews.", href: LIVE + "a320-question-bank", cta: "Open A320 question bank" })}
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="Life at PPA">
  <div class="wrap">
    ${sectionHead({
      kicker: "Life at PPA",
      title: "Classrooms, simulators <em>and first solos.</em>",
      lead: "Classroom sessions, ATC visits, cricket tournaments, results days and the moments our students earn their wings.",
      layout: "split",
    })}
    <div class="grid" style="grid-template-columns:repeat(12,1fr);gap:16px">
      <figure class="media" style="grid-column:span 12;aspect-ratio:16/9" data-parallax="14" data-reveal="fade">${img(UP + "2026/07/july-batch.jpeg", "July batch in a ground class")}</figure>
      <figure class="media ratio-1" style="grid-column:span 6" data-parallax="10" data-reveal="fade">${img(UP + "2026/07/atc-delhi-visit.jpeg", "Students on an ATC Delhi visit")}</figure>
      <figure class="media ratio-1" style="grid-column:span 6" data-parallax="10" data-reveal="fade">${img(UP + "2026/07/first-solo-flight-congratulations.jpeg", "A student celebrating their first solo flight")}</figure>
    </div>
    <div class="actions" style="justify-content:center;margin-top:48px" data-reveal>${btn("gallery.html", "View the full gallery", "ghost")}</div>
  </div>
  <div style="margin-top:clamp(56px,8vw,96px)">
    ${marqueePosters(
      [
        ["2026/10/Poetic-Pilot-Academy-New-Batch-Flyer.png", "New batch announcement"],
        ["2026/10/latest3.jpg", "Latest update from PPA"],
        ["2026/10/AUGUST-BATCH.png", "August batch"],
        ["2026/10/JUNE-BATCH.png", "June batch"],
        ["2026/10/latest5.jpg", "Latest update from PPA"],
        ["2026/10/JULY-BATCH.png", "July batch"],
        ["2026/10/MAY-BATCH.png", "May batch"],
        ["2026/10/APRIL-BATCH.png", "April batch"],
        ["2026/10/latest1.png", "Latest update from PPA"],
      ],
      { speed: 28, label: "Latest updates" },
    )}
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Bases">
  <div class="wrap">
    ${sectionHead({
      kicker: "Our training bases",
      title: "Two bases. <em>One standard.</em>",
      lead: "Walk into a classroom in Delhi or Bengaluru — or join the same live classes online from anywhere in India.",
      layout: "split",
    })}
    ${basesBlock()}
  </div>
</section>

${ctaBand({
  title: "Ready for <em>take-off?</em>",
  text: "Request a call back and our team will help you pick the right programme, batch and base for where you are in your pilot journey.",
})}
`,
};
