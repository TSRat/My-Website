# Hildegard handoff

## 2026-07-29 · Creator review corrections

### Current target

Correct the visible problems identified in the creator screenshot without changing the approved 20-folio learning order.

### Completed

- Used three traceable files from the creator's `Photo 23.03.17` folder:
  - `hildegard-photo-scivias-cosmos.jpg` on the series hero;
  - `hildegard-photo-kiedrich-kyriale.jpg` on Music 1/2;
  - `hildegard-photo-litterae-ignotae.jpg` as historical evidence on Language 2/2.
- Rewrote image captions as positive identification: work type, source and visual role.
- Unified all 17 chapter leaves under the `章节 · 本页内容` heading grammar.
- Moved every chapter-leaf introduction below its body and labelled it `本页引言`.
- Reduced the fixed right rail from 20 screen links to nine chapter links.
- Removed both standalone Interlude sections.
- Rebuilt Music 1/2 as a media/text spread, so the right side carries the Gregorian/Hildegard comparison.
- Moved desktop marginalia into a reserved grid column; pager overlap is now structurally impossible.
- Raised Vision-page contrast: ivory headings/body, parchment-muted supporting text and gold labels.
- Added balanced heading wrapping and a mobile block rule for Chinese subchapter labels.
- Bumped stylesheet, token import and runtime cache keys to `illuminated-leaves-v2`.
- Updated the existing Figma frames in place, including the creator-selected hero image.

### Verification

- `node --check sites/hildegard/assets/hildegard-refresh.js` — passed.
- `npm run build:hildegard` — passed.
- `node --test tests/historical-sites-six-stage.test.mjs` — 2/2 passed.
- `npm run build:pages` — passed; unrelated generated mirror changes were discarded.
- `npm run validate:pages` — passed, 636 local references across 75 HTML/CSS files.
- `git diff --check` — passed.
- Playwright five-viewpoint structural smoke — passed:
  - 20 folios, nine chapter-rail links, zero Interludes;
  - all chapter titles use `章节 · 内容`;
  - all 17 post-body introductions occur before their pager;
  - zero marginalia/pager overlaps and zero horizontal overflow;
  - all three Photo-folder assets loaded at every checked viewport;
  - Music 1/2 is two columns at 1440/1024 and reflows to one column at 768/390/320.
- Visual screenshots inspected at 1440×900, 390×844 and 320×568.
- Antigravity extended QA — pending.

### Modified source

- `sites/hildegard/index.html`
- `sites/hildegard/assets/hildegard-refresh.js`
- `sites/hildegard/assets/hildegard-site.css`
- `sites/hildegard/assets/hildegard-tokens.css`
- `sites/hildegard/assets/images/hildegard-photo-*.jpg`
- `sites/hildegard/CONTENT.md`
- `sites/hildegard/DESIGN.md`
- `sites/hildegard/design/figma-handoff.md`
- `web/sites/hildegard/product-spec.md`
- `web/sites/hildegard/design-handoff.md`
- generated mirror `HILDEGARD/`

### Review state

- Branch: `codex/hildegard-interface-refactor`.
- Draft PR: <https://github.com/TSRat/My-Website/pull/29>.
- Exact-commit website preview is maintained in the Draft PR description.
- Figma: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=45-49>.
- Antigravity extended QA remains pending.
- Merge only after explicit creator approval.

## 2026-07-28 · Illuminated Leaves interface refactor

### Current target

Turn the Hildegard longform into a 20-page digital manuscript while preserving the 00–08 narrative, evidence boundaries, public URL and static-source build.

### Completed

- Added a Daughters of Time series hero and a numbered 30-second primer.
- Split every chapter into two reading leaves; Authority is split into three.
- Added stable `#screen-00`–`#screen-19` anchors, page counters, chapter subcounters, page rail and previous / next navigation.
- Reframed the interface around illuminated-manuscript and religious-art composition: parchment, gold hairlines, rubric red, decorated initials, marginalia and bounded Visio blue.
- Raised body text to 18–19px and essential metadata to at least 14px.
- Replaced the tall mobile chapter bar with a 60px accessible menu.
- Changed the Bilibili embed to click-to-load.
- Kept every existing chapter image and its provenance caption; unverified local Photo-folder material remains reference-only.
- Added editable Figma foundations and four key screens without deleting older frames.

### Important decisions

- The site remains one HTML document; “pages” are stable deep-linked sections, not new routes.
- `sites/hildegard/index.html` is still readable without JavaScript. JavaScript progressively creates the 20-page reading UI from the original eight chapters.
- The modern memorial statue is used on the hero and explicitly labelled as a modern memorial, not a historical portrait.
- Decorative SVG glyphs remain structural ornament only.

### Modified source

- `sites/hildegard/index.html`
- `sites/hildegard/assets/hildegard-site.css`
- `sites/hildegard/assets/hildegard-tokens.css`
- `sites/hildegard/assets/hildegard-refresh.js`
- `sites/hildegard/CONTENT.md`
- `sites/hildegard/DESIGN.md`
- `sites/hildegard/TECH.md`
- `sites/hildegard/design/figma-handoff.md`
- `web/sites/hildegard/*.md`
- generated mirror `HILDEGARD/`

### Verification so far

- `node --check sites/hildegard/assets/hildegard-refresh.js` — passed.
- `npm run build:hildegard` — passed.
- `node --test tests/historical-sites-six-stage.test.mjs` — 2/2 passed.
- Playwright basic smoke — 1440×900, 1024×768, 768×1024, 390×844 and 320×568.
- Browser evidence — 20 folios, 18px body, zero horizontal overflow at all checked viewports, all 20 local images loaded, mobile menu opens and closes, deep link lands below the sticky header, video creates its iframe only after activation.
- Antigravity extended QA — pending.

### Remaining before PR handoff

- Creator review of the exact preview and Draft PR.
- Antigravity extended multi-browser, keyboard and perceptual QA.
- Merge only after explicit creator approval.

### Git state before publication

- Branch: `codex/hildegard-interface-refactor`
- Base: `3e4e753` (`origin/main` at task start)
- Implementation commit: `5bda9fc0fb93b378b664af15441fdc9490419136`
- Exact preview: <https://raw.githack.com/TSRat/My-Website/5bda9fc0fb93b378b664af15441fdc9490419136/HILDEGARD/index.html>
- Draft PR: <https://github.com/TSRat/My-Website/pull/29>
- Figma: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=45-49>
- Worktree after the implementation commit was clean; this handoff update is the only follow-up change.

The exact remote preview was opened after raw.githack's one-time external-content notice and passed with 20 folios, 18px body copy, zero horizontal overflow, correct exact-commit script URLs, and zero console errors or warnings.

## 2026-07-27 · Creator-supplied replacements

- 已将创作者新放入 `HILDEGARD/assets/` 的三张图复制到权威的 `sites/hildegard/assets/images/`，并替换第 02、05、06 章主图。
- 第 02、05 章使用《Vision》剧照；第 06 章使用未知之语字母表现代转录示意。caption 与图片来源说明明确标为现代视觉材料。
- `npm run build:hildegard` 已通过，发布镜像已更新；`git diff --check` 通过。
- 本地页面没有横向溢出；第 02 章新剧照已在浏览器中加载，第 05、06 章资源请求在本地预览中均返回 HTTP 200（它们仍按原有 `loading="lazy"` 行为在滚动到相应章节时加载）。

## 2026-07-26 · Real-image chapter plates

### Current target

将八章开头的原创 SVG 章节配图替换为可追溯的真实图像，同时继续明确区分史料、后世纪念图像、现代遗址与视觉隐喻。

### Completed

- `index.html` 的八张 `plate-*.svg` 已替换为本地优化的 JPEG：迪西博登贝格祭坛局部、修女群像、《认识道路》细密画、《天启交响曲》手稿、鲁珀茨贝格赎罪券、《自然学》抄本、鲁珀茨贝格旧址与艾宾根雕像。
- 每张图都有具体 alt 文本及不夸大其年代/性质的 caption；没有把后世作品或现代遗址写作现场记录。
- `#sources` 的图像说明已逐项链接至 Wikimedia Commons 文件页，记录《自然学》抄本的 Sailko / CC BY 3.0 归属，其余为 Public Domain 或 CC0。
- 原 SVG plate 文件保留在仓库中作历史/回滚材料，但入口不再引用它们；小型 glyph 仍只作无障碍隐藏的版式装饰。

### Verification

- `npm run build:pages`: passed; refreshed the generated `HILDEGARD/` mirror and Pages artifact.
- `npm run validate:pages`: passed — 522 local references across 65 HTML/CSS files.
- Browser basic smoke: desktop loaded all 8 chapter images at their expected natural dimensions; no horizontal overflow and no console errors. At 390 px, no horizontal overflow was present; lazy loading kept offscreen images unloaded until viewed, as expected.
- `git diff --check`: passed.

### Modified files

- `sites/hildegard/index.html`
- `sites/hildegard/assets/images/hildegard-*.jpg` (8 new optimized source images)
- `sites/hildegard/CONTENT.md`
- `sites/hildegard/TECH.md`
- `sites/hildegard/HANDOFF.md`
- `HILDEGARD/index.html` and `HILDEGARD/assets/images/hildegard-*.jpg` (generated deploy mirror)

## 2026-07-25 · Unified maintenance package

- Authoritative maintenance root: `sites/hildegard/`.
- `site.config.json` records the direct-static source, Figma, manifest, public
  path, build command, staging path, and mirror policy.
- `HILDEGARD/` is now a generated deploy mirror; edit the site package and run
  `npm run build:hildegard`.
- No visual, content, URL, analytics-provider, or framework change was intended.

- Last updated: 2026-07-21
- Project: 谦卑的反叛者：宾根的希尔德加德
- Current branch (creation): `agent/add-hildegard-site`
- Follow-up branch (this pass): `agent/fix-static-site-copy`
- Base commit at start: `8670663` — `feat: i18n and swap titles`

## Current goal

以 TSRat 稿件《谦卑的反叛者：宾根的希尔德加德》为叙事骨架，落地"时间的女儿 002"人物专题；视觉采用自定义的 Viriditas Codex 系统（Living Manuscript × Cosmological Geometry × Viriditas × Contemporary Editorial UI）；保留未来在 Figma 中继续编辑与迁移域名的可能性。

## 2026-07-21 修复 pass

反馈问题（用户在初版部署后指出）：

1. 章节 03/06 出现"每列只有一个汉字宽"的塌陷排版。
2. 文字过密、图像/视觉锚点过少。
3. 视频缺乏在页面内的呈现，只有文末外链。
4. 缺少像 HYPATIA / ENHEDUANNA 那样的完整"史料与延伸阅读"清单。

本次修复：

- 根本原因：`hildegard-site.css` 中 12 列栅格规则原本只作用于 `.chapter--manuscript`，导致 `.chapter--vision` 与 `.chapter--botanical` 的正文与旁注 fall back 到 `grid-column: auto`（=1 列）。已把 grid-column 规则扩展到三种章节屏。
- 每章右上加入一个 96 × 96 的装饰性 SVG "章节锚点"（`.chapter-glyph`）；桌面端 opacity 0.32，避免与正文视觉冲突；移动端自动缩小。
- 章节正文引入 `.pull-quote` 拉引金句；三种屏（Manuscript / Vision / Botanical）各自继承自己的色板。
- 每一章的正文段落被压缩：删除重复陈述，保留论点与关键人名/时间；把一些原本冗长的"叙事扩写"转成拉引句。
- 新增 `<section id="watch">` 内嵌 Bilibili iframe（BV1VE4gzNEYJ）+ 主标题 + 简介 + 外链按钮。
- 新增 `<section id="sources">`：史料分层 `<table class="source-table">` + `.reading-list` 外链 + `.image-credits` 折叠区。
- 站点头部 nav 增加 `观看` / `来源` 两个锚点。
- 页脚去掉旧的 Sources 列表，只保留 Series 导航 + About 快速跳转。
- 装饰图形仍全部为本站 SVG，没有 AI 生成的希尔德加德肖像；`image-credits` 中明确说明"AI 图片不能冒充史料"。

## Current state

- 维护目录：`sites/hildegard/`；`HILDEGARD/` 是生成的发布镜像。
- 入口：`sites/hildegard/index.html`（八章 + Portal + 两处 Interlude + Footer）。
- 样式：`assets/hildegard-site.css` + `assets/hildegard-tokens.css`（tokens 与 Figma Variables 一一对应）。
- 交互：`assets/hildegard-refresh.js`（IntersectionObserver-based reveal，尊重 `prefers-reduced-motion`）。
- 装饰：独立 SVG `glyph-viriditas`, `glyph-cosmic-wheel`, `glyph-branch`, `glyph-root`, `glyph-star`。
- Hub 注册：`sites/hildegard/site.config.json`（DAUGHTERS OF TIME · 002）。
- Living Atlas：`THE-LIVING-ATLAS/index.html` 的 `07 Sites` 增加 Hildegard 行，编号 `002 · Daughters of Time · ACTIVE`。
- 根 `README.md` 与 `HANDOFF.md`：项目表增加 Hildegard 条目。
- 文档：`CONTENT.md / DESIGN.md / TECH.md / HANDOFF.md / design/figma-handoff.md`。
- 新增：`#watch` 与 `#sources` 章节，位于主 `<main>` 内、页脚之前。

## Completed

- 严格按稿件结构（引子 + 八章 + 身后）撰写正文；史实、学界解读、叙事框架、视觉隐喻分层呈现。
- 建立 Viriditas Codex 视觉系统：六种屏（Portal / Manuscript / Vision / Botanical / Archive / Interlude）+ 独立 SVG 图形语言。
- 内部链接全部使用相对路径（`./assets/...`、`../HYPATIA/`），为未来换域名或去 `/My-Website/` 前缀留出低成本迁移路径。
- 无障碍：skip-link、focus-visible、`aria-hidden` 装饰、`prefers-reduced-motion` 降级。
- Figma handoff 文档：颜色、字号阶梯、栅格、SVG 清单、六种屏模板的 Figma 页面命名建议。
- 2026-07-21 追加：修复三屏栅格塌陷；把叙事密度和视觉锚点重新平衡；视频内嵌；史料结构化。

## Verification status

- `git diff --check`: Passed
- `npm ci`: Passed
- `npm run build:pages`: Passed — hub 与 Hildegard 镜像生成成功
- `npm run validate:pages`: Passed — 全部本地资源引用可解析
- `npm run lint`: Not run yet at handoff creation time — 下一步在 CI 中随 build 触发
- `npm test`: Not run yet — 需要在具备 GNU `timeout` 的环境执行；若本地环境缺失，CI 会跑
- Browser check：本地在 `python3 -m http.server 8000 --directory docs` 下以 375 / 820 / 1440px 三档快速核对布局

## Known issues / TODO

- ✅ 视频版本已发布：<https://www.bilibili.com/video/BV1VE4gzNEYJ>；页脚 Sources 现在直接外链。
- `TODO: needs confirmation`：是否引入公版抄本图像（如 Rupertsberg Scivias 手稿扫描）。
- `TODO: needs confirmation`：Kristin Hayter / Hildegard von Blingin' 官方链接是否作为外链嵌入。
- 目前 workflow 未为 Hildegard 增加 smoke check；后续如要加，请同步 `.github/workflows/publish-static-mirror.yml` 与 `TECH.md`。

## Do not change without confirmation

- 稿件叙事骨架与"性别观进步 vs 阶级观保守"张力段落（属于**观点改变**范畴）。
- `HILDEGARD/` 发布镜像目录名与 slug 大小写。
- Living Atlas 中 `002 · HILDEGARD` 的编号与位置。
- Viriditas Codex 主色轴与"金 ≤ 8% / 深蓝 ≤ 20% / 绿 ≥ 30% / 纸张 ≥ 40%"面积原则。
- `sites/hildegard/site.config.json` 中现有 slug 与复制逻辑。

## Next recommended tasks

1. 由创作者填入视频与外链后，去掉 Sources 中的 `TODO: needs confirmation`。
2. 若准备做 Figma 一致性稿：按 `design/figma-handoff.md` 在 Figma 中建立同名 Variables 与 SVG 组件。
3. 未来若要独立域名（如 `hildegard.tsrat.com`），只需把 `HILDEGARD/` 整目录托管到新平台并调整两处 canonical / og:url；相对路径无需修改。

## 2026-07-21 (v3) 图像 + 拆分 + 深色对比

- 新增 8 张 `plate-*.svg`（每章一张 800×500 hero 图，纯几何 + 剪影，绝不使用拟真面孔）：
  - `plate-narrow-gate` 01 窄门
  - `plate-inheritance` 02 传承
  - `plate-two-pillars` 03 修炼
  - `plate-symphonia` 04 音乐
  - `plate-authority` 05 权威
  - `plate-lingua-ignota` 06 语言
  - `plate-struggle` 07 斗争
  - `plate-afterlife` 08 身后
- `.chapter-plate` / `.chapter-plate figcaption` / `.subchapter` / `.subchapter-index` / `.subchapter-title` 全部纳入 Viriditas Codex CSS 系统，三种屏（Manuscript / Vision / Botanical）各自的色板都做了适配。
- 深色屏 numeral / meta 对比修复：`.chapter--vision .chapter-numeral` 现在使用 `--color-accent-soft`（gold-soft）+ opacity 0.55；`.chapter--botanical .chapter-numeral` 使用 gold-soft 0.7 + opacity 1；`.chapter-meta` 在深色屏由 muted 变为 accent-soft。
- 05 权威章按用户要求拆成 A/B/C/D/E 五个小节，标题为"与修女的关系 · 把弱势当武器 · 搬离修道院·独立王国 · 通信欧洲的权力中心 · 性别与阶级的两面"。
- 静态资源版本号：`hildegard-site.css?v=viriditas-v3`、`hildegard-refresh.js?v=viriditas-v3`。

## 2026-07-25 · Six-stage migration batch

### Current target

Complete the Data / analytics stage and six-stage handoff while preserving the
Viriditas Codex identity, chapter sequence, historical qualifications, and
direct static deployment.

### Completed

- Added the visible `#data` appendix and optional footer entry.
- Added `site-manifest.json` and provider-neutral `assets/site-analytics.js`.
- Covered chapters, supporting sections, sources, video, and Data entry events
  without a provider or persistent reader data.
- Added editable Figma desktop/mobile and Data component references at
  [node 27:2](https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=27-2).
- Added the six-stage handoff at
  `web/sites/hildegard/six-stage-handoff.md` and shared contract tests.

### Verification

- `npm run build:pages`: Passed.
- `npm run validate:pages`: Passed — 359 local references across 43 HTML/CSS
  files.
- `npm test`: Passed — 11/11 tests, including the new historical-site contract.
- `npm run lint`: Passed with 0 errors and 24 pre-existing warnings in the old
  Hypatia bundle and Enheduanna source.
- Browser smoke at 1280 and 390 CSS pixels: Data visible, analytics marker
  present, 0 broken images, and no horizontal overflow.
- Extended deterministic-section visual QA remains assigned to Antigravity.
- Branch: `codex/hypatia-hildegard-six-stage`.
- Implementation commit: `a8d393eb582d45e2a2a4af533d32ff534fa84721`.
- [Exact-commit preview](https://raw.githack.com/TSRat/My-Website/a8d393eb582d45e2a2a4af533d32ff534fa84721/HILDEGARD/index.html#data).
- [Draft PR #16](https://github.com/TSRat/My-Website/pull/16); not merged.

## 2026-07-25 · Website Archive cover

- Added `assets/hub-cover.jpg`, a 1600px web derivative of the creator-owned
  `Women Story / Hildegard / 封面2` Vol.1 artwork.
- `site.config.json` now exposes that asset to the parent Website Archive.
- The image is documented as creator artwork, not historical evidence.
- Pages build, asset validation, tests, lint, and desktop/mobile browser smoke
  passed on `codex/hub-image-covers`; extended QA remains with Antigravity.
