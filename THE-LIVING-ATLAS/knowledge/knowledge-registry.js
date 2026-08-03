export const knowledgeLibrary = {
  schemaVersion: 1,
  locales: ["en", "zh"],
  types: [
    {
      id: "book",
      label: { en: "Books", zh: "书籍" },
      description: {
        en: "Long-form reading and book notes",
        zh: "长篇阅读与书籍笔记",
      },
    },
    {
      id: "topic",
      label: { en: "Topics", zh: "主题" },
      description: {
        en: "Ongoing fields of inquiry",
        zh: "持续生长的研究主题",
      },
    },
    {
      id: "concept",
      label: { en: "Concepts", zh: "概念" },
      description: {
        en: "Reusable ideas and distinctions",
        zh: "可复用的观念与区分",
      },
    },
    {
      id: "output",
      label: { en: "Outputs", zh: "作品" },
      description: {
        en: "Public sites, essays, and artifacts",
        zh: "公开网站、文章与作品",
      },
    },
  ],
  disciplines: [
    {
      id: "humanities-arts",
      number: "01",
      title: { en: "Humanities & Arts", zh: "人文与艺术" },
      href: {
        en: "knowledge/humanities-arts/",
        zh: "knowledge/humanities-arts/zh.html",
      },
      description: {
        en: "History, philosophy, literature, visual culture, and long-form editorial work.",
        zh: "历史、哲学、文学、视觉文化与长篇编辑工作。",
      },
      startHere: {
        en: "Meet a historical figure through context, evidence, and interpretation.",
        zh: "从一个历史人物开始，依次阅读语境、证据与解释。",
      },
    },
    {
      id: "social-sciences",
      number: "02",
      title: { en: "Social Sciences", zh: "社会科学" },
      href: {
        en: "knowledge/social-sciences/",
        zh: "knowledge/social-sciences/zh.html",
      },
      description: {
        en: "Institutions, communities, sports, psychology, and collective life.",
        zh: "制度、社群、体育、心理与共同生活。",
      },
      startHere: {
        en: "Learn a game through its rules, institutions, and shared culture.",
        zh: "从一项运动开始，理解规则、制度与共同文化。",
      },
    },
    {
      id: "science-technology",
      number: "03",
      title: {
        en: "Natural Sciences & Technology",
        zh: "自然科学与技术",
      },
      href: {
        en: "knowledge/science-technology/",
        zh: "knowledge/science-technology/zh.html",
      },
      description: {
        en: "Scientific ideas, technical systems, computing, and tools.",
        zh: "科学观念、技术系统、计算与工具。",
      },
      startHere: {
        en: "Understand a technical system from first principles to consequences.",
        zh: "从基本原理出发，理解一个技术系统及其影响。",
      },
    },
  ],
  records: [
    {
      id: "hypatia",
      discipline: "humanities-arts",
      type: "output",
      status: "published",
      featured: true,
      title: { en: "Hypatia", zh: "希帕蒂娅" },
      summary: {
        en: "History, evidence, and the afterlife of a philosopher's image.",
        zh: "从历史语境、证据边界到一位哲学家形象的后世生命。",
      },
      href: "../HYPATIA/",
      updatedAt: "2026-07-20",
    },
    {
      id: "hildegard",
      discipline: "humanities-arts",
      type: "output",
      status: "published",
      featured: true,
      title: { en: "Hildegard", zh: "希尔德加德" },
      summary: {
        en: "A manuscript-like study of knowledge, authority, music, and uncertainty.",
        zh: "以数字手抄本梳理知识、权威、音乐与证据的不确定性。",
      },
      href: "../HILDEGARD/",
      updatedAt: "2026-07-21",
    },
    {
      id: "la-malinche",
      discipline: "humanities-arts",
      type: "output",
      status: "published",
      featured: false,
      title: { en: "La Malinche", zh: "马琳切" },
      summary: {
        en: "Translation, survival, empire, and the making of a disputed historical symbol.",
        zh: "翻译、生存、帝国，以及一个争议历史符号的形成。",
      },
      href: "../LA-MALINCHE/",
      updatedAt: "2026-07-27",
    },
    {
      id: "enheduanna",
      discipline: "humanities-arts",
      type: "output",
      status: "published",
      featured: false,
      title: { en: "Enheduanna", zh: "恩赫杜安娜" },
      summary: {
        en: "Authorship, ritual power, political exile, and the collective behind a first name.",
        zh: "作者身份、仪式权力、政治流亡，以及“第一位作者”背后的集体。",
      },
      href: "../ENHEDUANNA/",
      updatedAt: "2026-07-15",
    },
    {
      id: "sartre-nausea-guide",
      discipline: "humanities-arts",
      type: "output",
      status: "published",
      featured: false,
      title: { en: "Sartre · Nausea Guide", zh: "《恶心》入门导读" },
      summary: {
        en: "An interactive reading path into contingency, existence, and the novel's form.",
        zh: "从偶然性、存在与小说形式进入《恶心》的互动阅读路径。",
      },
      href: "../SARTRE-NAUSEA-GUIDE/",
      updatedAt: "2026-07-25",
    },
    {
      id: "existentialism-humanism-guide",
      discipline: "humanities-arts",
      type: "output",
      status: "published",
      featured: false,
      title: {
        en: "Existentialism Is a Humanism",
        zh: "《存在主义是一种人道主义》导读",
      },
      summary: {
        en: "A visual argument map for Sartre's lecture and its central objections.",
        zh: "围绕萨特演讲及其主要反对意见制作的视觉论证地图。",
      },
      href: "../EXISTENTIALISM-HUMANISM-GUIDE/",
      updatedAt: "2026-07-25",
    },
    {
      id: "women-history-ancient",
      discipline: "humanities-arts",
      type: "book",
      status: "mapping",
      featured: false,
      title: {
        en: "Women's History: Ancient Volume",
        zh: "女性史：古代卷",
      },
      summary: {
        en: "A long-form reading map being separated into public, source-checked records.",
        zh: "一份长篇阅读地图，正在拆分为可公开、可核查来源的条目。",
      },
      href: null,
      updatedAt: "2026-08-04",
    },
    {
      id: "football-rules-primer",
      discipline: "social-sciences",
      type: "topic",
      status: "mapping",
      featured: true,
      title: { en: "Football Rules Primer", zh: "足球规则入门" },
      summary: {
        en: "A beginner path connecting the rules of play with institutions and match culture.",
        zh: "把比赛规则、制度与观赛文化连接起来的初学者路径。",
      },
      href: null,
      updatedAt: "2026-08-04",
    },
    {
      id: "transformer-primer",
      discipline: "science-technology",
      type: "topic",
      status: "mapping",
      featured: true,
      title: { en: "Transformer", zh: "Transformer" },
      summary: {
        en: "A technical topic being prepared for a public, source-checked reading path.",
        zh: "正在整理为公开且经过来源核查的技术阅读路径。",
      },
      href: null,
      updatedAt: "2026-08-04",
    },
    {
      id: "ai-documentation",
      discipline: "science-technology",
      type: "concept",
      status: "planned",
      featured: false,
      title: { en: "AI Documentation", zh: "AI 技术文档" },
      summary: {
        en: "A planned concept layer for reusable explanations of AI systems and tools.",
        zh: "计划中的概念层，用于沉淀可复用的 AI 系统与工具解释。",
      },
      href: null,
      updatedAt: "2026-07-23",
    },
  ],
};

export const localizeKnowledge = (value, locale) =>
  typeof value === "string" ? value : value?.[locale] ?? value?.en ?? "";

export const getKnowledgeDiscipline = (id) =>
  knowledgeLibrary.disciplines.find((discipline) => discipline.id === id);

export const getKnowledgeRecords = (discipline = null) =>
  knowledgeLibrary.records
    .filter((record) => !discipline || record.discipline === discipline)
    .sort((left, right) =>
      right.updatedAt.localeCompare(left.updatedAt) || left.id.localeCompare(right.id)
    );

export const getPublishedKnowledgeRecords = (discipline = null) =>
  getKnowledgeRecords(discipline).filter(
    (record) => record.status === "published" && record.href,
  );
