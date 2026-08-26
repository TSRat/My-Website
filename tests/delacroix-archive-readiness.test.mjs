import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const repoFile = (path) => new URL(`../${path}`, import.meta.url);
const readText = async (path) => readFile(repoFile(path), "utf8");

test("Delacroix archive keeps its trilingual beginner-first research contract", async () => {
  const [{ periods, works }, research, html, app, css, configText, manifestText] = await Promise.all([
    import("../sites/delacroix-archive/data.js"),
    import("../sites/delacroix-archive/research-content.js"),
    readText("sites/delacroix-archive/index.html"),
    readText("sites/delacroix-archive/app.js"),
    readText("sites/delacroix-archive/styles.css"),
    readText("sites/delacroix-archive/site.config.json"),
    readText("sites/delacroix-archive/site-manifest.json"),
  ]);
  const config = JSON.parse(configText);
  const manifest = JSON.parse(manifestText);

  assert.equal(periods.length, 6);
  assert.equal(works.length, 20);
  assert.equal(Object.keys(research.biographyChapters).length, 6);
  assert.equal(research.timelineEventDetails.length, 29);
  assert.equal(research.journalReadings.length, 5);
  assert.equal(research.sourceLibrary.length, 12);

  assert.match(html, /DELACROIX-ARCHIVE/);
  assert.match(html, /pierre-petit-delacroix-1862\.png/);
  assert.match(html, /data-lang="zh"[\s\S]*data-lang="en"[\s\S]*data-lang="fr"/);
  assert.match(app, /sourceReverse|renderEvidence|source-usage|evidence-link/);
  assert.match(app, /delacroix-note-/);
  assert.match(app, /href="\.\.\/THE-LIVING-ATLAS\/"/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /filter:\s*brightness\(0\)\s*invert\(1\)/);

  assert.equal(config.slug, "DELACROIX-ARCHIVE");
  assert.equal(config.source.mode, "direct-static");
  assert.equal(config.build.mirror, "DELACROIX-ARCHIVE");
  assert.deepEqual(manifest.languages, ["zh-Hans", "en", "fr"]);
  assert.equal(manifest.privacy.analyticsProvider, null);
  assert.equal(manifest.privacy.localStorage, true);
});

test("Delacroix source assets and generated Pages mirror are complete", async () => {
  for (const path of [
    "sites/delacroix-archive/assets/pierre-petit-delacroix-1862.png",
    "sites/delacroix-archive/assets/artworks/liberty-leading-people.jpg",
    "sites/delacroix-archive/assets/artworks/women-algiers.jpg",
    "sites/delacroix-archive/assets/artworks/jacob-angel.jpg",
    "sites/delacroix-archive/assets/sources/cambridge-contents.jpg",
    "sites/delacroix-archive/assets/sources/george-sand-letter-manuscript.jpg",
    "DELACROIX-ARCHIVE/index.html",
    "DELACROIX-ARCHIVE/app.js",
    "DELACROIX-ARCHIVE/site-manifest.json",
  ]) {
    await access(repoFile(path));
  }
});
