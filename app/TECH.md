# IVORY ARCHIVE technical notes

Last audited: 2026-07-19

## Two rendered forms

IVORY ARCHIVE 在仓库中有两个当前相关的呈现路径：

1. Vinext/React 动态应用：由 `app/`、`public/` 和根构建配置运行。
2. GitHub Pages 静态版：由 `scripts/build-github-pages.mjs` 从 `app/briefings.ts` 生成。

已提交的根目录 `IVORY-ARCHIVE/` 是旧静态快照，不是当前 GitHub Pages build 的输入。

## Entries and source files

| File | Role |
| --- | --- |
| `app/page.tsx` | 动态首页 |
| `app/briefings/[date]/page.tsx` | 动态期刊详情路由 |
| `app/briefings.ts` | 全部期刊的字面量数据源 |
| `app/archive-explorer.tsx` | 搜索和筛选交互 |
| `app/site-shell.tsx` | Header/footer shell |
| `app/layout.tsx` | 根 layout 与 metadata |
| `app/globals.css` | 动态应用样式 |
| `public/story-images/` | 故事图片源 |
| `scripts/build-github-pages.mjs` | 静态 Pages HTML 生成器 |
| `scripts/github-pages.css` | 静态 IVORY 样式 |
| `scripts/github-pages.js` | 静态 IVORY 筛选/搜索脚本 |

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

## Known gaps

- 动态版与 Pages 静态版使用两套 JSX/HTML/CSS 实现，内容来自同一数据，但 UI 可能产生差异。
- 当前没有自动截图或 DOM 对比测试来检查两种呈现是否保持同一信息。
- `IVORY-ARCHIVE/` 旧快照容易误导新 Agent；保留或归档策略需要创作者确认。
