import { eyebrow, sectionHead, pageHero, btn, featureCard, ctaBand, journey, ticks } from "../ui.mjs";

export default {
  file: "cadet.html",
  key: "cadet",
  nav: "cadet",
  canonical: "cadet-pilot-program-india",
  title: "Cadet Pilot Programmes",
  description: "Airline cadet pilot programme preparation for IndiGo and Air India: aptitude, psychometric, interview coaching and DGCA ground school.",
  body: `
${pageHero({
  crumbs: [["Cadet Programmes"]],
  kicker: "Airline cadet pathways",
  title: "Your route to the <em>right seat</em> of an airliner.",
  lead: "Structured, airline-specific cadet preparation — from aptitude tests to final line training, with Poetic Pilot Academy guiding every step.",
  actions: btn("#programmes", "Explore programmes", "primary", { magnetic: true }),
})}

<section class="section tone-light" data-tone="light" data-rail-label="What is a cadet programme">
  <div class="wrap split top">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("What is a cadet programme?")}</div>
      <h2 data-split>Trained from scratch <em>by the airline's standard.</em></h2>
      <p class="lead" data-reveal>A cadet pilot programme is an airline-designed pathway that trains aspiring pilots from zero to fully qualified First Officers — with standardised training and a clear airline placement.</p>
    </div>
    ${journey([
      { title: "Eligibility & aptitude", text: "10+2 with Physics and Maths, DGCA medical fitness and strong aptitude." },
      { title: "Selection process", text: "Aptitude, psychometric tests, group discussion and personal interview." },
      { title: "Flight & ground training", text: "Ab-initio training at an approved academy, following airline SOPs from day one." },
      { title: "Airline integration", text: "Type rating and induction into the airline as a First Officer." },
    ])}
  </div>
</section>

<section class="section tone-dark" id="programmes" data-tone="dark" data-rail-label="Programmes">
  <div class="wrap">
    ${sectionHead({ kicker: "Available cadet programmes", title: "Two airlines. <em>Many academies.</em>", layout: "split", lead: "We prepare candidates for the selection rounds and help them choose the right training academy." })}
    <div class="grid grid-2" data-stagger>
      ${featureCard({ ic: "plane", num: "INDIGO", title: "IndiGo Cadet Pilot Programme", text: "Train at IndiGo-approved academies in India, Australia, the USA, South Africa and Thailand, and prepare for every phase of selection.", href: "indigo-cadet.html", cta: "View programme" })}
      ${featureCard({ ic: "globe", num: "AIR INDIA", title: "Air India Cadet Pilot Programme", text: "Follow Air India's cadet pathway in India or the USA, with integrated assessments, training and PPA mentorship.", href: "air-india-cadet.html", cta: "View programme" })}
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Why PPA">
  <div class="wrap split">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("Why Poetic Pilot Academy")}</div>
      <h2 data-split>Selection-ready, <em>not just eligible.</em></h2>
    </div>
    <div data-reveal>
      ${ticks([
        "<strong>Airline-specific preparation</strong> for each cadet programme's process",
        "<strong>DGCA-compliant ground school</strong> taught by airline pilots",
        "<strong>Personal mentorship</strong> from application to induction",
        "<strong>1:1 interview &amp; aptitude coaching</strong> with mock assessments",
      ])}
    </div>
  </div>
</section>

${ctaBand({ title: "Start your <em>cadet journey.</em>", text: "Join Poetic Pilot Academy's cadet preparation and walk into selection rounds prepared.", primary: ["contact.html", "Get in touch"] })}
`,
};
