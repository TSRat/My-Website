# Enheduanna technical notes

Last audited: 2026-07-19

## Source and mirror

本项目具有两套目录：

| Directory | Role |
| --- | --- |
| `static-sites/enheduanna/` | 可读的 React/TSX/CSS 源码和原始资源 |
| `ENHEDUANNA/` | 当前 GitHub Pages workflow 直接复制的静态镜像 |

当前仓库没有 npm script 自动把前者构建到后者。修改源目录不等于更新公开 Pages 输入。

## Source entries

- `static-sites/enheduanna/index.html`
- `static-sites/enheduanna/main.tsx`
- `static-sites/enheduanna/page.tsx`
- `static-sites/enheduanna/globals.css`
- `static-sites/enheduanna/public/`

发布镜像入口：

- `ENHEDUANNA/index.html`
- `ENHEDUANNA/assets/index-DIQsAFLE.js`
- `ENHEDUANNA/assets/index-ZUWuKnJO.css`
- 其余图片与 favicon 位于 `ENHEDUANNA/` 根目录。

## Current deployment behavior

`npm run build:pages` 不会编译 `static-sites/enheduanna/`。它执行：

```text
copy ENHEDUANNA/ -> docs/ENHEDUANNA/
```

公开路径是：

```text
/My-Website/ENHEDUANNA/
```

不要改变目录名大小写或入口中的 `./assets/...` 相对路径。

## Rebuild status

仓库结构表明该项目曾由 Vite/React 构建，但没有保存可确认的专用 build command、Vite config 或 package script。

因此：

- 不要声称 `npm run build` 会重建 Enheduanna；它构建根 Vinext 应用。
- 不要只改 `page.tsx` 后就报告 Pages 已更新。
- 不要直接编辑带哈希 bundle 来模拟可靠源码流程，除非任务明确要求紧急镜像修补。
- 在找到或补充构建命令前，任何内容/UI 修改都必须说明源目录与发布镜像是否同步。

2026-07-19 已审计当前全部 5 个 remote branches。仓库仅保留本目录的 TSX/CSS/资源与已编译镜像，没有找到缺失的项目级 `package.json`、Vite config 或原始构建脚手架。因此不能在不猜测架构的情况下补写可靠的重建命令。

TODO: needs confirmation — 原始构建命令、Vite root 和输出参数是否保存在仓库外。

## Assets

源码资源在 `static-sites/enheduanna/public/`，发布资源在 `ENHEDUANNA/`。当前有以下同名文件：

- `enheduanna-disc.jpg`
- `enheduanna-portrait.png`
- `enheduanna-silhouette.png`
- `ishtar-babylonia.png`
- `standard-of-ur.jpg`
- `voices-lift.png`
- `tsrat-logo.png`
- `favicon.svg`

替换资源时必须检查两处以及构建结果；文件名大小写必须一致。

## Verification

当前可运行的全局 Pages 检查：

```bash
npm run build:pages
npm run validate:pages
```

然后确认：

```text
docs/ENHEDUANNA/index.html
docs/ENHEDUANNA/assets/index-DIQsAFLE.js
docs/ENHEDUANNA/assets/index-ZUWuKnJO.css
```

浏览器检查应覆盖目录导航、图片、外部来源链接、Bilibili iframe、移动端布局和控制台 404。

## Safe future improvement

在不改 URL 的前提下，为 `static-sites/enheduanna/` 增加明确的 build script，并让验证能够比较或重建 `ENHEDUANNA/`。这是独立技术任务，不能在普通内容修改中顺手引入。
