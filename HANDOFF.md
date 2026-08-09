# Repository handoff

## 2026-08-09: Portfolio-wide TSRat logo navigation

### Current target

Ensure the public Website Archive and every website in the 11-project registry
show the creator's TSRat logo in their header or footer and make that logo a
link to The Living Atlas. Logos on dark footer surfaces must render as white
silhouettes without changing each site's existing identity, routes, navigation,
or deployment architecture.

### Completed

- Audited the root Website Archive and all 11 registered website packages,
  including the English and Chinese Living Atlas homepages and both public
  Zhang Yong routes.
- Added the linked logo to the root Website Archive footer as well as every
  registered website.
- Made the existing Living Atlas header logos self-link to the Living Atlas
  homepage.
- Wrapped the existing footer logos in Ivory Archive, Enheduanna, La Malinche,
  and Hypatia with Living Atlas links.
- Added restrained footer logo links to Hildegard, both Sartre guides,
  Melromarc Sisters, both Zhang Yong routes, and Two Swans.
- Reused each site's existing local logo when available. Sites without a local
  copy reference `../THE-LIVING-ATLAS/tsrat-logo.png`, avoiding duplicated
  binaries and preserving the public subdirectory architecture.
- Applied `brightness(0) invert(1)` only on dark surfaces. Living Atlas,
  Enheduanna, and the light Sartre footer retain the original logo colors.
- Added `tests/portfolio-logo-navigation.test.mjs` to protect all registered
  surfaces, the generated Ivory renderer, link targets, and dark-surface
  silhouette behavior.

### Verification

- `node --test tests/portfolio-logo-navigation.test.mjs`: passed, 2/2.
- `npm run build:pages`: passed; refreshed the 10 committed static mirrors and
  generated Ivory Archive in the Pages artifact.
- `npm run validate:pages`: passed; 1006 local references across 103 HTML/CSS
  files.
- Targeted portfolio and maintenance tests: passed, 3/3.
- Browser basic smoke passed on all 14 audited public surfaces at `1800 × 933`
  and `390 × 844`: every logo loaded, remained within the viewport, had a
  Living Atlas destination, and used the white filter where required.
- Antigravity extended visual, accessibility, interaction, and cross-browser QA:
  pending.

### Important decisions

- This is a bounded correction to existing accepted interfaces, not a redesign;
  no Figma or new Antigravity creative package is required for Codex Stage 2.
- Header logos that already serve as in-page home controls were preserved unless
  the footer could satisfy the new cross-site navigation requirement.
- The root Website Archive remains the registry shell rather than a twelfth
  project, but it is included as a public surface under the creator's literal
  “all websites” request.

### Files and Git state

- Authoritative source: the affected `sites/*` entrypoints and styles,
  `scripts/build-github-pages.mjs`, and
  `tests/portfolio-logo-navigation.test.mjs`.
- Generated mirrors: `ENHEDUANNA/`, `EXISTENTIALISM-HUMANISM-GUIDE/`,
  `HILDEGARD/`, `HYPATIA/`, `LA-MALINCHE/`,
  `MALTY-MELTY-CHILDHOOD/`, `MELROMARC-SISTERS/`,
  `SARTRE-NAUSEA-GUIDE/`, `THE-LIVING-ATLAS/`, and
  `ZHANGYONG-PORTRAIT/`.
- Branch: `codex/portfolio-logo-navigation` from `origin/main` at `c3f0f15`.
- At the time of this handoff entry, the scoped implementation and generated
  mirrors are pending their task commit; no unrelated dirty-worktree changes
  are present in the isolated worktree.
- Next step: commit, push, create a draft PR, open the exact-commit preview, and
  hand the preview to Antigravity for Stage 3 validation. Merge still requires
  explicit creator authorization.

## 2026-07-29: Malinche 70-screen last-four-chapter rebuild

### Current target

Expand only La Malinche scenes `35–69` while preserving scenes `00–34`, the
existing public path, direct video theater, portfolio surfaces, and Pages
deployment architecture.

### Completed

- The authoritative source now contains 70 scenes and four expanded final
  chapters covering Tenochtitlan, the siege, Malinche’s colonial afterlife, and
  the later construction of the traitor image.
- The generated `LA-MALINCHE/` mirror, project manifest, registry note, product
  specification, Figma handoff, and targeted readiness test are synchronized.
- Figma V6:
  <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=17-2>.

### Delivery state

- Branch: `codex/malinche-last-four-chapters`.
- `build:malinche`, targeted readiness tests, 11-site validation, full Pages
  build, and 703-reference Pages validation passed.
- Desktop browser smoke passed for the rebuilt chapter gates, image-led
  monuments scene, and final responsibility ledger. The automated narrow
  screenshot was black in the current Chrome environment, so narrow visual QA
  remains pending rather than being reported as passed.
- The full Pages build regenerated unrelated Next.js mirror hashes; those
  changes are deliberately excluded from the scoped Malinche commit and PR.
- Implementation commit: `58eb1cc`.
- Draft PR: <https://github.com/TSRat/My-Website/pull/36>.
- Exact implementation preview:
  <https://raw.githack.com/TSRat/My-Website/58eb1cc/LA-MALINCHE/index.html>.
- Antigravity extended QA remains pending.

## 2026-07-29: Malinche archive cover and carousel-frame correction

### Current target

Use the creator's formal Malinche cover on the parent Website Archive card and
make the La Malinche Featured World slide occupy the same image frame as the
other three `Daughters of Time` entries.

### Completed

- The La Malinche root card now reads `assets/cover-green.webp`, the existing
  optimized derivative of `Women Story/Malinche/封面2.png`.
- The cover is limited to the parent Website Archive card. The Malinche article
  and Living Atlas carousel continue to use the transparent cut-out.
- Living Atlas English and Chinese now place all four portraits in one shared
  square `.featured-portrait` frame with `object-fit: contain`.
- Removed Malinche-only desktop and mobile maximum-height rules. The source
  figure keeps its `1065 × 1476` proportion and bottom alignment without
  stretching or cropping.
- Updated source, generated Living Atlas mirror, asset documentation, and
  targeted tests. The full Pages build's unrelated Next.js mirror churn was
  removed from the review scope.

### Verification

- Targeted source / maintenance tests: passed — 13/13.
- `npm run build:living-atlas`: passed.
- `npm run build:malinche`: passed.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed — 650 local references across 76 HTML/CSS
  files.
- `npm run validate:sites`: passed — 11 packages.
- Browser basic smoke:
  - root archive loaded the `2560 × 1440` green cover in the Malinche card;
  - Living Atlas desktop measured Hypatia and Malinche at the same
    `389.67 × 389.67px` frame;
  - Living Atlas `390 × 844` measured Malinche at `335 × 335px`;
  - the transparent figure remained `contain`, and no horizontal overflow was
    found.
- Antigravity extended cross-browser and visual-regression QA: pending.

### Git state

- Branch: `codex/sync-malinche-series`.
- Implementation commit: `333063b`.
- Pull Request: <https://github.com/TSRat/My-Website/pull/30>.
- Exact Living Atlas preview:
  <https://raw.githack.com/TSRat/My-Website/333063b/THE-LIVING-ATLAS/zh.html>.
- The generated root archive was smoke-checked locally; it has no independently
  committed `docs/` preview because `docs/` is the ignored Pages artifact.
- Merge: not authorized and not performed.

## 2026-07-28: Daughters of Time 003 cross-site sync

### Current target

Synchronize the published La Malinche story into the portfolio interfaces:
Living Atlas Featured World plus the footer series navigation of all four
`Daughters of Time` sites.

### Completed

- Living Atlas English / Chinese carousel now contains all four stories in
  chronological series order.
- Added the approved short Malinche line and reused the real transparent
  cut-out at its intrinsic ratio.
- Added identity-preserving cross-story navigation to Hypatia, Hildegard,
  La Malinche, and Enheduanna.
- Updated source packages, generated mirrors, targeted regression tests, and
  every affected site handoff.
- The Figma sources remain the existing Living Atlas content-system frame,
  historical-site frame, and La Malinche V5; this was a small synchronization
  of established components, not a new visual direction.

### Verification

- Targeted tests: Passed — 18/18.
- Full repository tests after `npm run build`: Passed — 32/32.
- Five site builds: Passed.
- `npm run build:pages`: Passed.
- `npm run validate:pages`: Passed — 650 references across 76 HTML/CSS files.
- `npm run validate:sites`: Passed — 11 packages.
- `npm run lint`: Passed with 0 errors and 24 pre-existing warnings.
- Browser basic smoke: Living Atlas `1440 × 900` and `390 × 844`; four site
  footers at `390 × 844`; no broken primary assets or horizontal overflow.
- Antigravity extended QA: pending.

### Git state

- Branch: `codex/sync-malinche-series`.
- Implementation commit: `c6de2ba4fced321ebf26fd9cd57c89616149ec0e`.
- Exact Living Atlas preview:
  <https://raw.githack.com/TSRat/My-Website/c6de2ba4fced321ebf26fd9cd57c89616149ec0e/THE-LIVING-ATLAS/zh.html>.
- Pull Request: <https://github.com/TSRat/My-Website/pull/30>.
- Merge: not authorized and not performed.
- The unrelated dirty main worktree remained untouched.

## 2026-07-28: La Malinche approved 52-screen chronology

### Current target

Continue the existing La Malinche rebuild from the approved screen plan:
preserve Malintzin's perspective through Chapter 2, introduce Spain through a
visible narrative hinge, and explain Veracruz, Tlaxcala, and Cholula for readers
with no prior Mesoamerican-history knowledge.

### Completed

- Expanded `时间的女儿 · 003` to 52 consecutive numbered scenes (`00`–`51`).
- Added the approved Chapter 1 / 2 historical foundations, the torn Chapter
  2 → 3 transition, the expanded Spanish background, and the revised
  Veracruz–Tlaxcala–Cholula sequence.
- Added a credited modern Cholula archaeological photograph and retained a
  separate evidence-qualified massacre scene.
- Corrected mobile title containment, especially “一个人，三个名字。”, while
  preserving the proportional hero cut-out and the top / bottom TSRat marks.
- Updated Figma V5:
  <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=16-2>.

### Verification

- `npm run build:malinche`: passed.
- `node --check sites/la-malinche/assets/site.js`: passed.
- `node --test tests/malinche-readiness.test.mjs`: passed — 2/2.
- `npm run validate:sites`: passed — 11 packages.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed — 560 local references across 67 HTML/CSS
  files.
- Chrome desktop and `390 × 844` device-metrics smoke passed for the changed
  sequence; no title overflow or document-level horizontal overflow remained.
- Exact-commit preview confirmed 52 scenes, the Cholula asset, hero ratio, and
  both TSRat marks.
- Antigravity extended route, keyboard, multi-browser, and visual QA: pending.

### Delivery state

- Branch: `codex/site-la-malinche`.
- Implementation: `697dd53878cfd93ee59211558ed2c255f85f9718`.
- Exact implementation preview:
  <https://raw.githack.com/TSRat/My-Website/697dd53878cfd93ee59211558ed2c255f85f9718/LA-MALINCHE/index.html>.
- Pull Request: <https://github.com/TSRat/My-Website/pull/28>.
- Merge: not authorized and not performed.

### Remaining

- Confirm authorization before reusing project-library images outside this
  site.
- Review PR #28; run Antigravity extended QA if comprehensive overlay,
  keyboard, multi-browser, and full-route comparison is desired.

## 2026-07-27: La Malinche Spain and siege expansion

### Current target

Respond to creator browser review by adding beginner-readable Spanish context,
expanding the occupation and siege narrative, prioritizing selected
`Women Story/Malinche/photo` imagery, and fixing spacing / alignment defects
without flattening the site's varied visual language.

### Completed

- Expanded `时间的女儿 · 003` from 33 to 41 numbered scenes.
- Added three Spanish-background scenes and eight event-linked Chapter 5 / 6
  scenes covering occupation, Toxcatl, failed mediation, retreat, smallpox,
  lake control, siege mechanics, resistance, and the city's fall.
- Added thirteen optimized project-library visuals / motifs with explicit
  later-depiction, film-still, reconstruction, or authorization qualifications.
- Corrected display spacing, image proportions, reveal-transform alignment, and
  the last two-character mobile title ending.
- Preserved the two direct video players and did not reuse video-cover imagery.
- Reused the existing TSRat identity mark in the top navigation and footer.
- Added a non-destructive editable Figma V4 key-screen catalogue:
  <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=14-2>.

### Verification

- `node --check sites/la-malinche/assets/site.js`: passed.
- `node --test tests/malinche-readiness.test.mjs`: passed — 2/2.
- `npm run build:malinche`: passed.
- `npm run validate:sites`: passed — 11 packages.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed — 557 local references across 67 HTML/CSS files.
- `npm run lint`: passed with 0 errors and 24 existing warnings in Enheduanna
  and the committed Hypatia bundle.
- Codex in-app browser layout smoke passed at `1782 × 864` and `390 × 844`:
  41 scenes, no document overflow, no broken images after lazy-load traversal,
  no visible title / copy collision, and preserved hero ratio.
- Chrome / Computer Use follow-up confirmed the TSRat mark in the fixed header
  and closing footer at `1800 × 928`; both loaded at their natural ratio with
  zero document overflow.
- Antigravity extended route, keyboard, multi-browser, and visual QA: pending.

### Delivery state

- Branch: `codex/site-la-malinche`.
- Implementation: `0da661b`.
- Exact implementation preview:
  <https://raw.githack.com/TSRat/My-Website/0da661b/LA-MALINCHE/index.html>.
- Pull Request: <https://github.com/TSRat/My-Website/pull/26>.
- Merge: not authorized and not performed.

### Remaining

- Confirm authorization before reusing selected project-library images outside
  this site.
- Review PR #26; run Antigravity extended QA if comprehensive overlay,
  keyboard, and multi-browser comparison is desired.

## 2026-07-27: La Malinche beginner-first narrative expansion

### Current target

Respond to creator browser review by making `时间的女儿 · 003` understandable
without prior knowledge, correcting the hero and title-wrap defects, and giving
the Spanish landing, Tlaxcala, and Cholula enough independent narrative space.

### Completed

- Expanded the site from 30 to 33 numbered scenes.
- Added a first-time-reader primer and a standalone Spanish-landing scene.
- Rebuilt Tlaxcala as two scenes: polity and pressure first, then the path from
  resistance through translation and negotiation to alliance.
- Rebuilt Cholula as two scenes: sacred / route context first, then massacre,
  conflicting testimony, and the boundary between interpreter and commander.
- Added four credited, locally optimized public-domain assets: landing,
  Tlaxcala map, Moctezuma II, and Cortés.
- Corrected `波通昌` to `波顿查恩`, preserved the hero's intrinsic ratio,
  removed display-title orphans at the checked viewports, and standardized
  display-to-copy spacing without flattening scene variety.
- Updated source, generated mirror, registry row, target documentation,
  readiness test, and non-destructive Figma v3:
  <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=12-13>.

### Verification

- `node --check sites/la-malinche/assets/site.js`: passed.
- `node --test tests/malinche-readiness.test.mjs`: passed — 2/2.
- `npm run build:malinche`: passed.
- `npm run validate:sites`: passed — 11 maintenance packages.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed — 541 local references across 67 HTML/CSS files.
- `npm run lint`: passed with 0 errors and 24 existing warnings in Enheduanna
  and the committed Hypatia bundle.
- Codex in-app browser layout audit passed at `1782 × 864`, `1440 × 900`,
  `1024 × 768`, and `390 × 844`; visual smoke covered the changed narrative
  sequence at desktop and mobile widths.
- Antigravity extended route, keyboard, multi-browser, and visual QA: pending.

### Delivery state

- Branch: `codex/site-la-malinche`.
- Pre-refinement head: `b7d21fb`.
- Refinement implementation: `e629f30`.
- Verified implementation preview:
  <https://raw.githack.com/TSRat/My-Website/e629f30/LA-MALINCHE/index.html>.
- Pull Request: <https://github.com/TSRat/My-Website/pull/26>.
- Merge: not authorized and not performed.

### Remaining

- Review PR #26; run Antigravity extended QA if desired.

## 2026-07-27: La Malinche differentiated visual rebuild

### Current target

Rebuild `时间的女儿 · 003` so its thirty scenes use materially different
compositions, the supplied monochrome figure becomes a transparent hero, larger
archival images support the narrative, and the two Malinche videos display
directly without reusing their covers elsewhere.

### Completed

- Added `sites/la-malinche/` as the authoritative direct-static source and
  `LA-MALINCHE/` as its generated deploy mirror.
- Registered the site in the authoritative README project table, shared
  discovery control plane, generated archive hub and The Living Atlas.
- Rebuilt all 30 scenes across eight chapters with cut-out poster, archival
  walls, route console, translation seam, full-screen 1524 map, video theater,
  red `malinchismo` rupture, rereading gallery, and final reflection.
- Added four credited public-domain archive images and two direct Bilibili
  players; removed all production references to both legacy cover WebPs.
- Updated the dedicated editable Figma design source with a non-destructive v2:
  <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=9-2>.
- Updated the series number, registry entry, project table, config, manifest,
  tests, documentation, source, and generated mirrors to `003`.
- Preserved the existing workflow, public paths, other site identities and the
  user’s separate dirty worktree.

### Verification

- `npm run validate:sites`: passed — 11 maintenance packages.
- `npm run build:malinche`: passed — source and mirror rebuilt.
- `node --test tests/malinche-readiness.test.mjs tests/site-maintenance-structure.test.mjs`:
  passed — 3/3.
- `npm run build:pages`: passed — complete multi-site artifact generated.
- `npm run validate:pages`: passed — 537 local references across 67 HTML/CSS files.
- `npm run lint`: passed with 0 errors and 24 existing warnings in Enheduanna
  `<img>` usage and the committed Hypatia bundle.
- JavaScript syntax checks and `git diff --check`: passed.
- Codex in-app browser smoke: passed at `1440 × 900` and `390 × 844`;
  no horizontal overflow, broken loaded images or console warnings/errors.
- Interactions checked: name lens, route map, and mobile chapter disclosure.
- Visual smoke checked the desktop and mobile hero, archival wall, and direct
  video theater.
- Antigravity extended route, keyboard, multi-browser and visual QA: pending.

### Delivery state

- Branch: `codex/site-la-malinche`.
- Redesign implementation commit: `20773ed`.
- Figma v2: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=9-2>.
- Verified exact-commit preview:
  <https://raw.githack.com/TSRat/My-Website/fe85f8a5b702d4d9ce467112b0ec6a8229c98528/LA-MALINCHE/index.html>.
- Pull Request: <https://github.com/TSRat/My-Website/pull/26>.
- Preview status: remote desktop and mobile load, 30-screen DOM, cut-out hero,
  four archive assets, two players, no cover references, no overflow, clean
  console and name-lens interaction passed.
- Merge: not authorized and not performed.

### Remaining

- Review the verified exact-commit preview and PR #26.
- Add an external scholarly bibliography only if the creator wants the site to
  make claims beyond the supplied manuscript and subtitle transcripts.
- Antigravity extended QA remains a follow-up.

## 2026-07-25: Philosophy guides integrated into the ten-site build

### Current target

Resolve PR #19 against the merged maintenance-platform work, make the Sartre
and Existentialism guides first-class `sites/<site-id>/` packages, and merge all
authorized website migration PRs without touching the user's active worktree.

### Completed

- Added shared `site.config.json` and deployable manifests for both philosophy
  guides.
- Added the `next-static` adapter to the shared site discovery and build
  control plane.
- Replaced the old hard-coded Pages entries with the ten-site config registry.
- Registered both guides in the Living Atlas with unique archive numbers and
  preserved the entries added by PR #21.
- Rebuilt all nine deploy mirrors and the complete Pages artifact.

### Verification

- `npm run validate:sites`: passed — 10/10 maintenance packages.
- `npm run build:sites`: passed — nine deploy mirrors rebuilt.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed — 489 local references across 63 HTML/CSS files.
- `node --test tests/*.test.mjs`: passed — 26/26.
- Both project-local `npm test`: passed — 3/3 each.
- Root and both project-local lint commands: passed with 0 errors; root retains
  24 existing generated-bundle / `<img>` warnings.
- `git diff --check`: passed.
- Browser basic smoke on exact review commit `63a17bb`: passed at 1440 × 900
  for both pages; expected title and `h1`, semantic `main`, no broken images,
  no horizontal overflow, and no console or request failures.
- Antigravity extended QA: pending.

### Delivery state

- Branch: `codex/sites-six-stage-import`
- Integration commit: `a0b7bcd`
- Pull Request: <https://github.com/TSRat/My-Website/pull/19>
- PR #21: merged as `c0de306a377c610af73c60ac733b30396cfab504`.
- Original user worktree: untouched.

### Remaining

- Mark PR #19 ready and merge it.
- Asset provenance and extended Antigravity review remain creator follow-ups.

## 2026-07-25: Six-site maintenance structure unification

### Current target

检查六个公开网站是否采用同一套实现与维护思路，并把维护目录统一为
The Living Atlas 可复用的站点包结构，同时保留各站点身份、适合自身的
渲染技术、公开 URL 和 GitHub Actions Pages 架构。

### Completed

- 六个权威维护根统一为 `sites/<site-id>/`。
- 每站统一包含 `site.config.json`、`CONTENT.md`、`DESIGN.md`、
  `TECH.md`、`HANDOFF.md` 和站点特定源码 / 资源。
- `README.md` 继续作为唯一权威项目表；每站配置只承担技术构建契约，
  不创建竞争 registry。
- 新增统一发现、结构校验与站点构建控制面：
  `scripts/site-projects.mjs`、`scripts/validate-site-structure.mjs`、
  `scripts/build-site.mjs`。
- Living Atlas、Hypatia、Hildegard 使用 direct-static adapter；
  Enheduanna、Melromarc 使用 Vite adapter；IVORY 保留 Vinext +
  Pages 双渲染 adapter。
- 五个大写公开目录统一为生成的 deploy mirror；维护 Markdown 与
  `site.config.json` 不再进入直接静态发布镜像。
- IVORY 的内容与 UI 实现迁入 `sites/ivory-archive/`；根 `app/` 仅保留
  Vinext 路由适配器。
- `scripts/build-github-pages.mjs` 从六个配置发现站点、刷新镜像并生成
  Pages，不再维护硬编码站点列表。
- 所有 manifest、targeted tests、组合审计、平台标准与项目技术文档已
  指向统一维护路径。

### Important decisions

- “完全统一”指维护入口、文档、配置、manifest、发现、验证、构建、
  镜像与 Pages 发布契约统一；不强迫六站使用同一框架或同一 UI。
- 现有 Figma 文件仍是六阶段设计来源；本批次没有视觉 redesign，
  因此复用既有 frame，不制造重复设计稿。
- 大写目录、公开 slug、相对资源路径、Actions artifact 部署和历史
  rollback bundle 均保留。

### Verification

- `npm run validate:sites`: passed — 6/6 maintenance packages.
- `npm run build:sites`: passed — 3 direct-static + 2 Vite mirrors rebuilt.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed — 371 references across 46 HTML/CSS files.
- `npm test`: passed — Vinext artifact plus 22/22 Node tests.
- `npm run lint`: passed with 0 errors and 24 existing generated-bundle /
  `<img>` warnings.
- Browser basic smoke: all six public entries loaded, correct `h1`, no broken
  images, and no horizontal overflow.
- Antigravity extended visual/accessibility matrix: intentionally not run.

### Delivery state

- Branch: `codex/unify-site-maintenance`
- Base: `636c198`
- Implementation commit: `5fe5e06`
- Push: completed.
- Draft PR: <https://github.com/TSRat/My-Website/pull/20>
- Exact-commit Preview:
  <https://raw.githack.com/TSRat/My-Website/5fe5e06/>
- Preview status: hub and all six sites passed remote basic browser smoke.
- Merge: not authorized and not performed.

### Remaining

- Review the Pull Request and exact-commit previews after publication.
- Run Antigravity only if an extended multi-browser or section-overlay audit is
  desired; no intentional visible change exists in this batch.

## 2026-07-25: IVORY ARCHIVE six-stage migration

### Current target

按照组合级六阶段标准迁移 IVORY ARCHIVE，同时保留既有编辑身份、双渲染架构、公开路径和 GitHub Pages workflow。

### Completed

- Product / UX：保留五则日刊、搜索、筛选、日期路由和来源结构。
- Visual：只新增延续象牙纸、酒红和森林绿语言的 Data 区块。
- Figma：`Remaining Sites · Six-Stage Migration v1` 新增 IVORY 桌面 / 移动状态和可复用 Data 组件。
- Prototype / QA：本地 Pages 桌面与 390px Data 流程 smoke 通过。
- Production：动态和 Pages 渲染器均加入 manifest、Data 入口、事件标记和一致性测试。
- Data：provider-neutral adapter 无网络、cookie、持久存储、身份或原始搜索文本。

### Validation

- `git diff --check`: passed.
- `npm run build:pages`: passed.
- `npm run validate:pages`: 395 local references passed.
- `npm test`: 12 / 12 passed.
- `npm run lint`: 0 errors; 24 pre-existing warnings.
- Codex browser smoke: local desktop and narrow viewport passed.
- Antigravity extended QA: pending.

### Delivery

- Branch: `codex/remaining-sites-six-stage-migration`
- Implementation commit: `2da67ce`
- Sites binding commit: `58f8df0`
- Draft PR: <https://github.com/TSRat/My-Website/pull/15>
- Owner-only Preview: <https://tsrat-ivory-migration-preview.tsrat.chatgpt.site>
- Preview status: deployed successfully; public link access requires creator approval.
- Merge: not authorized and not performed.

## 2026-07-25: Zhang Yong Portrait + Two Swans direct-static migration

### Current target

把 Sites 中的“张勇的生活切片”和“两只天鹅：Malty 与 Melty”迁入
`My-Website`，采用与 The Living Atlas 同类的直接维护静态结构，同时保留
两个站点各自的视觉、内容和交互身份。

### Completed

- 在独立 worktree 与 `codex/living-atlas-static-sites` 分支工作，没有修改
  用户正在整理的原工作区。
- `sites/zhangyong-portrait/` 现为直接维护的 HTML、CSS、ES modules、内容注册表、
  manifest、Data 空状态与本地资产；不再依赖 Sites/Vinext/React。
- `sites/malty-melty-childhood/` 从 Sites 的精确源码 commit 迁入 11 章、全部对白、
  双视角记忆、章节抽屉、自动播放、续读、键盘操作和结局状态；生产运行时
  不再包含 Sites/Vinext/Next.js/React。
- “两只天鹅”的源码通过 Sites 短期仓库凭据读取，没有点击会向站点分享
  姓名、邮箱和头像的登录授权。
- 两站已纳入统一 `sites/<site-id>/` 维护根、`site.config.json`、共享站点
  构建器和自动生成的大写部署镜像；当前权威项目表共八站。
- README 权威项目表、Living Atlas published-sites registry、组合审计、平台
  标准和 targeted tests 已同步。
- Shared Figma 新增两个可编辑六阶段 desktop/mobile coverage：
  [张勇的生活切片](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=36-30)
  与 [Two Swans](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=36-76)。

### Important decisions

- 统一的是生产实现形态、稳定内容契约、可访问性、Data 边界和 Pages 交付，
  不是视觉主题。
- 张勇站为 `PRESERVE` / Tier A；两只天鹅为 `REFACTOR` / Tier B。
- Figma 是设计与 QA 参考，不是两个站点的运行时或内容源。
- 两站 analytics provider 均为 `none`；张勇站无浏览器存储，两只天鹅只在
  当前设备保存数值型阅读进度 `two-swans-progress`。
- 没有删除或修改原 Sites 部署，也没有 merge。

### Validation

- `node --check`：两个站点的关键 ES modules 通过。
- `npm run validate:sites`：通过，8/8 维护包满足统一契约。
- `npm run build:sites`：通过，七个部署镜像由权威维护包刷新。
- `node --test tests/site-maintenance-structure.test.mjs tests/living-atlas-static-sites.test.mjs tests/living-atlas-content-system.test.mjs`：
  13/13 通过。
- `npm run build:pages`：通过，两个新镜像已复制到 `docs/`。
- `npm run validate:pages`：通过，53 个 HTML/CSS 文件中的 398 条本地引用有效。
- `git diff --check`：通过。
- Browser desktop smoke：
  - 张勇站 1265px 首屏、主要图片、Data 标题、无横向溢出通过；
  - 两只天鹅 1265px 首屏、11 章、主图、开始故事、下一句、姐姐记忆和章节
    抽屉通过，无横向溢出。
- Exact-commit remote smoke：
  - 张勇站正文、Data、全部主图与懒加载图加载通过，无横向溢出；
  - 两只天鹅首页、主图、开始、下一句、姐姐记忆、章节抽屉与关闭流程通过。
- 当前浏览器表面不提供视口切换；390px 真实窄视口 smoke 未运行。CSS 窄屏
  规则和 Pages 资源已检查，Antigravity 仍需做移动端、键盘、完整交互与
  视觉回归。

### Known issues

- 两站上游均未提供完整图片生成/授权记录；站内继续使用原发布资产，脱离
  本项目复用前需要创作者确认。
- 张勇站保留了基线的 minified `style.css`，新平台规则放在独立
  `platform.css`。
- 两只天鹅原 Sites 页面仍是 access-gated；Codex 的视觉基线来自其精确源码
  commit 与本地迁移结果。

### Delivery

- Branch: `codex/living-atlas-static-sites`
- Base: `origin/main` through merge commit `518d7f9`
- Implementation commit: `6e8a19a`
- Exact-commit previews:
  - <https://raw.githack.com/TSRat/My-Website/6e8a19a/ZHANGYONG-PORTRAIT/index.html>
  - <https://raw.githack.com/TSRat/My-Website/6e8a19a/MALTY-MELTY-CHILDHOOD/index.html>
- Draft PR: <https://github.com/TSRat/My-Website/pull/21>
- Merge: not authorized and not performed
- Antigravity extended QA: pending

### Next step

审查 Draft PR 与两个精确提交预览；如需要完整移动端、键盘和视觉回归证据，
把 PR #21 与以上两个预览交给 Antigravity。

- Last updated: 2026-07-19
- Project: `TSRat/My-Website`
- Current branch: `agent/document-and-validate-sites`
- Latest commit at audit start: `edcc2b7` — `Publish IVORY ARCHIVE issue 06 with editorial illustrations`

## Current goal

建立一套无需依赖历史聊天记录的多 Agent 接管文档，让新 Agent 能从仓库、Git 历史和项目文档确认：

- 仓库与四个站点的用途
- 真实源码、镜像和历史快照的区别
- 不可擅自改变的内容、设计与部署约束
- 本地运行、构建和验证方式
- 当前状态、已知缺口和下一步

## Current state

- 仓库公开，默认 branch 为 `main`。
- 审计开始时本地 `main` 与 `origin/main` 对齐，working tree clean。
- GitHub Pages 通过 Actions artifact 部署，不使用 Deploy from a branch。
- 公开总入口下有 4 个站点：IVORY ARCHIVE、Enheduanna、Hypatia、Melromarc Sisters。
- 根目录原先只有 `README.md`；本次任务建立全局与项目级接管文档。
- 接管文档已建立；后续修复只新增一个缺失的 Hypatia 图片、通用 Pages 资源验证脚本和对应 workflow 检查，不改 URL、路由、Vite base 或部署架构。

## Completed

- 审计目录结构、现有 README、`package.json`、lockfile、Vite/TypeScript 配置和脚本。
- 检查 `git status`、当前 branch、最近 20 个 commits、remote branches 与初始 diff。
- 确认 `.github/workflows/publish-static-mirror.yml` 的 GitHub Pages Actions artifact 流程。
- 确认四个站点的公开目录、入口文件和当前 Pages 构建来源。
- 识别源码、发布镜像和历史静态快照之间的不对称关系。
- 创建根 `AGENTS.md`、`TECH.md`、`HANDOFF.md` 并扩展 `README.md`。
- 为四个站点创建项目级 `CONTENT.md`、`DESIGN.md`、`TECH.md` 和 `HANDOFF.md`。
- 追溯 `agora-hypatia-teaching.jpg` 缺图：引用由 `eb7fae6` 引入，当前 5 个 remote branches 均没有该文件。
- 新增明确标注为现代 AI 视觉隐喻的替代图，并修正原先错误的“电影剧照”说明。
- 新增 `npm run validate:pages`，验证所有生成 HTML/CSS 的本地资源引用，并接入 Pages workflow。
- 审计全部 remote branches，确认仓库内没有 Hypatia 或 Melromarc 的完整上游源码，也没有 Enheduanna 的原始构建脚手架。

## In progress

- 文档、缺图修复和验证增强位于当前 PR branch；没有内容章节或 UI 重构处于半完成状态。

## Known issues

1. `IVORY-ARCHIVE/` 是旧静态快照，当前只到第 02 期；当前 Pages IVORY 由 `app/briefings.ts` 生成，已到第 06 期。
2. `static-sites/enheduanna/` 有可读 TSX/CSS，`ENHEDUANNA/` 是 workflow 直接复制的发布镜像，但没有自动重建或同步 npm script。
3. `HYPATIA/` 可以直接部署；全部现有 remote branches 均没有完整上游应用源码。目录内还有入口未引用的历史 bundle/样式，不能擅自删除。
4. `MELROMARC-SISTERS/` 主要是 Vinext/React 编译 artifact；全部现有 remote branches 均没有完整未编译源码。
5. 远程仍有 `agent/add-hypatia-site`、`agent/add-melromarc-sisters-site`、`enheduanna-first-author` 和 `gh-pages` branch。当前任务未删除；workflow 只监听 `main`。
6. PR branch push 不触发 Pages deployment；合并到 `main` 后才会由现有 Actions workflow 发布。

## Important decisions

- 适应现有目录，不移动或重命名站点。
- IVORY 项目文档放在真实动态源码目录 `app/`，而不是旧 `IVORY-ARCHIVE/` 快照。
- Enheduanna 项目文档放在 `static-sites/enheduanna/`，并在全局文档明确指出当前部署复制 `ENHEDUANNA/`。
- Hypatia 与 Melromarc 文档放在各自可部署目录，因为仓库中没有更可信的完整上游源码目录。
- 为每个站点增加短的 `TECH.md`，避免 Agent 在源码/镜像关系上做出错误假设。
- 无法从仓库确认的设计历史、上游源码和重建命令统一标记为待确认，不用聊天记忆补写。
- 缺失的 Hypatia 教学图使用现代 AI 辅助插画补齐，caption 明确说明它不是历史现场，也不是《城市广场》剧照。

## Do not change without confirmation

- 四个站点的公开 URL 和目录名大小写
- GitHub Actions Pages artifact 架构
- `main` 的 push trigger 与 workflow permissions
- Vite `base`
- `scripts/build-github-pages.mjs` 的 slug、redirect 和复制逻辑
- `gh-pages` 或其他 remote branch 的存在状态
- 历史站点的核心叙事、史料限定语和来源边界
- Melromarc 的女性主义批评立场与两个故事基础
- 整体 UI、字体、色彩和图片体系
- 任何看似旧但尚未确认可删除的静态 bundle 或图片

## Relevant files

| 文件或目录 | 作用 |
| --- | --- |
| `README.md` | 项目列表、入口、运行方式与文档导航 |
| `AGENTS.md` | 所有 Agent 的工作规则 |
| `TECH.md` | 全局构建、部署、资产和路径约束 |
| `.github/workflows/publish-static-mirror.yml` | GitHub Pages workflow |
| `scripts/build-github-pages.mjs` | 生成 Pages 总入口和 IVORY，复制三个静态站点 |
| `scripts/validate-pages-assets.mjs` | 检查生成页面的本地 HTML/CSS 资源引用 |
| `app/briefings.ts` | IVORY 当前全部期刊数据 |
| `static-sites/enheduanna/` | Enheduanna 可读源码与项目文档 |
| `ENHEDUANNA/` | Enheduanna 当前 Pages 输入镜像 |
| `HYPATIA/` | Hypatia 当前 Pages 输入与项目文档 |
| `HYPATIA/assets/agora-hypatia-teaching.jpg` | 修复缺图的现代 AI 视觉隐喻 |
| `MELROMARC-SISTERS/` | Melromarc 当前 Pages 输入与项目文档 |

## How to run

```bash
npm ci
npm run dev
```

生成 Pages artifact：

```bash
npm run build:pages
npm run validate:pages
```

本地查看 artifact：

```bash
python3 -m http.server 8000 --directory docs
```

## Verification status

- Change scope: 20 个 Markdown 文档、1 张 Hypatia 图片、1 个验证脚本，以及必要的 HTML、`package.json` 和 workflow 小改动
- Diff check: Passed — `git diff --check` 与全部新增文本文件检查无错误
- GitHub Pages build: Passed — `npm run build:pages`
- Pages asset validation: Passed — 27 个 HTML/CSS 文件中的 209 个本地引用；负向测试能准确捕获被临时移走的 Hypatia 图片
- Application build: Passed — `npm run build`
- Tests: Passed — `npm test`，1/1
- Typecheck: No dedicated npm script
- Lint: Passed — 0 errors；24 个既有 warning（16 个来自旧 Hypatia bundle，8 个来自 Enheduanna 的 `<img>`）
- Workflow-equivalent checks: Passed — Hypatia 文件、版本标记和标题检查全部通过
- Artifact checks: 三个复制站点与源目录 byte-identical；总入口和四站点 smoke checks 通过
- Browser check: 环境有 Playwright 库但没有 Chromium executable，无法运行；已直接检查 1600×1067 成品图，并通过 artifact 资源与尺寸验证
- Deployment: Not run；PR branch push 不触发只监听 `main` 的 Pages workflow

## Next recommended tasks

1. Review and merge the current draft PR after checking the generated Hypatia image in context.
2. Confirm whether the complete upstream source for Hypatia and Melromarc Sisters exists outside this repository.
3. 提供 Enheduanna 原始项目脚手架或明确授权重建后，再增加从 `static-sites/enheduanna/` 到 `ENHEDUANNA/` 的可重复构建。
4. Decide whether old root static snapshots and `IVORY-ARCHIVE/` should remain as rollback material or be explicitly archived; do not delete before that decision.
5. If branch cleanup is desired, audit merge status and obtain separate explicit authorization before deleting any remote branch.

## Git state

- Branch: `agent/document-and-validate-sites`
- Latest base commit: `edcc2b7`
- Working tree clean at audit start: Yes
- Working tree clean at handoff: Yes
- Uncommitted changes: None
- Commit/push performed: Yes, on the current PR branch
- Merge performed: Yes

---

## 2026-07-20: Deploy The Living Atlas Hub

### Current Target
将“TSRat - The Living Atlas”作为总网页面部署到 GitHub Pages，且保留未来 Figma 编辑可能性。

### Completed
- 审计了仓库配置和多网站生成脚本。
- 在 `THE-LIVING-ATLAS/` 目录下静态还原了 PDF 设计稿的 12列网格、三级字体排印、象牙白底色及钴蓝色强调的 UI。
- 添加了独立网站所需的 `CONTENT.md`，`DESIGN.md`，`HANDOFF.md` 规范文件。
- 更新了 `scripts/build-github-pages.mjs`，将 `THE-LIVING-ATLAS` 注册进入 `staticSites`，并更新了 `hubPage` (根目录 `index.html`)，增加了指向新主站的链接。
- 根目录 `README.md` 中已更新当前项目列表。
- 运行了完整的 `build:pages` 与 `validate:pages` 资源引用校验，一切通过。

### Unfinished / Issues
- GNU `timeout` 命令缺失，导致 `build-verified.sh` (含 `npm test`) 无法在当前环境运行。
- `THE-LIVING-ATLAS` 目前虽然作为“总网站”形态存在，但它是通过跳转进入子目录的方式展示，这遵循了仓库不破坏已有根目录分发逻辑的规则。

### Next Actions
- 验证线上新主站的响应式布局及具体文案链接。
- 为 Mobile View 补充汉堡菜单的交互逻辑。


## 2026-07-21: Add HILDEGARD (Daughters of Time 002)

### Current Target
按 TSRat 稿件《谦卑的反叛者：宾根的希尔德加德》建立"时间的女儿 002"人物专题，与 Hypatia、Enheduanna 并列，走仓库现有 GitHub Actions Pages 部署链路，同时保留未来在 Figma 中继续编辑视觉的可能性。

### Completed
- 新建 `HILDEGARD/`：`index.html` + `assets/hildegard-site.css` + `assets/hildegard-tokens.css` + `assets/hildegard-refresh.js` + 五个独立 SVG（`glyph-viriditas / cosmic-wheel / branch / root / star`）。
- 内容严格按稿件"引子 + 八章 + 身后"结构；史实、学界解读、叙事框架、视觉隐喻分层呈现；性别观 vs 阶级观张力通过 Editorial note 保留。
- 视觉系统命名为 **Viriditas Codex**：Parchment × Viriditas Deep × Cosmic Blue × Gold Leaf 四色主轴，六种屏模板（Portal / Manuscript / Vision / Botanical / Archive / Interlude），动效遵循 Breathing + Growing + Revealing 且严格支持 `prefers-reduced-motion`。
- Figma 可编辑性：所有设计变量集中在 `assets/hildegard-tokens.css`；SVG 全部独立文件；`HILDEGARD/design/figma-handoff.md` 列出 Variables、Text Styles、Grid、SVG 清单、组件命名，与代码一一对应。
- 在 `scripts/build-github-pages.mjs` 的 `staticSites` 中注册 `HILDEGARD`（DAUGHTERS OF TIME · 002 · className `hildegard` · artLabel `002`）。
- `THE-LIVING-ATLAS/index.html` 的 07 Sites 增加 Hildegard 行（编号 `002` · Daughters of Time · ACTIVE）。
- 根 `README.md` 项目表、仓库树、Pages 部署描述、文档导航链接均补上 Hildegard。
- 项目内文档 `CONTENT.md / DESIGN.md / TECH.md / HANDOFF.md` 均按当前实际内容编写，不使用空模板。

### Verification status
- `git diff --check`: Passed
- `npm ci`: Passed
- `npm run build:pages`: Passed — `docs/HILDEGARD/` 生成，Hub 更新
- `npm run validate:pages`: Passed — Hildegard 全部本地资源引用可解析
- `npm run lint`: Not run locally (会在 CI 中随 workflow 触发)
- `npm test`: Not run locally — 本机缺 GNU `timeout`（同"The Living Atlas"记录中所述限制）；CI 将执行
- Browser check: 本地在 `python3 -m http.server 8000 --directory docs` 下以 375 / 820 / 1440 px 抽查桌面、平板与移动端布局

### Unfinished / Issues
- ✅ 视频版本已发布：<https://www.bilibili.com/video/BV1VE4gzNEYJ>；Hildegard 页脚 Sources 已附外链。
- `TODO: needs confirmation` — 是否引入 Rupertsberg Scivias 公版抄本扫描。
- `TODO: needs confirmation` — Kristin Hayter / Hildegard von Blingin' 官方链接是否作为外链嵌入。
- Workflow 目前只对 Hypatia 有额外 smoke check；Hildegard 未设置强制文件级 grep check（如需增加，请同步 `.github/workflows/publish-static-mirror.yml` 与 `HILDEGARD/TECH.md`）。

### Do not change without confirmation
- 稿件叙事骨架与"性别观 vs 阶级观"张力段落（观点改变类）。
- `HILDEGARD/` 目录名与 slug 大小写。
- Living Atlas 中 `002 · HILDEGARD` 的编号与位置。
- Viriditas Codex 主色轴与面积原则。
- 现有 `staticSites` 中其它站点的 slug、metadata、顺序。

### Next Actions
- 由创作者填入视频与外链后清除页脚 TODO。
- 若要在 Figma 中同步视觉源，按 `HILDEGARD/design/figma-handoff.md` 建立 Variables 与 SVG 组件。
- 若未来切换独立域名（例如 `hildegard.tsrat.com`），只需修改 `HILDEGARD/index.html` 中的 `canonical` 与 `og:url`；相对路径已保证整目录可迁移。

## 2026-07-21: HILDEGARD 布局修复 + 视频 + 史料 pass

### Current Target
回应用户在首次部署后的反馈：章节 03 修炼 出现塌陷排版；文字过密图像不足；视频没有在页面内的呈现；缺少像 HYPATIA / ENHEDUANNA 那样完整的"史料与延伸阅读"清单。

### Completed
- 修复 `HILDEGARD/assets/hildegard-site.css` 中的栅格塌陷：把 12 列布局规则从只覆盖 `.chapter--manuscript` 扩展到 `.chapter--vision` 和 `.chapter--botanical`，让 Vision / Botanical 章节的正文（原本 fall back 到 `grid-column: auto` = 1 列）恢复到 `grid-column: 2 / span 8` + 旁注 `10 / span 3`。
- 新增视觉锚点：每章右上加 96 × 96 的 `.chapter-glyph` SVG；三种屏（Manuscript / Vision / Botanical）各自的 opacity 与颜色遵循原色板。
- 引入 `.pull-quote` 拉引金句；只用金色发丝线上下夹持，不做圆角卡片。
- 全面压缩正文密度：删除重复陈述，把叙事扩写转成拉引句；每章保留论点 + 关键人名/时间。
- 新增 `<section id="watch">` 内嵌 Bilibili iframe（`BV1VE4gzNEYJ`），带外链按钮。
- 新增 `<section id="sources">`：`.source-table` 分层（材料 / 距离 / 最适合回答 / 主要限制）+ `.reading-list` 外链（Barbara Newman / Sabina Flanagan / Mark Atherton / Benedict XVI 2012 册封文 / CANTUS / Sequentia / Lingua Ignota 综述 / TS鼠 B 站视频）+ `.image-credits` 折叠说明。
- 站点头部 nav 增加 `观看` / `来源` 两个锚点，页脚去掉旧的 Sources 列表，只保留 Series 导航 + About 快速跳转。
- 装饰图形仍全部为本站 SVG，没有 AI 生成的希尔德加德肖像；`image-credits` 中明确声明"AI 图片不能冒充史料"。

### Verification status
- `find docs -mindepth 1 -maxdepth 1 -exec rm -rf {} +` + `npm run build:pages`: Passed — 五个静态站点目录全部重新复制，Hub 更新。
- `npm run validate:pages`: Passed — 268 local references across 35 HTML/CSS files.
- Browser check（本地 `python3 -m http.server 8000 --directory docs`）：桌面、平板与移动端 03 修炼章正文与旁注分栏正常。

### Unfinished / Issues
- 仍待创作者确认：是否引入 Rupertsberg Scivias 公版扫描；是否补 Kristin Hayter / Hildegard von Blingin' 官方链接。

### Next Actions
- 部署后再次核对 `#watch` iframe 在 HTTPS 下是否被 Bilibili X-Frame-Options 允许；如被拒，可考虑用哔哩哔哩官方 player 或改为图片 + 外链的降级方案。

## 2026-07-23: Add repository-level website workflow skills

### Current target

为仓库加入两个可复用的网站工作流，并把共同的平台、设计、Git 与 Preview 规则追加到仓库级 Agent 约束中。

### Completed

- 在 `AGENTS.md` 末尾追加 `Website platform rules`，保留原有规则不变。
- 新增 `.agents/skills/normalize-web-portfolio/SKILL.md`，用于审计、记录并分批标准化现有网站组合。
- 新增 `.agents/skills/build-new-site-to-pr/SKILL.md`，用于将已确定的设计方向推进到 Figma、实现、浏览器 QA、Preview 与 PR。
- 为两个技能生成 `agents/openai.yaml`，提供 Codex 界面名称、简述和默认调用提示。

### Important decisions

- 只统一工作流、基础设施、设计系统逻辑、QA 与交付标准，不强迫各站点使用相同视觉风格或框架。
- `Figma` 是重大迁移和新网站工作流的强制门槛；若不可用，技能必须明确报告阻塞状态。
- 两个技能均禁止直接修改或自动合并 `main`。

### Verification status

- Skill structure validation: Passed — 两个技能均通过 `quick_validate.py`。

## 2026-07-25: Melromarc Sisters six-stage readiness

### Current target

Complete every safe migration stage while preserving the current artifact and
refusing to treat minified output as editable upstream source.

### Completed

- Added a six-stage readiness handoff, proposed machine-readable contract, and
  active-artifact hash baseline under `web/sites/melromarc-sisters/`.
- Reused the editable Figma migration frame at node `27:2`.
- Added tests for the blocker, active graph and hashes, all 13 story IDs, and
  `melromarc-saved-stories` compatibility.
- Updated the registry and project documentation without changing story
  content, critical position, HTML, bundles, images, workflow, build map, or
  public URL.

### Blocker and decision

Stage 5 remains blocked. The repository contains a deployable artifact but no
complete source or reproducible build. Hand-editing prerendered HTML and
minified bundles risks hydration mismatch and cannot become the reusable system
the user requested. The next authorized action must be upstream recovery or an
explicitly approved maintainable rebuild.
### Verification

- Pages build and validation passed: 355 local references across 43 HTML/CSS
  files.
- Full tests passed: 12/12.
- Lint completed with 0 errors and 24 pre-existing warnings.
- Browser baseline at 1280 and 390 CSS pixels found 13 story cards, 18 gallery
  figures, 0 broken images, and no horizontal overflow.
- Random story, reader open/close, and body-scroll restoration passed.
- Saved-state reload remains assigned to Antigravity because the in-app browser
  inspection context does not expose localStorage.

### Delivery

- Branch: `codex/melromarc-six-stage-readiness`.
- Readiness commit: `bc06df1a6786171ce1be8b6516a2f4c70fa40ed5`.
- Unchanged artifact baseline:
  <https://raw.githack.com/TSRat/My-Website/bc06df1a6786171ce1be8b6516a2f4c70fa40ed5/MELROMARC-SISTERS/index.html>
- Draft PR: <https://github.com/TSRat/My-Website/pull/18>
- The remote page was opened and verified, but it intentionally contains no
  Stage 5 migration changes.

## 2026-07-25: Enheduanna six-stage readiness

### Current target

Complete all safe migration stages while respecting the confirmed separation
between readable source and the compiled Pages mirror.

### Completed

- Added a six-stage readiness handoff and proposed machine-readable contract
  under `web/sites/enheduanna/`.
- Reused the editable Figma migration frame at node `27:2`.
- Added tests for the explicit Stage 5 blocker and byte equality of all
  same-name source/mirror public assets.
- Updated the registry and project documentation without changing content,
  `page.tsx`, CSS, the compiled mirror, workflow, build map, or public URL.

### Blocker and decision

Stage 5 remains blocked. The repository has no confirmed package, Vite config,
or command that rebuilds `ENHEDUANNA/` from
`static-sites/enheduanna/`. Hand-editing hashed bundles or claiming a source
change is deployed would be unsafe. The next authorized action must be either
scaffold restoration or an explicitly approved reconstruction.

### Verification

- Pages build and validation passed: 355 local references across 43 HTML/CSS
  files.
- Full tests passed: 11/11.
- Lint completed with 0 errors and 24 pre-existing warnings.
- Readiness tests confirm the blocker and byte-identical public assets.
- Browser baseline confirms 0 broken images, no mobile overflow at 390 CSS
  pixels, and the documented 35-pixel overflow at 1024 CSS pixels.

### Delivery

- Branch: `codex/enheduanna-six-stage-readiness`.
- Readiness commit: `a755cc3d84ab09a43e595e2723f2e9a8312fd0a5`.
- Unchanged mirror baseline:
  <https://raw.githack.com/TSRat/My-Website/a755cc3d84ab09a43e595e2723f2e9a8312fd0a5/ENHEDUANNA/index.html>
- Draft PR: <https://github.com/TSRat/My-Website/pull/17>
- The remote page was opened and verified, but it intentionally contains no
  Stage 5 migration changes.
## 2026-07-25: Hypatia + Hildegard six-stage migration batch

### Current target

Migrate the two maintainable historical static sites through the shared
six-stage workflow while preserving their distinct identities, historical
qualifications, relative paths, and GitHub Pages artifact deployment.

### Completed

- Kept Hypatia's lake-blue exhibition system and Hildegard's Viriditas Codex.
- Added a site-specific Data appendix to each page.
- Added machine-readable manifests and provider-neutral runtime adapters with
  no network requests, cookies, persistent storage, identity, or raw-content
  capture.
- Added shared tests for privacy contracts, expected events, existing Hypatia
  interaction hooks, Hildegard chapters, and reduced motion.
- Added per-site six-stage handoffs under `web/sites/`.
- Linked both sites to the editable shared Figma migration frame at node `27:2`.

### Verification

- `git diff --check`: Passed.
- `npm run build:pages`: Passed.
- `npm run validate:pages`: Passed — 359 local references across 43 HTML/CSS
  files.
- `npm test`: Passed — 11/11.
- `npm run lint`: 0 errors; 24 pre-existing warnings.
- In-app browser smoke: Hypatia and Hildegard Data anchors at 1280 and 390 CSS
  pixels, 0 broken images, no horizontal overflow, provider-neutral marker
  present.

### Important decisions and remaining work

- Codex performs only the necessary basic browser checks; Antigravity owns
  extended deterministic-section visual comparison.
- No workflow, slug, route, build map, historical narrative, or upstream
  artifact was changed.
- This batch uses `codex/hypatia-hildegard-six-stage`; exact commit, preview,
  and Draft PR are recorded below. It is not auto-merged.
- Enheduanna and Melromarc Sisters still need separate readiness PRs because a
  reproducible source-to-mirror build or complete upstream source is absent.

### Delivery

- Implementation commit: `a8d393eb582d45e2a2a4af533d32ff534fa84721`.
- Hypatia exact preview:
  <https://raw.githack.com/TSRat/My-Website/a8d393eb582d45e2a2a4af533d32ff534fa84721/HYPATIA/index.html#data>
- Hildegard exact preview:
  <https://raw.githack.com/TSRat/My-Website/a8d393eb582d45e2a2a4af533d32ff534fa84721/HILDEGARD/index.html#data>
- Draft PR: <https://github.com/TSRat/My-Website/pull/16>
- Both remote previews were opened through their one-time external-content
  notice and verified in the in-app browser. The PR remains unmerged.
- Repository diff checks: Passed — `git diff --check` 无错误；原文代码块比对通过，`build-new-site-to-pr` 仅为修复 YAML 语法给 `description` 增加引号。
- Pages build and validation: Passed — `npm run build:pages` 成功；`npm run validate:pages` 验证 39 个 HTML/CSS 文件中的 343 个本地引用。

### Git state

- Branch: `main`
- Base commit: `3a91388`
- Commit/push/PR: 未执行；用户只要求在本机加入文件。

## 2026-07-23: Add the Visual Preservation Gate

### Current target

加强现有网站迁移的视觉保护，避免工程重构、设计系统迁移或 Figma 重建在未授权情况下改变站点样式。

### Completed

- 在 `.agents/skills/normalize-web-portfolio/SKILL.md` 中加入强制 `Visual Preservation Gate`。
- 要求迁移前建立同路由、同状态、同视口的视觉基准，并记录字体、颜色、栅格、间距、图像裁切、响应式与动效契约。
- 要求迁移后执行自动截图或感知比较（可用时）和人工并排/叠加复核。
- 为 `PRESERVE`、`REFACTOR`、`REBUILD` 设置不同严格程度，并禁止只凭构建、测试、HTTP 200 或 Figma 对比声称视觉保真。
- 要求 PR 提供基准、迁移后截图、差异报告、测试条件、已批准变化与剩余风险。
- 在根 `AGENTS.md` 同步仓库级视觉保真规则。

### Verification status

- Skill structure validation: Passed — 更新后的 `normalize-web-portfolio` 通过 `quick_validate.py`。
- Repository diff checks: Passed — `git diff --check` 无错误。
- Pages build and validation: Passed — `npm run build:pages` 成功；`npm run validate:pages` 验证 39 个 HTML/CSS 文件中的 343 个本地引用。

### Git state

- Branch: `codex/normalize-web-portfolio`
- Base commit: `3a91388`
- Commit/push/PR: 未执行。

## 2026-07-21 (v3): HILDEGARD 图像 + 章节拆分 + 深色对比修复

### Current Target
回应用户反馈：
1. "没有看到一张图片" — 除了 96px 装饰 glyph，缺乏大幅视觉承载。
2. "深色背景的那几页，数字和一些文字看不清楚" — 03/04/06（Vision 深蓝）章的 `.chapter-numeral` 只有 0.18 opacity + `--color-primary`（深绿），在深蓝背景上几乎不可见。
3. "一章可以拆成几页，比如权威那章可以拆成和修女们的关系，搬离修道院，与政治人物互动，性别与阶级态度等"。

### Completed
- 新增 8 张原创章节大图 SVG（`HILDEGARD/assets/images/plate-*.svg`），每一章 opener 一张，`aspect-ratio: 8/5`，caption 明确"视觉隐喻，非史料"。
- 新增 CSS：`.chapter-plate`（章节大图 + figcaption 三色板适配）；`.subchapter`（章节内嵌小节 + `.subchapter-index` 徽章 + `.subchapter-title` 双语标题）。
- 修复深色对比：`.chapter--vision .chapter-numeral` 从 `dark-primary`（visio-glow blue）改为 `accent-soft`（gold-soft）+ opacity 0.55；`.chapter--botanical .chapter-numeral` 改为 gold-soft 0.7 + opacity 1；`.chapter-meta` 在深色屏用 accent-soft 而不是 dark-muted。
- 章节拆分：
  - 03 修炼 → A 先知路径 / B 学识路径
  - 04 音乐 → A 与格里高利圣咏的对照 / B 天启交响曲与美德典律
  - 05 权威 → A 与修女的关系 / B 把弱势当武器 / C 搬离修道院·独立王国 / D 通信欧洲的权力中心 / E 性别与阶级的两面（Editor's Note）
  - 06 语言 → A 字母与词汇 / B 三种解读与纽曼的假说
  - 07 斗争 → A 四次巡回布道 / B 禁令·慈悲高于教条
  - 08 身后 → A 沉默的八百年 / B 二次生命
- CSS 版本参数升级：`hildegard-site.css?v=viriditas-v3`；JS 同步 `hildegard-refresh.js?v=viriditas-v3`。
- `image-credits` 更新：新增全部 plate 的来源声明（本站原创 SVG，视觉隐喻）。

### Verification
- `npm run build:pages`：Passed。
- `npm run validate:pages`：Passed — 276 local references across 35 HTML/CSS files（新增 8 张 plate SVG 引用）。

### Do not change without confirmation
- 8 张 plate SVG 使用几何 + 剪影，绝不出现拟真面孔，符合 AGENTS.md "AI 图片不能冒充史料" 原则。
- 05 权威章的 5 个小节顺序（A→B→C→D→E）已与用户明确列出的四项匹配，并在结尾保留原 Editorial note。

## 2026-07-23: Normalize the six-site web portfolio

### Current target

对 `README.md` 权威项目表中的六个公开网站建立统一的产品、设计系统、工程、QA、Preview 和分析标准，同时保留每个站点的独立身份。本批次只实现经基线证明安全的 Living Atlas 响应式与可访问性修正。

### Completed

- 审计并在真实浏览器中渲染全部六个网站。
- 为每站采集 1440×900、1024×768、390×844 三个固定视口，共 18 张有效基线。
- 建立 `web/portfolio-audit.md`，记录六站当前产品、视觉、架构、交互、部署、可访问性、响应式、分析、分级、目标和风险。
- 建立 `web/platform-standard.md`，记录六阶段标准、Tier A/B/C 深度、共享基础、视觉保护、QA 和 provider-neutral analytics events。
- 更新 `README.md` 权威项目表，加入 PRESERVE / REFACTOR / REBUILD 与迁移状态；没有建立竞争性 registry。
- Figma 现有文件已补齐：
  - 3 个页面；
  - 7 个变量集合、67 个变量；
  - 7 个共享组件；
  - 12 个代表性桌面 / 移动画面；
  - 18 张真实浏览器基线；
  - Living Atlas 前后对比、移动目录和搜索状态。
- 分级结果：2 PRESERVE（IVORY、Hildegard）；3 REFACTOR（Living Atlas、Enheduanna、Hypatia）；1 REBUILD（Melromarc）。
- Living Atlas 完成首批修正：移动溢出、移动目录、搜索、跳转主内容、焦点、减弱动效、导航错误链接和中英文行为。

### Important decisions

- `docs/` 继续作为忽略的 Pages 构建输出；组合级源文档放在 `web/`。
- Figma URL: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt>
- 共享基础设施和语义，不统一各站点的色彩、字体、图像、叙事节奏和项目交互。
- Enheduanna 不直接修补 hashed mirror bundle；先恢复或明确授权重建 source-to-mirror 流程。
- Melromarc 不直接重写编译 artifact；完整上游源码或明确 rebuild 授权仍是实施门槛。
- PR branch 不触发当前 Pages workflow，因此本地 Pages 只能作为浏览器验证，不冒充 live preview。
- 当前浏览器 full-page screenshot 会错误组合 sticky/reveal 区域；固定视口与分区/anchor captures 作为可用证据。

### Known issues and remaining queue

1. Enheduanna 在 1024px 有约 20px 横向溢出，但缺少可重复 source-to-mirror build，实施阻塞。
2. Melromarc 完整上游源码缺失；本地日志还显示重复 root-relative asset 404，虽然相对资源正常加载。
3. IVORY 需要增加 dynamic / Pages renderer parity tests。
4. Hildegard 与 Hypatia 需要建立分区级视觉回归覆盖；不要依赖当前 full-page 合成。
5. Living Atlas 的 The Index 和多个社交链接仍是占位目标。
6. 当前 PR branch 尚未建立 Pages preview；GitHub CLI 已安装并登录，等待本批变更提交、推送并建立 Draft PR。

### Modified files

- `.agents/skills/normalize-web-portfolio/SKILL.md`
- `README.md`
- `HANDOFF.md`
- `web/portfolio-audit.md`
- `web/platform-standard.md`
- `THE-LIVING-ATLAS/index.html`
- `THE-LIVING-ATLAS/zh.html`
- `THE-LIVING-ATLAS/style.css`
- `THE-LIVING-ATLAS/atlas.js`
- `THE-LIVING-ATLAS/TECH.md`
- `THE-LIVING-ATLAS/HANDOFF.md`
- `scripts/build-verified.sh`
- `TECH.md`

The unrelated `.agents/skills/build-new-site-to-pr/` files remain unstaged; the `AGENTS.md` website platform rules are included because this workflow depends on them.

### Verification

- `npm ci`: Passed — 508 packages installed.
- `node --check THE-LIVING-ATLAS/atlas.js`: Passed.
- `npm run build:pages`: Passed.
- `npm run validate:pages`: Passed — 347 local references across 39 HTML/CSS files.
- `npm run lint`: Passed — 0 errors, 24 existing warnings.
- `npm run build`: Passed after making the wrapper recognize Homebrew GNU `gtimeout` on macOS.
- `bash scripts/sites-env.sh -- bash scripts/validate-artifact.sh`: Passed as part of `npm run build`.
- `npm test`: Passed — build plus rendered HTML test 1/1.
- Browser QA: Passed for the Living Atlas corrective scope at desktop, tablet, mobile, menu, search, keyboard shortcut, Chinese variant, carousel, and horizontal containment.
- Figma render QA: Passed for foundations/components, theme screens, baseline matrix, and Living Atlas corrective review board.

### Git state

- Branch: `codex/normalize-web-portfolio`
- Base / latest commit: `3a91388`
- GitHub CLI: `gh 2.96.0`, authenticated to `github.com` as `TSRat`.
- Commit / push / Draft PR: pending at this handoff update.

## 2026-07-24: Clarify plugin priority in build-new-site-to-pr

### Current target

让新网站工作流清楚区分强制、强烈推荐和推荐能力，并让插件使用情况在交接中可见。

### Completed

- 只修改 `.agents/skills/build-new-site-to-pr/SKILL.md`；`normalize-web-portfolio` 保持不变。
- 保留 Figma、真实浏览器 QA、GitHub/PR 和可验证 live preview 的强制门槛。
- 将 Product Design、Creative Production、Data Analytics 和 Visualize 设为强烈推荐：默认在对应阶段使用，但在确实没有实质价值时可以跳过，且必须记录理由。
- 将其他相关插件、App、Connector 和能力设为推荐使用；禁止为了凑插件数量调用无关能力。
- 新增 capability usage record，并把使用结果、产物、跳过理由和阻塞项加入完成门槛与最终交接格式。

### Personal homepage context

本次没有修改或重新部署个人主页代码。此前 The Living Atlas 首批改造已经完成移动溢出、移动目录、英中搜索、跳到主要内容、键盘焦点、减弱动效、导航目标和共享轮播脚本，并已通过 PR #12 合并部署。六阶段仍不是全部完成：Product/UX、视觉基线、Figma、交互 QA 和生产部署已覆盖当前修正批次；Creative Production 未执行，Data Analytics 只有 provider-neutral 规范，后续应按新的 capability record 透明记录。

### Verification to run

- Skill structure validation
- YAML parse and interface metadata check
- `git diff --check`
- Repository Pages build and asset validation, as required for documentation/skill-only changes

### Git state

- Branch: `codex/normalize-web-portfolio`
- Existing unrelated working-tree changes were preserved.
- Commit / push / PR: not performed for this local skill update.

## 2026-07-24: Living Atlas content system v1

### Current target

完成 Living Atlas 信息架构、内容状态、自动列表和共享实现契约，使它成为其余五站及未来网站的第一份参考实现。

### Completed

- 建立 `THE-LIVING-ATLAS/content-registry.js` 与 `THE-LIVING-ATLAS/web-core.js`。
- 该批次曾把 Worlds 显式解释为知识库、虚构小说、自媒体创作和交互项目；创作者已在后续纠偏中否决此对应关系，最新规则是保留 Knowledge / Story / Media / Interaction 的含混性。
- Sites 只渲染已发布且有真实 URL 的五个网站。
- Now、Latest、Index 与 Search 使用同一双语 registry。
- 移除全部 `href="#"`；planned / mapping / published / archived 状态形成跨站契约。
- 修复英文 `lang` 与移动目录覆盖标题。
- 新增 `web/content-system.md`、Living Atlas 专项测试和 Figma Content System v1。
- README 权威项目表、组合审计、平台标准和站点文档已同步。

### Important decisions

- 不改变 Pages workflow、slug、URL 或生成目录。
- 不迁移框架；先保留静态 ES Modules。
- 不添加 analytics provider。
- 当前 Web Core 随 Living Atlas 发布；仓库级 `shared/web-core/` 仍需要单独授权 build-map 变更。

### Modified files

- `THE-LIVING-ATLAS/index.html`
- `THE-LIVING-ATLAS/zh.html`
- `THE-LIVING-ATLAS/style.css`
- `THE-LIVING-ATLAS/atlas.js`
- `THE-LIVING-ATLAS/content-registry.js`
- `THE-LIVING-ATLAS/web-core.js`
- `THE-LIVING-ATLAS/CONTENT.md`
- `THE-LIVING-ATLAS/DESIGN.md`
- `THE-LIVING-ATLAS/TECH.md`
- `THE-LIVING-ATLAS/HANDOFF.md`
- `tests/living-atlas-content-system.test.mjs`
- `package.json`
- `README.md`
- `web/content-system.md`
- `web/platform-standard.md`
- `web/portfolio-audit.md`
- `HANDOFF.md`

### Verification

- `git diff --check`: Passed before handoff append; rerun required at final.
- `npm run build:pages`: Passed.
- `npm run validate:pages`: Passed — 337 local references across 41 HTML/CSS files.
- `npm run lint`: Passed — 0 errors, 24 existing warnings.
- `npm run build`: Passed.
- `npm test`: Passed — 5/5.
- Browser QA: Passed for English / Chinese rendering, desktop / mobile containment, published filtering, Index, Search, mobile menu, carousel, and console health.
- Figma: `TSRat Content System · v1`, node `18:2`; `Shared / Content Status`, node `18:47`; render QA passed.

### Remaining

- Actual Small Red Book / WeChat links need creator input.
- Article-level Knowledge data and real counts are not ready.
- Repository-level shared runtime publication needs explicit authorization to modify `scripts/build-github-pages.mjs`.
- No commit, push, Preview, or PR has been performed.

### Git state

- Branch: `codex/living-atlas-content-system`
- Base commit: `999e302`
- Existing unrelated `HANDOFF.md` skill-priority changes and `.agents/skills/build-new-site-to-pr/` remain preserved.

## 2026-07-24: Default branch delivery and unmerged Preview rule

### Current target

让每次网站可视改动在不直接修改或自动合并 `main` 的前提下，默认完成专用 branch、commit、push、Pull Request 和可直接浏览的未合并 Preview。

### Completed

- `AGENTS.md` 不再要求每次 commit、push、创建 / 更新 PR 都单独等待授权；网站任务验证通过后默认执行这些交付动作。
- `merge` 仍需要创作者单独明确授权；继续禁止直接提交 `main`、force push 和自动合并。
- 每次网站可视改动都必须提供无需 merge 即可打开的网页 Preview URL；PR 代码页、localhost 和 artifact 下载不能替代 Preview。
- Preview 必须对应实际审查 branch / commit，并通过真实浏览器检查主要路由、资源、响应式、交互与控制台。
- `normalize-web-portfolio` 的 Preview 从“有条件时提供”改为每个网站批次的强制门槛。
- `build-new-site-to-pr` 继续保留强制 Preview / PR，并把文档输出从硬编码的 `docs/web/sites/` 改为仓库感知的 `<site-doc-root>`；本仓库使用 `web/sites/`。
- `web/platform-standard.md` 同步默认交付与 Preview 规则。

### Safety boundary

- 默认交付授权不允许把来源不明或无关文件一起提交。
- 不改变 GitHub Pages 的 `main` Actions artifact 架构。
- 不自动 merge 当前或未来的 Pull Request。

### Current delivery

- Branch: `codex/living-atlas-content-system`
- Commit: `d85c78c` — `build living atlas content system and review workflow`.
- Push: completed to `origin/codex/living-atlas-content-system`.
- Draft PR: <https://github.com/TSRat/My-Website/pull/13>.
- Unmerged Preview: <https://raw.githack.com/TSRat/My-Website/codex/living-atlas-content-system/THE-LIVING-ATLAS/index.html>.
- Merge: not performed.

### Validation

- `build-new-site-to-pr` and `normalize-web-portfolio`: `quick_validate.py` passed.
- `git diff --check`: Passed.
- `npm run build:pages`: Passed.
- `npm run validate:pages`: Passed — 337 local references across 41 HTML/CSS files.
- `npm run build`: Passed.
- `npm test`: Passed — 6 / 6.
- `npm run lint`: Passed — 0 errors; 24 existing warnings outside this batch.

## 2026-07-24: Living Atlas migration starter and Data foundation

### Current target

把 Living Atlas 已完成的信息架构整理为后续五站和未来网站可复用的迁移起点，同时加入必要的 Data 入口，但不在内容和数据尚未成熟时虚构 dashboard 或指标。

### Completed

- 新增仓库源码模板 `web/templates/site-starter/`：site manifest、content registry、Data empty state、provider-neutral analytics adapter 和迁移清单。
- 新增 `web/analytics-standard.md`，定义事件字段、provider 激活门槛、隐私边界和未来可计算指标。
- Living Atlas 英中页面新增 Data 导航、Index、Search 和可见 empty state。
- 默认 analytics adapter 保持 no-op；无网络、cookie、storage、identity 或原始搜索文本。
- Figma 新增 `TSRat Data & Analytics · v1` 可编辑画面与 Living Atlas Data empty state。
- 完成 baseline / review 固定视口组合审查，结果记录在 `web/evidence/living-atlas-template-data/visual-regression.md`。
- 更新项目表、平台标准、内容系统和迁移队列，明确其余站点的采用顺序与阻塞条件。

### Migration readiness

1. **IVORY ARCHIVE**：先建立动态源码与 Pages 生成结果的 parity 检查，再采用 manifest / Data / events。
2. **Hypatia + Hildegard**：使用 section-level visual gate，加入 manifest、Data 入口和站点特定事件，不改变视觉主题。
3. **Enheduanna**：先确认 `static-sites/enheduanna/` 到 `ENHEDUANNA/` 的重建链，再实施。
4. **Melromarc Sisters**：先找回上游源码，或由创作者明确授权重建。

### Important decisions

- 复用能力和契约，不复用统一皮肤。
- starter 是复制后适配的源文件示例，不修改受保护的 Pages build map，也不创建第二份项目 registry。
- Data 入口可以先存在，但必须诚实显示 provider 状态；没有来源、基准和 session 定义时不设 KPI 目标。
- 当前 PR 不启用任何外部 analytics provider。

### Validation

- JavaScript syntax and targeted tests: Passed。
- Pages build and asset validation: Passed。
- Application build and complete tests: Passed。
- Lint: Passed with 0 errors and 24 pre-existing warnings outside this batch。
- Browser QA: Passed for English / Chinese, desktop / tablet / mobile, menu, Search → Data, horizontal containment, and console health。
- Visual preservation: Passed for the additive scope; all visible changes are documented and intentional。

### Git state

- Branch: `codex/living-atlas-template-data`
- Base: `origin/main` merge commit `16e9706`
- Implementation commit: `0c7c33b` — `add living atlas data entry and migration starter`
- Push: completed to `origin/codex/living-atlas-template-data`.
- Unmerged Preview: <https://raw.githack.com/TSRat/My-Website/codex/living-atlas-template-data/THE-LIVING-ATLAS/index.html>
- Chinese Preview: <https://raw.githack.com/TSRat/My-Website/codex/living-atlas-template-data/THE-LIVING-ATLAS/zh.html>
- Draft PR: <https://github.com/TSRat/My-Website/pull/14>
- Remote Preview QA: Passed — 英中 Data、16 个 Index links、移动 Search → Data、无横向溢出、0 console errors。
- Merge: not authorized and not performed.

## 2026-07-24: Creator correction — Worlds remain ambiguous

### Current target

纠正 Living Atlas 内容系统中过度明确的作品集式分类，恢复创作者原版 Worlds，并删除 Knowledge / Index 的解释句。

### Completed

- 可见 Worlds 回滚为 Knowledge / Story / Media / Interaction（知识 / 故事 / 媒体 / 交互），只有图像、编号和标题。
- 删除 World 描述、Knowledge 说明和 Index 说明。
- 项目内容与设计文档把“有意含混”记录为受保护的创作者决定。
- 跨站内容契约不再把 Worlds 解释为知识库、虚构小说、自媒体和交互项目的一一对应表。
- Figma Content System 的 Worlds 定义同步修正。
- 测试与视觉证据加入当前 PR #14。

### Important decision

共享系统可以维护稳定 ID、发布状态、搜索和自动索引，但不能把创作者的开放概念强行改写为作品集 taxonomy。以后迁移其他网站时也必须区分“系统内部结构”和“对读者公开的解释”。

### Validation and delivery

- Targeted tests: 8 / 8 passed。
- Pages build and 337-reference validation passed。
- Fixed-viewport browser QA and human side-by-side review passed。
- Full checks passed: `npm run build`；`npm test` 9 / 9；`npm run lint` 0 errors、24 个既有 warnings。
- Delivery: commit `2b7fa13` (`restore living atlas worlds ambiguity`) 已 push 到现有 PR #14 branch。
- Exact Preview QA: Passed — 英中标题正确、World 卡片内 0 个说明段落、Knowledge / Index 说明不存在、图片无损坏、desktop `1425 ≤ 1440`、Chinese mobile `375 ≤ 390`。
- Exact English Preview: <https://raw.githack.com/TSRat/My-Website/2b7fa13bef09cc9c1cfa68f4d705e732550cfacc/THE-LIVING-ATLAS/index.html#worlds>
- Exact Chinese Preview: <https://raw.githack.com/TSRat/My-Website/2b7fa13bef09cc9c1cfa68f4d705e732550cfacc/THE-LIVING-ATLAS/zh.html#worlds>

## 2026-07-24: Antigravity QA handoff and PR #14 merge authorization

### Current target

简化未来 Codex 提交前验证，把全面浏览器与视觉回归交给 Antigravity，并按创作者明确授权合并 PR #14。

### Configuration decision

- Codex 只运行与改动直接相关的基本检查：Git diff、Pages / asset validation、最小相关 build / targeted test / lint，以及一个代表性目标页 smoke check。
- 只有响应式改动才额外检查一个相关窄视口。
- Antigravity 负责多路线、多设备 / 浏览器、控制台与网络、完整交互、键盘可访问性、截图 / 感知比较和人工 overlay。
- Antigravity 深度报告缺失不阻止 commit、push、PR，或创作者明确授权后的 merge；但不得把基本 smoke 写成完整视觉验证。
- 部署、权限、认证、支付、隐私、安全和数据迁移仍按风险运行专项检查。

### Modified configuration

- `AGENTS.md`
- `.agents/skills/normalize-web-portfolio/SKILL.md`
- `.agents/skills/build-new-site-to-pr/SKILL.md`
- `web/platform-standard.md`
- `TECH.md`

### Delivery

- Branch: `codex/living-atlas-template-data`
- PR: <https://github.com/TSRat/My-Website/pull/14>
- Merge: explicitly authorized by the creator; perform after configuration validation and push.

## 2026-07-25: Import the next two Sites projects

### Current target

继续把用户拥有的 OpenAI Sites 项目迁入 `My-Website` 六阶段体系，同时在
独立 worktree / branch 中工作，不覆盖原工作区正在进行的整理。

### Completed

- 迁入两份哲学导读的可维护源码：
  - `sites/sartre-nausea-guide/`
  - `sites/existentialism-humanism-guide/`
- 生成并提交两个完全静态、资源相对化的 Pages 镜像：
  - `SARTRE-NAUSEA-GUIDE/`
  - `EXISTENTIALISM-HUMANISM-GUIDE/`
- 新增 `npm run sync:philosophy-sites`，由真实源码构建镜像；生成目录不是
  手工维护来源。
- 修正便携导出中的 public asset base：favicon、栗树根图片与 hydration
  metadata 现在统一编译为相对路径，不再向预览域名根目录发出重复请求。
- 更新 Pages 构建映射、README 权威项目表、TECH、portfolio audit 与
  Living Atlas 唯一网站注册表。
- 用实际页面截图生成 Living Atlas 缩略图。
- Figma 共用文件已加入两站的主题 tokens、desktop / mobile 画面、六阶段
  coverage 与 provider-neutral Data cards：
  - Sartre: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=33-32>
  - Existentialism: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=33-73>
- Codex basic browser smoke 已覆盖 1440 × 900、390 × 844、真实基线并排、
  资源加载、横向 containment、console 与一个核心交互状态。

### Important decisions

- 本批只迁移两站；其他私人、真人资料或同人 IP 站点继续保持待确认状态，
  不擅自公开。
- Sartre Nausea Guide 分级为 `REFACTOR`；只允许文档化的可访问性与部署
  修正。
- Existentialism Guide 分级为 `PRESERVE`；正文、视觉和交互保持原样。
- 统一基础设施、可访问性、QA、部署和分析契约，不统一两站视觉。
- Analytics 仅建立 provider-neutral 规范；没有启用外部 provider、
  cookie、identity 或自由文本采集。
- 保留现有 GitHub Actions Pages 架构；没有创建或启用 `gh-pages`。

### Known issues / remaining

- `public/chestnut-root.png`、favicon 和装饰资源的来源与使用权需要创作者
  确认。
- Existentialism 子项目的干净安装报告 6 个依赖漏洞（1 low、5 high）；
  未在迁移任务中擅自升级依赖。
- Antigravity 扩展全路线、多浏览器、键盘、网络与 overlay QA 待执行。
- 两个 exact-commit raw.githack preview 与 Draft PR #19 已通过基本浏览器
  smoke；不得在没有单独授权时 merge。
- 其他 Sites 迁移候选仍需逐站处理隐私、来源、授权和去重门槛。

### Modified files

- `README.md`
- `TECH.md`
- `HANDOFF.md`
- `package.json`
- `scripts/build-github-pages.mjs`
- `scripts/sync-philosophy-site-mirrors.mjs`
- `web/portfolio-audit.md`
- `THE-LIVING-ATLAS/content-registry.js`
- `THE-LIVING-ATLAS/TECH.md`
- `THE-LIVING-ATLAS/HANDOFF.md`
- `THE-LIVING-ATLAS/assets/thumb-sartre.png`
- `THE-LIVING-ATLAS/assets/thumb-existentialism.png`
- `sites/sartre-nausea-guide/`
- `sites/existentialism-humanism-guide/`
- `SARTRE-NAUSEA-GUIDE/`
- `EXISTENTIALISM-HUMANISM-GUIDE/`

### Commands and results

- Site-local install, lint, static export and 3/3 exported-HTML tests: Passed
  for both sites.
- `npm run sync:philosophy-sites`: Passed.
- `node --test tests/*.test.mjs`: expectedly failed before the root Worker
  artifact existed; the two renderer tests require `npm run build` first.
- `npm test`: Passed — root build and 21/21 tests.
- `npm run build:pages`: Passed.
- `npm run validate:pages`: Passed — 461 local references across 56 HTML/CSS
  files.
- `npm run lint`: Passed — 0 errors and 24 pre-existing warnings outside this
  batch.
- Portable-mirror local network smoke: Passed — 两站页面、脚本、样式与图片
  均从各自大写子目录加载，未再出现 root-path favicon / chestnut 404。
- `git diff --check`: Passed.

### Git state

- Dedicated worktree: `/private/tmp/My-Website-sites-six-stage`
- Branch: `codex/sites-six-stage-import`
- Starting commit: `2d36674`
- Implementation commit: `2ecd4325f72a61d5d6d3ba5a1833809cdd3a6cdd`.
- Sartre exact preview:
  <https://raw.githack.com/TSRat/My-Website/2ecd4325f72a61d5d6d3ba5a1833809cdd3a6cdd/SARTRE-NAUSEA-GUIDE/index.html>.
- Existentialism exact preview:
  <https://raw.githack.com/TSRat/My-Website/2ecd4325f72a61d5d6d3ba5a1833809cdd3a6cdd/EXISTENTIALISM-HUMANISM-GUIDE/index.html>.
- Draft PR: <https://github.com/TSRat/My-Website/pull/19>.

### Next step

Hand Draft PR #19 and both immutable previews to Antigravity. Do not merge
without explicit creator authorization.

## 2026-07-25: Melromarc Sisters maintainable reconstruction

### Current target

Rebuild Melromarc Sisters as a maintainable source project after the original
ChatGPT Work conversation and Sites page were found but no source export was
available. Preserve the accepted site content, identity, interactions, public
URL, and Pages deployment architecture.

### Completed

- Recovered 13 story records, 18 gallery records, six filter labels, five
  fate-map stages, and the complete accepted stylesheet from the former active
  artifact into readable source.
- Added `static-sites/melromarc-sisters/` as the authoritative React/TypeScript/
  Vite project.
- Added `npm run dev:melromarc` and `npm run build:melromarc`.
- Added the shared maintainable-site build convention already used by the
  independent Enheduanna Draft PR #17: ignored staging followed by a committed
  uppercase Pages mirror.
- Preserved `melromarc-saved-stories`, search, filters, random story, reader,
  fate map, gallery, content boundaries, feminist critique, and site identity.
- Added a visible provider-none Data entry without activating analytics.
- Retained old unreferenced Vinext bundles as rollback material and added
  source/mirror/hash tests.
- Moved project documentation to the authoritative source directory and
  updated the registry, platform audit, technical map, and Agent routing rule.

### Important decisions

- This is an authorized reconstruction from the accepted deployment baseline,
  not a claim that the original Sites source was exported.
- Future content and UI changes belong in
  `static-sites/melromarc-sisters/`; `MELROMARC-SISTERS/` is generated.
- Shared infrastructure does not imply shared visual identity.
- No old bundle, public asset, route, or deployment workflow was deleted.
- Draft PR #18 remains unmerged; creator review is required.

### Verification

- `npm run build:melromarc`: passed; 18 modules.
- `node --test tests/melromarc-readiness.test.mjs`: passed; 4/4.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed; 327 references across 44 HTML/CSS files at
  the implementation checkpoint.
- Browser smoke at 1280px and 390px: no broken images, no horizontal overflow,
  Data visible, no console errors.
- Interactions: filter, random reader, save storage, dialog close, and body
  scroll restore passed.
- Antigravity extended visual/accessibility matrix: not run by design.

### Remaining

- The reconstruction is client-rendered and does not preserve old Vinext
  RSC/SSR metadata.
- Dialog focus trap/return remains for Antigravity.
- `npm run lint`: passed with 0 errors and 24 existing warnings outside this
  project.
- `git diff --check`: passed.
- The exact-commit remote preview passed with 13 stories, 18 gallery figures,
  Data visible, no broken images, no overflow, and no console errors.

### Delivery

- Enheduanna: [Draft PR #17](https://github.com/TSRat/My-Website/pull/17),
  [exact-commit preview](https://raw.githack.com/TSRat/My-Website/28b7b8cc91b1cbcec53c0fea0eaf0fac404241bb/ENHEDUANNA/index.html).
- Melromarc: [Draft PR #18](https://github.com/TSRat/My-Website/pull/18),
  [exact-commit preview](https://raw.githack.com/TSRat/My-Website/edb5cd20374147c8738d4340374c7b90e930bede/MELROMARC-SISTERS/index.html).
- Merge: not performed.

## 2026-07-25: Enheduanna maintainable source reconstruction

### Current target

在未能从 ChatGPT Work / Sites 导出原工程的情况下，按创作者明确授权，利用仓库内完整可读 TSX/CSS/资源和当前 Pages 镜像，恢复可维护源码工程与可重复 source-to-mirror 构建。

### Completed

- 找到 Enheduanna 的 ChatGPT Work / Sites 任务与站点输出；编辑界面没有暴露源码下载或导出。
- 新增共享 `scripts/build-maintainable-site.mjs`，先构建到 `.site-build/`，检查入口后再更新既有大写 Pages 镜像。
- 新增 `static-sites/enheduanna/vite.config.ts`、`npm run dev:enheduanna` 与 `npm run build:enheduanna`。
- 从权威源码重建当前 `ENHEDUANNA/` 入口与哈希 JS/CSS；历史 bundle 不删除。
- 实现 `13 · DATA / SIGNALS` provider-none 入口，不启用网络分析、Cookie、持久化身份或虚构指标。
- 修复旧基线在 1024px 的 hero 横向溢出；不改变桌面艺术方向、内容章节或公开 URL。
- 更新 README registry、全局/项目技术文档、组合审计、六阶段 handoff、manifest 与 targeted tests。

### Validation

- `npm run build:enheduanna`: Passed.
- `node --test tests/enheduanna-readiness.test.mjs`: Passed — 3/3.
- `npm run build:pages`: Passed.
- `npm run validate:pages`: Passed.
- Playwright basic smoke: 1280 / 1024 / 390 CSS pixels, Data visible, 8/8 images loaded, no console errors, no horizontal overflow.
- Antigravity extended QA: not run; section-level visual comparison, keyboard and multi-browser review remain delegated.

### Delivery state

- Branch: `codex/enheduanna-six-stage-readiness`.
- Draft PR: <https://github.com/TSRat/My-Website/pull/17>.
- Implementation commit: `28b7b8cc91b1cbcec53c0fea0eaf0fac404241bb`.
- Exact-commit Preview: <https://raw.githack.com/TSRat/My-Website/28b7b8cc91b1cbcec53c0fea0eaf0fac404241bb/ENHEDUANNA/index.html>.
- Merge: not authorized and not performed.

## 2026-07-25: Website Archive image covers

### Current target

Replace every formal Website Archive card's abstract placeholder with a
representative image in the established Hypatia full-bleed format, and expose
the parent Website Archive from both Living Atlas language variants.

### Completed

- All six root cards now render full-bleed image covers through one shared CSS
  rule.
- Enheduanna, Hildegard, and Hypatia use web-optimized 1600px derivatives of
  creator-owned `Women Story` cover artwork. Repository documentation records
  their modern/creator-artwork status without committing a private local path.
- Melromarc uses the existing sisters-holding-hands gallery image
  `08-walking-together.jpg`, as directed by the creator.
- IVORY reuses its botanical archive image; Living Atlas reuses its existing
  Kandinsky hero.
- Living Atlas English and Chinese desktop navigation and mobile menus now link
  to the parent archive with relative `../` URLs.
- The project registry and regression tests require every mirror-backed site's
  hub cover to exist in its maintainable source.
- Existing shared Figma source remains applicable; this small approved
  adaptation did not require a new Figma frame or a new visual direction.

### Validation

- `npm run build:pages`: passed.
- `npm run validate:pages`: passed — 380 references across 46 HTML/CSS files.
- `npm run build`: passed.
- `npm test`: passed — 22/22.
- `npm run lint`: passed with 0 errors and 24 existing warnings.
- Browser smoke: root desktop/mobile and Living Atlas English desktop/Chinese
  mobile passed with six loaded covers, working parent links, no broken images,
  no horizontal overflow, and an operable mobile-menu destination.
- Extended cross-browser and accessibility review remains assigned to
  Antigravity.

### Git state

- Branch: `codex/hub-image-covers`.
- Base: merged `main` at `518d7f9`.
- Implementation commit: `77eb3c3a2e3d2a4e344b8536b3ebaf44e45626d4`.
- Push: completed to `origin/codex/hub-image-covers`.
- Verified unmerged archive preview:
  <https://htmlpreview.github.io/?https://gist.githubusercontent.com/TSRat/0bf430d6576faa8f7708da3bb4f7b7ab/raw/4dcc04246de17dfd7c89671f2b70992fb959bdee/website-archive-preview.html>.
- Draft PR: <https://github.com/TSRat/My-Website/pull/22>.
- Merge: not performed; automatic merge remains prohibited.

## 2026-08-04: Website Archive and Knowledge shared favicon

### Current target and decision

Use the latest Living Atlas square SVG favicon for both the public Website
Archive navigation page and every bilingual Living Atlas Knowledge route. This
is a browser-chrome asset correction only; site layouts and content are unchanged.

### Completed

- Updated the Pages hub generator and committed root `index.html` baseline to
  reference `THE-LIVING-ATLAS/favicon.svg?v=20260804-1`.
- Updated all eight authoritative Knowledge routes and regenerated the
  `THE-LIVING-ATLAS/` mirror.
- Added regression coverage for route depth, MIME declaration, cache key, and
  shared hub/Living Atlas identity.
- Branch: `codex/living-atlas-favicon-surfaces`; base: `origin/main` at
  `208b85d`; implementation commit:
  `586b542c9629896dd9e28c20b98202840d8f25fc`.
- PR: <https://github.com/TSRat/My-Website/pull/41>; merged as
  `eca27d1ae72958079e4a624678a84b7150f8174b`.

### Verification and remaining work

- Targeted tests: passed, 20/20; `npm run build:living-atlas`: passed.
- Exact implementation commit `npm run build:pages`: passed;
  `npm run validate:pages`: passed, 936 references across 99 HTML/CSS files.
- Local browser smoke: both surfaces fetched the branded SVG with HTTP 200 and
  `image/svg+xml`; no console errors.
- Exact implementation previews:
  <https://raw.githack.com/TSRat/My-Website/586b542c9629896dd9e28c20b98202840d8f25fc/>
  and
  <https://raw.githack.com/TSRat/My-Website/586b542c9629896dd9e28c20b98202840d8f25fc/THE-LIVING-ATLAS/knowledge/>.
- GitHub Pages run
  <https://github.com/TSRat/My-Website/actions/runs/30918123313> passed every build,
  asset-validation, mirror-validation, upload, and deploy step.
- Cache-resistant production browser smoke passed for the Website Archive,
  Knowledge portal, and a nested discipline route: each resolved the shared
  Living Atlas SVG with HTTP 200 and `image/svg+xml`; no console errors.
- Production publication is complete. Antigravity extended QA remains pending.
