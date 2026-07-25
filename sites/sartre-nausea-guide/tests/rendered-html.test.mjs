import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const requestedBasePath =
  process.env.SITE_BASE_PATH ?? "/My-Website/sartre-nausea-guide";
const basePath =
  requestedBasePath === "/"
    ? ""
    : `/${requestedBasePath.replace(/^\/+|\/+$/g, "")}`;
const requestedAssetPrefix = process.env.SITE_ASSET_PREFIX;
const assetPrefix =
  requestedAssetPrefix === undefined
    ? basePath
    : requestedAssetPrefix === "/"
      ? ""
      : requestedAssetPrefix === "."
        ? "."
        : `/${requestedAssetPrefix.replace(/^\/+|\/+$/g, "")}`;
const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

test("exports production metadata and accessible structure", () => {
  assert.match(html, /<html[^>]*lang=["']zh-CN["']/i);
  assert.match(html, /<title>《恶心》入门/);
  assert.doesNotMatch(html, /codex-preview/i);
  assert.match(html, /class=["']skip-link["'][^>]*href=["']#main-content["']/i);
  assert.match(html, /<main[^>]*id=["']main-content["']/i);
});

test("exports complete tab relationships", () => {
  assert.match(html, /id=["']moment-tab-0["'][^>]*aria-controls=["']moment-panel-0["']/i);
  assert.match(html, /id=["']moment-panel-0["'][^>]*aria-labelledby=["']moment-tab-0["']/i);
  assert.match(html, /id=["']concept-tab-1["'][^>]*aria-controls=["']concept-panel-1["']/i);
  assert.match(html, /id=["']route-tab-0["'][^>]*aria-controls=["']route-panel-0["']/i);
});

test("uses static-export-safe public asset paths", () => {
  assert.match(html, new RegExp(`href=["']${basePath}/favicon\\.svg["']`, "i"));
  assert.match(html, new RegExp(`src=["']${basePath}/chestnut-root\\.png["']`, "i"));
  assert.match(html, new RegExp(`(?:href|src)=["']${assetPrefix}/_next/`, "i"));
  if (assetPrefix) {
    assert.doesNotMatch(html, /(?:href|src)=["']\/_next\//i);
  }
  assert.doesNotMatch(html, /\/workspace\//i);
});
