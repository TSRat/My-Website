# Hypatia technical notes

Last audited: 2026-07-25

## Deployment form

Hypatia 当前是一个直接静态工程。权威维护目录是 `sites/hypatia/`；
`HYPATIA/` 是由共享构建器生成的发布镜像：

```text
sites/hypatia/ -> .site-build/hypatia/
                -> HYPATIA/
                -> docs/HYPATIA/
```

公开路径：

```text
/My-Website/HYPATIA/
```

## Active entry and assets

入口：`sites/hypatia/index.html`

入口当前明确引用：

- `./assets/hypatia-site.css`
- `./assets/hypatia-v2.css?v=lake-v11`
- `./assets/hypatia-refresh.js?v=interactive-v11`

入口还直接引用多张 `assets/` 图片。完整文件名必须从 HTML 和 workflow 验证，不要依赖肉眼猜测。

## GitHub Actions validation

`.github/workflows/publish-static-mirror.yml` 在部署前检查：

- `docs/HYPATIA/index.html`
- `docs/HYPATIA/assets/hypatia-v2.css`
- `docs/HYPATIA/assets/hypatia-refresh.js`
- `approaching-hypatia.jpg`
- `agora-hypatia-death.jpg`
- `agora-hypatia-teaching.jpg`
- `ionic-column.png`
- `corinthian-column.png`
- 页面包含“希帕蒂娅：”和“教师之死”
- 入口包含 `lake-v11` 和 `interactive-v11`

修改版本 query、文件名或标题 markup 时，必须同步理解 workflow；不要为了让检查通过删除验证。

## No confirmed upstream app source

当前仓库没有可确认的完整 Hypatia React/TSX 上游源码。
`sites/hypatia/index.html` 本身包含完整可读内容，CSS 和交互脚本也可读，因此它是当前可维护来源。

2026-07-19 已同时审计 `main`、`gh-pages` 和三个历史 feature branches；没有找到另一份完整 Hypatia 框架源码，也没有找到曾经提交过的 `agora-hypatia-teaching.jpg`。仓库外是否存在上游源码仍需所有者确认。

目录中还存在：

- `assets/index-DJ37GHJq.js`
- `assets/index-ZBNoYMXX.css`
- `assets/hypatia-refresh.css`
- 其他历史样式文件

当前入口未引用其中若干文件。它们可能是旧构建产物或回滚材料；未经确认不要删除，也不要在内容修改时同时改动。

## Interaction coupling

`hypatia-refresh.js` 依赖 HTML 中的 data attributes，例如：

- `data-header`
- `data-nav`
- `data-evidence-filter` / `data-evidence`
- `data-philosophy` / `data-step`
- `data-comparison` / `data-compare`
- `data-letter-stage` / `data-letter`
- `data-memory` / `data-memory-id`

重命名 class 可能只影响样式；删除或更改这些 data attributes 会直接破坏交互。必须同时检查键盘操作与 ARIA 状态。

## Paths

- 使用 `./assets/...` 相对路径，适配 `/My-Website/HYPATIA/`。
- 不要改成 `/assets/...`，那会指向 GitHub Pages 域名根目录。
- 文件名大小写敏感。
- 共享构建器只复制可部署资源，因此维护 Markdown 和 `site.config.json` 不会进入 Pages artifact。

## Commands and verification

生成 Pages artifact：

```bash
npm run build:hypatia
npm run build:pages
npm run validate:pages
```

至少确认：

```text
docs/HYPATIA/index.html
docs/HYPATIA/assets/hypatia-site.css
docs/HYPATIA/assets/hypatia-v2.css
docs/HYPATIA/assets/hypatia-refresh.js
```

浏览器检查应覆盖：

- 所有主要图片 200 返回
- fixed header 与进度条
- 移动导航
- evidence filters
- philosophy/comparison/letters/memory tabs
- 键盘方向键
- back-to-top
- 移动端与桌面端布局

## Known gaps

- 有统一的 `build:hypatia` 与结构契约测试；扩展浏览器矩阵仍交给 Antigravity。
- 完整上游框架源码位置未知。
- 未引用的历史 bundle/样式没有正式清理策略。
- workflow 对 Hypatia 的检查比其他静态站点更具体，但仍不是完整浏览器测试。
- `assets/agora-hypatia-teaching.jpg` 的既有缺图已于 2026-07-19 修复，并加入通用本地资源验证与 Hypatia 专用 workflow 检查。

## Six-stage runtime contract

- `site-manifest.json` is the machine-readable capability and privacy contract.
- `assets/site-analytics.js` is provider-neutral. It dispatches
  `tsrat:analytics` custom events in the page but performs no network request,
  cookie write, persistent storage, identity capture, or raw-content capture.
- The visible `#data` appendix links to the manifest and does not change the
  GitHub Pages copy architecture or public slug.
- `tests/historical-sites-six-stage.test.mjs` protects the contract and the
  existing evidence-control hooks.
