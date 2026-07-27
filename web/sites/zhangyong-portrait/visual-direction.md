# 张勇的生活切片 · Visual direction

## Selected direction

保留现有 `PRESERVE` 基线，以方案二“高密度赛博日记”作为视觉载体，并只吸收：

- 方案一的实用说明书、问题清单和成本透明逻辑；
- 方案四的小票、账目行与日常金额反差。

不切换到浅色商店、热敏纸页面或数据仪表盘，也不增加真实电商界面。这样能让内容
显著重构，同时保持读者已经认识的“天气观测站 / 赛博档案”身份。

## Art direction

- Surface：深夜黑与近黑紫的长页编辑界面。
- Signals：mint 标示主体与可用状态，orange 标示行动与现实摩擦，violet 标示照料
  和精神世界。
- Composition：巨型压缩标题、细网格线、等宽元数据、直角图像窗与章节间大停顿。
- New narrative motif：现有时间轴承载“问题 → 做法 → 边界”的创作账本；现有列表
  承载深夜觅食的价格账单。
- Density：不把全部内容做成圆角卡片；密集信息与大面积留白交替。

## Color tokens

| Token | Value | Role |
| --- | --- | --- |
| Ink | `#08070A` | page background |
| Ink soft | `#100D13` | alternate section |
| Paper | `#F2EEE8` | primary text |
| Muted | `#AAA4AD` | supporting text |
| Mint | `#6EF7C8` | identity, active, focus |
| Orange | `#F28A4B` | friction, action, price |
| Violet | `#B9A8E8` | care, reflection |
| Line | `rgba(242, 238, 232, 0.12)` | grid and border |

These values mirror the current CSS baseline; they are not a new palette.

## Typography

- Display：沿用现有中文粗黑无衬线，紧字距、低行高，承载巨型章节标题。
- Body：沿用 Geist / 中文系统无衬线栈，正文行高保持约 `1.8–1.95`。
- Metadata：Geist Mono，使用大写英文、编号、金额和状态标签。
- Numbers：沿用等宽数字感，不引入点阵字体，避免视觉身份跳变。

## Grid, spacing and shape

- 保留当前最大内容宽度、全宽 section 和 1180 / 900 / 620px 响应断点。
- 保留直角与 1px 细线；只沿用当前极少量 2–4px 小圆角。
- 新增内容优先复用 `.timeline-*`、`.favored-*`、`.method-card` 等现有结构。
- 不更换 hero 布局、三张主图、图像裁切或章节节奏。

## Imagery

- 继续使用霸王龙、辣椒炒肉和三张兔子图。
- 图片仍分别承担照料证据、食物锚点和视觉隐喻，不是通用装饰。
- 本次不生成或引入新图，不把 PDF、私聊截图、订单截图或余额截图公开。

## Motion and interaction

- 保留首屏 reveal、ticker、hover 和当前锚点信号。
- 不加入音效、震动、烟花、无限打印或横向滚动。
- `prefers-reduced-motion` 继续关闭非必要动画和平滑滚动。

## Responsive visual behavior

- Desktop 保留左右分栏 hero 与大型图像窗。
- Mobile 保留单列 hero、强制换行标题和图像拼贴缩放。
- 账本与账单在移动端使用现有列表重排，不使用横向表格。

## Visual preservation decision

本批次属于“批准的内容与结构调整”，不是重设计。允许改变章节标题、段落、标签和
信息顺序；不批准改变调色板、字体体系、hero、图像角色、断点和总体构图。

## Alternate direction — red public-portal parody

`red.html` deliberately leaves the preserved dark portrait system and adopts a
separate public-portal vocabulary:

- deep red masthead and navigation;
- warm paper and white information surfaces;
- Noto Serif-style headline hierarchy with dense sans-serif lists;
- document numbers, dates, thin rules and compact bulletin rows;
- three-column lead story with a real Bawanglong image;
- flat color fields only, without official emblems, seals or fake filing marks.

Research references:

- Beijing Municipal Government portal: masthead, red navigation, headline and
  public-information density.
- 12371 study portal: learning-topic hierarchy, bulletin lists and red/gold
  campaign blocks.
- Government Website Development Guidelines: prominent site naming,
  information publishing and service-oriented structure.

The design extracts layout conventions, not official identity. Visible parody
labels are part of the composition rather than a removable legal footnote.
