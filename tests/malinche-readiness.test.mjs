import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const repoFile = (path) => new URL(`../${path}`, import.meta.url);
const readText = async (path) => readFile(repoFile(path), "utf8");

test("La Malinche keeps the 70-screen beginner-first editorial and evidence contract", async () => {
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

  assert.equal((html.match(/data-screen="/g) ?? []).length, 70);
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
  assert.match(html, /tenochtitlan-1524\.webp/);
  assert.match(html, /1519 · 波顿查恩战败/);
  assert.match(html, /先认识特拉斯卡拉/);
  assert.match(html, /特拉斯卡拉 · 从战争到联盟/);
  assert.match(html, /先认识乔卢拉/);
  assert.match(html, /1519 · 乔卢拉大屠杀/);
  assert.match(html, /波顿查恩战败/);
  assert.match(html, /moctezuma-mendoza\.webp/);
  assert.match(html, /cortes-weiditz\.webp/);
  assert.match(html, /cholula-pyramid\.webp/);
  assert.match(html, /triple-alliance-map-zh\.svg/);
  assert.match(html, /codex-borbonicus-calendar\.webp/);
  assert.match(html, /cantino-planisphere\.webp/);
  assert.match(html, /columbus-landing\.webp/);
  assert.match(html, /alliance-route/);
  assert.equal((html.match(/assets\/tsrat-logo\.png/g) ?? []).length, 2);
  assert.match(html, /中部美洲 · 城邦林立/);
  assert.match(html, /三国同盟 · 贡赋圈/);
  assert.match(html, /神祇 · 战争 · 祭祀 · 奴役/);
  assert.match(html, /Doña Marina/);
  assert.match(html, /托托纳克 · 第一场政治谈判/);
  assert.match(html, /视野越过海岸/);
  assert.match(html, /什么是西班牙殖民地/);
  assert.match(html, /科尔特斯在古巴/);
  assert.match(html, /韦拉克鲁斯 · 法律上的脱离/);
  assert.match(html, /为什么能不断变大/);
  assert.match(html, /托斯卡特尔节/);
  assert.match(html, /蒙特苏马被扣作人质/);
  assert.match(html, /纳尔瓦埃斯来逮捕科尔特斯/);
  assert.match(html, /十三艘双桅帆船/);
  assert.match(html, /围城一步步收紧/);
  assert.match(html, /瓜乌特莫克[\s\S]{0,80}被俘/);
  assert.match(html, /废墟上建起一座殖民首都/);
  assert.match(html, /她回到奥卢特拉/);
  assert.match(html, /她何时被写成“叛徒”/);
  assert.match(html, /1826 · 墨西哥独立之后/);
  assert.match(html, /Malinchismo：[\s\S]{0,100}一个后世造出的词/);
  assert.match(html, /女性主义者重新阅读她/);
  assert.match(html, /纪念她，也争夺她的形象/);
  assert.match(html, /替征服者[\s\S]{0,80}承担罪责/);
  assert.match(html, /malinche-statue-1982\.jpg/);
  assert.match(html, /malinche-mural-tlaxcala\.jpg/);
  assert.doesNotMatch(`${html}\n${js}`, /波通昌/);
  assert.doesNotMatch(html, /页面从中部美洲|接下来补上她刚刚听懂的背景/);
  assert.doesNotMatch(`${html}\n${css}\n${js}\n${registry}`, /cover-(?:green|red)\.webp/);
  assert.doesNotMatch(html, /创作者提供|创作者解释性地图|并非十六世纪|不是马琳切的历史肖像/);
  assert.match(css, /--scene-caption-size:\s*clamp\(1rem,\s*1\.2vw,\s*1\.16rem\)/);
  assert.match(html, /id="reading-screen">00 \/ 69/);
  assert.match(html, /data-short="背叛者"/);
  assert.match(html, /mobile-scene-cue/);
  assert.match(html, /controlled-wrap/);
  assert.match(css, /\.video-meta > span/);
  assert.match(css, /\.badge\.interpretation\s*\{\s*background:\s*var\(--bone\)/);
  assert.match(css, /\.origin-figure\s*\{\s*inset:\s*8% 5% 7% 42%/);
  assert.match(js, /readingScreen\.textContent = `\$\{screen\} \/ 69`/);
  assert.match(js, /prologue:\s*"序章"/);
  assert.match(css, /\.route-copy p:not\(\.eyebrow\)/);
  assert.match(css, /\.threshold-spain p:not\(\.eyebrow\)/);
  assert.match(css, /\.navigation-copy > p:not\(\.navigation-terms,\s*\.eyebrow\)/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /:focus-visible/);
  assert.match(js, /aria-pressed/);
  assert.equal(manifest.series, "时间的女儿 · 003");
  assert.equal(config.hub.eyebrow, "DAUGHTERS OF TIME · 003");
  assert.equal(config.hub.cover, "assets/cover-green.webp");
  assert.equal(manifest.contentSource.screens, 70);
  assert.equal(manifest.analytics.provider, "none");
  assert.equal(manifest.analytics.persistence, false);
});

test("La Malinche source assets and generated mirror are complete", async () => {
  for (const path of [
    "sites/la-malinche/assets/malinche-cutout.png",
    "sites/la-malinche/assets/tsrat-logo.png",
    "sites/la-malinche/assets/archive/codex-azcatitlan.webp",
    "sites/la-malinche/assets/archive/malinche-tlaxcala.webp",
    "sites/la-malinche/assets/archive/tenochtitlan-1524.webp",
    "sites/la-malinche/assets/archive/cholula-1877.webp",
    "sites/la-malinche/assets/archive/cholula-pyramid.webp",
    "sites/la-malinche/assets/archive/cortes-landing-bl.webp",
    "sites/la-malinche/assets/archive/tlaxcala-map.webp",
    "sites/la-malinche/assets/archive/moctezuma-mendoza.webp",
    "sites/la-malinche/assets/archive/cortes-weiditz.webp",
    "sites/la-malinche/assets/archive/triple-alliance-map-zh.svg",
    "sites/la-malinche/assets/archive/codex-borbonicus-calendar.webp",
    "sites/la-malinche/assets/archive/cantino-planisphere.webp",
    "sites/la-malinche/assets/archive/columbus-landing.webp",
    "sites/la-malinche/assets/archive/malinche-statue-1982.jpg",
    "sites/la-malinche/assets/archive/malinche-mural-tlaxcala.jpg",
    "sites/la-malinche/assets/creator/isabella-castile.webp",
    "sites/la-malinche/assets/creator/ferdinand-aragon.webp",
    "sites/la-malinche/assets/creator/scuttle-fleet.webp",
    "sites/la-malinche/assets/creator/reconquista-painting.webp",
    "sites/la-malinche/assets/creator/temple-massacre-codex.webp",
    "sites/la-malinche/assets/creator/moctezuma-pleads.webp",
    "sites/la-malinche/assets/creator/malinche-interior-still.webp",
    "sites/la-malinche/assets/creator/tenochtitlan-rain-reconstruction.webp",
    "sites/la-malinche/assets/creator/smallpox-codex.webp",
    "sites/la-malinche/assets/creator/lake-canoe-still.webp",
    "sites/la-malinche/assets/creator/tenochtitlan-aerial-reconstruction.webp",
    "sites/la-malinche/assets/creator/cuauhtemoc-capture.webp",
    "sites/la-malinche/assets/creator/aztec-sun-motif.svg",
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
