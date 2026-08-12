import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const readRepo = (path) => readFile(new URL(path, root), "utf8");
const parseJson = async (path) => JSON.parse(await readRepo(path));

const relativeLuminance = (hex) => {
  const channels = hex.match(/[a-f\d]{2}/gi).map((value) => {
    const channel = Number.parseInt(value, 16) / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
};

const contrast = (left, right) => {
  const light = Math.max(relativeLuminance(left), relativeLuminance(right));
  const dark = Math.min(relativeLuminance(left), relativeLuminance(right));
  return (light + 0.05) / (dark + 0.05);
};

test("Arab History volume registry is source-locked and future-extensible", async () => {
  const registry = await parseJson("sites/arab-history-archive/content/volumes.json");
  assert.equal(registry.eras.length, 4);
  assert.equal(registry.volumes.length, 6);
  assert.equal(registry.futureVolumes.enabled, true);
  assert.match(registry.futureVolumes.policy, /Do not pre-name/u);
  assert.equal(new Set(registry.volumes.map(({ id }) => id)).size, 6);
  assert.deepEqual(registry.volumes.map(({ order }) => order), [1, 2, 3, 4, 5, 6]);

  for (const volume of registry.volumes) {
    assert.equal(volume.status, "published");
    assert.ok(registry.eras.some(({ index }) => index === volume.eraIndex));
    const markdown = await readRepo(`sites/arab-history-archive/content/${volume.file}`);
    assert.equal(createHash("sha256").update(markdown).digest("hex"), volume.sha256);
    assert.doesNotMatch(markdown, /\/Users\/ASUS|Mobile Documents|iCloud~md~obsidian/u);
  }
});

test("approved era text and glossary surfaces meet WCAG AA contrast", async () => {
  const registry = await parseJson("sites/arab-history-archive/content/volumes.json");
  for (const era of registry.eras) {
    assert.ok(
      contrast(era.background, era.text) >= 4.5,
      `${era.title} body contrast is below 4.5:1`,
    );
    assert.ok(
      contrast(era.glossaryBackground, era.text) >= 4.5,
      `${era.title} glossary contrast is below 4.5:1`,
    );
  }
  assert.ok(
    contrast(registry.futureVolumes.background, registry.futureVolumes.text) >= 4.5,
  );
});

test("generated archive preserves all volumes, glossary, BiDi and no-JS access", async () => {
  const [html, sourceGlossary, apiGlossary, manifest] = await Promise.all([
    readRepo("ARAB-HISTORY-ARCHIVE/index.html"),
    parseJson("sites/arab-history-archive/content/glossary.json"),
    parseJson("ARAB-HISTORY-ARCHIVE/api/glossary"),
    parseJson("ARAB-HISTORY-ARCHIVE/site-manifest.json"),
  ]);

  assert.match(html, /<html lang="zh-CN">/u);
  assert.equal((html.match(/data-era-section="\d"/gu) ?? []).length, 4);
  assert.equal((html.match(/data-volume-id=/gu) ?? []).length, 6);
  assert.match(html, /阿拉伯通史仍在继续/u);
  assert.match(html, /不预设下一卷的标题、年代、数量或历史评价/u);
  assert.match(html, /<noscript>[\s\S]*全部典籍注疏/u);
  assert.match(html, /class="font-amiri" dir="rtl" lang="ar"/u);
  assert.match(html, /class="glossary-trigger"/u);
  assert.match(html, /原笔记中的 188 处图片引用暂未公开复制/u);
  assert.doesNotMatch(html, /\/Users\/|Mobile Documents|iCloud~md~obsidian/u);
  assert.doesNotMatch(html, /fonts\.googleapis|fonts\.gstatic|cdnjs|unpkg/u);
  assert.deepEqual(apiGlossary, sourceGlossary);
  sourceGlossary.forEach(({ term }) => assert.match(html, new RegExp(term, "u")));
  assert.equal(manifest.content.futureVolumeSpace, true);
  assert.equal(manifest.content.historicalCopyGeneration, "disabled");
  assert.equal(manifest.analytics.provider, null);
  assert.equal(manifest.analytics.cookies, false);
  assert.equal(manifest.analytics.persistentStorage, false);
});

test("generated lists preserve every source item and its nested semantics", async () => {
  const [html, registry] = await Promise.all([
    readRepo("ARAB-HISTORY-ARCHIVE/index.html"),
    parseJson("sites/arab-history-archive/content/volumes.json"),
  ]);
  let sourceListItems = 0;
  for (const volume of registry.volumes) {
    const markdown = await readRepo(`sites/arab-history-archive/content/${volume.file}`);
    const body = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/u, "");
    sourceListItems += body
      .split(/\r?\n/u)
      .filter((line) => /^[ \t]*(?:[-+*]|\d+[.)])\s+/u.test(line)).length;
  }
  const directoryListItems = (html.match(/data-note-nav=/gu) ?? []).length;
  assert.equal((html.match(/<li>/gu) ?? []).length, sourceListItems + 3 + directoryListItems);

  const hierarchyStart = html.indexOf("阿拉伯半岛作为闪族发源地的假说");
  const hierarchyEnd = html.indexOf("闪含两族的关系", hierarchyStart);
  const hierarchy = html.slice(hierarchyStart, hierarchyEnd).replace(/\s+/gu, " ");
  assert.match(
    hierarchy,
    /<li>但<strong>阿拉伯半岛说<\/strong>似乎<strong>更可信<\/strong>。\s*<ul>\s*<li>反驳<strong>东非说<\/strong>：[\s\S]*?<li><strong>反驳美索不达米亚说<\/strong>：不符合社会发展的普遍规律。\s*<ul>\s*<li>美索不达米亚是一个[\s\S]*?<\/ul>\s*<\/li>\s*<li><strong>支持阿拉伯半岛说<\/strong>：\s*<ol>\s*<li><strong>周期性向外迁移<\/strong>/u,
  );
  assert.doesNotMatch(
    hierarchy,
    /<\/ul> <ol><li><strong>周期性向外迁移<\/strong>/u,
  );

  const stack = [];
  for (const match of html.matchAll(/<(\/)?(ul|ol|li)>/gu)) {
    const [, closing, tag] = match;
    if (!closing) {
      if (tag === "li") assert.match(stack.at(-1), /^(?:ul|ol)$/u);
      if (tag !== "li" && stack.length) assert.equal(stack.at(-1), "li");
      stack.push(tag);
    } else {
      assert.equal(stack.pop(), tag);
    }
  }
  assert.deepEqual(stack, []);
});

test("note directory exposes the six registered notes", async () => {
  const [html, registry] = await Promise.all([
    readRepo("ARAB-HISTORY-ARCHIVE/index.html"),
    parseJson("sites/arab-history-archive/content/volumes.json"),
  ]);
  const publishedNotes = registry.volumes
    .filter(({ status }) => status === "published")
    .toSorted((left, right) => left.order - right.order);
  const directory = html.match(/<nav class="note-directory"[\s\S]*?<\/nav>/u)?.[0] ?? "";
  const links = [...directory.matchAll(/<a href="#volume-([^"]+)" data-note-nav="(\d)">/gu)];

  assert.match(directory, /<h2 id="note-directory-title">六篇笔记目录<\/h2>/u);
  assert.equal(links.length, 6);
  assert.deepEqual(links.map((match) => Number(match[2])), [1, 2, 3, 4, 5, 6]);
  assert.deepEqual(links.map((match) => match[1]), publishedNotes.slice(0, 6).map(({ id }) => id));
  publishedNotes.slice(0, 6).forEach(({ id, title }) => {
    assert.match(directory, new RegExp(title, "u"));
    assert.match(directory, new RegExp(`href="#volume-${id}"`, "u"));
  });
  links.forEach((match) => assert.match(html, new RegExp(`id="volume-${match[1]}"`, "u")));
});

test("generated-static implementation stays registry-driven", async () => {
  const [builder, runtime, css, config] = await Promise.all([
    readRepo("scripts/build-arab-history-archive.mjs"),
    readRepo("sites/arab-history-archive/site.js"),
    readRepo("sites/arab-history-archive/styles.css"),
    parseJson("sites/arab-history-archive/site.config.json"),
  ]);
  assert.equal(config.source.mode, "generated-static");
  assert.match(builder, /registry\.volumes\.filter/u);
  assert.match(builder, /createHash\("sha256"\)/u);
  assert.match(builder, /futureVolumes\?\.enabled/u);
  assert.match(builder, /NOTE_DIRECTORY_LIMIT = 6/u);
  assert.match(runtime, /IntersectionObserver/u);
  assert.match(runtime, /requestAnimationFrame\(updateProgress\)/u);
  assert.match(runtime, /arab-history:interaction/u);
  assert.match(css, /prefers-reduced-motion: reduce/u);
  assert.match(css, /grid-template-columns: minmax\(0, 70vw\)/u);
  assert.match(css, /max-height: min\(50svh, 32rem\)/u);
  assert.match(css, /\.markdown-body li > ul/u);
  assert.match(css, /list-style-type: circle/u);
  assert.match(css, /\.note-directory/u);
});
