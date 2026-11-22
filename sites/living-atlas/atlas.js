import { livingAtlasContent } from "./content-registry.js?v=editorial-home-20261122-8";
import { analytics } from "./analytics.js";
import {
  createSearchEntries,
  getLocale,
  initMobileMenu,
  initSearch,
  renderFocus,
  renderIndex,
  renderKnowledge,
  renderLatest,
  renderSites,
  renderWorlds,
} from "./web-core.js?v=editorial-home-20261122-8";

const getInteractionSource = (link) => {
  if (link.closest(".mobile-menu")) return "mobile_menu";
  if (link.closest(".global-nav")) return "primary_navigation";
  if (link.closest(".index-section")) return "index";
  if (link.closest(".search-dialog")) return "search";
  return "content";
};

const initAnalyticsHooks = () => {
  document.addEventListener("click", (event) => {
    const link = event.target.closest?.("a");
    if (!link) return;

    if (link.matches("[data-content-id]")) {
      analytics.track("published_site_opened", {
        contentId: link.dataset.contentId,
        interactionSource: getInteractionSource(link),
        properties: { content_type: "site" },
      });
    }

    if (link.getAttribute("href") === "#data") {
      analytics.track("data_section_opened", {
        contentId: "data",
        interactionSource: getInteractionSource(link),
        properties: { content_type: "section" },
      });
    }
  });
};

const initCarousel = () => {
  const slides = Array.from(document.querySelectorAll(".carousel-slide"));
  const previousButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const status = document.querySelector("[data-feature-status]");
  if (slides.length < 2 || !previousButton || !nextButton) return;

  let currentSlide = 0;
  const changeSlide = (step) => {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    slides.forEach((slide, index) => { slide.hidden = index !== currentSlide; });
    if (status) status.textContent = slides[currentSlide].querySelector("h2")?.textContent ?? "";
  };

  previousButton.addEventListener("click", () => changeSlide(-1));
  nextButton.addEventListener("click", () => changeSlide(1));

  for (const image of document.querySelectorAll(".featured-image")) {
    let start;
    image.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "touch" || !event.isPrimary) return;
      start = { id: event.pointerId, x: event.clientX, y: event.clientY };
      image.setPointerCapture(event.pointerId);
    });
    image.addEventListener("pointerup", (event) => {
      if (event.pointerId !== start?.id) return;
      const horizontal = event.clientX - start.x;
      const vertical = event.clientY - start.y;
      start = undefined;
      if (Math.abs(horizontal) >= 48 && Math.abs(horizontal) > Math.abs(vertical) * 1.5) {
        changeSlide(horizontal < 0 ? 1 : -1);
      }
    });
    const clearGesture = (event) => {
      if (event.pointerId === start?.id) start = undefined;
    };
    image.addEventListener("pointercancel", clearGesture);
    image.addEventListener("lostpointercapture", clearGesture);
  }
};

const initBackgroundMusic = () => {
  const audio = document.querySelector("[data-background-music]");
  const toggle = document.querySelector("[data-music-toggle]");
  const label = toggle?.querySelector("[data-music-label]");
  if (!audio || !toggle || !label) return;

  audio.volume = 0.35;

  const renderState = (isPlaying) => {
    toggle.setAttribute("aria-pressed", String(isPlaying));
    toggle.setAttribute(
      "aria-label",
      isPlaying ? toggle.dataset.ariaOn : toggle.dataset.ariaOff,
    );
    label.textContent = isPlaying
      ? toggle.dataset.labelOn
      : toggle.dataset.labelOff;
  };

  toggle.addEventListener("click", async () => {
    if (!audio.paused) {
      audio.pause();
      renderState(false);
      return;
    }

    try {
      await audio.play();
      renderState(!audio.paused);
    } catch (error) {
      if (error.name === "AbortError" || !audio.paused) return;
      renderState(false);
      label.textContent = toggle.dataset.labelError;
      toggle.setAttribute("aria-label", toggle.dataset.labelError);
    }
  });

  audio.addEventListener("pause", () => renderState(false));
  audio.addEventListener("play", () => renderState(true));
  audio.addEventListener("ended", () => renderState(false));
  renderState(false);
};

document.addEventListener("DOMContentLoaded", () => {
  const locale = getLocale();

  renderFocus(
    livingAtlasContent,
    locale,
    document.querySelector("[data-now-list]"),
    document.querySelector("[data-now-label]"),
  );
  renderWorlds(
    livingAtlasContent,
    locale,
    document.querySelector("[data-worlds-list]"),
  );
  renderKnowledge(
    livingAtlasContent,
    locale,
    document.querySelector("[data-knowledge-list]"),
  );
  renderSites(
    livingAtlasContent,
    locale,
    document.querySelector("[data-sites-list]"),
    document.querySelector("[data-sites-label]"),
  );
  renderLatest(
    livingAtlasContent,
    locale,
    document.querySelector("[data-latest-list]"),
  );
  renderIndex(
    livingAtlasContent,
    locale,
    document.querySelector("[data-index-list]"),
  );

  initCarousel();
  initBackgroundMusic();
  initMobileMenu();
  initSearch(createSearchEntries(livingAtlasContent, locale), document, {
    onSearch: ({ queryLength, resultCount }) => {
      analytics.track("search_performed", {
        contentId: "index",
        interactionSource: "search",
        properties: {
          query_length: queryLength,
          result_count: resultCount,
        },
      });
    },
    onResultOpen: (entry) => {
      analytics.track("search_result_opened", {
        contentId: entry.id ?? entry.href,
        interactionSource: "search",
        properties: { content_type: entry.type },
      });
    },
  });
  initAnalyticsHooks();
});
