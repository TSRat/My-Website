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
    month: "long",
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
    const href = localize(world.href, locale);
    const isKnowledgePortal = world.id === "knowledge" && href;
    const article = document.createElement(isKnowledgePortal ? "a" : "article");
    article.className = "bento-box";
    article.id = `world-${world.id}`;
    if (isKnowledgePortal) {
      article.href = href;
      article.classList.add("world-box-link");
      article.setAttribute(
        "aria-label",
        locale === "zh" ? "进入知识库" : "Open the knowledge library",
      );
    }

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "image-wrapper";
    const image = document.createElement("img");
    image.src = world.image;
    image.alt = localize(world.imageAlt, locale);
    image.loading = "lazy";
    imageWrapper.append(image);

    const heading = appendLocalizedText(document.createElement("h3"), world.title, locale);
    article.append(imageWrapper, createMetadata(world.number), heading);
    container.append(article);
  });
};

export const renderKnowledge = (registry, locale, container) => {
  if (!container) return;
  container.replaceChildren();

  registry.knowledge.forEach((category) => {
    const item = document.createElement("li");
    item.id = `knowledge-${category.id}`;
    const href = localize(category.href, locale);
    const content = document.createElement(href ? "a" : "div");
    if (href) content.href = href;
    const title = appendLocalizedText(document.createElement("span"), category.title, locale);
    const status = createMetadata(
      category.status === "published"
        ? locale === "zh" ? "进入 ↗" : "Open ↗"
        : locale === "zh" ? "整理中" : category.status === "mapping" ? "Mapping" : category.status,
    );
    status.classList.add("content-state");
    content.append(title, status);
    item.append(content);
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
      ? `最近状态 / ${formatMonth(newestDate, locale)}`
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
      ? `已发布网站 / ${String(sites.length).padStart(3, "0")}`
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
    image.loading = "lazy";

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
    const date = document.createElement("time");
    date.className = "metadata";
    date.dateTime = update.date;
    date.textContent = update.date;
    item.append(date);

    const copy = document.createElement("p");
    const link = document.createElement("a");
    link.href = update.href;
    link.textContent = localize(update.title, locale);
    copy.append(link);

    item.append(copy);
    container.append(item);
  });
};

const indexCollator = new Intl.Collator("en", { sensitivity: "base" });
const digitReadings = {
  en: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
  zh: ["ling", "yi", "er", "san", "si", "wu", "liu", "qi", "ba", "jiu"],
};

const indexKey = (entry, label, locale) => {
  const title = label.normalize("NFKD").replace(/^[\p{P}\p{S}\s]+/u, "");
  if (/^\d/.test(title)) {
    return digitReadings[locale][Number(title[0])] + title.slice(1);
  }
  if (locale === "zh" && /^\p{Script=Han}/u.test(title)) {
    return entry.indexPinyin ?? "";
  }
  return title;
};

export const buildIndexEntries = (registry, locale) => {
  const sections = [
    { id: "about", title: { en: "About", zh: "关于" }, indexPinyin: "guan yu", href: "#about", type: "section" },
    { id: "data", title: { en: "Data", zh: "数据" }, indexPinyin: "shu ju", href: "#data", type: "section" },
    { id: "now", title: { en: "Now", zh: "最近状态" }, indexPinyin: "zui jin zhuang tai", href: "#now", type: "section" },
    { id: "latest", title: { en: "Latest", zh: "最新动态" }, indexPinyin: "zui xin dong tai", href: "#latest", type: "section" },
  ];
  const worlds = registry.worlds.map((world) => ({
    id: world.id,
    title: world.directoryTitle ?? world.title,
    indexPinyin: world.indexPinyin,
    href: localize(world.href, locale) || null,
    type: "world",
  }));
  const knowledge = registry.knowledge.map((category) => ({
    id: category.id,
    title: category.title,
    indexPinyin: category.indexPinyin,
    href: localize(category.href, locale) || `#knowledge-${category.id}`,
    type: "knowledge",
  }));
  const sites = getPublishedSites(registry).map((site) => ({
    id: site.id,
    title: site.title,
    indexPinyin: site.indexPinyin,
    href: site.href,
    type: "site",
  }));

  return [...sections, ...worlds, ...knowledge, ...sites]
    .map((entry) => {
      const label = localize(entry.title, locale);
      const sortKey = indexKey(entry, label, locale);
      const group = sortKey.match(/^[a-z]/i)?.[0].toUpperCase() ?? null;
      return { ...entry, label, sortKey, group };
    })
    .sort((a, b) => {
      if (a.group === b.group) return indexCollator.compare(a.sortKey, b.sortKey);
      if (!a.group || !b.group) return a.group ? -1 : 1;
      return indexCollator.compare(a.group, b.group);
    });
};

const createDirectoryLabel = (entry, locale) => {
  const label = document.createElement(entry.href ? "a" : "span");
  label.textContent = entry.label;
  if (entry.href) {
    label.href = entry.href;
  } else {
    label.className = "directory-entry-static";
    const status = createMetadata(locale === "zh" ? "暂无分类目录" : "No category listing yet");
    status.classList.add("directory-entry-status");
    label.append(" ", status);
  }
  return label;
};

export const renderIndex = (registry, locale, container) => {
  if (!container) return;
  container.replaceChildren();

  const groups = new Map();
  buildIndexEntries(registry, locale).forEach((entry) => {
    const letter = entry.group;
    const existing = groups.get(letter) ?? [];
    existing.push(entry);
    groups.set(letter, existing);
  });

  groups.forEach((entries, letter) => {
    const group = document.createElement("div");
    group.className = "index-letter";
    if (letter) {
      const heading = document.createElement("h3");
      heading.className = "metadata";
      heading.textContent = letter;
      group.append(heading);
    }

    const list = document.createElement("ul");
    entries.forEach((entry) => {
      const item = document.createElement("li");
      const label = createDirectoryLabel(entry, locale);
      label.dataset.contentType = entry.type;
      if (entry.type === "site") label.dataset.contentId = entry.id;
      item.append(label);
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

const focusDestination = (element) => {
  if (!element) return;
  if (!element.hasAttribute("tabindex") && element.tabIndex < 0) {
    element.setAttribute("tabindex", "-1");
  }
  element.focus({ preventScroll: true });
};

export const initMobileMenu = (root = document) => {
  const menu = root.querySelector(".mobile-menu");
  const summary = menu?.querySelector("summary");
  if (!menu || !summary) return;

  menu.addEventListener("keydown", (event) => {
    if (!menu.open || event.key !== "Escape") return;
    event.preventDefault();
    menu.open = false;
    summary.focus({ preventScroll: true });
  });

  menu.querySelectorAll("a, button").forEach((control) => {
    control.addEventListener("click", () => {
      menu.open = false;
      const href = control.getAttribute("href");
      if (href?.startsWith("#")) focusDestination(root.getElementById(href.slice(1)));
    });
  });
};

const isFollowClick = (event) =>
  event.button === 0 && !event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey;

export const initSearch = (
  entries,
  root = document,
  { onSearch, onResultOpen } = {},
) => {
  const dialog = root.querySelector("[data-search-dialog]");
  const input = dialog?.querySelector("[data-search-input]");
  const clear = dialog?.querySelector("[data-search-clear]");
  const results = dialog?.querySelector("[data-search-results]");
  const status = dialog?.querySelector("[data-search-status]");
  const openButtons = Array.from(root.querySelectorAll("[data-search-open]"));

  if (!(dialog instanceof HTMLDialogElement) ||
      !(input instanceof HTMLInputElement) ||
      !(results instanceof HTMLUListElement) ||
      !(status instanceof HTMLElement)) {
    return;
  }

  const locale = dialog.dataset.searchLocale;
  let currentMatches = [];
  let lastReportedQuery = "";
  let composing = false;
  let returnFocus = null;
  let resultDestination = null;
  const viewport = window.visualViewport;

  const syncViewport = () => {
    if (!dialog.open || !viewport) return;
    dialog.style.setProperty("--search-view-height", `${viewport.height}px`);
    dialog.style.setProperty("--search-view-center", `${viewport.offsetTop + viewport.height / 2}px`);
  };

  const renderResults = () => {
    const query = input.value.trim().toLocaleLowerCase();
    if (clear) clear.hidden = !input.value;
    currentMatches = entries.filter((entry) =>
      entry.label.toLocaleLowerCase().includes(query)
    );

    results.replaceChildren();
    results.scrollTop = 0;
    currentMatches.forEach((entry) => {
      const item = document.createElement("li");
      const label = createDirectoryLabel(entry, locale);
      if (entry.href) {
        label.addEventListener("click", (event) => {
          reportSearch();
          onResultOpen?.(entry);
          if (!isFollowClick(event)) return;
          resultDestination = entry.href.startsWith("#")
            ? root.getElementById(entry.href.slice(1))
            : null;
          dialog.close();
        });
      }
      item.append(label);
      results.append(item);
    });

    const count = currentMatches.length;
    status.textContent = locale === "zh"
      ? `${count} 个结果`
      : `${count} result${count === 1 ? "" : "s"}`;
  };

  const reportSearch = () => {
    if (composing) return;
    const query = input.value.trim();
    if (!query || query === lastReportedQuery) return;
    lastReportedQuery = query;
    onSearch?.({
      queryLength: query.length,
      resultCount: currentMatches.length,
    });
  };

  const openSearch = (trigger) => {
    if (dialog.open) return;
    returnFocus = trigger;
    resultDestination = null;
    input.value = "";
    composing = false;
    lastReportedQuery = "";
    renderResults();
    dialog.showModal();
    input.focus({ preventScroll: true });
    syncViewport();
  };

  for (const button of openButtons) {
    button.addEventListener("click", () => {
      openSearch(button.closest(".mobile-menu")?.querySelector("summary") ?? button);
    });
  }
  clear?.addEventListener("click", () => {
    input.value = "";
    input.focus({ preventScroll: true });
    renderResults();
  });
  input.addEventListener("compositionstart", () => { composing = true; });
  input.addEventListener("compositionend", () => {
    composing = false;
    renderResults();
  });
  input.addEventListener("input", (event) => {
    if (!composing && !event.isComposing) renderResults();
  });
  input.addEventListener("change", reportSearch);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.isComposing) reportSearch();
  });
  dialog.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || event.isComposing || composing) return;
    event.preventDefault();
    dialog.close();
  });
  dialog.addEventListener("close", () => {
    if (dialog.open) return;
    focusDestination(resultDestination ?? returnFocus);
  });
  viewport?.addEventListener("resize", syncViewport);
  viewport?.addEventListener("scroll", syncViewport);
  root.addEventListener("keydown", (event) => {
    if (event.isComposing || !(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== "k") return;
    event.preventDefault();
    const active = root.activeElement;
    const trigger = active?.closest(".mobile-menu")?.querySelector("summary")
      ?? (active?.matches("body, html") ? null : active)
      ?? openButtons.find((button) => button.getClientRects().length > 0)
      ?? root.querySelector(".mobile-menu summary");
    openSearch(trigger);
  });
};
