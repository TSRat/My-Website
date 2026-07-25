import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const repositoryRoot = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "..",
);

const sitesRoot = join(repositoryRoot, "sites");
const expectedDocuments = [
  "CONTENT.md",
  "DESIGN.md",
  "TECH.md",
  "HANDOFF.md",
];
const supportedModes = new Set([
  "direct-static",
  "next-static",
  "vite-static",
  "vinext-dual-renderer",
]);
const supportedTiers = new Set(["A", "B", "C"]);
const supportedClassifications = new Set(["PRESERVE", "REFACTOR", "REBUILD"]);

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const assertPath = async (path, message) => {
  try {
    await access(path);
  } catch {
    throw new Error(message);
  }
};

export async function loadSiteProjects() {
  const packageEntries = await readdir(sitesRoot, { withFileTypes: true });
  const projects = [];

  for (const entry of packageEntries) {
    if (!entry.isDirectory()) continue;

    const packageRoot = join(sitesRoot, entry.name);
    const configPath = join(packageRoot, "site.config.json");
    let config;
    try {
      config = JSON.parse(await readFile(configPath, "utf8"));
    } catch (error) {
      throw new Error(
        `Could not read ${relative(repositoryRoot, configPath)}: ${error.message}`,
      );
    }

    projects.push({ ...config, packageRoot, configPath });
  }

  projects.sort((left, right) => left.id.localeCompare(right.id));
  await validateSiteProjects(projects);
  return projects;
}

async function validateSiteProjects(projects) {
  assert(projects.length === 10, `Expected 10 site packages, found ${projects.length}`);

  const ids = new Set();
  const slugs = new Set();
  const publicPaths = new Set();
  const hubOrders = new Set();
  const packageJson = JSON.parse(
    await readFile(join(repositoryRoot, "package.json"), "utf8"),
  );
  const readme = await readFile(join(repositoryRoot, "README.md"), "utf8");

  for (const project of projects) {
    const label = project.id ?? relative(repositoryRoot, project.packageRoot);
    assert(project.schemaVersion === 1, `${label}: schemaVersion must be 1`);
    assert(typeof project.id === "string" && project.id, `${label}: missing id`);
    assert(!ids.has(project.id), `${label}: duplicate id`);
    ids.add(project.id);

    assert(typeof project.slug === "string" && project.slug, `${label}: missing slug`);
    assert(!slugs.has(project.slug), `${label}: duplicate slug`);
    slugs.add(project.slug);

    assert(
      project.maintenanceRoot === `sites/${project.id}`,
      `${label}: maintenanceRoot must be sites/${project.id}`,
    );
    assert(project.status === "published", `${label}: status must be published`);
    assert(
      supportedTiers.has(project.interactionTier),
      `${label}: interactionTier must be A, B, or C`,
    );
    assert(
      supportedClassifications.has(project.classification),
      `${label}: unsupported classification ${project.classification}`,
    );
    assert(
      /^https:\/\/www\.figma\.com\/design\//.test(project.figmaUrl ?? ""),
      `${label}: missing Figma design source`,
    );
    assert(
      JSON.stringify(project.documents) === JSON.stringify(expectedDocuments),
      `${label}: documents must use the shared maintenance contract`,
    );

    for (const document of expectedDocuments) {
      await assertPath(
        join(project.packageRoot, document),
        `${label}: missing ${document}`,
      );
    }

    assert(
      supportedModes.has(project.source?.mode),
      `${label}: unsupported source mode ${project.source?.mode}`,
    );
    await assertPath(
      join(project.packageRoot, project.source.entry),
      `${label}: missing source entry ${project.source.entry}`,
    );

    assert(
      project.publicPath === `/My-Website/${project.slug}/`,
      `${label}: publicPath must match slug`,
    );
    assert(!publicPaths.has(project.publicPath), `${label}: duplicate publicPath`);
    publicPaths.add(project.publicPath);

    const manifestPath = resolve(project.packageRoot, project.manifest);
    await assertPath(manifestPath, `${label}: missing manifest ${project.manifest}`);

    const commandMatch = /^npm run ([a-z0-9:-]+)$/.exec(project.build?.command ?? "");
    assert(commandMatch, `${label}: build.command must be an npm run command`);
    assert(
      packageJson.scripts?.[commandMatch[1]],
      `${label}: package.json is missing ${commandMatch[1]}`,
    );

    if (project.source.mode === "vinext-dual-renderer") {
      assert(project.build.mirror === null, `${label}: generated site must not define a mirror`);
    } else {
      assert(project.build.mirror, `${label}: deploy mirror is required`);
      assert(project.hub, `${label}: hub metadata is required`);
      assert(
        Number.isInteger(project.hub.order) && project.hub.order > 0,
        `${label}: hub.order must be a positive integer`,
      );
      assert(
        !hubOrders.has(project.hub.order),
        `${label}: duplicate hub.order ${project.hub.order}`,
      );
      hubOrders.add(project.hub.order);
      if (project.source.mode === "vite-static") {
        await assertPath(
          join(project.packageRoot, project.source.viteConfig),
          `${label}: missing Vite config`,
        );
      }
    }

    assert(
      readme.includes(`\`${project.maintenanceRoot}/\``),
      `${label}: README must identify the maintenance root`,
    );
    assert(
      readme.includes(project.publicPath),
      `${label}: README must contain the public path`,
    );
  }
}
