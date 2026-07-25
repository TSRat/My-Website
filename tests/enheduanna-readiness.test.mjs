import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const sourceAssets = [
  "enheduanna-disc.jpg",
  "enheduanna-portrait.png",
  "enheduanna-silhouette.png",
  "favicon.svg",
  "ishtar-babylonia.png",
  "standard-of-ur.jpg",
  "tsrat-logo.png",
  "voices-lift.png",
];

const readRepoFile = (path) =>
  readFile(new URL(`../${path}`, import.meta.url));

test("Enheduanna readiness contract reports the production blocker", async () => {
  const manifest = JSON.parse(
    await readRepoFile(
      "web/sites/enheduanna/site-manifest.proposed.json",
    ),
  );
  const packageJson = JSON.parse(await readRepoFile("package.json"));

  assert.equal(manifest.id, "enheduanna");
  assert.equal(manifest.migration.state, "readiness");
  assert.equal(manifest.migration.stage5, "blocked");
  assert.equal(manifest.capabilities.dataEntry, false);
  assert.equal(manifest.proposedAnalytics.provider, null);
  assert.equal(manifest.proposedAnalytics.networkRequests, false);
  assert.equal(manifest.proposedAnalytics.cookies, false);
  assert.equal(manifest.proposedAnalytics.persistentStorage, false);
  assert.equal(manifest.proposedAnalytics.identity, false);
  assert.equal(
    Object.keys(packageJson.scripts).some((name) =>
      name.toLowerCase().includes("enheduanna"),
    ),
    false,
  );
});

test("Enheduanna readable-source assets still match the deployed mirror", async () => {
  for (const asset of sourceAssets) {
    const [source, mirror] = await Promise.all([
      readRepoFile(`static-sites/enheduanna/public/${asset}`),
      readRepoFile(`ENHEDUANNA/${asset}`),
    ]);
    assert.deepEqual(source, mirror, `${asset} must remain byte-identical`);
  }
});
