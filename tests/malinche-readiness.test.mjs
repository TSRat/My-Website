import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const repoFile = (path) => new URL(`../${path}`, import.meta.url);
const readText = async (path) => readFile(repoFile(path), "utf8");

test("La Malinche keeps the 30-screen editorial and evidence contract", async () => {
  const [html, css, js, manifestText] = await Promise.all([
    readText("sites/la-malinche/index.html"),
    readText("sites/la-malinche/assets/site.css"),
    readText("sites/la-malinche/assets/site.js"),
    readText("sites/la-malinche/site-manifest.json"),
  ]);
  const manifest = JSON.parse(manifestText);

  assert.equal((html.match(/data-screen="/g) ?? []).length, 30);
  for (const chapter of [
    "before",
    "translator",
    "conqueror",
    "killing",
    "rupture",
    "endgame",
    "survivor",
    "traitor",
  ]) {
    assert.match(html, new RegExp(`id="${chapter}"`));
  }

  assert.match(html, /历史事实/);
  assert.match(html, /学术解释/);
  assert.match(html, /叙事框架/);
  assert.match(html, /视觉隐喻/);
  assert.match(html, /不是马琳切的历史肖像/);
  assert.match(html, /创作者解释性地图/);
  assert.match(html, /不(?:会)?被保存或发送/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /:focus-visible/);
  assert.match(js, /aria-pressed/);
  assert.equal(manifest.contentSource.screens, 30);
  assert.equal(manifest.analytics.provider, "none");
  assert.equal(manifest.analytics.persistence, false);
});

test("La Malinche source assets and generated mirror are complete", async () => {
  for (const path of [
    "sites/la-malinche/assets/cover-green.webp",
    "sites/la-malinche/assets/cover-red.webp",
    "sites/la-malinche/assets/maps/route.webp",
    "sites/la-malinche/assets/maps/aztec-sphere.webp",
    "sites/la-malinche/assets/maps/totonacapan.webp",
    "LA-MALINCHE/index.html",
    "LA-MALINCHE/assets/site.css",
    "LA-MALINCHE/assets/site.js",
    "LA-MALINCHE/site-manifest.json",
  ]) {
    await access(repoFile(path));
  }
});
