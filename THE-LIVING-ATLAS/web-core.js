const FALLBACK_LOCALE = "en";

export const getLocale = (root = document.documentElement) =>
  root.lang.toLocaleLowerCase().startsWith("zh") ? "zh" : FALLBACK_LOCALE;

export const localize = (value, locale) => {
  if (typeof value === "string") return value;
  return value?.[locale] ?? value?.[FALLBACK_LOCALE] ?? "";
};

export const getPublishedSites = (registry) =>
  registry.sites
    .filter((site) => site.status === "published" && site.href)
    .sort((a, b) => b.number.localeCompare(a.number));

export const getSortedUpdates = (registry) =>
  [...registry.updates].sort((a, b) => b.date.localeCompare(a.date));

export const formatMonth = (isoDate, locale) => {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en", {
    month: locale === "zh" ? "long" : "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};

export const formatDate = (isoDate, locale) => {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};

const appendLocalizedText = (element, value, locale) => {
  element.textContent = localize(value, locale);
  return element;
};

const createMetadata = (text) => {
  const element = document.createElement("span");
  element.className = "metadata";
  element.textContent = text;
  return element;
};

export const renderWorlds = (registry, locale, container) => {
  if (!container) return;
  container.replaceChildren();

  registry.worlds.forEach((world) => {
    const article = document.createElement("article");
    article.className = "bento-box world-box-large";
    article.id = `world-${world.id}`;

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "image-wrapper";
    const image = document.createElement("img");
    image.src = world.image;
    image.alt = localize(world.imageAlt, locale);
    imageWrapper.append(image);

    const heading = appendLocalizedText(document.createElement("h3"), world.title, locale);
    const description = appendLocalizedText(
      document.createElement("p"),
      world.description,
      locale,
    );
    description.className = "world-description";

    article.append(imageWrapper, createMetadata(world.number), heading, description);
    container.append(article);
  });
};

export const renderKnowledge = (registry, locale, container) => {
  if (!container) return;
  container.replaceChildren();

  registry.knowledge.forEach((category) => {
    const item = document.createElement("li");
    item.id = `knowledge-${category.id}`;
    const title = appendLocalizedText(document.createElement("span"), category.title, locale);
    const status = createMetadata(
      locale === "zh" ? "整理中" : category.status === "mapping" ? "Mapping" : category.status,
    );
    status.classList.add("content-state");
    item.append(title, status);
    container.append(item);
  });
};

export const renderFocus = (registry, locale, container, label) => {
  if (!container) return;
  container.replaceChildren();

  const newestDate = [...registry.focus]
    .map((item) => item.updatedAt)
    .sort()
    .at(-1);
  if (label && newestDate) {
    label.textContent = locale === "zh"
      ? `最近状态 ｜ ${formatMonth(newestDate, locale)}`
      : `NOW / ${formatMonth(newestDate, locale).toLocaleUpperCase()}`;
  }

  registry.focus.forEach((focus) => {
    const item = document.createElement("div");
    item.className = "now-item";
    item.append(createMetadata(localize(focus.kind, locale)));

    const title = document.createElement("p");
    if (focus.href) {
      const link = document.createElement("a");
      link.href = focus.href;
      link.textContent = localize(focus.title, locale);
      title.append(link);
    } else {
      title.textContent = localize(focus.title, locale);
      title.classList.add("content-state--planned");
    }

    item.append(title);
    container.append(item);
  });
};

export const renderSites = (registry, locale, container, label) => {
  if (!container) return;
  const sites = getPublishedSites(registry);
  container.replaceChildren();

  if (label) {
    label.textContent = locale === "zh"
      ? `已发布网站 ｜ ${String(sites.length).padStart(3, "0")}`
      : `PUBLISHED SITES / ${String(sites.length).padStart(3, "0")}`;
  }

  sites.forEach((site) => {
    const link = document.createElement("a");
    link.className = "site-row";
    link.href = site.href;
    link.dataset.contentId = site.id;
    link.append(createMetadata(site.number));

    const copy = document.createElement("div");
    const series = appendLocalizedText(document.createElement("p"), site.series, locale);
    series.className = "metadata";
    const heading = appendLocalizedText(document.createElement("h4"), site.title, locale);
    copy.append(series, heading);

    const image = document.createElement("img");
    image.className = "site-thumbnail";
    image.src = site.thumbnail;
    image.alt = localize(site.thumbnailAlt, locale);

    link.append(copy, image);
    container.append(link);
  });
};

export const renderLatest = (registry, locale, container) => {
  if (!container) return;
  container.replaceChildren();

  getSortedUpdates(registry).forEach((update) => {
    const item = document.createElement("div");
    item.className = "latest-item";
    item.append(createMetadata(formatDate(update.date, locale)));

    const copy = document.createElement("p");
    copy.className = "mono-text";
    const link = document.createElement("a");
    link.href = update.href;
    link.textContent = localize(update.title, locale);
    copy.append(link);

    item.append(copy);
    container.append(item);
  });
};

export const buildIndexEntries = (registry, locale) => {
  const sections = [
    { id: "about", title: { en: "About", zh: "关于" }, href: "#about", type: "section" },
    { id: "data", title: { en: "Data", zh: "数据" }, href: "#data", type: "section" },
    { id: "now", title: { en: "Now", zh: "最近状态" }, href: "#now", type: "section" },
    { id: "latest", title: { en: "Latest", zh: "最新动态" }, href: "#latest", type: "section" },
  ];
  const worlds = registry.worlds.map((world) => ({
    id: world.id,
    title: world.title,
    href: `#world-${world.id}`,
    type: "world",
  }));
  const knowledge = registry.knowledge.map((category) => ({
    id: category.id,
    title: category.title,
    href: `#knowledge-${category.id}`,
    type: "knowledge",
  }));
  const sites = getPublishedSites(registry).map((site) => ({
    id: site.id,
    title: site.title,
    href: site.href,
    type: "site",
  }));

  return [...sections, ...worlds, ...knowledge, ...sites]
    .map((entry) => ({ ...entry, label: localize(entry.title, locale) }))
    .sort((a, b) => a.label.localeCompare(b.label, locale === "zh" ? "zh-CN" : "en"));
};

export const renderIndex = (registry, locale, container) => {
  if (!container) return;
  container.replaceChildren();

  const groups = new Map();
  buildIndexEntries(registry, locale).forEach((entry) => {
    const letter = entry.label.slice(0, 1).toLocaleUpperCase();
    const existing = groups.get(letter) ?? [];
    existing.push(entry);
    groups.set(letter, existing);
  });

  groups.forEach((entries, letter) => {
    const group = document.createElement("div");
    group.className = "index-letter";
    group.append(createMetadata(letter));

    const list = document.createElement("ul");
    entries.forEach((entry) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = entry.href;
      link.textContent = entry.label;
      link.dataset.contentType = entry.type;
      if (entry.type === "site") link.dataset.contentId = entry.id;
      item.append(link);
      list.append(item);
    });

    group.append(list);
    container.append(group);
  });
};

export const createSearchEntries = (registry, locale, root = document) => {
  const entries = buildIndexEntries(registry, locale);
  const seen = new Set(entries.map((entry) => entry.href));

  root.querySelectorAll("main section[id]").forEach((section) => {
    const heading = section.querySelector("h2, h3, .section-label .metadata");
    const label = heading?.textContent?.trim();
    const href = `#${section.id}`;
    if (label && !seen.has(href)) {
      entries.push({ label, href, type: "section" });
      seen.add(href);
    }
  });

  return entries;
};

export const initMobileMenu = (root = document) => {
  const menu = root.querySelector(".mobile-menu");
  const navigation = menu?.closest(".global-nav");
  const syncOpenState = () => {
    navigation?.classList.toggle("has-open-menu", Boolean(menu?.open));
  };

  menu?.addEventListener("toggle", syncOpenState);
  menu?.querySelectorAll("a, button").forEach((control) => {
    control.addEventListener("click", () => {
      menu.removeAttribute("open");
      syncOpenState();
    });
  });
};

export const initSearch = (
  entries,
  root = document,
  { onSearch, onResultOpen } = {},
) => {
  const dialog = root.querySelector("[data-search-dialog]");
  const input = dialog?.querySelector("[data-search-input]");
  const results = dialog?.querySelector("[data-search-results]");
  const status = dialog?.querySelector("[data-search-status]");
  const openButtons = root.querySelectorAll("[data-search-open]");

  if (!(dialog instanceof HTMLDialogElement) ||
      !(input instanceof HTMLInputElement) ||
      !(results instanceof HTMLUListElement) ||
      !(status instanceof HTMLElement)) {
    return;
  }

  let currentMatches = [];
  let lastReportedQuery = "";

  const renderResults = () => {
    const query = input.value.trim().toLocaleLowerCase();
    const matches = entries.filter((entry) =>
      entry.label.toLocaleLowerCase().includes(query)
    );
    currentMatches = matches;

    results.replaceChildren();
    matches.forEach((entry) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = entry.href;
      link.textContent = entry.label;
      link.addEventListener("click", () => {
        reportSearch();
        onResultOpen?.(entry);
        dialog.close();
      });
      item.append(link);
      results.append(item);
    });

    status.textContent = dialog.dataset.searchLocale === "zh"
      ? `${matches.length} 个结果`
      : `${matches.length} result${matches.length === 1 ? "" : "s"}`;
  };

  const reportSearch = () => {
    const query = input.value.trim();
    if (!query || query === lastReportedQuery) return;
    lastReportedQuery = query;
    onSearch?.({
      queryLength: query.length,
      resultCount: currentMatches.length,
    });
  };

  const openSearch = () => {
    if (!dialog.open) dialog.showModal();
    input.value = "";
    lastReportedQuery = "";
    renderResults();
    window.requestAnimationFrame(() => input.focus());
  };

  openButtons.forEach((button) => button.addEventListener("click", openSearch));
  input.addEventListener("input", renderResults);
  input.addEventListener("change", reportSearch);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") reportSearch();
  });
  root.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
  });
};
