import { UP, eyebrow, sectionHead, pageHero, btn, featureCard, ctaBand, journey, marqueePosters } from "../ui.mjs";

const airline = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => [`2026/10/airline${n}.jpg`, "Airline-selected Poetic Pilot Academy student"]);

export default {
  file: "airline-prep.html",
  key: "airline",
  nav: "programmes",
  canonical: "airline-preparation-india",
  title: "Airline Preparation Program",
  description: "Airline exam and interview preparation: written tests, COMPASS, CUT-E, ADAPT, group discussion, psychometry and mock interviews. 300+ selections in 24 months.",
  body: `
${pageHero({
  crumbs: [["Programmes", "elite.html"], ["Airline Preparation"]],
  kicker: "300+ selections in 24 months",
  title: "Master airline exams <em>and interviews.</em>",
  lead: "For CPL holders, type-rated pilots and aspiring First Officers preparing for airline recruitment — technical prep, aptitude, psychometry, interview practice and personal mentorship.",
  actions: btn("contact.html", "Join the programme", "primary", { magnetic: true }),
  tags: ["IndiGo", "Air India", "Vistara", "SpiceJet", "GoAir"],
})}

<section class="section tone-light" data-tone="light" data-rail-label="Overview">
  <div class="wrap">
    ${sectionHead({ kicker: "Course overview", title: "Everything airlines test — <em>rehearsed.</em>", lead: "Our students have been selected by IndiGo, Air India, Vistara, SpiceJet and GoAir through consistent, exam-oriented mentoring.", layout: "split" })}
    <div class="grid grid-3" data-stagger>
      ${featureCard({ ic: "target", title: "Specialised training", text: "Understand airline selection procedures and sharpen decision-making, teamwork and CRM to airline standards." })}
      ${featureCard({ ic: "users", title: "Expert instructors", text: "Airline-experienced instructors who build your strengths, correct weaknesses and grow professional confidence." })}
      ${featureCard({ ic: "chart", title: "Career-focused", text: "Tailored modules and mock sessions that recreate real airline recruitment environments." })}
      ${featureCard({ ic: "star", title: "Proven results", text: "300+ students selected in the last 24 months across India's major airlines." })}
      ${featureCard({ ic: "book", title: "Complete material", text: "DGCA-aligned, airline-level material including IndiGo and Oxford question banks and technical references." })}
      ${featureCard({ ic: "clock", title: "Flexible schedule", text: "Batches run around airline recruitment drives so you are ready when vacancies open." })}
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="Roadmap">
  <div class="wrap split top">
    <div class="stack" style="position:sticky;top:calc(var(--header-h) + 32px)">
      <div data-reveal="fade">${eyebrow("Airline selection roadmap")}</div>
      <h2 data-split>From written test to <em>Letter of Intent.</em></h2>
      <p class="lead" data-reveal>Every airline runs a different process. We prepare you for each stage, in the order you will meet it.</p>
    </div>
    ${journey([
      { title: "Written examination", text: "Technical subjects, aviation knowledge, numerical reasoning and airline-specific questions." },
      { title: "COMPASS / CUT-E / ADAPT", text: "Dedicated preparation for COMPASS, Air India CUT-E, IndiGo ADAPT and other aptitude assessments." },
      { title: "Group discussion & activities", text: "Communication, teamwork, leadership and decision-making through airline-style group exercises." },
      { title: "Psychometric assessment", text: "Personality profiling, behavioural evaluation and cognitive testing used by airlines." },
      { title: "Technical & HR interview", text: "One-on-one mock interviews with airline pilots covering technical, operational, CRM and HR questions." },
      { title: "Letter of Intent", text: "Navigate every stage with confidence — and step closer to your airline LOI." },
    ])}
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="Selected">
  <div class="wrap">${sectionHead({ kicker: "Airline-selected candidates", title: "They sat where <em>you're sitting.</em>", layout: "split", lead: "A few of the students who prepared with us and now fly for India's airlines." })}</div>
  ${marqueePosters(airline, { speed: 36, label: "Airline-selected candidates" })}
</section>

<section class="section tone-light" data-tone="light" data-rail-label="How we help">
  <div class="wrap">
    ${sectionHead({ kicker: "How PPA helps you succeed", title: "Real assessments. <em>Real feedback.</em>", layout: "center" })}
    <div class="grid grid-3" data-stagger>
      ${featureCard({ num: "01", title: "Recruitment experts", text: "Instructors who follow current airline recruitment patterns and prepare you with real assessment methods." })}
      ${featureCard({ num: "02", title: "Real assessment simulation", text: "Practise written exams, COMPASS, CUT-E, ADAPT, psychometry, GDs and interviews in an airline-like setting." })}
      ${featureCard({ num: "03", title: "Continuous mentorship", text: "Personal feedback after every mock so each attempt is better than the last." })}
    </div>
  </div>
</section>

${ctaBand({ title: "Ready to <em>take off?</em>", text: "Join our airline preparatory classes and get one step closer to your airline cockpit.", primary: ["contact.html", "Enrol now"] })}
`,
};
