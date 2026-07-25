# Enheduanna technical notes

Last updated: 2026-07-25

## Source and mirror

| Directory | Role |
| --- | --- |
| `sites/enheduanna/` | 权威的 React / TSX / CSS 源码、Vite 配置、维护文档和原始资源 |
| `.site-build/enheduanna/` | 被 Git 忽略的临时构建目录 |
| `ENHEDUANNA/` | 受版本控制、由 GitHub Pages workflow 复制的发布镜像 |

公开路径保持：

```text
/My-Website/ENHEDUANNA/
```

不要改变目录名大小写、Pages slug 或入口中的相对资源路径。

## Source entries

- `index.html`
- `main.tsx`
- `page.tsx`
- `globals.css`
- `public/`
- `vite.config.ts`

`page.tsx` 是内容与页面结构的主要维护入口；`globals.css` 保存站点独有的展览图录视觉、响应式规则和 Data / Signals 附录样式。

## Local development and production build

```bash
npm run dev:enheduanna
npm run build:enheduanna
```

`dev:enheduanna` 使用项目级 Vite 配置。`build:enheduanna` 调用统一发布器
`scripts/build-site.mjs`，并从 `site.config.json` 读取站点契约：

1. 构建到 `.site-build/enheduanna/`。
2. 检查临时 `index.html` 已引用哈希 JS/CSS，不再引用 `main.tsx`。
3. 把通过检查的文件复制到 `ENHEDUANNA/`。
4. 保留未被新入口引用的旧哈希 bundle 作为回滚材料。

修改源码、CSS 或 `public/` 后，必须运行 `npm run build:enheduanna` 并提交源码与当前镜像；不要直接修补编译 bundle。

## Pages deployment

`npm run build:pages` 会先运行同一个站点构建器，再执行：

```text
sites/enheduanna/ -> .site-build/enheduanna/
                    -> ENHEDUANNA/
                    -> docs/ENHEDUANNA/
```

因此单站开发可先构建 Enheduanna；组合发布只需运行 Pages 命令：

```bash
npm run build:enheduanna
npm run build:pages
npm run validate:pages
```

现有 GitHub Actions artifact 架构、公开 URL 和 `scripts/build-github-pages.mjs` 的复制映射均未改变。

## Assets and rollback policy

源码资源位于 `sites/enheduanna/public/`，Vite 会把它们复制到发布镜像根目录。当前同名资源：

- `enheduanna-disc.jpg`
- `enheduanna-portrait.png`
- `enheduanna-silhouette.png`
- `ishtar-babylonia.png`
- `standard-of-ur.jpg`
- `voices-lift.png`
- `tsrat-logo.png`
- `favicon.svg`

新入口只引用当前构建生成的哈希 JS/CSS。旧 bundle 不应手工引用，也不应在没有单独归档决定时删除。

## Data / analytics

页面包含可见的 `#data` 入口，并明确：

- provider 为 `none`
- 无网络上报
- 无 Cookie 或持久化分析标识
- 不采集身份、正文、自由输入或跨站行为

`sites/enheduanna/public/site-manifest.json` 保存 provider-neutral 事件与隐私契约，并随构建进入发布镜像。它不是已启用的外部分析服务。

## Verification

最小相关检查：

```bash
npm run build:enheduanna
node --test tests/enheduanna-readiness.test.mjs
npm run build:pages
npm run validate:pages
```

浏览器基本检查覆盖当前入口、8 张图片、Data 入口、控制台错误和横向溢出。扩展的多浏览器、键盘、section-level 截图与感知比较交给 Antigravity。

## Known limits

- 章节编号仍按创作者保留的非递增叙事顺序；是否调整需要创作者确认。
- 旧哈希 bundle 作为回滚材料保留，当前尚未建立正式的长期归档/清理策略。
- 原始 ChatGPT Sites 编辑器没有暴露可下载源码；本工程是基于仓库内完整可读源码和既有镜像、按创作者授权完成的可维护重建。
