import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { livingAtlasContent } from "../THE-LIVING-ATLAS/content-registry.js";
import {
  buildIndexEntries,
  getPublishedSites,
  getSortedUpdates,
} from "../THE-LIVING-ATLAS/web-core.js";

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

test("Living Atlas updates are rendered newest first", () => {
  const dates = getSortedUpdates(livingAtlasContent).map((update) => update.date);
  assert.deepEqual(dates, [...dates].sort().reverse());
});

test("Living Atlas index contains only navigable destinations", () => {
  for (const locale of livingAtlasContent.locales) {
    const entries = buildIndexEntries(livingAtlasContent, locale);
    assert.ok(entries.length >= 15);
    entries.forEach((entry) => {
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
    assert.match(page, /<script type="module" src="atlas\.js/);
  }
});

test("Living Atlas Hypatia portrait uses a real alpha-backed asset", async () => {
  const [english, chinese, portrait] = await Promise.all([
    readAtlasPage("index.html"),
    readAtlasPage("zh.html"),
    readFile(
      new URL(
        "../THE-LIVING-ATLAS/assets/hypatia-sketch-transparent.webp",
        import.meta.url,
      ),
    ),
  ]);

  for (const page of [english, chinese]) {
    assert.match(page, /assets\/hypatia-sketch-transparent\.webp/);
    assert.doesNotMatch(page, /assets\/hypatia-sketch\.jpg/);
  }

  assert.equal(portrait.subarray(0, 4).toString("ascii"), "RIFF");
  assert.equal(portrait.subarray(8, 12).toString("ascii"), "WEBP");
  assert.ok(
    portrait.indexOf(Buffer.from("ALPH")) > -1,
    "WebP must contain an ALPH chunk",
  );
});
