export type BriefingStory = {
  category: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  title: string;
  summary: string;
  happened: string;
  importance: string;
  creatorAngle: string;
  facts: string[];
  sourceName: string;
  sourceUrl: string;
  sourceDate: string;
};

export type Briefing = {
  date: string;
  displayDate: string;
  issueNo: string;
  theme: string;
  intro: string;
  uniqueCount: number;
  topics: string[];
  stories: BriefingStory[];
};

export const knownHistoryTopics = [
  "Frida Kahlo 的符号化与展览热潮",
  "算法性厌女、推荐系统与深度伪造",
];

export const briefings: Briefing[] = [
  {
    date: "2026-07-14",
    displayDate: "2026.07.14",
    issueNo: "01",
    theme: "身体、空间与公共记忆：谁能被留下，又是谁决定我们如何看见？",
    intro:
      "今天的五个故事看似分散：一位古巴裔艺术家的大型回顾展、一处把廉价工作室带回城市的艺术基地、一项扩展中的脑刺激治疗、一场谈论更年期的朋克节，以及一组出现在国家广场上的增强现实女性。它们共同追问：当人的身体、声音与历史需要被保存时，谁提供空间，谁定义证据，谁又拥有叙述权？",
    uniqueCount: 5,
    topics: ["艺术人文", "社会科学（包括天文学）", "女性主义"],
    stories: [
      {
        category: "艺术人文 × 女性主义",
        image: "/story-images/ana-mendieta.webp",
        imageAlt: "土地上的身体空缺轮廓与胶片组成的 Ana Mendieta 主题编辑插图",
        imageCredit: "编辑插图 · 用于阐释主题，并非现场新闻摄影",
        title: "Ana Mendieta 不应只作为一桩死亡事件被记住",
        summary: "Tate Modern 的英国首场大型 Ana Mendieta 展览开幕，把注意力重新放回她的身体、土地、流亡与影像实践。",
        happened:
          "Tate Modern 于 7 月 15 日开启英国首个献给 Ana Mendieta 的大型展览，展期持续至 2027 年 1 月 17 日。展览把《Silueta》系列等代表作与重新修复的影像、早期绘画和较少展出的材料并置，使观众能够看见她如何在土壤、火、水、血与身体轮廓之间工作。",
        importance:
          "Mendieta 长期被夹在两种叙事中：一边是“女性主义身体艺术家”的简化标签，另一边是 1985 年坠楼死亡及 Carl Andre 审判留下的巨大阴影。大型机构回顾展的意义，不是抹掉死亡政治，而是让作品重新拥有自己的时间线：古巴流亡经验、对前哥伦布文化的兴趣、短暂影像的保存，以及她如何拒绝把身体当成稳定的雕塑对象。",
        creatorAngle:
          "可以制作一期“当女性艺术家的死亡压过她的作品”专题：比较 Mendieta、Francesca Woodman 与 Sylvia Plath 的身后叙事，追问纪念、猎奇和重新评价之间的界线。画面上可从她留下的空缺轮廓切入，而不是重复坠楼案的戏剧化视觉。",
        facts: [
          "展期：2026 年 7 月 15 日至 2027 年 1 月 17 日",
          "定位：英国首场献给 Mendieta 的大型机构展览",
          "材料：标志性作品、重新修复的影像、早期绘画与较少展出作品",
        ],
        sourceName: "Tate Modern",
        sourceUrl: "https://www.tate.org.uk/whats-on/tate-modern/ana-mendieta",
        sourceDate: "2026-07-13",
      },
      {
        category: "艺术人文 × 社会科学",
        image: "/story-images/sarabande-studios.webp",
        imageAlt: "历史住宅中的艺术家工作室与共享空间编辑插图",
        imageCredit: "编辑插图 · 用于阐释主题，并非现场新闻摄影",
        title: "当艺术家的工作室只要每平方英尺 £1",
        summary: "Sarabande Foundation 在 Tottenham 开启新基地，把 14 间可负担工作室、展厅、咖啡馆与社区空间放进两栋历史建筑。",
        happened:
          "由 Lee Alexander McQueen 于 2006 年创立的 Sarabande Foundation，在近十年的规划和修复后，于 7 月 1 日开放 Tottenham 新址。两栋 18 世纪早期 Queen Anne 联排住宅容纳了 14 间艺术家工作室、House of Bandits 画廊、咖啡馆及公共活动空间。工作室报价仅为每平方英尺 £1。",
        importance:
          "艺术生态最常被讲成天赋、灵感和市场价格，但创作者能否留下，首先取决于租金、工作空间和稳定时间。Sarabande 没有把新址放在伦敦中心，而是“跟随艺术家”来到 Tottenham；这既可能为社区提供文化基础设施，也必须警惕艺术机构成为下一轮绅士化的先导。关键差异在于：空间是否真的长期低价、是否向本地居民开放、艺术家是否拥有决定权。",
        creatorAngle:
          "可从“艺术家不是被灵感饿死，而是被房租赶走”切入，比较 London、Berlin 与中国一线城市的工作室迁移。把每平方英尺 £1 与周边商业租金并排呈现，会比泛泛谈“支持青年艺术家”更有冲击力。",
        facts: [
          "14 间可负担艺术家工作室",
          "租金：每平方英尺 £1",
          "建筑：两栋 18 世纪早期 Queen Anne 联排住宅",
          "开放设施：画廊、咖啡馆、共享空间与全年公共项目",
        ],
        sourceName: "PhotoVogue",
        sourceUrl: "https://www.vogue.com/article/sarabande-foundation-opens-its-new-home-in-tottenham",
        sourceDate: "2026-07-13",
      },
      {
        category: "社会科学",
        image: "/story-images/tms-treatment.webp",
        imageAlt: "匿名来访者接受经颅磁刺激治疗的科学编辑插图",
        imageCredit: "编辑插图 · 用于解释机制，并非真实患者或治疗现场",
        title: "TMS 正从抑郁治疗走向更多精神健康问题",
        summary: "APA 追踪经颅磁刺激的新方向：成熟适应证正在扩大，研究者也在探索 PTSD 与进食障碍，但“有希望”不等于已经成为标准治疗。",
        happened:
          "American Psychological Association 的 7–8 月专题梳理了经颅磁刺激（Transcranial Magnetic Stimulation, TMS）的最新进展。TMS 通过置于头皮外的线圈产生磁脉冲，非侵入性地调节特定脑区活动。目前它已用于成人及青少年抑郁、强迫症、戒烟和偏头痛等领域；研究者还在测试它对 PTSD、进食障碍及部分神经系统疾病的价值。",
        importance:
          "TMS 展示了心理治疗、药物和神经调控之间的边界正在重新组合。但新技术最容易被“精准刺激大脑”的语言神化。疗效不仅取决于设备，还取决于靶点选择、刺激参数、患者差异、是否与心理治疗结合，以及保险能否覆盖。研究阶段的适应证不能被提前包装成确定疗法。",
        creatorAngle:
          "可做一期“磁场如何成为精神科治疗工具”的机制型视频：先用线圈—磁场—皮层电流的三步动画解释 TMS，再把“已获批”“临床使用”“研究中”分成三栏，避免把实验结果写成医疗承诺。",
        facts: [
          "形式：非侵入性，通常无需手术或麻醉",
          "已进入临床的方向包括抑郁、强迫症、戒烟和偏头痛",
          "仍在探索：PTSD、进食障碍及更多神经系统疾病",
        ],
        sourceName: "APA Monitor on Psychology",
        sourceUrl: "https://www.apa.org/monitor/2026/07-08/brain-stimulation-mental-illness-treatment",
        sourceDate: "2026-07-01",
      },
      {
        category: "女性主义 × 社会科学",
        image: "/story-images/menopunk.jpg",
        imageAlt: "Menopunkapalooza 舞台上的朋克音乐人",
        imageCredit: "摄影：Holly Andres · 来源：The Guardian",
        title: "更年期走进朋克节：照护也可以很吵",
        summary: "Menopunkapalooza 把 Gen X 朋克、医疗专业人士和 750 名参与者放进同一场节日，让更年期从私密羞耻变成公共议题。",
        happened:
          "6 月底，Portland 的 Crystal Ballroom 举办了为期两天的 Menopunkapalooza。约 750 名参与者、十余位 Pacific Northwest 朋克音乐人和医疗专业人士共同讨论围绝经期、更年期、性健康与激素替代治疗。现场不仅有演出和资源市集，还宣读了十点“激素正义权利法案”。",
        importance:
          "Riot grrrl 曾把性别暴力和舞台排斥带进朋克现场；三十年后，同一代人开始谈衰老、疼痛、脑雾与被误诊。这里真正新颖的不是“朋克也会老”，而是健康知识传播换了场所：诊室里的单向说明，被音乐、幽默、同伴证词和集体组织改写。它也提醒我们，女性健康的知识缺口并非个人不会搜索，而是医学教育与研究长期没有把她们当作标准主体。",
        creatorAngle:
          "可做“Riot grrrl 的第二人生”：从 1990 年代的“girls to the front”讲到 2026 年的“hormones are healthcare”，呈现女性主义运动如何随一代人的身体变化而改变议题，而不是把中年写成青春政治的退场。",
        facts: [
          "约 750 名参与者，活动持续两天",
          "美国每年有超过 100 万女性开始进入更年期",
          "相关报道引用研究称：美国 HRT 使用率从 2002 年接近 30% 降至 2020 年不足 5%",
        ],
        sourceName: "The Guardian",
        sourceUrl: "https://www.theguardian.com/music/2026/jul/07/menopunkapalooza-menopause-festival",
        sourceDate: "2026-07-07",
      },
      {
        category: "女性主义 × 艺术人文",
        image: "/story-images/unhidden-heroines.webp",
        imageAlt: "手机增强现实让五位女性形象出现在国家广场上空的编辑插图",
        imageCredit: "编辑插图 · 用于阐释增强现实与公共记忆，并非项目现场画面",
        title: "五位女性在国家广场上“重新出现”",
        summary: "Smithsonian 用地理定位与定制插画制作 Unhidden Heroines，让女性历史从馆内展柜进入 National Mall 的现实空间。",
        happened:
          "Smithsonian American Women’s History Museum 于 6 月 18 日推出增强现实项目 Unhidden Heroines，持续至 12 月 31 日。访客在 National Mall 的特定地点触发内容，通过地理定位与定制插画，接触五位塑造美国历史却未被充分看见的女性。",
        importance:
          "增强现实并不会自动让历史更平等，但它能改变“纪念碑必须是什么”的想象：不必等待昂贵、永久且高度政治化的石材雕像，也能把缺席者放回国家叙事中心。同时，数字纪念也有脆弱性——软件、设备与项目期限结束后，人物是否会再次消失？因此技术体验必须与开放档案、教育资源和长期保存结合。",
        creatorAngle:
          "可从“没有纪念碑的人，能否先拥有一个数字幽灵”切入，比较实体雕像、AR 纪念和社交媒体历史项目。重点不只是技术酷不酷，而是谁选出这五个人、内容能保存多久、离开 Washington 后公众还能否访问。",
        facts: [
          "展期：2026 年 6 月 18 日至 12 月 31 日",
          "形式：地理定位 + 定制插画 + National Mall 现场体验",
          "规模：围绕五位影响美国历史的女性展开",
        ],
        sourceName: "Smithsonian American Women’s History Museum",
        sourceUrl: "https://womenshistory.si.edu/unhidden-heroines",
        sourceDate: "2026-06-18",
      },
    ],
  },
];
