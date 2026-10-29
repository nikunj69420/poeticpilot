import { eyebrow, pageHero, btn, basesBlock, icon, WA, EMAIL, PHONE_DELHI, PHONE_BLR, PHONE_ALT } from "../ui.mjs";

export default {
  file: "contact.html",
  key: "contact",
  nav: "",
  canonical: "contact-us",
  title: "Contact Us",
  description: "Request a call back from Poetic Pilot Academy. Bases in Dwarka, New Delhi and Aswathnagar, Bengaluru. Call 088003 20787 or WhatsApp us.",
  body: `
${pageHero({
  crumbs: [["Contact"]],
  kicker: "Request a call back",
  title: "Take the first step <em>toward the cockpit.</em>",
  lead: "Leave your details and our team will call you back — or reach us directly on phone, WhatsApp or email.",
})}

<section class="section tone-light" data-tone="light" data-rail-label="Contact">
  <div class="wrap split top">
    <div class="stack">
      <div data-reveal="fade">${eyebrow("Talk to us")}</div>
      <h2 data-split>We're a call <em>away.</em></h2>
      <dl class="contact-list" data-stagger style="margin-top:40px">
        <div><dt>Delhi</dt><dd><a href="tel:${PHONE_DELHI}">088003 20787</a></dd></div>
        <div><dt>Bengaluru</dt><dd><a href="tel:${PHONE_BLR}">98737 77380</a> · <a href="tel:${PHONE_ALT}">98737 77381</a></dd></div>
        <div><dt>WhatsApp</dt><dd><a href="${WA}" target="_blank" rel="noopener">Chat on WhatsApp</a></dd></div>
        <div><dt>Email</dt><dd><a href="mailto:${EMAIL}">${EMAIL}</a></dd></div>
      </dl>
    </div>

    <form class="form" data-callback-form novalidate data-reveal="scale">
      <h3>Request a call back</h3>
      <div class="field">
        <label for="f-name">Your name</label>
        <input id="f-name" name="name" type="text" autocomplete="name" required placeholder="Full name">
        <span class="error" data-error-for="name" aria-live="polite"></span>
      </div>
      <div class="field">
        <label for="f-phone">Your number</label>
        <input id="f-phone" name="phone" type="tel" autocomplete="tel" required placeholder="+91 98XXX XXXXX">
        <span class="error" data-error-for="phone" aria-live="polite"></span>
      </div>
      <div class="field">
        <label for="f-email">Your email <span class="muted">(optional)</span></label>
        <input id="f-email" name="email" type="email" autocomplete="email" placeholder="you@example.com">
        <span class="error" data-error-for="email" aria-live="polite"></span>
      </div>
      <div class="grid grid-2" style="gap:16px">
        <div class="field">
          <label for="f-programme">Interested in</label>
          <select id="f-programme" name="programme">
            <option value="">Not sure yet</option>
            <option>PPA Elite Program</option>
            <option>CPL Ground Classes</option>
            <option>ATPL Ground Classes</option>
            <option>Airline Preparation</option>
            <option>Cadet Preparation</option>
            <option>Flying Training</option>
            <option>Type Rating</option>
            <option>CPL Conversion</option>
          </select>
        </div>
        <div class="field">
          <label for="f-base">Preferred base</label>
          <select id="f-base" name="base">
            <option>Delhi</option>
            <option>Bengaluru</option>
            <option>Online</option>
          </select>
        </div>
      </div>
      <button class="btn btn-primary" type="submit"><span>Request a call back</span>${icon.arrow}</button>
      <p class="form-note">Submitting opens WhatsApp with your details filled in, so our team can reply right away.</p>
      <p class="form-status" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>

<section class="section tone-dark" data-tone="dark" data-rail-label="Bases">
  <div class="wrap">
    <div class="stack" style="margin-bottom:48px">
      <div data-reveal="fade">${eyebrow("Visit a base")}</div>
      <h2 data-split>Come see a class <em>in person.</em></h2>
    </div>
    ${basesBlock()}
    <div class="grid grid-2" style="margin-top:24px" data-stagger>
      <div class="map-frame"><iframe title="Map of the Delhi base" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Poetic+Pilot+Academy,+Ramphal+Chowk,+Dwarka,+Delhi&output=embed"></iframe></div>
      <div class="map-frame"><iframe title="Map of the Bengaluru base" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.127620901004!2d77.57425617508657!3d13.027544013649315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1741bd5a760d%3A0xbc83cfffe9bb4e48!2sPoetic%20Pilot%20Academy%2C%20Bangalore%20-%20PPA!5e0!3m2!1sen!2sph!4v1774616658043!5m2!1sen!2sph"></iframe></div>
    </div>
  </div>
</section>
`,
};
