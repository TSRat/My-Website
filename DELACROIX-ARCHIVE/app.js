import { home, lifeIntro, periods, sourceIntro, ui, works, worksIntro } from "./data.js";
import {
  biographyChapters,
  evidenceRefs,
  glossary,
  journalReadings,
  periodContext,
  researchUi,
  sourceAccess,
  sourceLibrary,
  timelineEventDetails,
} from "./research-content.js";
import { analytics } from "./analytics.js";

const state = {
  lang: localStorage.getItem("delacroix-language") || "zh",
  route: "home",
  routeKey: null,
  lifePeriod: localStorage.getItem("delacroix-life-period") || "1798-1815",
  timelinePeriod: localStorage.getItem("delacroix-timeline-period") || "1798-1815",
  journalPeriod: localStorage.getItem("delacroix-journal-period") || "1822",
  expandedEvent: null,
  workFilter: "all",
  detailTab: "overview",
  observeMode: "color",
  observeTask: null,
  observeStep: "choose",
  saved: new Set(JSON.parse(localStorage.getItem("delacroix-saved") || "[]")),
};

const main = document.querySelector("#main");
const header = document.querySelector("#site-header");
const nav = document.querySelector("#primary-nav");
const footer = document.querySelector("#site-footer");
const menuToggle = document.querySelector("#menu-toggle");
const searchDialog = document.querySelector("#search-dialog");
const searchInput = document.querySelector("#global-search");
const searchResults = document.querySelector("#search-results");
const imageDialog = document.querySelector("#image-dialog");

function e(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function text(value) {
  return typeof value === "object" && value !== null ? value[state.lang] : value;
}

function linebreak(value) {
  return e(value).replaceAll("\n", "<br />");
}

function titleLines(value) {
  return value
    .split("\n")
    .map((line) => `<span class="title-line">${e(line)}</span>`)
    .join("");
}

function protectTextEnd(element) {
  if (element.querySelector(":scope > .no-widow")) return;
  const node = [...element.childNodes]
    .reverse()
    .find((child) => child.nodeType === Node.TEXT_NODE && child.nodeValue.trim());
  if (!node) return;

  const original = node.nodeValue;
  const trailingSpace = original.match(/\s*$/u)?.[0] || "";
  const body = original.slice(0, original.length - trailingSpace.length);
  let match;

  if (state.lang === "zh") {
    const characters = [...body.trimEnd()];
    if (characters.length <= 3) return;
    const protectedText = characters.slice(-3).join("");
    match = { index: body.lastIndexOf(protectedText), text: protectedText };
  } else {
    const latinMatch = body.match(/\S+\s+\S+$/u);
    if (!latinMatch || latinMatch.index === undefined) return;
    if ([...latinMatch[0]].length > 22) return;
    match = { index: latinMatch.index, text: latinMatch[0] };
  }

  const prefix = body.slice(0, match.index);
  const protectedSpan = document.createElement("span");
  protectedSpan.className = "no-widow";
  protectedSpan.textContent = match.text;
  node.replaceWith(document.createTextNode(prefix), protectedSpan, document.createTextNode(trailingSpace));
}

function applyWidowProtection() {
  document
    .querySelectorAll("h1, h2, h3, p, li, dd, figcaption, .page-aside, .editor-note, .site-footer span")
    .forEach(protectTextEnd);
}

function localizedDate(value) {
  if (state.lang === "zh") return value;
  const comma = state.lang === "fr" ? " et " : " and ";
  return value.replace("约", state.lang === "fr" ? "vers " : "ca. ").replace("、", comma);
}

function localizedDimensions(value) {
  if (state.lang === "zh") return value;
  return value.replace("约", state.lang === "fr" ? "env. " : "approx. ");
}

function currentUI() {
  return ui[state.lang];
}

function currentResearchUI() {
  return researchUi[state.lang];
}

function localizedJournalDate(value) {
  if (state.lang === "zh" || !value.includes("年")) return value;
  const places = {
    "丹吉尔": state.lang === "fr" ? "Tanger" : "Tangier",
    "梅克内斯": state.lang === "fr" ? "Meknès" : "Meknes",
  };
  const months = state.lang === "fr"
    ? ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
    : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const year = value.match(/^(\d{4})年/)?.[1];
  if (!year) return value;
  const season = value.includes("春夏") ? (state.lang === "fr" ? `printemps–été ${year}` : `spring–summer ${year}`) : null;
  if (season) return season;
  const month = Number(value.match(/年(\d{1,2})月/)?.[1] || 0);
  const day = Number(value.match(/月(\d{1,2})日/)?.[1] || 0);
  const placeZh = Object.keys(places).find((place) => value.includes(place));
  const place = placeZh ? places[placeZh] : "";
  if (!month) return year;
  const date = state.lang === "fr"
    ? `${day ? `${day} ` : ""}${months[month - 1]} ${year}`
    : `${months[month - 1]}${day ? ` ${day},` : ""} ${year}`;
  return place ? `${date}, ${place}` : date;
}

function getWork(id) {
  return works.find((work) => work.id === id);
}

function getTimelineEvent(id) {
  return timelineEventDetails.find((event) => event.id === id);
}

function getEventRecord(detail) {
  const period = periods.find((item) => item.id === detail.periodId);
  const [date, description] = period?.[state.lang]?.events?.[detail.eventIndex] || ["", ""];
  return { ...detail, date, description, period };
}

function eventRecordsForPeriod(periodId) {
  return timelineEventDetails.filter((event) => event.periodId === periodId).map(getEventRecord);
}

function renderWorkLinks(workIds = []) {
  const t = currentResearchUI();
  const linkedWorks = workIds.map(getWork).filter(Boolean);
  if (!linkedWorks.length) return "";
  return `<div class="anchor-work-grid">${linkedWorks.map((work) => `
    <button class="anchor-work" type="button" data-work="${work.id}">
      <img src="${work.image}" alt="${e(text(work.title))}" loading="lazy" />
      <span><strong>${e(text(work.title))}</strong><small>${e(localizedDate(work.date))}</small></span>
    </button>`).join("")}</div>
    <p class="link-note">${e(t.openWork)}</p>`;
}

function renderEvidence(refIds = []) {
  const t = currentResearchUI();
  const separator = state.lang === "zh" ? "：" : ": ";
  return `<div class="evidence-list">${refIds.map((refId) => {
    const ref = evidenceRefs[refId];
    if (!ref) return "";
    const source = sourceLibrary.find((item) => item.id === ref.sourceId);
    return `<a class="evidence-link" href="#/sources/${e(ref.sourceId)}">
      <span class="evidence-source">${e(text(source?.name) || ref.sourceId)}</span>
      <span><strong>${e(t.sourceLocator)}${e(separator)}</strong>${e(text(ref.locator))}</span>
      <span><strong>${e(t.sourceSupport)}${e(separator)}</strong>${e(text(ref.support))}</span>
    </a>`;
  }).join("")}</div>`;
}

function renderTerms(termIds = []) {
  const t = currentResearchUI();
  if (!termIds.length) return "";
  return `<section class="event-section"><h4>${e(t.terms)}</h4><dl class="term-list">${termIds.map((termId) => {
    const term = glossary[termId];
    return term ? `<div class="term-note"><dt>${e(text(term.name))}</dt><dd>${e(text(term.definition))}</dd></div>` : "";
  }).join("")}</dl></section>`;
}

function parseRoute() {
  const raw = window.location.hash.replace(/^#\/?/, "") || "home";
  const [page, id] = raw.split("/");
  return { page: ["home", "life", "works", "timeline", "journal", "sources", "work"].includes(page) ? page : "home", id };
}

function routeTo(page, id = "") {
  const hash = id ? `#/${page}/${id}` : `#/${page}`;
  if (window.location.hash === hash) render();
  else window.location.hash = hash;
}

function setTheme(route) {
  const theme = route === "home" ? "home" : ["works", "work"].includes(route) ? "work" : "life";
  document.body.className = `theme-${theme}`;
  main.className = `theme-${theme}`;
  document.documentElement.style.setProperty("--page-bg", theme === "home" ? "#4a010a" : theme === "work" ? "#0f325b" : "#1c312c");
  document.documentElement.style.setProperty("--page-accent", theme === "home" ? "#c18f4e" : "#a99563");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "home" ? "#4a010a" : theme === "work" ? "#0f325b" : "#1c312c");
}

function renderChrome() {
  const t = currentUI();
  const active = state.route === "work" ? "works" : state.route;
  document.documentElement.lang = state.lang === "zh" ? "zh-Hans" : state.lang;
  document.title = state.lang === "zh" ? "欧仁·德拉克洛瓦｜数字档案" : state.lang === "en" ? "Eugène Delacroix | Digital Archive" : "Eugène Delacroix | Archives numériques";
  document.querySelector(".brand").textContent = t.brand;
  document.querySelector(".brand").setAttribute("aria-label", state.lang === "zh" ? "返回首页" : state.lang === "en" ? "Return home" : "Retour à l’accueil");
  nav.setAttribute("aria-label", state.lang === "zh" ? "主要导航" : state.lang === "en" ? "Primary navigation" : "Navigation principale");
  nav.innerHTML = Object.entries(t.nav)
    .map(([key, label]) => `<button type="button" data-route="${key}" ${active === key ? 'aria-current="page"' : ""}>${e(label)}</button>`)
    .join("");
  document.querySelector(".search-label").textContent = t.search;
  document.querySelector("#search-trigger").setAttribute("aria-label", t.search);
  document.querySelector("#search-eyebrow").textContent = t.searchTitle;
  document.querySelector("#search-field-label").textContent = t.search;
  searchInput.placeholder = t.searchPlaceholder;
  searchDialog.querySelector(".icon-button").setAttribute("aria-label", t.close);
  imageDialog.querySelector(".icon-button").setAttribute("aria-label", t.close);
  document.querySelectorAll("[data-lang]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === state.lang)));
  document.querySelector(".language-switcher").setAttribute("aria-label", state.lang === "zh" ? "语言" : state.lang === "en" ? "Language" : "Langue");
  updateMenuState(menuToggle.getAttribute("aria-expanded") === "true");
  document.querySelector(".skip-link").textContent = state.lang === "zh" ? "跳到主要内容" : state.lang === "en" ? "Skip to main content" : "Aller au contenu principal";
  const portfolioLabel = state.lang === "zh"
    ? "前往 The Living Atlas 主页"
    : state.lang === "en"
      ? "Go to The Living Atlas home"
      : "Aller à l’accueil de The Living Atlas";
  footer.innerHTML = `<a class="portfolio-home-link" href="../THE-LIVING-ATLAS/" aria-label="${e(portfolioLabel)}"><img class="portfolio-home-logo portfolio-home-logo--light" src="../THE-LIVING-ATLAS/tsrat-logo.png" alt="TSRat Logo" loading="lazy" /></a><span>${e(t.footerLeft)}</span><span>${e(t.footerRight)}</span>`;
  const banner = document.querySelector("#offline-banner");
  banner.textContent = t.offline;
  banner.hidden = navigator.onLine;
}

function renderHome() {
  const h = home[state.lang];
  return `
    <article class="page theme-home">
      <div class="page-shell hero">
        <div class="hero-copy">
          <p class="eyebrow">${e(h.place)}</p>
          <h1 class="display-title">${titleLines(h.title)}</h1>
          <div class="hero-signature" aria-label="Eugène Delacroix">Eug. Delacroix</div>
          <p class="lede">${e(h.subtitle)}</p>
          <div class="hero-start-card"><span>${e(state.lang === "zh" ? "从这里开始" : state.lang === "en" ? "Start here" : "Commencer ici")}</span><button class="line-button" type="button" data-route="life">${e(h.enter)}</button></div>
        </div>
        <figure class="hero-portrait">
          <img src="./assets/pierre-petit-delacroix-1862.png" alt="${e(h.caption)}" />
          <figcaption>${e(h.caption)}</figcaption>
          <button class="mobile-hero-entry" type="button" data-route="life">${e(h.enter)} →</button>
        </figure>
      </div>
    </article>`;
}

function viewingExperimentCopy() {
  const copy = {
    zh: {
      title: "一次只验证一个观看问题", choose: "选择任务", operate: "操作画面", observe: "记录观察", conclusion: "对照结论",
      choosePrompt: "先选一个问题。滤镜只是工具，不是答案。", operatePrompt: "先看画面十秒：不要急着解释题材，只跟随任务寻找证据。",
      observed: "我已观察，继续", answerPrompt: "只回答这一问", answerPlaceholder: "写下画面中可指认的位置、颜色或方向……",
      conclude: "查看结论", reset: "重新选择任务", complete: "本轮观看完成。你的记录只保存在此浏览器。",
      tasks: {
        color: { label: "颜色怎样组织注意力？", question: "你的视线最先被哪一组颜色吸引？它把你带向哪里？", conclusion: "德拉克洛瓦常用相邻与互补色建立路径；颜色不仅填充物体，也安排观看顺序。" },
        values: { label: "明暗还能否撑住构图？", question: "去掉色彩后，最亮与最暗的区域怎样连接主要人物？", conclusion: "去色让明暗骨架更清楚，也会暴露哪些关系主要依赖色相而非亮度。" },
        blur: { label: "轮廓消失后还剩什么？", question: "模糊细节后，你仍能辨认哪一条动作或方向？", conclusion: "当细节退后，姿态、对角线和色块仍能维持运动；这正是远观大型作品时首先起作用的层次。" },
      },
    },
    en: {
      title: "Test one viewing question at a time", choose: "Choose a task", operate: "Operate the image", observe: "Record an observation", conclusion: "Compare a conclusion",
      choosePrompt: "Choose one question first. The filter is a tool, not an answer.", operatePrompt: "Look for ten seconds. Do not interpret the subject yet; follow the task and locate evidence.",
      observed: "I have looked — continue", answerPrompt: "Answer only this question", answerPlaceholder: "Name a specific area, colour, or direction in the image…",
      conclude: "See the conclusion", reset: "Choose another task", complete: "This viewing round is complete. Your note remains only in this browser.",
      tasks: {
        color: { label: "How does colour direct attention?", question: "Which colour group catches your eye first, and where does it lead you?", conclusion: "Delacroix often uses neighbouring and complementary colours to build a path. Colour does not merely fill objects; it orders the act of looking." },
        values: { label: "Can value alone hold the composition?", question: "Without colour, how do the lightest and darkest areas connect the main figures?", conclusion: "Grayscale exposes the light-dark armature and also reveals which relations depend on hue rather than brightness." },
        blur: { label: "What remains when contours dissolve?", question: "With details blurred, which action or direction can you still recognise?", conclusion: "As detail recedes, poses, diagonals, and colour masses still carry movement—the layer that acts first when a large work is viewed from afar." },
      },
    },
    fr: {
      title: "Tester une seule question de regard à la fois", choose: "Choisir une tâche", operate: "Agir sur l’image", observe: "Noter une observation", conclusion: "Comparer une conclusion",
      choosePrompt: "Choisissez d’abord une question. Le filtre est un outil, non une réponse.", operatePrompt: "Regardez dix secondes. N’interprétez pas encore le sujet : suivez la tâche et repérez des indices.",
      observed: "J’ai observé — continuer", answerPrompt: "Répondez seulement à cette question", answerPlaceholder: "Nommez une zone, une couleur ou une direction précise…",
      conclude: "Voir la conclusion", reset: "Choisir une autre tâche", complete: "Cette séquence est terminée. Votre note reste uniquement dans ce navigateur.",
      tasks: {
        color: { label: "Comment la couleur dirige-t-elle l’attention ?", question: "Quel groupe de couleurs attire d’abord votre regard, et où vous conduit-il ?", conclusion: "Delacroix construit souvent un parcours par couleurs voisines et complémentaires. La couleur ne remplit pas seulement les objets : elle ordonne le regard." },
        values: { label: "Les valeurs suffisent-elles à tenir la composition ?", question: "Sans couleur, comment les zones les plus claires et les plus sombres relient-elles les figures principales ?", conclusion: "Le noir et blanc révèle l’armature des valeurs et montre aussi quelles relations dépendent de la teinte plutôt que de la luminosité." },
        blur: { label: "Que reste-t-il lorsque les contours se dissolvent ?", question: "Une fois les détails estompés, quelle action ou direction reconnaissez-vous encore ?", conclusion: "Quand le détail recule, poses, diagonales et masses colorées portent encore le mouvement : c’est le premier niveau actif devant une grande œuvre vue de loin." },
      },
    },
  };
  return copy[state.lang];
}

function periodButtons(selected, scope = "life") {
  return periods
    .map((period) => {
      const p = period[state.lang];
      return `<button class="period-button" type="button" data-period="${period.id}" data-scope="${scope}" aria-pressed="${period.id === selected}">
        <span>${e(period.years)}</span><span>${e(p.label)}</span>
      </button>`;
    })
    .join("");
}

function eventList(period) {
  return `<ol class="event-list">${period[state.lang].events
    .map(([date, description]) => `<li><time>${e(date)}</time><p>${e(description)}</p></li>`)
    .join("")}</ol>`;
}

function renderLife() {
  const intro = lifeIntro[state.lang];
  const selected = periods.find((p) => p.id === state.lifePeriod) || periods[4];
  const p = selected[state.lang];
  const chapter = biographyChapters[selected.id];
  const content = chapter[state.lang];
  const t = currentResearchUI();
  return `
    <article class="page theme-life">
      <div class="page-shell">
        <header class="page-intro">
          <div><p class="eyebrow">${e(t.beginnerGuide)}</p><h1 class="page-title">${linebreak(intro.title)}</h1><p class="lede">${e(t.biographyPurpose)}</p></div>
          <aside class="page-aside"><strong>${e(intro.asideTitle)}</strong>${e(intro.aside)}</aside>
        </header>
        <div class="life-layout">
          <nav class="period-nav" aria-label="${e(intro.eyebrow)}">${periodButtons(selected.id)}</nav>
          <section class="period-detail" aria-live="polite">
            <p class="period-kicker">${e(selected.years)} · ${e(p.label)}</p>
            <p class="section-label">${e(t.stageQuestion)}</p>
            <h2 class="chapter-question">${e(content.question)}</h2>
            <div class="chapter-story">${content.story.map((paragraph) => `<p>${e(paragraph)}</p>`).join("")}</div>
            <div class="chapter-grid">
              <section class="chapter-section"><h3>${e(t.workingMethod)}</h3><p>${e(content.method)}</p></section>
              <section class="chapter-section"><h3>${e(t.peopleAndPlaces)}</h3><ul class="chapter-people">${content.people.map((person) => `<li>${e(person)}</li>`).join("")}</ul></section>
            </div>
            <aside class="chapter-remember"><strong>${e(t.remember)}</strong><p>${e(content.remember)}</p></aside>
            <section class="chapter-works"><h3>${e(t.anchorWorks)}</h3>${renderWorkLinks(chapter.workIds)}</section>
            <div class="chapter-next"><button class="line-button" type="button" data-open-timeline="${selected.id}">${e(t.openTimeline)}</button></div>
          </section>
        </div>
      </div>
    </article>`;
}

function renderWorks() {
  const intro = worksIntro[state.lang];
  const t = currentUI();
  const filtered = state.workFilter === "all" ? works : works.filter((work) => work.category === state.workFilter);
  const categoryButtons = ["all", ...Object.keys(t.categories)]
    .map((category) => `<button class="filter-button" type="button" data-filter="${category}" aria-pressed="${category === state.workFilter}">${e(category === "all" ? t.all : t.categories[category])}</button>`)
    .join("");
  return `
    <article class="page theme-work">
      <div class="page-shell">
        <header class="page-intro">
          <div><p class="eyebrow">${e(intro.eyebrow)}</p><h1 class="page-title">${e(intro.title)}</h1><p class="lede">${e(intro.lede)}</p></div>
          <aside class="page-aside"><strong>${e(intro.asideTitle)}</strong>${e(intro.aside)}</aside>
        </header>
        <div class="gallery-toolbar"><div class="filter-list" role="group">${categoryButtons}</div><span class="result-count">${filtered.length} ${e(t.result)}</span></div>
        <div class="gallery-grid">
          ${filtered.map((work, index) => `<article class="work-card">
            <button type="button" data-work="${work.id}">
              <div class="work-image-wrap"><img src="${work.image}" alt="${e(text(work.title))}" loading="lazy" /><span class="work-number">${String(index + 1).padStart(2, "0")}</span>${work.featured ? `<span class="work-tier">${e(t.masterwork)}</span>` : ""}</div>
              <h2>${e(text(work.title))}</h2><p>${e(localizedDate(work.date))} · ${e(text(work.medium))}</p>
            </button>
          </article>`).join("")}
        </div>
      </div>
    </article>`;
}

function tabContent(work) {
  const t = currentUI();
  if (state.detailTab === "observe") {
    const x = viewingExperimentCopy();
    const task = state.observeTask ? x.tasks[state.observeTask] : null;
    const note = localStorage.getItem(`delacroix-note-${work.id}`) || "";
    const steps = ["choose", "operate", "observe", "conclusion"];
    const activeStep = Math.max(0, steps.indexOf(state.observeStep));
    return `<section class="analysis-panel"><div class="observe-lab">
      <div class="observe-stage" data-mode="${state.observeMode}"><img src="${work.image}" alt="${e(text(work.title))}" /></div>
      <div class="observe-controls"><p class="eyebrow">${e(t.observation)}</p><h2 class="section-title">${e(x.title)}</h2>
        <ol class="experiment-progress" aria-label="${e(x.title)}">${steps.map((step, index) => `<li aria-current="${index === activeStep ? "step" : "false"}" data-complete="${index < activeStep}">${index + 1}<span>${e(x[step])}</span></li>`).join("")}</ol>
        ${state.observeStep === "choose" ? `<div class="experiment-step"><p>${e(x.choosePrompt)}</p><div class="experiment-task-list">${Object.entries(x.tasks).map(([mode, item]) => `<button type="button" data-observe-task="${mode}"><span>${e(mode === "color" ? t.modeColor : mode === "values" ? t.modeValues : t.modeBlur)}</span><strong>${e(item.label)}</strong></button>`).join("")}</div></div>` : ""}
        ${state.observeStep === "operate" && task ? `<div class="experiment-step"><p class="experiment-question">${e(task.label)}</p><p>${e(x.operatePrompt)}</p><button class="line-button" type="button" data-observe-next="observe">${e(x.observed)}</button><p class="experiment-feedback" role="status">${e(state.lang === "zh" ? "任务已选，画面已切换。" : state.lang === "en" ? "Task selected; the image has changed." : "Tâche choisie ; l’image a changé.")}</p></div>` : ""}
        ${state.observeStep === "observe" && task ? `<div class="experiment-step"><p class="section-label">${e(x.answerPrompt)}</p><p class="experiment-question">${e(task.question)}</p><label class="sr-only" for="research-note">${e(t.researchNote)}</label><textarea id="research-note" class="observation-note" placeholder="${e(x.answerPlaceholder)}">${e(note)}</textarea><button class="line-button" type="button" data-observe-next="conclusion">${e(x.conclude)}</button><p class="meta-line" id="note-status">${e(t.noteSaved)}</p></div>` : ""}
        ${state.observeStep === "conclusion" && task ? `<div class="experiment-step experiment-conclusion"><p class="section-label">${e(x.conclusion)}</p>${note ? `<blockquote>${e(note)}</blockquote>` : ""}<p>${e(task.conclusion)}</p><p class="experiment-feedback" role="status">${e(x.complete)}</p><button class="line-button" type="button" data-observe-reset>${e(x.reset)}</button></div>` : ""}
      </div>
    </div></section>`;
  }
  const content = state.detailTab === "overview" ? text(work.summary) : state.detailTab === "analysis" ? text(work.analysis) : text(work.context);
  const heading = t.tabs[state.detailTab];
  const evidenceItems = [
    `<a href="${work.source}" target="_blank" rel="noreferrer">${e(t.museumRecord)} ↗</a>`,
    `<a href="#/sources">${e(t.nav.sources)} →</a>`,
    `<span class="status-tag">${e(state.detailTab === "context" ? t.modern : t.original)}</span>`,
  ];
  return `<section class="analysis-panel">
    <div class="analysis-body"><h2>${e(heading)}</h2><p>${e(content)}</p>${state.detailTab === "overview" ? `<p>${e(text(work.analysis))}</p>` : ""}</div>
    <aside class="evidence-stack"><h3>${e(t.evidence)}</h3>${evidenceItems.join("")}</aside>
  </section>`;
}

function renderWork(id) {
  const t = currentUI();
  const work = works.find((item) => item.id === id) || works[0];
  const saved = state.saved.has(work.id);
  return `<article class="page theme-work">
    <div class="page-shell">
      <button class="line-button" type="button" data-route="works">${e(t.backGallery)}</button>
      <div class="work-detail-header">
        <figure class="work-hero-image"><img src="${work.image}" alt="${e(text(work.title))}" /><button class="zoom-button" type="button" data-enlarge="${work.id}" aria-label="${e(t.enlarge)}">＋</button></figure>
        <div class="work-detail-copy"><p class="eyebrow">${work.featured ? `${e(t.masterwork)} · ` : ""}${e(t.nav.works)} · ${e(t.categories[work.category])}</p><h1>${e(text(work.title))}</h1><p class="summary">${e(text(work.summary))}</p>
          <dl class="object-data"><div><dt>${e(t.date)}</dt><dd>${e(localizedDate(work.date))}</dd></div><div><dt>${e(t.medium)}</dt><dd>${e(text(work.medium))}</dd></div><div><dt>${e(t.dimensions)}</dt><dd>${e(localizedDimensions(work.dimensions))}</dd></div><div><dt>${e(t.collection)}</dt><dd>${e(text(work.collection))}</dd></div><div><dt>${e(t.rights)}</dt><dd>${e(t.publicDomain)}</dd></div></dl>
          <button class="save-button" type="button" data-save="${work.id}" aria-pressed="${saved}">${e(saved ? t.saved : t.save)}</button>
        </div>
      </div>
      <div class="detail-tabs" role="tablist">${Object.entries(t.tabs).map(([key, label]) => `<button class="tab-button" type="button" role="tab" data-tab="${key}" aria-selected="${state.detailTab === key}">${e(label)}</button>`).join("")}</div>
      ${tabContent(work)}
    </div>
  </article>`;
}

function renderEventPanel(event) {
  const t = currentResearchUI();
  const context = periodContext[event.periodId];
  return `<div class="event-panel" id="panel-${event.id}">
    <div class="event-context-grid">
      <section class="event-section"><h4>${e(t.beforeYouRead)}</h4><p>${e(text(context))}</p></section>
      <section class="event-section event-importance"><h4>${e(t.whyItMatters)}</h4><p>${e(text(event.why))}</p></section>
    </div>
    ${renderTerms(event.terms)}
    ${event.workIds?.length ? `<section class="event-section"><h4>${e(t.relatedWork)}</h4>${renderWorkLinks(event.workIds)}</section>` : ""}
    <section class="event-section"><h4>${e(t.evidence)}</h4>${renderEvidence(event.refs)}</section>
    <a class="event-permalink" href="#/timeline/${event.id}">${e(t.openEntry)} →</a>
  </div>`;
}

function renderTimelineEvent(event, standalone = false) {
  const t = currentResearchUI();
  const expanded = standalone || state.expandedEvent === event.id;
  return `<article class="timeline-event" data-expanded="${expanded}">
    <button class="event-toggle" type="button" data-event="${event.id}" aria-expanded="${expanded}" aria-controls="panel-${event.id}" ${standalone ? "disabled" : ""}>
      <time>${e(event.date)}</time>
      <span class="event-summary"><span class="event-action">${e(t.whatHappened)}</span><strong>${e(event.description)}</strong></span>
      ${standalone ? "" : `<span class="event-expand">${e(expanded ? t.collapse : t.expand)} ${expanded ? "−" : "+"}</span>`}
    </button>
    ${expanded ? renderEventPanel(event) : ""}
  </article>`;
}

function renderTimeline(routeId) {
  const directDetail = routeId ? getTimelineEvent(routeId) : null;
  const selectedId = directDetail?.periodId || state.timelinePeriod;
  const selected = periods.find((p) => p.id === selectedId) || periods[4];
  const p = selected[state.lang];
  const t = currentResearchUI();
  const title = directDetail ? t.eventDossier : (state.lang === "zh" ? "把艺术家放回历史" : state.lang === "en" ? "Put the artist back into history" : "Replacer l’artiste dans l’histoire");
  const events = directDetail ? [getEventRecord(directDetail)] : eventRecordsForPeriod(selected.id);
  return `<article class="page theme-life"><div class="page-shell">
    <header class="timeline-header"><div><p class="eyebrow">${e(t.beginnerGuide)} · ${e(currentUI().nav.timeline)}</p><h1 class="page-title">${e(title)}</h1><p class="lede">${e(directDetail ? t.directEntry : t.timelinePurpose)}</p></div><aside class="page-aside"><strong>${e(selected.years)}</strong>${e(p.label)}</aside></header>
    ${directDetail ? `<a class="back-link" href="#/timeline">← ${e(t.backTimeline)}</a>` : `<nav class="timeline-rail" aria-label="${e(currentUI().nav.timeline)}">${periodButtons(selected.id, "timeline")}</nav>`}
    <div class="timeline-intro"><div><p class="period-kicker">${e(selected.years)} · ${e(p.label)}</p><h2 class="section-title">${e(p.title)}</h2><p class="period-summary">${e(p.summary)}</p></div><p class="timeline-instruction"><strong>${events.length} ${e(t.eventCount)}</strong>${e(t.directEntry)}</p></div>
    <section class="timeline-events" aria-live="polite">${events.map((event) => renderTimelineEvent(event, Boolean(directDetail))).join("")}</section>
  </div></article>`;
}

function renderJournal() {
  const selected = journalReadings.find((p) => p.id === state.journalPeriod) || journalReadings[3];
  const t = currentResearchUI();
  const title = state.lang === "zh" ? "在日期中阅读一个画家的工作" : state.lang === "en" ? "Read a painter’s work through dated entries" : "Lire le travail d’un peintre à travers les dates";
  const lede = state.lang === "zh" ? "日记不是名言集：它把画室、旅行、读书、朋友、疾病和工程放回同一天。" : state.lang === "en" ? "The journal is not a quotation book: it returns studio, travel, reading, friends, illness, and projects to the same day." : "Le Journal n’est pas un recueil de citations : il replace atelier, voyage, lectures, amis, maladie et chantiers dans une même journée.";
  return `<article class="page theme-life"><div class="page-shell">
    <header class="page-intro"><div><p class="eyebrow">${e(t.beginnerGuide)} · ${e(currentUI().nav.journal)}</p><h1 class="page-title">${e(title)}</h1><p class="lede">${e(lede)}</p></div><aside class="page-aside"><strong>1822—1863</strong>${e(t.journalPurpose)}</aside></header>
    <div class="journal-layout"><nav class="side-index" aria-label="${e(currentUI().nav.journal)}">${journalReadings.map((item) => `<button type="button" data-journal="${item.id}" aria-pressed="${item.id === selected.id}"><span>${e(item.date)}</span><strong>${e(text(item.title))}</strong></button>`).join("")}</nav>
    <section class="journal-reading"><p class="entry-date">${e(selected.date)}</p><h2>${e(text(selected.title))}</h2><p class="journal-intro">${e(text(selected.intro))}</p>
      <div class="journal-reading-list">${selected.entries.map((entry) => `<article class="journal-entry-card">
        <p class="journal-date">${e(localizedJournalDate(entry.date))}</p><h3>${e(text(entry.heading))}</h3>
        <figure class="journal-source-text"><figcaption>${e(state.lang === "fr" ? t.sourceText : t.translatedExcerpt)} · ${e(localizedJournalDate(entry.date))}</figcaption><blockquote lang="${state.lang === "zh" ? "zh-Hans" : state.lang}">${e(state.lang === "fr" ? entry.sourceExcerpt : text(entry.translation))}</blockquote>${state.lang === "fr" ? `<div class="journal-translation"><h4>${e(t.translation)}</h4><p>${e(text(entry.translation))}</p></div>` : ""}</figure>
        <div class="journal-entry-grid"><section><h4>${e(t.entryContext)}</h4><p>${e(text(entry.reading))}</p></section><section><h4>${e(t.editorReading)}</h4><p>${e(text(entry.meaning))}</p></section></div>
        <div class="journal-evidence"><h4>${e(t.editionAndPage)}</h4>${renderEvidence([entry.locator])}</div>
      </article>`).join("")}</div>
    </section></div>
  </div></article>`;
}

function sourceUsage(sourceId) {
  const refIds = Object.entries(evidenceRefs).filter(([, ref]) => ref.sourceId === sourceId).map(([id]) => id);
  const eventIds = timelineEventDetails.filter((event) => event.refs.some((ref) => refIds.includes(ref))).map((event) => event.id);
  const journalIds = journalReadings.filter((group) => group.refs.some((ref) => refIds.includes(ref)) || group.entries.some((entry) => refIds.includes(entry.locator))).map((group) => group.id);
  const biographyIds = Object.entries(biographyChapters).filter(([, chapter]) => chapter.refs.some((ref) => refIds.includes(ref))).map(([id]) => id);
  return { eventIds, journalIds, biographyIds };
}

function usageLinks(sourceId) {
  const t = currentResearchUI();
  const usage = sourceUsage(sourceId);
  const eventLinks = usage.eventIds.map((id) => {
    const event = getEventRecord(getTimelineEvent(id));
    return `<a href="#/timeline/${id}">${e(event.date)} · ${e(event.description)}</a>`;
  });
  const journalLinks = usage.journalIds.map((id) => {
    const reading = journalReadings.find((item) => item.id === id);
    return `<a href="#/journal" data-source-journal="${id}">${e(reading.date)} · ${e(text(reading.title))}</a>`;
  });
  const biographyLinks = usage.biographyIds.map((id) => {
    const period = periods.find((item) => item.id === id);
    return `<a href="#/life" data-source-life="${id}">${e(period.years)} · ${e(period[state.lang].label)}</a>`;
  });
  if (![...eventLinks, ...journalLinks, ...biographyLinks].length) return `<p>${e(t.noLinkedClaims)}</p>`;
  return `<div class="source-usage">
    ${eventLinks.length ? `<section><h4>${e(t.timelineUses)}</h4>${eventLinks.join("")}</section>` : ""}
    ${journalLinks.length ? `<section><h4>${e(t.journalUses)}</h4>${journalLinks.join("")}</section>` : ""}
    ${biographyLinks.length ? `<section><h4>${e(t.biographyUses)}</h4>${biographyLinks.join("")}</section>` : ""}
  </div>`;
}

function renderSources(routeId) {
  const intro = sourceIntro[state.lang];
  const t = currentResearchUI();
  const openId = sourceLibrary.some((source) => source.id === routeId) ? routeId : null;
  return `<article class="page theme-life"><div class="page-shell">
    <header class="page-intro"><div><p class="eyebrow">${e(intro.eyebrow)}</p><h1 class="page-title">${e(t.sourceLibrary)}</h1><p class="lede">${e(t.sourceLibraryIntro)}</p></div><aside class="page-aside"><strong>${sourceLibrary.length}</strong>${e(currentUI().contentUpdated)}</aside></header>
    <div class="source-records">${sourceLibrary.map((source, index) => {
      const shouldOpen = openId === source.id;
      const access = sourceAccess[source.id];
      return `<details class="source-record" id="source-${source.id}" ${shouldOpen ? "open" : ""}>
        <summary><span class="source-number">${String(index + 1).padStart(2, "0")}</span><span><strong>${e(text(source.name))}</strong><small>${e(text(source.type))} · ${e(source.coverage)}</small></span><span class="source-open">＋</span></summary>
        <div class="source-record-body" data-has-image="${Boolean(source.image)}">
          ${source.image ? `<figure><img src="${source.image}" alt="${e(t.sourceImage)}：${e(text(source.name))}" loading="lazy" /><figcaption>${e(text(source.edition))}</figcaption></figure>` : ""}
          <div class="source-record-copy"><p class="source-summary">${e(text(source.summary))}</p>
            <dl class="source-metadata">
              <div><dt>${e(t.materialType)}</dt><dd>${e(text(source.type))}</dd></div>
              <div><dt>${e(t.documentLanguage)}</dt><dd>${e(text(source.language))}</dd></div>
              <div><dt>${e(t.coverage)}</dt><dd>${e(source.coverage)}</dd></div>
              <div><dt>${e(t.edition)}</dt><dd>${e(text(source.edition))}</dd></div>
              <div><dt>${e(t.bibliography)}</dt><dd>${e(text(access?.bibliography) || text(source.edition))}</dd></div>
              <div><dt>${e(t.identifiers)}</dt><dd>${access?.identifiers?.length ? access.identifiers.map(e).join(" · ") : "—"}</dd></div>
              <div><dt>${e(t.accessStatus)}</dt><dd>${e(text(access?.access) || "—")}</dd></div>
            </dl>
            ${access?.links?.length ? `<section class="source-access"><h3>${e(t.accessLinks)}</h3>${access.links.map((link) => `<a href="${e(link.url)}" target="_blank" rel="noreferrer">${e(text(link.label))} ↗</a>`).join("")}</section>` : ""}
            <section class="source-method"><h3>${e(t.howUsed)}</h3><p>${e(text(source.howUsed))}</p></section>
            <section class="source-links"><h3>${e(t.usedBy)}</h3>${usageLinks(source.id)}</section>
          </div>
        </div>
      </details>`;
    }).join("")}</div>
  </div></article>`;
}

function render() {
  const previousScrollY = window.scrollY;
  const route = parseRoute();
  const nextRouteKey = `${route.page}/${route.id || ""}`;
  const previousRouteKey = state.routeKey;
  const routeChanged = previousRouteKey !== null && previousRouteKey !== nextRouteKey;
  const routeOpened = previousRouteKey === null || routeChanged;
  if (route.page === "work" && routeChanged) {
    state.observeTask = null;
    state.observeMode = "color";
    state.observeStep = "choose";
  }
  state.route = route.page;
  state.routeKey = nextRouteKey;
  setTheme(route.page);
  renderChrome();
  if (route.page === "home") main.innerHTML = renderHome();
  else if (route.page === "life") main.innerHTML = renderLife();
  else if (route.page === "works") main.innerHTML = renderWorks();
  else if (route.page === "timeline") main.innerHTML = renderTimeline(route.id);
  else if (route.page === "journal") main.innerHTML = renderJournal();
  else if (route.page === "sources") main.innerHTML = renderSources(route.id);
  else main.innerHTML = renderWork(route.id);
  bindPageEvents();
  applyWidowProtection();
  const pageHeading = main.querySelector("h1");
  if (pageHeading) {
    pageHeading.tabIndex = -1;
    const archiveName = state.lang === "zh" ? "德拉克洛瓦数字档案" : state.lang === "en" ? "Delacroix Digital Archive" : "Archives numériques Delacroix";
    document.title = `${pageHeading.textContent.replace(/\s+/g, " ").trim()} | ${archiveName}`;
  }
  const targetScrollY = routeChanged ? 0 : previousScrollY;
  window.scrollTo({ top: targetScrollY, behavior: "auto" });
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (routeChanged) pageHeading?.focus({ preventScroll: true });
      if (routeOpened) analytics.track("archive_route_opened", { contentId: nextRouteKey, interactionSource: routeChanged ? "route_change" : "initial_load" });
      if (routeChanged && route.page === "sources" && route.id) {
        document.querySelector(`#source-${CSS.escape(route.id)}`)?.scrollIntoView({ block: "start", behavior: "auto" });
      } else {
        window.scrollTo({ top: targetScrollY, behavior: "auto" });
      }
    });
  });
}

function bindPageEvents() {
  main.querySelectorAll("[data-route]").forEach((button) => button.addEventListener("click", () => routeTo(button.dataset.route)));
  document.querySelectorAll("[data-period]").forEach((button) => button.addEventListener("click", () => {
    const key = button.dataset.scope === "timeline" ? "timelinePeriod" : "lifePeriod";
    state[key] = button.dataset.period;
    localStorage.setItem(button.dataset.scope === "timeline" ? "delacroix-timeline-period" : "delacroix-life-period", button.dataset.period);
    render();
  }));
  document.querySelectorAll("[data-open-timeline]").forEach((button) => button.addEventListener("click", () => {
    state.timelinePeriod = button.dataset.openTimeline;
    localStorage.setItem("delacroix-timeline-period", state.timelinePeriod);
    routeTo("timeline");
  }));
  document.querySelectorAll("[data-event]").forEach((button) => button.addEventListener("click", () => {
    state.expandedEvent = state.expandedEvent === button.dataset.event ? null : button.dataset.event;
    analytics.track("timeline_event_toggled", { contentId: button.dataset.event, interactionSource: "timeline" });
    render();
  }));
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => { state.workFilter = button.dataset.filter; render(); }));
  document.querySelectorAll("[data-work]").forEach((button) => button.addEventListener("click", () => routeTo("work", button.dataset.work)));
  document.querySelectorAll("[data-tab]").forEach((button) => button.addEventListener("click", () => { state.detailTab = button.dataset.tab; render(); }));
  document.querySelectorAll("[data-journal]").forEach((button) => button.addEventListener("click", () => { state.journalPeriod = button.dataset.journal; localStorage.setItem("delacroix-journal-period", state.journalPeriod); render(); }));
  document.querySelectorAll("[data-source-journal]").forEach((link) => link.addEventListener("click", () => {
    state.journalPeriod = link.dataset.sourceJournal;
    localStorage.setItem("delacroix-journal-period", state.journalPeriod);
  }));
  document.querySelectorAll("[data-source-life]").forEach((link) => link.addEventListener("click", () => {
    state.lifePeriod = link.dataset.sourceLife;
    localStorage.setItem("delacroix-life-period", state.lifePeriod);
  }));
  document.querySelectorAll("[data-save]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.save;
    state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
    localStorage.setItem("delacroix-saved", JSON.stringify([...state.saved]));
    render();
  }));
  document.querySelectorAll("[data-observe-task]").forEach((button) => button.addEventListener("click", () => {
    state.observeTask = button.dataset.observeTask;
    state.observeMode = state.observeTask;
    state.observeStep = "operate";
    render();
  }));
  document.querySelectorAll("[data-observe-next]").forEach((button) => button.addEventListener("click", () => {
    state.observeStep = button.dataset.observeNext;
    if (state.observeStep === "conclusion") analytics.track("viewing_task_completed", { contentId: parseRoute().id, interactionSource: state.observeTask || "unknown" });
    render();
  }));
  document.querySelectorAll("[data-observe-reset]").forEach((button) => button.addEventListener("click", () => {
    state.observeTask = null;
    state.observeMode = "color";
    state.observeStep = "choose";
    render();
  }));
  const note = document.querySelector("#research-note");
  if (note) {
    const id = parseRoute().id || works[0].id;
    note.addEventListener("input", () => localStorage.setItem(`delacroix-note-${id}`, note.value));
  }
  document.querySelectorAll("[data-enlarge]").forEach((button) => button.addEventListener("click", () => {
    const work = works.find((item) => item.id === button.dataset.enlarge);
    document.querySelector("#image-dialog-title").textContent = text(work.title);
    const img = document.querySelector("#image-dialog-image");
    img.src = work.image;
    img.alt = text(work.title);
    document.querySelector("#image-dialog-caption").textContent = `${text(work.title)} · ${localizedDate(work.date)} · ${text(work.collection)}`;
    imageDialog.showModal();
  }));
  document.querySelectorAll("img").forEach((img) => img.addEventListener("error", () => {
    img.alt = currentUI().imageLoadError;
    img.closest("figure, .work-image-wrap")?.classList.add("image-failed");
  }, { once: true }));
}

function searchIndex() {
  const t = currentUI();
  const pageRecords = [
    ["life", t.nav.life, `${lifeIntro[state.lang].title} ${periods.map((p) => `${p.years} ${p[state.lang].label} ${biographyChapters[p.id][state.lang].question} ${biographyChapters[p.id][state.lang].story.join(" ")}`).join(" ")}`],
    ["timeline", t.nav.timeline, timelineEventDetails.map((detail) => { const event = getEventRecord(detail); return `${event.date} ${event.description} ${text(detail.why)}`; }).join(" ")],
    ["journal", t.nav.journal, journalReadings.map((group) => `${group.date} ${text(group.title)} ${text(group.intro)} ${group.entries.map((entry) => `${text(entry.heading)} ${text(entry.reading)}`).join(" ")}`).join(" ")],
    ["sources", t.nav.sources, sourceLibrary.map((source) => `${text(source.name)} ${source.coverage} ${text(source.type)} ${text(source.summary)}`).join(" ")],
  ];
  return [
    ...pageRecords.map(([route, title, keywords]) => ({ route, title, keywords, type: t.match })),
    ...works.map((work) => ({ route: "work", id: work.id, title: text(work.title), keywords: `${work.date} ${text(work.summary)} ${text(work.medium)} ${t.categories[work.category]}`, type: t.nav.works })),
  ];
}

function updateSearch() {
  const t = currentUI();
  const query = searchInput.value.trim().toLocaleLowerCase(state.lang);
  if (!query) {
    searchResults.innerHTML = `<p>${e(t.searchEmpty)}</p>`;
    return;
  }
  const tokens = query.split(/\s+/).filter(Boolean);
  const results = searchIndex().filter((record) => tokens.every((token) => `${record.title} ${record.keywords}`.toLocaleLowerCase(state.lang).includes(token)));
  searchResults.innerHTML = results.length
    ? results.map((record) => `<button class="search-result" type="button" data-search-route="${record.route}" ${record.id ? `data-search-id="${record.id}"` : ""}><span class="match">${e(record.type)}</span><strong>${e(record.title)}</strong><span>${e(t.open)} →</span></button>`).join("")
    : `<p>${e(t.searchNone)}</p><button class="line-button" type="button" data-search-route="timeline">${e(t.nav.timeline)}</button>`;
  searchResults.querySelectorAll("[data-search-route]").forEach((button) => button.addEventListener("click", () => { searchDialog.close(); routeTo(button.dataset.searchRoute, button.dataset.searchId || ""); }));
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("header [data-route]");
  if (routeButton) {
    updateMenuState(false);
    routeTo(routeButton.dataset.route);
  }
});

document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => {
  state.lang = button.dataset.lang;
  localStorage.setItem("delacroix-language", state.lang);
  render();
}));

document.querySelector("#search-trigger").addEventListener("click", () => {
  searchDialog.showModal();
  searchInput.value = "";
  updateSearch();
  requestAnimationFrame(() => searchInput.focus());
});

searchInput.addEventListener("input", updateSearch);

function updateMenuState(open) {
  const labels = state.lang === "zh"
    ? ["打开导航菜单", "关闭导航菜单"]
    : state.lang === "en"
      ? ["Open navigation menu", "Close navigation menu"]
      : ["Ouvrir le menu de navigation", "Fermer le menu de navigation"];
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", labels[open ? 1 : 0]);
  nav.dataset.open = String(open);
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  updateMenuState(open);
  if (open) requestAnimationFrame(() => nav.querySelector("button")?.focus());
});

window.addEventListener("hashchange", render);
window.addEventListener("online", renderChrome);
window.addEventListener("offline", renderChrome);
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchDialog.showModal();
    searchInput.value = "";
    updateSearch();
    searchInput.focus();
  }
  if (event.key === "Escape" && imageDialog.open) imageDialog.close();
});

render();
