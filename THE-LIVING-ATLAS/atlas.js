import { livingAtlasContent } from "./content-registry.js?v=knowledge-library-20260804-1";
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
} from "./web-core.js";

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
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const slides = Array.from(document.querySelectorAll(".carousel-slide"));
  const previousButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  let currentSlide = 0;
  let autoplayTimer;

  const showSlide = (index) => {
    slides.forEach((slide, slideIndex) => {
      slide.style.display = slideIndex === index ? "block" : "none";
      slide.style.animation = "none";
    });
  };

  const stopAutoplay = () => {
    window.clearInterval(autoplayTimer);
    autoplayTimer = undefined;
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (reduceMotion.matches || slides.length < 2 || document.hidden) return;

    autoplayTimer = window.setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 10000);
  };

  if (slides.length > 0 && previousButton && nextButton) {
    previousButton.addEventListener("click", () => {
      currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
      showSlide(currentSlide);
      startAutoplay();
    });

    nextButton.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      startAutoplay();
    });

    document.addEventListener("visibilitychange", startAutoplay);
    reduceMotion.addEventListener("change", startAutoplay);
    startAutoplay();
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
      renderState(true);
    } catch {
      renderState(false);
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
