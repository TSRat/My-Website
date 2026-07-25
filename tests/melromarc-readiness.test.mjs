import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readRepoFile = (path) =>
  readFile(new URL(`../${path}`, import.meta.url));

const storyIds = [
  "childhood",
  "music-beyond-crown",
  "golden-feather",
  "fire-return",
  "last-sister",
  "second-chance",
  "war-redemption",
  "reddit",
  "birthday-wish",
  "final-deception",
  "dignity",
  "sixty-seven-days",
  "calling",
];

const publicAssets = [
  "favicon.svg",
  "images/malty-anime.svg",
  "images/melty-anime.svg",
  "images/melty-queen.svg",
  ...Array.from(
    { length: 15 },
    (_, index) =>
      `images/gallery/${String(index + 1).padStart(2, "0")}-${
        [
          "childhood-hair",
          "apology-embrace",
          "balcony-embrace",
          "carrying-sister",
          "childhood-garden",
          "public-notice",
          "royal-family",
          "walking-together",
          "tavern-card-night",
          "fireplace-comfort",
          "dance-together",
          "ruins-reunion",
          "my-sister",
          "final-magic",
          "protect-my-sister",
        ][index]
      }.jpg`,
  ),
];

test("Melromarc contract reports the maintainable rebuild and storage boundary", async () => {
  const manifest = JSON.parse(
    await readRepoFile(
      "web/sites/melromarc-sisters/site-manifest.proposed.json",
    ),
  );
  const packageJson = JSON.parse(await readRepoFile("package.json"));

  assert.equal(manifest.id, "melromarc-sisters");
  assert.equal(manifest.migration.state, "implemented");
  assert.equal(manifest.migration.stage5, "complete");
  assert.equal(manifest.migration.blocker, null);
  assert.equal(manifest.capabilities.dataEntry, true);
  assert.equal(manifest.functionalStorage.key, "melromarc-saved-stories");
  assert.equal(manifest.proposedAnalytics.provider, null);
  assert.equal(manifest.proposedAnalytics.networkRequests, false);
  assert.equal(manifest.proposedAnalytics.cookies, false);
  assert.equal(manifest.proposedAnalytics.persistentStorage, false);
  assert.equal(manifest.proposedAnalytics.identity, false);
  assert.equal(manifest.proposedAnalytics.rawSearchText, false);
  assert.equal(
    packageJson.scripts["build:melromarc"],
    "node scripts/build-maintainable-site.mjs melromarc-sisters",
  );
});

test("Melromarc recovered source preserves all stories, categories, and privacy state", async () => {
  const [content, page] = await Promise.all([
    readRepoFile("static-sites/melromarc-sisters/content.ts"),
    readRepoFile("static-sites/melromarc-sisters/page.tsx"),
  ]);
  const contentText = content.toString("utf8");
  const pageText = page.toString("utf8");

  for (const storyId of storyIds) {
    assert.match(contentText, new RegExp(`"id": "${storyId}"`));
  }

  assert.equal((contentText.match(/"storyIds": \[/g) ?? []).length, 5);
  assert.match(pageText, /melromarc-saved-stories/);
  assert.match(pageText, /data-provider="none"/);
  assert.match(pageText, /window\.localStorage\.getItem/);
  assert.match(pageText, /window\.localStorage\.setItem/);
});

test("Melromarc current mirror is compiled and source assets match it", async () => {
  const index = (
    await readRepoFile("MELROMARC-SISTERS/index.html")
  ).toString("utf8");

  assert.doesNotMatch(index, /main\.tsx/);
  assert.match(index, /\.\/assets\/index-[^"]+\.js/);
  assert.match(index, /\.\/assets\/index-[^"]+\.css/);
  assert.doesNotMatch(index, /__VINEXT_RSC_/);

  for (const asset of publicAssets) {
    const [source, mirror] = await Promise.all([
      readRepoFile(`static-sites/melromarc-sisters/public/${asset}`),
      readRepoFile(`MELROMARC-SISTERS/${asset}`),
    ]);
    assert.deepEqual(source, mirror, `${asset} must remain byte-identical`);
  }
});

test("Melromarc recovery baseline bundles remain available as rollback evidence", async () => {
  const manifest = JSON.parse(
    await readRepoFile(
      "web/sites/melromarc-sisters/site-manifest.proposed.json",
    ),
  );

  for (const [path, expectedHash] of Object.entries(
    manifest.recoveryBaseline,
  )) {
    if (path === "commit") continue;
    const source = await readRepoFile(`MELROMARC-SISTERS/${path}`);
    const actualHash = createHash("sha256").update(source).digest("hex");
    assert.equal(actualHash, expectedHash, `${path} changed from the recovery baseline`);
  }
});
