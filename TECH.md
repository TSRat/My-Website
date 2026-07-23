# 全局技术与部署说明

- Last audited: 2026-07-19
- Repository: `TSRat/My-Website`
Default branch: `main`

## 架构概览

仓库同时保存两类技术形态：

1. 根目录的 Vinext/Vite/React 应用，主要承载 IVORY ARCHIVE 的动态版本和 Worker 兼容构建。
2. GitHub Pages 的静态多站点 artifact，由自定义 Node 脚本生成或复制后，通过 GitHub Actions 发布。

这两类构建共享仓库，但不是同一个输出。不要把 `npm run build` 的 `dist/` 与 `npm run build:pages` 的 `docs/` 混为一谈。

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
| `/My-Website/IVORY-ARCHIVE/` | 根据 `app/briefings.ts` 生成，图片来自 `public/` | `app/`、`public/`、`scripts/github-pages.css/js` | `docs/IVORY-ARCHIVE/index.html`（构建时生成） |
| `/My-Website/ENHEDUANNA/` | 直接复制已提交的 `ENHEDUANNA/` | `static-sites/enheduanna/` 存在 TSX/CSS，但无自动同步 script | `ENHEDUANNA/index.html` |
| `/My-Website/HYPATIA/` | 直接复制 `HYPATIA/` | 当前目录中的 HTML/CSS/JS | `HYPATIA/index.html` |
| `/My-Website/MELROMARC-SISTERS/` | 直接复制 `MELROMARC-SISTERS/` | 当前仓库只能确认已生成 artifact | `MELROMARC-SISTERS/index.html` |

根目录的 `index.html`、`hub.css`、`briefings/` 和 `IVORY-ARCHIVE/` 是已提交的静态文件或历史快照。当前 Pages build 不读取根 `index.html`、`hub.css` 或 `IVORY-ARCHIVE/`；总入口和 IVORY 会在 `docs/` 中重新生成。

## Package scripts

以下命令都真实存在于 `package.json`：

| 命令 | 作用 | 主要输出或副作用 |
| --- | --- | --- |
| `npm run dev` | 运行 Vite/Vinext 开发服务器 | 本地服务；Wrangler 日志留在忽略目录 |
| `npm run build:pages` | 生成 GitHub Pages 多站点 artifact | `docs/` |
| `npm run validate:pages` | 检查 `docs/` 内 HTML/CSS 的本地资源引用 | 只读；缺失或越界引用时退出失败 |
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

- 删除并重建 `docs/IVORY-ARCHIVE/`。
- 删除旧的 `docs/briefings/` legacy redirect。
- 生成 `docs/index.html`、`docs/hub.css`、`docs/404.html` 和 `.nojekyll`。
- 从 `app/briefings.ts` 读取字面量数据，生成 IVORY 首页及每期详情页。
- 从 `public/story-images/` 复制本期使用的图片。
- 为旧 `/My-Website/briefings/<date>/` 路径生成到 IVORY 的 redirect。
- 递归复制 `ENHEDUANNA/`、`HYPATIA/`、`MELROMARC-SISTERS/` 到 `docs/`。

`docs/` 已在 `.gitignore` 中，应该由 Actions 每次生成，不应成为另一个手工维护分支。

## Vite and base paths

`vite.config.ts` 当前没有设置 Vite `base`。GitHub Pages 的多站点路径不是依赖全局 `base` 实现，而是由静态生成脚本、目录结构和相对 URL 实现。

不要为了“修复 Pages”随意加入或更改 `base`。这可能同时破坏根 Vinext 应用、静态目录和相对资源引用。

当前已确认的路径规则：

- 根 404 页面在生成脚本中显式使用 `/My-Website/hub.css` 和 `/My-Website/`。
- IVORY 的页面与资源通过相对路径生成。
- Enheduanna、Hypatia、Melromarc 的入口使用 `./assets/...` 或 `./images/...` 相对路径。
- 子目录名称为大写；GitHub Pages 对大小写敏感。

## Assets

### IVORY ARCHIVE

- 源图片：`public/story-images/`
- 站点标志与封面：`public/tsrat-logo.png`、`public/ivory-botanical-archive.png`、`public/favicon.svg`
- Pages build 只复制 `app/briefings.ts` 实际引用的 story images。

### Enheduanna

- 源资源：`static-sites/enheduanna/public/`
- 当前发布资源：`ENHEDUANNA/` 根目录和 `ENHEDUANNA/assets/`
- 两处同名资源目前需要人工保持一致；不要只替换一处后假设另一处会自动变化。

### Hypatia

- 资源集中在 `HYPATIA/assets/`。
- `HYPATIA/index.html` 实际引用 `hypatia-site.css`、`hypatia-v2.css` 和 `hypatia-refresh.js`。
- workflow 还验证多张指定图片和 `lake-v11` / `interactive-v11` 版本标记。

### Melromarc Sisters

- 图片位于 `MELROMARC-SISTERS/images/` 和 `images/gallery/`。
- JavaScript/CSS 位于 `MELROMARC-SISTERS/assets/`，文件名带 content hash。
- `index.html` 引用的文件名、CSS query string 与 module preload 必须保持一致。

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

## Known technical gaps

- 没有 npm script 将 `static-sites/enheduanna/` 重建到 `ENHEDUANNA/`。
- 已审计当前全部 5 个 remote branches；其中没有 Hypatia 的完整上游框架源码。是否存在于仓库外仍待所有者确认。
- 已审计当前全部 5 个 remote branches；其中没有 Melromarc Sisters 的完整未编译源码。是否存在于仓库外仍待所有者确认。
- `IVORY-ARCHIVE/` 是旧快照，容易被误认为当前源文件。
- 根目录存在若干静态快照文件，当前 Pages build 不读取它们；删除策略尚未由创作者确认。

以上缺口应通过补充可重复构建流程解决，而不是通过移动目录或改变公开 URL 解决。

## Reusable website migration starter

`web/templates/site-starter/` is version-controlled source documentation and
example code. It is not copied into `docs/` and is not a deployed shared
runtime. Each site adopts the needed contracts inside its real maintained
source directory so public URLs and the protected Pages build map remain
unchanged.
