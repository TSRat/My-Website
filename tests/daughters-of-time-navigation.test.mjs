import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readText = (path) =>
  readFile(new URL(`../${path}`, import.meta.url), "utf8");

const seriesDestinations = [
  "../HYPATIA/",
  "../HILDEGARD/",
  "../LA-MALINCHE/",
  "../ENHEDUANNA/",
];

test("every Daughters of Time source exposes the complete four-story series", async () => {
  const pages = await Promise.all([
    readText("sites/hypatia/index.html"),
    readText("sites/hildegard/index.html"),
    readText("sites/la-malinche/index.html"),
    readText("sites/enheduanna/page.tsx"),
  ]);

  pages.forEach((page, currentIndex) => {
    seriesDestinations.forEach((destination, destinationIndex) => {
      if (currentIndex === destinationIndex) {
        assert.match(page, /href="\.\/" aria-current="page"/);
        return;
      }
      assert.ok(
        page.includes(`href="${destination}"`),
        `missing series destination ${destination}`,
      );
    });
  });

  pages.forEach((page) => {
    assert.match(page, /aria-current="page"/);
  });
});
