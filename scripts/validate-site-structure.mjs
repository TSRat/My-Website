import { loadSiteProjects } from "./site-projects.mjs";

const projects = await loadSiteProjects();
const summary = projects
  .map(
    ({ id, source, build }) =>
      `${id}:${source.mode}:${build.mirror ?? (source.mode === "external-link" ? "external" : "generated-pages")}`,
  )
  .join(", ");

console.log(`Validated ${projects.length} portfolio records (${projects.filter(({ source }) => source.mode !== "external-link").length} maintained sites, 1 external entry): ${summary}`);
