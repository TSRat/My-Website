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
  assert.match(runtime, /IntersectionObserver/u);
  assert.match(runtime, /requestAnimationFrame\(updateProgress\)/u);
  assert.match(runtime, /arab-history:interaction/u);
  assert.match(css, /prefers-reduced-motion: reduce/u);
  assert.match(css, /grid-template-columns: minmax\(0, 70vw\)/u);
  assert.match(css, /max-height: min\(50svh, 32rem\)/u);
});
