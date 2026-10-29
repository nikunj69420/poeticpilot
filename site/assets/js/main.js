/* Poetic Pilot Academy — motion + interaction
   Lenis drives the scroll, GSAP's ticker drives Lenis, ScrollTrigger listens to both.
   Motion rules (from the onetake method): something always carries across a boundary,
   arrivals land on long tails (expo.out), moves ease both ways, exits are shorter than entrances. */
(() => {
  "use strict";

  const html = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = !!(window.gsap && window.ScrollTrigger);
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  window.__ppa = true;

  if (!hasGSAP) {
    html.classList.remove("anim", "is-entering", "flood");
    initBasics(null);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  if (window.SplitText) gsap.registerPlugin(SplitText);
  gsap.defaults({ ease: "expo.out", duration: 1.1 });

  /* ---------- smooth scroll ---------- */
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ lerp: 0.085, smoothWheel: true, anchors: { offset: -88 } });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  window.ppaLenis = lenis;

  initBasics(lenis);
  initPageTransition();

  const ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  ready.then(() => {
    if (reduce) {
      html.classList.remove("anim");
      initJourney(true);
      initTones();
      initRail();
      initCounters(true);
      ScrollTrigger.refresh();
      return;
    }
    initHeroIntro();
    initSplits();
    initReveals();
    initImages();
    initHeroCarry();
    initCounters(false);
    initMarquees();
    initProgramRail();
    initJourney(false);
    // created last so every trigger below the pinned rail is measured with its spacer in place
    initTones();
    initRail();
    initMagnetic();
    ScrollTrigger.refresh();
  });
  window.addEventListener("load", () => ScrollTrigger.refresh());

  /* ---------- tones: the page floods between ink and paper ---------- */
  function initTones() {
    const sections = gsap.utils.toArray("[data-tone]");
    if (!sections.length) return;
    html.dataset.tone = sections[0].dataset.tone;
    sections.forEach((sec) => {
      ScrollTrigger.create({
        trigger: sec,
        start: "top 55%",
        end: "bottom 55%",
        onToggle: (self) => {
          if (self.isActive) html.dataset.tone = sec.dataset.tone;
        },
      });
    });
  }

  /* ---------- page transition: the gold route line carries across pages ---------- */
  function initPageTransition() {
    const pt = document.querySelector(".pt");
    if (!pt) return;
    const panel = pt.querySelector(".pt-panel");
    const line = pt.querySelector(".pt-line");
    const mark = pt.querySelector(".pt-mark");

    if (html.classList.contains("is-entering")) {
      gsap.set(pt, { visibility: "visible" });
      gsap.set(panel, { yPercent: 0 });
      gsap.set(line, { scaleX: 1, transformOrigin: "right center" });
      gsap.set(mark, { opacity: 1 });
      html.classList.remove("is-entering");
      gsap
        .timeline({ onComplete: () => gsap.set(pt, { visibility: "hidden" }) })
        .to(mark, { opacity: 0, y: -12, duration: 0.3, ease: "power2.in" }, 0)
        .to(line, { scaleX: 0, duration: 0.7, ease: "power3.inOut" }, 0.05)
        .to(panel, { yPercent: -100, duration: 0.9, ease: "power3.inOut" }, 0.15);
    }

    if (reduce) return;

    document.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a || e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || /^(mailto|tel|javascript):/i.test(href)) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.hash) return;
      e.preventDefault();
      try {
        sessionStorage.setItem("ppa-pt", "1");
      } catch (_) {}
      if (lenis) lenis.stop();
      gsap.set(pt, { visibility: "visible" });
      gsap
        .timeline({ onComplete: () => (location.href = url.href) })
        .fromTo(panel, { yPercent: 100 }, { yPercent: 0, duration: 0.7, ease: "power3.inOut" }, 0)
        .fromTo(line, { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 0.6, ease: "expo.out" }, 0.38)
        .fromTo(mark, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, ease: "expo.out" }, 0.45);
    });

    // returning via the back button restores a frozen page; clear the curtain
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) {
        gsap.set(pt, { visibility: "hidden" });
        gsap.set(panel, { yPercent: 100 });
        gsap.set(line, { scaleX: 0 });
        gsap.set(mark, { opacity: 0 });
        if (lenis) lenis.start();
      }
    });
  }

  /* ---------- hero intro ---------- */
  function initHeroIntro() {
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;
    const delay = 0.25;
    const title = hero.querySelector("h1");
    const items = hero.querySelectorAll("[data-hero-item]");
    const tl = gsap.timeline({ delay });
    if (title && window.SplitText) {
      gsap.set(title, { visibility: "visible" });
      // autoSplit re-measures lines if the viewport changes; returning the tween lets SplitText keep its progress
      SplitText.create(title, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit: (self) =>
          gsap.fromTo(self.lines, { yPercent: 115 }, { yPercent: 0, duration: 1.4, stagger: 0.1, ease: "expo.out", delay }),
      });
    } else if (title) {
      gsap.set(title, { visibility: "visible" });
    }
    if (items.length) {
      tl.fromTo(
        items,
        { opacity: 0, y: 24, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, stagger: 0.09, ease: "expo.out", clearProps: "filter" },
        0.45,
      );
    }
    const media = hero.querySelector(".hero-media");
    if (media) tl.fromTo(media, { scale: 1.08 }, { scale: 1, duration: 2.4, ease: "expo.out" }, 0);
  }

  /* ---------- split headings ---------- */
  function initSplits() {
    if (!window.SplitText) {
      gsap.set("[data-split]", { visibility: "visible" });
      return;
    }
    gsap.utils.toArray("[data-split]").forEach((el) => {
      if (el.closest("[data-hero]")) return;
      gsap.set(el, { visibility: "visible" });
      SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit(self) {
          return gsap.fromTo(
            self.lines,
            { yPercent: 115 },
            {
              yPercent: 0,
              duration: 1.25,
              stagger: 0.09,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            },
          );
        },
      });
    });
  }

  /* ---------- reveals: three different entrances so sections never repeat ---------- */
  function initReveals() {
    gsap.utils.toArray("[data-reveal]").forEach((el) => {
      if (el.closest("[data-hero]") && el.hasAttribute("data-hero-item")) return;
      const kind = el.dataset.reveal || "rise";
      const from =
        kind === "fade"
          ? { opacity: 0, filter: "blur(10px)" }
          : kind === "left"
            ? { opacity: 0, x: -48 }
            : kind === "scale"
              ? { opacity: 0, scale: 0.94, y: 24 }
              : { opacity: 0, y: 44 };
      gsap.fromTo(el, from, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: kind === "fade" ? 1.4 : 1.2,
        ease: "expo.out",
        clearProps: "filter,transform",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    });

    gsap.utils.toArray("[data-stagger]").forEach((wrap) => {
      const kids = wrap.children;
      gsap.fromTo(
        kids,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: Number(wrap.dataset.stagger) || 0.08,
          ease: "expo.out",
          clearProps: "transform",
          scrollTrigger: { trigger: wrap, start: "top 86%", once: true },
        },
      );
    });
  }

  /* ---------- images: masked reveals and parallax ---------- */
  function initImages() {
    gsap.utils.toArray("[data-img-reveal]").forEach((el) => {
      const img = el.querySelector("img");
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      tl.fromTo(el, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power4.inOut" }, 0);
      if (img) tl.fromTo(img, { scale: 1.3 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0.2);
    });

    gsap.utils.toArray("[data-parallax]").forEach((el) => {
      const amt = Number(el.dataset.parallax) || 12;
      const img = el.querySelector("img") || el;
      gsap.set(img, { scale: 1 + amt / 50 });
      gsap.fromTo(
        img,
        { yPercent: -amt / 2 },
        {
          yPercent: amt / 2,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    });
  }

  /* ---------- hero carry: the hero frame shrinks into a card as the next section arrives ---------- */
  function initHeroCarry() {
    const hero = document.querySelector("[data-hero-carry]");
    if (!hero) return;
    const media = hero.querySelector(".hero-media");
    const content = hero.querySelector(".hero-content");
    const tl = gsap.timeline({
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.6 },
    });
    tl.fromTo(
      media,
      { clipPath: "inset(0% 0% 0% 0% round 0px)" },
      { clipPath: "inset(10% 3% 14% 3% round 32px)", ease: "power2.inOut" },
      0,
    );
    if (content) tl.fromTo(content, { y: 0, opacity: 1 }, { y: -120, opacity: 0, ease: "power1.in" }, 0);

    const video = hero.querySelector("video");
    if (video) {
      ScrollTrigger.create({
        trigger: hero,
        start: "top top",
        end: "bottom top",
        onLeave: () => video.pause(),
        onEnterBack: () => video.play().catch(() => {}),
      });
    }
  }

  /* ---------- counters ---------- */
  function initCounters(instant) {
    gsap.utils.toArray("[data-count]").forEach((el) => {
      const end = Number(el.dataset.count);
      if (instant) {
        el.textContent = end.toLocaleString("en-IN");
        return;
      }
      const obj = { v: 0 };
      el.textContent = "0";
      gsap.to(obj, {
        v: end,
        duration: 2.2,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => (el.textContent = Math.round(obj.v).toLocaleString("en-IN")),
      });
    });
  }

  /* ---------- marquees: speed follows scroll velocity, direction follows scroll direction ---------- */
  function initMarquees() {
    gsap.utils.toArray("[data-marquee]").forEach((wrap) => {
      const track = wrap.querySelector(".marquee-track");
      if (!track) return;
      const clone = track.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.querySelectorAll("a, button").forEach((n) => n.setAttribute("tabindex", "-1"));
      wrap.appendChild(clone);
      const tracks = [track, clone];
      const base = (Number(wrap.dataset.speed) || 40) * (wrap.dataset.reverse ? 1 : -1);
      let x = 0;
      let dir = 1;
      let width = track.offsetWidth;
      let visible = false;
      ScrollTrigger.create({ trigger: wrap, start: "top bottom", end: "bottom top", onToggle: (s) => (visible = s.isActive) });
      ScrollTrigger.addEventListener("refreshInit", () => (width = track.offsetWidth));
      const setters = tracks.map((t) => gsap.quickSetter(t, "x", "px"));
      gsap.ticker.add((_, delta) => {
        if (!visible || !width) return;
        const v = lenis ? lenis.velocity : 0;
        if (Math.abs(v) > 0.5) dir = v > 0 ? 1 : -1;
        const boost = 1 + Math.min(Math.abs(v) * 0.08, 4);
        x += ((base * dir * boost) * delta) / 1000;
        x = gsap.utils.wrap(-width, 0, x);
        setters.forEach((set) => set(x));
      });
    });
  }

  /* ---------- programmes: a pinned horizontal rail on wide screens ---------- */
  function initProgramRail() {
    const section = document.querySelector("[data-rail-section]");
    if (!section) return;
    const rail = section.querySelector(".rail");
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      rail.classList.add("is-horizontal");
      const distance = () => Math.max(0, rail.scrollWidth - section.querySelector(".rail-wrap").clientWidth);
      const tween = gsap.to(rail, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + distance(),
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });
      return () => {
        tween.scrollTrigger && tween.scrollTrigger.kill();
        tween.kill();
        gsap.set(rail, { clearProps: "transform" });
        rail.classList.remove("is-horizontal");
      };
    });
  }

  /* ---------- journey timeline: the gold line draws as you read ---------- */
  function initJourney(instant) {
    gsap.utils.toArray("[data-journey]").forEach((wrap) => {
      const fill = wrap.querySelector(".journey-line i");
      const steps = wrap.querySelectorAll(".step");
      if (instant) {
        steps.forEach((s) => s.classList.add("is-active"));
        return;
      }
      if (fill) {
        gsap.fromTo(
          fill,
          { scaleY: 0 },
          { scaleY: 1, ease: "none", scrollTrigger: { trigger: wrap, start: "top 62%", end: "bottom 62%", scrub: 0.5 } },
        );
      }
      steps.forEach((step) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 62%",
          onEnter: () => step.classList.add("is-active"),
          onLeaveBack: () => step.classList.remove("is-active"),
        });
      });
    });
  }

  /* ---------- flight rail: one aircraft travels the whole page ---------- */
  function initRail() {
    const rail = document.querySelector(".flight-rail");
    if (!rail) return;
    const fill = rail.querySelector(".rail-fill");
    const plane = rail.querySelector(".rail-plane");
    const label = rail.querySelector(".rail-label");
    const setFill = gsap.quickSetter(fill, "scaleY");
    const setPlane = gsap.quickSetter(plane, "y", "px");
    const setLabel = gsap.quickSetter(label, "y", "px");
    const update = (p) => {
      const h = rail.clientHeight;
      setFill(p);
      setPlane(p * h);
      setLabel(p * h);
    };
    ScrollTrigger.create({ start: 0, end: "max", onUpdate: (self) => update(self.progress) });
    update(0);
    gsap.utils.toArray("[data-rail-label]").forEach((sec) => {
      ScrollTrigger.create({
        trigger: sec,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => {
          if (self.isActive) label.textContent = sec.dataset.railLabel;
        },
      });
    });
  }

  /* ---------- magnetic buttons ---------- */
  function initMagnetic() {
    if (!finePointer) return;
    gsap.utils.toArray("[data-magnetic]").forEach((el) => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.25);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
      });
      el.addEventListener("pointerleave", () => {
        xTo(0);
        yTo(0);
      });
    });
  }

  /* ======================================================================
     Basics that work with or without GSAP
     ====================================================================== */
  function initBasics(lenis) {
    initHeader(lenis);
    initMenu(lenis);
    initFaq();
    initGallery(lenis);
    initBlogFilter();
    initForm();
    initVideo();
    const y = document.querySelector("[data-year]");
    if (y) y.textContent = new Date().getFullYear();
  }

  function initHeader(lenis) {
    const header = document.querySelector(".site-header");
    if (!header) return;
    let last = 0;
    const onScroll = (y) => {
      header.classList.toggle("is-scrolled", y > 40);
      if (!html.classList.contains("menu-open")) {
        header.classList.toggle("is-hidden", y > 160 && y > last + 2);
        if (y < last - 2) header.classList.remove("is-hidden");
      }
      last = y;
    };
    if (lenis) lenis.on("scroll", (l) => onScroll(l.animatedScroll));
    else window.addEventListener("scroll", () => onScroll(window.scrollY), { passive: true });
    onScroll(window.scrollY);
    header.addEventListener("focusin", () => header.classList.remove("is-hidden"));
  }

  function initMenu(lenis) {
    const btn = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".mobile-menu");
    if (!btn || !menu) return;
    const items = menu.querySelectorAll("nav > ul > li, .m-foot > *");
    let open = false;
    const set = (state) => {
      open = state;
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      html.classList.toggle("menu-open", open);
      if (open) {
        menu.style.visibility = "visible";
        if (lenis) lenis.stop();
        if (window.gsap && !reduce) {
          gsap.killTweensOf([menu, items]);
          gsap.fromTo(menu, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "expo.inOut" });
          gsap.fromTo(items, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.05, ease: "expo.out", delay: 0.35 });
        } else {
          menu.style.clipPath = "none";
        }
        const first = menu.querySelector("a, button");
        if (first) first.focus({ preventScroll: true });
      } else {
        if (lenis) lenis.start();
        if (window.gsap && !reduce) {
          gsap.killTweensOf([menu, items]);
          gsap.to(menu, {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.6,
            ease: "expo.inOut",
            onComplete: () => (menu.style.visibility = "hidden"),
          });
        } else {
          menu.style.clipPath = "inset(0 0 100% 0)";
          menu.style.visibility = "hidden";
        }
      }
    };
    btn.addEventListener("click", () => set(!open));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && open) {
        set(false);
        btn.focus();
      }
    });
    menu.querySelectorAll(".m-link[aria-controls]").forEach((b) => {
      b.addEventListener("click", () => {
        const sub = document.getElementById(b.getAttribute("aria-controls"));
        const expanded = b.getAttribute("aria-expanded") === "true";
        b.setAttribute("aria-expanded", String(!expanded));
        sub.hidden = expanded;
        if (!expanded && window.gsap && !reduce) {
          gsap.fromTo(sub.children, { opacity: 0, x: -12 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.04, ease: "expo.out" });
        }
      });
    });
  }

  function initFaq() {
    document.querySelectorAll(".faq details").forEach((d) => {
      const summary = d.querySelector("summary");
      const body = d.querySelector(".faq-body");
      if (!summary || !body || !window.gsap || reduce) return;
      summary.addEventListener("click", (e) => {
        e.preventDefault();
        if (d.open) {
          gsap.to(body, {
            height: 0,
            duration: 0.5,
            ease: "power3.inOut",
            onComplete: () => {
              d.open = false;
              gsap.set(body, { clearProps: "height" });
              ScrollTrigger.refresh();
            },
          });
        } else {
          d.open = true;
          gsap.fromTo(body, { height: 0 }, { height: "auto", duration: 0.7, ease: "expo.out", onComplete: () => ScrollTrigger.refresh() });
        }
      });
    });
  }

  function initGallery(lenis) {
    const grid = document.querySelector("[data-gallery]");
    if (!grid) return;
    const tiles = Array.from(grid.querySelectorAll(".tile"));
    const chips = document.querySelectorAll("[data-filter]");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const f = chip.dataset.filter;
        chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
        const apply = () => {
          tiles.forEach((t) => (t.hidden = !(f === "all" || t.dataset.cat.split("|").includes(f))));
          if (window.ScrollTrigger) ScrollTrigger.refresh();
          if (window.gsap && !reduce) {
            gsap.fromTo(
              tiles.filter((t) => !t.hidden).slice(0, 12),
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.9, stagger: 0.04, ease: "expo.out", clearProps: "transform" },
            );
          }
        };
        if (window.gsap && !reduce) gsap.to(grid, { opacity: 0, duration: 0.25, ease: "power2.in", onComplete: () => { apply(); gsap.to(grid, { opacity: 1, duration: 0.3 }); } });
        else apply();
      });
    });

    // lightbox
    const lb = document.querySelector(".lightbox");
    if (!lb) return;
    const img = lb.querySelector("img");
    const cap = lb.querySelector("p");
    let idx = 0;
    let lastFocus = null;
    const visibleTiles = () => tiles.filter((t) => !t.hidden);
    const show = (i) => {
      const list = visibleTiles();
      idx = (i + list.length) % list.length;
      const t = list[idx];
      const timg = t.querySelector("img");
      img.src = timg.currentSrc || timg.src;
      img.alt = timg.alt;
      cap.textContent = t.querySelector("figcaption") ? t.querySelector("figcaption").textContent : "";
    };
    const open = (t) => {
      lastFocus = document.activeElement;
      show(visibleTiles().indexOf(t));
      lb.classList.add("is-open");
      lb.setAttribute("aria-hidden", "false");
      if (lenis) lenis.stop();
      lb.querySelector(".lb-close").focus();
    };
    const close = () => {
      lb.classList.remove("is-open");
      lb.setAttribute("aria-hidden", "true");
      if (lenis) lenis.start();
      if (lastFocus) lastFocus.focus();
    };
    tiles.forEach((t) => t.addEventListener("click", () => open(t)));
    lb.querySelector(".lb-close").addEventListener("click", close);
    lb.querySelector(".lb-prev").addEventListener("click", () => show(idx - 1));
    lb.querySelector(".lb-next").addEventListener("click", () => show(idx + 1));
    lb.addEventListener("click", (e) => {
      if (e.target === lb) close();
    });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  function initBlogFilter() {
    const list = document.querySelector("[data-posts]");
    if (!list) return;
    const posts = Array.from(list.querySelectorAll(".post"));
    const chips = document.querySelectorAll("[data-post-filter]");
    chips.forEach((chip) =>
      chip.addEventListener("click", () => {
        const f = chip.dataset.postFilter;
        chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
        posts.forEach((p) => (p.hidden = !(f === "all" || p.dataset.cat === f)));
        if (window.ScrollTrigger) ScrollTrigger.refresh();
        if (window.gsap && !reduce) {
          gsap.fromTo(posts.filter((p) => !p.hidden), { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.03, ease: "expo.out" });
        }
      }),
    );
  }

  function initForm() {
    document.querySelectorAll("[data-callback-form]").forEach((form) => {
      const status = form.querySelector(".form-status");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let ok = true;
        const check = (name, test, msg) => {
          const input = form.elements[name];
          const err = form.querySelector(`[data-error-for="${name}"]`);
          const valid = test(input.value.trim());
          input.setAttribute("aria-invalid", String(!valid));
          if (err) err.textContent = valid ? "" : msg;
          if (!valid && ok) input.focus();
          ok = ok && valid;
        };
        check("name", (v) => v.length >= 2, "Please enter your name.");
        check("phone", (v) => /^[+\d][\d\s-]{8,14}$/.test(v), "Enter a valid phone number.");
        check("email", (v) => v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Enter a valid email or leave it blank.");
        if (!ok) return;
        const d = new FormData(form);
        const lines = [
          "Hello Poetic Pilot Academy, please call me back.",
          `Name: ${d.get("name")}`,
          `Phone: ${d.get("phone")}`,
          d.get("email") ? `Email: ${d.get("email")}` : "",
          d.get("programme") ? `Interested in: ${d.get("programme")}` : "",
          d.get("base") ? `Preferred base: ${d.get("base")}` : "",
        ].filter(Boolean);
        const url = "https://wa.me/918800320787?text=" + encodeURIComponent(lines.join("\n"));
        window.open(url, "_blank", "noopener");
        if (status) status.textContent = "Thanks! WhatsApp has opened with your details — just press send and our team will call you back.";
        form.reset();
      });
    });
  }

  function initVideo() {
    document.querySelectorAll("video[data-autoplay]").forEach((v) => {
      if (reduce) {
        v.removeAttribute("autoplay");
        v.pause();
        return;
      }
      v.muted = true;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }).observe(v);
      }
    });
  }
})();
