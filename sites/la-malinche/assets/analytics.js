(() => {
  "use strict";

  const eventNames = new Set([
    "page_view",
    "chapter_viewed",
    "name_lens_selected",
    "annotation_opened",
    "map_stage_selected",
    "reflection_selected",
    "source_opened",
    "data_entry_opened",
  ]);

  window.LaMalincheAnalytics = Object.freeze({
    provider: "none",
    track(name, detail = {}) {
      if (!eventNames.has(name)) return;
      window.dispatchEvent(
        new CustomEvent("la-malinche:analytics-intent", {
          detail: { name, ...detail },
        }),
      );
    },
  });
})();
