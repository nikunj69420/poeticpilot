import { eyebrow, sectionHead, pageHero, btn, ctaBand, ticks, LIVE, linkArrow } from "../ui.mjs";

export default {
  file: "air-india-cadet.html",
  key: "airindia",
  nav: "cadet",
  canonical: "airindia-cadet",
  title: "Air India Cadet Pilot Programme",
  description: "Air India Cadet Pilot Programme: India (AIFTA Amravati) and USA (AeroGuard, Acron Aviation) pathways, and how Poetic Pilot Academy prepares you.",
  body: `
${pageHero({
  crumbs: [["Cadet", "cadet.html"], ["Air India"]],
  kicker: "India · USA pathways",
  title: "Air India Cadet <em>Pilot Programme.</em>",
  lead: "Your direct pathway to becoming an Air India pilot — CPL and type rating in India or the USA, with PPA preparing you for selection.",
  actions: btn("#pathways", "Explore pathways", "primary", { magnetic: true }),
})}

<section class="section tone-light" data-tone="light" data-rail-label="About">
  <div class="wrap split">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("About the programme")}</div>
      <h2 data-split>Train at Air India's own academy — <em>or its partners.</em></h2>
    </div>
    <p class="lead" data-reveal>The programme selects aspiring aviators for CPL and type rating training at Air India's Flying Training Academy in Amravati, or at its two partner schools in the United States — AeroGuard Flight Training Center and Acron Aviation Academy.</p>
  </div>
</section>

<section class="section tone-dark" id="pathways" data-tone="dark" data-rail-label="Pathways">
  <div class="wrap">
    ${sectionHead({ kicker: "Choose your pathway", title: "Two routes, <em>one airline.</em>", layout: "split" })}
    <div class="grid grid-2" data-stagger>
      <article class="card">
        <span class="card-index">PATHWAY 01 · INDIA</span>
        <h3>Air India Flying Training Academy, Amravati</h3>
        <p>World-class flight training at AIFTA in Maharashtra, with a seamless transition to type rating within India.</p>
        <div class="card-foot">${linkArrow(LIVE + "airindia-cadet-india", "India pathway details")}</div>
      </article>
      <article class="card">
        <span class="card-index">PATHWAY 02 · USA</span>
        <h3>AeroGuard &amp; Acron Aviation Academy</h3>
        <p>Train at Air India's global partner schools in the United States, known for high-standard pilot training.</p>
        <div class="card-foot">${linkArrow(LIVE + "airindia-cadet-usa", "USA pathway details")}</div>
      </article>
    </div>
  </div>
</section>

<section class="section tone-light" data-tone="light" data-rail-label="How we help">
  <div class="wrap split">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("How PPA helps")}</div>
      <h2 data-split>From student pilot <em>to Air India cockpit.</em></h2>
    </div>
    <div data-reveal>
      ${ticks([
        "<strong>DGCA ground classes</strong> for every subject",
        "<strong>Cadet application &amp; documentation</strong> guidance",
        "<strong>Aptitude and psychometric</strong> test preparation",
        "<strong>Interview training</strong> with airline captains",
      ])}
    </div>
  </div>
</section>

${ctaBand({ title: "Talk to a <em>mentor.</em>", text: "Find out which Air India pathway fits you, and how to prepare for selection." })}
`,
};
