import { spawn } from "node:child_process";
import { cp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const sites = [
  {
    source: "sites/sartre-nausea-guide",
    mirror: "SARTRE-NAUSEA-GUIDE",
  },
  {
    source: "sites/existentialism-humanism-guide",
    mirror: "EXISTENTIALISM-HUMANISM-GUIDE",
  },
];

function run(command, args, options = {}) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      ...options,
    });
    child.once("error", rejectRun);
    child.once("exit", (code, signal) => {
      if (code === 0) {
        resolveRun();
      } else {
        rejectRun(new Error(`${command} exited with ${code ?? signal}`));
      }
    });
  });
}

function makeHtmlPortable(html, prefix) {
  return html
    .replace(/<meta name="codex-preview" content="development"\/?>/g, "")
    .replaceAll('href="/_next/', `href="${prefix}_next/`)
    .replaceAll('src="/_next/', `src="${prefix}_next/`)
    .replaceAll('href="./_next/', `href="${prefix}_next/`)
    .replaceAll('src="./_next/', `src="${prefix}_next/`)
    .replaceAll('href="/assets/', `href="${prefix}assets/`)
    .replaceAll('src="/assets/', `src="${prefix}assets/`)
    .replaceAll('href="./assets/', `href="${prefix}assets/`)
    .replaceAll('src="./assets/', `src="${prefix}assets/`)
    .replaceAll('href="/favicon.svg"', `href="${prefix}favicon.svg"`)
    .replaceAll('src="/favicon.svg"', `src="${prefix}favicon.svg"`)
    .replaceAll('href="./favicon.svg"', `href="${prefix}favicon.svg"`)
    .replaceAll('src="./favicon.svg"', `src="${prefix}favicon.svg"`)
    .replaceAll('href="/file.svg"', `href="${prefix}file.svg"`)
    .replaceAll('src="/file.svg"', `src="${prefix}file.svg"`)
    .replaceAll('href="./file.svg"', `href="${prefix}file.svg"`)
    .replaceAll('src="./file.svg"', `src="${prefix}file.svg"`)
    .replaceAll('href="/globe.svg"', `href="${prefix}globe.svg"`)
    .replaceAll('src="/globe.svg"', `src="${prefix}globe.svg"`)
    .replaceAll('href="./globe.svg"', `href="${prefix}globe.svg"`)
    .replaceAll('src="./globe.svg"', `src="${prefix}globe.svg"`)
    .replaceAll('href="/window.svg"', `href="${prefix}window.svg"`)
    .replaceAll('src="/window.svg"', `src="${prefix}window.svg"`)
    .replaceAll('href="./window.svg"', `href="${prefix}window.svg"`)
    .replaceAll('src="./window.svg"', `src="${prefix}window.svg"`)
    .replaceAll('href="/chestnut-root.png"', `href="${prefix}chestnut-root.png"`)
    .replaceAll('src="/chestnut-root.png"', `src="${prefix}chestnut-root.png"`)
    .replaceAll('href="./chestnut-root.png"', `href="${prefix}chestnut-root.png"`)
    .replaceAll('src="./chestnut-root.png"', `src="${prefix}chestnut-root.png"`);
}

async function rewritePortableAssets(directory, mirrorRoot = directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewritePortableAssets(path, mirrorRoot);
      continue;
    }
    const extension = extname(entry.name);
    if (![".css", ".html", ".js", ".txt"].includes(extension)) continue;
    const contents = await readFile(path, "utf8");
    if (![".css", ".html"].includes(extension)) {
      await writeFile(path, contents.replace(/[ \t]+$/gm, ""));
      continue;
    }
    const depth = relative(mirrorRoot, dirname(path))
      .split("/")
      .filter(Boolean).length;
    const prefix = "../".repeat(depth) || "./";
    const portable = makeHtmlPortable(contents.replace(/[ \t]+$/gm, ""), prefix)
      .replaceAll("url(/assets/", `url(${prefix}assets/`)
      .replaceAll('url("/assets/', `url("${prefix}assets/`)
      .replaceAll("url('/assets/", `url('${prefix}assets/`);
    await writeFile(path, portable);
  }
}

async function syncSite(site) {
  const sourceRoot = join(root, site.source);
  const mirrorRoot = join(root, site.mirror);
  const siteNext = join(sourceRoot, "node_modules", ".bin", "next");
  const env = {
    ...process.env,
    SITE_BASE_PATH: "/",
    SITE_ASSET_PREFIX: ".",
  };

  try {
    await readFile(siteNext);
  } catch {
    await run(
      "npm",
      ["ci", "--ignore-scripts", "--no-audit", "--no-fund"],
      { cwd: sourceRoot, env },
    );
  }

  await run(siteNext, ["build"], { cwd: sourceRoot, env });

  await rm(mirrorRoot, { recursive: true, force: true });
  await cp(join(sourceRoot, "out"), mirrorRoot, { recursive: true });
  await rewritePortableAssets(mirrorRoot);

  const mirrorFiles = await readdir(mirrorRoot);
  if (!mirrorFiles.includes("index.html") || !mirrorFiles.includes("_next")) {
    throw new Error(`${site.mirror} mirror is incomplete`);
  }
}

for (const site of sites) {
  await syncSite(site);
}

console.log("Synced the Sartre and Existentialism static review mirrors.");
