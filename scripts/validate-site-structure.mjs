import { loadSiteProjects } from "./site-projects.mjs";

const projects = await loadSiteProjects();
const summary = projects
  .map(
    ({ id, source, build }) =>
      `${id}:${source.mode}:${build.mirror ?? "generated-pages"}`,
  )
  .join(", ");

console.log(`Validated ${projects.length} website maintenance packages: ${summary}`);
