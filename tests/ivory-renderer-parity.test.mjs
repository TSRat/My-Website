import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

async function readBriefings() {
  const source = await readFile(join(root, "app/briefings.ts"), "utf8");
  const declaration = source.indexOf("export const briefings");
  const literalStart = source.indexOf("[", declaration);
  const literalEnd = source.lastIndexOf("];");

  assert.ok(declaration >= 0, "briefings export must exist");
  assert.ok(literalStart >= 0 && literalEnd > literalStart, "briefings literal must be parseable");

  return Function(`"use strict"; return (${source.slice(literalStart, literalEnd + 1)});`)();
}

test("IVORY briefing source satisfies the shared content contract", async () => {
  const briefings = await readBriefings();
  const dates = new Set();
  const issueNumbers = new Set();

  assert.ok(briefings.length > 0);

  for (const briefing of briefings) {
    assert.match(briefing.date, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(briefing.stories.length, 5, `${briefing.date} must contain exactly five stories`);
    assert.equal(briefing.uniqueCount, briefing.stories.length);
    assert.ok(!dates.has(briefing.date), `duplicate date: ${briefing.date}`);
    assert.ok(!issueNumbers.has(briefing.issueNo), `duplicate issue number: ${briefing.issueNo}`);
    dates.add(briefing.date);
    issueNumbers.add(briefing.issueNo);

    for (const story of briefing.stories) {
      assert.match(story.sourceUrl, /^https?:\/\//);
      assert.match(story.image, /^\/story-images\/[^/]+$/);
      assert.ok(story.imageAlt.trim());
      assert.ok(story.imageCredit.trim());
      await access(join(root, "public", story.image));
    }
  }
});

test("dynamic and Pages home renderers expose the same current briefing data", async () => {
  const briefings = await readBriefings();
  const latest = briefings[0];
  const staticHtml = await readFile(join(root, "docs/IVORY-ARCHIVE/index.html"), "utf8");

  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("ivory-parity", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
  const dynamicHtml = await response.text();

  assert.equal(response.status, 200);
  assert.match(dynamicHtml, /id="data"/);
  assert.match(staticHtml, /id="data"/);
  assert.match(staticHtml, /ivory-site-manifest\.json/);
  assert.match(staticHtml, /ivory-analytics\.js/);

  for (const value of [
    latest.displayDate,
    latest.issueNo,
    latest.theme,
    ...latest.stories.map((story) => story.title),
  ]) {
    assert.ok(dynamicHtml.includes(value), `dynamic renderer is missing ${value}`);
    assert.ok(staticHtml.includes(value), `Pages renderer is missing ${value}`);
  }

  for (const briefing of briefings) {
    await access(join(root, "docs/IVORY-ARCHIVE/briefings", briefing.date, "index.html"));
    assert.ok(dynamicHtml.includes(briefing.theme), `dynamic archive is missing ${briefing.date}`);
    assert.ok(staticHtml.includes(briefing.theme), `Pages archive is missing ${briefing.date}`);
  }
});

test("IVORY analytics manifest stays provider-neutral and privacy-safe", async () => {
  const manifest = JSON.parse(
    await readFile(join(root, "public/ivory-site-manifest.json"), "utf8"),
  );
  const adapter = await readFile(join(root, "public/ivory-analytics.js"), "utf8");

  assert.equal(manifest.analytics.provider, null);
  assert.equal(manifest.analytics.networkRequests, false);
  assert.equal(manifest.analytics.cookies, false);
  assert.equal(manifest.analytics.persistentStorage, false);
  assert.equal(manifest.analytics.identity, false);
  assert.equal(manifest.analytics.rawSearchText, false);
  assert.doesNotMatch(adapter, /\b(fetch|XMLHttpRequest|localStorage|sessionStorage|document\.cookie)\b/);
});
