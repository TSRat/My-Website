import { copyFile, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { loadSiteProjects } from "./site-projects.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pagesRoot = join(root, "docs");
const siteSlug = "IVORY-ARCHIVE";
const staticSites = (await loadSiteProjects())
  .filter((project) => project.build.mirror && project.hub)
  .sort((left, right) => left.hub.order - right.hub.order)
  .map((project) => ({
    slug: project.slug,
    title: project.title,
    ...project.hub,
  }));
const output = join(pagesRoot, siteSlug);
const source = await readFile(
  join(root, "sites/ivory-archive/briefings.ts"),
  "utf8",
);
const declaration = source.indexOf("export const briefings");
const literalStart = source.indexOf("[", declaration);
const literalEnd = source.lastIndexOf("];");

if (declaration < 0 || literalStart < 0 || literalEnd < literalStart) {
  throw new Error(
    "Could not locate the briefings array in sites/ivory-archive/briefings.ts",
  );
}

// sites/ivory-archive/briefings.ts deliberately stores the archive as literal
// data, so the static mirror can evaluate it without a TypeScript runtime.
const briefings = Function(`"use strict"; return (${source.slice(literalStart, literalEnd + 1)});`)();

const scopes = [
  {
    name: "艺术人文",
    text: "艺术、设计、电影、音乐、文学、建筑、戏剧、历史、哲学、宗教与文化史。",
  },
  {
    name: "社会科学",
    text: "心理学、社会学、人类学、语言学、传播学、天文学与地理学等，并关注科学发现背后的制度、技术基础设施和社会影响。",
  },
  {
    name: "女性主义",
    text: "女性历史、性别、女性主义理论、健康、照护与权力结构。",
  },
];

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const storyImageName = (story) => story.image.split("/").at(-1);
function staticSiteCard(site) {
  const art = site.cover
    ? `<div class="card-art" aria-hidden="true"><img src="${escapeHtml(site.slug)}/${escapeHtml(site.cover)}" alt=""></div>`
    : `<div class="card-art" aria-hidden="true"><span>${site.artLabel}</span></div>`;
  const metadata = site.metadata
    .map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`)
    .join("");

  return `
        <a class="site-card ${escapeHtml(site.className)}" href="${escapeHtml(site.slug)}/">
          ${art}
          <div class="card-copy">
            <p>${escapeHtml(site.eyebrow)}</p>
            <h3>${escapeHtml(site.title)}</h3>
            <p>${escapeHtml(site.description)}</p>
            <dl>${metadata}</dl>
            <strong>进入网站 <span>→</span></strong>
          </div>
        </a>`;
}

function hubPage() {
  const latest = briefings[0];
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="TSRat 的公开静态网站总入口。">
  <title>TSRat · Website Archive</title>
  <link rel="icon" href="THE-LIVING-ATLAS/favicon.svg?v=20260804-1" type="image/svg+xml">
  <link rel="stylesheet" href="hub.css">
</head>
<body>
  <main>
    <header class="masthead">
      <p class="kicker">TSRat · PUBLIC WEB ARCHIVE</p>
      <h1>网站档案馆</h1>
      <p>这里集中存放独立创作、阅读项目与持续更新的公开网站。每个项目拥有自己的目录和永久链接。</p>
    
      <a class="button" href="THE-LIVING-ATLAS/" style="margin-top: 1.5rem; display: inline-block; background: #0047AB; color: white; padding: 0.8rem 1.5rem; border-radius: 4px; text-decoration: none; font-weight: bold;">👉 进入全新主站：The Living Atlas 开放档案馆</a></header>
    <section aria-labelledby="sites-title">
      <div class="section-heading"><span>01</span><h2 id="sites-title">公开网站</h2></div>
      <div class="site-grid">
        <a class="site-card ivory" href="${siteSlug}/">
          <div class="card-art" aria-hidden="true"><img src="${siteSlug}/ivory-botanical-archive.png" alt=""></div>
          <div class="card-copy">
            <p>DAILY THOUGHT BRIEFING</p>
            <h3>IVORY ARCHIVE</h3>
            <p>中文思想简报档案馆：艺术人文、社会科学与女性主义。</p>
            <dl><div><dt>最新一期</dt><dd>${escapeHtml(latest.displayDate)}</dd></div><div><dt>收录</dt><dd>${briefings.length} 期 · ${briefings.reduce((count, issue) => count + issue.stories.length, 0)} 则</dd></div></dl>
            <strong>进入网站 <span>→</span></strong>
          </div>
        </a>
${staticSites.map(staticSiteCard).join("")}
      </div>
    </section>
  </main>
  <footer><a class="portfolio-home-link" href="THE-LIVING-ATLAS/" aria-label="前往 The Living Atlas 主页"><img class="portfolio-home-logo" src="THE-LIVING-ATLAS/tsrat-logo.png" alt="TSRat Logo"></a><span>TSRat</span><span>GitHub Pages · Public Static Archive</span></footer>
</body>
</html>`;
}

function root404Page() {
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>页面未找到 · TSRat</title><link rel="stylesheet" href="/My-Website/hub.css"></head><body><main class="not-found"><p class="kicker">404 · ARCHIVE CARD MISSING</p><h1>这个页面还没有被收入档案</h1><a href="/My-Website/">返回网站总入口 →</a></main></body></html>`;
}

function legacyRedirect(target) {
  const safeTarget = escapeHtml(target);
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0; url=${safeTarget}"><link rel="canonical" href="${safeTarget}"><title>正在前往 IVORY ARCHIVE</title><script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script></head><body><p>页面已迁移至 <a href="${safeTarget}">IVORY ARCHIVE</a>。</p></body></html>`;
}

function shell({ title, description, prefix, body }) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <title>${escapeHtml(title)} · 思想简报档案馆</title>
  <link rel="icon" href="${prefix}favicon.svg">
  <link rel="stylesheet" href="${prefix}styles.css">
  <link rel="stylesheet" href="${prefix}data.css">
</head>
<body>
  <a class="skip-link" href="#content">跳到正文</a>
  <header class="site-header frame">
    <a class="brand" href="${prefix}index.html"><img class="brand-logo" src="${prefix}tsrat-logo.png" alt="TS鼠 Logo"><span class="brand-copy"><strong>思想简报档案馆</strong><em>Ivory Archive</em></span></a>
    <nav aria-label="主要导航"><a href="${prefix}index.html#today">今日五则</a><a href="${prefix}index.html#archive">日刊档案</a><a href="${prefix}index.html#topics">主题范围</a><a href="${prefix}index.html#method">阅读方法</a><a href="${prefix}index.html#data" data-analytics-event="data_entry_opened" data-analytics-target="header">Data</a></nav>
  </header>
  <main id="content">${body}</main>
  <footer><div class="frame footer-inner"><div class="footer-identity"><a class="portfolio-home-link" href="${prefix}../THE-LIVING-ATLAS/" aria-label="前往 The Living Atlas 主页"><img class="footer-logo portfolio-home-logo portfolio-home-logo--light" src="${prefix}tsrat-logo.png" alt="TSRat Logo" style="filter:brightness(0) invert(1)"></a><p>思想简报档案馆 · Ivory Archive</p></div><p>GitHub Pages 公开静态镜像</p></div></footer>
  <script src="${prefix}site.js" defer></script>
  <script src="${prefix}ivory-analytics.js" defer></script>
</body>
</html>`;
}

function homePage() {
  const latest = briefings[0];
  const cards = latest.stories.map((story, index) => `
    <a class="story-card" data-analytics-event="briefing_opened" data-analytics-target="${escapeHtml(`${latest.date}#story-${index + 1}`)}" data-category="${escapeHtml(story.category)}" data-search="${escapeHtml(`${story.title} ${story.summary} ${story.background} ${story.category}`.toLowerCase())}" href="briefings/${latest.date}/index.html#story-${index + 1}">
      <img src="story-images/${escapeHtml(storyImageName(story))}" alt="${escapeHtml(story.imageAlt)}">
      <div class="card-copy"><span class="number">${String(index + 1).padStart(2, "0")}</span><span class="tag">${escapeHtml(story.category)}</span><h3>${escapeHtml(story.title)}</h3><p>${escapeHtml(story.summary)}</p></div>
    </a>`).join("");

  const archive = briefings.map((briefing) => `
    <a class="archive-entry" data-analytics-event="briefing_opened" data-analytics-target="${escapeHtml(briefing.date)}" data-topics="${escapeHtml(briefing.topics.join(" "))}" data-search="${escapeHtml(`${briefing.theme} ${briefing.intro} ${briefing.learningGoal} ${briefing.connection} ${briefing.stories.flatMap((story) => [story.title, story.summary, story.background, story.happened, story.whyItMatters, story.sourceName]).join(" ")}`.toLowerCase())}" href="briefings/${briefing.date}/index.html">
      <div><span>${escapeHtml(briefing.displayDate)}</span><strong>第 ${escapeHtml(briefing.issueNo)} 期</strong></div>
      <div><h3>${escapeHtml(briefing.theme)}</h3><p>${briefing.topics.map((topic) => `<span>${escapeHtml(topic)}</span>`).join("")}</p></div><b>→</b>
    </a>`).join("");

  const body = `
    <section class="hero frame">
      <div class="hero-meta"><span>ISSUE ${escapeHtml(latest.issueNo)}</span><strong>${escapeHtml(latest.displayDate)}</strong><small>IVORY ARCHIVE</small></div>
      <div class="hero-copy"><p class="eyebrow">每日思想简报 · Daily Thought Briefing</p><h1>先认识人物与概念，再读懂文化与<span class="no-break">社会新闻</span></h1><p>${briefings.length} 期、${briefings.reduce((count, issue) => count + issue.stories.length, 0)} 则新闻都按同一条初学者路径重写：先补足背景，再说明事件，接着列出具体细节，最后解释为什么值得关注。</p><a class="button" data-analytics-event="briefing_opened" data-analytics-target="${escapeHtml(latest.date)}" href="briefings/${latest.date}/index.html">阅读今日简报 →</a><span class="unique">✓ ${latest.uniqueCount}/${latest.stories.length} 与历史档案无实质重复</span></div>
      <div class="hero-art"><img src="ivory-botanical-archive.png" alt="森林绿色植物标本风档案插图"><span>${escapeHtml(latest.displayDate)}<br>No.${escapeHtml(latest.issueNo)}</span></div>
    </section>
    <section class="section frame" id="today"><header class="section-title"><div><p class="eyebrow">Today's Index</p><h2>今日五则</h2></div><p>${escapeHtml(latest.theme)}</p></header>
      <div class="toolbar"><button class="active" data-analytics-event="filter_applied" data-analytics-target="全部" data-filter="全部">全部</button>${scopes.map((scope) => `<button data-analytics-event="filter_applied" data-analytics-target="${escapeHtml(scope.name)}" data-filter="${escapeHtml(scope.name)}">${escapeHtml(scope.name)}</button>`).join("")}<label><span>搜索</span><input id="story-search" data-analytics-event="search_performed" data-analytics-target="archive-search" type="search" placeholder="人物、事件、术语或来源"></label></div>
      <div class="story-grid">${cards}</div>
    </section>
    <section class="archive" id="archive"><div class="frame"><header class="section-title light"><div><p class="eyebrow">Daily Archive</p><h2>日刊档案</h2></div><p>每一期都是独立入口，也回到同一张不断生长的知识地图。</p></header><div class="archive-list">${archive}</div></div></section>
    <section class="section frame" id="topics"><header class="section-title"><div><p class="eyebrow">Topic Index</p><h2>三条长期线索</h2></div><p>范围明确，但允许故事跨越不同标签。</p></header><div class="scope-grid">${scopes.map((scope, index) => `<article><span>0${index + 1}</span><h3>${escapeHtml(scope.name)}</h3><p>${escapeHtml(scope.text)}</p></article>`).join("")}</div></section>
    <section class="data-section" id="data" aria-labelledby="data-title"><div class="frame data-grid">
      <div class="data-heading"><p class="eyebrow">Data / Analytics</p><h2 id="data-title">档案如何观察自己的使用</h2><p>这里只公开测量边界，不展示尚不存在的访问量，也不把阅读质量压缩成停留时长。</p></div>
      <dl class="data-status" aria-label="当前分析状态"><div><dt>Provider</dt><dd>None</dd></div><div><dt>Signals</dt><dd>搜索、筛选、打开日刊</dd></div><div><dt>Privacy</dt><dd>无 Cookie、无持久存储、无身份、无原始搜索文本</dd></div></dl>
      <p class="data-note">事件契约已经就绪；只有在明确数据来源、会话定义、保留期限与使用目的之后，才会接入分析供应商。<a href="ivory-site-manifest.json">查看机器可读 manifest →</a></p>
    </div></section>`;

  const method = `<section class="method-section frame" id="method"><div><p class="eyebrow">Reading Method</p><h2>每篇都从零开始，分成四个部分</h2></div><div><p>标题和引言不算正文已经介绍过的信息。每篇都会重新说明人物、机构或概念，再讲本次事件、具体细节和它为什么值得关注。</p><ol><li><span>1</span><strong>背景：</strong>第一次出现的人物、机构和概念都完整介绍。</li><li><span>2</span><strong>事件：</strong>用普通语言说明谁在什么时候、什么地点做了什么。</li><li><span>3</span><strong>细节：</strong>集中查看关键日期、数字、作品和过程。</li><li><span>4</span><strong>分析：</strong>解释具体影响，并在结尾提供唯一的原文链接。</li></ol></div></section>`;

  return shell({
    title: "首页",
    description: "每日五则中文思想简报：艺术人文、社会科学与女性主义。",
    prefix: "",
    body: body + method,
  });
}

function issuePage(briefing) {
  const index = briefing.stories.map((story, storyIndex) => `<li><a href="#story-${storyIndex + 1}"><span>${String(storyIndex + 1).padStart(2, "0")}</span>${escapeHtml(story.title)}</a></li>`).join("");
  const quickRead = briefing.stories.map((story, storyIndex) => `<li><a href="#story-${storyIndex + 1}"><span>${String(storyIndex + 1).padStart(2, "0")}</span><strong>${escapeHtml(story.title)}</strong><p>${escapeHtml(story.summary)}</p></a></li>`).join("");
  const stories = briefing.stories.map((story, storyIndex) => `
    <article class="long-story" id="story-${storyIndex + 1}">
      <header><span class="long-number">${String(storyIndex + 1).padStart(2, "0")}</span><div><span class="tag">${escapeHtml(story.category)}</span><h2>${escapeHtml(story.title)}</h2><p>${escapeHtml(story.summary)}</p></div></header>
      <figure><img loading="lazy" src="../../story-images/${escapeHtml(storyImageName(story))}" alt="${escapeHtml(story.imageAlt)}"><figcaption>${escapeHtml(story.imageCredit)}</figcaption></figure>
      <div class="story-learning-flow">
        <section class="story-section"><h3>背景</h3><p>${escapeHtml(story.background)}</p></section>
        <section class="story-section happened-block"><h3>事件</h3><p>${escapeHtml(story.happened)}</p></section>
        <section class="story-section background-block"><h3>细节</h3><ul>${story.facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")}</ul></section>
        <section class="story-section analysis-block"><h3>分析</h3><p>${escapeHtml(story.whyItMatters)}</p></section>
${story.creatorAngle ? `        <section class="story-section"><h3>创作角度</h3><p>${escapeHtml(story.creatorAngle)}</p></section>` : ""}
        <aside class="story-source-link"><a data-analytics-event="source_opened" data-analytics-target="${escapeHtml(`${briefing.date}:${storyIndex + 1}:analysis`)}" href="${escapeHtml(story.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(story.sourceName)}｜${escapeHtml(story.title)} ↗</a><small class="source-url">${escapeHtml(story.sourceDate)} · 点开即可阅读原文</small></aside>
      </div>
      <a class="back-to-top" href="#content">回到本期顶部 ↑</a>
    </article>`).join("");

  const body = `<section class="issue-hero frame"><div class="issue-meta"><a href="../../index.html#archive">← 返回日刊档案</a><strong>NO. ${escapeHtml(briefing.issueNo)}</strong><span>${escapeHtml(briefing.displayDate)}</span></div><div><p class="eyebrow">本期要理解的事</p><h1>${escapeHtml(briefing.theme)}</h1><p>${escapeHtml(briefing.intro)}</p><div class="issue-tags">${briefing.topics.map((topic) => `<span>${escapeHtml(topic)}</span>`).join("")}</div></div><aside class="issue-index"><p class="eyebrow">In This Issue</p><ol>${index}</ol></aside></section><section class="issue-quick-read frame"><div><p class="eyebrow">3-Minute Brief</p><h2>先用三分钟掌握本期</h2><p>${escapeHtml(briefing.learningGoal)}</p></div><ol>${quickRead}</ol><aside><p class="eyebrow">五则怎样连在一起</p><p>${escapeHtml(briefing.connection)}</p></aside></section><div class="frame stories">${stories}</div><section class="issue-synthesis frame"><p class="eyebrow">Issue Synthesis</p><h2>读完五则之后，记住这一条连接</h2><p>${escapeHtml(briefing.connection)}</p></section>`;
  return shell({ title: `${briefing.displayDate} · 第 ${briefing.issueNo} 期`, description: briefing.intro, prefix: "../../", body });
}

const styles = await readFile(join(root, "scripts/github-pages.css"), "utf8");
const dataStyles = await readFile(join(root, "scripts/github-pages-data.css"), "utf8");
const client = await readFile(join(root, "scripts/github-pages.js"), "utf8");
const hubStyles = await readFile(join(root, "scripts/github-pages-hub.css"), "utf8");

await rm(output, { recursive: true, force: true });
await rm(join(pagesRoot, "briefings"), { recursive: true, force: true });
await mkdir(pagesRoot, { recursive: true });
await mkdir(join(output, "briefings"), { recursive: true });
await mkdir(join(output, "story-images"), { recursive: true });
await writeFile(join(pagesRoot, ".nojekyll"), "");
await writeFile(join(pagesRoot, "index.html"), hubPage());
await writeFile(join(pagesRoot, "hub.css"), hubStyles);
await writeFile(join(pagesRoot, "404.html"), root404Page());
await writeFile(join(output, "index.html"), homePage());
await writeFile(join(output, "styles.css"), styles);
await writeFile(join(output, "data.css"), dataStyles);
await writeFile(join(output, "site.js"), client);
await copyFile(join(root, "public/ivory-analytics.js"), join(output, "ivory-analytics.js"));
await copyFile(join(root, "public/ivory-site-manifest.json"), join(output, "ivory-site-manifest.json"));
await writeFile(join(output, "404.html"), shell({ title: "页面未找到", description: "页面未找到", prefix: "./", body: '<section class="not-found frame"><p class="eyebrow">404</p><h1>这张档案卡还不存在</h1><a class="button" href="./index.html">返回首页</a></section>' }));
await copyFile(join(root, "public/favicon.svg"), join(output, "favicon.svg"));
await copyFile(join(root, "public/ivory-botanical-archive.png"), join(output, "ivory-botanical-archive.png"));
await copyFile(join(root, "public/tsrat-logo.png"), join(output, "tsrat-logo.png"));

for (const briefing of briefings) {
  const issueDir = join(output, "briefings", briefing.date);
  const legacyIssueDir = join(pagesRoot, "briefings", briefing.date);
  await mkdir(issueDir, { recursive: true });
  await mkdir(legacyIssueDir, { recursive: true });
  await writeFile(join(issueDir, "index.html"), issuePage(briefing));
  await writeFile(join(legacyIssueDir, "index.html"), legacyRedirect(`../../${siteSlug}/briefings/${briefing.date}/`));
  for (const story of briefing.stories) {
    const name = storyImageName(story);
    await copyFile(join(root, "public/story-images", name), join(output, "story-images", name));
  }
}

for (const site of staticSites) {
  const target = join(pagesRoot, site.slug);
  await mkdir(target, { recursive: true });
  await cp(join(root, site.slug), target, { recursive: true, force: false, errorOnExist: false });
}

console.log(`Generated ${siteSlug}, preserved existing static site directories, and built the multi-site hub.`);
