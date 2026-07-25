export const ANALYTICS_SCHEMA_VERSION = 1;

export const ANALYTICS_EVENTS = Object.freeze([
  "search_performed",
  "search_result_opened",
  "published_site_opened",
  "data_section_opened",
]);

const eventProperties = {
  search_performed: new Set(["query_length", "result_count"]),
  search_result_opened: new Set(["content_type"]),
  published_site_opened: new Set(["content_type"]),
  data_section_opened: new Set(["content_type"]),
};

const normalizeValue = (value) => {
  if (typeof value === "string") return value.slice(0, 120);
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "boolean") return value;
  return undefined;
};

const sanitizeProperties = (eventName, properties = {}) => {
  const allowed = eventProperties[eventName] ?? new Set();

  return Object.fromEntries(
    Object.entries(properties)
      .filter(([key]) => allowed.has(key))
      .map(([key, value]) => [key, normalizeValue(value)])
      .filter(([, value]) => value !== undefined),
  );
};

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
    {
      contentId = null,
      interactionSource = "unknown",
      properties = {},
    } = {},
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
      ...sanitizeProperties(eventName, properties),
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
  siteSlug: "the-living-atlas",
});
