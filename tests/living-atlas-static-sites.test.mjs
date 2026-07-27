import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  chapters,
  storyMetadata,
} from "../sites/malty-melty-childhood/content-registry.js";
import {
  createAnalyticsAdapter as createSwansAnalytics,
} from "../sites/malty-melty-childhood/analytics.js";
import {
  zhangYongContent,
} from "../sites/zhangyong-portrait/content-registry.js";
import {
  createAnalyticsAdapter as createZhangAnalytics,
} from "../sites/zhangyong-portrait/analytics.js";
import { livingAtlasContent } from "../sites/living-atlas/content-registry.js";

const readRepoFile = (path) =>
  readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("both migrated Sites projects are direct static ES-module implementations", async () => {
  for (const packageId of ["zhangyong-portrait", "malty-melty-childhood"]) {
    const [html, siteJs, manifest] = await Promise.all([
      readRepoFile(`sites/${packageId}/index.html`),
      readRepoFile(`sites/${packageId}/site.js`),
      readRepoFile(`sites/${packageId}/site-manifest.js`),
    ]);
    assert.match(
      html,
      /<script type="module" src="\.\/site\.js">\s*<\/script>/u,
    );
    assert.match(siteJs, /static-es-modules/u);
    assert.doesNotMatch(html, /_next|_vinext|react-server|__next_f/u);
    assert.doesNotMatch(manifest, /provider:\s*"(?!none)/u);
  }
});

test("the Zhang Yong portrait keeps stable sections and a no-provider data entry", async () => {
  const html = await readRepoFile("sites/zhangyong-portrait/index.html");
  const sectionIds = new Set(zhangYongContent.sections.map(({ id }) => id));
  for (const id of [
    "fragments",
    "timeline",
    "favored",
    "bawanglong",
    "underhail",
    "mind",
    "data",
    "weather",
  ]) {
    assert.ok(sectionIds.has(id), `missing section registry entry: ${id}`);
    assert.match(html, new RegExp(`id="${id}"`, "u"));
  }
  const analytics = createZhangAnalytics({
    siteSlug: "zhangyong-portrait-test",
    now: () => "2026-07-25T00:00:00.000Z",
  });
  const result = analytics.track("chapter_opened", { contentId: "timeline" });
  assert.equal(result.delivered, false);
  assert.equal(result.event.content_id, "timeline");
});

test("the Zhang Yong red alternate stays explicitly fictional and untracked", async () => {
  const [mainHtml, redHtml] = await Promise.all([
    readRepoFile("sites/zhangyong-portrait/index.html"),
    readRepoFile("sites/zhangyong-portrait/red.html"),
  ]);

  assert.equal(
    zhangYongContent.alternateRoutes[0]?.path,
    "./red.html",
  );
  assert.match(mainHtml, /class="red-parody-entry"/u);
  assert.match(mainHtml, /href="\.\/red\.html"/u);
  assert.match(redHtml, /民间戏仿专题/u);
  assert.match(redHtml, /非官方网站/u);
  assert.match(redHtml, /2,135,227\+/u);
  assert.match(redHtml, /戏仿设定值 · 非真实统计/u);
  assert.doesNotMatch(redHtml, /<script\b/u);
  assert.doesNotMatch(redHtml, /政府网站标识码|京ICP备|中华人民共和国中央人民政府/u);
});

test("Two Swans preserves all chapters, fan-created boundaries, and local resume state", async () => {
  const [html, siteJs] = await Promise.all([
    readRepoFile("sites/malty-melty-childhood/index.html"),
    readRepoFile("sites/malty-melty-childhood/site.js"),
  ]);
  assert.equal(chapters.length, 11);
  assert.equal(new Set(chapters.map(({ id }) => id)).size, 11);
  assert.ok(chapters.every(({ beats }) => beats.length >= 6));
  assert.match(storyMetadata.contentBoundary.fanCreatedPremise, /姐妹/u);
  assert.match(html, /data-novel-shell/u);
  assert.match(html, /PROVIDER \/ NONE/u);
  assert.match(siteJs, /two-swans-progress/u);
  assert.match(siteJs, /localStorage/u);
  assert.doesNotMatch(siteJs, /\bfetch\s*\(/u);
  const analytics = createSwansAnalytics({
    siteSlug: "two-swans-test",
    now: () => "2026-07-25T00:00:00.000Z",
  });
  assert.equal(
    analytics.track("story_opened", { contentId: chapters[0].id }).delivered,
    false,
  );
});

test("Living Atlas and the shared site registry publish both sites", async () => {
  const registered = new Map(
    livingAtlasContent.sites.map((site) => [site.id, site]),
  );
  assert.equal(
    registered.get("zhangyong-portrait")?.href,
    "../ZHANGYONG-PORTRAIT/",
  );
  assert.equal(
    registered.get("malty-melty-childhood")?.href,
    "../MALTY-MELTY-CHILDHOOD/",
  );

  const [zhangConfig, swansConfig] = await Promise.all([
    readRepoFile("sites/zhangyong-portrait/site.config.json"),
    readRepoFile("sites/malty-melty-childhood/site.config.json"),
  ]);
  assert.equal(JSON.parse(zhangConfig).slug, "ZHANGYONG-PORTRAIT");
  assert.equal(JSON.parse(swansConfig).slug, "MALTY-MELTY-CHILDHOOD");
});
