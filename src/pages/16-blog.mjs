import { pageHero, ctaBand, icon, LIVE } from "../ui.mjs";

// Articles live on the existing blog; this index links to them.
const posts = [
  ["flying-training-philippines-dgca", "Flying Training in the Philippines: Is a Philippines CPL Accepted by DGCA?", "training"],
  ["how-to-become-pilot", "How to Become a Pilot in India", "career"],
  ["how-long-does-it-take-to-become-pilot", "How Long Does It Take to Become a Pilot?", "career"],
  ["can-i-become-pilot-without-physics-and-maths", "Can I Become a Pilot Without Physics and Maths?", "career"],
  ["cpl-cost-in-india", "CPL Cost in India", "career"],
  ["pilot-training-loans", "Pilot Training Loans", "career"],
  ["airline-pilot-salary-india", "Airline Pilot Salary in India", "career"],
  ["jharkhand-cpl-scholarship", "Jharkhand CPL Scholarship", "career"],
  ["pilot-training-india", "Pilot Training in India", "training"],
  ["cadet-vs-conventional-pilot-training", "Cadet vs Conventional Pilot Training", "cadet"],
  ["indigo-chimes-cadet-pilot-program", "IndiGo Chimes Cadet Pilot Programme", "cadet"],
  ["indigo-pilot-scholarship-women", "IndiGo Pilot Scholarship for Women", "cadet"],
  ["air-arabia-cadet-pilot-program", "Air Arabia Cadet Pilot Programme", "cadet"],
  ["flydubai-mpl-cadet-pilot-program", "flydubai MPL Cadet Pilot Programme", "cadet"],
  ["difference-between-cpl-and-atpl", "Difference Between CPL and ATPL", "dgca"],
  ["what-is-atpl", "What Is an ATPL?", "dgca"],
  ["are-dgca-cpl-exams-hard", "Are DGCA CPL Exams Hard?", "dgca"],
  ["is-dgca-air-navigation-hard", "Is DGCA Air Navigation Hard?", "dgca"],
  ["is-dgca-meteorology-hard", "Is DGCA Meteorology Hard?", "dgca"],
  ["is-dgca-air-regulations-hard", "Is DGCA Air Regulations Hard?", "dgca"],
  ["is-dgca-technical-general-hard", "Is DGCA Technical General Hard?", "dgca"],
  ["is-dgca-rtr-hard", "Is DGCA RTR Hard?", "dgca"],
  ["dgca-class-1-medical-test-list", "DGCA Class 1 Medical Test List", "dgca"],
  ["dgca-class-2-medical-test-list", "DGCA Class 2 Medical Test List", "dgca"],
  ["aviation-phonetic-alphabet", "The Aviation Phonetic Alphabet", "aviation"],
  ["gps-jamming-vs-gps-spoofing-aviation", "GPS Jamming vs GPS Spoofing in Aviation", "aviation"],
  ["india-first-offshore-airport-palghar-maharashtra", "India's First Offshore Airport at Palghar, Maharashtra", "aviation"],
  ["dgca-conducts-first-satellite-based-landing-system-trial-india", "DGCA Conducts India's First Satellite-Based Landing System Trial", "aviation"],
  ["best-dgca-ground-classes-india", "Best DGCA Ground Classes in India", "institutes"],
  ["best-dgca-ground-classes-delhi", "Best DGCA Ground Classes in Delhi", "institutes"],
  ["best-dgca-ground-classes-bangalore", "Best DGCA Ground Classes in Bangalore", "institutes"],
  ["delhi-branch-vs-bangalore-branch", "PPA Delhi vs Bangalore: Which Branch Suits You?", "institutes"],
  ["best-pilot-training-institute-delhi", "Best Pilot Training Institute in Delhi", "institutes"],
  ["best-pilot-training-institute-mumbai", "Best Pilot Training Institute in Mumbai", "institutes"],
  ["best-pilot-training-institute-chennai", "Best Pilot Training Institute in Chennai", "institutes"],
  ["best-dgca-cpl-ground-classes-pune", "Best DGCA CPL Ground Classes in Pune", "institutes"],
  ["best-dgca-cpl-ground-classes-jaipur", "Best DGCA CPL Ground Classes in Jaipur", "institutes"],
  ["best-dgca-cpl-ground-classes-hyderabad", "Best DGCA CPL Ground Classes in Hyderabad", "institutes"],
  ["best-dgca-cpl-ground-classes-ahmedabad", "Best DGCA CPL Ground Classes in Ahmedabad", "institutes"],
];

const cats = {
  dgca: "DGCA exams",
  career: "Career",
  cadet: "Cadet",
  training: "Training",
  aviation: "Aviation",
  institutes: "Institutes",
};

export default {
  file: "blog.html",
  key: "blog",
  nav: "blog",
  canonical: "blog",
  title: "Blog",
  description: "Guides on becoming a pilot in India: DGCA exams, CPL cost, cadet programmes, medicals, flying training abroad and aviation news from Poetic Pilot Academy.",
  body: `
${pageHero({
  crumbs: [["Blog"]],
  kicker: "Pilot's notebook",
  title: "Straight answers for <em>future pilots.</em>",
  lead: "DGCA exams, CPL costs, cadet programmes, medicals and flying abroad — written by the people who teach it.",
})}

<section class="section tone-light" data-tone="light" data-rail-label="Articles">
  <div class="wrap">
    <div class="filters" role="group" aria-label="Filter articles" data-reveal="fade">
      <button class="chip" type="button" data-post-filter="all" aria-pressed="true">All</button>
      ${Object.entries(cats)
        .map(([k, v]) => `<button class="chip" type="button" data-post-filter="${k}" aria-pressed="false">${v}</button>`)
        .join("")}
    </div>
    <div data-posts style="border-top:1px solid var(--line)">
      ${posts
        .map(
          ([slug, title, cat]) => `
      <a class="post" href="${LIVE}blog/${slug}" target="_blank" rel="noopener" data-cat="${cat}">
        <span class="post-cat">${cats[cat]}</span>
        <h3>${title}</h3>
        <span class="post-go" aria-hidden="true">${icon.arrowUpRight}</span>
      </a>`,
        )
        .join("")}
    </div>
  </div>
</section>

${ctaBand({ title: "Have a question <em>we haven't answered?</em>", text: "Ask us directly — our instructors answer questions about DGCA exams, flying schools and airline selection every day." })}
`,
};
