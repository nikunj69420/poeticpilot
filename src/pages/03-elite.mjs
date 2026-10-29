import { eyebrow, sectionHead, pageHero, btn, featureCard, ctaBand, journey, basesBlock, WA, icon } from "../ui.mjs";

export default {
  file: "elite.html",
  key: "elite",
  nav: "programmes",
  canonical: "poetic-pilot-academy-elite-program",
  title: "PPA Elite Program — Complete Pilot Career Mentorship",
  description: "PPA Elite: one mentor and one roadmap from DGCA computer number and ground classes to medicals, flying school, ATPL and airline selection.",
  body: `
${pageHero({
  crumbs: [["Programmes", "elite.html"], ["Elite Program"]],
  kicker: "Complete aviation mentorship",
  title: "PPA Elite — your <em>complete</em> pilot career roadmap.",
  lead: "From DGCA computer number and NIOS Physics &amp; Maths support to ground classes, medicals, flying school admission, CPL conversion, ATPL and airline selection — one programme mentors you through every milestone.",
  actions: btn("contact.html", "Join PPA Elite", "primary", { magnetic: true }) + btn("#roadmap", "Explore the roadmap", "ghost", { noArrow: true }),
})}

<section class="section tone-light" data-tone="light" data-rail-label="Why Elite">
  <div class="wrap">
    ${sectionHead({
      kicker: "Why PPA Elite",
      title: "One mentor. One roadmap. <em>One journey.</em>",
      lead: "Instead of juggling multiple institutes and processes, you get structured guidance at every stage from a single platform.",
      layout: "split",
    })}
    <div class="stats" data-stagger>
      <div class="stat"><strong><span data-count="1000">1000</span><sup>+</sup></strong><span>Students guided toward their aviation goals</span></div>
      <div class="stat"><strong><span data-count="8">8</span></strong><span>Career phases under one roadmap</span></div>
      <div class="stat"><strong><span data-count="5">5</span></strong><span>Flying destinations: India, South Africa, Philippines, USA, New Zealand</span></div>
      <div class="stat"><strong><span data-count="100">100</span><sup>%</sup></strong><span>End-to-end mentorship, milestone by milestone</span></div>
    </div>
  </div>
</section>

<section class="section tone-dark" id="roadmap" data-tone="dark" data-rail-label="Roadmap">
  <div class="wrap split top">
    <div class="stack" style="position:sticky;top:calc(var(--header-h) + 32px)">
      <div data-reveal="fade">${eyebrow("Your journey")}</div>
      <h2 data-split>From dream to <em>airline flight deck.</em></h2>
      <p class="lead" data-reveal>Becoming a commercial pilot involves many milestones. PPA Elite turns them into one clear sequence — and walks it with you.</p>
      <div class="actions" data-reveal>${btn("contact.html", "Talk to a mentor")}</div>
    </div>
    ${journey([
      { title: "DGCA Computer Number", text: "Complete guidance for the application, document verification and eligibility support." },
      { title: "NIOS Physics & Mathematics", text: "No Physics and Maths in 10+2? We help with NIOS admission and preparation." },
      { title: "DGCA Ground Classes", text: "Air Navigation, Air Regulations, Meteorology and Technical General with structured revision and mock tests." },
      { title: "Class 2 & Class 1 Medicals", text: "Guidance on DGCA medical appointments, documentation and certification." },
      { title: "Flying School Admission", text: "Partner flying schools in India, South Africa, Philippines, USA and New Zealand." },
      { title: "CPL Conversion & ATPL", text: "Foreign CPL conversion guidance and complete DGCA ATPL preparation." },
      { title: "Airline Selection", text: "Written exam, ADAPT / CUT-E / COMPASS, psychometry, group discussion and interview." },
      { title: "Become an airline pilot", text: "The right seat — reached with a mentor beside you at every step." },
    ])}
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Ground classes">
  <div class="wrap">
    ${sectionHead({
      kicker: "DGCA ground classes",
      title: "A strong foundation for <em>your CPL.</em>",
      lead: "Comprehensive DGCA ground classes that prepare you for the exams while building real aviation knowledge.",
      layout: "split",
    })}
    <div class="grid grid-4" data-stagger>
      ${featureCard({ ic: "compass", title: "Air Navigation", text: "Charts, flight planning, radio navigation, performance and time-speed-distance problems." })}
      ${featureCard({ ic: "book", title: "Air Regulations", text: "ICAO regulations, DGCA CARs, aviation law and operational procedures." })}
      ${featureCard({ ic: "cloud", title: "Meteorology", text: "Weather theory, Indian climatology, charts and operational decision-making." })}
      ${featureCard({ ic: "gear", title: "Technical General", text: "Aerodynamics, engines, systems and instruments for CPL and beyond." })}
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="After CPL">
  <div class="wrap">
    <div class="grid grid-2" data-stagger>
      <div class="card">
        <span class="card-index">ATPL GROUND CLASSES</span>
        <h3>Prepare for advanced airline knowledge.</h3>
        <p>After your CPL, Elite continues with DGCA ATPL classes: structured preparation, faculty mentorship, mock exams and concept-based learning.</p>
        <div class="badge-row">${["Flight planning & performance", "Radio aids & instruments", "General navigation", "Meteorology", "Question bank & mocks"].map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
      <div class="card">
        <span class="card-index">AIRLINE PREPARATION</span>
        <h3>Walk into airline selections prepared.</h3>
        <p>Every stage of recruitment for aspiring First Officers and cadet pilots, rehearsed with people who have been through it.</p>
        <div class="badge-row">${["Written exam", "ADAPT / CUT-E / COMPASS", "Psychometry", "Group discussion", "Interview prep"].map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Campuses">
  <div class="wrap">
    ${sectionHead({ kicker: "Our campuses", title: "Train with Elite in <em>Delhi &amp; Bengaluru.</em>", lead: "Or join the same live programme online from anywhere in India.", layout: "split" })}
    ${basesBlock()}
  </div>
</section>

${ctaBand({ title: "Start your journey <em>with Elite.</em>", text: "Whether it is your computer number, ground classes, a flying school, ATPL papers or airline selection — Elite gives you a mentor for every stage.", primary: ["contact.html", "Register now"], secondary: [WA, "Talk to a mentor"] })}
`,
};
