import { analytics } from "../analytics.js";
import {
  getKnowledgeDiscipline,
  getKnowledgeRecords,
  getPublishedKnowledgeRecords,
  knowledgeLibrary,
  localizeKnowledge,
} from "./knowledge-registry.js";

const SITE_ROOT = new URL("../", import.meta.url);

const resolveSiteHref = (href) => href ? new URL(href, SITE_ROOT).href : null;

const statusCopy = {
  published: {
    en: ["Published", "Real destination"],
    zh: ["已发布", "可访问的公开页面"],
  },
  mapping: {
    en: ["Mapping", "Structure exists; content review continues"],
    zh: ["整理中", "结构已建立，内容仍在审查"],
  },
  planned: {
    en: ["Planned", "Visible, not clickable"],
    zh: ["计划中", "可见，但暂不可点击"],
  },
};

const formatDate = (date, locale) =>
  new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

const makeText = (tag, className, text) => {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
};

const getType = (id) => knowledgeLibrary.types.find((type) => type.id === id);

const renderRecord = (record, locale, index) => {
  const article = document.createElement("article");
  article.className = `knowledge-record knowledge-record--${record.status}`;
  article.dataset.recordId = record.id;
  article.dataset.recordType = record.type;
  article.dataset.recordStatus = record.status;
  article.dataset.searchText = [
    record.title.en,
    record.title.zh,
    record.summary.en,
    record.summary.zh,
    getType(record.type)?.label.en,
    getType(record.type)?.label.zh,
  ].join(" ").toLocaleLowerCase();

  article.append(
    makeText("span", "knowledge-record__index", String(index + 1).padStart(2, "0")),
  );

  const copy = document.createElement("div");
  copy.className = "knowledge-record__copy";
  const title = document.createElement("h3");
  const href = record.status === "published" ? resolveSiteHref(record.href) : null;
  if (href) {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = localizeKnowledge(record.title, locale);
    link.dataset.knowledgeEntry = record.id;
    link.addEventListener("click", () => {
      analytics.track("knowledge_entry_open", {
        contentId: record.id,
        interactionSource: "knowledge_record",
        properties: {
          language: locale,
          discipline: record.discipline,
          entry_id: record.id,
          type: record.type,
        },
      });
    });
    title.append(link);
  } else {
    title.textContent = localizeKnowledge(record.title, locale);
  }
  copy.append(
    title,
    makeText("p", "knowledge-record__summary", localizeKnowledge(record.summary, locale)),
  );

  const meta = document.createElement("div");
  meta.className = "knowledge-record__meta";
  meta.append(
    makeText("span", "knowledge-record__type", localizeKnowledge(getType(record.type)?.label, locale)),
    makeText("time", "knowledge-record__date", formatDate(record.updatedAt, locale)),
  );
  meta.lastElementChild.dateTime = record.updatedAt;

  const status = document.createElement("div");
  status.className = `knowledge-record__status knowledge-record__status--${record.status}`;
  status.append(
    makeText("strong", "", statusCopy[record.status][locale][0]),
    makeText("span", "", statusCopy[record.status][locale][1]),
  );

  article.append(copy, meta, status);
  if (href) article.append(makeText("span", "knowledge-record__arrow", "↗"));
  return article;
};

const renderRecords = (container, records, locale) => {
  if (!container) return;
  container.replaceChildren(...records.map((record, index) => renderRecord(record, locale, index)));
};

const renderDisciplines = (container, locale) => {
  if (!container) return;
  const cards = knowledgeLibrary.disciplines.map((discipline) => {
    const link = document.createElement("a");
    link.className = "knowledge-discipline";
    link.href = resolveSiteHref(localizeKnowledge(discipline.href, locale));
    const published = getPublishedKnowledgeRecords(discipline.id).length;
    link.append(
      makeText("span", "knowledge-discipline__number", discipline.number),
      makeText("h2", "", localizeKnowledge(discipline.title, locale)),
      makeText("p", "", localizeKnowledge(discipline.description, locale)),
      makeText(
        "span",
        "knowledge-discipline__meta",
        locale === "zh" ? `${published} 个已发布条目 · 进入 ↗` : `${published} published · open ↗`,
      ),
    );
    return link;
  });
  container.replaceChildren(...cards);
};

const renderStartHere = (container, locale) => {
  if (!container) return;
  const rows = knowledgeLibrary.disciplines.map((discipline) => {
    const link = document.createElement("a");
    link.className = "knowledge-path";
    link.href = resolveSiteHref(localizeKnowledge(discipline.href, locale));
    link.append(
      makeText("span", "knowledge-path__discipline", localizeKnowledge(discipline.title, locale)),
      makeText("span", "knowledge-path__copy", localizeKnowledge(discipline.startHere, locale)),
      makeText("span", "knowledge-path__arrow", "↗"),
    );
    return link;
  });
  container.replaceChildren(...rows);
};

const renderTypes = (container, locale) => {
  if (!container) return;
  const cells = knowledgeLibrary.types.map((type) => {
    const cell = document.createElement("div");
    cell.className = "knowledge-type";
    cell.append(
      makeText("span", "knowledge-type__label", localizeKnowledge(type.label, locale)),
      makeText("p", "", localizeKnowledge(type.description, locale)),
    );
    return cell;
  });
  container.replaceChildren(...cells);
};

const renderLatest = (container, records, locale) => {
  if (!container) return;
  const rows = records.slice(0, 4).map((record) => {
    const row = document.createElement("div");
    row.className = "knowledge-latest__row";
    row.append(
      makeText("time", "", formatDate(record.updatedAt, locale)),
      makeText("span", "", localizeKnowledge(record.title, locale)),
      makeText("span", "", statusCopy[record.status][locale][0]),
    );
    row.firstElementChild.dateTime = record.updatedAt;
    return row;
  });
  container.replaceChildren(...rows);
};

export const filterKnowledgeRecords = (records, { query = "", type = "all" } = {}) => {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  return records.filter((record) => {
    const matchesType = type === "all" || record.type === type;
    const haystack = [
      record.title.en,
      record.title.zh,
      record.summary.en,
      record.summary.zh,
    ].join(" ").toLocaleLowerCase();
    return matchesType && (!normalizedQuery || haystack.includes(normalizedQuery));
  });
};

const initControls = (root, records, locale, discipline) => {
  const input = root.querySelector("[data-knowledge-search]");
  const buttons = [...root.querySelectorAll("[data-knowledge-filter]")];
  const results = root.querySelector("[data-record-list]");
  const status = root.querySelector("[data-knowledge-results]");
  const empty = root.querySelector("[data-knowledge-empty]");
  if (!input || !buttons.length || !results || !status || !empty) return;

  let activeType = "all";
  const applyFilters = () => {
    const matches = filterKnowledgeRecords(records, {
      query: input.value,
      type: activeType,
    });
    renderRecords(results, matches, locale);
    status.textContent = locale === "zh"
      ? `${matches.length} 个公开记录`
      : `${matches.length} public record${matches.length === 1 ? "" : "s"}`;
    empty.hidden = matches.length > 0;
  };

  input.addEventListener("input", applyFilters);
  input.addEventListener("change", () => {
    const matches = filterKnowledgeRecords(records, { query: input.value, type: activeType });
    analytics.track("knowledge_search", {
      contentId: discipline || "all",
      interactionSource: "knowledge_search",
      properties: {
        language: locale,
        discipline: discipline || "all",
        has_results: matches.length > 0,
      },
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activeType = button.dataset.knowledgeFilter;
      buttons.forEach((candidate) => {
        const selected = candidate === button;
        candidate.classList.toggle("is-active", selected);
        candidate.setAttribute("aria-pressed", String(selected));
      });
      applyFilters();
      analytics.track("knowledge_filter", {
        contentId: discipline || "all",
        interactionSource: "knowledge_filters",
        properties: {
          language: locale,
          discipline: discipline || "all",
          type: activeType,
        },
      });
    });
  });

  applyFilters();
};

const initKnowledgeLibrary = () => {
  const root = document.documentElement;
  const body = document.body;
  const locale = root.lang.toLocaleLowerCase().startsWith("zh") ? "zh" : "en";
  const discipline = body.dataset.discipline || null;
  const records = getKnowledgeRecords(discipline);

  renderDisciplines(document.querySelector("[data-discipline-list]"), locale);
  renderStartHere(document.querySelector("[data-start-here-list]"), locale);
  renderTypes(document.querySelector("[data-type-map]"), locale);
  renderRecords(document.querySelector("[data-featured-list]"), knowledgeLibrary.records.filter((record) => record.featured), locale);
  renderLatest(document.querySelector("[data-knowledge-latest]"), records, locale);
  initControls(document, records, locale, discipline);
  body.classList.add("is-enhanced");

  const disciplineRecord = discipline ? getKnowledgeDiscipline(discipline) : null;
  analytics.track("knowledge_open", {
    contentId: discipline || "knowledge",
    interactionSource: "page_load",
    properties: {
      language: locale,
      discipline: disciplineRecord?.id || "all",
    },
  });
};

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", initKnowledgeLibrary);
}
