# Website Portfolio Audit

- Audit date: 2026-07-23
- Branch: `codex/normalize-web-portfolio`
- Base commit: `3a91388`
- Authoritative registry: [`README.md`](../README.md#当前项目)
- Platform standard: [`web/platform-standard.md`](./platform-standard.md)
- Figma: [TSRat Web Design System · Portfolio Normalization](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt)

This file is the detailed audit, not a second website registry. Project names, public URLs, source locations, and lifecycle state remain authoritative in `README.md`.

## Portfolio status

| Site | Classification | Interaction tier | Migration status | Primary blocker |
| --- | --- | --- | --- | --- |
| The Living Atlas | REFACTOR | B — Interactive | Content registry and Web Core v1 in Draft PR #13; unmerged Preview verified | Shared runtime publication needs explicit Pages build-map authorization |
| IVORY ARCHIVE | PRESERVE | B — Interactive | Audited; no implementation migration started | Dynamic and Pages renderers need explicit parity tests |
| Enheduanna | REFACTOR | A — Editorial | Audited; implementation blocked | No reproducible source-to-mirror build; tablet overflow exists in the deployed mirror |
| Hildegard | PRESERVE | A — Editorial | Audited; no implementation migration started | Long-page visual comparison must use deterministic sections |
| Hypatia | REFACTOR | A — Editorial | Audited; no implementation migration started | Historical unreferenced assets and responsive cleanup need a scoped batch |
| Melromarc Sisters | REBUILD | B — Interactive | Audited; rebuild blocked | Complete upstream source and reproducible build are not present |

Counts: 6 audited; 2 PRESERVE; 3 REFACTOR; 1 REBUILD.

## Visual baseline and evidence

The current local Pages artifact was rendered in the Codex in-app browser at:

- Desktop: `1440 × 900`
- Tablet: `1024 × 768`
- Mobile: `390 × 844`

The Figma page `03 · Baselines & Handoff` contains all 18 accepted fixed-viewport captures. The page `02 · Site Themes & Screens` contains the six theme systems, 12 representative desktop/mobile references, and editable theme anatomy.

Fixed-viewport captures are valid. Full-page capture is not accepted as evidence because the current browser backend repeats or omits sticky and reveal-driven regions while composing a long screenshot. Migration review must therefore use deterministic section or anchor captures under matching viewport, font, content, and interaction state.

## The Living Atlas

- **Site / slug / live URL:** The Living Atlas; `THE-LIVING-ATLAS`; <https://tsrat.github.io/My-Website/THE-LIVING-ATLAS/>
- **Source path:** `THE-LIVING-ATLAS/`; language HTML shells, `content-registry.js`, `web-core.js`, `atlas.js`, `style.css`, and local image assets.
- **Status:** Public hub site and portfolio entry point.
- **Product purpose:** Present TSRat as a living interdisciplinary archive and route readers into knowledge, editorial, media, and story projects.
- **Primary audience and goal:** Readers discovering TSRat’s work; understand the archive’s worldview and enter a specific site or topic.
- **Major routes and navigation:** One static page plus Chinese variant; anchor navigation for Worlds, Index, Knowledge, published Sites, and Now.
- **Current visual direction:** Editorial atlas combining archive numbering, Swiss grid discipline, large serif statements, ivory paper, and cobalt navigation accents.
- **Typography / color / layout:** Noto Serif SC display, Inter UI, Fira Code metadata; `#F2EFE7` surface, `#161616` ink, `#7A756E` stone, `#0047AB` cobalt; desktop 12-column grid.
- **Framework / language / rendering:** Static HTML, CSS, and small ES modules; registry-driven section rendering plus carousel, search, and disclosure behavior.
- **Content/data model:** One bilingual registry drives Worlds, Knowledge, Now, published Sites, Latest, Index, and search metadata. Stable IDs, publication states, and real-link rules follow `web/content-system.md`.
- **State/interactivity:** Auto-rotating featured carousel with previous/next controls, accessible search dialog, keyboard shortcut, and mobile disclosure menu.
- **Build system / deployment:** Copied unchanged by `scripts/build-github-pages.mjs` into the GitHub Pages artifact.
- **Analytics:** No provider detected. Use the provider-neutral events in `platform-standard.md`; do not add a provider without approval.
- **Tests / CI:** Pages asset validation plus Living Atlas registry/link/language/index tests. Browser interaction checks remain required.
- **Accessibility state:** Correct language declarations, skip link, one `h1`, semantic `main` and `nav`, visible focus, native dialog search, mobile disclosure navigation, and descriptive image alternatives are present.
- **Responsive state:** Desktop and tablet first folds remain coherent. The mobile title is contained; the open menu uses an opaque layer and pushes the hero down instead of mixing with it.
- **Existing Figma:** Shared foundations, Living Atlas theme variables, components, representative desktop/mobile screens, and 3-viewport baselines are in the portfolio Figma file.
- **Classification:** **REFACTOR** — the information architecture and identity are useful, but responsive behavior, navigation, search, and content maintainability require normalization.
- **Target architecture:** Retain a lightweight static site. Introduce accessible shared primitives and an explicit data layer before considering a framework migration.
- **Shared-core adoption:** Focus treatment, skip navigation, content widths, breakpoints, motion preference, search/dialog behavior, and QA conventions.
- **Site-specific theme:** Preserve the ivory editorial atlas, monumental serif typography, cobalt system, asymmetric grid, imagery, and metadata voice.
- **Migration status:** First corrective batch merged. Content/data refactor and site-local Web Core v1 are implemented in Draft PR #13 with a verified unmerged Preview.
- **Figma URL:** <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt>
- **Preview / PR URL:** [Unmerged Preview](https://raw.githack.com/TSRat/My-Website/codex/living-atlas-content-system/THE-LIVING-ATLAS/index.html); [Draft PR #13](https://github.com/TSRat/My-Website/pull/13).
- **Remaining risks:** Small Red Book and WeChat URLs remain unknown and are non-clickable planned states. Article-level Knowledge data does not yet exist. Moving Web Core to a repository-level runtime requires a protected build-map change.

## IVORY ARCHIVE

- **Site / slug / live URL:** IVORY ARCHIVE; `IVORY-ARCHIVE`; <https://tsrat.github.io/My-Website/IVORY-ARCHIVE/>
- **Source path:** `app/briefings.ts`, `app/`, `public/`, and Pages generation in `scripts/build-github-pages.mjs`; committed `IVORY-ARCHIVE/` is a stale snapshot.
- **Status:** Active daily thought-briefing archive.
- **Product purpose:** Publish five-item Chinese briefings spanning culture, humanities, social science, and feminism.
- **Primary audience and goal:** Readers seeking a curated daily briefing; locate an issue, search its entries, or filter by theme.
- **Major routes and navigation:** Generated archive index plus generated issue detail routes; issue navigation, search, and thematic filters.
- **Current visual direction:** Warm ivory newspaper/archive layout with burgundy rules, restrained botanical imagery, issue numbering, and editorial serif headlines.
- **Typography / color / layout:** Editorial serif headlines, compact sans/mono metadata, warm ivory surfaces, burgundy primary action, green support accent, column-led archive composition.
- **Framework / language / rendering:** React/TypeScript dynamic application plus a custom static Pages renderer generated from the same briefing data.
- **Content/data model:** `app/briefings.ts` is the current structured content source.
- **State/interactivity:** Search and taxonomy filters work in the accepted Pages baseline; issue and entry navigation are functional.
- **Build system / deployment:** Root Vinext build for the application; custom Node generation for Pages; GitHub Actions artifact deployment.
- **Analytics:** No provider detected. Candidate neutral events: `search_performed`, `filter_applied`, `issue_opened`, `briefing_item_opened`.
- **Tests / CI:** Root build/test/lint plus Pages asset validation; no explicit parity test between the dynamic app and Pages output.
- **Accessibility state:** Skip link, semantic landmarks, headings, image alternatives, search, and filters are present; keyboard state and result announcements still need targeted testing.
- **Responsive state:** Accepted desktop, tablet, and mobile first folds show no horizontal overflow.
- **Existing Figma:** Ivory theme variables, editable theme anatomy, shared components, representative desktop/mobile screens, and 3-viewport baselines.
- **Classification:** **PRESERVE** — the source model, renderer, interaction set, and visual system are healthy.
- **Target architecture:** Keep the structured briefing source and both renderers; add parity checks before shared-component refactors.
- **Shared-core adoption:** Accessibility primitives, focus, filter/search state conventions, citations, image captions, event specification, and screenshot QA.
- **Site-specific theme:** Preserve the newspaper rhythm, botanical restraint, burgundy rule system, archive numbering, and Chinese editorial voice.
- **Migration status:** Audit complete; no code migration started.
- **Figma URL:** <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt>
- **Preview / PR URL:** Local Pages preview verified; migration preview and PR not started.
- **Remaining risks:** The stale committed snapshot can mislead maintainers; dynamic/static parity is not automatically enforced.

## Enheduanna

- **Site / slug / live URL:** Enheduanna / 恩赫杜安娜; `ENHEDUANNA`; <https://tsrat.github.io/My-Website/ENHEDUANNA/>
- **Source path:** Readable source in `static-sites/enheduanna/`; current deploy mirror in `ENHEDUANNA/`.
- **Status:** Public long-form historical profile, “Daughters of Time 004”.
- **Product purpose:** Explain Enheduanna as princess, high priestess, author, and contested “first author” while preserving evidence boundaries.
- **Primary audience and goal:** General readers of women’s and literary history; follow the narrative and inspect supporting evidence and sources.
- **Major routes and navigation:** One long page with chapter anchors, full-directory details menu, works, debate, video, and sources.
- **Current visual direction:** Ancient archive meets modern exhibition catalogue; hard borders, paper, cobalt spine, red conflict accents, gold sacred accents, and deliberate dark narrative transitions.
- **Typography / color / layout:** Chinese serif for titles/quotations, sans for reading/UI, condensed archive metadata; paper `#f4eedc`, cobalt `#153a8a`, red `#c83b2c`, ink `#101010`, clay/gold support; asymmetric editorial grids.
- **Framework / language / rendering:** Readable React/TSX/CSS source exists, but the public site is a prebuilt Vite/React static mirror with hashed assets.
- **Content/data model:** Content, sources, and repeated structures are encoded in `page.tsx`; deployed data is compiled into the mirror bundle.
- **State/interactivity:** Anchor navigation, details menu, external source links, video embed, and hover/focus treatments.
- **Build system / deployment:** No confirmed project-level source-to-mirror build command. Pages copies `ENHEDUANNA/` unchanged.
- **Analytics:** No provider detected. Candidate neutral events: `chapter_opened`, `source_opened`, `video_opened`, `reading_map_opened`.
- **Tests / CI:** Pages asset validation only for the mirror; no project-specific source build or source/mirror equivalence test.
- **Accessibility state:** Semantic landmarks and image alternatives are present; reduced motion exists. A skip link and full keyboard/iframe-title verification remain.
- **Responsive state:** Mobile first fold is coherent. At 1024px the accepted baseline shows approximately 20px horizontal overflow, traced to hero artwork and next-chapter geometry.
- **Existing Figma:** Enheduanna theme variables, editable theme anatomy, representative desktop/mobile screens, shared components, and 3-viewport baselines.
- **Classification:** **REFACTOR** — the source and identity are strong, but reproducibility and responsive behavior block safe maintenance.
- **Target architecture:** Recover or explicitly rebuild a reproducible project that emits the existing mirror without changing its public URL or visual contract.
- **Shared-core adoption:** Focus, skip navigation, responsive constraints, caption/citation semantics, motion accessibility, and source/mirror QA.
- **Site-specific theme:** Preserve the spine, paper/cobalt/red/gold tension, archaeological dossier structure, dark transitions, and evidence labels.
- **Migration status:** Audit complete; implementation blocked until the source-to-mirror workflow is confirmed or explicitly authorized for reconstruction.
- **Figma URL:** <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt>
- **Preview / PR URL:** Local mirror preview verified; migration preview and PR blocked.
- **Remaining risks:** Directly patching hashed bundles would create an unreproducible fix; chapter-number ordering also needs creator confirmation.

## Hildegard

- **Site / slug / live URL:** Hildegard / 希尔德加德; `HILDEGARD`; <https://tsrat.github.io/My-Website/HILDEGARD/>
- **Source path:** `HILDEGARD/`.
- **Status:** Public long-form historical profile, “Daughters of Time 002”.
- **Product purpose:** Present Hildegard as abbess, visionary, scholar, composer, and language inventor without flattening the tension between gender and class.
- **Primary audience and goal:** Readers of women’s, religious, music, and intellectual history; move through the narrative and consult the source boundary.
- **Major routes and navigation:** One long page with chapter anchors, video, sources, and editorial/source notes.
- **Current visual direction:** “Viriditas Codex”: parchment, botanical growth, manuscript structure, cosmic vision sections, and gold-leaf emphasis.
- **Typography / color / layout:** Editorial serif, compact archive metadata, parchment surface, viriditas green, cosmic blue, gold, and dark high-contrast chapter screens; six established page templates.
- **Framework / language / rendering:** Static HTML, CSS tokens/site stylesheet, vanilla JavaScript, local SVG and image assets.
- **Content/data model:** Hand-authored long-form HTML with local decorative and chapter assets.
- **State/interactivity:** Anchor navigation, reveal behavior, embedded video, source links, and reduced-motion handling.
- **Build system / deployment:** Copied unchanged into Pages by the custom build script.
- **Analytics:** No provider detected. Candidate neutral events: `chapter_opened`, `source_opened`, `video_opened`.
- **Tests / CI:** Pages asset validation; no site-specific interaction or screenshot test.
- **Accessibility state:** Skip link, semantic structure, alternatives, and reduced motion are present. Lazy media and contrast should remain part of browser QA.
- **Responsive state:** Accepted first folds at all three viewports show no horizontal overflow. Some lazy images are intentionally pending before scroll.
- **Existing Figma:** Hildegard theme variables, editable theme anatomy, shared components, representative desktop/mobile screens, and 3-viewport baselines.
- **Classification:** **PRESERVE** — the implementation and design system are explicit and maintainable.
- **Target architecture:** Keep the static structure; add narrowly shared accessibility/QA primitives only where they do not disturb chapter templates.
- **Shared-core adoption:** Focus, link validation, media loading checks, captions, citations, motion QA, and section screenshot conventions.
- **Site-specific theme:** Preserve Viriditas Codex, its six templates, manuscript/botanical/cosmic contrast, image-credit language, and narrative pacing.
- **Migration status:** Audit complete; no implementation migration started.
- **Figma URL:** <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt>
- **Preview / PR URL:** Local Pages preview verified; migration preview and PR not started.
- **Remaining risks:** Full-page screenshots are unreliable with reveal behavior; section-based visual comparison is required.

## Hypatia

- **Site / slug / live URL:** Hypatia / 希帕蒂娅; `HYPATIA`; <https://tsrat.github.io/My-Website/HYPATIA/>
- **Source path:** `HYPATIA/index.html` and the CSS/JavaScript/assets actually referenced by it.
- **Status:** Public long-form historical profile, “Daughters of Time 001”.
- **Product purpose:** Explain Hypatia as teacher, philosopher, and public figure at the intersection of knowledge, faith, and political violence.
- **Primary audience and goal:** General readers of women’s, philosophy, and late-antique history; begin the narrative and inspect the source boundary.
- **Major routes and navigation:** One long page with chapter anchors, source boundary, figures, and reading transitions.
- **Current visual direction:** Pale blue scholarly lecture/archive space with marble imagery, restrained line systems, and azure actions.
- **Typography / color / layout:** Editorial serif titles, clean sans reading/UI, white and pale-blue surfaces, blue/deep-blue accents, marble/sand support; centered reading rhythm with classical frame motifs.
- **Framework / language / rendering:** Directly deployable static HTML/CSS/JavaScript.
- **Content/data model:** Hand-authored HTML and local assets; directory also contains historical unreferenced bundles/styles.
- **State/interactivity:** Anchor navigation, start-reading action, source-boundary links, lazy media, and section reveals.
- **Build system / deployment:** Copied unchanged into Pages by the custom build script.
- **Analytics:** No provider detected. Candidate neutral events: `chapter_opened`, `source_opened`, `figure_opened`.
- **Tests / CI:** Pages validation plus existing workflow smoke checks for key files and version/title markers.
- **Accessibility state:** Skip link, landmarks, headings, image alternatives, and focusable navigation are present; lazy media and complete keyboard order still need targeted testing.
- **Responsive state:** Accepted first folds at all three viewports show no horizontal overflow.
- **Existing Figma:** Hypatia theme variables, editable theme anatomy, shared components, representative desktop/mobile screens, and 3-viewport baselines.
- **Classification:** **REFACTOR** — the current entry is maintainable, but historical asset duplication and future component/QA normalization need a scoped pass.
- **Target architecture:** Keep a static editorial implementation while clarifying referenced assets and adding non-destructive tests; do not delete legacy assets without confirmation.
- **Shared-core adoption:** Focus, captions, citations, motion/accessibility checks, lazy-media verification, and section screenshot QA.
- **Site-specific theme:** Preserve the pale scholarly atmosphere, marble/classical framing, azure action language, and source-boundary hierarchy.
- **Migration status:** Audit complete; no implementation migration started.
- **Figma URL:** <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt>
- **Preview / PR URL:** Local Pages preview verified; migration preview and PR not started.
- **Remaining risks:** Unreferenced historical bundles cannot be assumed safe to delete; full-page reveal capture remains unreliable.

## Melromarc Sisters

- **Site / slug / live URL:** Melromarc Sisters; `MELROMARC-SISTERS`; <https://tsrat.github.io/My-Website/MELROMARC-SISTERS/>
- **Source path:** Current deploy artifact in `MELROMARC-SISTERS/`; complete upstream source is not confirmed.
- **Status:** Public fan-created multi-story archive.
- **Product purpose:** Explore multiple possible lives and critical story branches for Malty and Melty while separating canon reference from fan-created premise.
- **Primary audience and goal:** Readers familiar with the source franchise; enter the story archive and open a specific or random branch.
- **Major routes and navigation:** One generated static entry with story navigation, random-story dialog, and character/story sections.
- **Current visual direction:** Midnight navy story archive with red/blue sister polarity, gold details, anime character artwork, and cinematic framing.
- **Typography / color / layout:** Serif story display, compact archive metadata, dark navy surfaces, red and sister-blue accents, warm gold support; symmetrical desktop hero becomes a layered mobile composition.
- **Framework / language / rendering:** Vinext/React-generated static HTML with hashed JavaScript/CSS and local images.
- **Content/data model:** Compiled into the artifact; readable upstream content source is not present in the repository.
- **State/interactivity:** Random-story dialog opens and closes correctly; body scroll locking is restored on close.
- **Build system / deployment:** No confirmed reproducible upstream build. Pages copies the artifact unchanged.
- **Analytics:** No provider detected. Candidate neutral events: `story_opened`, `random_story_opened`, `character_path_opened`.
- **Tests / CI:** Pages asset validation only; no source tests or reproducible project build.
- **Accessibility state:** Landmarks, one `h1`, button names, and image alternatives are present. Skip navigation, dialog focus trapping/return, and keyboard traversal need verification.
- **Responsive state:** Accepted first folds at all three viewports show no horizontal overflow.
- **Existing Figma:** Melromarc theme variables, editable theme anatomy, shared components, representative desktop/mobile screens, and 3-viewport baselines.
- **Classification:** **REBUILD** — the rendered identity is recognizable, but the missing upstream source prevents safe, maintainable evolution.
- **Target architecture:** Recover the original source or explicitly rebuild a maintainable React/static application that preserves the URL, recognizable art direction, content boundaries, and key dialog behavior.
- **Shared-core adoption:** Accessible dialog, focus return, skip navigation, routing/state conventions, asset validation, analytics event contract, and screenshot QA.
- **Site-specific theme:** Preserve the midnight archive, sister color polarity, character artwork, critical framing, and fan/canon distinctions.
- **Migration status:** Audit complete; implementation blocked pending upstream source or explicit rebuild authorization.
- **Figma URL:** <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt>
- **Preview / PR URL:** Local artifact preview verified; migration preview and PR blocked.
- **Remaining risks:** Root-relative duplicate asset requests produce 404s in local logs even though relative assets load; direct hashed-bundle edits would be unreproducible.

## Migration queue

1. Install/authenticate GitHub CLI, publish the Living Atlas corrective batch as a Draft PR, and preserve the Figma comparison evidence in the PR.
2. Add IVORY dynamic/static parity checks without changing its rendered design.
3. Recover or explicitly reconstruct Enheduanna’s source-to-mirror build before fixing the deployed tablet overflow.
4. Add section-based visual regression coverage for Hildegard and Hypatia.
5. Recover Melromarc upstream source or obtain explicit approval for a rebuild before implementation.
