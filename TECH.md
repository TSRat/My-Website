# 全局技术与部署说明

- Last audited: 2026-07-25
- Repository: `TSRat/My-Website`
Default branch: `main`

## 架构概览

仓库统一使用 `sites/<site-id>/` 作为网站维护控制面，同时保存四类渲染适配器：

1. `sites/ivory-archive/` 的 Vinext/Vite/React 实现；根 `app/` 只是框架路由适配器。
2. `sites/enheduanna/` 与 `sites/melromarc-sisters/` 的 React/Vite 静态工程。
3. `sites/living-atlas/`、`sites/hypatia/`、`sites/hildegard/`、
   `sites/la-malinche/`、`sites/delacroix-archive/`、`sites/zhangyong-portrait/` 与
   `sites/malty-melty-childhood/` 的直接静态工程。
4. `sites/sartre-nausea-guide/` 与 `sites/existentialism-humanism-guide/` 的 Next.js 静态导出工程。

这些站点共享维护文档、`site.config.json`、构建控制面和 Pages 发布约定，但不共享视觉皮肤或强制同一框架。不要把 `npm run build` 的 `dist/` 与 `npm run build:pages` 的 `docs/` 混为一谈。

## Tech stack

| 层级 | 当前技术 | 证据位置 |
| --- | --- | --- |
| Runtime | Node.js `>=22.13.0` | `package.json#engines` |
| Package manager | npm | `package-lock.json`、`.npmrc` |
| UI | React `19.2.6` | `package.json` |
| App framework | Next.js `16.2.6` + Vinext `0.0.50` | `package.json`、`vite.config.ts` |
| Language | TypeScript `5.9.3` | `package.json`、`tsconfig.json` |
| Bundler/dev server | Vite `8.0.13` | `package.json`、`vite.config.ts` |
| Styling | Tailwind CSS `4.2.1` 与项目级 CSS | `package.json`、各站点样式 |
| Worker build | Cloudflare Vite plugin、Wrangler | `vite.config.ts`、`worker/index.ts` |
| Database tooling | Drizzle ORM / Drizzle Kit；当前 D1 binding 为 `null` | `db/`、`drizzle.config.ts`、`.openai/hosting.json` |
| Tests | Node 内置 test runner | `tests/rendered-html.test.mjs` |
| Deployment | GitHub Actions + GitHub Pages artifact | `.github/workflows/publish-static-mirror.yml` |

仓库没有 Vitest。`package.json` 也没有独立 `typecheck` script。

## Source and deployment map

| 公开路径 | Pages artifact 来源 | 可读上游源码 | 入口文件 |
| --- | --- | --- | --- |
| `/My-Website/` | `scripts/build-github-pages.mjs` 生成 | 生成函数和 `scripts/github-pages-hub.css` | `docs/index.html`（构建时生成） |
| `/My-Website/IVORY-ARCHIVE/` | 根据 `sites/ivory-archive/briefings.ts` 生成，图片来自 `public/` | `sites/ivory-archive/`、`public/`、`scripts/github-pages.css/js` | `docs/IVORY-ARCHIVE/index.html`（构建时生成） |
| `/My-Website/ENHEDUANNA/` | `sites/enheduanna/` 经 Vite 生成 `ENHEDUANNA/` 镜像，Pages 再复制 | React / TSX / CSS + Vite | `ENHEDUANNA/index.html` |
| `/My-Website/LA-MALINCHE/` | `sites/la-malinche/` 经共享直接静态构建器更新 `LA-MALINCHE/` | HTML/CSS/JS + creator-owned WebP assets | `LA-MALINCHE/index.html` |
| `/My-Website/HILDEGARD/` | `sites/hildegard/` 经共享直接静态构建器更新 `HILDEGARD/` | HTML/CSS/JS/SVG | `HILDEGARD/index.html` |
| `/My-Website/DELACROIX-ARCHIVE/` | `sites/delacroix-archive/` 经共享直接静态构建器更新 `DELACROIX-ARCHIVE/` | 三语 HTML/CSS/JS 与本地研究图像 | `DELACROIX-ARCHIVE/index.html` |
| `/My-Website/HYPATIA/` | `sites/hypatia/` 经共享直接静态构建器更新 `HYPATIA/` | HTML/CSS/JS | `HYPATIA/index.html` |
| `/My-Website/SARTRE-NAUSEA-GUIDE/` | `sites/sartre-nausea-guide/` 经 Next.js 静态导出更新镜像 | React / TypeScript + Next.js | `SARTRE-NAUSEA-GUIDE/index.html` |
| `/My-Website/EXISTENTIALISM-HUMANISM-GUIDE/` | `sites/existentialism-humanism-guide/` 经 Next.js 静态导出更新镜像 | React / TypeScript + Next.js | `EXISTENTIALISM-HUMANISM-GUIDE/index.html` |
| `/My-Website/MELROMARC-SISTERS/` | `sites/melromarc-sisters/` 经 Vite 生成 `MELROMARC-SISTERS/` 镜像 | React / TypeScript + Vite | `MELROMARC-SISTERS/index.html` |
| `/My-Website/THE-LIVING-ATLAS/` | `sites/living-atlas/` 经共享直接静态构建器更新 `THE-LIVING-ATLAS/` | HTML/CSS/ES modules | `THE-LIVING-ATLAS/index.html` |
| `/My-Website/ZHANGYONG-PORTRAIT/` | `sites/zhangyong-portrait/` 经共享直接静态构建器更新 `ZHANGYONG-PORTRAIT/` | HTML/CSS/ES modules | `ZHANGYONG-PORTRAIT/index.html` |
| `/My-Website/MALTY-MELTY-CHILDHOOD/` | `sites/malty-melty-childhood/` 经共享直接静态构建器更新 `MALTY-MELTY-CHILDHOOD/` | HTML/CSS/ES modules | `MALTY-MELTY-CHILDHOOD/index.html` |

根目录的 `index.html`、`hub.css`、`briefings/` 和 `IVORY-ARCHIVE/` 是已提交的静态文件或历史快照。当前 Pages build 不读取根 `index.html`、`hub.css` 或 `IVORY-ARCHIVE/`；总入口和 IVORY 会在 `docs/` 中重新生成。

## Package scripts

以下命令都真实存在于 `package.json`：

| 命令 | 作用 | 主要输出或副作用 |
| --- | --- | --- |
| `npm run dev` | 运行 Vite/Vinext 开发服务器 | 本地服务；Wrangler 日志留在忽略目录 |
| `npm run build:pages` | 生成 GitHub Pages 多站点 artifact | `docs/` |
| `npm run sync:philosophy-sites` | 从两个哲学导读源码重建受版本控制的静态 Pages 输入镜像 | `SARTRE-NAUSEA-GUIDE/`、`EXISTENTIALISM-HUMANISM-GUIDE/` |
| `npm run validate:pages` | 检查 `docs/` 内 HTML/CSS 的本地资源引用 | 只读；缺失或越界引用时退出失败 |
| `npm run validate:sites` | 检查十二个站点包、维护文档、配置、入口、manifest 与 npm scripts | 只读 |
| `npm run build:sites` | 按每站配置刷新十一个大写 Pages 镜像 | `.site-build/` 与大写镜像 |
| `npm run dev:living-atlas` / `build:living-atlas` | 开发或同步 Living Atlas | `THE-LIVING-ATLAS/` |
| `npm run dev:ivory` / `build:ivory` | 开发或构建 IVORY 动态应用 | `dist/` |
| `npm run dev:enheduanna` | 运行 Enheduanna Vite 开发服务器 | 本地服务 |
| `npm run build:enheduanna` | 从 `sites/enheduanna/` 更新 Enheduanna 镜像 | `.site-build/enheduanna/`、`ENHEDUANNA/` |
| `npm run dev:malinche` / `build:malinche` | 开发或同步 La Malinche | `.site-build/la-malinche/`、`LA-MALINCHE/` |
| `npm run dev:hildegard` / `build:hildegard` | 开发或同步 Hildegard | `HILDEGARD/` |
| `npm run dev:delacroix` / `build:delacroix` | 开发或同步 Delacroix Archive | `DELACROIX-ARCHIVE/` |
| `npm run dev:hypatia` / `build:hypatia` | 开发或同步 Hypatia | `HYPATIA/` |
| `npm run dev:melromarc` | 运行 Melromarc Vite 开发服务器 | 本地服务 |
| `npm run build:melromarc` | 从 `sites/melromarc-sisters/` 更新 Melromarc 镜像 | `.site-build/melromarc-sisters/`、`MELROMARC-SISTERS/` |
| `npm run dev:zhangyong` / `build:zhangyong` | 开发或同步张勇的生活切片 | `ZHANGYONG-PORTRAIT/` |
| `npm run dev:two-swans` / `build:two-swans` | 开发或同步两只天鹅 | `MALTY-MELTY-CHILDHOOD/` |
| `npm run install:ci` | 在 Sites 隔离环境中执行受限的 `npm ci` | `node_modules/`、`.sites-runtime/` |
| `npm run build` | 运行受限时长 Vinext build，并验证 Worker artifact | `dist/` |
| `npm run start` | 启动 Vinext 生产服务 | 本地服务 |
| `npm test` | 运行 `npm run build` 后执行 Node test | `dist/` 与测试结果 |
| `npm run validate:artifact` | 验证 Worker 默认导出和 hosting manifest | 读取 `dist/` |
| `npm run lint` | 对适用源码执行 ESLint | 无构建输出 |
| `npm run db:generate` | 运行 Drizzle Kit generate | 可能更新 `drizzle/`；不要在无数据库任务时运行 |

常规依赖安装优先使用：

```bash
npm ci
```

`npm run install:ci` 是仓库为特定 Sites 运行环境准备的严格安装路径，依赖 GNU `flock`、`timeout`、`curl` 和 `sha256sum`。

## GitHub Pages deployment

Workflow: `.github/workflows/publish-static-mirror.yml`

触发：

- push 到 `main`
- 手动 `workflow_dispatch`

权限：

```yaml
contents: read
pages: write
id-token: write
```

主要步骤：

1. `actions/checkout@v4`
2. `actions/setup-node@v4`，Node 22，npm cache
3. `npm ci`
4. `npm run build:pages`
5. `npm run validate:pages`，检查全部生成 HTML/CSS 的本地资源引用
6. 对 Hypatia 的入口、关键资源和版本标记执行 shell 验证
7. `actions/configure-pages@v5`
8. `actions/upload-pages-artifact@v3`，路径为 `docs`
9. `actions/deploy-pages@v4`

并发组为 `github-pages`，新运行会取消仍在进行的旧运行。

必须保留：

```text
Do not replace the existing GitHub Actions deployment architecture with
"Deploy from a branch" unless the repository owner explicitly requests it.
```

远程 `gh-pages` branch 存在，但不属于当前发布链路。不要因其存在而改写 workflow，也不要未经授权删除它。

## Pages build logic

`scripts/build-github-pages.mjs` 会：

- 读取十二个 `sites/<site-id>/site.config.json` 并先刷新十一个大写静态镜像。
- 删除并重建 `docs/IVORY-ARCHIVE/`。
- 删除旧的 `docs/briefings/` legacy redirect。
- 生成 `docs/index.html`、`docs/hub.css`、`docs/404.html` 和 `.nojekyll`。
- 从 `sites/ivory-archive/briefings.ts` 读取字面量数据，生成 IVORY 首页及每期详情页。
- 从 `public/story-images/` 复制本期使用的图片。
- 为旧 `/My-Website/briefings/<date>/` 路径生成到 IVORY 的 redirect。
- 递归复制十一个由站点包生成的大写镜像到 `docs/`。

`docs/` 已在 `.gitignore` 中，应该由 Actions 每次生成，不应成为另一个手工维护分支。

两个哲学导读采用“可维护源码 + 已提交静态镜像”的明确双层结构。`scripts/sync-philosophy-site-mirrors.mjs` 使用源码的 Next.js 静态导出，再把入口中的本地资源改为相对路径，以同时兼容 GitHub Pages 子目录和 immutable commit preview。修改源码后必须运行同步命令，并同时检查源码与镜像 diff。

## Vite and base paths

`vite.config.ts` 当前没有设置 Vite `base`。GitHub Pages 的多站点路径不是依赖全局 `base` 实现，而是由静态生成脚本、目录结构和相对 URL 实现。

不要为了“修复 Pages”随意加入或更改 `base`。这可能同时破坏根 Vinext 应用、静态目录和相对资源引用。

当前已确认的路径规则：

- 根 404 页面在生成脚本中显式使用 `/My-Website/hub.css` 和 `/My-Website/`。
- IVORY 的页面与资源通过相对路径生成。
- Enheduanna、Hypatia、Melromarc 的入口使用 `./assets/...` 或 `./images/...` 相对路径。
- La Malinche 的入口、WebP 封面与解释性地图全部使用 `./assets/...` 相对路径。
- 两个哲学导读的静态镜像使用 `./_next/...` 与项目内相对资源；源码构建时可通过 `SITE_BASE_PATH` 验证任意子路径。
- 子目录名称为大写；GitHub Pages 对大小写敏感。

## Assets

### IVORY ARCHIVE

- 源图片：`public/story-images/`
- 站点标志与封面：`public/tsrat-logo.png`、`public/ivory-botanical-archive.png`、`public/favicon.svg`
- Pages build 只复制 `sites/ivory-archive/briefings.ts` 实际引用的 story images。

### Enheduanna

- 源资源：`sites/enheduanna/public/`
- 当前发布资源：`ENHEDUANNA/` 根目录和 `ENHEDUANNA/assets/`
- 使用 `npm run build:enheduanna` 可把源码、CSS 和 `public/` 资源一起编译到临时目录，再覆盖镜像中的当前入口与资源。
- 构建器不会删除镜像内未引用的旧哈希 bundle；这些文件继续作为回滚材料，入口只引用本次新产物。

### Hypatia

- 源资源集中在 `sites/hypatia/assets/`；`HYPATIA/` 是同步镜像。
- `sites/hypatia/index.html` 实际引用 `hypatia-site.css`、`hypatia-v2.css` 和 `hypatia-refresh.js`。
- workflow 还验证多张指定图片和 `lake-v11` / `interactive-v11` 版本标记。

### Philosophy guides

- 可维护源码分别位于 `sites/sartre-nausea-guide/` 与 `sites/existentialism-humanism-guide/`。
- Pages 输入镜像分别位于 `SARTRE-NAUSEA-GUIDE/` 与 `EXISTENTIALISM-HUMANISM-GUIDE/`。
- 镜像只通过 `npm run sync:philosophy-sites` 刷新；不要直接修改带哈希的 `_next/` 文件。
- Sartre 的 `chestnut-root.png` 是正文视觉证据，必须随镜像一同验证；来源与授权状态仍应保留在项目文档中。

### Melromarc Sisters

- 源图片位于 `sites/melromarc-sisters/public/images/` 和
  `public/images/gallery/`。
- 故事、图像与命运分支记录集中在
  `sites/melromarc-sisters/content.ts`；交互在 `page.tsx`。
- `npm run build:melromarc` 生成带 hash 的 JavaScript/CSS，并更新
  `MELROMARC-SISTERS/` 发布镜像。
- 旧 Vinext bundle 在镜像中保留作回滚材料，但新入口不再引用它们；
  不要直接编辑或删除。

### 通用规则

- 文件名大小写必须逐字符匹配。
- 图片不是默认可删除的装饰；先阅读 `CONTENT.md` 与 `DESIGN.md`。
- 新增图片必须记录 `alt`、来源、授权或 AI 生成属性。
- 不提交本地绝对路径或临时私有下载链接。
- `scripts/validate-pages-assets.mjs` 会验证构建后 HTML 的 `src`、`href`、`poster`、`srcset` 与 CSS `url(...)` 本地引用；新增路径形式时应同步验证解析规则。

## Root application build

`npm run build` 与 GitHub Pages 无关，它通过 `scripts/build-verified.sh` 调用 `vinext build`：

- 输出 `dist/server/index.js`。
- 构建超时保护在 Linux 使用 GNU `timeout`，在安装 Homebrew `coreutils` 的 macOS 使用 `gtimeout`。
- `build/sites-vite-plugin.ts` 把 `.openai/hosting.json` 和 `drizzle/` 打包到 `dist/.openai/`。
- `scripts/validate-artifact.sh` 验证 Worker 默认导出具有 `fetch` 方法，并验证 manifest 可解析。
- `.openai/hosting.json` 当前只记录 `d1: null` 与 `r2: null`。

仓库中没有证据表明 GitHub Pages workflow 使用这个 Worker artifact。不要用 Sites/Worker build 替换 Pages artifact，反之亦然。

## Verification

Codex 提交前按改动范围运行最小必要检查：

```bash
git diff --check
git status --short --branch
git diff --stat
```

- Pages、静态资源或公开路径变化：`npm run build:pages`、`npm run validate:pages`。
- 应用代码、共享运行时或构建配置变化：选择最小相关的 build、targeted test 或 lint。
- 纯文档、规则或 skill 变化：只需文档 / skill 自身校验与 Git diff 检查。
- 网站可见变化：打开一个代表性目标页，确认页面加载、请求的变化和主要资源；响应式变化再检查一个相关窄视口。

完整的多站点、多路由、desktop / tablet / mobile、控制台 / 网络、交互、键盘可访问性和截图回归检查交给 Antigravity。Antigravity 报告缺失不阻止 Codex commit、PR 或创作者明确授权的 merge；交接中必须标记其状态，且不能把基本 smoke check 写成完整视觉验证。

## Maintainable static-site builder

`scripts/build-site.mjs` 是十一个静态站点从统一维护包到既有 Pages 镜像
的共享发布器。它读取每站的 `site.config.json`，并按渲染模式：

1. 直接静态站点复制到 `.site-build/<site-id>/`，排除维护文档和配置，再原子式替换镜像。
2. Vite 站点使用项目配置编译到 `.site-build/<site-id>/`，并检查入口引用哈希资源而不是 `.tsx`。
3. Next 静态站点执行项目导出，再重写为兼容 Pages 子目录与 immutable preview 的相对资源路径。
4. 把通过检查的结果复制到受版本控制的大写镜像目录。
5. Vite 站点不删除镜像中的历史 bundle，避免破坏回滚材料。

当前入口：

```bash
npm run dev:living-atlas
npm run build:living-atlas
npm run dev:enheduanna
npm run build:enheduanna
npm run dev:malinche
npm run build:malinche
npm run dev:hildegard
npm run build:hildegard
npm run dev:delacroix
npm run build:delacroix
npm run dev:hypatia
npm run build:hypatia
npm run dev:melromarc
npm run build:melromarc
npm run dev:zhangyong
npm run build:zhangyong
npm run dev:two-swans
npm run build:two-swans
npm run dev:sartre-nausea
npm run build:sartre-nausea
npm run dev:existentialism-humanism
npm run build:existentialism-humanism
```

共享的是构建、镜像和验证约定，不是两个站点的视觉、内容模型或组件。

`scripts/recover-melromarc-source.mjs` 是一次性、可审计的来源恢复工具：
它从 2026-07-25 接受的旧 active bundle 读取 13 条故事、18 条图像记录、
6 个筛选项和 5 个命运阶段，并复制当时资源。日常维护不需要再次运行它。

## Direct static site sources

`sites/zhangyong-portrait/` and `sites/malty-melty-childhood/` follow the
direct static maintenance model used by The Living Atlas:

- committed HTML is the semantic page shell;
- committed CSS owns each site's distinct visual identity;
- ES modules provide progressive interaction, stable content records,
  site manifests and provider-neutral event contracts;
- the shared builder produces `ZHANGYONG-PORTRAIT/` and
  `MALTY-MELTY-CHILDHOOD/` as deployment mirrors.

`sites/malty-melty-childhood/` stores only numeric reading progress locally under
`two-swans-progress`. Neither site connects an analytics provider or sends
events externally.

## Known technical gaps

- Hypatia 没有可确认的完整上游框架源码；当前可读静态实现已纳入 `sites/hypatia/` 的统一维护包。
- Enheduanna 与 Melromarc 的原 ChatGPT Sites 编辑器未提供可用源码导出；
  当前可维护工程是依据接受的部署基线重建，不应被描述为原始 Sites 源项目。
- `IVORY-ARCHIVE/` 是旧快照，容易被误认为当前源文件。
- 根目录存在若干静态快照文件，当前 Pages build 不读取它们；删除策略尚未由创作者确认。

以上缺口应通过补充可重复构建流程解决，而不是通过移动目录或改变公开 URL 解决。

## Reusable website migration starter

`web/templates/site-starter/` is version-controlled source documentation and
example code. It is not copied into `docs/` and is not a deployed shared
runtime. Every current site now implements the common maintenance package
contract under `sites/`; the starter remains the capability template for future
sites.
