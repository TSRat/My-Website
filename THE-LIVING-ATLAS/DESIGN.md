# Design System: THE LIVING ATLAS

## 设计哲学 (Design Philosophy)
本主站视觉遵循 `个人网页思路.pdf` 的 5 级优先级设定：
- **Archive for structure** (25%): 负责分类、编号、元数据、索引体系。
- **Editorial for storytelling** (25%): 人物特写、长文阅读，运用大标题、Serif 字体和大量留白。
- **Swiss for clarity** (20%): 提供视觉骨架（严格的 12-column 网格，不对称左对齐）。
- **Technology for navigation** (10%): Bento 风格用于部分快速浏览模块。
- **Cinema for memory** (5%): 在入口或重要节点使用实验性交互。

## 颜色令牌 (Color Tokens)
采用“统一骨架，不统一情绪”的原则，主站采用中性母色，子世界采用自己的强调色。
- **主背景 (Ivory)**: `#F2EFE7`（偏温暖的象牙白，避免刺眼的纯白）。
- **主文字 (Ink)**: `#161616`（接近黑色）。
- **次级信息/线条 (Stone)**: `#A7A29A`（灰褐或中性灰，用于 Metadata）。
- **主站高亮 (Cobalt Blue)**: `#0047AB`（用于链接交互，保持科技感与人文感的平衡）。

## 字体体系 (Typography System)
- **Display / Editorial Serif (Noto Serif SC)**: 大胆尺度 (72-160px)，负责营造人文、历史和故事感。
- **Grotesk Sans-serif (Inter)**: 现代清晰尺度，用于正文、导航、UI 元素。
- **Monospace (Fira Code)**: 理性数字尺度，全大写字母用于渲染 Metadata、时间、状态、档案编号，构建工程背景感。

## 布局 (Layout)
- **网格系统**: 桌面端严格应用 12 柱网格，并拥有巨大的外边距 (`var(--container-margin)`)。
- **对齐原则**: 拒绝万物居中，坚持左对齐不对称布局，依靠标题（巨型尺寸）与辅助信息（极小尺寸）建立强烈的尺寸反差（Scale Contrast）。

## 内容状态与交互

- `published`：可以点击，使用真实 URL。
- `planned / draft`：不是链接；用降低对比度的状态文字表达，不伪装成按钮。
- `mapping`：知识分类存在，但底层数量尚未确认。
- 移动目录展开时必须为正文让出空间，不能透明压在 monumental title 上。
- Worlds 是四个稳定概念板块；允许在没有目标页面时保持非点击状态。
- Index 只显示当前真实可达内容，因此不会使用 `#` 占位链接。

## 响应式人物图像

- Featured World 的 Hypatia 肖像使用 `assets/hypatia-sketch-transparent.webp`，文件本身带 Alpha 通道；移动端和平板端不能只依赖 `mix-blend-mode` 模拟透明。
- 继续保留 `multiply` 和原有黑白对比滤镜，用于让人物线稿与 Ivory 页面底色保持桌面端既有的纸本融合效果。
- 透明版本是从现有 Hypatia 素描资产做背景提取的衍生文件，不改变人物身份、姿态、构图或史料定位。
