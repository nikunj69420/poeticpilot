import { UP, eyebrow, sectionHead, pageHero, btn, ctaBand, img, ticks, faq } from "../ui.mjs";

const subjects = [
  ["air-meteorology.webp", "Air Meteorology", "Weather theory, Indian climatology and operational weather decisions.", ["Indian monsoon & seasonal climatology", "Clouds, turbulence, icing & thunderstorms", "METAR, TAF, SIGMET & weather charts", "Weather-related operational risk"]],
  ["air-regulations.webp", "Air Regulations", "Indian aviation law with exam-oriented interpretation of DGCA rules.", ["DGCA CARs & Indian Aircraft Rules", "ICAO Annexes relevant to CPL", "Operational approvals & licensing", "Exam-focused interpretation"]],
  ["air-navigation.webp", "Air Navigation", "One of the most scoring subjects — taught step by step with heavy problem practice.", ["Dead reckoning & flight planning", "Radio navigation & GNSS", "Time, speed & distance", "DGCA-style numericals"]],
  ["technical-general.webp", "Technical General", "A strong base in systems and aerodynamics for CPL and future airline training.", ["Piston & turbine engines", "Aircraft instruments & systems", "Basic jet operations & performance", "Aerodynamics & principles of flight"]],
  ["rtr.webp", "RTR (Radio Telephony)", "Practical aviation communication with an emphasis on confidence and phraseology.", ["Standard ICAO phraseology", "RT practical & viva preparation", "Emergency & abnormal communication", "Speaking practice"]],
  ["technical-specific.webp", "Technical Specific", "Aircraft-specific systems training matched to the type you fly.", ["Aircraft type systems", "Limitations & procedures", "Performance specifics", "Exam-pattern practice"]],
];

export default {
  file: "cpl-ground-classes.html",
  key: "cpl",
  nav: "programmes",
  canonical: "dgca-cpl-ground-classes",
  title: "DGCA CPL Ground Classes in India by Airline Pilots",
  description: "DGCA CPL ground classes for Air Navigation, Meteorology, Air Regulations, Technical General and RTR — taught by active airline pilots in Delhi, Bengaluru and online.",
  body: `
${pageHero({
  crumbs: [["Programmes", "elite.html"], ["CPL Ground Classes"]],
  kicker: "Structured · result-oriented · trusted",
  title: "DGCA CPL ground classes, <em>by active airline pilots.</em>",
  lead: "Classroom batches in Delhi and Bengaluru, or live interactive classes from anywhere in India — all built around the current DGCA examination pattern.",
  tags: ["Air Navigation", "Meteorology", "Air Regulations", "Technical General", "RTR"],
  actions: btn("#subjects", "View subjects", "primary", { magnetic: true }) + btn("contact.html", "Request a call back", "ghost", { noArrow: true }),
})}

<section class="section tone-light" data-tone="light" data-rail-label="About">
  <div class="wrap split">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("Why PPA for CPL")}</div>
      <h2 data-split>Taught for the exam — <em>and the flight deck.</em></h2>
      <div class="prose" data-reveal>
        <p>Success in DGCA exams is built on conceptual clarity, disciplined preparation and continuous mentorship. Our ground school is designed for CPL students preparing alongside flying training or completing ground subjects on their own.</p>
        <p>What sets PPA apart is who teaches. Classes are led by <strong>active airline pilots flying with leading Indian airlines such as IndiGo and Akasa Air</strong> — giving you exposure to real operations and cockpit decision-making while keeping a sharp DGCA focus.</p>
      </div>
    </div>
    <div class="grid" data-stagger>
      <div class="card"><span class="card-index">DELHI CAMPUS</span><h3>Offline, hybrid &amp; mentored</h3><p>Classroom training and airline pilot mentorship at our Dwarka base. Call +91 88003 20787.</p></div>
      <div class="card"><span class="card-index">BENGALURU CAMPUS</span><h3>Small batches, premium guidance</h3><p>DGCA ground classes with experienced instructors at Aswathnagar. Call +91 98737 77381.</p></div>
      <div class="card"><span class="card-index">LIVE ONLINE</span><h3>Students across India</h3><p>Join from Mumbai, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata, Jaipur, Lucknow — with recordings and full instructor support.</p></div>
    </div>
  </div>
</section>

<section class="section tone-dark" id="subjects" data-tone="dark" data-rail-label="Subjects">
  <div class="wrap">
    ${sectionHead({ kicker: "DGCA CPL subjects we cover", title: "Six subjects. <em>One method.</em>", lead: "Each subject is taught concept-first, then drilled with DGCA-style questions and full-length mocks.", layout: "split" })}
    <div class="grid grid-3" data-stagger="0.06">
      ${subjects
        .map(
          ([file, title, text, points], i) => `
      <article class="card" style="padding:0;overflow:hidden">
        <div class="media ratio-16x10" style="border-radius:0">${img(UP + "cplgc/" + file, title + " class at Poetic Pilot Academy")}</div>
        <div style="padding:clamp(24px,3vw,32px);display:grid;gap:14px">
          <span class="card-index">${String(i + 1).padStart(2, "0")} / 06</span>
          <h3>${title}</h3>
          <p>${text}</p>
          ${ticks(points)}
        </div>
      </article>`,
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Course structure">
  <div class="wrap">
    ${sectionHead({ kicker: "Course structure", title: "Built around <em>your exam cycle.</em>", layout: "split", lead: "Designed for full-time ground students and pilots in the middle of flying training." })}
    <div class="grid grid-4" data-stagger>
      <div class="card"><span class="card-index">01 · SUBJECTS</span><h3>Every CPL paper</h3>${ticks(["Air Navigation", "Air Meteorology", "Air Regulations", "Technical General", "RTR & Technical Specific"])}</div>
      <div class="card"><span class="card-index">02 · MODE</span><h3>Learn your way</h3>${ticks(["Offline classroom", "Live interactive online", "Hybrid learning support"])}</div>
      <div class="card"><span class="card-index">03 · DURATION</span><h3>3 to 6 months</h3>${ticks(["Planned around DGCA cycles", "Subject-wise enrolment", "Attempt-focused prep"])}</div>
      <div class="card"><span class="card-index">04 · BATCHES</span><h3>Small and tracked</h3>${ticks(["Small batch sizes", "Subject-wise planning", "Regular progress tracking"])}</div>
    </div>
    <div class="card" style="margin-top:24px" data-reveal>
      <span class="card-index">PPA STUDY MATERIAL</span>
      <h3>Our own DGCA-oriented books.</h3>
      <p>Enrolled students get Poetic Pilot Academy's own study material, developed and updated by our airline pilot instructors as the DGCA pattern changes.</p>
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="Results">
  <div class="wrap">
    ${sectionHead({ kicker: "Results", title: "Toppers in every <em>DGCA attempt.</em>", lead: "Strong results across Air Navigation, Meteorology, Air Regulations and Technical General, attempt after attempt.", layout: "split" })}
    <div class="grid grid-2" data-stagger>
      ${[1, 2, 3, 4].map((n) => `<figure class="media ratio-16x10">${img(UP + `cplgc/result-${n}.webp`, "DGCA CPL results of Poetic Pilot Academy students")}</figure>`).join("")}
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="FAQ">
  <div class="wrap split top">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("Questions")}</div>
      <h2 data-split>Before you <em>enrol.</em></h2>
      <p class="lead" data-reveal>Still unsure which subjects to take first? A short call with our team usually settles it.</p>
    </div>
    ${faq([
      { q: "Who teaches the CPL ground classes?", a: "Active airline pilots flying with leading Indian airlines such as IndiGo and Akasa Air, alongside experienced ground instructors." },
      { q: "Can I join online?", a: "Yes. Live interactive online classes run alongside our Delhi and Bengaluru batches, with recorded lectures and full instructor support." },
      { q: "How long does the course take?", a: "Typically 3 to 6 months, planned around the DGCA examination cycle and your preparation level. Subject-wise enrolment is available." },
      { q: "Can I take classes while doing my flying training?", a: "Yes. The programme is built for both full-time ground students and pilots who are flying at the same time." },
    ])}
  </div>
</section>

${ctaBand({ title: "Want to be our <em>next topper?</em>", text: "Book a call to find the right batch, base and subject plan for your next DGCA attempt." })}
`,
};
