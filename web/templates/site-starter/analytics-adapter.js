export const ANALYTICS_SCHEMA_VERSION = 1;

export const ANALYTICS_EVENTS = Object.freeze([
  "search_performed",
  "search_result_opened",
  "published_content_opened",
  "data_section_opened",
]);

const safeProperties = {
  search_performed: new Set(["query_length", "result_count"]),
  search_result_opened: new Set(["content_type"]),
  published_content_opened: new Set(["content_type"]),
  data_section_opened: new Set(["content_type"]),
};

const normalizeValue = (value) => {
  if (typeof value === "string") return value.slice(0, 120);
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "boolean") return value;
  return undefined;
};

export const createAnalyticsAdapter = ({
  siteSlug,
  events = ANALYTICS_EVENTS,
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
    if (!events.includes(eventName)) {
      throw new TypeError(`unsupported analytics event: ${eventName}`);
    }

    const allowed = safeProperties[eventName] ?? new Set(["content_type"]);
    const sanitizedProperties = Object.fromEntries(
      Object.entries(properties)
        .filter(([key]) => allowed.has(key))
        .map(([key, value]) => [key, normalizeValue(value)])
        .filter(([, value]) => value !== undefined),
    );
    const event = {
      event_name: eventName,
      site_slug: siteSlug,
      page_path: getPagePath(),
      content_id: contentId,
      interaction_source: interactionSource,
      timestamp: now(),
      schema_version: ANALYTICS_SCHEMA_VERSION,
      ...sanitizedProperties,
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
