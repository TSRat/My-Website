import { livingAtlasContent } from "./content-registry.js";
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
  initMobileMenu();
  initSearch(createSearchEntries(livingAtlasContent, locale));
});
