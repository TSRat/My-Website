import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readText = (path) =>
  readFile(new URL(`../${path}`, import.meta.url), "utf8");

const readManifest = async (path) =>
  JSON.parse(await readText(path));

const assertPrivateAdapter = (source) => {
  assert.doesNotMatch(source, /\bfetch\s*\(/);
  assert.doesNotMatch(source, /\bXMLHttpRequest\b/);
  assert.doesNotMatch(source, /\blocalStorage\b/);
  assert.doesNotMatch(source, /\bsessionStorage\b/);
  assert.doesNotMatch(source, /\bdocument\.cookie\b/);
};

test("Hypatia exposes a provider-neutral Data contract without changing its evidence controls", async () => {
  const [html, script, manifest] = await Promise.all([
    readText("HYPATIA/index.html"),
    readText("HYPATIA/assets/site-analytics.js"),
    readManifest("HYPATIA/site-manifest.json"),
  ]);

  assert.match(html, /<section class="data-section observe-section" id="data"/);
  assert.match(html, /href="\.\/site-manifest\.json"/);
  assert.match(html, /assets\/site-analytics\.js\?v=six-stage-v1/);
  assert.match(html, /data-evidence-filter/);
  assert.match(html, /data-step/);
  assert.match(html, /data-compare/);
  assert.match(html, /data-letter/);
  assert.match(html, /data-memory-id/);

  assert.equal(manifest.id, "hypatia");
  assert.equal(manifest.analytics.provider, null);
  assert.equal(manifest.analytics.networkRequests, false);
  assert.equal(manifest.analytics.cookies, false);
  assert.equal(manifest.analytics.persistentStorage, false);
  assert.equal(manifest.analytics.identity, false);
  assert.deepEqual(manifest.analytics.events, [
    "page_viewed",
    "section_opened",
    "evidence_filter_applied",
    "interactive_state_changed",
    "source_opened",
    "video_opened",
    "data_entry_opened",
  ]);
  assertPrivateAdapter(script);
});

test("Hildegard exposes a provider-neutral Data contract and preserves every chapter", async () => {
  const [html, script, manifest, styles] = await Promise.all([
    readText("HILDEGARD/index.html"),
    readText("HILDEGARD/assets/site-analytics.js"),
    readManifest("HILDEGARD/site-manifest.json"),
    readText("HILDEGARD/assets/hildegard-site.css"),
  ]);

  assert.match(html, /<section class="data-section" id="data"/);
  assert.match(html, /href="\.\/site-manifest\.json"/);
  assert.match(html, /assets\/site-analytics\.js\?v=six-stage-v1/);
  for (let chapter = 0; chapter <= 8; chapter += 1) {
    assert.match(html, new RegExp(`id="chapter-0${chapter}"`));
  }
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);

  assert.equal(manifest.id, "hildegard");
  assert.equal(manifest.analytics.provider, null);
  assert.equal(manifest.analytics.networkRequests, false);
  assert.equal(manifest.analytics.cookies, false);
  assert.equal(manifest.analytics.persistentStorage, false);
  assert.equal(manifest.analytics.identity, false);
  assert.deepEqual(manifest.analytics.events, [
    "page_viewed",
    "chapter_opened",
    "section_opened",
    "source_opened",
    "video_opened",
    "data_entry_opened",
  ]);
  assertPrivateAdapter(script);
});
