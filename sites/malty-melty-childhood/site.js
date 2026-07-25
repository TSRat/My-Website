import { analytics } from "./analytics.js";
import { acts, chapters } from "./content-registry.js";
import { siteManifest } from "./site-manifest.js";

const PROGRESS_KEY = "two-swans-progress";
const totalBeats = chapters.reduce((sum, chapter) => sum + chapter.beats.length, 0);
const state = {
  storyOpen: false,
  chapterIndex: 0,
  beatIndex: 0,
  perspective: null,
  autoPlay: false,
  muted: false,
  drawerOpen: false,
  endingOpen: false,
  returnFocus: null,
  autoPlayTimer: null,
};

document.documentElement.dataset.implementation = "static-es-modules";
document.documentElement.dataset.siteId = siteManifest.id;

const select = (selector, root = document) => root.querySelector(selector);
const selectAll = (selector, root = document) => [...root.querySelectorAll(selector)];
const novelShell = select("[data-novel-shell]");
const chapterDrawer = select("[data-chapter-drawer]");
const drawerScrim = select("[data-drawer-scrim]");
const endingScreen = select("[data-ending-screen]");
const perspectiveCard = select("[data-perspective-card]");

const pad = (value) => String(value).padStart(2, "0");
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

const renderActs = () => {
  const container = select("[data-act-grid]");
  acts.forEach((act) => {
    const article = createElement("article", `act-card act-${act.color}`);
    const topline = createElement("div", "act-topline");
    topline.append(
      createElement("span", null, act.number),
      createElement("span", null, act.label),
    );
    article.append(
      topline,
      createElement("h3", null, act.title),
      createElement("p", null, act.copy),
    );
    container.append(article);
  });
};

const renderTimeline = () => {
  const container = select("[data-timeline-list]");
  chapters.forEach((chapter, index) => {
    const button = createElement("button", "timeline-row");
    button.type = "button";
    button.dataset.chapterIndex = String(index);
    const main = createElement("span", "timeline-main");
    main.append(
      createElement("span", "timeline-act", chapter.act),
      createElement("strong", null, chapter.title),
      createElement("span", null, chapter.summary),
    );
    const orb = createElement("span", `timeline-orb orb-${chapter.accent}`);
    orb.setAttribute("aria-hidden", "true");
    const arrow = createElement("span", "timeline-arrow", "→");
    arrow.setAttribute("aria-hidden", "true");
    button.append(
      createElement("span", "timeline-number", pad(index + 1)),
      main,
      orb,
      arrow,
    );
    button.addEventListener("click", () => startAt(index, 0, "timeline"));
    container.append(button);
  });
};

const renderDrawer = () => {
  const container = select("[data-drawer-list]");
  chapters.forEach((chapter, index) => {
    const button = createElement("button");
    button.type = "button";
    button.dataset.drawerChapter = String(index);
    const copy = createElement("span");
    copy.append(
      createElement("small", null, chapter.act),
      createElement("strong", null, chapter.title),
    );
    button.append(createElement("span", null, pad(index + 1)), copy);
    button.addEventListener("click", () => startAt(index, 0, "chapter_drawer"));
    container.append(button);
  });
};

const completedBeatCount = () =>
  chapters
    .slice(0, state.chapterIndex)
    .reduce((sum, chapter) => sum + chapter.beats.length, 0) +
  state.beatIndex +
  1;

const saveProgress = () => {
  try {
    localStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify({
        chapterIndex: state.chapterIndex,
        beatIndex: state.beatIndex,
      }),
    );
  } catch {
    // The story remains fully usable when storage is unavailable.
  }
};

const clearAutoPlayTimer = () => {
  if (state.autoPlayTimer) window.clearTimeout(state.autoPlayTimer);
  state.autoPlayTimer = null;
};

const scheduleAutoPlay = () => {
  clearAutoPlayTimer();
  if (!state.storyOpen || !state.autoPlay || state.endingOpen) return;
  state.autoPlayTimer = window.setTimeout(nextBeat, 9000);
};

const renderPerspective = () => {
  const chapter = chapters[state.chapterIndex];
  const visible = Boolean(state.perspective);
  perspectiveCard.hidden = !visible;
  perspectiveCard.classList.toggle("visible", visible);
  selectAll("[data-perspective]").forEach((button) => {
    const selected = button.dataset.perspective === state.perspective;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  if (!visible) return;
  select("[data-perspective-label]").textContent =
    state.perspective === "red"
      ? "MALTY · 姐姐的记忆"
      : "MELTY · 妹妹的记忆";
  select("[data-perspective-copy]").textContent =
    state.perspective === "red" ? chapter.redMemory : chapter.blueMemory;
};

const renderDrawerState = () => {
  chapterDrawer.classList.toggle("open", state.drawerOpen);
  chapterDrawer.setAttribute("aria-hidden", String(!state.drawerOpen));
  chapterDrawer.inert = !state.drawerOpen;
  drawerScrim.hidden = !state.drawerOpen;
  selectAll("[data-drawer-chapter]").forEach((button) => {
    button.classList.toggle(
      "current",
      Number(button.dataset.drawerChapter) === state.chapterIndex,
    );
  });
};

const renderNovel = () => {
  const chapter = chapters[state.chapterIndex];
  const beat = chapter.beats[state.beatIndex];
  novelShell.className = `novel-shell accent-${chapter.accent}`;
  select("[data-novel-background]").style.backgroundImage = `url("${chapter.image}")`;
  select("[data-chapter-count]").textContent =
    `${pad(state.chapterIndex + 1)} / ${pad(chapters.length)}`;
  select("[data-chapter-trigger-title]").textContent = chapter.title;
  select("[data-chapter-act]").textContent = chapter.act;
  select("[data-chapter-title]").textContent = chapter.title;
  select("[data-chapter-time]").textContent = chapter.time;

  const speaker = select("[data-speaker]");
  speaker.className = `speaker speaker-${beat.accent ?? chapter.accent}`;
  select("[data-speaker-name]").textContent = beat.speaker;
  select("[data-beat-count]").textContent =
    `${pad(state.beatIndex + 1)} / ${pad(chapter.beats.length)}`;
  select("[data-dialogue-text]").textContent = beat.text;
  const note = select("[data-dialogue-note]");
  note.hidden = !beat.note;
  note.textContent = beat.note ?? "";

  select("[data-previous]").disabled =
    state.chapterIndex === 0 && state.beatIndex === 0;
  select("[data-next]").textContent =
    state.chapterIndex === chapters.length - 1 &&
    state.beatIndex === chapter.beats.length - 1
      ? "读完故事"
      : "下一句 →";

  const progress = (completedBeatCount() / totalBeats) * 100;
  const progressRoot = select("[data-story-progress]");
  progressRoot.setAttribute("aria-label", `阅读进度 ${Math.round(progress)}%`);
  select("span", progressRoot).style.width = `${progress}%`;

  const autoPlayButton = select("[data-autoplay]");
  autoPlayButton.classList.toggle("active", state.autoPlay);
  autoPlayButton.setAttribute("aria-pressed", String(state.autoPlay));
  autoPlayButton.textContent = state.autoPlay ? "自动播放中" : "自动播放";
  const mutedButton = select("[data-muted]");
  mutedButton.setAttribute("aria-pressed", String(state.muted));
  mutedButton.textContent = state.muted ? "静音" : "环境音：无";

  endingScreen.hidden = !state.endingOpen;
  renderPerspective();
  renderDrawerState();
  saveProgress();
  scheduleAutoPlay();
};

function startAt(chapterIndex, beatIndex = 0, interactionSource = "direct") {
  if (!state.storyOpen) {
    state.returnFocus =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
  }
  state.chapterIndex = clamp(chapterIndex, 0, chapters.length - 1);
  state.beatIndex = clamp(
    beatIndex,
    0,
    chapters[state.chapterIndex].beats.length - 1,
  );
  state.storyOpen = true;
  state.perspective = null;
  state.drawerOpen = false;
  state.endingOpen = false;
  novelShell.hidden = false;
  document.body.style.overflow = "hidden";
  renderNovel();
  select("[data-close-novel]").focus();
  analytics.track("story_opened", {
    contentId: chapters[state.chapterIndex].id,
    interactionSource,
  });
  analytics.track("chapter_opened", {
    contentId: chapters[state.chapterIndex].id,
    interactionSource,
  });
}

const closeNovel = ({ returnFocus = true } = {}) => {
  clearAutoPlayTimer();
  state.storyOpen = false;
  state.drawerOpen = false;
  novelShell.hidden = true;
  document.body.style.overflow = "";
  if (returnFocus) state.returnFocus?.focus();
};

function nextBeat() {
  state.perspective = null;
  const chapter = chapters[state.chapterIndex];
  if (state.beatIndex < chapter.beats.length - 1) {
    state.beatIndex += 1;
  } else if (state.chapterIndex < chapters.length - 1) {
    state.chapterIndex += 1;
    state.beatIndex = 0;
    analytics.track("chapter_opened", {
      contentId: chapters[state.chapterIndex].id,
      interactionSource: state.autoPlay ? "autoplay" : "reader_next",
    });
  } else {
    state.autoPlay = false;
    state.endingOpen = true;
    analytics.track("story_completed", {
      contentId: chapter.id,
      interactionSource: "reader_next",
    });
  }
  renderNovel();
  if (state.endingOpen) select("[data-repeat-fairytale]").focus();
}

const previousBeat = () => {
  state.perspective = null;
  state.endingOpen = false;
  if (state.beatIndex > 0) {
    state.beatIndex -= 1;
  } else if (state.chapterIndex > 0) {
    state.chapterIndex -= 1;
    state.beatIndex = chapters[state.chapterIndex].beats.length - 1;
  }
  renderNovel();
};

const resumeStory = () => {
  let chapterIndex = 0;
  let beatIndex = 0;
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? "{}");
    chapterIndex = clamp(Number(saved.chapterIndex) || 0, 0, chapters.length - 1);
    beatIndex = clamp(
      Number(saved.beatIndex) || 0,
      0,
      chapters[chapterIndex].beats.length - 1,
    );
  } catch {
    // Resume from the beginning if saved progress is unavailable or invalid.
  }
  startAt(chapterIndex, beatIndex, "resume_button");
  analytics.track("progress_resumed", {
    contentId: chapters[chapterIndex].id,
    interactionSource: "resume_button",
  });
};

renderActs();
renderTimeline();
renderDrawer();

selectAll("[data-start-chapter]").forEach((button) => {
  button.addEventListener("click", () => {
    startAt(Number(button.dataset.startChapter), 0, "landing_page");
  });
});
select("[data-resume-story]").addEventListener("click", resumeStory);
select("[data-close-novel]").addEventListener("click", () => closeNovel());
select("[data-next]").addEventListener("click", nextBeat);
select("[data-previous]").addEventListener("click", previousBeat);
select("[data-open-drawer]").addEventListener("click", () => {
  state.drawerOpen = true;
  renderDrawerState();
  select("[data-close-drawer]").focus();
});
select("[data-close-drawer]").addEventListener("click", () => {
  state.drawerOpen = false;
  renderDrawerState();
  select("[data-open-drawer]").focus();
});
drawerScrim.addEventListener("click", () => {
  state.drawerOpen = false;
  renderDrawerState();
});
selectAll("[data-perspective]").forEach((button) => {
  button.addEventListener("click", () => {
    const perspective = button.dataset.perspective;
    state.perspective = state.perspective === perspective ? null : perspective;
    renderPerspective();
    if (state.perspective) {
      analytics.track("memory_viewed", {
        contentId: chapters[state.chapterIndex].id,
        interactionSource: `${state.perspective}_memory_tab`,
      });
    }
  });
});
select("[data-close-perspective]").addEventListener("click", () => {
  state.perspective = null;
  renderPerspective();
});
select("[data-autoplay]").addEventListener("click", () => {
  state.autoPlay = !state.autoPlay;
  renderNovel();
});
select("[data-muted]").addEventListener("click", () => {
  state.muted = !state.muted;
  renderNovel();
});
select("[data-repeat-fairytale]").addEventListener("click", () => {
  startAt(chapters.length - 1, 0, "ending_screen");
});
select("[data-return-timeline]").addEventListener("click", () => {
  closeNovel({ returnFocus: false });
  select("#timeline").scrollIntoView({ behavior: "smooth" });
  select(".timeline-row", select("#timeline"))?.focus();
});
select("[data-scroll-top]").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
select('a[href="#data"]')?.addEventListener("click", () => {
  analytics.track("data_section_opened", {
    contentId: "data",
    interactionSource: "internal_link",
  });
});

window.addEventListener("keydown", (event) => {
  if (!state.storyOpen) return;
  if (event.key === "Escape") {
    if (state.drawerOpen) {
      state.drawerOpen = false;
      renderDrawerState();
      select("[data-open-drawer]").focus();
    } else {
      closeNovel();
    }
    return;
  }
  if (event.key === "Tab") {
    const focusRoot = state.endingOpen
      ? endingScreen
      : state.drawerOpen
        ? chapterDrawer
        : novelShell;
    const focusable = selectAll(
      'button:not([disabled]):not([hidden]), a[href]:not([hidden]), [tabindex]:not([tabindex="-1"]):not([hidden])',
      focusRoot,
    ).filter(
      (element) =>
        element.offsetParent !== null && !element.closest("[inert]"),
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
    return;
  }
  const target = event.target;
  if (target instanceof HTMLButtonElement || target instanceof HTMLAnchorElement) return;
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    nextBeat();
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    previousBeat();
  }
});
