(function () {
  "use strict";

  if (window.TSRatAnalytics?.siteId === "hypatia") return;

  const allowedEvents = new Set([
    "page_viewed",
    "section_opened",
    "evidence_filter_applied",
    "interactive_state_changed",
    "source_opened",
    "video_opened",
    "data_entry_opened",
  ]);

  const safeProperties = new Set(["targetId", "targetType"]);

  const track = (event, properties = {}) => {
    if (!allowedEvents.has(event)) return false;

    const detail = {
      event,
      siteId: "hypatia",
      route: window.location.pathname,
      timestamp: new Date().toISOString(),
    };

    for (const [key, value] of Object.entries(properties)) {
      if (safeProperties.has(key) && typeof value === "string") detail[key] = value;
    }

    window.dispatchEvent(new CustomEvent("tsrat:analytics", { detail }));
    return true;
  };

  window.TSRatAnalytics = Object.freeze({
    provider: null,
    siteId: "hypatia",
    track,
  });
  document.documentElement.dataset.analytics = "provider-neutral";

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const explicit = event.target.closest("[data-analytics-event]");
    if (explicit) {
      track(explicit.dataset.analyticsEvent, {
        targetId: explicit.dataset.analyticsTarget || "",
        targetType: explicit.tagName.toLowerCase(),
      });
      return;
    }

    const evidenceFilter = event.target.closest("[data-evidence-filter]");
    if (evidenceFilter) {
      track("evidence_filter_applied", {
        targetId: evidenceFilter.dataset.evidenceFilter || "",
        targetType: evidenceFilter.tagName.toLowerCase(),
      });
      return;
    }

    const interactive = event.target.closest(
      "[data-step], [data-compare], [data-letter], [data-memory-id]",
    );
    if (interactive) {
      const targetId = interactive.dataset.step
        || interactive.dataset.compare
        || interactive.dataset.letter
        || interactive.dataset.memoryId
        || "";
      track("interactive_state_changed", {
        targetId,
        targetType: interactive.tagName.toLowerCase(),
      });
      return;
    }

    const link = event.target.closest("a[href]");
    if (!link) return;

    if (link.closest("#site-nav")) {
      track("section_opened", {
        targetId: link.getAttribute("href")?.replace(/^#/, "") || "",
        targetType: "navigation",
      });
      return;
    }

    if (link.closest("#sources")) {
      track("source_opened", {
        targetId: "source-link",
        targetType: "external-link",
      });
      return;
    }

    if (link.closest("#watch")) {
      track("video_opened", {
        targetId: "video-link",
        targetType: "external-link",
      });
    }
  });

  track("page_viewed", { targetType: "document" });
})();
