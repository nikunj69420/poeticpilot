import { eyebrow, sectionHead, pageHero, btn, featureCard, ctaBand, facts } from "../ui.mjs";

export default {
  file: "multi-engine.html",
  key: "mer",
  nav: "flight",
  canonical: "multi-engine-rating",
  title: "Multi Engine Rating (MER) in India — DGCA Approved Training",
  description: "Multi Engine Rating for CPL pilots: eligibility, DGCA flight hours, typical cost in India and how Poetic Pilot Academy helps you choose a DGCA-approved FTO.",
  body: `
${pageHero({
  crumbs: [["Flight Training", "flight-training.html"], ["Multi Engine Rating"]],
  kicker: "DGCA-approved training",
  title: "Multi Engine <em>Rating.</em>",
  lead: "Master twin-engine operations — asymmetric handling, engine-out procedures and performance management — and take a critical step toward airline flying.",
  actions: btn("contact.html", "Plan my MER", "primary", { magnetic: true }),
})}

<section class="section tone-light" data-tone="light" data-rail-label="What is MER">
  <div class="wrap split top">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("What is MER?")}</div>
      <h2 data-split>Two engines. <em>Twice the judgement.</em></h2>
      <div class="prose" data-reveal>
        <p>A Multi Engine Rating is an advanced endorsement to operate aircraft with more than one engine — focused on asymmetric flight, engine-out procedures, multi-engine systems and performance.</p>
        <p>For DGCA CPL pilots it is a compulsory step before progressing toward airline and multi-crew operations. PPA partners with DGCA-approved FTOs in India and abroad for structured, safe and cost-effective training.</p>
      </div>
    </div>
    <div data-reveal>
      ${facts([
        ["Eligibility", "Valid CPL, or final phase of CPL training"],
        ["Medical", "Valid DGCA Class 1 or Class 2"],
        ["DGCA minimum", "6 hours multi-engine flying, incl. asymmetric training & checks"],
        ["Typical cost (India)", "₹8 lakh – ₹15 lakh, by aircraft, fuel and location"],
      ])}
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="How we help">
  <div class="wrap">
    ${sectionHead({ kicker: "How PPA helps", title: "The right school, <em>the right time.</em>", layout: "split" })}
    <div class="grid grid-3" data-stagger>
      ${featureCard({ ic: "shield", title: "DGCA-approved schools", text: "Trusted schools with strong safety records and suitable multi-engine aircraft." })}
      ${featureCard({ ic: "book", title: "Technical support", text: "Guidance aligned with DGCA technical requirements and airline-level knowledge." })}
      ${featureCard({ ic: "compass", title: "Career-focused planning", text: "MER planned alongside ATPL preparation and airline interview readiness." })}
    </div>
    <div class="grid grid-2" style="margin-top:24px" data-stagger>
      <article class="academy"><span class="flag">India</span><strong>Train at DGCA-approved Indian FTOs</strong><span>Modern twins and instructors familiar with DGCA airline expectations.</span></article>
      <article class="academy"><span class="flag">International</span><strong>Train abroad, convert at home</strong><span>Complete your MER abroad and convert under DGCA guidelines with PPA's support.</span></article>
    </div>
  </div>
</section>

${ctaBand({ title: "Get <em>multi-engine rated.</em>", text: "We'll help you compare schools, aircraft and timelines with transparent pricing and minimal delays." })}
`,
};
