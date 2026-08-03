# Living Atlas 知识库字体与布局

Status: creator approved · 2026-08-04

## 字体

- Display Chinese / editorial：Noto Serif SC 400 / 600。
- Display Latin / body serif：Noto Serif SC 的拉丁字形，与现站一致。
- Interface / filters：Inter 500 / 600。
- Metadata / numbering：Fira Code 400 / 500。
- 知识子页不新增远程字体请求；优先使用设备已安装的 Noto Serif SC、Inter 与 Fira Code，并沿用现有 CSS 字体回退栈。

## 字级

| 用途 | Desktop | Mobile | 行高 |
| --- | ---: | ---: | ---: |
| Portal H1 | 72–88px | 44–52px | 0.98–1.06 |
| Discipline H1 | 60–72px | 40–48px | 1.02–1.1 |
| Section H2 | 34–42px | 28–34px | 1.12–1.25 |
| Record title | 24–30px | 22–26px | 1.2–1.35 |
| Lede | 20–22px | 19–20px | 1.65–1.75 |
| Body / summary | 16–18px | 16–18px | 1.65–1.8 |
| Metadata / filter | 12–14px | 12–14px | 1.45–1.65 |

## 网格

- Desktop：12 columns，内容最大宽度 1200px，左右外边距不小于 32px。
- Tablet：8 columns，外边距 28–32px。
- Mobile：4 columns，外边距 18–20px，gutter 12–16px。
- Portal 主标题约跨 8 列；定位说明约跨 5–6 列。
- 学科入口在桌面形成三列，在移动端按编号纵向排列。
- 条目行桌面采用 `编号 1列 / 标题摘要 6列 / 类型状态日期 3列 / 链接 2列`；移动端改为单列顺序。
- 正文说明最大阅读宽度 720px，不把元数据塞进正文行。

## 响应式规则

- ≤ 900px：三学科由三列变为纵向；条目元数据移到标题下方。
- ≤ 720px：页首折叠为两行，但语言切换始终可见；筛选按钮允许换行。
- 390px：搜索框满宽，筛选保持至少 44px 可点击高度，列表不出现横向滚动。
- 任何断点下，Published 与 Mapping / Planned 的差异都不能只靠颜色表达。

## 动效与无障碍

- 筛选只改变显隐和结果计数，不做大幅位移动画。
- 焦点外框至少 2px，与背景保持清楚对比。
- `prefers-reduced-motion: reduce` 时禁用平滑滚动与非必要过渡。
- 条目 DOM 顺序与视觉顺序一致，移动端不使用 CSS 重新排序破坏阅读顺序。
