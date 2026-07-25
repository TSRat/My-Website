(function () {
  "use strict";

  if (window.TSRatAnalytics?.siteId === "ivory-archive") return;

  const allowedEvents = new Set([
    "page_viewed",
    "search_performed",
    "filter_applied",
    "briefing_opened",
    "data_entry_opened",
  ]);

  const safeProperties = new Set([
    "targetId",
    "targetType",
    "queryLengthBucket",
  ]);

  const queryLengthBucket = (value) => {
    const length = String(value || "").trim().length;
    if (length === 0) return "empty";
    if (length <= 3) return "1-3";
    if (length <= 10) return "4-10";
    return "11+";
  };

  const track = (event, properties = {}) => {
    if (!allowedEvents.has(event)) return false;

    const detail = {
      event,
      siteId: "ivory-archive",
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
    siteId: "ivory-archive",
    track,
  });
  document.documentElement.dataset.analytics = "provider-neutral";

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element
      ? event.target.closest("[data-analytics-event]")
      : null;
    if (!target) return;

    track(target.dataset.analyticsEvent, {
      targetId: target.dataset.analyticsTarget || "",
      targetType: target.tagName.toLowerCase(),
    });
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.dataset.analyticsEvent !== "search_performed") return;

    track("search_performed", {
      targetId: target.dataset.analyticsTarget || "archive-search",
      targetType: "search",
      queryLengthBucket: queryLengthBucket(target.value),
    });
  });

  track("page_viewed", { targetType: "document" });
})();
