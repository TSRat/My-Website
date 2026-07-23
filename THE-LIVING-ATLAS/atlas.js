document.addEventListener("DOMContentLoaded", () => {
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

  const menu = document.querySelector(".mobile-menu");
  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.removeAttribute("open");
    });
  });

  const dialog = document.querySelector("[data-search-dialog]");
  const input = dialog?.querySelector("[data-search-input]");
  const results = dialog?.querySelector("[data-search-results]");
  const status = dialog?.querySelector("[data-search-status]");
  const openButtons = document.querySelectorAll("[data-search-open]");

  if (!(dialog instanceof HTMLDialogElement) ||
      !(input instanceof HTMLInputElement) ||
      !(results instanceof HTMLUListElement) ||
      !(status instanceof HTMLElement)) {
    return;
  }

  const entries = [];
  const seenLinks = new Set();

  document.querySelectorAll("main section[id]").forEach((section) => {
    const heading = section.querySelector("h2, h3, .section-label .metadata");
    const title = heading?.textContent?.trim();
    const href = `#${section.id}`;

    if (title && !seenLinks.has(href)) {
      seenLinks.add(href);
      entries.push({ title, href });
    }
  });

  document.querySelectorAll(".site-row").forEach((link) => {
    const title = link.querySelector("h4")?.textContent?.trim();
    const href = link.getAttribute("href");

    if (title && href && !seenLinks.has(href)) {
      seenLinks.add(href);
      entries.push({ title, href });
    }
  });

  const renderResults = () => {
    const query = input.value.trim().toLocaleLowerCase();
    const matches = entries.filter((entry) =>
      entry.title.toLocaleLowerCase().includes(query)
    );

    results.replaceChildren();
    matches.forEach((entry) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = entry.href;
      link.textContent = entry.title;
      link.addEventListener("click", () => dialog.close());
      item.append(link);
      results.append(item);
    });

    status.textContent = dialog.dataset.searchLocale === "zh"
      ? `${matches.length} 个结果`
      : `${matches.length} result${matches.length === 1 ? "" : "s"}`;
  };

  const openSearch = () => {
    if (!dialog.open) dialog.showModal();
    input.value = "";
    renderResults();
    window.requestAnimationFrame(() => input.focus());
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", openSearch);
  });

  input.addEventListener("input", renderResults);
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
  });
});
