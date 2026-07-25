# Tech

## Source of truth

- 页面内容与交互：`app/page.tsx`
- 全局视觉系统与响应式规则：`app/globals.css`
- HTML 语言与 metadata：`app/layout.tsx`
- GitHub Pages 路径与静态导出：`next.config.ts`
- 公共资产：`public/`

这是可维护的 React 19 / Next.js 16 源码，不是从线上 HTML 反向拼接的快照。

## Rendering model

页面使用 Next.js App Router，并通过 `output: "export"` 生成完全静态的 GitHub Pages artifact。困境选择在浏览器中由 React 状态驱动；误解列表使用原生 `details`，没有数据库、认证或服务端 API。

## Public path

源项目默认 base path：

```text
/My-Website/existentialism-humanism-guide
```

`next.config.ts` 同时负责：

- `basePath`
- `trailingSlash`
- 静态导出
- 将 favicon 指向同一子路径

根目录同步脚本使用 `SITE_BASE_PATH=/ SITE_ASSET_PREFIX=.` 生成可移植镜像：

```text
EXISTENTIALISM-HUMANISM-GUIDE/
```

最终仓库公开路径是
`/My-Website/EXISTENTIALISM-HUMANISM-GUIDE/`。源文件变化后从仓库根运行
`npm run sync:philosophy-sites`，不要手改镜像。

## Migration exclusions

以下 OpenAI Sites / Cloudflare 脚手架没有迁入：

- 原项目 `.git`
- `.openai/hosting.json`
- `.npmrc` 与任何环境文件
- `node_modules`、`.vinext`、`.next`、`dist`、`out`
- Sites Worker、D1 / Drizzle 示例与认证帮助代码
- Sites 专用 artifact 打包和验证脚本

迁移继续使用相同的 React / Next 页面源码；排除项不是站点内容或视觉的来源。

## Commands

```bash
npm ci
npm run lint
npm run build:pages
npm test
```

`npm test` 会再次构建，再检查：

- 静态 `out/index.html` 存在；
- 中文 metadata 和 skip link 存在；
- Next 脚本 / 样式与 favicon 使用 Pages 子路径；
- 页面仍包含原生 `details` 和困境按钮状态。

## Deployment boundary

本目录不会自行修改根仓库的项目注册表、Pages 生成脚本或 workflow。根级集成必须把 `out/` 复制到对应公开目录，并运行根仓库的 `build:pages` 与 `validate:pages`。

## Analytics

当前没有分析 provider，也没有事件代码。未来实现必须遵守 `ANALYTICS.md`，不得静默加入身份识别、跨站追踪或自由文本采集。
