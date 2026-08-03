# Living Atlas 知识库设计交接

Status: implementation complete · exact preview passed · Draft PR #38 · 2026-08-04

## 设计源

- Existing shared Figma file: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=18-2>
- Knowledge Library page: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=62-49>
- Knowledge Record component set: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=63-160>
- Desktop portal 1440: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=65-55>
- Mobile Humanities 390: <https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=68-89>
- Approved outline: `web/sites/living-atlas-knowledge/screen-outline.md`
- Product spec: `web/sites/living-atlas-knowledge/product-spec.md`
- Visual direction: `web/sites/living-atlas-knowledge/visual-direction.md`
- Typography and layout: `web/sites/living-atlas-knowledge/typography-layout.md`
- Analytics contract: `web/sites/living-atlas-knowledge/analytics.md`

## Figma 复用决定

- 复用 `Portfolio / Shared Foundations` 与 `Theme / Living Atlas` 变量。
- 复用 `Shared / Header · Desktop`、`Shared / Search Field` 与 `Shared / Content Status`。
- 不订阅 Material 3 或 Simple Design System；它们与 Living Atlas 的档案编辑语言不一致。
- 新增范围只包含 Knowledge Record 组件和知识库桌面 / 移动组合。

## 代码映射

- Authoritative source: `sites/living-atlas/`
- Generated mirror: `THE-LIVING-ATLAS/`
- Registry: `sites/living-atlas/knowledge/knowledge-registry.js`
- UI runtime: `sites/living-atlas/knowledge/knowledge.js`
- Styles: `sites/living-atlas/knowledge/knowledge.css`

## QA 状态

- Figma：组件集 2 viewport × 3 states，桌面与移动截图检查通过。
- 代码：八个双语路由、三学科入口、搜索与筛选、无脚本后备已实现。
- 浏览器基本检查：英文总览搜索和 Topics 筛选通过；中文人文学科页 390px 无横向溢出；Mapping 链接数为 0；首页仅 Knowledge World 可点击且三学科行指向真实路由。
- Pages：`build:pages` 与 `validate:pages` 通过；实现提交的 exact-commit 未合并预览检查通过。
- Antigravity 扩展 QA：pending。
- Exact implementation preview：<https://raw.githack.com/TSRat/My-Website/2ab946adab0477eca20c360962acbe560360fa55/THE-LIVING-ATLAS/knowledge/>。
- Draft PR：<https://github.com/TSRat/My-Website/pull/38>；未合并。
