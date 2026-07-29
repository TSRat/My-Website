# La Malinche handoff

## 2026-07-29 · 后四章 35–69 屏重构

### 当前目标

保留既有 `00–34` 初学者叙事与视频播放器，把第五至第八章扩展为
`35–69` 的连续解释链，并保持原稿的限定语、责任分层与双重结论。

### 已完成

- 全站由 52 屏扩展为 70 屏；第五章从 `35` 开始，第六章从 `44`
  开始，第七章从 `54` 开始，第八章从 `61` 开始。
- 视频剧场保留在 `60` 与 `61` 之间，站内没有在播放器以外使用视频
  封面。
- 第五章补齐湖城结构、三方会面、礼物、拘押、两个战场、节庆屠杀、
  蒙特苏马死亡分歧与悲痛之夜。
- 第六章补齐天花、联盟、十三艘双桅帆船、封锁、围城压力、抵抗、
  谈判、城市陷落与 1522 年全球背景。
- 第七章补齐殖民墨西哥城、马丁、持续翻译、科约阿坎、婚姻与洪都拉斯、
  奥卢特拉重逢记录和晚年档案变薄。
- 第八章补齐早期记录、1826 年小说、民族母亲寓言、`malinchismo`、
  女性主义重读、时代错置、公共纪念物和最终责任账。
- 新增 1982 年混血纪念碑中的马琳切雕像照片（Public Domain）与
  特拉斯卡拉政府宫壁画照片（CC BY-SA 3.0）。
- Figma V6：
  <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=17-2>。

### 重要决定

- 原稿继续是内容权威；Figma V5 保留 `00–34`，V6 只负责 `35–69`。
- 桌面正文目标为 20–24px、题注 16–18px、标题 56–92px；每屏通过
  图像比例、色场、时间轴、档案、地图或法律账簿形成不同结构。
- 页面明确区分史实、学术解释、叙事框架与视觉隐喻；后世图像不作为
  十六世纪现场记录。

### 修改文件

- `sites/la-malinche/` 权威源码、文档、清单和两张新增档案图
- `web/sites/la-malinche/product-spec.md` 与 `design-handoff.md`
- `tests/malinche-readiness.test.mjs`
- `README.md`、根 `HANDOFF.md` 与 `LA-MALINCHE/` 生成镜像

### 验证与交付状态

- `npm run build:malinche`：通过。
- `node --check sites/la-malinche/assets/site.js`：通过。
- `node --test tests/malinche-readiness.test.mjs`：通过，2/2。
- `npm run validate:sites`：通过，11 个站点包。
- `npm run build:pages`：通过。
- `npm run validate:pages`：通过，703 个本地引用、78 个 HTML/CSS 文件。
- 内置浏览器桌面 smoke：70 屏、无横向溢出；`35`、`44`、`61`、
  `68`、`69` 已直接检查；两张新增公共图像按自然尺寸加载。
- 390×844 的独立 Chrome 截图受当前运行环境黑屏限制，未形成可用视觉
  证据；响应式 CSS 已保留，但窄屏人工复核仍列入 Antigravity 范围。
- `build:pages` 对两个无关的 Next.js 静态镜像产生了哈希构建变动；这些
  文件不属于本任务，不会暂存或进入 PR。
- PR 与精确提交预览在交付提交后补齐。
- Antigravity 多设备 / 多浏览器 / 视觉回归 QA：待后续扩展检查。

### 当前分支与下一步

- Branch: `codex/malinche-last-four-chapters`
- 下一步：提交、推送、创建 PR，并打开精确提交预览。

## 2026-07-29 · Website Archive 封面

- 按创作者本次明确要求，根网站档案馆中的 La Malinche 卡片改用
  `assets/cover-green.webp`，即素材库
  `Women Story/Malinche/封面2.png` 的现有优化版本。
- 该封面只用于父级 Website Archive 卡片；La Malinche 正文与 Living
  Atlas Featured World 继续使用透明 `malinche-cutout.png`。
- `site.config.json` 是总入口卡片的权威来源；`docs/` 仍由 Pages 构建
  生成，没有手工维护。
- Source / maintenance tests 13/13、Malinche build、完整 Pages build、
  650-reference asset validation 和 11-site validation 均通过。
- 浏览器确认总入口实际加载 `LA-MALINCHE/assets/cover-green.webp`
  （自然尺寸 `2560 × 1440`），卡片内使用既有 `object-fit: cover`。
- Branch: `codex/sync-malinche-series`; implementation: `333063b`;
  PR: <https://github.com/TSRat/My-Website/pull/30>.
- Antigravity extended QA pending; merge not authorized.

## 2026-07-28 · 时间的女儿系列入口同步

- 在现有黑底 / 金字页脚中加入 `001–004` 系列导航，003 当前篇使用金色
  下划线与 `aria-current="page"`。
- 保留顶部与底部 TSRat 标识、52 屏正文和返回 The Living Atlas；
  没有改动首屏人物图、视频或历史内容。
- `npm run build:malinche`、组合 Pages 构建和资产校验均通过。
- 浏览器在 `390 × 844` 下确认四期链接分两行排布、当前篇清楚、无横向
  溢出。
- Branch: `codex/sync-malinche-series`; Antigravity extended QA pending.

- Project: `马琳切：谁背叛了背叛者？`
- Series: `时间的女儿 · 003`
- Branch: `codex/site-la-malinche`
- Figma V5: <https://www.figma.com/design/oSIKdvkSLayRe2BBAyuDoi?node-id=16-2>
- Pull Request: <https://github.com/TSRat/My-Website/pull/28>
- Verified exact-implementation preview:
  <https://raw.githack.com/TSRat/My-Website/b18a62d/LA-MALINCHE/index.html>

## Current goal

Deliver the creator-approved 52-screen beginner chronology without restarting
the established visual rebuild. Preserve Malintzin's available perspective
through Chapter 2, make the Chapter 2 → 3 shift unmistakable, expand the Spanish
background, and give Tlaxcala and Cholula enough independent explanation. The
current revision specifically replaces undersized card copy, an incorrect map,
visible production notes, repeated right-side four-card compositions, and the
inconsistent scene-caption sizes that were overriding the hierarchy established
by `23 · 十五世纪 · 欧洲走向远洋`.

## Completed

- Expanded the approved reading sequence from 41 to 52 consecutive scenes
  (`00`–`51`) while preserving all eight chapter anchors and both direct video
  players.
- Rebuilt `00` as a proportional cut-out profile, kept “一个人，三个名字。” on
  one line at desktop and mobile, and made `02` a first-time-reader identity /
  stakes introduction.
- Gave city-states, the Triple Alliance and tribute, religion / sacrifice /
  slavery, Olutla, noble-origin evidence, and enslavement their own Chapter 1
  scenes.
- Rebuilt Chapter 2 around Potonchán, the twenty transferred women, baptism,
  Doña Marina, the translation chain, the birth of “Malinche,” possible abuse,
  Totonac politics, and her gradual understanding of Spanish aims.
- Added a strong jade-to-red torn transition before the new Spanish chapter,
  then explained navigation, political unification, conquistador identity,
  Columbus, the Caribbean colonial system, Cortés in Cuba, and the 1519
  expedition.
- Reordered Veracruz, Tlaxcala, and Cholula as context → event → evidence.
  Cholula now has a dedicated modern archaeological photograph and a separate
  massacre / contested-warning scene.
- Replaced every `奥卢塔` occurrence with `奥卢特拉`, retained both TSRat logos,
  and removed conclusion-first `不是……而是……` phrasing from the rebuilt
  `00`–`34` sequence.
- Updated source, generated mirror, registry, manifests, test, product spec,
  design handoff, and Figma V5 reference.
- Replaced the creator route graphic on `06` with a sourced Chinese map of the
  Triple Alliance tributary provinces and neighboring polities.
- Rebuilt `07` as a large Codex Borbonicus image plus a three-line ritual /
  warfare / enslavement ledger; rebuilt `17` with substantially larger language
  fields and explanatory copy.
- Removed the production-direction sentence from `22` and replaced it with
  reader-facing historical context.
- Rebuilt `23` around the 1502 Cantino planisphere and `25` around a visibly
  qualified 1847 history painting.
- Rebuilt `32` as a continuous conflict-to-alliance route with a full-width
  outcome field; the prior right-side four-card matrix no longer exists.
- Standardized all 50 visible `.eyebrow` captions to the responsive type size
  established by scene `23`: `18.56px / 34.336px` at the checked
  `1782 × 864` viewport and `16px / 29.6px` at `390 × 844`. Scene-specific
  paragraph selectors no longer shrink `11` or enlarge `22`.

## Important decisions

- The reader does not receive Spain's full backstory before Malintzin could
  plausibly recognise the expedition's identities and aims.
- Historical fact, scholarly interpretation, narrative framing, and visual
  metaphor remain explicitly separated.
- The Cholula photograph is a modern archaeological view, not a 1519 record;
  the massacre image remains a later history painting.
- Image scale, background color, alignment, and density vary by historical
  function; shared spacing rules prevent that variation from becoming disorder.
- Large empty fields now carry either a primary visual, monumental type, or
  readable explanatory copy. Small card typography is not used as a substitute
  for information hierarchy on `07`, `17`, `23`, or `32`.
- Scene captions share one responsive size token; their number boxes, labels,
  spacing, and letter spacing retain the scene-23 hierarchy throughout the
  editorial sequence.
- No video-cover reuse, autoplay, external analytics, persistence, deployment
  architecture change, automatic merge, or content-position rewrite.

## Modified files

- `sites/la-malinche/index.html`, `assets/site.css`, `assets/site.js`
- `sites/la-malinche/assets/archive/cholula-pyramid.webp`
- `sites/la-malinche/assets/archive/{triple-alliance-map-zh.svg,codex-borbonicus-calendar.webp,cantino-planisphere.webp,columbus-landing.webp}`
- `sites/la-malinche/{CONTENT,DESIGN,TECH,HANDOFF}.md`
- `sites/la-malinche/site.config.json`, `site-manifest.json`
- generated `LA-MALINCHE/` mirror
- `README.md`
- `web/sites/la-malinche/{product-spec,design-handoff}.md`
- `tests/malinche-readiness.test.mjs`

## Validation

- `npm run build:malinche`: passed.
- `node --check sites/la-malinche/assets/site.js`: passed.
- `node --test tests/malinche-readiness.test.mjs`: passed — 2/2.
- `npm run validate:sites`: passed — 11 maintenance packages.
- `npm run build:pages`: passed.
- `npm run validate:pages`: passed — 563 local references across 67 HTML/CSS
  files.
- `git diff --check` and staged diff check: passed.
- Chrome desktop visual smoke covered `00`, `01`, `05`, `13`, `16`, `22`,
  `30`, `33`, and `34`; 52 scenes rendered with no document-level horizontal
  overflow and the hero retained its `1065 / 1476` ratio.
- Chrome `390 × 844` device-metrics smoke covered the hero, three-name table,
  Chapter 2 → 3 transition, and Cholula. No display title overflow remained;
  the document width stayed within the viewport.
- Current Chrome desktop smoke at `1782 × 864` covered `06`, `07`, `17`, `22`,
  `23`, `25`, and `32`. The new images loaded at their recorded natural
  dimensions; `17` rendered a 112 px title; `32` had no overflow and maintained
  a 40 px horizontal gap before the outcome paragraph.
- Current Chrome `390 × 844` smoke covered `07` and `32`; all seven revised
  scenes (`06`, `07`, `17`, `22`, `23`, `25`, `32`) stayed within the 375 px
  layout viewport.
- Current exact-preview browser smoke measured all 50 visible captions:
  desktop returned one `18.56px` size and one `34.336px` line height; mobile
  returned one `16px` size and one `29.6px` line height. No caption overflow,
  document-level overflow, or broken loaded image was found. The longest `47`
  caption wraps to two lines on mobile.
- The exact implementation preview above is the recorded visual target; the
  following handoff-only commit does not alter the published mirror.
- Antigravity extended multi-browser, keyboard, full-route, and visual
  regression QA: pending.

## Known issues

- Authorization status for selected `Women Story/Malinche/photo` images still
  needs confirmation before reuse outside this project.
- Broader historical bibliography expansion requires a separate scholarly
  source review; the creator manuscript remains the primary content source.
- Google-hosted fonts may fall back to installed Chinese serif / sans fonts.
- Bilibili embeds depend on regional and privacy-network conditions.

## Git state

- Branch: `codex/site-la-malinche`
- 52-screen implementation: `697dd53878cfd93ee59211558ed2c255f85f9718`
- Visual hierarchy and evidence revision:
  `6ebda79f398f50c303506a7dab652740a6ddec1d`.
- Scene-caption hierarchy revision:
  `b18a62d`.
- Merge: explicitly authorized by the creator for PR #28 on 2026-07-28; no
  additional confirmation is required for this delivery.

## Next step

Merge PR #28 and verify the existing Pages workflow and live
`/My-Website/LA-MALINCHE/` page. Antigravity extended QA remains optional if a
comprehensive overlay, keyboard, multi-browser, and full-route audit is desired.
