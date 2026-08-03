import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { ANALYTICS_EVENTS, createAnalyticsAdapter } from "../sites/living-atlas/analytics.js";
import { livingAtlasContent } from "../sites/living-atlas/content-registry.js";
import { filterKnowledgeRecords } from "../sites/living-atlas/knowledge/knowledge.js";
import {
  getKnowledgeRecords,
  getPublishedKnowledgeRecords,
  knowledgeLibrary,
} from "../sites/living-atlas/knowledge/knowledge-registry.js";

const readKnowledgeFile = (name) =>
  readFile(new URL(`../sites/living-atlas/knowledge/${name}`, import.meta.url), "utf8");

test("Knowledge library keeps three public disciplines and four internal types", () => {
  assert.deepEqual(
    knowledgeLibrary.disciplines.map(({ id }) => id),
    ["humanities-arts", "social-sciences", "science-technology"],
  );
  assert.deepEqual(
    knowledgeLibrary.types.map(({ id }) => id),
    ["book", "topic", "concept", "output"],
  );
  assert.equal(
    new Set(knowledgeLibrary.records.map(({ id }) => id)).size,
    knowledgeLibrary.records.length,
  );
});

test("Knowledge states never create fake destinations", () => {
  assert.equal(getPublishedKnowledgeRecords().length, 6);

  knowledgeLibrary.records.forEach((record) => {
    assert.ok(knowledgeLibrary.disciplines.some(({ id }) => id === record.discipline));
    assert.ok(knowledgeLibrary.types.some(({ id }) => id === record.type));
    assert.match(record.updatedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(record.title.en && record.title.zh);
    assert.ok(record.summary.en && record.summary.zh);
    assert.doesNotMatch(JSON.stringify(record), /xsec_token|\/Users\/|iCloud/i);

    if (record.status === "published") {
      assert.match(record.href, /^\.\.\/[A-Z-]+\/$/);
    } else {
      assert.equal(record.href, null);
    }
  });
});

test("Knowledge filters match bilingual text and record identity", () => {
  const all = getKnowledgeRecords();
  assert.deepEqual(
    filterKnowledgeRecords(all, { query: "Transformer", type: "topic" }).map(({ id }) => id),
    ["transformer-primer"],
  );
  assert.deepEqual(
    filterKnowledgeRecords(all, { query: "希帕蒂娅", type: "output" }).map(({ id }) => id),
    ["hypatia"],
  );
  assert.equal(filterKnowledgeRecords(all, { query: "no-such-record", type: "all" }).length, 0);
});

test("Knowledge provides eight bilingual routes with no-script access", async () => {
  const routes = [
    ["index.html", "en"],
    ["zh.html", "zh-CN"],
    ["humanities-arts/index.html", "en"],
    ["humanities-arts/zh.html", "zh-CN"],
    ["social-sciences/index.html", "en"],
    ["social-sciences/zh.html", "zh-CN"],
    ["science-technology/index.html", "en"],
    ["science-technology/zh.html", "zh-CN"],
  ];

  for (const [route, locale] of routes) {
    const page = await readKnowledgeFile(route);
    assert.match(page, new RegExp(`<html lang="${locale}">`));
    assert.match(page, /data-record-list/);
    assert.match(page, /data-knowledge-search/);
    assert.match(page, /data-knowledge-filter="all"/);
    assert.match(page, /<noscript>/);
    assert.match(page, /knowledge\.js\?v=knowledge-library-20260804-1/);
    assert.match(page, /class="knowledge-nav__brand"[^>]+aria-label=/);
    assert.doesNotMatch(page, /<span>TSRat<\/span>/);
    assert.doesNotMatch(page, /fonts\.googleapis|fonts\.gstatic|preconnect/);
    assert.doesNotMatch(page, /href=["']#["']/);
  }
});

test("Living Atlas links Knowledge and its disciplines to real routes", () => {
  const knowledgeWorld = livingAtlasContent.worlds.find(({ id }) => id === "knowledge");
  assert.deepEqual(knowledgeWorld.href, { en: "knowledge/", zh: "knowledge/zh.html" });
  livingAtlasContent.knowledge.forEach((discipline) => {
    assert.equal(discipline.status, "published");
    assert.ok(discipline.href.en.startsWith("knowledge/"));
    assert.ok(discipline.href.zh.endsWith("zh.html"));
  });
});

test("Knowledge analytics excludes raw search text and remains no-op", () => {
  for (const event of [
    "knowledge_open",
    "knowledge_filter",
    "knowledge_search",
    "knowledge_entry_open",
  ]) {
    assert.ok(ANALYTICS_EVENTS.includes(event));
  }

  const adapter = createAnalyticsAdapter({
    siteSlug: "the-living-atlas",
    getPagePath: () => "/THE-LIVING-ATLAS/knowledge/",
    now: () => "2026-08-04T00:00:00.000Z",
  });
  const result = adapter.track("knowledge_search", {
    contentId: "all",
    interactionSource: "knowledge_search",
    properties: {
      language: "en",
      discipline: "all",
      has_results: true,
      query: "private search text",
    },
  });

  assert.equal(result.delivered, false);
  assert.equal(result.event.query, undefined);
  assert.equal(result.event.has_results, true);
});
