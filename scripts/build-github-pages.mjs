import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pagesRoot = join(root, "docs");
const siteSlug = "IVORY-ARCHIVE";
const staticSites = [
  {
    slug: "ENHEDUANNA",
    className: "enheduanna",
    artLabel: "004",
    eyebrow: "DAUGHTERS OF TIME · 004",
    title: "恩赫杜安娜：第一人",
    description: "从乌尔神庙、流放与伊南娜赞歌出发，认识公主、祭司、作者与先驱恩赫杜安娜。",
    metadata: [["时代", "约公元前23世纪"], ["地点", "美索不达米亚 · 乌尔"]],
  },
  {
    slug: "HILDEGARD",
    className: "hildegard",
    artLabel: "002",
    eyebrow: "DAUGHTERS OF TIME · 002",
    title: "谦卑的反叛者：宾根的希尔德加德",
    description: "从 1163 年那封警告皇帝的信出发，重新走近 12 世纪莱茵兰的女院长、先知、学者、音乐家与语言发明者。",
    metadata: [["时代", "1098 — 1179"], ["地点", "莱茵兰 · 鲁珀茨贝格"]],
  },
  {
    slug: "HYPATIA",
    className: "hypatia",
    cover: "assets/hypatia-cover.png",
    eyebrow: "DAUGHTERS OF TIME · 001",
    title: "教师之死：希帕蒂娅",
    description: "从教师、哲学家与公共人物出发，在古代史料与后世塑造之间重新认识希帕蒂娅。",
    metadata: [["时代", "约 350/370—415"], ["地点", "亚历山大里亚"]],
  },
  {
    slug: "MELROMARC-SISTERS",
    className: "melromarc",
    artLabel: "M&amp;M",
    eyebrow: "FAN-CREATED STORY ARCHIVE",
    title: "Melromarc 姐妹故事",
    description: "Malty 与 Melty 的多重故事档案：两个名字，生长出许多命运。",
    metadata: [["故事线", "13 条"], ["整理方式", "5 个改变时点"]],
  },

  {
    slug: "THE-LIVING-ATLAS",
    className: "living-atlas",
    artLabel: "ATLAS",
    eyebrow: "TSRAT · MAIN HUB",
    title: "The Living Atlas 开放档案馆",
    description: "在算法与人性之间建立桥梁：历史、女性主义、心理学、设计、技术与文学的公共档案馆主站。",
    metadata: [["类型", "主页 (Hub)"], ["架构", "Editorial Digital Archive"]],
  },
];
const output = join(pagesRoot, siteSlug);
const source = await readFile(join(root, "app/briefings.ts"), "utf8");
const declaration = source.indexOf("export const briefings");
const literalStart = source.indexOf("[", declaration);
const literalEnd = source.lastIndexOf("];");

if (declaration < 0 || literalStart < 0 || literalEnd < literalStart) {
  throw new Error("Could not locate the briefings array in app/briefings.ts");
}

// app/briefings.ts deliberately stores the archive as literal data, so the
// static mirror can evaluate the array without adding a TypeScript runtime.
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
    ? `<div class="card-art" aria-hidden="true" style="background:#f7fbff"><img src="${escapeHtml(site.slug)}/${escapeHtml(site.cover)}" alt="" style="position:absolute;inset:0;z-index:1;width:100%;height:100%;object-fit:cover;object-position:center"></div>`
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
  <link rel="icon" href="${siteSlug}/favicon.svg">
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
          <div class="card-art" aria-hidden="true"><span>IA</span></div>
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
  <footer><span>TSRat</span><span>GitHub Pages · Public Static Archive</span></footer>
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
</head>
<body>
  <a class="skip-link" href="#content">跳到正文</a>
  <header class="site-header frame">
    <a class="brand" href="${prefix}index.html"><img class="brand-logo" src="${prefix}tsrat-logo.png" alt="TS鼠 Logo"><span class="brand-copy"><strong>思想简报档案馆</strong><em>Ivory Archive</em></span></a>
    <nav aria-label="主要导航"><a href="${prefix}index.html#today">今日五则</a><a href="${prefix}index.html#archive">日刊档案</a><a href="${prefix}index.html#topics">主题范围</a></nav>
  </header>
  <main id="content">${body}</main>
  <footer><div class="frame footer-inner"><div class="footer-identity"><img class="footer-logo" src="${prefix}tsrat-logo.png" alt="TS鼠 Logo"><p>思想简报档案馆 · Ivory Archive</p></div><p>GitHub Pages 公开静态镜像</p></div></footer>
  <script src="${prefix}site.js" defer></script>
</body>
</html>`;
}

function homePage() {
  const latest = briefings[0];
  const cards = latest.stories.map((story, index) => `
    <a class="story-card" data-category="${escapeHtml(story.category)}" data-search="${escapeHtml(`${story.title} ${story.summary} ${story.category}`.toLowerCase())}" href="briefings/${latest.date}/index.html#story-${index + 1}">
      <img src="story-images/${escapeHtml(storyImageName(story))}" alt="${escapeHtml(story.imageAlt)}">
      <div class="card-copy"><span class="number">${String(index + 1).padStart(2, "0")}</span><span class="tag">${escapeHtml(story.category)}</span><h3>${escapeHtml(story.title)}</h3><p>${escapeHtml(story.summary)}</p></div>
    </a>`).join("");

  const archive = briefings.map((briefing) => `
    <a class="archive-entry" data-topics="${escapeHtml(briefing.topics.join(" "))}" data-search="${escapeHtml(`${briefing.theme} ${briefing.stories.map((story) => story.title).join(" ")}`.toLowerCase())}" href="briefings/${briefing.date}/index.html">
      <div><span>${escapeHtml(briefing.displayDate)}</span><strong>第 ${escapeHtml(briefing.issueNo)} 期</strong></div>
      <div><h3>${escapeHtml(briefing.theme)}</h3><p>${briefing.topics.map((topic) => `<span>${escapeHtml(topic)}</span>`).join("")}</p></div><b>→</b>
    </a>`).join("");

  const body = `
    <section class="hero frame">
      <div class="hero-meta"><span>ISSUE ${escapeHtml(latest.issueNo)}</span><strong>${escapeHtml(latest.displayDate)}</strong><small>IVORY ARCHIVE</small></div>
      <div class="hero-copy"><p class="eyebrow">每日思想简报 · Daily Thought Briefing</p><h1>把今天的文化新闻，变成明天的思考素材</h1><p>每天 5 个值得停留的故事，沿着艺术人文、社会科学与女性主义三条线索展开。</p><a class="button" href="briefings/${latest.date}/index.html">阅读今日简报 →</a><span class="unique">✓ ${latest.uniqueCount}/${latest.stories.length} 与历史档案无实质重复</span></div>
      <div class="hero-art"><img src="ivory-botanical-archive.png" alt="森林绿色植物标本风档案插图"><span>${escapeHtml(latest.displayDate)}<br>No.${escapeHtml(latest.issueNo)}</span></div>
    </section>
    <section class="section frame" id="today"><header class="section-title"><div><p class="eyebrow">Today's Index</p><h2>今日五则</h2></div><p>${escapeHtml(latest.theme)}</p></header>
      <div class="toolbar"><button class="active" data-filter="全部">全部</button>${scopes.map((scope) => `<button data-filter="${escapeHtml(scope.name)}">${escapeHtml(scope.name)}</button>`).join("")}<label><span>搜索</span><input id="story-search" type="search" placeholder="人物、作品或议题"></label></div>
      <div class="story-grid">${cards}</div>
    </section>
    <section class="archive" id="archive"><div class="frame"><header class="section-title light"><div><p class="eyebrow">Daily Archive</p><h2>日刊档案</h2></div><p>每一期都是独立入口，也回到同一张不断生长的知识地图。</p></header><div class="archive-list">${archive}</div></div></section>
    <section class="section frame" id="topics"><header class="section-title"><div><p class="eyebrow">Topic Index</p><h2>三条长期线索</h2></div><p>范围明确，但允许故事跨越不同标签。</p></header><div class="scope-grid">${scopes.map((scope, index) => `<article><span>0${index + 1}</span><h3>${escapeHtml(scope.name)}</h3><p>${escapeHtml(scope.text)}</p></article>`).join("")}</div></section>`;

  return shell({
    title: "首页",
    description: "每日五则中文思想简报：艺术人文、社会科学与女性主义。",
    prefix: "",
    body,
  });
}

function issuePage(briefing) {
  const index = briefing.stories.map((story, storyIndex) => `<li><a href="#story-${storyIndex + 1}"><span>${String(storyIndex + 1).padStart(2, "0")}</span>${escapeHtml(story.title)}</a></li>`).join("");
  const stories = briefing.stories.map((story, storyIndex) => `
    <article class="long-story" id="story-${storyIndex + 1}">
      <header><span class="long-number">${String(storyIndex + 1).padStart(2, "0")}</span><div><span class="tag">${escapeHtml(story.category)}</span><h2>${escapeHtml(story.title)}</h2><p>${escapeHtml(story.summary)}</p></div></header>
      <figure><img src="../../story-images/${escapeHtml(storyImageName(story))}" alt="${escapeHtml(story.imageAlt)}"><figcaption>${escapeHtml(story.imageCredit)}</figcaption></figure>
      <div class="story-columns"><div class="story-prose"><section><h3>发生了什么</h3><p>${escapeHtml(story.happened)}</p></section><section><h3>为什么重要</h3><p>${escapeHtml(story.importance)}</p></section><section class="creator"><h3>可创作角度</h3><p>${escapeHtml(story.creatorAngle)}</p></section></div><aside><p class="eyebrow">Fact File</p><ul>${story.facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")}</ul><a href="${escapeHtml(story.sourceUrl)}" target="_blank" rel="noreferrer">查看来源：${escapeHtml(story.sourceName)} ↗</a><small>${escapeHtml(story.sourceDate)}</small></aside></div>
    </article>`).join("");

  const body = `<section class="issue-hero frame"><div class="issue-meta"><a href="../../index.html#archive">← 返回日刊档案</a><strong>NO. ${escapeHtml(briefing.issueNo)}</strong><span>${escapeHtml(briefing.displayDate)}</span></div><div><p class="eyebrow">今日主题</p><h1>${escapeHtml(briefing.theme)}</h1><p>${escapeHtml(briefing.intro)}</p><div class="issue-tags">${briefing.topics.map((topic) => `<span>${escapeHtml(topic)}</span>`).join("")}</div></div><aside class="issue-index"><p class="eyebrow">In This Issue</p><ol>${index}</ol></aside></section><div class="frame stories">${stories}</div>`;
  return shell({ title: `${briefing.displayDate} · 第 ${briefing.issueNo} 期`, description: briefing.intro, prefix: "../../", body });
}

const styles = await readFile(join(root, "scripts/github-pages.css"), "utf8");
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
await writeFile(join(output, "site.js"), client);
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

console.log(`Generated ${siteSlug}, its legacy redirects, and the multi-site hub without modifying other site directories.`);