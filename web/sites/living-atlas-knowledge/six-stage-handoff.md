# Living Atlas 知识库六阶段交接

Status: implementation complete · preview pending push · 2026-08-04

## 1. Product / UX

- 用户批准线上继续使用三大学科，并把线下可公开结构整合为页内导览与筛选。
- 屏幕页纲、发布边界、状态模型、八个双语路由与成功标准已记录。

## 2. Visual exploration

- 视觉方向为 `Field Index / 田野索引`。
- 延续 Living Atlas 的 Ivory、Ink、Stone、Cobalt、规则线、档案编号和非对称编辑网格。
- 不采用通用圆角卡片、玻璃拟态、渐变或 Obsidian 文件夹视觉。

## 3. Figma design system

- 设计源：<https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=62-49>
- 复用现有基础变量、桌面页首、搜索框与 Content Status。
- 新增 `Living Atlas / Knowledge Record`：<https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=63-160>
- 变体矩阵：Viewport = Desktop / Mobile；State = Published / Mapping / Planned。

## 4. Interactive prototype + design QA

- 桌面总览：<https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=65-55>
- 移动人文学科页：<https://www.figma.com/design/ey07N2cwgxCtNUjvm6Ixgt?node-id=68-89>
- 已修正 Figma 自动布局裁切、移动变体未入组件集、文字属性未绑定和长摘要裁切问题。
- 截图检查通过；Antigravity 多设备扩展 QA 待后续执行。

## 5. Production engineering + GitHub

- 权威源码：`sites/living-atlas/`
- 发布镜像：`THE-LIVING-ATLAS/`
- 公开注册表：`sites/living-atlas/knowledge/knowledge-registry.js`
- 八个 HTML 路由支持直接访问和 `<noscript>` 后备。
- 本地构建、定向测试、Pages artifact、引用验证和浏览器基本检查已通过。
- exact-commit Preview 与 Draft PR 在推送后补齐；不自动合并。

## 6. Data / analytics

- provider-neutral no-op 分析保持默认无网络、无 cookie、无持久存储、无身份标识。
- 新增 `knowledge_open`、`knowledge_filter`、`knowledge_search`、`knowledge_entry_open` 契约。
- 不记录搜索词原文、私人路径、tokenized URL 或 Obsidian 文件元数据。
