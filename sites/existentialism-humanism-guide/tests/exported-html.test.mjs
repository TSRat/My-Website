import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const basePath = "/My-Website/existentialism-humanism-guide";
const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

test("exports the Chinese guide with production metadata", () => {
  assert.match(html, /<html[^>]*lang="zh-CN"/i);
  assert.match(html, /存在主义是一种人道主义/);
  assert.doesNotMatch(html, /codex-preview/);
});

test("uses GitHub Pages-safe asset paths", () => {
  assert.match(html, new RegExp(`${basePath}/_next/`));
  assert.match(html, new RegExp(`${basePath}/favicon\\.svg`));
  assert.doesNotMatch(html, /(?:src|href)="\/_next\//);
});

test("keeps accessibility and interactive source states", () => {
  assert.match(html, /href="#main-content"[^>]*>跳到主要内容</);
  assert.match(html, /<details/);
  assert.match(html, /aria-pressed="false"/);
  assert.match(html, /aria-live="polite"/);
});
