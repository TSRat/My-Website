export const zhangYongContent = {
  schemaVersion: 1,
  locale: "zh-CN",
  title: "张勇的生活切片",
  contentBoundary: {
    type: "narrative-framing",
    description:
      "基于人物画像与创作文本的分层整理；事实观察、创作叙事与视觉隐喻分别标注，不替人物下定义。",
  },
  sections: [
    { id: "main-content", number: "00", title: "张勇｜不是一种答案，是一种天气" },
    { id: "fragments", number: "01", title: "张勇，首先是她自己" },
    { id: "timeline", number: "02", title: "解决真实问题的创作账本" },
    { id: "favored", number: "03", title: "27.3 元的深夜胜利" },
    { id: "bawanglong", number: "04", title: "霸王龙照料档案" },
    { id: "underhail", number: "05", title: "Underhail 与 velna 的重要关系轨道" },
    { id: "mind", number: "06", title: "精神信息密度" },
    { id: "field-note", number: "07", title: "兔子现场笔记" },
    { id: "data", number: "08", title: "数据与隐私" },
    { id: "weather", number: "09", title: "天气更新" },
  ],
  assets: [
    {
      id: "bawanglong",
      path: "./assets/bawanglong.jpg",
      role: "narrative-evidence",
      alt: "白紫色小鸟霸王龙",
    },
    {
      id: "spicy-pork",
      path: "./assets/spicy-pork.jpg",
      role: "narrative-evidence",
      alt: "一份热乎的青椒辣椒炒肉盖饭",
    },
    {
      id: "rabbit-bread",
      path: "./assets/rabbit-bread.jpg",
      role: "visual-metaphor",
      alt: "像面包和土豆一样圆的兔子",
    },
    {
      id: "rabbit-squish",
      path: "./assets/rabbit-squish.png",
      role: "visual-metaphor",
      alt: "被生活压扁的兔子梗图",
    },
    {
      id: "rabbit-quote",
      path: "./assets/rabbit-quote.png",
      role: "visual-metaphor",
      alt: "关于兔品很好的兔子梗图",
    },
  ],
};
