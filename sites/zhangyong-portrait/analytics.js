export const ANALYTICS_SCHEMA_VERSION = 1;

export const ANALYTICS_EVENTS = Object.freeze([
  "chapter_opened",
  "data_section_opened",
]);

export const createAnalyticsAdapter = ({
  siteSlug,
  provider = null,
  getPagePath = () => globalThis.location?.pathname ?? "",
  now = () => new Date().toISOString(),
} = {}) => {
  if (!siteSlug) throw new TypeError("siteSlug is required");
  let activeProvider = provider;

  const setProvider = (nextProvider) => {
    if (nextProvider !== null && typeof nextProvider?.track !== "function") {
      throw new TypeError("analytics provider must expose track(event)");
    }
    activeProvider = nextProvider;
  };

  const track = (
    eventName,
    { contentId = null, interactionSource = "unknown" } = {},
  ) => {
    if (!ANALYTICS_EVENTS.includes(eventName)) {
      throw new TypeError(`unsupported analytics event: ${eventName}`);
    }

    const event = {
      event_name: eventName,
      site_slug: siteSlug,
      page_path: getPagePath(),
      content_id: contentId,
      interaction_source: interactionSource,
      timestamp: now(),
      schema_version: ANALYTICS_SCHEMA_VERSION,
    };

    if (activeProvider) activeProvider.track(event);
    return { delivered: Boolean(activeProvider), event };
  };

  return {
    get providerStatus() {
      return activeProvider ? "connected" : "none";
    },
    setProvider,
    track,
  };
};

export const analytics = createAnalyticsAdapter({
  siteSlug: "zhangyong-portrait",
});
