import { eyebrow, sectionHead, pageHero, btn, featureCard, ctaBand, ticks, faq, WA, icon } from "../ui.mjs";

export default {
  file: "type-rating.html",
  key: "typerating",
  nav: "flight",
  canonical: "a320-b737-type-rating/",
  title: "A320 & B737NG Type Rating in South Africa",
  description: "End-to-end A320 and B737NG type rating assistance for Indian DGCA pilots for US$13,000 all-inclusive: pre-type preparation, training in South Africa and free post-type interview classes.",
  body: `
${pageHero({
  crumbs: [["Flight Training", "flight-training.html"], ["Type Rating"]],
  kicker: "For Indian DGCA pilots",
  title: "A320 &amp; B737NG <em>type rating</em> in South Africa.",
  lead: "Pre-type preparation, type rating assistance and post-type personal interview classes — so you finish the rating ready for airline technical and HR interviews.",
  tags: ["Airbus A320", "Boeing 737NG", "Full-flight simulators"],
  actions: btn("#fees", "What's included", "primary", { magnetic: true }) + `<a class="btn btn-ghost" href="${WA}" target="_blank" rel="noopener">${icon.whatsapp}<span>WhatsApp now</span></a>`,
})}

<section class="section tone-light" data-tone="light" data-rail-label="Why type rating">
  <div class="wrap split top">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("Why it matters")}</div>
      <h2 data-split>A CPL makes you eligible. <em>A type rating makes you hireable.</em></h2>
    </div>
    <div class="prose" data-reveal>
      <p>Indian airlines operate complex, highly automated transport-category aircraft. A type rating certifies you have completed structured ground school, simulator training and assessment on a specific type — without it, airlines cannot induct you directly into line operations.</p>
      <p>The A320 and B737NG are India's most widely flown narrow-bodies, so these two ratings are in constant demand. South Africa offers full-flight simulators, structured training and globally recognised standards suitable for DGCA CPL holders returning to India.</p>
    </div>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="Aircraft">
  <div class="wrap">
    ${sectionHead({ kicker: "Aircraft options", title: "Pick the cockpit <em>that fits you.</em>", layout: "split" })}
    <div class="grid grid-2" data-stagger>
      <article class="card"><span class="card-index">AIRBUS A320</span><h3>Fly-by-wire, systems-managed</h3><p>Automation management, protections and ECAM-driven procedures. Ideal for pilots targeting A320 CEO/NEO operators and comfortable in a systems-managed cockpit.</p></article>
      <article class="card"><span class="card-index">BOEING 737NG</span><h3>Conventional, hands-on</h3><p>Manual flying, non-normal handling and checklist discipline with modern avionics. Suited to pilots who prefer direct control and Boeing narrow-body operators.</p></article>
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="Process">
  <div class="wrap">
    ${sectionHead({ kicker: "Before, during, after", title: "We don't just <em>send you abroad.</em>", layout: "center" })}
    <div class="grid grid-3" data-stagger>
      ${featureCard({ num: "01 · BEFORE", title: "Pre-type preparation", text: "Systems, philosophy, limitations and procedures at interview depth — so the simulator is about skill, not survival." })}
      ${featureCard({ num: "02 · DURING", title: "Training in South Africa", text: "Full-flight simulator sessions covering normal, abnormal and emergency procedures, crew coordination and situational awareness." })}
      ${featureCard({ num: "03 · AFTER", title: "Post-type support", text: "Structured support to bridge certification and airline selection, including free one-to-one interview classes." })}
    </div>
  </div>
</section>

<section class="section tone-dark" id="fees" data-tone="dark" data-rail-label="Inclusions">
  <div class="wrap split">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("Fees &amp; inclusions")}</div>
      <h2 data-split>US$13,000. <em>Everything included.</em></h2>
      <p class="lead" data-reveal>One all-inclusive fee for the A320 or B737NG programme — no hidden charges and no last-minute add-ons. Slots are limited, so ask us for the next available dates.</p>
      <div class="actions" data-reveal>${btn("tel:08800320787", "+91 88003 20787", "primary", { icon: "phone" })}${btn("mailto:info@poeticpilotacademy.com", "Email us", "ghost", { icon: "mail" })}</div>
    </div>
    <div class="card" data-reveal="scale">
      <span class="card-index">US$13,000 · ALL-INCLUSIVE</span>
      ${ticks([
        "Pre-type rating ground preparation",
        "Type rating training in South Africa",
        "Visa assistance",
        "Accommodation and breakfast",
        "Airport pickup and local transport",
        "VAT / GST",
        "Post-type rating support",
        "Personal airline interview classes",
      ])}
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="FAQ">
  <div class="wrap split top">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("Questions")}</div>
      <h2 data-split>Type rating <em>FAQ.</em></h2>
      <p class="lead" data-reveal>Open to Indian pilots holding a DGCA CPL or frozen ATPL. Fresh CPL holders are welcome; airline experience is not required.</p>
    </div>
    ${faq([
      { q: "Where is the type rating conducted?", a: "At approved training facilities in South Africa. Poetic Pilot Academy provides complete assistance before and after the training." },
      { q: "Does PPA conduct the simulator training?", a: "No. We assist Indian pilots with preparation, coordination and post-type airline readiness for programmes conducted in South Africa." },
      { q: "Is it suitable for DGCA CPL holders?", a: "Yes — for pilots holding a DGCA CPL or frozen ATPL, with post-type support aligned to DGCA and airline interview expectations." },
      { q: "What does the US$13,000 fee include?", a: "Pre-type rating preparation, type rating training in South Africa, visa assistance, accommodation with breakfast, airport pickup and local transport, VAT/GST, post-type rating support and personal airline interview classes." },
      { q: "Are the interview classes really included?", a: "Yes. One-to-one sessions after your rating, customised to your aircraft type, background and target airline." },
    ])}
  </div>
</section>

${ctaBand({ title: "Reserve your <em>type rating slot.</em>", text: "Slots are limited and subject to availability. Early enquiry is recommended.", primary: ["contact.html", "Enquire & apply"] })}
`,
};
