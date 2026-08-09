# IVORY ARCHIVE technical notes

Last audited: 2026-07-29

## Two rendered forms

IVORY ARCHIVE 在仓库中有两个当前相关的呈现路径：

1. Vinext/React 动态应用：实现位于 `sites/ivory-archive/`，根 `app/`
   只保留框架路由适配器，`public/` 保留框架公共资源。
2. GitHub Pages 静态版：由 `scripts/build-github-pages.mjs` 从
   `sites/ivory-archive/briefings.ts` 生成。

已提交的根目录 `IVORY-ARCHIVE/` 是旧静态快照，不是当前 GitHub Pages build 的输入。

## Entries and source files

| File | Role |
| --- | --- |
| `sites/ivory-archive/page.tsx` | 动态首页实现 |
| `sites/ivory-archive/briefings/[date]/page.tsx` | 动态期刊详情实现 |
| `sites/ivory-archive/briefings.ts` | 全部期刊的字面量数据源 |
| `sites/ivory-archive/archive-explorer.tsx` | 搜索和筛选交互 |
| `sites/ivory-archive/site-shell.tsx` | Header/footer shell |
| `sites/ivory-archive/layout.tsx` | layout 与 metadata 实现 |
| `sites/ivory-archive/globals.css` | 动态应用样式 |
| `app/` | Vinext 所需的薄路由适配器 |
| `public/story-images/` | 故事图片源 |
| `public/ivory-site-manifest.json` | 双渲染器共用的机器可读能力与隐私 manifest |
| `public/ivory-analytics.js` | 无供应商、无网络、无持久存储的事件适配器 |
| `scripts/build-github-pages.mjs` | 静态 Pages HTML 生成器 |
| `scripts/github-pages.css` | 静态 IVORY 样式 |
| `scripts/github-pages-data.css` | 静态 Pages Data 区块样式 |
| `scripts/github-pages.js` | 静态 IVORY 筛选/搜索脚本 |
| `tests/ivory-renderer-parity.test.mjs` | 内容 schema、资产、路由、隐私与双渲染 parity |

## Routes

动态应用：

- `/`
- `/briefings/[date]`

GitHub Pages：

- `/My-Website/IVORY-ARCHIVE/`
- `/My-Website/IVORY-ARCHIVE/briefings/<YYYY-MM-DD>/`
- legacy `/My-Website/briefings/<YYYY-MM-DD>/` 会重定向到 IVORY 子目录。

不要通过修改 Next/Vite 路由来“统一”这两种路径。

## Data constraint

Pages 生成脚本通过字符串定位 `export const briefings`，再用 `Function(...)` 读取数组字面量。它依赖以下约束：

- `briefings` 保持为可直接求值的字面量数据。
- 数组声明末尾仍能由脚本找到最后一个 `];`。
- 数据中不要加入只能在 TypeScript 运行时解析的表达式、imported value 或函数调用。

如果要重构数据模型，必须同步重写并验证 Pages 生成器。

## Images

`story.image` 当前形如 `/story-images/file.jpg`。Pages builder 只取最后一个文件名，并从 `public/story-images/` 复制到 `docs/IVORY-ARCHIVE/story-images/`。

因此：

- 文件名必须与磁盘大小写一致。
- 新条目引用的图片必须真实存在。
- 不要让两个不同图片依赖相同文件名。
- `imageAlt` 与 `imageCredit` 必须随图片一起更新。

## Commands

动态开发：

```bash
npm run dev
```

生成静态 Pages 版本：

```bash
npm run build:pages
```

全局验证：

```bash
npm run build
npm test
npm run lint
```

## Output

- Vinext build：`dist/`
- Pages build：`docs/IVORY-ARCHIVE/`
- 两个目录都被 `.gitignore` 忽略。

## Analytics contract

`ivory-analytics.js` 暴露 provider-neutral `window.TSRatAnalytics.track`，
并通过 `tsrat:analytics` 自定义事件留出未来接入点。当前实现：

- 不发送网络请求；
- 不写 cookie、`localStorage` 或 `sessionStorage`；
- 不采集身份；
- 搜索只保留长度区间，不保留原始文本；
- 只允许 manifest 中列出的事件。
- `source_opened` 只记录公开来源入口的目标标识，不记录读者随后在外站的行为。

接入真实 provider 前必须补齐数据来源、session 定义、保留期限、隐私审查和用途。

## Remaining gaps

- 动态版与 Pages 静态版使用两套 JSX/HTML/CSS 实现，内容来自同一数据，但 UI 可能产生差异。
- `tests/ivory-renderer-parity.test.mjs` 检查全部期刊的四段 schema、独立背景、全部来源 URL、每篇唯一且位于分析后的描述性链接、资产、全部静态详情页、Data contract 与双渲染 parity；它不替代视觉回归。
- `IVORY-ARCHIVE/` 旧快照容易误导新 Agent；保留或归档策略需要创作者确认。
