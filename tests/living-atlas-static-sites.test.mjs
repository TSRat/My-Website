import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  chapters,
  storyMetadata,
} from "../MALTY-MELTY-CHILDHOOD/content-registry.js";
import {
  createAnalyticsAdapter as createSwansAnalytics,
} from "../MALTY-MELTY-CHILDHOOD/analytics.js";
import {
  zhangYongContent,
} from "../ZHANGYONG-PORTRAIT/content-registry.js";
import {
  createAnalyticsAdapter as createZhangAnalytics,
} from "../ZHANGYONG-PORTRAIT/analytics.js";
import { livingAtlasContent } from "../THE-LIVING-ATLAS/content-registry.js";

const readRepoFile = (path) =>
  readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("both migrated Sites projects are direct static ES-module implementations", async () => {
  for (const slug of ["ZHANGYONG-PORTRAIT", "MALTY-MELTY-CHILDHOOD"]) {
    const [html, siteJs, manifest] = await Promise.all([
      readRepoFile(`${slug}/index.html`),
      readRepoFile(`${slug}/site.js`),
      readRepoFile(`${slug}/site-manifest.js`),
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
  const html = await readRepoFile("ZHANGYONG-PORTRAIT/index.html");
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

test("Two Swans preserves all chapters, fan-created boundaries, and local resume state", async () => {
  const [html, siteJs] = await Promise.all([
    readRepoFile("MALTY-MELTY-CHILDHOOD/index.html"),
    readRepoFile("MALTY-MELTY-CHILDHOOD/site.js"),
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

test("Living Atlas and the Pages build map publish both sites", async () => {
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

  const buildScript = await readRepoFile("scripts/build-github-pages.mjs");
  assert.match(buildScript, /slug: "ZHANGYONG-PORTRAIT"/u);
  assert.match(buildScript, /slug: "MALTY-MELTY-CHILDHOOD"/u);
});
