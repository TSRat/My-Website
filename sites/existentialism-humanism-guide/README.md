# 存在主义是一种人道主义：初学者导读

这是从 OpenAI Sites 迁入 `My-Website` 的可维护 React / Next.js 源码。站点用一条从“存在先于本质”到“存在主义人道主义”的阅读路径，帮助中文初学者理解 Sartre 1945 年公开讲演中的核心论证。

## 本地开发

要求 Node.js `>=22.13.0`。

```bash
npm ci
npm run dev
```

默认访问路径：

```text
http://localhost:3000/My-Website/existentialism-humanism-guide/
```

如需在根路径预览：

```bash
SITE_BASE_PATH=/ npm run dev
```

## GitHub Pages 构建

```bash
npm run build:pages
```

静态输出位于 `out/`。构建默认把脚本、样式与 favicon 指向：

```text
/My-Website/existentialism-humanism-guide/
```

可以用 `SITE_BASE_PATH` 为预览环境覆盖这个路径；发布前不要随意改变公开 slug。

## 文档

- `CONTENT.md`：内容边界、事实与解释层级
- `DESIGN.md`：现有视觉和交互语言
- `TECH.md`：源码、构建和子路径约束
- `ANALYTICS.md`：provider-neutral 事件规范
- `design-qa.md`：视觉保护与待补 QA
- `HANDOFF.md`：当前迁移状态
