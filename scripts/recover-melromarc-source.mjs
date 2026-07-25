import { copyFile, cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { transform } from "esbuild";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const artifactRoot = join(repositoryRoot, "MELROMARC-SISTERS");
const sourceRoot = join(repositoryRoot, "static-sites", "melromarc-sisters");
const bundlePath = join(artifactRoot, "assets", "page-Wf3IdOaW.js");
const cssPath = join(artifactRoot, "assets", "index-CpUB6AfA.css");

const bundle = await readFile(bundlePath, "utf8");

const sliceLiteral = (startMarker, endMarker) => {
  const start = bundle.indexOf(startMarker);
  const end = bundle.indexOf(endMarker, start + startMarker.length);

  if (start < 0 || end < 0) {
    throw new Error(`Could not recover literal between ${startMarker} and ${endMarker}`);
  }

  return bundle.slice(start + startMarker.length, end);
};

const evaluateLiteral = (literal, label) => {
  const value = Function(`"use strict"; return (${literal});`)();
  if (!Array.isArray(value)) throw new Error(`${label} is not an array`);
  return value;
};

const stories = evaluateLiteral(sliceLiteral(",a=", ",o="), "stories");
const galleryItems = evaluateLiteral(sliceLiteral(",o=", ",s="), "galleryItems");
const filters = evaluateLiteral(sliceLiteral(",s=", ",c="), "filters");
const growthStages = evaluateLiteral(sliceLiteral(",c=", ";function l()"), "growthStages");

if (
  stories.length !== 13 ||
  galleryItems.length !== 18 ||
  filters.length !== 6 ||
  growthStages.length !== 5
) {
  throw new Error("Recovered Melromarc content does not match the accepted artifact baseline");
}

const contentModule = `export interface Story {
  id: string;
  title: string;
  subtitle: string;
  world: string;
  tone: string;
  stage: string;
  firstChange: string;
  summary: string;
  opening: string;
  turn: string;
  ending: string;
  question: string;
  motifs: string[];
  quote: string;
  originalUrl?: string;
}

export interface GalleryItem {
  title: string;
  detail: string;
  src: string;
  source: string;
  className: string;
}

export interface GrowthStage {
  number: string;
  category: string;
  title: string;
  description: string;
  storyIds: string[];
}

export const stories: Story[] = ${JSON.stringify(stories, null, 2)};

export const galleryItems: GalleryItem[] = ${JSON.stringify(galleryItems, null, 2)};

export const storyFilters: string[] = ${JSON.stringify(filters, null, 2)};

export const growthStages: GrowthStage[] = ${JSON.stringify(growthStages, null, 2)};
`;

await mkdir(join(sourceRoot, "public"), { recursive: true });
await writeFile(join(sourceRoot, "content.ts"), contentModule);

const sourceCss = await readFile(cssPath, "utf8");
const formattedCss = await transform(sourceCss, {
  loader: "css",
  minify: false,
});
await writeFile(join(sourceRoot, "styles.css"), formattedCss.code);

await cp(join(artifactRoot, "images"), join(sourceRoot, "public", "images"), {
  recursive: true,
  force: true,
});
await copyFile(
  join(artifactRoot, "favicon.svg"),
  join(sourceRoot, "public", "favicon.svg"),
);

console.log(
  `Recovered ${stories.length} stories, ${growthStages.length} change stages, and ${galleryItems.length} gallery records into ${sourceRoot}.`,
);
