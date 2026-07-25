import { access, cp, mkdir, readFile, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build as viteBuild } from "vite";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const sites = {
  enheduanna: {
    configFile: "static-sites/enheduanna/vite.config.ts",
    mirror: "ENHEDUANNA",
  },
  "melromarc-sisters": {
    configFile: "static-sites/melromarc-sisters/vite.config.ts",
    mirror: "MELROMARC-SISTERS",
  },
};

const siteId = process.argv[2];
const site = sites[siteId];

if (!site) {
  throw new Error(
    `Unknown site "${siteId ?? ""}". Expected one of: ${Object.keys(sites).join(", ")}`,
  );
}

const stagingDirectory = join(repositoryRoot, ".site-build", siteId);
const mirrorDirectory = join(repositoryRoot, site.mirror);

await rm(stagingDirectory, { recursive: true, force: true });
await mkdir(stagingDirectory, { recursive: true });

await viteBuild({
  configFile: join(repositoryRoot, site.configFile),
  build: {
    emptyOutDir: true,
    outDir: stagingDirectory,
  },
});

const stagedIndex = join(stagingDirectory, "index.html");
await access(stagedIndex);

const indexHtml = await readFile(stagedIndex, "utf8");
if (
  indexHtml.includes('src="./main.tsx"') ||
  !indexHtml.includes('src="./assets/')
) {
  throw new Error(`${siteId} did not produce a deployable Vite entry`);
}

// Preserve unreferenced historical bundles in the mirror as rollback material.
// The new index points only at the freshly built files copied from staging.
await cp(stagingDirectory, mirrorDirectory, {
  recursive: true,
  force: true,
});

console.log(
  `Built ${siteId} in ${stagingDirectory} and updated ${site.mirror}/ without deleting rollback files.`,
);
