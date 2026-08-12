# 设计系统：阿拉伯通史数字档案馆

## 设计来源

- 创作者批准的 Codex-Ready Handoff Packet。
- Figma：[阿拉伯通史数字档案馆 · Arab History Archive](https://www.figma.com/design/Try0RtGSWgs0YTpTGcifCZ)。
- Figma 页面包含 Foundations、Components、Desktop/Mobile Key Screens、Interaction / States 与 Handoff。

本项目是信息主导的历史阅读界面，不使用通用卡片墙、玻璃拟态或装饰性历史拼贴。

## 排版

- 正文：`Noto Serif SC`，18px，line-height 2.0，400；无远程字体请求，按本地字体和系统宋体降级。
- 注疏与元数据：`Noto Sans SC`，15px 左右，line-height 1.6。
- 阿拉伯文：`Amiri`；阿拉伯字符必须放在 `dir="rtl" lang="ar"` 的 `.font-amiri` 中。
- 标题使用 `text-wrap: balance`，正文使用 `text-wrap: pretty`、`orphans` 与 `widows`。

## 时代色

| 状态 | 背景 | 正文 | 注疏背景 | 高亮 |
| --- | --- | --- | --- | --- |
| Era 0 游牧与沙海 | `#D7B593` | `#3A2F28` | `#C4A17E` | `#5A3927` |
| Era 1 神启与典籍 | `#F4EFE6` | `#1A1A1A` | `#E2D8C9` | `#6C3A17` |
| Era 2 帝国与网络 | `#E8E9EB` | `#1A1A1A` | `#D3D6DA` | `#1C4B5F` |
| Era 3 信仰的穹顶 | `#0B1320` | `#E0E0E0` | `#182230` | `#F4C95D` |
| Future Neutral | `#EEEAE4` | `#2F2C29` | — | — |

Future Neutral 只表示“尚待编辑映射”，不得被描述成新的历史时代。

## 布局与组件

- Desktop：70vw 阅读区 / 30vw sticky 注疏栏。
- Tablet：60vw / 40vw。
- Mobile：单栏正文；注疏为不超过 50svh 的底部抽屉。
- GlossaryTrigger：默认虚线，hover 实线，active 使用低饱和背景；不改变文本流。
- GlossaryPanel：切换词条不跳转正文。移动端支持关闭按钮、Escape 和向下滑动。
- Era skinning：进入 Era 时更新全局 CSS 变量；颜色 1 秒过渡。
- Note Directory：Hero 后使用档案索引式分隔行展示当前六篇已发布笔记；不是卡片墙，也不替代四时代导航。桌面为说明/索引双栏，移动端折叠为单栏。

## 动效与可访问性

实现使用原生 `IntersectionObserver`，保持批准的滚动换肤体验，同时避免 CDN、第三方运行时和 scroll reflow。进度条与抽屉只动画 `transform` / `opacity`。`prefers-reduced-motion` 时关闭平滑滚动和全部过渡。

JavaScript 关闭时六册全文仍在 HTML 中，`noscript` 区域渲染完整词汇表。键盘焦点、Escape、`aria-expanded`、`aria-current`、live region 和显式关闭按钮必须保留。
