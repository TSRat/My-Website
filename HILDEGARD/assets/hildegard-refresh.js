/*
 * Hildegard · Illuminated Leaves
 * Progressive page splitting, compact navigation, reading position and
 * click-to-load video. The original chapter DOM remains readable without JS.
 */

(function () {
  document.documentElement.classList.add("js");

  const chapterPages = {
    "chapter-01": {
      chapter: "01",
      variant: "manuscript",
      pages: [
        { screen: "03", part: "1/2", title: "窄门 · 时代结构", subtitle: "刀剑的君王与灵魂的教皇", take: [0, 1] },
        { screen: "04", part: "2/2", title: "窄门 · 高墙内的知识", subtitle: "限制如何意外成为保护", take: [2, 3, 4], aside: true }
      ]
    },
    "chapter-02": {
      chapter: "02",
      variant: "manuscript",
      pages: [
        { screen: "05", part: "1/2", title: "传承 · 尤塔", subtitle: "姐妹情谊成为知识的入口", take: [0, 1] },
        { screen: "06", part: "2/2", title: "传承 · 两条道路", subtitle: "苦修、学识与身体观", take: [2, 3, 4], aside: true }
      ]
    },
    "chapter-03": {
      chapter: "03",
      variant: "vision",
      pages: [
        { screen: "07", part: "1/2", title: "修炼 · 神启", subtitle: "写下你所看到和听到的一切", take: [0, 1] },
        { screen: "08", part: "2/2", title: "修炼 · 学识", subtitle: "异象与知识在一个身体合流", take: [2], aside: true }
      ]
    },
    "chapter-04": {
      chapter: "04",
      variant: "vision",
      pages: [
        { screen: "09", part: "1/2", title: "音乐 · 灵魂的飞翔", subtitle: "与格里高利圣咏的对照", take: [0, 1], layout: "media-split" },
        { screen: "10", part: "2/2", title: "音乐 · 美德的共同体", subtitle: "《天启交响曲》与《美德典律》", take: [2], aside: true }
      ]
    },
    "chapter-05": {
      chapter: "05",
      variant: "manuscript",
      pages: [
        { screen: "11", part: "1/3", title: "权威 · 姐妹与弱势", subtitle: "温情领导与自我贬低的修辞", take: [1, 2] },
        { screen: "12", part: "2/3", title: "权威 · 独立王国", subtitle: "从迪西博登贝格到鲁珀茨贝格", take: [0, 3], aside: true },
        { screen: "13", part: "3/3", title: "权威 · 通信欧洲", subtitle: "权力网络与阶级张力同时存在", take: [4, 5, 6] }
      ]
    },
    "chapter-06": {
      chapter: "06",
      variant: "vision",
      pages: [
        { screen: "14", part: "1/2", title: "语言 · 23 个字母", subtitle: "现存词表与可以确认的证据", take: [0, 1] },
        { screen: "15", part: "2/2", title: "语言 · 三种解释", subtitle: "共同体密语，还是个人的神圣秘密？", take: [2], aside: true }
      ]
    },
    "chapter-07": {
      chapter: "07",
      variant: "manuscript",
      pages: [
        { screen: "16", part: "1/2", title: "斗争 · 公开布道", subtitle: "一位女性获准走出修道院发言", take: [0, 1] },
        { screen: "17", part: "2/2", title: "斗争 · 最后的禁令", subtitle: "慈悲、歌唱与生命最后一年", take: [2], aside: true }
      ]
    },
    "chapter-08": {
      chapter: "08",
      variant: "botanical",
      pages: [
        { screen: "18", part: "1/2", title: "身后 · 八百年沉默", subtitle: "失踪的封圣文件与历史记忆", take: [0, 1] },
        { screen: "19", part: "2/2", title: "身后 · 二次生命", subtitle: "研究、音乐复兴与 2012 年", take: [2], aside: true }
      ]
    }
  };

  function makeHeading(page) {
    const header = document.createElement("header");
    header.className = "folio-heading";

    const title = document.createElement("h2");
    title.id = `screen-${page.screen}-title`;
    title.textContent = page.title;

    header.append(title);
    return header;
  }

  function makeIntro(page, originalLede) {
    const intro = document.createElement("p");
    intro.className = "folio-intro";
    if (originalLede) intro.innerHTML = originalLede.innerHTML;
    else intro.textContent = page.subtitle;
    return intro;
  }

  function splitChapter(group, config) {
    const originalInner = group.querySelector(":scope > .chapter-inner");
    const originalBody = originalInner?.querySelector(":scope > .chapter-body");
    if (!originalInner || !originalBody) return;

    const sourceNodes = Array.from(originalBody.children);
    const lede = originalInner.querySelector(":scope > .chapter-lede");
    const aside = originalInner.querySelector(":scope > .marginalia");
    const glyph = group.querySelector(":scope > .chapter-glyph");
    const fragments = document.createDocumentFragment();

    config.pages.forEach((page, index) => {
      const folio = document.createElement("section");
      folio.className = `folio folio--${config.variant}`;
      folio.id = `screen-${page.screen}`;
      folio.dataset.screen = page.screen;
      folio.dataset.chapter = config.chapter;
      folio.dataset.part = page.part;
      folio.dataset.title = page.title;

      const frame = document.createElement("div");
      frame.className = `folio-frame${page.aside ? " folio-frame--with-aside" : ""}`;

      if (index === 0 && glyph) folio.append(glyph);

      const generatedHeading = makeHeading(page);
      generatedHeading.append(makeIntro(page, index === 0 ? lede : null));
      frame.append(generatedHeading);
      folio.setAttribute("aria-labelledby", `screen-${page.screen}-title`);

      const body = document.createElement("div");
      body.className = `chapter-body${page.layout ? ` chapter-body--${page.layout}` : ""}`;
      page.take.forEach((sourceIndex) => {
        const node = sourceNodes[sourceIndex];
        if (node) body.append(node);
      });

      Array.from(body.querySelectorAll(".pull-quote")).forEach((quote) => {
        body.append(quote);
      });

      frame.append(body);
      if (page.aside && aside) frame.append(aside);
      folio.append(frame);
      fragments.append(folio);
    });

    if (aside?.isConnected) {
      const lastFrame = fragments.lastElementChild?.querySelector(".folio-frame");
      lastFrame?.append(aside);
    }

    originalInner.remove();
    group.className = "chapter-group";
    group.removeAttribute("aria-labelledby");
    group.append(fragments);
  }

  Object.entries(chapterPages).forEach(([id, config]) => {
    const chapter = document.getElementById(id);
    if (chapter) splitChapter(chapter, config);
  });

  const folios = Array.from(document.querySelectorAll(".folio[data-screen]"));
  const railLinks = Array.from(document.querySelectorAll(".page-rail a"));
  const headerCurrent = document.querySelector("[data-current-page]");
  const headerCounter = headerCurrent?.closest(".header-counter");

  folios.forEach((folio) => {
    const number = folio.dataset.screen;
    const counter = document.createElement("div");
    counter.className = "folio-counter";
    counter.setAttribute("aria-label", `第 ${Number(number) + 1} 页，共 20 页`);
    counter.innerHTML = `<strong>${number}</strong><span>/ 19</span>`;
    folio.querySelector(".folio-frame")?.prepend(counter);
  });

  const navToggle = document.querySelector(".nav-toggle");
  const chapterNav = document.getElementById("chapter-nav");

  function closeNavigation() {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }

  navToggle?.addEventListener("click", () => {
    const willOpen = !document.body.classList.contains("nav-open");
    document.body.classList.toggle("nav-open", willOpen);
    navToggle.setAttribute("aria-expanded", String(willOpen));
  });

  chapterNav?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealElements = Array.from(document.querySelectorAll(".reveal"));
  document.querySelectorAll(".chapter-meta, .chapter-title, .chapter-lede").forEach((element) => {
    element.classList.add("is-visible");
  });

  if (reduced || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  if ("IntersectionObserver" in window) {
    const pageObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      const current = visible.target.dataset.screen;
      const currentChapter = visible.target.dataset.chapter;
      if (headerCurrent) headerCurrent.textContent = current;
      if (headerCounter) headerCounter.href = `#screen-${current}`;
      railLinks.forEach((link) => {
        const active = link.dataset.chapter === currentChapter;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { threshold: 0, rootMargin: "-22% 0px -70% 0px" });

    folios.forEach((folio) => pageObserver.observe(folio));
  }

  const videoButton = document.querySelector(".video-placeholder[data-video-src]");
  videoButton?.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = videoButton.dataset.videoSrc;
    iframe.title = "谦卑的反叛者：宾根的希尔德加德｜TS鼠";
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture";
    iframe.allowFullscreen = true;
    videoButton.replaceWith(iframe);
  }, { once: true });

  function alignHashTarget() {
    if (!window.location.hash.startsWith("#screen-")) return;
    const target = document.querySelector(window.location.hash);
    const header = document.querySelector(".site-header");
    if (!target) return;

    const offset = (header?.getBoundingClientRect().height || 0) + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "auto" });
  }

  if (window.location.hash.startsWith("#screen-")) {
    requestAnimationFrame(alignHashTarget);
    window.setTimeout(alignHashTarget, 120);
    window.setTimeout(alignHashTarget, 520);
    window.addEventListener("load", alignHashTarget, { once: true });
    document.fonts?.ready.then(alignHashTarget);
  }

  window.addEventListener("hashchange", () => {
    requestAnimationFrame(alignHashTarget);
  });
})();
