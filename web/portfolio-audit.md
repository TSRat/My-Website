# Website Portfolio Audit

- Audit date: 2026-07-25
- Branch: `codex/sites-six-stage-import`
- Base commit: `636c198`
- Last implementation update: 2026-07-25 on `codex/sites-six-stage-import`
- Authoritative registry: [`README.md`](../README.md#当前项目)
- Platform standard: [`web/platform-standard.md`](./platform-standard.md)
- Figma: [TSRat Web Design System · Portfolio Normalization](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt)

This file is the detailed audit, not a second website registry. Project names, public URLs, source locations, and lifecycle state remain authoritative in `README.md`.

## Portfolio status

| Site | Classification | Interaction tier | Migration status | Primary blocker |
| --- | --- | --- | --- | --- |
| The Living Atlas | REFACTOR | B — Interactive | Content system merged in PR #13; Data / starter and ambiguity correction merged in PR #14 | Shared runtime publication needs explicit Pages build-map authorization |
| IVORY ARCHIVE | PRESERVE | B — Interactive | Six-stage implementation merged in PR #15 | Antigravity extended QA remains optional follow-up |
| Enheduanna | REFACTOR | A — Editorial | Maintainable rebuild merged in PR #17 | Antigravity extended visual QA remains optional follow-up |
| Hildegard | PRESERVE | A — Editorial | Six-stage implementation merged in PR #16 | Antigravity deterministic-section visual QA remains optional follow-up |
| Hypatia | REFACTOR | A — Editorial | Six-stage implementation merged in PR #16 | Antigravity deterministic-section visual QA remains optional follow-up |
| Sartre / 《恶心》导读 | REFACTOR | B — Interactive | Six-stage migration in progress on `codex/sites-six-stage-import` | Image provenance confirmation and Antigravity extended QA remain |
| Existentialism / 《存在主义是一种人道主义》 | PRESERVE | A/B — Editorial with local state | Six-stage migration in progress on `codex/sites-six-stage-import` | Source list and Antigravity extended QA remain |
| Melromarc Sisters | REBUILD | B — Interactive | Maintainable reconstruction merged in PR #18 | Antigravity focus/visual QA remains optional follow-up |
| 张勇的生活切片 | PRESERVE | A — Editorial | Direct static migration merged in PR #21 | Antigravity section QA pending |
| 两只天鹅 | REFACTOR | B — Interactive | Direct static migration merged in PR #21 | Antigravity interaction QA pending |

Counts: 10 audited; 4 PRESERVE; 5 REFACTOR; 1 REBUILD.

## Remaining migration queue

The reusable capability starter is `web/templates/site-starter/`. Each batch
copies only the contracts its tier needs and preserves its own visual system.

| Order | Batch | Starter adoption | Gate before implementation |
| --- | --- | --- | --- |
| 1 | Sartre + Existentialism | Full source recovery, static export, theme variables, representative frames, provider-neutral events, exact-commit preview | Implemented in Draft PR #19; Antigravity extended QA pending |
| 2 | IVORY ARCHIVE | Manifest, provider-neutral events, Data entry, renderer parity and Antigravity screenshot QA | Implemented and merged in PR #15 |
| 3 | Hypatia + Hildegard | Manifest, stable IDs, Data entry, source/citation events and Antigravity editorial browser checks | Implemented and merged in PR #16 |
| 4 | Enheduanna | Tier A source, Data entry and repeatable mirror build | Implemented and merged in PR #17 |
| 5 | Melromarc Sisters | Tier B source, Data entry, storage boundary and repeatable mirror build | Implemented and merged in PR #18 |
| 6 | 张勇的生活切片 + 两只天鹅 | Direct static source, stable content registries, Data disclosure and no-provider event contracts | Implemented and merged in PR #21 |

All listed batches are implemented. The two philosophy guides are the final
active PR in this merge sequence. Antigravity extended QA remains a follow-up
rather than a merge blocker.

## Visual baseline and evidence

The current local Pages artifact was rendered in the Codex in-app browser at:

- Desktop: `1440 × 900`
- Tablet: `1024 × 768`
- Mobile: `390 × 844`

The Figma page `03 · Baselines & Handoff` contains all 18 accepted fixed-viewport captures. The page `02 · Site Themes & Screens` contains the six theme systems, 12 representative desktop/mobile references, and editable theme anatomy.

Fixed-viewport captures are valid. Full-page capture is not accepted as evidence because the current browser backend repeats or omits sticky and reveal-driven regions while composing a long screenshot. When extended migration review is requested, Antigravity should use deterministic section or anchor captures under matching viewport, font, content, and interaction state.

## The Living Atlas

- **Site / slug / live URL:** The Living Atlas; `THE-LIVING-ATLAS`; <https://tsrat.github.io/My-Website/THE-LIVING-ATLAS/>
- **Source path:** `sites/living-atlas/`; `THE-LIVING-ATLAS/` is the generated Pages mirror.
- **Status:** Public archive hub.
- **Product purpose:** Present TSRat as a living interdisciplinary archive and offer deliberately open-ended Worlds, published sites, knowledge, and index entry points.
- **Primary audience and goal:** Readers encountering the archive; understand its atmosphere and enter a site or topic without reducing the homepage to a portfolio taxonomy.
- **Major routes and navigation:** One static page plus Chinese variant; anchor navigation for Worlds, Index, Knowledge, published Sites, and Now.
- **Current visual direction:** Editorial atlas combining archive numbering, Swiss grid discipline, large serif statements, ivory paper, and cobalt navigation accents.
- **Typography / color / layout:** Noto Serif SC display, Inter UI, Fira Code metadata; `#F2EFE7` surface, `#161616` ink, `#7A756E` stone, `#0047AB` cobalt; desktop 12-column grid.
- **Framework / language / rendering:** Static HTML, CSS, and small ES modules; registry-driven section rendering plus carousel, search, and disclosure behavior.
- **Content/data model:** One bilingual registry drives Worlds, Knowledge, Now, published Sites, Latest, Index, and search metadata. Stable IDs, publication states, and real-link rules follow `web/content-system.md`.
- **State/interactivity:** Auto-rotating featured carousel with previous/next controls, accessible search dialog, keyboard shortcut, and mobile disclosure menu.
- **Build system / deployment:** Copied unchanged by `scripts/build-github-pages.mjs` into the GitHub Pages artifact.
- **Analytics:** No provider. A visible Data entry, no-op adapter, four-event contract and privacy gate are defined in `analytics-standard.md`; no data is stored or transmitted.
- **Tests / CI:** Pages asset validation plus Living Atlas registry/link/language/index tests. Codex runs a scoped browser smoke check; Antigravity owns extended browser and visual QA.
- **Accessibility state:** Correct language declarations, skip link, one `h1`, semantic `main` and `nav`, visible focus, native dialog search, mobile disclosure navigation, and descriptive image alternatives are present.
- **Responsive state:** Desktop and tablet first folds remain coherent. The mobile title is contained; the open menu uses an opaque layer and pushes the hero down instead of mixing with it.
- **Existing Figma:** Shared foundations, Living Atlas theme variables, components, representative desktop/mobile screens, and 3-viewport baselines are in the portfolio Figma file.
- **Classification:** **REFACTOR** — the information architecture and identity are useful, but responsive behavior, navigation, search, and content maintainability require normalization.
- **Target architecture:** Retain a lightweight static site. Introduce accessible shared primitives and an explicit data layer before considering a framework migration.
- **Shared-core adoption:** Focus treatment, skip navigation, content widths, breakpoints, motion preference, search/dialog behavior, and QA conventions.
- **Site-specific theme:** Preserve the ivory editorial atlas, monumental serif typography, cobalt system, asymmetric grid, imagery, and metadata voice.
- **Migration status:** Corrective and content-system batches merged through PR #13. The Data / reusable starter and Worlds ambiguity correction merged through PR #14.
- **Figma URL:** [Portfolio design system](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt); [TSRat Data & Analytics · v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=19-2).
- **Preview / PR URL:** [English review snapshot](https://raw.githack.com/TSRat/My-Website/97b3678ee50f08e19ae6ec3cb27c10c86618a036/THE-LIVING-ATLAS/index.html); [Chinese review snapshot](https://raw.githack.com/TSRat/My-Website/97b3678ee50f08e19ae6ec3cb27c10c86618a036/THE-LIVING-ATLAS/zh.html); [PR #14](https://github.com/TSRat/My-Website/pull/14).
- **Remaining risks:** Small Red Book and WeChat URLs remain unknown and are non-clickable planned states. Article-level Knowledge data does not yet exist. Moving Web Core to a repository-level runtime requires a protected build-map change.

## IVORY ARCHIVE

- **Site / slug / live URL:** IVORY ARCHIVE; `IVORY-ARCHIVE`; <https://tsrat.github.io/My-Website/IVORY-ARCHIVE/>
- **Source path:** `sites/ivory-archive/`, root `app/` route adapters, `public/`, and Pages generation in `scripts/build-github-pages.mjs`; committed `IVORY-ARCHIVE/` is a stale snapshot.
- **Status:** Active daily thought-briefing archive.
- **Product purpose:** Publish five-item Chinese briefings spanning culture, humanities, social science, and feminism.
- **Primary audience and goal:** Readers seeking a curated daily briefing; locate an issue, search its entries, or filter by theme.
- **Major routes and navigation:** Generated archive index plus generated issue detail routes; issue navigation, search, and thematic filters.
- **Current visual direction:** Warm ivory newspaper/archive layout with burgundy rules, restrained botanical imagery, issue numbering, and editorial serif headlines.
- **Typography / color / layout:** Editorial serif headlines, compact sans/mono metadata, warm ivory surfaces, burgundy primary action, green support accent, column-led archive composition.
- **Framework / language / rendering:** React/TypeScript dynamic application plus a custom static Pages renderer generated from the same briefing data.
- **Content/data model:** `sites/ivory-archive/briefings.ts` is the current structured content source.
- **State/interactivity:** Search and taxonomy filters work in the accepted Pages baseline; issue and entry navigation are functional.
- **Build system / deployment:** Root Vinext build for the application; custom Node generation for Pages; GitHub Actions artifact deployment.
- **Analytics:** No provider. `page_viewed`, `search_performed`, `filter_applied`, `briefing_opened`, and `data_entry_opened` are defined by a provider-neutral adapter. It performs no network requests, sets no cookies or persistent storage, collects no identity, and never records raw search text.
- **Tests / CI:** Root build/test/lint plus Pages asset validation and `tests/ivory-renderer-parity.test.mjs`, which validates the five-story content contract, assets, routes, privacy manifest, and dynamic/Pages home data parity.
- **Accessibility state:** Skip link, semantic landmarks, headings, image alternatives, search, and filters are present; keyboard state and result announcements still need targeted testing.
- **Responsive state:** Accepted desktop, tablet, and mobile first folds show no horizontal overflow.
- **Existing Figma:** Ivory theme variables plus editable desktop/mobile Data states and reusable `Site / Ivory Archive / Data Entry` component in `Remaining Sites · Six-Stage Migration v1`.
- **Classification:** **PRESERVE** — the source model, renderer, interaction set, and visual system are healthy.
- **Target architecture:** Keep the structured briefing source and both renderers; add parity checks before shared-component refactors.
- **Shared-core adoption:** Accessibility primitives, focus, filter/search state conventions, citations, image captions, event specification, and screenshot QA.
- **Site-specific theme:** Preserve the newspaper rhythm, botanical restraint, burgundy rule system, archive numbering, and Chinese editorial voice.
- **Migration status:** Six-stage preservation migration implemented on `codex/remaining-sites-six-stage-migration` in Draft PR #15.
- **Figma URL:** [Remaining Sites · Six-Stage Migration v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2).
- **Preview / PR URL:** [Owner-only Sites Preview](https://tsrat-ivory-migration-preview.tsrat.chatgpt.site); [Draft PR #15](https://github.com/TSRat/My-Website/pull/15). Deployment succeeded; public link access needs separate creator approval.
- **Remaining risks:** The stale committed snapshot can mislead maintainers. The parity test covers content, assets, routes, and contracts, not pixel identity. Antigravity extended QA is pending.

## Enheduanna

- **Site / slug / live URL:** Enheduanna / 恩赫杜安娜; `ENHEDUANNA`; <https://tsrat.github.io/My-Website/ENHEDUANNA/>
- **Source path:** Readable source in `sites/enheduanna/`; generated deploy mirror in `ENHEDUANNA/`.
- **Status:** Public long-form historical profile, “Daughters of Time 004”.
- **Product purpose:** Explain Enheduanna as princess, high priestess, author, and contested “first author” while preserving evidence boundaries.
- **Primary audience and goal:** General readers of women’s and literary history; follow the narrative and inspect supporting evidence and sources.
- **Major routes and navigation:** One long page with chapter anchors, full-directory details menu, works, debate, video, sources, and an honest Data / Signals entry.
- **Current visual direction:** Ancient archive meets modern exhibition catalogue; hard borders, paper, cobalt spine, red conflict accents, gold sacred accents, and deliberate dark narrative transitions.
- **Typography / color / layout:** Chinese serif for titles/quotations, sans for reading/UI, condensed archive metadata; paper `#f4eedc`, cobalt `#153a8a`, red `#c83b2c`, ink `#101010`, clay/gold support; asymmetric editorial grids.
- **Framework / language / rendering:** React/TSX/CSS source with a dedicated Vite config; the committed Pages mirror is reproducibly generated with hashed assets.
- **Content/data model:** Content, sources, and repeated structures are encoded in `page.tsx`; deployed data is compiled into the mirror bundle.
- **State/interactivity:** Anchor navigation, details menu, external source links, video embed, and hover/focus treatments.
- **Build system / deployment:** `npm run build:enheduanna` builds into `.site-build/enheduanna/`, validates the compiled entry, and updates `ENHEDUANNA/` without deleting historical bundles. Pages continues to copy that mirror unchanged.
- **Analytics:** The visible Data entry honestly reports provider `none`; the provider-neutral contract defines directory, chapter, source, video, NotebookLM, and Data interactions with explicit privacy gates.
- **Tests / CI:** Targeted tests protect the maintainable build contract, source/mirror public-asset parity, compiled entry, and visible provider-none Data source.
- **Accessibility state:** Semantic landmarks and image alternatives are present; reduced motion exists. A skip link and full keyboard/iframe-title verification remain.
- **Responsive state:** Desktop, 1024px tablet, and 390px mobile smoke checks have no horizontal overflow. The previous tablet overflow was fixed by allowing the hero grid and title to shrink/wrap below 1100px.
- **Existing Figma:** Enheduanna theme variables, editable theme anatomy, representative desktop/mobile screens, shared components, and 3-viewport baselines.
- **Classification:** **REFACTOR** — the source and identity are strong, but reproducibility and responsive behavior block safe maintenance.
- **Target architecture:** Implemented: maintainable source emits the existing mirror without changing its public URL or visual contract.
- **Shared-core adoption:** Focus, skip navigation, responsive constraints, caption/citation semantics, motion accessibility, and source/mirror QA.
- **Site-specific theme:** Preserve the spine, paper/cobalt/red/gold tension, archaeological dossier structure, dark transitions, and evidence labels.
- **Migration status:** All six stages are implemented and merged in PR #17; Stage 5 has a reproducible build and Stage 6 has a provider-none Data entry without invented metrics.
- **Figma URL:** [Remaining Sites · Six-Stage Migration v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2)
- **Preview / PR URL:** [Exact-commit reconstructed preview](https://raw.githack.com/TSRat/My-Website/28b7b8cc91b1cbcec53c0fea0eaf0fac404241bb/ENHEDUANNA/index.html); [PR #17](https://github.com/TSRat/My-Website/pull/17).
- **Remaining risks:** Antigravity still needs the extended deterministic-section visual comparison; chapter-number ordering still needs creator confirmation.

## Hildegard

- **Site / slug / live URL:** Hildegard / 希尔德加德; `HILDEGARD`; <https://tsrat.github.io/My-Website/HILDEGARD/>
- **Source path:** `sites/hildegard/`; `HILDEGARD/` is the generated Pages mirror.
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
- **Analytics:** Provider-neutral runtime contract with no network, cookies, identity, or persistent storage. Events cover chapters, supporting sections, sources, video, and the Data entry.
- **Tests / CI:** Pages asset validation plus site-specific contract, privacy, chapter-preservation, and reduced-motion assertions. Codex performs basic browser smoke; Antigravity owns extended deterministic-section visual QA.
- **Accessibility state:** Skip link, semantic structure, alternatives, and reduced motion are present. Lazy media and contrast should remain part of browser QA.
- **Responsive state:** Accepted first folds at all three viewports show no horizontal overflow. Some lazy images are intentionally pending before scroll.
- **Existing Figma:** Hildegard theme variables, editable theme anatomy, shared components, representative desktop/mobile screens, and 3-viewport baselines.
- **Classification:** **PRESERVE** — the implementation and design system are explicit and maintainable.
- **Target architecture:** Keep the static structure; add narrowly shared accessibility/QA primitives only where they do not disturb chapter templates.
- **Shared-core adoption:** Focus, link validation, media loading checks, captions, citations, motion QA, and section screenshot conventions.
- **Site-specific theme:** Preserve Viriditas Codex, its six templates, manuscript/botanical/cosmic contrast, image-credit language, and narrative pacing.
- **Migration status:** Six-stage implementation completed in the current review branch without replacing Viriditas Codex or changing historical content.
- **Figma URL:** [Remaining Sites · Six-Stage Migration v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2)
- **Preview / PR URL:** [Exact-commit Hildegard preview](https://raw.githack.com/TSRat/My-Website/a8d393eb582d45e2a2a4af533d32ff534fa84721/HILDEGARD/index.html#data); [Draft PR #16](https://github.com/TSRat/My-Website/pull/16).
- **Remaining risks:** Full-page screenshots are unreliable with reveal behavior; section-based visual comparison is required.

## Hypatia

- **Site / slug / live URL:** Hypatia / 希帕蒂娅; `HYPATIA`; <https://tsrat.github.io/My-Website/HYPATIA/>
- **Source path:** `sites/hypatia/index.html` and the CSS/JavaScript/assets actually referenced by it; `HYPATIA/` is the generated Pages mirror.
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
- **Analytics:** Provider-neutral runtime contract with no network, cookies, identity, raw content, or persistent storage. Events cover sections, evidence filters, interactive states, sources, video, and the Data entry.
- **Tests / CI:** Pages validation plus existing workflow smoke checks and new site-specific contract, privacy, and interaction-hook preservation assertions. Codex performs basic browser smoke; Antigravity owns extended deterministic-section visual QA.
- **Accessibility state:** Skip link, landmarks, headings, image alternatives, and focusable navigation are present; lazy media and complete keyboard order still need targeted testing.
- **Responsive state:** Accepted first folds at all three viewports show no horizontal overflow.
- **Existing Figma:** Hypatia theme variables, editable theme anatomy, shared components, representative desktop/mobile screens, and 3-viewport baselines.
- **Classification:** **REFACTOR** — the current entry is maintainable, but historical asset duplication and future component/QA normalization need a scoped pass.
- **Target architecture:** Keep a static editorial implementation while clarifying referenced assets and adding non-destructive tests; do not delete legacy assets without confirmation.
- **Shared-core adoption:** Focus, captions, citations, motion/accessibility checks, lazy-media verification, and section screenshot QA.
- **Site-specific theme:** Preserve the pale scholarly atmosphere, marble/classical framing, azure action language, and source-boundary hierarchy.
- **Migration status:** Six-stage implementation completed in the current review branch without rewriting the historical narrative or replacing the lake-blue identity.
- **Figma URL:** [Remaining Sites · Six-Stage Migration v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2)
- **Preview / PR URL:** [Exact-commit Hypatia preview](https://raw.githack.com/TSRat/My-Website/a8d393eb582d45e2a2a4af533d32ff534fa84721/HYPATIA/index.html#data); [Draft PR #16](https://github.com/TSRat/My-Website/pull/16).
- **Remaining risks:** Unreferenced historical bundles cannot be assumed safe to delete; full-page reveal capture remains unreliable.

## Sartre / 《恶心》导读

- **Site / slug / live URL:** 《恶心》：存在为何令人眩晕; `SARTRE-NAUSEA-GUIDE`; target <https://tsrat.github.io/My-Website/SARTRE-NAUSEA-GUIDE/>.
- **Source path:** `sites/sartre-nausea-guide/`; generated Pages input mirror `SARTRE-NAUSEA-GUIDE/`.
- **Status:** Public interactive philosophy reading guide migrated from the owner’s Sites project.
- **Product purpose:** Help first-time readers enter Sartre’s *Nausea* through plot, people, five “nausea moments”, interpretive layers, quizzes, and 20/45/90-minute reading routes.
- **Primary audience and goal:** Chinese-language first readers; understand the novel’s experience before opening or continuing the text.
- **Major routes and navigation:** One long page with anchored chapters, a mobile menu, location/object/character tabs, argument layers, quiz feedback, and reading-route tabs.
- **Current visual direction:** Warm paper field notes with burgundy emphasis, charcoal-teal evidence sections, numbered cards, a map, and a real chestnut-root image.
- **Typography / color / layout:** Chinese serif display with sans reading/UI; parchment, `#7e2637` burgundy, and `#233034` charcoal teal; editorial two-column desktop reflows to one column on mobile.
- **Framework / language / rendering:** React 19 / Next.js 16 / TypeScript source with `output: "export"` and a committed static mirror.
- **Content/data model:** Editorial copy and interaction data remain in `app/page.tsx`; visual rules remain in `app/globals.css`; the image remains local.
- **State/interactivity:** Reading progress, object/character/argument tabs, quiz answers, mobile navigation, and route selection; tab semantics and keyboard behavior are explicit in the migrated source.
- **Build system / deployment:** Project-local static export; `npm run sync:philosophy-sites` refreshes the committed mirror; the root Pages build copies the mirror without changing the Actions architecture.
- **Analytics:** No provider, storage, or identity collection. Provider-neutral events are documented in `ANALYTICS.md`, including `chapter_opened`, `quiz_answered`, and `reading_route_selected`.
- **Tests / CI:** Project lint, static-export assertions, root Pages build, and asset validation. Codex browser smoke covers one desktop and one narrow state; Antigravity owns full interaction and visual regression.
- **Accessibility state:** Skip link, visible focus, reduced-motion handling, descriptive image alternative, 44px touch targets, and complete tab relationships/keyboard behavior are part of the migrated source.
- **Responsive state:** Original desktop/mobile baselines showed no page-level overflow; the exact review mirror still requires final Codex smoke and Antigravity matrix coverage.
- **Existing Figma:** Theme collection `Theme / Sartre · Nausea Guide`; editable six-stage coverage frame `33:32`, desktop `33:51`, mobile `33:62`.
- **Classification:** **REFACTOR** — the product and identity are strong, while Pages paths and interaction semantics required maintainability/accessibility repair.
- **Target architecture:** Keep a self-contained static interactive guide; do not add a server, database, account, or analytics provider.
- **Shared-core adoption:** Static export/mirror contract, skip/focus/motion rules, semantic tabs, provider-neutral events, exact-commit preview, and section-based visual QA.
- **Site-specific theme:** Preserve the field-note identity, paper/burgundy/charcoal palette, text hierarchy, map/evidence composition, and chestnut-root imagery.
- **Migration status:** Source and Figma migration implemented on `codex/sites-six-stage-import`; immutable preview smoke passed in Draft PR #19.
- **Figma URL:** [Portfolio design system · Sartre frame](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=33-32).
- **Preview / PR URL:** [Exact-commit preview](https://raw.githack.com/TSRat/My-Website/a0b7bcd/SARTRE-NAUSEA-GUIDE/index.html); [PR #19](https://github.com/TSRat/My-Website/pull/19).
- **Remaining risks:** The chestnut-root image’s source/license still needs creator confirmation; comprehensive keyboard, persistence, multi-browser, and overlay review remains Antigravity QA.

## Existentialism / 《存在主义是一种人道主义》导读

- **Site / slug / live URL:** 存在主义是一种人道主义：初学者导读; `EXISTENTIALISM-HUMANISM-GUIDE`; target <https://tsrat.github.io/My-Website/EXISTENTIALISM-HUMANISM-GUIDE/>.
- **Source path:** `sites/existentialism-humanism-guide/`; generated Pages input mirror `EXISTENTIALISM-HUMANISM-GUIDE/`.
- **Status:** Editorial argument map migrated from an owner-only Sites project into the public portfolio at the owner’s request.
- **Product purpose:** Explain the 1945 lecture through existence-before-essence, freedom/responsibility, situation, action, humanism, misconceptions, and a glossary.
- **Primary audience and goal:** Chinese-language beginners; follow the argument in order and test it against the student dilemma.
- **Major routes and navigation:** One long anchored page, two dilemma choices with live feedback, and eight native `details/summary` misconception disclosures.
- **Current visual direction:** Warm ivory publication design with black type, brick-red accents, fine rules, registration marks, and an oversized question mark.
- **Typography / color / layout:** Heavy editorial sans/serif contrast, warm ivory, black, and brick red; publication grid on desktop and a linear mobile reading flow.
- **Framework / language / rendering:** React 19 / Next.js 16 / TypeScript source with `output: "export"` and a committed static mirror.
- **Content/data model:** Editorial copy and local interaction state in `app/page.tsx`; the complete visual system and responsive rules in `app/globals.css`.
- **State/interactivity:** Two `aria-pressed` dilemma choices with `aria-live` feedback and native disclosure states; no server state.
- **Build system / deployment:** Project-local static export; the shared mirror sync command and root Pages copier preserve the existing deployment workflow.
- **Analytics:** No provider, storage, or identity collection. `ANALYTICS.md` specifies only provider-neutral `argument_opened`, `dilemma_selected`, and `misconception_opened`-style events.
- **Tests / CI:** Project lint and three static-export assertions plus root Pages build/asset validation.
- **Accessibility state:** Correct language, one `h1`, valid labelled sections, native disclosures, stateful dilemma controls, focus treatment, and a newly added skip link.
- **Responsive state:** The source design is documented for desktop/mobile; exact review mirror smoke and Antigravity responsive comparison remain.
- **Existing Figma:** Theme collection `Theme / Existentialism Guide`; editable six-stage coverage frame `33:73`, desktop `33:92`, mobile `33:103`.
- **Classification:** **PRESERVE** — the architecture, semantics, and visual identity are healthy; only export/path cleanup and a skip link are approved.
- **Target architecture:** Keep a minimal static editorial application with local-only interaction state and native disclosure controls.
- **Shared-core adoption:** Static export/mirror contract, skip/focus/motion rules, provider-neutral events, exact-commit preview, and section-based visual QA.
- **Site-specific theme:** Preserve the black/red/ivory publication composition, question-mark diagram, chapter rhythm, and argumentative voice.
- **Migration status:** Source and Figma migration implemented on `codex/sites-six-stage-import`; immutable preview smoke passed in Draft PR #19.
- **Figma URL:** [Portfolio design system · Existentialism frame](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=33-73).
- **Preview / PR URL:** [Exact-commit preview](https://raw.githack.com/TSRat/My-Website/a0b7bcd/EXISTENTIALISM-HUMANISM-GUIDE/index.html); [PR #19](https://github.com/TSRat/My-Website/pull/19).
- **Remaining risks:** The site currently lacks an explicit source list for historical/interpretive claims; comprehensive responsive, keyboard, console/network, and overlay review remains Antigravity QA.

## Melromarc Sisters

- **Site / slug / live URL:** Melromarc Sisters; `MELROMARC-SISTERS`; <https://tsrat.github.io/My-Website/MELROMARC-SISTERS/>
- **Source path:** Maintained source in `sites/melromarc-sisters/`; generated Pages mirror in `MELROMARC-SISTERS/`.
- **Status:** Public fan-created multi-story archive.
- **Product purpose:** Explore multiple possible lives and critical story branches for Malty and Melty while separating canon reference from fan-created premise.
- **Primary audience and goal:** Readers familiar with the source franchise; enter the story archive and open a specific or random branch.
- **Major routes and navigation:** One generated static entry with story navigation, random-story dialog, and character/story sections.
- **Current visual direction:** Midnight navy story archive with red/blue sister polarity, gold details, anime character artwork, and cinematic framing.
- **Typography / color / layout:** Serif story display, compact archive metadata, dark navy surfaces, red and sister-blue accents, warm gold support; symmetrical desktop hero becomes a layered mobile composition.
- **Framework / language / rendering:** React 19, TypeScript, Vite, client-rendered static application with local images.
- **Content/data model:** `content.ts` owns 13 structured stories, 18 gallery records, six filter labels, and five fate-map stages.
- **State/interactivity:** Search, filters, random story, saved stories, reader, Escape/backdrop close, scroll locking, fate-map buttons, mobile navigation, and gallery links are readable source.
- **Build system / deployment:** `npm run build:melromarc` uses the shared maintainable-site builder to update the committed mirror; Pages still copies that mirror unchanged.
- **Analytics:** No provider in the deployed artifact. A non-deployed provider-neutral proposal separates analytics privacy from the existing functional `melromarc-saved-stories` localStorage key and defines search-length, filter, random/story/path, save, gallery-source, and Data entry events.
- **Tests / CI:** Targeted tests cover build/source contracts, 13 story IDs, five stages, functional storage, source/mirror asset equality, absence of old runtime markers from the active entry, and retained rollback-bundle hashes.
- **Accessibility state:** Landmarks, one `h1`, button names, and image alternatives are present. Skip navigation, dialog focus trapping/return, and keyboard traversal need verification.
- **Responsive state:** Accepted first folds at all three viewports show no horizontal overflow.
- **Existing Figma:** Melromarc theme variables, editable theme anatomy, shared components, representative desktop/mobile screens, and 3-viewport baselines.
- **Classification:** **REBUILD** — original Sites source export was unavailable, so the accepted artifact was reconstructed as a maintainable project.
- **Target architecture:** Implemented React/Vite source plus committed uppercase Pages mirror, preserving the URL, art direction, content boundaries, and key interaction contracts.
- **Shared-core adoption:** Accessible dialog, focus return, skip navigation, routing/state conventions, asset validation, analytics event contract, and screenshot QA.
- **Site-specific theme:** Preserve the midnight archive, sister color polarity, character artwork, critical framing, and fan/canon distinctions.
- **Migration status:** All six stages are implemented and merged in PR #18.
- **Figma URL:** [Remaining Sites · Six-Stage Migration v1](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2)
- **Preview / PR URL:** [Exact-commit reconstructed preview](https://raw.githack.com/TSRat/My-Website/edb5cd20374147c8738d4340374c7b90e930bede/MELROMARC-SISTERS/index.html); [PR #18](https://github.com/TSRat/My-Website/pull/18).
- **Remaining risks:** Client rendering does not reproduce former Vinext RSC/SSR metadata; dialog focus trap/return and full visual comparison remain for Antigravity.

## 张勇的生活切片

- **Site / slug / target URL:** 张勇的生活切片; `ZHANGYONG-PORTRAIT`; <https://tsrat.github.io/My-Website/ZHANGYONG-PORTRAIT/>.
- **Source path:** `sites/zhangyong-portrait/`; directly maintained HTML, CSS, ES modules, content/site manifests and local assets. `ZHANGYONG-PORTRAIT/` is the generated deploy mirror.
- **Product purpose:** Present an open portrait through identity, body, care, relationships, reading and daily recovery without claiming a complete biography.
- **Primary audience and goal:** Readers entering an intimate editorial portrait; understand its framing without mistaking interaction interpretation for objective ranking.
- **Major route and navigation:** One long page with stable section anchors and a visible Data/privacy entry.
- **Visual direction:** Dark cyber-editorial observatory with mint, orange and violet signals, large system typography, image windows and a relationship-orbit diagram.
- **Framework / rendering:** Direct static HTML/CSS plus small ES modules; no Sites, Vinext or React runtime.
- **Content/data model:** Stable section and asset records in `content-registry.js`; narrative and privacy boundaries in `CONTENT.md`.
- **Analytics:** Provider none, no browser storage or external delivery; provider-neutral chapter/Data events only.
- **Accessibility and responsive state:** Skip link, one `h1`, visible focus and reduced motion are retained; desktop and narrow browser smoke remain required before delivery.
- **Classification:** **PRESERVE** — the public design/content baseline is retained while the implementation source and required Data disclosure change.
- **Figma URL:** [张勇的生活切片 · migration coverage](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=36-30).
- **Preview / PR URL:** [Exact-commit preview](https://raw.githack.com/TSRat/My-Website/6e8a19a/ZHANGYONG-PORTRAIT/index.html); [Draft PR #21](https://github.com/TSRat/My-Website/pull/21).
- **Remaining risks:** Upstream asset licensing notes were not available; creator confirmation is required before reuse outside the project. Antigravity extended section comparison remains pending.

## 两只天鹅

- **Site / slug / target URL:** 两只天鹅：Malty 与 Melty; `MALTY-MELTY-CHILDHOOD`; <https://tsrat.github.io/My-Website/MALTY-MELTY-CHILDHOOD/>.
- **Source path:** `sites/malty-melty-childhood/`; directly maintained HTML, CSS, ES modules, content/site manifests and ten local chapter illustrations. `MALTY-MELTY-CHILDHOOD/` is the generated deploy mirror.
- **Product purpose:** Present an eleven-chapter visual novel about responsibility, sisters and rebuilding a relationship.
- **Primary audience and goal:** Readers familiar with the source characters; enter at chapter one or another chapter, inspect both memory perspectives and resume locally.
- **Major route and navigation:** Static landing sections plus a full-screen dialog reader, chapter drawer, previous/next, autoplay, local resume and ending state.
- **Visual direction:** Illustrated-book composition with warm paper, wine red, sister blue, shared violet and muted gold; full-bleed chapter art.
- **Framework / rendering:** Direct static HTML/CSS and ES modules; the exact Sites source commit was migrated without keeping Vinext, Next.js or React in production.
- **Content/data model:** `content-registry.js` owns eleven chapter IDs, all beats, dual memories, four landing acts and the canon/fan/branch/creator boundary.
- **Analytics and storage:** Provider none and no external delivery. The only browser storage is numeric local reading progress under `two-swans-progress`.
- **Accessibility and responsive state:** Skip link, focus containment/return, Escape, arrow controls, native buttons and responsive dialog styles are implemented; complete keyboard and visual QA remains delegated.
- **Classification:** **REFACTOR** — visual identity and behavior are preserved while the framework implementation is replaced by the shared static maintenance model.
- **Figma URL:** [Two Swans · migration coverage](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=36-76).
- **Preview / PR URL:** [Exact-commit preview](https://raw.githack.com/TSRat/My-Website/6e8a19a/MALTY-MELTY-CHILDHOOD/index.html); [Draft PR #21](https://github.com/TSRat/My-Website/pull/21).
- **Remaining risks:** Source image-generation/licensing notes were absent; exact browser comparison to the access-gated production deployment and Antigravity full reader QA remain pending.

## Migration queue

Living Atlas is the merged reference implementation through PR #14. IVORY,
Hypatia, Hildegard, Enheduanna, and Melromarc have merged six-stage
implementations through PRs #15–#18. 张勇的生活切片 and 两只天鹅 are the
current direct-static migration batch on `codex/living-atlas-static-sites`.
