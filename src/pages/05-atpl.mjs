import { eyebrow, sectionHead, pageHero, btn, featureCard, ctaBand, ticks, icon } from "../ui.mjs";

export default {
  file: "atpl.html",
  key: "atpl",
  nav: "programmes",
  canonical: "atpl",
  title: "ATPL Ground Classes",
  description: "DGCA ATPL ground classes for Air Meteorology, Radio & Instruments and General Navigation with mock orals, taught by airline pilots.",
  body: `
${pageHero({
  crumbs: [["Programmes", "elite.html"], ["ATPL Ground Classes"]],
  kicker: "Airline Transport Pilot Licence",
  title: "The final step <em>toward the left seat.</em>",
  lead: "Complete support for your DGCA ATPL — every subject, every written paper and every oral, with airline pilots who have sat them.",
  actions: btn("contact.html", "Join ATPL classes", "primary", { magnetic: true }),
})}

<section class="section tone-light" data-tone="light" data-rail-label="Subjects">
  <div class="wrap">
    ${sectionHead({ kicker: "ATPL subjects", title: "Three papers. <em>Taught at airline depth.</em>", lead: "Concept-based teaching, real-world relevance and guided mock orals for the written + oral examinations.", layout: "split" })}
    <div class="grid grid-3" data-stagger>
      <div class="card">
        <div class="icon-badge">${icon.cloud}</div>
        <span class="card-index">WRITTEN EXAMINATION</span>
        <h3>Air Meteorology</h3>
        <p>Weather systems, forecast interpretation and their impact on flight planning and operations.</p>
      </div>
      <div class="card">
        <div class="icon-badge">${icon.headset}</div>
        <span class="card-index">WRITTEN + ORAL</span>
        <h3>Radio &amp; Instruments</h3>
        <p>Aircraft systems, radio aids and instruments through practical explanation and guided mock orals.</p>
      </div>
      <div class="card">
        <div class="icon-badge">${icon.compass}</div>
        <span class="card-index">WRITTEN + ORAL</span>
        <h3>General Navigation</h3>
        <p>ATPL-level navigation, great-circle routes and accurate flight planning with real-world relevance.</p>
      </div>
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="How we prepare you">
  <div class="wrap split">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("How we prepare you")}</div>
      <h2 data-split>Mocks, orals and <em>mentors</em> who've done it.</h2>
      <p class="lead" data-reveal>ATPL papers reward understanding over memory. We build that understanding, then pressure-test it.</p>
    </div>
    <div data-reveal>
      ${ticks([
        "<strong>Flight planning &amp; performance</strong> — worked the way airlines do it",
        "<strong>Radio aids &amp; instruments</strong> — explained from the flight deck",
        "<strong>Mock orals</strong> — rehearsed one-to-one with airline pilots",
        "<strong>Question bank &amp; mock tests</strong> — DGCA-pattern, timed",
        "<strong>Faculty mentorship</strong> — through every attempt",
      ])}
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Next steps">
  <div class="wrap">
    ${sectionHead({ kicker: "Keep going", title: "Pair your ATPL <em>with airline prep.</em>", layout: "center" })}
    <div class="grid grid-2" data-stagger>
      ${featureCard({ ic: "plane", title: "Airline Preparation", text: "Written exams, ADAPT / CUT-E / COMPASS, group discussion, psychometry and interviews.", href: "airline-prep.html", cta: "Explore airline prep" })}
      ${featureCard({ ic: "star", title: "PPA Elite Program", text: "Have one mentor carry you from DGCA papers through ATPL to airline selection.", href: "elite.html", cta: "Explore Elite" })}
    </div>
  </div>
</section>

${ctaBand({ title: "Take the <em>final step.</em>", text: "Join PPA and earn your Airline Transport Pilot Licence with complete support through every subject and examination." })}
`,
};
