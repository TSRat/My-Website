import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const repoFile = (path) => new URL(`../${path}`, import.meta.url);
const readText = async (path) => readFile(repoFile(path), "utf8");

test("La Malinche keeps the 33-screen beginner-first editorial and evidence contract", async () => {
  const [html, css, js, manifestText, configText, registry] = await Promise.all([
    readText("sites/la-malinche/index.html"),
    readText("sites/la-malinche/assets/site.css"),
    readText("sites/la-malinche/assets/site.js"),
    readText("sites/la-malinche/site-manifest.json"),
    readText("sites/la-malinche/site.config.json"),
    readText("sites/living-atlas/content-registry.js"),
  ]);
  const manifest = JSON.parse(manifestText);
  const config = JSON.parse(configText);

  assert.equal((html.match(/data-screen="/g) ?? []).length, 33);
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
  assert.match(html, /不(?:会)?被保存或发送/);
  assert.match(html, /BV1A72vBQEEJ/);
  assert.match(html, /BV1iWBeBEEFg/);
  assert.match(html, /malinche-cutout\.png/);
  assert.match(html, /codex-azcatitlan\.webp/);
  assert.match(html, /tenochtitlan-1524\.webp/);
  assert.match(html, /1519 · 西班牙人登陆/);
  assert.match(html, /特拉斯卡拉 · 是什么/);
  assert.match(html, /特拉斯卡拉 · 为什么先战后盟/);
  assert.match(html, /乔卢拉 · 是什么/);
  assert.match(html, /乔卢拉 · 发生了什么/);
  assert.match(html, /波顿查恩战败/);
  assert.match(html, /moctezuma-mendoza\.webp/);
  assert.match(html, /cortes-weiditz\.webp/);
  assert.doesNotMatch(`${html}\n${js}`, /波通昌/);
  assert.doesNotMatch(`${html}\n${css}\n${configText}\n${registry}`, /cover-(?:green|red)\.webp/);
  assert.doesNotMatch(html, /创作者提供|创作者解释性地图|并非十六世纪|不是马琳切的历史肖像/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /:focus-visible/);
  assert.match(js, /aria-pressed/);
  assert.equal(manifest.series, "时间的女儿 · 003");
  assert.equal(config.hub.eyebrow, "DAUGHTERS OF TIME · 003");
  assert.equal(manifest.contentSource.screens, 33);
  assert.equal(manifest.analytics.provider, "none");
  assert.equal(manifest.analytics.persistence, false);
});

test("La Malinche source assets and generated mirror are complete", async () => {
  for (const path of [
    "sites/la-malinche/assets/malinche-cutout.png",
    "sites/la-malinche/assets/archive/codex-azcatitlan.webp",
    "sites/la-malinche/assets/archive/malinche-tlaxcala.webp",
    "sites/la-malinche/assets/archive/tenochtitlan-1524.webp",
    "sites/la-malinche/assets/archive/cholula-1877.webp",
    "sites/la-malinche/assets/archive/cortes-landing-bl.webp",
    "sites/la-malinche/assets/archive/tlaxcala-map.webp",
    "sites/la-malinche/assets/archive/moctezuma-mendoza.webp",
    "sites/la-malinche/assets/archive/cortes-weiditz.webp",
    "sites/la-malinche/assets/maps/route.webp",
    "sites/la-malinche/assets/maps/totonacapan.webp",
    "LA-MALINCHE/index.html",
    "LA-MALINCHE/assets/site.css",
    "LA-MALINCHE/assets/site.js",
    "LA-MALINCHE/site-manifest.json",
  ]) {
    await access(repoFile(path));
  }
});
