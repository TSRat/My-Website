(() => {
  "use strict";

  const analytics = () => window.LaMalincheAnalytics;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const lensContent = {
    all: {
      color: "#d7ad64",
      copy: "三个名字同时保留：她不是三个互相取代的符号，而是一个在不同权力关系中不断被重新命名的人。",
    },
    malintzin: {
      color: "#96c59c",
      copy: "马林钦把视线带回她的纳瓦语世界：出生名已经失落，高阶语言能力与反复迁移成为少数可辨认的线索。",
    },
    marina: {
      color: "#4876a8",
      copy: "玛丽娜夫人来自受洗与殖民记录：尊称显示她的政治价值，却不能把依附、强迫与不对等改写成完全自由。",
    },
    malinche: {
      color: "#c43d35",
      copy: "拉·马琳切是后世不断重写的象征：翻译者、母亲、民族起源与叛徒，被压进同一个承受集体创伤的名字。",
    },
  };

  document.querySelectorAll("[data-lens]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.lens;
      const content = lensContent[selected];
      document.querySelectorAll("[data-lens]").forEach((candidate) => {
        candidate.setAttribute(
          "aria-pressed",
          String(candidate === button),
        );
      });

      const note = document.querySelector("#lens-note");
      note.textContent = content.copy;
      note.style.setProperty("--lens-color", content.color);
      analytics()?.track("name_lens_selected", { lens: selected });
    });
  });

  const mapStages = {
    route: {
      src: "./assets/maps/route.webp",
      title: "奥卢塔 → 希卡兰戈 → 波通昌",
      alt: "从奥卢塔经希卡兰戈到波通昌的迁移路线示意图",
      copy: "她可能先被带到重要贸易节点希卡兰戈，后来又进入玛雅语世界的波通昌。地理位移同时切断了亲族、身份与原有语言环境。",
    },
    oluta: {
      src: "./assets/maps/oluta.webp",
      title: "奥卢塔 · 可能的出生地",
      alt: "马琳切可能出生的奥卢塔区域位置示意图",
      copy: "原稿把她的出生地放在墨西哥湾沿岸的奥卢塔附近。具体地点与出生时间并不确定。",
    },
    xicalango: {
      src: "./assets/maps/xicalango.webp",
      title: "希卡兰戈 · 贸易与转卖节点",
      alt: "墨西哥湾沿岸贸易节点希卡兰戈位置示意图",
      copy: "希卡兰戈连接海岸贸易与不同语言区域；她可能在这里再次被转卖，但时间与交易过程没有完整记录。",
    },
    potonchan: {
      src: "./assets/maps/potonchan.webp",
      title: "波通昌 · 再一次被交出",
      alt: "波通昌所在区域位置示意图",
      copy: "1519 年战斗结束后，她成为交给西班牙人的二十名女性之一。记录没有把她的同意当作必要条件。",
    },
    maya: {
      src: "./assets/maps/maya.webp",
      title: "玛雅语世界 · 生存所学的语言",
      alt: "马琳切生活过的玛雅语区域示意图",
      copy: "在这里学会的玛雅语言，后来与她原有的纳瓦特尔语构成最初翻译链的关键。",
    },
  };

  const mapImage = document.querySelector("#route-map");
  const mapTitle = document.querySelector("#map-title");
  const mapCopy = document.querySelector("#map-copy");

  document.querySelectorAll("[data-map-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.mapStage;
      const stage = mapStages[selected];
      if (!stage || !mapImage || !mapTitle || !mapCopy) return;

      document.querySelectorAll("[data-map-stage]").forEach((candidate) => {
        candidate.setAttribute(
          "aria-pressed",
          String(candidate === button),
        );
      });

      mapImage.src = stage.src;
      mapImage.alt = stage.alt;
      mapTitle.textContent = stage.title;
      mapCopy.textContent = stage.copy;
      analytics()?.track("map_stage_selected", { stage: selected });
    });
  });

  const reflectionContent = {
    structure:
      "把结构放在前景，会看到她的选择一直发生在奴役、转卖、战争与殖民力量之间。但结构并不会自动取消行动造成的后果。",
    history:
      "把后世放在前景，会看到民族主义怎样把集体创伤人格化，并让一个原住民女性承担殖民者、盟军与各级政治领袖共同参与的历史。",
    both:
      "两者同时成立，意味着拒绝舒服的无罪或有罪判决：她参与了征服，也是在不自由条件中求生，并被后世过度惩罚。",
  };

  document.querySelectorAll("[data-reflection]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.reflection;
      document.querySelectorAll("[data-reflection]").forEach((candidate) => {
        candidate.setAttribute(
          "aria-pressed",
          String(candidate === button),
        );
      });

      const response = document.querySelector("#reflection-response");
      response.textContent = `${reflectionContent[selected]} 你的选择没有被保存或发送。`;
      analytics()?.track("reflection_selected", { response: selected });
    });
  });

  document.querySelectorAll(".evidence-note").forEach((note) => {
    note.addEventListener("toggle", () => {
      if (!note.open) return;
      const label = note.querySelector("summary")?.textContent?.trim() ?? "";
      analytics()?.track("annotation_opened", { label: label.slice(0, 80) });
    });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const chapterMenu = document.querySelector("#chapter-menu");

  const closeMenu = () => {
    if (!menuToggle || !chapterMenu) return;
    menuToggle.setAttribute("aria-expanded", "false");
    chapterMenu.classList.remove("is-open");
    chapterMenu.hidden = true;
  };

  menuToggle?.addEventListener("click", () => {
    const opening = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(opening));
    chapterMenu.hidden = !opening;
    chapterMenu.classList.toggle("is-open", opening);
  });

  chapterMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const chapterLinks = [
    ...document.querySelectorAll(
      '.progress-rail a, .chapter-menu a',
    ),
  ];
  const chapterIds = new Set([
    "before",
    "translator",
    "conqueror",
    "killing",
    "rupture",
    "endgame",
    "survivor",
    "traitor",
  ]);
  const viewedChapters = new Set();

  const chapterObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
      if (!visible) return;

      const chapter = visible.target.dataset.chapter;
      if (!chapterIds.has(chapter)) return;

      chapterLinks.forEach((link) => {
        const current = link.getAttribute("href") === `#${chapter}`;
        if (current) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });

      if (!viewedChapters.has(chapter)) {
        viewedChapters.add(chapter);
        analytics()?.track("chapter_viewed", { chapter });
      }
    },
    { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.1, 0.5] },
  );

  document.querySelectorAll(".scene[data-chapter]").forEach((scene) => {
    chapterObserver.observe(scene);
  });

  if (reducedMotion) {
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      element.classList.add("is-visible");
    });
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      revealObserver.observe(element);
    });
  }

  const updateScrollProgress = () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    document.body.style.setProperty(
      "--scroll-progress",
      `${Math.min(100, Math.max(0, progress))}%`,
    );
  };

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();
  analytics()?.track("page_view", { path: window.location.pathname });
})();
