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
  assert.equal(research.sourceLibrary.length, 14);
  assert.equal(Object.keys(research.sourceAccess).length, 14);
  assert.ok(research.sourceLibrary.every((source) => research.sourceAccess[source.id]));
  assert.ok(research.sourceLibrary.some((source) => source.id === "fraser-patrimony"));
  assert.equal(research.evidenceRefs.fraserPaternity?.sourceId, "fraser-patrimony");
  assert.ok(research.biographyChapters["1798-1815"].refs.includes("fraserPaternity"));
  assert.ok(research.timelineEventDetails.find((event) => event.id === "1798-birth")?.refs.includes("fraserPaternity"));
  assert.equal(research.journalReadings.flatMap((group) => group.entries).length, 11);
  assert.ok(research.journalReadings.flatMap((group) => group.entries).every((entry) => entry.sourceExcerpt && entry.translation.zh && entry.translation.en && entry.translation.fr));
  assert.ok(research.journalReadings.flatMap((group) => group.entries).every((entry) => research.evidenceRefs[entry.locator]?.sourceId === "journal-flat-piot"));
  assert.ok(research.timelineEventDetails.every((event) => event.refs.length && event.refs.every((ref) => research.evidenceRefs[ref])));

  assert.match(html, /DELACROIX-ARCHIVE/);
  assert.match(html, /pierre-petit-delacroix-1862\.png/);
  assert.match(html, /data-lang="zh"[\s\S]*data-lang="en"[\s\S]*data-lang="fr"/);
  assert.match(app, /sourceReverse|renderEvidence|source-usage|evidence-link/);
  assert.match(app, /delacroix-note-/);
  assert.match(app, /data-observe-task/);
  assert.match(app, /focus\(\{ preventScroll: true \}\)/);
  assert.match(app, /href="\.\.\/THE-LIVING-ATLAS\/"/);
  assert.doesNotMatch(research.sourceLibrary.map((source) => JSON.stringify(source)).join("\n"), /\.pdf|Z-Library|localFile|file\s*:/i);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /filter:\s*brightness\(0\)\s*invert\(1\)/);

  assert.equal(config.slug, "DELACROIX-ARCHIVE");
  assert.equal(config.source.mode, "direct-static");
  assert.equal(config.build.mirror, "DELACROIX-ARCHIVE");
  assert.deepEqual(manifest.languages, ["zh-Hans", "en", "fr"]);
  assert.equal(manifest.privacy.analyticsProvider, null);
  assert.equal(manifest.privacy.localStorage, true);
  assert.equal(manifest.capabilities.guidedViewingExperiment, true);
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
    "DELACROIX-ARCHIVE/analytics.js",
    "DELACROIX-ARCHIVE/site-manifest.json",
  ]) {
    await access(repoFile(path));
  }
});

test("Delacroix bounded redesign keeps exact destinations, local privacy, and the archival visual grammar", async () => {
  const [html, app, css] = await Promise.all([
    readText("sites/delacroix-archive/index.html"),
    readText("sites/delacroix-archive/app.js"),
    readText("sites/delacroix-archive/styles.css"),
  ]);
  const worksRenderer = app.slice(app.indexOf("function renderWorks()"), app.indexOf("function tabContent(work)"));

  assert.match(app, /class="hero-identity"[\s\S]*class="hero-portrait"[\s\S]*class="hero-premise"/);
  assert.doesNotMatch(app, /mobile-hero-entry/);
  assert.match(css, /grid-template-areas:\s*"identity portrait"\s*"premise portrait"/);
  assert.match(css, /grid-template-areas:\s*"identity"\s*"portrait"\s*"premise"/);
  assert.match(css, /\.work-hero-image\s*\{[^}]*margin:\s*0;/s);
  assert.match(css, /\.hero-portrait img\s*\{[^}]*border-radius:\s*0;/s);

  assert.match(app, /Biography period|生平阶段|Période biographique/);
  assert.match(app, /Timeline event|时间线事件|Événement chronologique/);
  assert.match(app, /Journal entry|日志条目|Entrée du Journal/);
  assert.match(app, /Source record|资料记录|Notice de source/);
  assert.match(app, /data-search-life-period/);
  assert.match(app, /data-search-journal-period/);
  assert.match(app, /data-search-target/);
  assert.match(app, /route:\s*"timeline",\s*id:\s*event\.id/);
  assert.match(app, /route:\s*"sources",\s*id:\s*source\.id/);

  assert.match(app, /timeline-direct-header/);
  assert.match(app, /renderEventPanel\(event, false\)/);
  assert.match(app, /timeline-breadcrumb/);
  assert.match(app, /<h3 class="timeline-event-heading"><button class="event-toggle"/);
  assert.match(app, /renderEventPanel\(event, true, "h4"\)/);
  assert.match(app, /function renderTerms\(termIds = \[\], headingTag = "h2"\)/);
  assert.match(app, /<h2 class="sr-only source-record-title" id="source-title-\$\{source\.id\}">/);
  assert.match(css, /\.timeline-event-heading\s*\{\s*margin:\s*0;/s);

  const workContentRenderer = app.slice(app.indexOf("function tabContent(work)"), app.indexOf("function renderWork(id)"));
  assert.match(workContentRenderer, /state\.detailTab === "overview" \? text\(work\.analysis\)/);
  assert.doesNotMatch(workContentRenderer, /state\.detailTab === "overview" \? `<p>/);
  assert.doesNotMatch(workContentRenderer, /work\.summary/);

  assert.match(html, /id="search-dialog" aria-labelledby="search-eyebrow"/);
  assert.match(html, /id="image-dialog" aria-labelledby="image-dialog-title"/);

  assert.match(worksRenderer, /state\.saved\.has\(work\.id\) \|\| workHasNote\(work\.id\)/);
  assert.match(worksRenderer, /data-filter="local"/);
  assert.match(worksRenderer, /gallery-zero-state/);
  assert.match(worksRenderer, /work-local-states/);
  assert.doesNotMatch(worksRenderer, /localStorage\.getItem\(`delacroix-note-/);

  const accent = css.match(/--blue-text-accent:\s*(#[0-9a-f]{6})/i)?.[1];
  assert.ok(accent, "the blue-room small-text accent token must exist");
  const relativeLuminance = (hex) => {
    const channels = hex.match(/[0-9a-f]{2}/gi).map((value) => Number.parseInt(value, 16) / 255);
    const [red, green, blue] = channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  };
  const contrast = (foreground, background) => {
    const values = [relativeLuminance(foreground), relativeLuminance(background)].sort((a, b) => b - a);
    return (values[0] + 0.05) / (values[1] + 0.05);
  };
  assert.ok(contrast(accent, "#0f325b") >= 4.5, `${accent} must meet WCAG AA against the imperial-blue room`);
});
