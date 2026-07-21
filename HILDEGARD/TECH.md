# Hildegard technical notes

Last audited: 2026-07-21

## Deployment form

Hildegard 是一个可直接发布的静态目录，仿照 `HYPATIA/` 的形态：手写 HTML/CSS/JS + 独立 SVG。GitHub Pages build 不会编译它，只执行：

```text
copy HILDEGARD/ -> docs/HILDEGARD/
```

公开路径：

```text
/My-Website/HILDEGARD/
```

## Active entry and assets

入口：`HILDEGARD/index.html`

入口当前明确引用（相对路径，方便未来换域名）：

- `./assets/hildegard-site.css?v=viriditas-v1`
- `./assets/hildegard-refresh.js?v=viriditas-v1`
- `./assets/glyph-viriditas.svg`
- `./assets/glyph-cosmic-wheel.svg`
- `./assets/glyph-branch.svg`
- `./assets/glyph-root.svg`
- Google Fonts：`Cormorant Garamond`, `Noto Serif SC`, `Noto Sans SC`, `Fira Code`（含 `preconnect`）

`hildegard-site.css` 通过 `@import "./hildegard-tokens.css"` 引入全部设计变量。`assets/glyph-star.svg` 保留作后续扩展背景。

## GitHub Actions integration

站点在 `scripts/build-github-pages.mjs` 的 `staticSites` 数组中注册（`slug: "HILDEGARD"`），Actions 会：

1. `npm ci`
2. `npm run build:pages`（把 `HILDEGARD/` 递归拷进 `docs/HILDEGARD/`，同时重建 hub）
3. `npm run validate:pages`（校验 `docs/` 内 HTML/CSS 的本地资源引用；Hildegard 页面的相对 `./assets/*` 引用都会被解析）
4. `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4`

Hypatia 那种"关键文件 grep smoke check"当前 workflow 只对 Hypatia 强制。Hildegard 目前没有单独的 smoke check；若要新增，请把改动写入 `.github/workflows/publish-static-mirror.yml` 并同步 `HANDOFF.md`。

## No confirmed upstream app source

当前仓库直接把 `HILDEGARD/` 当作真实来源，没有 React/TSX 或其它编译型上游。这也是为了保留 Figma 编辑可能性：设计变量在 `hildegard-tokens.css`，图形在独立 SVG，正文在 `index.html`，任何一层都可以在 Figma 与代码之间迁移，不受编译产物限制。

## URL portability

页面内所有内部链接和资源引用都使用**相对路径**（`./assets/...` 与 `../HYPATIA/`）：

- 未来切换到 `tsrat.com/My-Website/HILDEGARD/` 或 `hildegard.tsrat.com/` 都无须修改内容。
- `og:url` 与 `canonical` 各在一处，换域名时集中改这两处即可。
- 无绝对路径 `/My-Website/...` 写死；`scripts/build-github-pages.mjs` 复制目录时保留全部资源。

## Do not change without confirmation

- 目录名 `HILDEGARD/`（大写，供 GitHub Pages 大小写敏感路径使用）。
- `scripts/build-github-pages.mjs` 中 `HILDEGARD` 的 slug、metadata 与顺序。
- `THE-LIVING-ATLAS/index.html` 的 `07 Sites` 中 Hildegard 行的位置与序号。
- `assets/glyph-*.svg` 文件名与相对路径；替换图形请覆盖同名 SVG。
- 页面 `<html lang="zh-CN">`。
