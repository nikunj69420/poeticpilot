import { UP, pageHero, ctaBand, icon } from "../ui.mjs";

// [file under wp-content/uploads, categories, caption, place]
const photos = [
  ["2026/06/IMG_9643.jpeg", "ground", "May batch", "Delhi"],
  ["2026/06/IMG_9623.jpeg", "ground", "June batch", "Delhi"],
  ["2026/06/IMG_9644.jpeg", "ground", "April batch", "Delhi"],
  ["2026/09/august-batch.jpeg", "students", "August batch", ""],
  ["2026/07/july-batch.jpeg", "ground", "July batch", "Delhi"],
  ["2026/09/cadet-pilots.jpeg", "cadet", "Cadet pilots", "Delhi"],
  ["2026/07/proud-moment-for-poetic-pilot-acadmey.jpg", "airline", "A proud moment for PPA", "Delhi"],
  ["2026/06/1000183874.jpg", "campus", "PPA", "Delhi"],
  ["2026/07/poetic-pilot-acadmey-proudly-congratulates-our-students.jpg", "airline", "PPA proudly congratulates our student", "Delhi"],
  ["2026/07/proud-moment-for-poetic-pilot-acadmey.jpeg", "airline", "A proud moment for PPA", "Delhi"],
  ["2026/07/congratulationsfuture-pilot.jpg", "cadet", "Congratulations, future pilot!", "Chennai"],
  ["2026/09/new-premises.jpeg", "campus", "Our new premises", "Delhi"],
  ["2026/07/cricket-tournament.jpeg", "events", "Cricket tournament", "Delhi"],
  ["2026/07/students-at-ppa.jpeg", "students", "Students at PPA", "Delhi"],
  ["2026/07/capt-mohit-teotia.jpeg", "ground", "Capt. Mohit Teotia", "Delhi"],
  ["2026/07/atc-delhi-visit.jpeg", "events", "ATC Delhi visit", "Delhi"],
  ["2026/07/students.jpeg", "students", "Students", "Delhi"],
  ["2026/06/classes-at-ppa.jpeg", "ground", "Classes at PPA", "Delhi"],
  ["2026/06/bac96554-4c03-43ba-bdfb-7c590ad6a11e.jpeg", "ground", "Classes in Bengaluru", "Bengaluru"],
  ["2026/09/trip-to-elevate-2.jpeg", "events", "Trip to EleVate", ""],
  ["2026/07/proud-moment-for-poetic-pilot-acadmey-1.jpg", "airline", "A proud moment for PPA", "Bengaluru"],
  ["2026/06/IMG_8252.jpeg", "ground", "Classes by Capt. Mohit Teotia", "Delhi"],
  ["2026/07/congratulations-to-our-indigo-cadet-selections.jpeg", "students|results", "Congratulations to our IndiGo cadet selections", "Delhi"],
  ["2026/09/airline-pilots-1.jpeg", "airline", "Airline pilots", "Delhi"],
  ["2026/06/IMG_2958.jpeg", "events", "Cricket tournament at PPA", "Dwarka"],
  ["2026/07/our-studentsour-pride-poetic-pilot-acadmey.jpeg", "airline", "Our students, our pride", "Chennai"],
  ["2026/07/rtr-part-2-results.jpg", "students|results", "RTR Part 2 results — July", "Delhi"],
  ["2026/09/trip-to-elevate.jpeg", "events", "Trip to EleVate", ""],
  ["2026/06/IMG_8346.jpeg", "ground", "Classes by Capt. Mohit Teotia", "Delhi"],
  ["2026/07/students-1.jpeg", "students", "Students", "Delhi"],
  ["2026/07/dgca-june-2026-results.png", "results", "DGCA June 2026 results", "Delhi"],
  ["2026/07/congratulations-to-our-student-ppa.jpeg", "airline", "Congratulations to our student", "Bengaluru"],
  ["2026/09/congratulations-on-successfully-clearing-the-akasa-skycadet-pilot-training-program.jpeg", "cadet", "Cleared the Akasa SkyCadet pilot training programme", "Delhi"],
  ["2026/07/proud-moment-for-poetic-pilot-acadmey-2.jpg", "airline", "A proud moment for PPA", "Mumbai"],
  ["2026/06/970efa55-8ca3-4783-9b33-775f9ae4b433.jpeg", "events", "PPA Bengaluru cricket", "Bengaluru"],
  ["2026/06/FullSizeRender.jpeg", "ground", "Classes by Capt. Mohit Teotia", "Delhi"],
  ["2026/09/congratulations-on-successfully-clearing-the-air-india-cadet-pilot-program.jpeg", "cadet", "Cleared the Air India cadet pilot programme", "Delhi"],
  ["2026/07/rtr-part-2-results-1.jpg", "students|results", "RTR Part 2 results — July", "Bengaluru"],
  ["2026/07/congratulations-to-our-student-ppa.jpg", "airline", "Congratulations to our student", "Bengaluru"],
  ["2026/07/proud-moment-selected-by-leading-airlines.jpg", "airline", "Selected by leading airlines", "Bengaluru"],
  ["2026/06/IMG_1728.jpeg", "events", "Delhi ATC visit", "Delhi"],
  ["2026/07/faculty-at-ppa.jpeg", "ground|alumni", "Faculty at PPA", "Delhi"],
  ["2026/09/airline-pilots-2.jpeg", "airline", "Airline pilots", "Delhi"],
  ["2026/07/technical-general-to-achivers.webp", "results", "Technical General top achievers", "Delhi"],
  ["2026/07/from-classroom-to-cockpit-congratulations-ppa.jpg", "airline", "From classroom to cockpit", "Delhi"],
  ["2026/07/dgca-june-2026-results-4.png", "results", "DGCA June 2026 results", "Delhi"],
  ["2026/06/IMG_6004.jpeg", "events", "Cricket tournament at PPA", "Dwarka, Delhi"],
  ["2026/07/first-solo-flight-congratulations.jpeg", "students", "First solo flight — congratulations!", "Jalgaon"],
  ["2026/07/dgca-june-2026-results-1.png", "results", "DGCA June 2026 results", "Pune"],
  ["2026/07/live-class-recording-at-ppa.jpeg", "students", "Live class recording at PPA", "Bengaluru"],
  ["2026/07/dgca-june-2026-results-6.png", "results", "DGCA June 2026 results", "Delhi"],
  ["2026/07/dgca-june-2026-results-2.png", "results", "DGCA June 2026 results", "Delhi"],
  ["2026/07/dgca-june-2026-results-3.png", "results", "DGCA June 2026 results", "Bengaluru"],
  ["2026/06/IMG_8054.jpeg", "ground", "Capt. Mohit Teotia", "Delhi"],
  ["2026/07/academic-exellence-recognized.jpeg", "students", "Academic excellence recognised", "Delhi"],
  ["2026/07/dgca-june-2026-results-5.png", "results", "DGCA June 2026 results", "Delhi"],
  ["2026/07/a-proud-milestone-for-poetic-pilot-acadmey.jpg", "airline", "A proud milestone for PPA", "Bengaluru"],
  ["2026/07/first-solo-done.jpeg", "students|alumni", "First solo done!", "South Africa"],
  ["2026/07/soaring-high-with-poetic-pilot-academy.jpeg", "students", "Soaring high with Poetic Pilot Academy", "Skynex"],
  ["2026/09/trip-to-elevate-1.jpeg", "events", "Trip to EleVate", ""],
  ["2026/09/airline-pilots.jpeg", "airline", "Airline pilots", "Delhi"],
  ["2026/09/cadet-pilots-1.jpeg", "cadet", "Cadet pilots", "Delhi"],
  ["2026/07/classroom-shenanigans.jpeg", "ground", "Classroom shenanigans", "Delhi"],
  ["2026/07/first-solo-done-1.jpeg", "students|alumni", "First solo done", "India"],
  ["2026/07/cricket-tournament-1.jpeg", "events", "Cricket tournament", "Delhi"],
  ["2026/07/future-pilotsready-for-takeoff-poetic-pilot-acadmey.jpg", "airline", "Future pilots, ready for take-off", "Bengaluru"],
  ["2026/07/top-11-in-air-navigation-june-2026.png", "results", "Top 11 in Air Navigation — June 2026", "Delhi"],
  ["2026/07/classes-at-ppa.jpeg", "ground|campus|events|alumni", "Classes at PPA", "Pune"],
  ["2026/07/one-step-closer-to-the-cockpit.jpg", "cadet", "One step closer to the cockpit", ""],
  ["2026/06/800e0b61-8b37-45d2-b9ca-550abee33f73.jpeg", "ground", "Classes at PPA", ""],
  ["2026/07/classroom.jpeg", "students", "Classroom", ""],
];

const filters = [
  ["all", "All"],
  ["ground", "Ground classes"],
  ["results", "Results"],
  ["airline", "Airline selections"],
  ["cadet", "Cadet selections"],
  ["students", "Students"],
  ["events", "Events"],
  ["campus", "Campus"],
  ["alumni", "Alumni"],
];

export default {
  file: "gallery.html",
  key: "gallery",
  nav: "gallery",
  canonical: "gallery",
  title: "Gallery",
  description: "Classroom sessions, results days, ATC visits, cadet selections and first solos — life at Poetic Pilot Academy in Delhi and Bengaluru.",
  body: `
${pageHero({
  crumbs: [["Gallery"]],
  kicker: "PPA moments",
  title: "Every picture <em>tells a story.</em>",
  lead: "Classroom sessions, simulator training, aviation events, results days and the memories our students carry into the cockpit.",
  tags: ["1000+ students", `${photos.length} photos`, "100+ batches", "Since 2023"],
})}

<section class="section tone-light" data-tone="light" data-rail-label="Photos">
  <div class="wrap">
    <div class="filters" role="group" aria-label="Filter photos" data-reveal="fade">
      ${filters.map(([k, label], i) => `<button class="chip" type="button" data-filter="${k}" aria-pressed="${i === 0}">${label}</button>`).join("")}
    </div>
    <div class="masonry" data-gallery>
      ${photos
        .map(
          ([src, cat, cap, place]) => `
      <button class="tile" type="button" data-cat="${cat}" aria-label="Open photo: ${cap}">
        <figure>
          <img src="${UP + src}" alt="${cap}${place ? " — " + place : ""}" loading="lazy" decoding="async">
          <figcaption>${cap}${place ? ` · ${place}` : ""}</figcaption>
        </figure>
      </button>`,
        )
        .join("")}
    </div>
  </div>
</section>

<div class="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" aria-hidden="true">
  <button class="lb-close" type="button" aria-label="Close">${icon.close}</button>
  <button class="lb-nav lb-prev" type="button" aria-label="Previous photo">${icon.left}</button>
  <figure><img src="" alt=""><p></p></figure>
  <button class="lb-nav lb-next" type="button" aria-label="Next photo">${icon.right}</button>
</div>

${ctaBand({ title: "Your story <em>starts here.</em>", text: "Join the next batch in Delhi, Bengaluru or online." })}
`,
};
