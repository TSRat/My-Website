import { createHash } from "node:crypto";
import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const NOTE_DIRECTORY_LIMIT = 6;

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const stripFrontmatter = (markdown) => markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
const slugify = (value) => String(value)
  .normalize("NFKC")
  .trim()
  .toLowerCase()
  .replace(/[\s/]+/g, "-")
  .replace(/[^\p{Letter}\p{Number}-]+/gu, "")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "") || "section";

const makePlainRenderer = (glossary) => {
  const terms = [...glossary]
    .filter(({ term }) => term)
    .sort((left, right) => right.term.length - left.term.length);

  return (value, { highlight = true } = {}) => {
    let result = "";
    for (let index = 0; index < value.length;) {
      const arabic = value.slice(index).match(/^[\u0600-\u06ff\u0750-\u077f\u08a0-\u08ff]+/u);
      if (arabic) {
        result += `<span class="font-amiri" dir="rtl" lang="ar">${escapeHtml(arabic[0])}</span>`;
        index += arabic[0].length;
        continue;
      }

      const entry = highlight
        ? terms.find(({ term }) => value.startsWith(term, index))
        : null;
      if (entry) {
        result += `<button class="glossary-trigger" type="button" data-glossary-id="${escapeHtml(entry.term)}" aria-expanded="false" aria-controls="glossary-panel">${escapeHtml(entry.term)}</button>`;
        index += entry.term.length;
        continue;
      }

      result += escapeHtml(value[index]);
      index += 1;
    }
    return result;
  };
};

const renderInlineFactory = (glossary) => {
  const renderPlain = makePlainRenderer(glossary);

  const renderInline = (value, options = {}) => {
    const tokenPattern = /(!?\[[^\]]*\]\([^)]*\)|\[\[[^\]]+\]\]|`[^`]+`|\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|_[^_]+_)/g;
    let html = "";
    let cursor = 0;
    for (const match of value.matchAll(tokenPattern)) {
      html += renderPlain(value.slice(cursor, match.index), options);
      const token = match[0];
      if (token.startsWith("![")) {
        html += '<span class="source-image-note" role="note">[原笔记图片待来源与授权确认]</span>';
      } else if (token.startsWith("[[")) {
        const label = token.slice(2, -2).split("|").at(-1).replace(/^#/, "");
        html += `<span class="obsidian-reference">${renderPlain(label, options)}</span>`;
      } else if (token.startsWith("`")) {
        html += `<code>${escapeHtml(token.slice(1, -1))}</code>`;
      } else if (token.startsWith("**") || token.startsWith("__")) {
        html += `<strong>${renderInline(token.slice(2, -2), options)}</strong>`;
      } else if (token.startsWith("*") || token.startsWith("_")) {
        html += `<em>${renderInline(token.slice(1, -1), options)}</em>`;
      } else {
        const link = /^\[([^\]]*)\]\(([^)]*)\)$/.exec(token);
        const label = link?.[1] ?? token;
        const href = link?.[2] ?? "";
        html += /^https:\/\//.test(href)
          ? `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${renderInline(label, options)}</a>`
          : `<span class="source-reference">${renderInline(label, options)}</span>`;
      }
      cursor = (match.index ?? 0) + token.length;
    }
    return html + renderPlain(value.slice(cursor), options);
  };

  return renderInline;
};

function renderMarkdown(markdown, { glossary, volume }) {
  const renderInline = renderInlineFactory(glossary);
  const lines = stripFrontmatter(markdown).replaceAll("\r\n", "\n").split("\n");
  const html = [];
  const paragraph = [];
  let inCode = false;
  let code = [];
  let imageNotes = 0;
  const usedIds = new Map();

  const uniqueId = (heading) => {
    const base = `${volume.id}-${slugify(heading.replace(/[*_`]/g, ""))}`;
    const count = usedIds.get(base) ?? 0;
    usedIds.set(base, count + 1);
    return count ? `${base}-${count + 1}` : base;
  };
  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${renderInline(paragraph.join(" ").trim())}</p>`);
    paragraph.length = 0;
  };
  const parseListItem = (rawLine) => {
    const match = /^([ \t]*)([-+*]|\d+[.)])\s+(.+)$/.exec(rawLine);
    if (!match) return null;
    return {
      indent: match[1].replaceAll("\t", "    ").length,
      type: /^\d/u.test(match[2]) ? "ol" : "ul",
      content: match[3],
    };
  };
  const renderListBlock = (startIndex) => {
    const items = [];
    let cursor = startIndex;
    while (cursor < lines.length) {
      const item = parseListItem(lines[cursor]);
      if (!item) break;
      items.push(item);
      cursor += 1;
    }

    const stack = [];
    const openList = (item) => {
      html.push(`<${item.type}>`);
      html.push(`<li>${renderInline(item.content)}`);
      stack.push({ indent: item.indent, type: item.type });
    };
    const closeList = () => {
      const current = stack.pop();
      html.push(`</li></${current.type}>`);
    };

    for (const item of items) {
      while (stack.length && item.indent < stack.at(-1).indent) closeList();

      if (!stack.length || item.indent > stack.at(-1).indent) {
        openList(item);
        continue;
      }

      if (item.type === stack.at(-1).type) {
        html.push(`</li>\n<li>${renderInline(item.content)}`);
        continue;
      }

      closeList();
      openList(item);
    }

    while (stack.length) closeList();
    return cursor;
  };

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const line = rawLine.trim();

    if (line.startsWith("```")) {
      flushParagraph();
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
        code = [];
      }
      inCode = !inCode;
      continue;
    }
    if (inCode) {
      code.push(rawLine);
      continue;
    }
    if (!line) {
      flushParagraph();
      continue;
    }
    if (/^!\[[^\]]*\]\([^)]+\)$/.test(line)) {
      flushParagraph();
      imageNotes += 1;
      continue;
    }
    if (/^([-*_])\1{2,}$/.test(line)) {
      flushParagraph();
      html.push("<hr>");
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(line);
    if (heading) {
      flushParagraph();
      const level = Math.min(6, heading[1].length + 1);
      const id = uniqueId(heading[2]);
      html.push(`<h${level} id="${escapeHtml(id)}">${renderInline(heading[2], { highlight: false })}</h${level}>`);
      continue;
    }

    if (parseListItem(rawLine)) {
      flushParagraph();
      index = renderListBlock(index) - 1;
      continue;
    }

    if (line.startsWith(">")) {
      flushParagraph();
      const quoteLines = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      index -= 1;
      html.push(`<blockquote>${renderInline(quoteLines.join(" "))}</blockquote>`);
      continue;
    }

    if (line.startsWith("|") && lines[index + 1]?.trim().match(/^\|?\s*:?-{3,}/)) {
      flushParagraph();
      const tableLines = [line];
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index].trim());
        index += 1;
      }
      index -= 1;
      const cells = (row) => row.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
      const [head, ...rows] = tableLines;
      html.push(`<div class="table-scroll"><table><thead><tr>${cells(head).map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${cells(row).map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }

    paragraph.push(line);
  }
  flushParagraph();
  if (inCode && code.length) html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
  return { html: html.join("\n"), imageNotes };
}

const glossaryCard = (entry, { headingLevel = 3 } = {}) => `
  <article class="glossary-card" data-glossary-card="${escapeHtml(entry.term)}">
    <h${headingLevel}>${escapeHtml(entry.term)}</h${headingLevel}>
    <p class="glossary-arabic"><span class="font-amiri" dir="rtl" lang="ar">${escapeHtml(entry.arabic)}</span></p>
    <p>${escapeHtml(entry.definition)}</p>
    <dl>
      ${entry.geo_location ? `<div><dt>相关地点</dt><dd>${escapeHtml(entry.geo_location)}</dd></div>` : ""}
      <div><dt>来源</dt><dd>${escapeHtml(entry.source_locator)}</dd></div>
    </dl>
  </article>`;

const navigation = (registry) => registry.eras.map((era) => `
  <a href="#era-${era.index}" data-era-nav="${era.index}">
    <span>${era.number}</span>${escapeHtml(era.title)}
  </a>`).join("");

function pageTemplate({ registry, glossary, volumes, totalImageNotes }) {
  const publishedVolumes = registry.volumes
    .filter(({ status }) => status === "published")
    .toSorted((left, right) => left.order - right.order);
  const directoryNotes = publishedVolumes.slice(0, NOTE_DIRECTORY_LIMIT);
  if (directoryNotes.length !== NOTE_DIRECTORY_LIMIT) {
    throw new Error(`Arab History Archive requires ${NOTE_DIRECTORY_LIMIT} published notes for its directory`);
  }
  const eraSections = registry.eras.map((era) => {
    const eraVolumes = volumes.filter(({ meta }) => meta.eraIndex === era.index);
    return `
      <section class="era-section" id="era-${era.index}" data-era-section="${era.index}" aria-labelledby="era-${era.index}-title">
        <header class="era-heading">
          <span>${era.number}</span>
          <div><p>ERA ${era.number}</p><h2 id="era-${era.index}-title">${escapeHtml(era.title)}</h2></div>
        </header>
        ${eraVolumes.map(({ meta, body }) => `
          <article class="volume" id="volume-${escapeHtml(meta.id)}" data-volume-id="${escapeHtml(meta.id)}">
            <header class="volume-heading">
              <p>卷册 ${String(meta.order).padStart(2, "0")} / ${String(publishedVolumes.length).padStart(2, "0")}</p>
              <h2>${escapeHtml(meta.title)}</h2>
              <span>${escapeHtml(meta.sourceLabel)}</span>
            </header>
            <div class="markdown-body">${body}</div>
          </article>`).join("")}
      </section>`;
  }).join("");

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="从本地 Obsidian 笔记生成的阿拉伯通史数字档案馆：四个时代、典籍注疏与持续扩展的卷册结构。">
  <meta name="theme-color" content="#D7B593">
  <title>阿拉伯通史数字档案馆</title>
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="styles.css?v=20260812-2">
  <link rel="alternate" type="application/json" href="api/glossary" title="术语库 API">
</head>
<body data-era="0">
  <a class="skip-link" href="#reading">跳到正文</a>
  <div class="reading-progress" aria-hidden="true"><span></span></div>
  <header class="site-header">
    <a class="brand" href="#top">阿拉伯通史数字档案馆</a>
    <nav class="era-nav" aria-label="时代导航">${navigation(registry)}</nav>
    <a class="knowledge-link" href="../THE-LIVING-ATLAS/knowledge/humanities-arts/zh.html">返回知识库</a>
  </header>
  <main class="archive-grid" id="top">
    <div class="reading-column" id="reading">
      <section class="hero" aria-labelledby="page-title">
        <p class="eyebrow">ARAB HISTORY ARCHIVE</p>
        <h1 id="page-title">阿拉伯通史</h1>
        <p class="hero-subtitle">典籍注疏 × 演进式艺术</p>
        <p class="hero-instruction">向下滑动以穿越时代；点击带有虚线的名词以查看释义。</p>
        <dl class="archive-meta">
          <div><dt>当前卷册</dt><dd>${publishedVolumes.length}</dd></div>
          <div><dt>原始笔记</dt><dd>15,027 行</dd></div>
          <div><dt>状态</dt><dd>持续更新</dd></div>
        </dl>
      </section>
      <nav class="note-directory" aria-labelledby="note-directory-title">
        <header class="note-directory__intro">
          <p class="eyebrow">READING NOTES · 06</p>
          <h2 id="note-directory-title">六篇笔记目录</h2>
          <p>目录收录目前已发布的六篇笔记；后续笔记仍按登记顺序保留扩展空间。</p>
        </header>
        <ol>
          ${directoryNotes.map((note, index) => {
            const era = registry.eras.find(({ index: eraIndex }) => eraIndex === note.eraIndex);
            return `
            <li>
              <a href="#volume-${escapeHtml(note.id)}" data-note-nav="${index + 1}">
                <span class="note-directory__number">${String(index + 1).padStart(2, "0")}</span>
                <span class="note-directory__entry">
                  <strong>${escapeHtml(note.title)}</strong>
                  <small>${escapeHtml(note.sourceLabel)} · ${escapeHtml(era?.title || "")}</small>
                </span>
                <span class="note-directory__arrow" aria-hidden="true">↓</span>
              </a>
            </li>`;
          }).join("")}
        </ol>
      </nav>
      ${eraSections}
      <section class="future-volumes" id="future-volumes" aria-labelledby="future-title">
        <p>ARCHIVE CONTINUES</p>
        <h2 id="future-title">${escapeHtml(registry.futureVolumes.title)}</h2>
        <p>此区域预留给今后的笔记，不预设下一卷的标题、年代、数量或历史评价。新增 Markdown 并完成编辑登记后，目录、时代映射和词条关联会在构建时自动生成。</p>
        <ol>
          <li>放入 Markdown</li><li>登记卷册元数据</li><li>构建静态档案</li>
        </ol>
      </section>
      <section class="provenance" aria-labelledby="provenance-title">
        <p class="eyebrow">PROVENANCE</p>
        <h2 id="provenance-title">来源与编辑边界</h2>
        <p>正文由六篇本地 Obsidian Markdown 快照构建，前端不生成历史评价。原笔记中的 ${totalImageNotes} 处图片引用暂未公开复制，等待来源与发布权确认；它们不被替换为推测性地图、文物图或 AI 历史插画。</p>
        <p><a href="site-manifest.json">查看机器可读内容与分析契约 →</a></p>
      </section>
    </div>
    <aside class="glossary-panel" id="glossary-panel" aria-labelledby="glossary-title" aria-live="polite">
      <button class="sheet-handle" type="button" aria-label="向下关闭注疏"></button>
      <button class="glossary-close" type="button" aria-label="关闭注疏">关闭</button>
      <div class="glossary-panel__inner">
        <p class="eyebrow">典籍注疏</p>
        <div class="glossary-default">
          <h2 id="glossary-title">选择一个术语</h2>
          <p>正文中带虚线下划线的名词，可在不离开当前阅读位置的情况下查阅。</p>
          <div class="glossary-index" aria-label="全部术语">${glossary.map((entry) => `<button type="button" data-glossary-id="${escapeHtml(entry.term)}">${escapeHtml(entry.term)}</button>`).join("")}</div>
        </div>
        <div class="glossary-active" hidden>
          <h2 data-glossary-term></h2>
          <p class="glossary-arabic"><span class="font-amiri" dir="rtl" lang="ar" data-glossary-arabic></span></p>
          <p data-glossary-definition></p>
          <dl>
            <div data-glossary-geo-row><dt>相关地点</dt><dd data-glossary-geo></dd></div>
            <div><dt>来源</dt><dd data-glossary-source></dd></div>
          </dl>
        </div>
      </div>
    </aside>
  </main>
  <noscript>
    <section class="noscript-glossary" aria-labelledby="noscript-title">
      <h2 id="noscript-title">全部典籍注疏</h2>
      ${glossary.map((entry) => glossaryCard(entry)).join("")}
    </section>
  </noscript>
  <script id="glossary-data" type="application/json">${JSON.stringify(glossary).replaceAll("<", "\\u003c")}</script>
  <script src="site.js?v=20260812-1" defer></script>
</body>
</html>`;
}

export async function buildArabHistoryArchive({ site, stagingDirectory }) {
  const contentRoot = join(site.packageRoot, "content");
  const registry = JSON.parse(await readFile(join(contentRoot, "volumes.json"), "utf8"));
  const glossary = JSON.parse(await readFile(join(contentRoot, "glossary.json"), "utf8"));
  const published = registry.volumes.filter(({ status }) => status === "published");
  const ids = new Set();
  let totalImageNotes = 0;

  if (registry.eras.length !== 4) throw new Error("Arab History Archive requires four approved eras");
  if (!registry.futureVolumes?.enabled) throw new Error("Future-volume space must remain enabled");
  if (!published.length) throw new Error("Arab History Archive has no published volumes");

  const volumes = [];
  for (const meta of published.sort((left, right) => left.order - right.order)) {
    if (ids.has(meta.id)) throw new Error(`Duplicate Arab History volume id: ${meta.id}`);
    ids.add(meta.id);
    if (!registry.eras.some(({ index }) => index === meta.eraIndex)) {
      throw new Error(`${meta.id}: invalid eraIndex ${meta.eraIndex}`);
    }
    const markdown = await readFile(join(contentRoot, meta.file), "utf8");
    const checksum = createHash("sha256").update(markdown).digest("hex");
    if (checksum !== meta.sha256) throw new Error(`${meta.id}: source checksum does not match volumes.json`);
    const rendered = renderMarkdown(markdown, { glossary, volume: meta });
    totalImageNotes += rendered.imageNotes;
    volumes.push({ meta, body: rendered.html });
  }

  for (const entry of glossary) {
    if (!ids.has(entry.source_volume)) throw new Error(`${entry.term}: unknown source_volume`);
    if (!entry.term || !entry.definition || !entry.source_locator) {
      throw new Error(`Incomplete glossary entry: ${entry.term || "unknown"}`);
    }
  }

  await mkdir(join(stagingDirectory, "assets"), { recursive: true });
  await mkdir(join(stagingDirectory, "api"), { recursive: true });
  await Promise.all([
    cp(join(site.packageRoot, "assets"), join(stagingDirectory, "assets"), { recursive: true }),
    cp(join(site.packageRoot, "styles.css"), join(stagingDirectory, "styles.css")),
    cp(join(site.packageRoot, "site.js"), join(stagingDirectory, "site.js")),
    cp(join(site.packageRoot, "site-manifest.json"), join(stagingDirectory, "site-manifest.json")),
    writeFile(join(stagingDirectory, "api/glossary"), `${JSON.stringify(glossary, null, 2)}\n`),
    writeFile(join(stagingDirectory, "api/glossary.json"), `${JSON.stringify(glossary, null, 2)}\n`),
  ]);
  await writeFile(
    join(stagingDirectory, "index.html"),
    pageTemplate({ registry, glossary, volumes, totalImageNotes }).replace(/[ \t]+$/gm, ""),
  );
}
