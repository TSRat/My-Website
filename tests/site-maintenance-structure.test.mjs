import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { basename, join, resolve } from "node:path";
import test from "node:test";

import {
  loadSiteProjects,
  repositoryRoot,
} from "../scripts/site-projects.mjs";

const pathExists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

test("portfolio registry separates maintained sites from external entries", async () => {
  const projects = await loadSiteProjects();

  assert.equal(projects.length, 14);
  assert.equal(projects.filter(({ source }) => source.mode !== "external-link").length, 13);
  assert.deepEqual(
    projects.map(({ id }) => id),
    [
      "arab-history-archive",
      "dailyalbum",
      "delacroix-archive",
      "enheduanna",
      "existentialism-humanism-guide",
      "hildegard",
      "hypatia",
      "ivory-archive",
      "la-malinche",
      "living-atlas",
      "malty-melty-childhood",
      "melromarc-sisters",
      "sartre-nausea-guide",
      "zhangyong-portrait",
    ],
  );
  assert.equal(
    projects.filter(({ build }) => build.mirror).length,
    12,
  );
  assert.equal(
    projects.filter(({ source }) => source.mode === "vinext-dual-renderer")
      .length,
    1,
  );

  for (const project of projects.filter(({ build }) => build.mirror)) {
    const mirrorRoot = join(repositoryRoot, project.build.mirror);
    assert.equal(
      typeof project.hub.cover,
      "string",
      `${project.id} hub card is missing an image cover`,
    );
    const coverSource =
      ["vite-static", "next-static"].includes(project.source.mode)
        ? join(project.packageRoot, "public", project.hub.cover)
        : join(project.packageRoot, project.hub.cover);
    assert.equal(
      await pathExists(coverSource),
      true,
      `${project.id} hub cover does not exist in its maintainable source`,
    );

    for (const sourceOnlyName of [
      "site.config.json",
      "CONTENT.md",
      "DESIGN.md",
      "TECH.md",
      "HANDOFF.md",
    ]) {
      assert.equal(
        await pathExists(join(mirrorRoot, sourceOnlyName)),
        false,
        `${project.id} mirror contains ${sourceOnlyName}`,
      );
    }

    assert.equal(
      await pathExists(
        join(mirrorRoot, basename(resolve(project.packageRoot, project.manifest))),
      ),
      true,
      `${project.id} mirror is missing its site manifest`,
    );
  }
});

test("DailyAlbum retains only an external entry, card asset and migration note", async () => {
  const dailyalbum = (await loadSiteProjects()).find(({ id }) => id === "dailyalbum");
  assert.equal(dailyalbum.source.mode, "external-link");
  assert.equal(dailyalbum.publicPath, "https://dailyalbumapp.com/");
  assert.equal(dailyalbum.hub.order, 13);
  assert.equal(dailyalbum.hub.className, "dailyalbum");
  assert.deepEqual(dailyalbum.build, { mirror: null });
  assert.equal(dailyalbum.source.entry, undefined);
  assert.deepEqual((await readdir(dailyalbum.packageRoot)).sort(), ["HANDOFF.md", "app-icon.png", "site.config.json"]);
  assert.equal(await pathExists(join(repositoryRoot, "DAILYALBUM")), false);
  const packageJson = JSON.parse(await readFile(join(repositoryRoot, "package.json"), "utf8"));
  assert.equal(packageJson.scripts["dev:dailyalbum"], undefined);
  assert.equal(packageJson.scripts["build:dailyalbum"], undefined);
});

test("built Pages preserves all other destinations and publishes only eight DailyAlbum redirects", async () => {
  const html = await readFile(join(repositoryRoot, "docs/index.html"), "utf8");
  const cards = [...html.matchAll(/<a class="site-card ([^"]+)" href="([^"]+)">/gu)];
  assert.equal(cards.length, 14);
  assert.deepEqual(cards.map((match) => match[2]), [
    "IVORY-ARCHIVE/", "ENHEDUANNA/", "HILDEGARD/", "HYPATIA/", "MELROMARC-SISTERS/",
    "THE-LIVING-ATLAS/", "ZHANGYONG-PORTRAIT/", "MALTY-MELTY-CHILDHOOD/", "SARTRE-NAUSEA-GUIDE/",
    "EXISTENTIALISM-HUMANISM-GUIDE/", "LA-MALINCHE/", "DELACROIX-ARCHIVE/", "https://dailyalbumapp.com/", "ARAB-HISTORY-ARCHIVE/",
  ]);
  assert.equal(cards[12][1], "dailyalbum");
  assert.match(html, /src="portfolio-assets\/dailyalbum-app-icon.png"/u);
  const redirects = {
    "": "https://dailyalbumapp.com/cn/",
    "privacy/": "https://dailyalbumapp.com/cn/privacy/",
    "support/": "https://dailyalbumapp.com/cn/support/",
    "sources/": "https://dailyalbumapp.com/cn/sources/",
    "en/": "https://dailyalbumapp.com/en/cn/",
    "en/privacy/": "https://dailyalbumapp.com/en/cn/privacy/",
    "en/support/": "https://dailyalbumapp.com/en/cn/support/",
    "en/sources/": "https://dailyalbumapp.com/en/cn/sources/",
  };
  const registry = (await loadSiteProjects()).find(({ id }) => id === "dailyalbum");
  assert.deepEqual(registry.compatibilityRedirects, redirects);
  const legacyRoot = join(repositoryRoot, "docs/DAILYALBUM");
  const publishedFiles = await readdir(legacyRoot, { recursive: true, withFileTypes: true });
  assert.equal(publishedFiles.filter((entry) => entry.isFile()).length, 8);
  for (const [route, target] of Object.entries(redirects)) {
    const redirect = await readFile(join(legacyRoot, route, "index.html"), "utf8");
    assert.ok(Buffer.byteLength(redirect) < 1200, `${route} should contain only a tiny redirect`);
    assert.ok(redirect.includes(`content="0; url=${target}"`));
    assert.ok(redirect.includes(`<link rel="canonical" href="${target}">`));
    assert.ok(redirect.includes(`<a href="${target}">`), `${route} must keep a navigable fallback`);
    assert.ok(redirect.includes(`location.replace(${JSON.stringify(target)} + location.search + location.hash)`));
    assert.doesNotMatch(redirect, /styles\.css|app-icon|site-manifest|<nav/u);
  }
});
