const allowedEvents = new Set([
  "archive_route_opened",
  "timeline_event_toggled",
  "viewing_task_completed",
]);

export const analytics = {
  providerStatus: "none",
  track(eventName, { contentId = null, interactionSource = "unknown" } = {}) {
    if (!allowedEvents.has(eventName)) return { delivered: false };
    return {
      delivered: false,
      event: {
        event_name: eventName,
        site_slug: "DELACROIX-ARCHIVE",
        page_path: globalThis.location?.pathname || "",
        content_id: contentId,
        interaction_source: interactionSource,
        schema_version: 1,
      },
    };
  },
};
