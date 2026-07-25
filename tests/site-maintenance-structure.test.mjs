import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { basename, join, resolve } from "node:path";
import test from "node:test";

import {
  loadSiteProjects,
  repositoryRoot,
} from "../scripts/site-projects.mjs";

const pathExists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

test("all public websites use the shared maintenance package contract", async () => {
  const projects = await loadSiteProjects();

  assert.equal(projects.length, 6);
  assert.deepEqual(
    projects.map(({ id }) => id),
    [
      "enheduanna",
      "hildegard",
      "hypatia",
      "ivory-archive",
      "living-atlas",
      "melromarc-sisters",
    ],
  );
  assert.equal(
    projects.filter(({ build }) => build.mirror).length,
    5,
  );
  assert.equal(
    projects.filter(({ source }) => source.mode === "vinext-dual-renderer")
      .length,
    1,
  );

  for (const project of projects.filter(({ build }) => build.mirror)) {
    const mirrorRoot = join(repositoryRoot, project.build.mirror);
    assert.equal(
      typeof project.hub.cover,
      "string",
      `${project.id} hub card is missing an image cover`,
    );
    const coverSource =
      project.source.mode === "vite-static"
        ? join(project.packageRoot, "public", project.hub.cover)
        : join(project.packageRoot, project.hub.cover);
    assert.equal(
      await pathExists(coverSource),
      true,
      `${project.id} hub cover does not exist in its maintainable source`,
    );

    for (const sourceOnlyName of [
      "site.config.json",
      "CONTENT.md",
      "DESIGN.md",
      "TECH.md",
      "HANDOFF.md",
    ]) {
      assert.equal(
        await pathExists(join(mirrorRoot, sourceOnlyName)),
        false,
        `${project.id} mirror contains ${sourceOnlyName}`,
      );
    }

    assert.equal(
      await pathExists(
        join(mirrorRoot, basename(resolve(project.packageRoot, project.manifest))),
      ),
      true,
      `${project.id} mirror is missing its site manifest`,
    );
  }
});
