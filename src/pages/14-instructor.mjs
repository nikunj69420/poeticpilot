import { eyebrow, sectionHead, pageHero, btn, featureCard, ctaBand, journey, ticks, facts } from "../ui.mjs";

export default {
  file: "instructor-rating.html",
  key: "afir",
  nav: "flight",
  canonical: "assistant-flight-instructor-rating/",
  title: "Assistant Flight Instructor Rating (AFIR)",
  description: "Become a DGCA Assistant Flight Instructor: ground classes, partnered pattern flying, mock DGCA tests and placement assistance with Poetic Pilot Academy Delhi.",
  body: `
${pageHero({
  crumbs: [["Flight Training", "flight-training.html"], ["Instructor Rating"]],
  kicker: "AFIR · Delhi",
  title: "Teach the next <em>generation of pilots.</em>",
  lead: "DGCA-aligned AFIR ground classes and partnered pattern flying — the first step toward a full Flight Instructor Rating.",
  actions: btn("contact.html", "Apply now", "primary", { magnetic: true }),
})}

<section class="section tone-light" data-tone="light" data-rail-label="Why AFIR">
  <div class="wrap">
    ${sectionHead({ kicker: "Why AFIR", title: "Build hours <em>while you teach.</em>", lead: "AFIR lets licensed pilots instruct student pilots — and India's growing aviation market needs more of them.", layout: "split" })}
    <div class="grid grid-3" data-stagger>
      ${featureCard({ ic: "chart", title: "Aviation growth", text: "India's aviation market is expanding rapidly, and demand for trained instructors is rising nationwide." })}
      ${featureCard({ ic: "star", title: "Career advantage", text: "AFIR holders are highly employable; many flying schools offer accommodation and travel allowances." })}
      ${featureCard({ ic: "book", title: "DGCA preparation", text: "Ground classes in Air Navigation, Meteorology and Regulations from DGCA-experienced instructors." })}
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="Requirements">
  <div class="wrap split top">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("DGCA requirements")}</div>
      <h2 data-split>Are you <em>eligible?</em></h2>
      <div data-reveal style="margin-top:32px">${facts([
        ["Age", "Minimum 18 years"],
        ["Licence", "Commercial Pilot Licence (CPL)"],
        ["Medical", "Valid DGCA Class 1"],
        ["English", "Proficiency Level 4 or above"],
      ])}</div>
    </div>
    <div class="card" data-reveal="scale">
      <span class="card-index">HOW PPA HELPS</span>
      <h3>Documentation to placement.</h3>
      ${ticks([
        "Guidance on AFIR eligibility &amp; paperwork",
        "Partnered flying schools for pattern flying",
        "In-depth DGCA ground classes",
        "Mock DGCA tests and simulator practice",
        "Job placement assistance and interview prep",
      ])}
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Steps">
  <div class="wrap split top">
    <div class="stack" style="position:sticky;top:calc(var(--header-h) + 32px)">
      <div data-reveal="fade">${eyebrow("The path")}</div>
      <h2 data-split>Five steps to <em>instructing.</em></h2>
    </div>
    ${journey([
      { title: "Earn your CPL", text: "From a DGCA-approved flight school." },
      { title: "Enrol with PPA", text: "Join the Poetic Pilot Academy AFIR programme." },
      { title: "Pattern flying", text: "Complete pattern flying hours with our partner flying schools." },
      { title: "Pass DGCA AFIR exams", text: "With our mentoring and mock tests." },
      { title: "Start instructing", text: "Teach, build hours and work toward a full FIR." },
    ])}
  </div>
</section>

${ctaBand({ title: "Become a certified <em>instructor.</em>", text: "Join Poetic Pilot Academy Delhi for AFIR, Air Navigation, Meteorology and pilot preparation.", primary: ["contact.html", "Apply now"] })}
`,
};
