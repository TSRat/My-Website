# AI Agent 工作规则

本文件适用于整个仓库。更深目录中的项目文档补充本文件，但不能削弱这里的保护规则。任务指令与本文冲突时，先向仓库所有者确认，不要自行扩大授权范围。

## 开始工作前

任何 Agent 在修改文件之前必须完成以下步骤：

1. 阅读根目录 `README.md`、`AGENTS.md`、`TECH.md` 和 `HANDOFF.md`。
2. 找到目标项目的真实维护目录，不要只凭公开 URL 猜测源文件。
3. 阅读目标项目的 `CONTENT.md`、`DESIGN.md`、`TECH.md` 和 `HANDOFF.md`。
4. 执行：

   ```bash
   git status --short --branch
   git branch --show-current
   git log -15 --oneline --decorate
   ```

5. 如果存在未提交修改，先检查 diff，判断它们是否属于当前用户或前一个 Agent；不得覆盖、删除或顺手格式化。
6. 运行或生成目标页面，观察实际结果。不要只看局部组件或单个 CSS 文件后就重做设计。

## 先确认真实来源

| 项目 | 应优先修改 | 不应误当作主要来源 |
| --- | --- | --- |
| IVORY ARCHIVE | `app/briefings.ts`、`app/`、`public/`、Pages 生成脚本 | 已提交但较旧的 `IVORY-ARCHIVE/` 快照 |
| Enheduanna | `static-sites/enheduanna/`；发布前还需处理 `ENHEDUANNA/` 镜像 | 只改 TSX 却假设 workflow 会自动重建镜像 |
| Hypatia | `HYPATIA/index.html`、被入口实际引用的 CSS/JS 与资源 | 目录中未被入口引用的旧 bundle 或样式文件 |
| Melromarc Sisters | `MELROMARC-SISTERS/` 当前可部署 artifact；先确认上游源码是否可用 | 未经确认直接手改多个带哈希的编译 bundle |

如果真实上游源码或重建命令无法确认，停止高风险实现并把问题写入 `HANDOFF.md`。不要假装存在可重建流程。

## 修改原则

Agent 必须：

- 优先做最小必要改动。
- 只修改任务明确涉及的项目和共享文件。
- 保留用户已有的未提交修改。
- 先理解当前页面，再决定是否需要调整结构。
- 保留现有公开 URL、目录名大小写和相对资源路径。
- 保留现有 GitHub Actions Pages 架构。
- 对生成文件、镜像和真实源码作明确区分。
- 对无法验证的信息写 `TODO: needs confirmation` 或 `Needs creator confirmation`。

Agent 不得：

- 因为“代码更优雅”进行无关重构。
- 擅自更换框架、package manager 或主要依赖。
- 擅自升级依赖。
- 删除现有功能、内容、图片或来源链接。
- 把多个独立站点强行统一为同一套 UI。
- 根据自己的审美重做整个页面。
- 移动或重命名现有网站目录。
- 改变路由、Vite `base` 或 GitHub Pages 子目录。
- 把 Pages 改为 Deploy from a branch。
- 创建、重新启用或发布 `gh-pages` branch。
- force push、改写 Git 历史或删除 branch。
- 删除看似未使用的 bundle、图片或样式；部分文件可能是部署历史或回滚材料。

## 内容保护

仓库涉及历史、人物、人文学术内容、女性史、哲学、文学、社会文化和创作型叙事。Agent 不得以“精简”或“提高可读性”为由偷偷改变内容立场。

任何重大内容修改必须明确归入以下类别之一：

| 类别 | 含义 | 允许范围 |
| --- | --- | --- |
| 事实修正 | 根据更可靠证据纠正日期、人物、引文、来源或事件 | 必须提供依据，并同步检查相关限定语与来源 |
| 表达优化 | 不改变命题、立场和确定性，只改善语言 | 不得删除“不一定”“可能”“现存证据”等限定语 |
| 结构调整 | 改变章节顺序、导航或信息层级 | 必须确认不会改变论证关系与读者理解 |
| 观点改变 | 改变解释框架、价值判断或叙事结论 | 只有任务明确要求或创作者确认后才能执行 |

特别禁止：

- 编造史实、引文、来源、图片授权或学术共识。
- 把学术推断写成确定事实。
- 把后世图像、电影剧照或 AI 插画写成历史肖像或现场记录。
- 把复杂历史压缩成简单的善恶故事。
- 把“表达优化”包装成观点替换。
- 删除创作者有意保留的矛盾、边界、争议或不确定性。

历史型站点需要区分：

```text
Historical fact
Scholarly interpretation
Narrative framing
Visual metaphor
```

创作型站点需要区分：

```text
Canon reference
Fan-created premise
Story branch
Creator's critical position
```

## 设计保护

- `DESIGN.md` 记录的是当前页面已经形成的视觉与交互语言，不是给 Agent 自由替换的灵感板。
- 不要把所有内容改成圆角卡片、玻璃拟态或无意义渐变。
- 不要移除留白、档案编号、章节节奏、对比色或图片说明，除非任务明确要求。
- 图片可能承担证据、叙事或批评功能，不一定只是装饰。
- 如果仓库没有记录某个“曾被否决的方案”，写 `Needs creator confirmation`，不要虚构设计讨论历史。
- 视觉任务必须检查桌面与移动布局，并尊重 `prefers-reduced-motion`、键盘操作、焦点样式和图片替代文本。

## 路径与资产规则

- GitHub Pages 运行在 `/My-Website/` 下，独立站点运行在大写子目录下。
- Linux 与 GitHub Pages 对文件名大小写敏感。`HYPATIA` 与 `hypatia`、`.JPG` 与 `.jpg` 不是同一路径。
- 静态站点优先使用当前已有的相对路径；不要在未验证时改成站点根路径 `/...`。
- 新图片进入仓库前，记录来源、授权状态、生成方式和适当的 `alt` 文本。
- 不要把私有来源、临时下载 URL 或本地绝对路径提交到公开仓库。
- `docs/` 是构建输出，已被忽略。不要手工维护或提交它。

## 部署保护

当前 GitHub Pages 通过 `.github/workflows/publish-static-mirror.yml` 发布 Actions artifact。

必须保留以下原则：

```text
Do not replace the existing GitHub Actions deployment architecture with
"Deploy from a branch" unless the repository owner explicitly requests it.
```

任何涉及以下内容的修改都需要明确授权：

- workflow 触发分支和权限
- `actions/configure-pages`、`actions/upload-pages-artifact`、`actions/deploy-pages`
- `scripts/build-github-pages.mjs`
- Pages 输出目录 `docs/`
- 公开路径 `/My-Website/` 和四个站点 slug
- legacy redirect
- `gh-pages` branch 的创建、删除或重新启用

## 验证要求

完成任务前至少执行：

1. `git diff --check`
2. `git status --short`
3. `git diff --stat` 和目标文件的实际 diff
4. `npm run build:pages`
5. `npm run validate:pages`
6. 与改动范围相符的 `npm run build`、`npm test`、`npm run lint`

说明：

- 仓库没有独立 `typecheck` script；不要声称已运行不存在的命令。
- `npm test` 内部会再次运行 `npm run build`。
- 纯文档修改仍应至少运行 `build:pages` 和 `validate:pages`，确认文档文件没有意外进入错误路径或破坏生成逻辑。
- 如果命令因环境、网络或缺失上游源码无法运行，记录完整原因，不要把“未运行”写成“通过”。
- 视觉或交互任务还必须通过本地浏览器实际检查目标页面；只看 build 成功不算视觉验证。

## 更新交接文档

每次任务完成前，更新根或目标项目的 `HANDOFF.md`。至少记录：

- 当前目标
- 已完成内容
- 尚未完成内容
- 已知问题
- 重要决定
- 修改文件
- 运行命令与结果
- 当前 branch、最新 commit 与未提交修改
- 下一步建议

如果任务只影响一个站点，更新该站点 `HANDOFF.md`；如果改变了全局构建、部署、项目列表或共享规则，同时更新根 `HANDOFF.md`、`README.md` 或 `TECH.md`。

## Git 工作规则

- 开始和结束时都确认 branch。
- 不在不清楚来源的未提交修改上覆盖工作。
- 不使用 `git reset --hard`、`git checkout -- <file>` 或其他破坏性恢复命令。
- 不 force push。
- 不删除 branch、tag 或历史。
- 网站或界面任务完成且通过验证后，默认在当前专用 branch 中显式暂存本次相关文件、commit、push，并创建或更新 Pull Request；除非用户明确要求只保留本地修改，或发布所需权限 / 凭据不可用。
- 默认发布授权不允许把来源不明或与任务无关的工作区修改一起提交；混合工作区仍必须先确认每个文件的归属。
- commit、push 和创建 / 更新 PR 不再需要逐次请求授权；merge 始终需要用户单独明确授权。
- 提交前应让一次 commit 表达一个可解释的目的；生成物和源码是否同时提交，以现有项目流程和任务要求为准。

## 完成报告

向用户报告：

```text
修改了什么
为什么修改
修改了哪些文件
验证结果
未运行或失败的检查
仍然存在的问题
下一步建议
```

不得只说“完成”而省略验证状态和未解决风险。

# Website platform rules

## Source of truth

The authoritative website project table is the registry for all public website projects.

Every website workflow must:
- read it before making portfolio-level changes;
- update it when a site is created, migrated, renamed, deployed, or archived;
- never create a competing registry without explicit instruction.

## Six-stage website standard

All substantial website creation or modernization follows:

1. Product / UX
2. Visual exploration / creative production
3. Figma design system
4. Interactive prototype + design QA
5. Production engineering + GitHub + preview deployment
6. Data / analytics

The depth of each stage should match the complexity of the site.

A simple editorial site must not be over-engineered.
A complex dynamic product must not be reduced to a static mockup.

## Design philosophy

Unify infrastructure, not identity.

Sites may share:
- semantic foundations
- accessibility standards
- spacing logic
- engineering primitives
- common components
- QA standards
- deployment conventions

Sites should preserve distinct:
- art direction
- palette
- imagery
- narrative voice
- historical or cultural motifs
- project-specific interactions

Never make all sites visually identical merely for consistency.

## Figma

For substantial new sites and major redesigns, Figma is the design source of truth.

Reuse existing shared libraries before creating new primitives.

A screenshot alone is not a completed Figma design.

## Visual preservation gate

For migration or engineering refactors of existing sites, the current rendered site is the visual baseline.

Before changing implementation:
- capture representative routes and interactive states;
- capture matching desktop, tablet, and mobile screenshots;
- record typography, color, spacing, grid, imagery, crops, responsive behavior, and motion that must remain stable.

After migration:
- render the exact review branch under the same browser, viewport, device pixel ratio, fonts, content, and state;
- run screenshot or perceptual comparison when available;
- always perform human side-by-side or overlay review;
- document every visible difference and fix any difference that was not explicitly approved.

Build, lint, tests, HTTP 200, or comparison only against a reconstructed Figma file do not prove visual preservation.

For `PRESERVE` sites, any unapproved visible difference fails the gate. For `REFACTOR` sites, only documented bug, accessibility, or responsive corrections may change appearance without separate redesign approval. For `REBUILD` sites, preserve recognizable visual identity and require explicit human approval when pixel matching is infeasible.

If a valid pre-migration baseline or browser comparison cannot be produced, report visual verification as blocked and do not claim the migration is complete.

## Git safety

Never commit directly to `main`.

Use dedicated branches and Pull Requests.

Do not merge automatically.

Do not delete remote branches or production assets unless explicitly authorized.

Preserve existing public URLs whenever possible.

## Preview requirement

Every website-facing change must have a verified live preview before final handoff, including small responsive, content, asset, and interaction fixes.

A successful build is not equivalent to a working website.

The preview must:
- be reachable without merging the Pull Request;
- render the exact branch commit intended for review;
- be a directly viewable website URL, not only a PR, source-code, artifact-download, or localhost URL;
- remain separate from the production `main` deployment.

Use the repository's PR-preview infrastructure first. If none exists, use an approved preview provider or an immutable commit preview that serves the site's assets and module MIME types correctly.

Open the preview in a real browser and verify:
- primary routes
- assets
- responsive behavior
- major interactions
- console health

If no working unmerged preview can be produced, report the preview stage as blocked and do not claim the website task is complete.

## Completion

A new-site task is not done until the handoff includes:

- Figma URL
- verified Preview URL
- Pull Request URL

A portfolio migration is not done until:
- every project-table site has a documented current state;
- target migration status is recorded;
- implemented changes are reviewable through PRs.
