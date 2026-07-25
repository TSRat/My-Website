import { analytics } from "./analytics.js";
import { zhangYongContent } from "./content-registry.js";
import { siteManifest } from "./site-manifest.js";

const root = document.documentElement;
root.dataset.implementation = "static-es-modules";
root.dataset.siteId = siteManifest.id;

const navigationLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sectionById = new Map(
  zhangYongContent.sections.map((section) => [
    section.id,
    document.getElementById(section.id),
  ]),
);

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const contentId = link.hash.slice(1);
    analytics.track("chapter_opened", {
      contentId,
      interactionSource: "primary_navigation",
    });
  });
});

document.querySelectorAll('a[href="#data"]').forEach((link) => {
  link.addEventListener("click", () => {
    analytics.track("data_section_opened", {
      contentId: "data",
      interactionSource: "internal_link",
    });
  });
});

if ("IntersectionObserver" in window) {
  const observedSections = navigationLinks
    .map((link) => sectionById.get(link.hash.slice(1)))
    .filter(Boolean);
  const navObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      navigationLinks.forEach((link) => {
        if (link.hash === `#${visible.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-18% 0px -68%", threshold: [0, 0.2, 0.5] },
  );

  observedSections.forEach((section) => navObserver.observe(section));
}
