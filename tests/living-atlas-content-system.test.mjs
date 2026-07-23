import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { livingAtlasContent } from "../THE-LIVING-ATLAS/content-registry.js";
import {
  buildIndexEntries,
  getPublishedSites,
  getSortedUpdates,
} from "../THE-LIVING-ATLAS/web-core.js";
import {
  ANALYTICS_EVENTS,
  createAnalyticsAdapter,
} from "../THE-LIVING-ATLAS/analytics.js";
import {
  createAnalyticsAdapter as createStarterAnalyticsAdapter,
} from "../web/templates/site-starter/analytics-adapter.js";

const readAtlasPage = (name) =>
  readFile(new URL(`../THE-LIVING-ATLAS/${name}`, import.meta.url), "utf8");

test("Living Atlas registry exposes only valid published sites", () => {
  const sites = getPublishedSites(livingAtlasContent);

  assert.equal(sites.length, 5);
  assert.equal(new Set(sites.map((site) => site.id)).size, sites.length);
  assert.equal(new Set(sites.map((site) => site.number)).size, sites.length);

  sites.forEach((site) => {
    assert.equal(site.status, "published");
    assert.match(site.href, /^\.\.\/[A-Z-]+\/$/);
    assert.ok(site.title.en);
    assert.ok(site.title.zh);
  });
});

test("Living Atlas Worlds preserve the creator's open-ended labels", () => {
  assert.deepEqual(
    livingAtlasContent.worlds.map(({ title }) => title),
    [
      { en: "Knowledge", zh: "知识" },
      { en: "Story", zh: "故事" },
      { en: "Media", zh: "媒体" },
      { en: "Interaction", zh: "交互" },
    ],
  );
  livingAtlasContent.worlds.forEach((world) => {
    assert.equal("description" in world, false);
  });
});

test("Living Atlas updates are rendered newest first", () => {
  const dates = getSortedUpdates(livingAtlasContent).map((update) => update.date);
  assert.deepEqual(dates, [...dates].sort().reverse());
});

test("Living Atlas index contains only navigable destinations", () => {
  for (const locale of livingAtlasContent.locales) {
    const entries = buildIndexEntries(livingAtlasContent, locale);
    assert.ok(entries.length >= 16);
    assert.ok(entries.some((entry) => entry.id === "data" && entry.href === "#data"));
    entries.forEach((entry) => {
      assert.ok(entry.id);
      assert.notEqual(entry.href, "#");
      assert.match(entry.href, /^(#[-a-z0-9]+|\.\.\/[A-Z-]+\/)$/);
      assert.ok(entry.label);
    });
  }
});

test("Living Atlas language pages use the shared data hooks without fake links", async () => {
  const [english, chinese] = await Promise.all([
    readAtlasPage("index.html"),
    readAtlasPage("zh.html"),
  ]);

  assert.match(english, /<html lang="en">/);
  assert.match(chinese, /<html lang="zh-CN">/);

  for (const page of [english, chinese]) {
    assert.doesNotMatch(page, /href=["']#["']/);
    assert.match(page, /data-worlds-list/);
    assert.match(page, /data-knowledge-list/);
    assert.match(page, /data-sites-list/);
    assert.match(page, /data-latest-list/);
    assert.match(page, /data-index-list/);
    assert.match(page, /<section class="data-section" id="data"/);
    assert.match(page, /href="#data"/);
    assert.match(page, /<script type="module" src="atlas\.js/);
    assert.doesNotMatch(page, /class="world-description"/);
  }

  assert.doesNotMatch(english, /A closer map inside the Knowledge world/);
  assert.doesNotMatch(english, /Only published and currently navigable content appears here/);
  assert.doesNotMatch(chinese, /Knowledge 内部的细分地图/);
  assert.doesNotMatch(chinese, /这里只收录已经发布且可以抵达的内容/);
});

test("Living Atlas analytics is provider-neutral and excludes raw search text", () => {
  const delivered = [];
  const adapter = createAnalyticsAdapter({
    siteSlug: "the-living-atlas",
    getPagePath: () => "/THE-LIVING-ATLAS/",
    now: () => "2026-07-24T00:00:00.000Z",
  });

  const noProvider = adapter.track("search_performed", {
    contentId: "index",
    interactionSource: "search",
    properties: {
      query: "private free-form text",
      query_length: 22,
      result_count: 0,
    },
  });

  assert.equal(noProvider.delivered, false);
  assert.equal(adapter.providerStatus, "none");
  assert.equal(noProvider.event.query, undefined);
  assert.equal(noProvider.event.query_length, 22);
  assert.equal(noProvider.event.result_count, 0);
  assert.deepEqual(
    Object.keys(noProvider.event).slice(0, 7),
    [
      "event_name",
      "site_slug",
      "page_path",
      "content_id",
      "interaction_source",
      "timestamp",
      "schema_version",
    ],
  );

  adapter.setProvider({ track: (event) => delivered.push(event) });
  const connected = adapter.track("data_section_opened", {
    contentId: "data",
    interactionSource: "primary_navigation",
    properties: { content_type: "section" },
  });
  assert.equal(connected.delivered, true);
  assert.equal(delivered.length, 1);
  assert.equal(delivered[0].content_type, "section");
  assert.ok(ANALYTICS_EVENTS.includes("published_site_opened"));
});

test("Website starter analytics remains no-op until a provider is connected", () => {
  const starter = createStarterAnalyticsAdapter({
    siteSlug: "future-site",
    getPagePath: () => "/FUTURE-SITE/",
    now: () => "2026-07-24T00:00:00.000Z",
  });

  const result = starter.track("data_section_opened", {
    contentId: "data",
    interactionSource: "primary_navigation",
    properties: { content_type: "section", raw_text: "must be dropped" },
  });

  assert.equal(starter.providerStatus, "none");
  assert.equal(result.delivered, false);
  assert.equal(result.event.raw_text, undefined);
});

test("Living Atlas Hypatia portrait uses a real alpha-backed asset", async () => {
  const [english, chinese, styles, portrait] = await Promise.all([
    readAtlasPage("index.html"),
    readAtlasPage("zh.html"),
    readFile(
      new URL("../THE-LIVING-ATLAS/style.css", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL(
        "../THE-LIVING-ATLAS/assets/hypatia-sketch-transparent.webp",
        import.meta.url,
      ),
    ),
  ]);

  for (const page of [english, chinese]) {
    assert.match(
      page,
      /class="hypatia-portrait" src="assets\/hypatia-sketch-transparent\.webp"/,
    );
    assert.doesNotMatch(page, /assets\/hypatia-sketch\.jpg/);
  }

  assert.match(styles, /\.hypatia-portrait\s*{[^}]*mix-blend-mode:\s*multiply/s);

  assert.equal(portrait.subarray(0, 4).toString("ascii"), "RIFF");
  assert.equal(portrait.subarray(8, 12).toString("ascii"), "WEBP");
  assert.ok(
    portrait.indexOf(Buffer.from("ALPH")) > -1,
    "WebP must contain an ALPH chunk",
  );
});
