(() => {
  const body = document.body;
  const panel = document.querySelector(".glossary-panel");
  const closeButton = document.querySelector(".glossary-close");
  const handle = document.querySelector(".sheet-handle");
  const defaultView = document.querySelector(".glossary-default");
  const activeView = document.querySelector(".glossary-active");
  const termNode = document.querySelector("[data-glossary-term]");
  const arabicNode = document.querySelector("[data-glossary-arabic]");
  const definitionNode = document.querySelector("[data-glossary-definition]");
  const geoRow = document.querySelector("[data-glossary-geo-row]");
  const geoNode = document.querySelector("[data-glossary-geo]");
  const sourceNode = document.querySelector("[data-glossary-source]");
  const progress = document.querySelector(".reading-progress span");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const isMobile = window.matchMedia("(max-width: 767px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const eraColors = ["#D7B593", "#F4EFE6", "#E8E9EB", "#0B1320"];
  const glossary = new Map(
    JSON.parse(document.querySelector("#glossary-data")?.textContent || "[]")
      .map((entry) => [entry.term, entry]),
  );
  let activeTrigger = null;
  let frameRequested = false;
  let dragStart = null;

  const track = (name, properties = {}) => {
    window.dispatchEvent(new CustomEvent("arab-history:interaction", {
      detail: { name, properties },
    }));
  };

  const setEra = (eraIndex) => {
    const value = String(eraIndex);
    if (body.dataset.era === value) return;
    body.dataset.era = value;
    themeColor?.setAttribute("content", eraColors[eraIndex] || eraColors[0]);
    document.querySelectorAll("[data-era-nav]").forEach((link) => {
      if (link.dataset.eraNav === value) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
    track("era_enter", { era_index: eraIndex });
  };

  const eraSections = [...document.querySelectorAll("[data-era-section]")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(({ isIntersecting }) => isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
      if (visible) setEra(Number(visible.target.dataset.eraSection));
    }, {
      rootMargin: "-18% 0px -62% 0px",
      threshold: [0, 0.05, 0.2, 0.5],
    });
    eraSections.forEach((section) => observer.observe(section));
  }

  const openGlossary = (term, trigger) => {
    const entry = glossary.get(term);
    if (!entry) return;

    document.querySelectorAll(".glossary-trigger[aria-expanded='true']")
      .forEach((button) => button.setAttribute("aria-expanded", "false"));
    if (trigger?.classList.contains("glossary-trigger")) {
      trigger.setAttribute("aria-expanded", "true");
      activeTrigger = trigger;
    }

    termNode.textContent = entry.term;
    arabicNode.textContent = entry.arabic;
    definitionNode.textContent = entry.definition;
    geoRow.hidden = !entry.geo_location;
    geoNode.textContent = entry.geo_location || "";
    sourceNode.textContent = `${entry.source_locator} · ${entry.source_volume}`;
    defaultView.hidden = true;
    activeView.hidden = false;

    if (isMobile.matches) {
      panel.dataset.open = "true";
      closeButton.focus({ preventScroll: true });
    }
    track("glossary_open", { term_id: entry.term, source_volume: entry.source_volume });
  };

  const closeGlossary = ({ restoreFocus = true } = {}) => {
    panel.dataset.open = "false";
    panel.style.removeProperty("transform");
    panel.style.removeProperty("transition");
    document.querySelectorAll(".glossary-trigger[aria-expanded='true']")
      .forEach((button) => button.setAttribute("aria-expanded", "false"));
    if (restoreFocus && activeTrigger) activeTrigger.focus({ preventScroll: true });
    track("glossary_close");
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-glossary-id]");
    if (trigger) {
      event.preventDefault();
      openGlossary(trigger.dataset.glossaryId, trigger);
      return;
    }
    const eraLink = event.target.closest("[data-era-nav]");
    if (eraLink) track("era_navigation", { era_index: Number(eraLink.dataset.eraNav) });
  });

  closeButton?.addEventListener("click", () => closeGlossary());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && panel.dataset.open === "true") closeGlossary();
  });

  handle?.addEventListener("pointerdown", (event) => {
    if (!isMobile.matches) return;
    dragStart = event.clientY;
    handle.setPointerCapture(event.pointerId);
    panel.style.transition = "none";
  });

  handle?.addEventListener("pointermove", (event) => {
    if (dragStart === null) return;
    const distance = Math.max(0, event.clientY - dragStart);
    panel.style.transform = `translate3d(0, ${distance}px, 0)`;
  });

  const finishDrag = (event) => {
    if (dragStart === null) return;
    const distance = Math.max(0, event.clientY - dragStart);
    dragStart = null;
    panel.style.removeProperty("transition");
    panel.style.removeProperty("transform");
    if (distance > 96) closeGlossary();
  };
  handle?.addEventListener("pointerup", finishDrag);
  handle?.addEventListener("pointercancel", finishDrag);

  const updateProgress = () => {
    frameRequested = false;
    const maximum = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maximum > 0 ? Math.min(1, Math.max(0, window.scrollY / maximum)) : 0;
    progress.style.transform = `scaleX(${ratio})`;
  };
  window.addEventListener("scroll", () => {
    if (frameRequested) return;
    frameRequested = true;
    requestAnimationFrame(updateProgress);
  }, { passive: true });

  isMobile.addEventListener?.("change", ({ matches }) => {
    if (!matches) closeGlossary({ restoreFocus: false });
  });
  reducedMotion.addEventListener?.("change", () => {
    panel.style.removeProperty("transition");
  });

  document.querySelector('[data-era-nav="0"]')?.setAttribute("aria-current", "true");
  updateProgress();
})();
