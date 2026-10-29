import { UP, eyebrow, sectionHead, pageHero, btn, featureCard, ctaBand, journey, ticks, faq, img, LIVE, icon } from "../ui.mjs";

const academies = [
  ["fta.jpg", "Flight Training Adelaide (FTA)", "Australia", "indigo-cadet-pilot-program-fta"],
  ["skyborne.png", "Skyborne Aviation", "USA", "indigo-cadet-pilot-program-skyborne"],
  ["insight.jpg", "Insight Aviation", "South Africa", "indigo-cadet-pilot-program-insight"],
  ["chimes.jpg", "Chimes Aviation Academy", "India", "indigo-cadet-pilot-program-chimes"],
  ["garuda.jpg", "Garuda Aviation", "South Africa", "indigo-cadet-pilot-program-garuda"],
  ["marigold.jpg", "Marigold Aviation", "Thailand", "indigo-cadet-pilot-program-marigold"],
  ["l3harris.jpg", "Acron Aviation (L3Harris)", "USA", "indigo-cadet-pilot-program-acron"],
];

export default {
  file: "indigo-cadet.html",
  key: "indigo",
  nav: "cadet",
  canonical: "indigo-cadet-pilot-program",
  title: "IndiGo Cadet Pilot Programme — Eligibility, Cost & Selection",
  description: "IndiGo Cadet Pilot Programme guide: eligibility, selection stages, training academies (FTA, Skyborne, Insight, Chimes, Garuda, Marigold, Acron) and how PPA prepares you.",
  body: `
${pageHero({
  crumbs: [["Cadet", "cadet.html"], ["IndiGo"]],
  kicker: "Airbus A320 First Officer pathway",
  title: "IndiGo Cadet <em>Pilot Programme.</em>",
  lead: "One of India's most competitive cadet programmes — an airline-aligned route to the right seat of IndiGo's A320 fleet. We prepare you for every stage.",
  tags: ["India", "Australia", "USA", "South Africa", "Thailand"],
  actions: btn("contact.html", "Prepare with PPA", "primary", { magnetic: true }) + btn("#academies", "See academies", "ghost", { noArrow: true }),
})}

<section class="section tone-light" data-tone="light" data-rail-label="About">
  <div class="wrap split">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("About the programme")}</div>
      <h2 data-split>Trained the IndiGo way <em>from day one.</em></h2>
      <div class="prose" data-reveal>
        <p>Selected candidates train at DGCA-approved, internationally recognised academies, following IndiGo's standard operating procedures, safety philosophy and operational culture from the very beginning.</p>
        <p>Poetic Pilot Academy supports you through aptitude and psychometric preparation, interview readiness, simulator orientation and DGCA documentation.</p>
      </div>
    </div>
    <div class="card" data-reveal="scale">
      <span class="card-index">ELIGIBILITY</span>
      <h3>Who can apply</h3>
      ${ticks(["10+2 with Physics and Mathematics", "DGCA Class 1 medical fitness (or eligibility)", "Strong English communication", "Ability to clear aptitude, psychometric and interview rounds"])}
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="Selection">
  <div class="wrap split top">
    <div class="stack" style="position:sticky;top:calc(var(--header-h) + 32px)">
      <div data-reveal="fade">${eyebrow("Selection process")}</div>
      <h2 data-split>Nine stages <em>to the flight deck.</em></h2>
      <p class="lead" data-reveal>A structured, multi-stage process that evaluates aptitude, personality and airline readiness.</p>
    </div>
    ${journey([
      { title: "Choose an academy & apply", text: "Select a preferred flight training organisation; applications depend on each academy's intake." },
      { title: "Application screening", text: "Accepted applicants are invited to the initial assessment stages run on IndiGo's behalf." },
      { title: "ADAPT assessment", text: "Clear IndiGo's aptitude and psychometric testing." },
      { title: "Group discussion", text: "Communication, teamwork and decision-making under observation." },
      { title: "Personal interview", text: "Motivation, attitude, airline fit and overall suitability." },
      { title: "Join the academy", text: "Successful candidates begin ab-initio flight training at the chosen FTO." },
      { title: "Flight training", text: "Complete flying as per the approved syllabus and regulatory requirements." },
      { title: "A320 type rating", text: "Airbus A320 type rating to IndiGo's operational standards." },
      { title: "Induction", text: "Join IndiGo Airlines as a First Officer." },
    ])}
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="How we help">
  <div class="wrap">
    ${sectionHead({ kicker: "How PPA helps", title: "Prepared for <em>every round.</em>", layout: "center" })}
    <div class="grid grid-3" data-stagger>
      ${featureCard({ ic: "target", title: "Aptitude & psychometric", text: "Tailored mock tests and simulator-based exercises for the ADAPT rounds." })}
      ${featureCard({ ic: "users", title: "Interview & HR guidance", text: "Mentorship for group discussions, HR interviews and simulator assessments." })}
      ${featureCard({ ic: "doc", title: "Documentation", text: "Organise every DGCA and airline document for a smooth, error-free application." })}
    </div>
  </div>
</section>

<section class="section tone-dark" id="academies" data-tone="dark" data-rail-label="Academies">
  <div class="wrap">
    ${sectionHead({ kicker: "Choose your academy", title: "Seven academies. <em>Five countries.</em>", lead: "Each follows standardised procedures for a smooth transition into IndiGo's A320 fleet.", layout: "split" })}
    <div class="grid grid-3" data-stagger="0.06">
      ${academies
        .map(
          ([file, name, country, slug]) => `
      <a class="card" href="${LIVE + slug}" target="_blank" rel="noopener" style="padding:0;overflow:hidden">
        <div class="media ratio-16x10" style="border-radius:0;background:#fff">${img(UP + "indigo/" + file, name)}</div>
        <div style="padding:24px;display:grid;gap:6px">
          <span class="card-index">${country.toUpperCase()}</span>
          <h3>${name}</h3>
          <span class="link-arrow" style="margin-top:8px">Academy details${icon.arrowUpRight}</span>
        </div>
      </a>`,
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="FAQ">
  <div class="wrap split top">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("Frequently asked")}</div>
      <h2 data-split>IndiGo cadet <em>questions.</em></h2>
    </div>
    ${faq([
      { q: "What is the IndiGo Cadet Pilot Programme?", a: "A structured, airline-aligned training pathway that prepares aspiring pilots for direct induction into IndiGo as Airbus A320 First Officers." },
      { q: "Who is eligible?", a: "Candidates with 10+2 in Physics and Mathematics who meet DGCA medical standards and clear the aptitude, psychometric and interview assessments." },
      { q: "How much does it cost?", a: "Generally between ₹95 lakh and ₹1.2 crore, depending on the training academy and country." },
      { q: "Is a job guaranteed?", a: "Successful completion leads to induction as a First Officer, subject to meeting all training, performance and regulatory requirements." },
      { q: "Which aircraft will I fly?", a: "Cadets are trained and type-rated on the Airbus A320, IndiGo's primary aircraft." },
      { q: "Can I apply without a Class 1 medical?", a: "You may apply with a DGCA Class 2 medical, but Class 1 certification is mandatory before final induction." },
      { q: "How long does it take?", a: "Typically 18 to 24 months, depending on location, weather and regulatory timelines." },
    ])}
  </div>
</section>

${ctaBand({ title: "Clear the IndiGo <em>selection.</em>", text: "Aptitude, psychometry, GD and interview — rehearsed with airline pilots before the real thing." })}
`,
};
