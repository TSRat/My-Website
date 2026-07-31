import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { livingAtlasContent } from "../sites/living-atlas/content-registry.js";
import {
  buildIndexEntries,
  getPublishedSites,
  getSortedUpdates,
} from "../sites/living-atlas/web-core.js";
import {
  ANALYTICS_EVENTS,
  createAnalyticsAdapter,
} from "../sites/living-atlas/analytics.js";
import {
  createAnalyticsAdapter as createStarterAnalyticsAdapter,
} from "../web/templates/site-starter/analytics-adapter.js";

const readAtlasPage = (name) =>
  readFile(new URL(`../sites/living-atlas/${name}`, import.meta.url), "utf8");

test("Living Atlas registry exposes only valid published sites", () => {
  const sites = getPublishedSites(livingAtlasContent);

  assert.equal(sites.length, 10);
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

  assert.equal((english.match(/href="\.\.\/">Website Archive<\/a>/g) ?? []).length, 2);
  assert.equal((chinese.match(/href="\.\.\/">网站总入口<\/a>/g) ?? []).length, 2);

  assert.doesNotMatch(english, /A closer map inside the Knowledge world/);
  assert.doesNotMatch(english, /Only published and currently navigable content appears here/);
  assert.doesNotMatch(chinese, /Knowledge 内部的细分地图/);
  assert.doesNotMatch(chinese, /这里只收录已经发布且可以抵达的内容/);
});

test("Living Atlas links Small Red Book and removes the WeChat placeholder", async () => {
  const pages = await Promise.all([
    readAtlasPage("index.html"),
    readAtlasPage("zh.html"),
  ]);
  const smallRedBookHref =
    'href="https://www.xiaohongshu.com/user/profile/62cd1c110000000002003151?xsec_token=AB2CPd7NdsVBu3SoGZi-pET-6mVfCuhYq9-jD7L-PtPeI=&amp;xsec_source=pc_search"';

  for (const page of pages) {
    assert.equal(page.split(smallRedBookHref).length - 1, 2);
    assert.match(page, /target="_blank" rel="noopener noreferrer"/);
    assert.doesNotMatch(page, /公众号/);
  }
});

test("Living Atlas uses the creator-provided La Malinche cover", async () => {
  const malinche = livingAtlasContent.sites.find((site) => site.id === "la-malinche");
  const cover = await readFile(
    new URL(
      "../sites/living-atlas/assets/malinche-cover-vol-1.webp",
      import.meta.url,
    ),
  );

  assert.equal(malinche.thumbnail, "assets/malinche-cover-vol-1.webp");
  assert.match(malinche.thumbnailAlt.en, /Creator-made La Malinche cover/);
  assert.match(malinche.thumbnailAlt.zh, /创作者制作/);
  assert.ok(cover.byteLength > 100_000);
  assert.ok(cover.byteLength < 500_000);
  assert.equal(cover.subarray(0, 4).toString("ascii"), "RIFF");
  assert.equal(cover.subarray(8, 12).toString("ascii"), "WEBP");
});

test("Living Atlas background music is manual, bilingual, and locally bundled", async () => {
  const [english, chinese, script, styles, audio] = await Promise.all([
    readAtlasPage("index.html"),
    readAtlasPage("zh.html"),
    readAtlasPage("atlas.js"),
    readAtlasPage("style.css"),
    readFile(
      new URL(
        "../sites/living-atlas/assets/who-are-you-the-who.mp3",
        import.meta.url,
      ),
    ),
  ]);

  for (const page of [english, chinese]) {
    assert.match(page, /data-background-music/);
    assert.match(page, /src="assets\/who-are-you-the-who\.mp3"/);
    assert.match(page, /preload="none"/);
    assert.match(page, /\sloop/);
    assert.match(page, /data-music-toggle/);
    assert.match(page, /aria-pressed="false"/);
    assert.doesNotMatch(page, /\sautoplay/);
  }

  assert.match(english, /data-label-off="Music · Off"/);
  assert.match(chinese, /data-label-off="音乐 · 关"/);
  assert.match(script, /const initBackgroundMusic = \(\) =>/);
  assert.match(script, /await audio\.play\(\)/);
  assert.match(script, /audio\.pause\(\)/);
  assert.match(script, /audio\.volume = 0\.35/);
  assert.match(styles, /\.music-toggle\s*{/);
  assert.ok(audio.byteLength > 1_000_000);
  assert.equal(audio.subarray(0, 3).toString("ascii"), "ID3");
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
      new URL("../sites/living-atlas/style.css", import.meta.url),
      "utf8",
    ),
    readFile(
      new URL(
        "../sites/living-atlas/assets/hypatia-sketch-transparent.webp",
        import.meta.url,
      ),
    ),
  ]);

  for (const page of [english, chinese]) {
    assert.match(
      page,
      /class="featured-portrait hypatia-portrait" src="assets\/hypatia-sketch-transparent\.webp"/,
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

test("Living Atlas features all four Daughters of Time stories including Malinche", async () => {
  const [english, chinese, styles, portrait] = await Promise.all([
    readAtlasPage("index.html"),
    readAtlasPage("zh.html"),
    readAtlasPage("style.css"),
    readFile(
      new URL(
        "../sites/la-malinche/assets/malinche-cutout.png",
        import.meta.url,
      ),
    ),
  ]);

  for (const page of [english, chinese]) {
    assert.equal((page.match(/class="carousel-slide"/g) ?? []).length, 4);
    assert.match(page, /DAUGHTERS OF TIME \/ 003|时间的女儿 \/ 003/);
    assert.match(page, /href="\.\.\/LA-MALINCHE\/"/);
    assert.match(
      page,
      /class="featured-portrait malinche-portrait"\s+src="\.\.\/LA-MALINCHE\/assets\/malinche-cutout\.png"/,
    );
    assert.equal(
      (page.match(/class="featured-portrait(?: [^"]+)?"/g) ?? []).length,
      4,
      "all four portraits must use the same carousel frame",
    );
  }

  assert.match(english, /She survived by translating; history translated her into betrayal\./);
  assert.match(chinese, /她靠翻译活了下来，历史却把她翻译成了背叛。/);
  assert.match(
    styles,
    /\.featured-portrait\s*{[^}]*max-width:\s*min\(100%,\s*18\.75rem\)[^}]*max-height:\s*18\.75rem[^}]*object-fit:\s*contain/s,
  );
  assert.doesNotMatch(styles, /\.featured-portrait\s*{[^}]*aspect-ratio:/s);
  assert.doesNotMatch(styles, /\.malinche-portrait\s*{[^}]*max-height:/s);
  assert.deepEqual(
    [...portrait.subarray(0, 8)],
    [137, 80, 78, 71, 13, 10, 26, 10],
  );
  assert.equal(portrait[25], 6, "Malinche PNG must retain RGBA transparency");
});
