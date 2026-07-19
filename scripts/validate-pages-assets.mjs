import { access, readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const pagesRoot = path.resolve("docs");
const repositoryPagesPrefix = "/My-Website/";
const checkedExtensions = new Set([".html", ".css"]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(absolutePath));
    } else if (checkedExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(absolutePath);
    }
  }

  return files;
}

function extractReferences(file, source) {
  const references = [];

  if (file.endsWith(".html")) {
    const attributePattern = /\b(?:src|href|poster)\s*=\s*(["'])(.*?)\1/giu;
    for (const match of source.matchAll(attributePattern)) {
      references.push(match[2]);
    }

    const srcsetPattern = /\bsrcset\s*=\s*(["'])(.*?)\1/giu;
    for (const match of source.matchAll(srcsetPattern)) {
      for (const candidate of match[2].split(",")) {
        references.push(candidate.trim().split(/\s+/u)[0]);
      }
    }
  }

  const cssUrlPattern = /url\(\s*(["']?)(.*?)\1\s*\)/giu;
  for (const match of source.matchAll(cssUrlPattern)) {
    references.push(match[2]);
  }

  return references;
}

function localTarget(file, rawReference) {
  const reference = rawReference.trim();
  if (
    reference === ""
    || reference.startsWith("#")
    || reference.startsWith("//")
    || /^(?:data|https?|mailto|tel|javascript):/iu.test(reference)
  ) {
    return null;
  }

  const withoutQuery = reference.split(/[?#]/u)[0];
  if (withoutQuery === "") return null;

  let decoded;
  try {
    decoded = decodeURIComponent(withoutQuery);
  } catch {
    decoded = withoutQuery;
  }

  if (decoded.startsWith(repositoryPagesPrefix)) {
    return path.join(pagesRoot, decoded.slice(repositoryPagesPrefix.length));
  }

  if (decoded === "/My-Website" || decoded === "/My-Website/") {
    return pagesRoot;
  }

  if (decoded.startsWith("/")) {
    return path.join(pagesRoot, decoded.slice(1));
  }

  return path.resolve(path.dirname(file), decoded);
}

async function targetExists(target) {
  try {
    await access(target);
    const targetStat = await stat(target);
    if (!targetStat.isDirectory()) return true;
    await access(path.join(target, "index.html"));
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const files = await walk(pagesRoot);
  const missing = [];
  let referenceCount = 0;

  for (const file of files) {
    const source = await readFile(file, "utf8");
    for (const reference of extractReferences(file, source)) {
      const target = localTarget(file, reference);
      if (!target) continue;
      referenceCount += 1;

      if (!target.startsWith(`${pagesRoot}${path.sep}`) && target !== pagesRoot) {
        missing.push({ file, reference, reason: "resolves outside docs/" });
      } else if (!await targetExists(target)) {
        missing.push({ file, reference, reason: "target does not exist" });
      }
    }
  }

  if (missing.length > 0) {
    console.error(`Found ${missing.length} missing local Pages asset reference(s):`);
    for (const item of missing) {
      console.error(`- ${path.relative(pagesRoot, item.file)} -> ${item.reference} (${item.reason})`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Validated ${referenceCount} local references across ${files.length} HTML/CSS files.`);
}

await main();
