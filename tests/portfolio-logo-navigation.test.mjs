import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

import { repositoryRoot } from "../scripts/site-projects.mjs";

const readRepositoryFile = (path) =>
  readFile(join(repositoryRoot, path), "utf8");

const logoSurfaces = [
  ["website-archive", "scripts/build-github-pages.mjs", /<footer><a class="portfolio-home-link" href="THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
  ["living-atlas-en", "sites/living-atlas/index.html", /href="\.\/"[^>]*><img class="portfolio-home-logo"/],
  ["living-atlas-zh", "sites/living-atlas/zh.html", /href="\.\/"[^>]*><img class="portfolio-home-logo"/],
  ["ivory-archive", "sites/ivory-archive/site-shell.tsx", /href="\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
  ["enheduanna", "sites/enheduanna/page.tsx", /href="\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
  ["la-malinche", "sites/la-malinche/index.html", /href="\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
  ["delacroix-archive", "sites/delacroix-archive/app.js", /href="\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
  ["hildegard", "sites/hildegard/index.html", /href="\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
  ["hypatia", "sites/hypatia/index.html", /href="\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
  ["sartre-nausea-guide", "sites/sartre-nausea-guide/app/page.tsx", /href="\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
  ["existentialism-humanism-guide", "sites/existentialism-humanism-guide/app/page.tsx", /href="\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
  ["melromarc-sisters", "sites/melromarc-sisters/page.tsx", /href="\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
  ["zhangyong-portrait", "sites/zhangyong-portrait/index.html", /href="\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
  ["zhangyong-portrait-red", "sites/zhangyong-portrait/red.html", /href="\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
  ["malty-melty-childhood", "sites/malty-melty-childhood/index.html", /href="\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/],
];

const darkLogoContracts = [
  ["ivory app", "sites/ivory-archive/globals.css"],
  ["ivory Pages renderer", "scripts/build-github-pages.mjs"],
  ["la-malinche", "sites/la-malinche/assets/site.css"],
  ["delacroix-archive", "sites/delacroix-archive/styles.css"],
  ["hildegard", "sites/hildegard/assets/hildegard-site.css"],
  ["hypatia", "sites/hypatia/assets/hypatia-v2.css"],
  ["existentialism-humanism-guide", "sites/existentialism-humanism-guide/app/globals.css"],
  ["melromarc-sisters", "sites/melromarc-sisters/styles.css"],
  ["zhangyong-portrait", "sites/zhangyong-portrait/index.html"],
  ["zhangyong-portrait-red", "sites/zhangyong-portrait/red.css"],
  ["malty-melty-childhood", "sites/malty-melty-childhood/style.css"],
];

test("every public website surface links its TSRat logo to The Living Atlas", async () => {
  for (const [name, path, contract] of logoSurfaces) {
    const source = await readRepositoryFile(path);
    assert.match(source, contract, `${name} is missing its linked TSRat logo`);
  }

  const ivoryRenderer = await readRepositoryFile("scripts/build-github-pages.mjs");
  assert.match(
    ivoryRenderer,
    /href="\$\{prefix\}\.\.\/THE-LIVING-ATLAS\/"[\s\S]*portfolio-home-logo/,
    "the generated Ivory Archive mirror is missing its linked TSRat logo",
  );
});

test("logos on dark surfaces render as white silhouettes", async () => {
  for (const [name, path] of darkLogoContracts) {
    const source = await readRepositoryFile(path);
    assert.match(
      source,
      /filter:\s*brightness\(0\)\s*invert\((?:1)?\)/,
      `${name} is missing the white-silhouette filter`,
    );
  }
});
