import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

async function readBriefings() {
  const source = await readFile(
    join(root, "sites/ivory-archive/briefings.ts"),
    "utf8",
  );
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
  let storyCount = 0;
  assert.ok(briefings.length > 0);

  for (const briefing of briefings) {
    assert.match(briefing.date, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(briefing.stories.length, 5, `${briefing.date} must contain exactly five stories`);
    assert.equal(briefing.uniqueCount, briefing.stories.length);
    assert.ok(briefing.theme.trim());
    assert.ok(briefing.intro.trim());
    assert.ok(briefing.learningGoal.trim());
    assert.ok(briefing.connection.trim());
    assert.ok(!dates.has(briefing.date), `duplicate date: ${briefing.date}`);
    assert.ok(!issueNumbers.has(briefing.issueNo), `duplicate issue number: ${briefing.issueNo}`);
    dates.add(briefing.date);
    issueNumbers.add(briefing.issueNo);

    for (const story of briefing.stories) {
      storyCount += 1;
      assert.match(story.sourceUrl, /^https?:\/\//);
      assert.match(story.image, /^\/story-images\/[^/]+$/);
      assert.ok(story.imageAlt.trim());
      assert.ok(story.imageCredit.trim());
      assert.ok(story.title.trim());
      assert.ok(story.summary.trim());
      assert.ok(story.background.trim());
      assert.doesNotMatch(story.background, /^(他|她|其|这位|该)/);
      assert.ok(story.happened.trim());
      assert.ok(
        (story.happened.match(/[。！？.!?]/g) ?? []).length >= 2,
        `${story.title} needs a readable event summary with at least two complete sentences`,
      );
      assert.ok(story.whyItMatters.trim());
      assert.ok(
        story.whyItMatters.length >= 70
          && (story.whyItMatters.match(/[。！？.!?]/g) ?? []).length >= 2,
        `${story.title} needs an analysis that derives a conclusion and then extends it`,
      );
      assert.ok(story.sourceName.trim());
      assert.ok(story.sourceDate.trim());
      assert.ok(!("analysis" in story));
      assert.ok(!("reflection" in story));
      assert.ok(!("evidenceBoundary" in story));
      assert.ok(!("sourceType" in story));
      assert.ok(!("informationForm" in story));
      assert.ok(story.facts.length >= 3, `${story.title} needs at least three key details`);
      for (const fact of story.facts) {
        assert.match(
          fact,
          /[。！？.!?]$/,
          `${story.title} has a detail without terminal punctuation: ${fact}`,
        );
        assert.doesNotMatch(
          fact,
          /；/,
          `${story.title} must split unrelated detail statements into separate bullets`,
        );
      }
      await access(join(root, "public", story.image));
    }
  }
  assert.equal(storyCount, 75, "the beginner-readable contract must cover all 75 stories");

  const stories = briefings.flatMap((briefing) => briefing.stories);
  const policeStudy = stories.find((story) => story.title.includes("460 万次拦停"));
  assert.match(policeStudy.happened, /24%.*20%/);
  assert.match(policeStudy.whyItMatters, /违禁品.*几乎相同/);

  const dreamStudy = stories.find((story) => story.title.includes("3,700 份文本"));
  assert.ok(dreamStudy.facts.some((fact) => fact.includes("COVID-19")));
  assert.ok(dreamStudy.facts.some((fact) => fact.includes("DOI")));
  assert.ok(!dreamStudy.facts.some((fact) => fact.includes("COVID-19") && fact.includes("DOI")));
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
    const issuePath = join(root, "docs/IVORY-ARCHIVE/briefings", briefing.date, "index.html");
    await access(issuePath);
    const issueHtml = await readFile(issuePath, "utf8");
    assert.ok(dynamicHtml.includes(briefing.theme), `dynamic archive is missing ${briefing.date}`);
    assert.ok(staticHtml.includes(briefing.theme), `Pages archive is missing ${briefing.date}`);
    assert.ok(issueHtml.includes(briefing.learningGoal), `Pages issue is missing learning goal: ${briefing.date}`);
    assert.ok(issueHtml.includes(briefing.connection), `Pages issue is missing connection: ${briefing.date}`);
    assert.equal((issueHtml.match(/<h3>背景<\/h3>/g) ?? []).length, 5);
    assert.equal((issueHtml.match(/<h3>事件<\/h3>/g) ?? []).length, 5);
    assert.equal((issueHtml.match(/<h3>细节<\/h3>/g) ?? []).length, 5);
    assert.equal((issueHtml.match(/<h3>分析<\/h3>/g) ?? []).length, 5);
    assert.equal((issueHtml.match(/class="story-source-link"/g) ?? []).length, 5);
    assert.doesNotMatch(issueHtml, /<h3>发生了什么<\/h3>|<h3>这件事为什么重要<\/h3>|<h3>记住这几个细节<\/h3>/);
    assert.doesNotMatch(issueHtml, /source-link-primary/);
    assert.doesNotMatch(issueHtml, /why-block|story-source-register/);
    assert.doesNotMatch(issueHtml, /证据与边界|反思与练习|不是来源中的直接事实|这份来源不能单独证明什么/);

    for (const story of briefing.stories) {
      for (const value of [
        story.title,
        story.background,
        story.happened,
        story.whyItMatters,
        ...story.facts,
        story.sourceUrl,
      ]) {
        assert.ok(issueHtml.includes(value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("'", "&#039;")), `Pages issue ${briefing.date} is missing ${value}`);
      }
      const encodedUrl = story.sourceUrl.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
      const encodedAnalysis = story.whyItMatters.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
      const encodedSourceName = story.sourceName.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
      const encodedTitle = story.title.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
      const sourceHref = `href="${encodedUrl}"`;
      assert.ok(
        issueHtml.includes(`${encodedSourceName}｜${encodedTitle}`),
        `Pages issue ${briefing.date} needs a descriptive source link for ${story.title}`,
      );
      assert.equal(
        issueHtml.split(sourceHref).length - 1,
        1,
        `Pages issue ${briefing.date} must show one source link for ${story.title}`,
      );
      assert.ok(
        issueHtml.indexOf(sourceHref) > issueHtml.indexOf(encodedAnalysis),
        `Pages issue ${briefing.date} must place the source after analysis for ${story.title}`,
      );
      const analysisClose = issueHtml.indexOf("</section>", issueHtml.indexOf(encodedAnalysis));
      assert.ok(
        analysisClose > issueHtml.indexOf(encodedAnalysis) && analysisClose < issueHtml.indexOf(sourceHref),
        `Pages issue ${briefing.date} must keep the source outside the analysis section for ${story.title}`,
      );
    }
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
  assert.ok(manifest.analytics.events.includes("source_opened"));
  assert.doesNotMatch(adapter, /\b(fetch|XMLHttpRequest|localStorage|sessionStorage|document\.cookie)\b/);
});
