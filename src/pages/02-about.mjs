import { UP, eyebrow, sectionHead, pageHero, btn, featureCard, ctaBand, img, ticks } from "../ui.mjs";

const team = [
  ["mentor1.JPG", "Capt. Mohit Teotia", "Founder · Navigation & Meteorology", "Our founder and a Line Training Captain with over 7,000 flight hours, bringing airline-level navigation and meteorology into every CPL class."],
  ["mentor2.jpg", "Capt. Nikhil", "B737 Captain · Technical", "A seasoned B737 Captain with 7,000+ flight hours who brings the iconic jet to life in the classroom."],
  ["mentor3.jpg", "Capt. Sakshi", "Airline Pilot · Radio Telephony", "Known for a structured, individual approach to RTR that builds real communication confidence."],
  ["mentor4.jpg", "Capt. Gautam", "Airline Pilot · Ground Instructor", "3,000+ flight hours and 7 years of teaching, committed to mentoring the next generation of aviators."],
  ["mentor5.jpg", "Capt. Unnati", "Airline Pilot · Air Regulations", "A regulations specialist who has guided 100+ aspiring pilots with a consistently strong pass record."],
  ["mentor6.jpg", "Capt. Mansimran", "Airline Pilot · Ground Instructor", "Five years of shaping disciplined, confident aviators — in the classroom and beyond."],
];

export default {
  file: "about.html",
  key: "about",
  nav: "about",
  canonical: "ppa-about-us",
  title: "About Us",
  description: "Poetic Pilot Academy guides aspiring pilots through DGCA ground classes, ATPL and airline preparation with instructors who are active airline pilots.",
  body: `
${pageHero({
  crumbs: [["About"]],
  kicker: "About Poetic Pilot Academy",
  title: "Guiding aviators through <em>every step</em> of the journey.",
  lead: "Top-notch ground classes, airline pilots as instructors and a student-first philosophy — the reason our students keep emerging as All India toppers.",
})}

<section class="section tone-light" data-tone="light" data-rail-label="Our story">
  <div class="wrap split">
    <figure class="media ratio-4x5" data-img-reveal>${img(UP + "2026/07/capt-mohit-teotia.jpeg", "Captain Mohit Teotia teaching a class at Poetic Pilot Academy")}</figure>
    <div class="stack">
      <div data-reveal="fade">${eyebrow("Our story")}</div>
      <h2 data-split>Structured teaching. <em>Real results.</em></h2>
      <div class="prose" data-reveal>
        <p>At Poetic Pilot Academy we pride ourselves on ground classes where every exam has seen our students emerge as <strong>All India toppers</strong>.</p>
        <p>Our structured teaching approach, expert instructors and student-first philosophy make sure every aspiring pilot gets the best possible foundation — whether they are clearing their first DGCA paper or preparing for an airline interview.</p>
      </div>
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Mission">
  <div class="wrap">
    <div class="grid grid-2" data-stagger>
      <div class="card">
        <span class="card-index">OUR MISSION</span>
        <h3>Knowledge, skill and confidence for every cockpit.</h3>
        <p>To empower aspiring pilots with the knowledge, skills and confidence to excel in both DGCA and international aviation careers — nurturing competence and professionalism through structured programmes, expert mentorship and a passion for aviation.</p>
      </div>
      <div class="card">
        <span class="card-index">TRAIN WITH PPA</span>
        <h3>From student pilot to airline-ready professional.</h3>
        <p>Comprehensive training across DGCA, CPL, ATPL and airline preparation, plus help with the paperwork that slows students down.</p>
        ${ticks(["DGCA computer number guidance", "Visa and documentation support", "Medical and flying-school guidance"])}
      </div>
    </div>
  </div>
</section>

<section class="section tone-dark" id="instructors" data-tone="dark" data-rail-label="Instructors">
  <div class="wrap">
    ${sectionHead({
      kicker: "Meet our instructors",
      title: "Airline pilots, <em>not just CPL holders.</em>",
      lead: "Our instructors fly — or have flown — modern commercial aircraft with leading Indian airlines. You learn concepts for the exam and for the flight deck.",
      layout: "split",
    })}
    <div class="grid grid-3" data-stagger>
      ${team
        .map(
          ([file, name, role, text]) => `
      <article class="person">
        <div class="media">${img(UP + "aboutus/" + file, name)}</div>
        <span class="role">${role}</span>
        <h3>${name}</h3>
        <p>${text}</p>
      </article>`,
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Values">
  <div class="wrap">
    ${sectionHead({ kicker: "How we teach", title: "Three things we <em>never compromise on.</em>", layout: "center" })}
    <div class="grid grid-3" data-stagger>
      ${featureCard({ ic: "book", title: "Conceptual clarity", text: "We teach why, not just what — so concepts hold up in the exam hall and in the simulator." })}
      ${featureCard({ ic: "target", title: "Disciplined preparation", text: "DGCA-pattern mock tests, structured revision and progress tracking for every student." })}
      ${featureCard({ ic: "users", title: "Continuous mentorship", text: "Small batches and instructors who stay with you through results, flying and interviews." })}
    </div>
    <div class="actions" style="justify-content:center;margin-top:48px" data-reveal>${btn("cpl-ground-classes.html", "Explore CPL ground classes", "ink")}</div>
  </div>
</section>

${ctaBand({ title: "Train with <em>PPA.</em>", text: "Tell us where you are in your journey and we will map the next step — classes, flying, conversion or airline selection." })}
`,
};
