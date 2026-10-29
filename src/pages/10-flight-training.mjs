import { UP, eyebrow, sectionHead, pageHero, btn, featureCard, ctaBand, journey, marqueePosters } from "../ui.mjs";

const flying = Array.from({ length: 12 }, (_, i) => [`flying/flying${i + 1}.jpg`, "PPA student at a partner flying school"]);

export default {
  file: "flight-training.html",
  key: "flight",
  nav: "flight",
  canonical: "flying-training",
  title: "Flying Training in India & Abroad for CPL Students",
  description: "Plan CPL flying training in India, South Africa, New Zealand, Philippines or the USA with DGCA ground classes and conversion guidance from Poetic Pilot Academy.",
  body: `
${pageHero({
  crumbs: [["Flight Training"]],
  kicker: "CPL flying training",
  title: "Plan your flying <em>with clarity.</em>",
  lead: "Flying hours are only part of the CPL journey — ground classes, medicals, computer number, DGCA exams, school selection, documentation and conversion all have to line up. We help you plan the whole route.",
  tags: ["India", "South Africa", "New Zealand", "Philippines", "USA"],
  actions: btn("contact.html", "Plan my route", "primary", { magnetic: true }),
})}

<section class="section tone-light" data-tone="light" data-rail-label="Why plan">
  <div class="wrap">
    ${sectionHead({ kicker: "Why planning matters", title: "Ground and flying are <em>one journey.</em>", lead: "Students who treat flying and DGCA theory as separate paths lose months. Plan them together and the CPL arrives faster.", layout: "split" })}
    <div class="grid grid-3" data-stagger>
      ${featureCard({ ic: "clock", title: "Save time", text: "The right school, country, weather, aircraft availability and paperwork plan can shorten your flying training." })}
      ${featureCard({ ic: "shield", title: "Avoid costly mistakes", text: "Many students start flying without understanding DGCA exams, conversion, medicals or documents — and lose time." })}
      ${featureCard({ ic: "compass", title: "A better CPL roadmap", text: "A clear route from ground classes to flying, conversion flying and CPL issue." })}
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="Destinations">
  <div class="wrap">
    ${sectionHead({ kicker: "Where to fly", title: "India or abroad — <em>choose with your eyes open.</em>", layout: "split", lead: "Each option trades off weather, aircraft availability, cost and conversion requirements. We walk you through them before you commit." })}
    <div class="grid grid-3" data-stagger="0.06">
      <article class="academy"><span class="flag">India</span><strong>Stay in the DGCA system</strong><span>Train at DGCA-approved schools while continuing theory — but check aircraft, instructor availability, weather and batch load.</span></article>
      <article class="academy"><span class="flag">South Africa</span><strong>Weather and exposure</strong><span>Favourable weather, good flying exposure and structured hour-building options.</span></article>
      <article class="academy"><span class="flag">New Zealand</span><strong>Respected standards</strong><span>A professional aviation environment with globally respected training standards.</span></article>
      <article class="academy"><span class="flag">Philippines</span><strong>Efficient schedules</strong><span>Tropical flying weather, English-speaking instruction and modern fleets.</span></article>
      <article class="academy"><span class="flag">USA</span><strong>A huge ecosystem</strong><span>High aircraft availability in many schools and flexible flying routes.</span></article>
      <article class="academy"><span class="flag">After abroad</span><strong>DGCA conversion</strong><span>Foreign training usually needs DGCA conversion — plan it before you leave, not after.</span></article>
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="Our students">
  <div class="wrap">${sectionHead({ kicker: "Our students at flying schools", title: "First solos, <em>everywhere.</em>", layout: "split" })}</div>
  ${marqueePosters(flying, { speed: 32, label: "Students at flying schools" })}
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Roadmap">
  <div class="wrap split top">
    <div class="stack" style="position:sticky;top:calc(var(--header-h) + 32px)">
      <div data-reveal="fade">${eyebrow("CPL roadmap with PPA")}</div>
      <h2 data-split>Six steps <em>to your CPL.</em></h2>
      <p class="lead" data-reveal>A simple order of operations that keeps theory, flying and paperwork in sync.</p>
      <div class="actions" data-reveal>${btn("cpl-conversion.html", "About DGCA conversion", "ink")}</div>
    </div>
    ${journey([
      { title: "Start DGCA ground classes", text: "Begin CPL theory with DGCA-focused classroom training." },
      { title: "Plan your flying route", text: "Choose India or abroad based on budget, timeline and preference." },
      { title: "Join a flying school", text: "Start at a suitable partnered flying school." },
      { title: "Complete flying hours", text: "Checks, navigation, solo and instrument flying." },
      { title: "Convert if required", text: "Trained abroad? Complete DGCA conversion requirements in India." },
      { title: "Apply for CPL", text: "Final documentation and your Indian CPL." },
    ])}
  </div>
</section>

${ctaBand({ title: "Find your <em>flying school.</em>", text: "Tell us your budget and timeline — we'll help you compare routes in India and abroad." })}
`,
};
