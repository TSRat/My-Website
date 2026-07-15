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
    date: "2026-07-15",
    displayDate: "2026.07.15",
    issueNo: "02",
    theme: "谁在移动历史、管理注意力，又为照护系统留下资源？",
    intro:
      "今天的五个故事从一件跨海而来的中世纪刺绣开始，经过一场把观众权力重新放上舞台的行为艺术、一种在星际云中出现的四碳糖、一次限制青少年社交媒体的现实试验，抵达正在被援助削减掏空的女性组织。它们共同提醒我们：文化遗产、科学发现、注意力与照护从来不是孤立对象，而是由运输、仪器、规则、资金和人的选择共同维系的基础设施。",
    uniqueCount: 5,
    topics: ["艺术人文", "社会科学（包括天文学）", "女性主义"],
    stories: [
      {
        category: "艺术人文 × 历史",
        image: "/story-images/bayeux-tapestry-return.jpg",
        imageAlt: "中世纪刺绣卷从博物馆运输箱中展开，并以虚线跨越英吉利海峡的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释主题，并非实物复制或新闻现场影像",
        title: "贝叶挂毯跨海回到英格兰：一件“胜利者叙事”如何被搬运",
        summary: "近千年未回英格兰的贝叶挂毯已经抵达大英博物馆；它的运输工程，也把文物外交、保存技术与谁有权解释 1066 年重新摆到公众面前。",
        happened:
          "7 月 10 日凌晨，70 米长的贝叶挂毯在气候控制箱与减震支架保护下，从法国经英吉利海峡隧道抵达大英博物馆。它将在 2026 年 9 月至 2027 年 7 月展出，这是这件约作于 1072—1077 年的刺绣近千年来首次回到英格兰。作品以羊毛线绣在亚麻布上，讲述黑斯廷斯战役及诺曼征服前后的事件；大英博物馆认为它很可能由诺曼赞助人委托、英格兰刺绣者制作。",
        importance:
          "这不只是“名作回家”。挂毯本身是一套高度有效的政治传播：它把征服、誓言、战争和王权连成可移动的图像叙事；而今天的跨国借展，又把保存风险、外交关系和公共解释权绑在一起。运输箱、湿度控制和保险不是幕后琐事，而是决定公众能否看见历史的基础设施。更重要的是，称它为“挂毯”已成为习惯，但技术上它是刺绣——连名称都在塑造观看方式。",
        creatorAngle:
          "可做一期“1066 年的长卷新闻”：把贝叶挂毯当作一条 70 米的视觉报道，逐段拆解它如何选择英雄、敌人和因果，再以本次 11 小时秘密运输为第二条时间线，呈现古代宣传与现代文物治理如何在同一件物品上相遇。",
        facts: [
          "全长约 70 米（约 230 英尺），以羊毛线绣在亚麻布上",
          "作品约作于 1072—1077 年，叙事核心是 1066 年诺曼征服",
          "2026 年 7 月 10 日完成约 11 小时跨海运输，并在气候控制箱与减震支架中保存",
          "展期为 2026 年 9 月至 2027 年 7 月；开票首日约售出 10 万张票",
        ],
        sourceName: "British Museum（抵达细节补充：The Guardian）",
        sourceUrl: "https://www.britishmuseum.org/exhibitions/bayeux-tapestry",
        sourceDate: "2026-07-10（到馆日期）",
      },
      {
        category: "艺术人文 × 女性主义",
        image: "/story-images/yoko-ono-cut-piece.jpg",
        imageAlt: "匿名表演者静坐舞台，观众手持剪刀靠近酒红色层叠布料的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释权力与同意，并非演出现场或真实人物影像",
        title: "《Cut Piece》再度上演：观众参与何时变成对身体的支配？",
        summary: "The Broad 与 REDCAT 将在 7 月 18—19 日重演小野洋子的两件行为作品；当剪刀重新交到观众手中，1964 年的问题也被带进当代的同意政治。",
        happened:
          "配合 The Broad 的《Yoko Ono: Music of the Mind》回顾展，艺术家 MPA 将于 7 月 18 日和 19 日在洛杉矶 REDCAT 两次演出《Cut Piece》。她会静坐台上，邀请观众剪走衣服碎片；两场分别穿着 Victor Barragán 与 Aliona Kononova 定制的服装。同场的《Sky Piece to Jesus Christ》由洛杉矶室内乐团六人组合演出：乐手被纱布逐渐缠绕，直到无法继续演奏。",
        importance:
          "《Cut Piece》最早于 1964 年在京都演出，它把“观看”从安全距离变成必须承担后果的行动。今天重演它，意义不在复刻一个经典画面，而在观察观众是否会因 60 多年的女性主义、行为艺术史与同意话语而改变行为。MPA 让两位受战争与国家暴力经验影响的设计师制作“最好的衣服”，也把被剪毁的价值、身份和地缘政治带回作品。",
        creatorAngle:
          "可以用“同一份指令，六十年后还会得到同一种观众吗？”为结构，对照 1964 年小野洋子与 2026 年 MPA 的现场条件。重点记录规则、服装、观众迟疑和机构安全边界，而不是再次消费被剪开的身体。",
        facts: [
          "两场演出时间：2026 年 7 月 18 日 18:00、7 月 19 日 14:00",
          "《Cut Piece》首演于 1964 年京都山一会馆",
          "两场服装分别由 Victor Barragán 与 Aliona Kononova 定制",
          "《Music of the Mind》展期为 5 月 23 日至 10 月 11 日，是小野洋子在南加州首场个人博物馆展",
        ],
        sourceName: "The Broad",
        sourceUrl: "https://www.thebroad.org/yoko-onos-sky-piece-jesus-christ-cut-piece-sold-out",
        sourceDate: "2026-07-18（首场活动日期）",
      },
      {
        category: "社会科学（包括天文学） × 天文学",
        image: "/story-images/interstellar-erythrulose.jpg",
        imageAlt: "两座射电望远镜朝向银河中心分子云，四个发光节点组成分子结构的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于解释星际分子探测，并非望远镜实拍影像",
        title: "星际空间第一次发现糖：生命原料的故事从尘埃颗粒开始",
        summary: "研究团队在银河中心分子云中报告四碳酮糖赤藓酮糖；这不是发现生命，而是把糖的化学前史向恒星形成之前又推进了一步。",
        happened:
          "由 Izaskun Jiménez-Serra 等 57 名作者组成的团队，利用西班牙 Yebes 40 米和 IRAM 30 米射电望远镜的超灵敏宽带光谱巡天，在银河中心分子云 G+0.693-0.027 中识别出赤藓酮糖（erythrulose）。论文将其称为星际介质中首次观测到的糖；它是一种手性的四碳酮糖，信号丰度至少是尚未被探测到的同类三碳糖的 8 倍。论文已投稿 Nature Astronomy，目前应按预印本结论理解。",
        importance:
          "糖不仅提供能量，也是核酸骨架和多种生物结构的组成部分。陨石与小行星样本里已经发现核糖、葡萄糖等单糖，但此前没有糖在星际介质中被直接识别。模型显示，赤藓酮糖可由更简单的二碳醛和醇在星际尘埃表面形成；这意味着部分前生物化学可能在行星诞生前就已启动。不过，光谱识别与化学模型不能被写成“外星生命证据”。",
        creatorAngle:
          "可做一条“从无线电谱线到生命原料”的推理链：先展示望远镜如何识别分子的指纹，再区分“检测到糖”“证明糖能进入行星”“证明生命存在”这三个完全不同的命题，顺带解释为何公共传播常把前生物化学夸大成生命发现。",
        facts: [
          "目标天体：银河中心分子云 G+0.693-0.027",
          "仪器：Yebes 40 米与 IRAM 30 米射电望远镜",
          "分子：手性四碳酮糖赤藓酮糖，是首次在星际介质中报告的糖",
          "相对丰度：至少为同类三碳糖的 8 倍；后者仍未在该巡天中检出",
        ],
        sourceName: "arXiv · Jiménez-Serra et al.",
        sourceUrl: "https://arxiv.org/abs/2606.03313",
        sourceDate: "2026-06-02",
      },
      {
        category: "社会科学 × 心理学与传播学",
        image: "/story-images/teen-social-media-trial.jpg",
        imageAlt: "夜间书桌、分为三个控制方案的手机、家庭餐桌与断开同伴连线的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于解释试验权衡，并非参与者或研究现场影像",
        title: "限制青少年社交媒体一个月：睡眠变好，但朋友也可能变远",
        summary: "英国 309 个家庭参与政府支持的现实试验；三种限制都带来主观改善，但最强限制也造成最大的社交中断。",
        happened:
          "一项英国政府支持的研究把 309 个有 13—17 岁青少年的家庭分入三种为期一个月的干预：每个社交应用每日限用 15 分钟、晚 9 点至早 7 点宵禁、或从设备中完全移除社交应用。三组参与者都报告睡眠、情绪、专注、学习时间和家庭互动改善；完全移除对专注的报告增益最大，夜间宵禁最易坚持且睡眠收益最稳定。",
        importance:
          "结果比“禁或不禁”更复杂：完全移除同时带来最明显的社交断裂，尤其当 Snapchat 等平台已成为同伴联系基础设施时；15 分钟上限合规率最低，也常在对话中途切断交流。更要紧的是，这是一项短期家庭试验，改善来自参与者报告，不能直接等同于长期因果或全国政策效果。政策设计必须同时衡量睡眠、注意力、孤立风险、绕过方式与年龄自主权。",
        creatorAngle:
          "可把三种方案画成一张“干预—收益—代价”矩阵：不是只问屏幕时间降了多少，而是分别追踪睡眠、专注、家庭互动、同伴联系和可执行性。结尾再讨论：当社交平台已成为公共广场，单个家庭退出的成本为何会高于集体规则。",
        facts: [
          "样本：309 个家庭，参与者年龄 13—17 岁",
          "周期：1 个月；三种方案为每应用每日 15 分钟、21:00—07:00 宵禁、完全移除",
          "完全移除带来最强的专注改善报告，也带来最大的社交中断",
          "夜间宵禁最容易维持，并产生最一致的睡眠改善报告",
        ],
        sourceName: "Reuters",
        sourceUrl: "https://www.reuters.com/legal/litigation/uk-teens-report-sleep-wellbeing-gains-under-social-media-restrictions-study-2026-07-14/",
        sourceDate: "2026-07-14",
      },
      {
        category: "女性主义 × 社会科学",
        image: "/story-images/women-aid-cuts.jpg",
        imageAlt: "女性援助工作者共同支撑脆弱帐篷，资金网络被剪断且服务队伍延长的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释照护基础设施，并非危机地区或真实人物影像",
        title: "至少一百万女性失去援助：被削减的不是预算表，而是最后一层照护",
        summary: "UN Women 调查 52 个危机国家的 855 个女性组织后警告：需求上升时，近九成机构已无法满足需要，四成可能在一年内关闭。",
        happened:
          "UN Women 7 月 10 日公布的调查显示，自 2025 年 1 月以来，全球援助资金大幅收缩，至少 100 万名女性和女孩失去人道及其他关键支持。调查覆盖 52 个危机和冲突国家的 855 个女性主导或女性权利组织：84% 看到需求增加，近 90% 已无法满足现有需要，60% 服务人数比 2025 年 1 月前更少，40% 预计一年内暂时或永久关闭。",
        importance:
          "女性组织常能进入国际机构到不了、也不会长期停留的社区；它们提供性暴力幸存者支持、医疗转介、安全空间和法律协助。因此削减资金并非按比例缩小服务，而可能让整个地方转介网络断裂。调查还显示 65% 的机构依靠无薪员工维持，超过四分之三已裁撤岗位，半数建立等候名单或直接拒绝求助者——照护被转移成女性工作者的无偿劳动。",
        creatorAngle:
          "可从“援助削减如何变成无偿照护”切入，画出一美元从捐助国预算到地方热线、避难所、翻译与个案管理的路径，再标出每个断点会让谁接手。这样能把宏观财政决定与一线女性组织的时间、身体和风险连接起来。",
        facts: [
          "调查样本：52 个危机或冲突国家的 855 个女性组织",
          "至少 100 万名女性和女孩自 2025 年 1 月以来失去关键支持",
          "84% 报告需求增加；近 90% 已无法满足现有需求",
          "40% 可能一年内关闭；65% 依靠无薪员工维持；半数已设等候名单或拒绝求助者",
        ],
        sourceName: "UN Women 报告（Reuters 核验）",
        sourceUrl: "https://www.reuters.com/world/americas/one-million-women-lose-aid-access-due-funding-cuts-un-women-says-2026-07-10/",
        sourceDate: "2026-07-10",
      },
    ],
  },
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
        image: "/story-images/ana-mendieta.jpg",
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
        image: "/story-images/sarabande-studios.jpg",
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
        image: "/story-images/tms-treatment.jpg",
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
        image: "/story-images/unhidden-heroines.jpg",
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
