# Hildegard technical notes

Last audited: 2026-07-25

## Deployment form

Hildegard 是一个直接静态工程：手写 HTML/CSS/JS + 独立 SVG。权威维护
目录是 `sites/hildegard/`；`HILDEGARD/` 是由共享构建器生成的发布镜像：

```text
sites/hildegard/ -> .site-build/hildegard/
                  -> HILDEGARD/
                  -> docs/HILDEGARD/
```

公开路径：

```text
/My-Website/HILDEGARD/
```

## Active entry and assets

入口：`sites/hildegard/index.html`

入口当前明确引用（相对路径，方便未来换域名）：

- `./assets/hildegard-site.css?v=viriditas-v1`
- `./assets/hildegard-refresh.js?v=viriditas-v1`
- `./assets/glyph-viriditas.svg`
- `./assets/glyph-cosmic-wheel.svg`
- `./assets/glyph-branch.svg`
- `./assets/glyph-root.svg`
- `./assets/images/hildegard-*.jpg`：八章的真实章节主图；来源、作者与许可集中记录在页面 `#sources` 的“图像与图形说明”中。
- Google Fonts：`Cormorant Garamond`, `Noto Serif SC`, `Noto Sans SC`, `Fira Code`（含 `preconnect`）

`hildegard-site.css` 通过 `@import "./hildegard-tokens.css"` 引入全部设计变量。`assets/glyph-star.svg` 保留作后续扩展背景。

## GitHub Actions integration

站点在 `sites/hildegard/site.config.json` 中注册，Actions 会：

1. `npm ci`
2. `npm run build:pages`（先刷新 `HILDEGARD/` 镜像，再复制进 `docs/HILDEGARD/`，同时重建 hub）
3. `npm run validate:pages`（校验 `docs/` 内 HTML/CSS 的本地资源引用；Hildegard 页面的相对 `./assets/*` 引用都会被解析）
4. `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4`

Hypatia 那种"关键文件 grep smoke check"当前 workflow 只对 Hypatia 强制。Hildegard 目前没有单独的 smoke check；若要新增，请把改动写入 `.github/workflows/publish-static-mirror.yml` 并同步 `HANDOFF.md`。

## No confirmed upstream app source

当前仓库把 `sites/hildegard/` 当作真实来源，没有 React/TSX 或其它编译型上游。这也是为了保留 Figma 编辑可能性：设计变量在 `hildegard-tokens.css`，图形在独立 SVG，正文在 `index.html`，任何一层都可以在 Figma 与代码之间迁移，不受编译产物限制。

## URL portability

页面内所有内部链接和资源引用都使用**相对路径**（`./assets/...` 与 `../HYPATIA/`）：

- 未来切换到 `tsrat.com/My-Website/HILDEGARD/` 或 `hildegard.tsrat.com/` 都无须修改内容。
- `og:url` 与 `canonical` 各在一处，换域名时集中改这两处即可。
- 无绝对路径 `/My-Website/...` 写死；`scripts/build-github-pages.mjs` 复制目录时保留全部资源。

## Do not change without confirmation

- 目录名 `HILDEGARD/`（大写，供 GitHub Pages 大小写敏感路径使用）。
- `sites/hildegard/site.config.json` 中 `HILDEGARD` 的 slug、metadata 与顺序。
- `THE-LIVING-ATLAS/index.html` 的 `07 Sites` 中 Hildegard 行的位置与序号。
- `assets/glyph-*.svg` 文件名与相对路径；替换图形请覆盖同名 SVG。
- 页面 `<html lang="zh-CN">`。

## Six-stage runtime contract

- `site-manifest.json` is the machine-readable capability and privacy contract.
- `assets/site-analytics.js` is provider-neutral. It dispatches
  `tsrat:analytics` custom events in the page but performs no network request,
  cookie write, persistent storage, identity capture, or raw-content capture.
- The visible `#data` appendix and footer link do not change the Pages copy
  architecture, relative assets, or public slug.
- `tests/historical-sites-six-stage.test.mjs` protects chapters 00–08,
  reduced-motion support, and the privacy contract.
