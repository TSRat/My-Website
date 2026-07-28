# Hildegard 字体与布局

Status: creator approved · 2026-07-28

## 字体

- Display Latin：Cormorant Garamond 500。
- Display / body Chinese：Noto Serif SC 400 / 600 / 700。
- Navigation：Noto Sans SC 500 / 600。
- Folio metadata：Fira Code 500。
- 装饰首字母使用 Cormorant Garamond，不引入不可维护的图像字体。

## 字级

| 用途 | Desktop | Mobile | 行高 |
| --- | ---: | ---: | ---: |
| Hero H1 | 64–76px | 42–48px | 1.02–1.08 |
| Page H2 | 48–60px | 36–44px | 1.08–1.15 |
| Section H3 | 26–32px | 24–28px | 1.25 |
| Lede | 21–22px | 20px | 1.7 |
| Body | 18–19px | 18px | 1.8 |
| Caption / nav / metadata | 14–15px | 14px | 1.55–1.7 |

## 网格

- Desktop：12 columns，容器最大 1280px，gutter 24–32px。
- Tablet：8 columns，外边距 32px。
- Mobile：4 columns，外边距 20px，gutter 16px。
- 正文宽度最大 720px，约 30–34 个汉字一行。
- 关键图片允许跨 5–7 列；正文不围绕不规则图片排版。
- 页面高度由内容决定，不强制 `100vh`。

## 组成原则

- 每页只有一个主标题、一个核心论点和一种主要关系图。
- 以线、边注、时间轴和关系网络组织信息；不堆叠通用卡片。
- 图注直接贴近图像，类型标签置于图注首行。
- Page 01 的事实索引用规则线分区，不使用六张圆角卡片。
- Page 08 使用“两条路径汇合”因果图。
- Page 13 使用通信网络表达权力关系。
- A2 使用证据矩阵，并为窄屏提供逐条阅读模式。

## 响应式与动效

- 页首在 ≤760px 变为 56–64px 紧凑栏；导航抽屉不占据初始阅读高度。
- 桌面页轨在 ≤1100px 隐藏，保留页底前后导航和页首计数。
- 入场过渡 180–420ms；标题不等待滚动观察器。
- 深链目标获得 `scroll-margin-top`，并在 `:target` 状态显示金色页框提示。
- `prefers-reduced-motion: reduce` 下取消位移、旋转与平滑滚动。
