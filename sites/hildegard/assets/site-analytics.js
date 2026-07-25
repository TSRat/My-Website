(function () {
  "use strict";

  if (window.TSRatAnalytics?.siteId === "hildegard") return;

  const allowedEvents = new Set([
    "page_viewed",
    "chapter_opened",
    "section_opened",
    "source_opened",
    "video_opened",
    "data_entry_opened",
  ]);

  const safeProperties = new Set(["targetId", "targetType"]);

  const track = (event, properties = {}) => {
    if (!allowedEvents.has(event)) return false;

    const detail = {
      event,
      siteId: "hildegard",
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
    siteId: "hildegard",
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

    const link = event.target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    if (link.closest(".site-header") && href.startsWith("#chapter-")) {
      track("chapter_opened", {
        targetId: href.slice(1),
        targetType: "navigation",
      });
      return;
    }

    if (link.closest(".site-header") && href.startsWith("#")) {
      track("section_opened", {
        targetId: href.slice(1),
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
