# Design

## Visual concept

本站采用“战后公开讲演讲义 / 印刷小册”的视觉语言。它不是通用卡片式产品页，也不应被统一成仓库其他历史人物站点的样式。

## Visual identity to preserve

- Paper：`#f1e9db` 与 `#f7f1e7` 的温暖纸张底色，并保留轻微纸纹。
- Ink：`#171716` 的近黑正文与整块深色章节。
- Accent：`#a6322a` / `#84251f` 的暗红色，用于论点、编号、边线和交互选中态。
- Typography：中文正文优先 Noto Sans SC / Source Han Sans SC / PingFang SC；标题优先 Noto Serif SC / Source Han Serif SC / Songti SC。
- Composition：大字号标题、细线网格、章节侧标、巨型数字和问号、明确的纵向阅读节奏。
- Geometry：直角边框和印刷式分栏，不引入圆角卡片、玻璃拟态或无意义渐变。

## Interaction contract

- 页内导航使用原生锚点。
- 八个误解使用原生 `details` / `summary`；无需 JavaScript 也能开合。
- “照顾母亲 / 参加抵抗军”按钮维持互斥选择、`aria-pressed` 和 `aria-live` 反馈；两项都不能被表现为标准答案。
- Hover、focus、active 和 open 状态必须可区分。
- `prefers-reduced-motion: reduce` 下关闭平滑滚动和可见动画。
- skip link 只在键盘聚焦时进入视图，这是本次允许的可访问性变化。

## Responsive behavior

- 大屏保留双栏 Hero、概念图、章节侧标和多列论证板。
- 窄屏将导航、路线、对比板、困境和卡片改为单列；不缩小到无法阅读。
- 巨型问号和编号是视觉锚点，但不得造成横向溢出或遮挡正文。
- 390×844 为后续 Antigravity QA 的最低移动基线。

## Shared foundations

可以采用仓库共享的语义 HTML、焦点样式、44px 触控目标、减弱动效、子路径和 QA 标准，但不得改变本页独有的色板、字体角色、纸张质感和讲义式版面。

## Figma

当前没有在本目录记录可编辑 Figma URL。按六阶段标准，正式迁移完成前需要补充代表性桌面 / 移动画面和困境、`details` 状态。

Status: `Blocked — Figma deliverable and creator review pending`.
