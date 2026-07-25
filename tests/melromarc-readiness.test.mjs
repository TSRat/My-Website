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

test("Melromarc readiness contract reports the rebuild blocker and storage boundary", async () => {
  const manifest = JSON.parse(
    await readRepoFile(
      "web/sites/melromarc-sisters/site-manifest.proposed.json",
    ),
  );
  const packageJson = JSON.parse(await readRepoFile("package.json"));

  assert.equal(manifest.id, "melromarc-sisters");
  assert.equal(manifest.migration.state, "readiness");
  assert.equal(manifest.migration.stage5, "blocked");
  assert.equal(manifest.capabilities.dataEntry, false);
  assert.equal(manifest.functionalStorage.key, "melromarc-saved-stories");
  assert.equal(manifest.proposedAnalytics.provider, null);
  assert.equal(manifest.proposedAnalytics.networkRequests, false);
  assert.equal(manifest.proposedAnalytics.cookies, false);
  assert.equal(manifest.proposedAnalytics.persistentStorage, false);
  assert.equal(manifest.proposedAnalytics.identity, false);
  assert.equal(manifest.proposedAnalytics.rawSearchText, false);
  assert.equal(
    Object.keys(packageJson.scripts).some((name) =>
      name.toLowerCase().includes("melromarc"),
    ),
    false,
  );
});

test("Melromarc active artifact matches the recorded immutable baseline", async () => {
  const manifest = JSON.parse(
    await readRepoFile(
      "web/sites/melromarc-sisters/site-manifest.proposed.json",
    ),
  );
  const index = await readRepoFile("MELROMARC-SISTERS/index.html");

  for (const [path, expectedHash] of Object.entries(
    manifest.activeArtifact,
  )) {
    const source = await readRepoFile(`MELROMARC-SISTERS/${path}`);
    const actualHash = createHash("sha256").update(source).digest("hex");
    assert.equal(actualHash, expectedHash, `${path} changed from the baseline`);
  }

  const html = index.toString("utf8");
  assert.match(html, /assets\/page-Wf3IdOaW\.js/);
  assert.match(html, /assets\/index-CpUB6AfA\.css\?v=d5b0fc7/);
  assert.match(html, /assets\/index-moQLGS8S\.js/);
});

test("Melromarc active bundle preserves all story ids and saved-story compatibility", async () => {
  const bundle = (
    await readRepoFile("MELROMARC-SISTERS/assets/page-Wf3IdOaW.js")
  ).toString("utf8");

  for (const storyId of storyIds) {
    assert.match(bundle, new RegExp(`id:\\\`${storyId}\\\``));
  }
  assert.match(bundle, /melromarc-saved-stories/);
  assert.match(bundle, /window\.localStorage\.getItem/);
  assert.match(bundle, /window\.localStorage\.setItem/);
});
