import { access, cp, mkdir, readFile, rm } from "node:fs/promises";
import { basename, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { build as viteBuild } from "vite";
import { loadSiteProjects, repositoryRoot } from "./site-projects.mjs";

const sourceOnlyNames = new Set([
  "site.config.json",
  "CONTENT.md",
  "DESIGN.md",
  "TECH.md",
  "HANDOFF.md",
]);

const isDeployableSource = (sourceRoot, sourcePath) => {
  const relativePath = relative(sourceRoot, sourcePath);
  if (!relativePath) return true;
  if (sourceOnlyNames.has(basename(sourcePath))) return false;
  if (relativePath.endsWith(".md")) return false;
  return true;
};

const verifyStaticEntry = async (siteId, stagingDirectory, compiled) => {
  const stagedIndex = join(stagingDirectory, "index.html");
  await access(stagedIndex);
  const indexHtml = await readFile(stagedIndex, "utf8");

  if (
    compiled &&
    (indexHtml.includes('src="./main.tsx"') ||
      !indexHtml.includes('src="./assets/'))
  ) {
    throw new Error(`${siteId} did not produce a deployable Vite entry`);
  }
};

export async function buildSite(siteId) {
  const projects = await loadSiteProjects();
  const site = projects.find((project) => project.id === siteId);
  if (!site) {
    throw new Error(
      `Unknown site "${siteId}". Expected one of: ${projects.map(({ id }) => id).join(", ")}`,
    );
  }

  if (site.source.mode === "vinext-dual-renderer") {
    console.log(
      `Skipped ${site.id}: its dynamic build uses ${site.build.command}, while Pages are generated separately.`,
    );
    return;
  }

  if (site.source.mode === "next-static") {
    const { syncPhilosophySite } = await import(
      "./sync-philosophy-site-mirrors.mjs"
    );
    await syncPhilosophySite(site.id);
    return;
  }

  const stagingDirectory = join(repositoryRoot, site.build.staging);
  const mirrorDirectory = join(repositoryRoot, site.build.mirror);

  await rm(stagingDirectory, { recursive: true, force: true });
  await mkdir(dirname(stagingDirectory), { recursive: true });

  if (site.source.mode === "vite-static") {
    await viteBuild({
      configFile: join(site.packageRoot, site.source.viteConfig),
      build: {
        emptyOutDir: true,
        outDir: stagingDirectory,
      },
    });
    await verifyStaticEntry(site.id, stagingDirectory, true);
  } else {
    await cp(site.packageRoot, stagingDirectory, {
      recursive: true,
      filter: (sourcePath) => isDeployableSource(site.packageRoot, sourcePath),
    });
    await verifyStaticEntry(site.id, stagingDirectory, false);
  }

  if (site.build.mirrorPolicy === "replace") {
    await rm(mirrorDirectory, { recursive: true, force: true });
  }
  await cp(stagingDirectory, mirrorDirectory, {
    recursive: true,
    force: true,
  });

  console.log(
    `Built ${site.id} in ${site.build.staging} and updated ${site.build.mirror}/ (${site.build.mirrorPolicy}).`,
  );
}

export async function buildAllDeployMirrors() {
  const projects = await loadSiteProjects();
  for (const project of projects) {
    if (project.build.mirror) await buildSite(project.id);
  }
}

const invokedAsScript =
  process.argv[1] &&
  fileURLToPath(import.meta.url) === fileURLToPath(new URL(`file://${process.argv[1]}`));

if (invokedAsScript) {
  const requestedSite = process.argv[2];
  if (requestedSite === "--all") {
    await buildAllDeployMirrors();
  } else if (requestedSite) {
    await buildSite(requestedSite);
  } else {
    throw new Error("Pass a site id or --all");
  }
}
