import { eyebrow, sectionHead, pageHero, btn, ctaBand, journey, ticks, facts } from "../ui.mjs";

export default {
  file: "cpl-conversion.html",
  key: "conversion",
  nav: "flight",
  canonical: "cpl-conversion",
  title: "Foreign CPL to DGCA Conversion",
  description: "Convert a foreign CPL to a DGCA CPL: eligibility, documents, 9–21 conversion flying hours, DGCA exams and step-by-step support from Poetic Pilot Academy.",
  body: `
${pageHero({
  crumbs: [["Flight Training", "flight-training.html"], ["CPL Conversion"]],
  kicker: "Foreign CPL → DGCA CPL",
  title: "Convert your licence. <em>Fly at home.</em>",
  lead: "Document verification, DGCA theory exams and a short conversion flying component — handled with 1:1 mentorship from airline captains.",
  actions: btn("contact.html", "Free assessment", "primary", { magnetic: true }),
})}

<section class="section tone-light" data-tone="light" data-rail-label="Overview">
  <div class="wrap split top">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("Quick facts")}</div>
      <h2 data-split>What conversion <em>actually involves.</em></h2>
      <p class="lead" data-reveal>Depending on your recency and experience, you may need between 9 and 21 hours of conversion flying at a DGCA-approved FTO.</p>
    </div>
    <div data-reveal>
      ${facts([
        ["Flight hours", "9–21 hours, depending on recency"],
        ["DGCA exams", "Air Regulations, Air Navigation, Meteorology"],
        ["Support", "PPA teams in Delhi & Mumbai"],
        ["Non-Commonwealth CPL", "RTR issued by WPC (e.g. USA)"],
      ])}
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="Eligibility">
  <div class="wrap split">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("Eligibility")}</div>
      <h2 data-split>Have these <em>ready.</em></h2>
    </div>
    <div data-reveal>
      ${ticks([
        "Valid foreign Commercial Pilot Licence (CPL)",
        "Valid Class 1 or 2 medical assessment (for SPL issuance)",
        "Valid RTR(A) / RTR(C) / RTR(P)",
        "Valid FRTOL (Flight Radio Telephony Operator's Licence)",
        "Original and updated personal flying logbook",
        "Approved eGCA logbook entries",
        "Police Clearance Certificate (PCC)",
      ])}
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Process">
  <div class="wrap split top">
    <div class="stack" style="position:sticky;top:calc(var(--header-h) + 32px)">
      <div data-reveal="fade">${eyebrow("Step by step")}</div>
      <h2 data-split>Five steps to an <em>Indian CPL.</em></h2>
    </div>
    ${journey([
      { title: "Document collection", text: "CPL, passport, medical, RTR, FRTOL and logbook submission." },
      { title: "Logbook verification", text: "eGCA-approved entries and recency validation." },
      { title: "Police clearance", text: "Obtain a Police Clearance Certificate from your SP office." },
      { title: "DGCA exams", text: "Pass Air Regulations, Air Navigation and Meteorology." },
      { title: "Conversion flying", text: "Complete the required hours at a DGCA-approved FTO — then DGCA issues your Indian CPL." },
    ])}
  </div>
</section>

${ctaBand({ title: "Need help <em>converting?</em>", text: "Get a free assessment of your logbook, recency and documents — and a clear plan for the DGCA papers.", primary: ["contact.html", "Free assessment"] })}
`,
};
