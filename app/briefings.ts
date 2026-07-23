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
    date: "2026-07-23",
    displayDate: "2026.07.23",
    issueNo: "10",
    theme: "谁在定义探索，谁在建造证据？",
    intro:
      "今天的五个故事都把宏大的知识叙事拆回它的建造过程：Tejano 历史扩写美国起源，国家地理新馆把探索转化为沉浸式体验，银河系的姿态由一次古老并合重新解释，患者来源的迷你脑揭示药物反应差异，而女性健康组织试图把长期缺口变成一套可拨款、可监管、可追踪的公共基础设施。",
    uniqueCount: 5,
    topics: ["艺术人文", "社会科学", "女性主义"],
    stories: [
      {
        category: "艺术人文 × 历史 × 音乐与文化身份",
        image: "/story-images/tejano-legacy.jpg",
        imageAlt: "马鞍、织物、乐谱、拱门与地图纸片跨越四百年叠合的 Tejano 历史编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释 Tejano 历史、物质文化与音乐传统，并非展品复制、历史地图或官方海报",
        title: "在美国建国之前，Tejano 的美国故事已经开始",
        summary:
          "Briscoe Western Art Museum 用一场双语展览追溯近四百年 Tejano 历史，把牧场、信仰、军旅、音乐与当代艺术放回“美国起源”的中心，而不是边缘附录。",
        happened:
          "《Tejano Legacy: Another American Origin Story》于 7 月 23 日举行开幕活动、7 月 24 日向公众开放。展览从十六世纪延伸到今天，汇集美国与墨西哥的馆藏、私人收藏和当代委托作品；若干被墨西哥认定为文化与历史遗产的借展品首次在美国展出。",
        importance:
          "“美国西部”常被讲成英裔移民向空白土地推进的故事。马术、牧场、宗教、语言和音乐的物证显示，Tejano 社群并非后来加入，而是早已参与建造这些制度与文化。双语展签也不是翻译上的附加服务，而是在决定谁能以自己的语言成为历史主体。",
        creatorAngle:
          "选取马鞍、圣像、军刀、唱片和当代作品各一件，不按年代而按它们跨越边界的路线排列：谁制作、谁使用、何时被国家或博物馆重新命名，以及它怎样从生活工具变成“美国遗产”。",
        facts: [
          "展览覆盖近 400 年历史，从 16 世纪延伸至当代，并以英语和西班牙语双语呈现",
          "展览包含 100 余件艺术品、器物与沉浸式叙事，是 Briscoe 创馆以来规模最宏大的展览",
          "借展机构包括墨西哥国家人类学与历史研究所、国立历史博物馆、美国国会图书馆和 San Antonio Museum of Art 等",
          "展览主题明确包括艺术、牧场传统、军旅、音乐、信仰与社群；部分墨西哥借展品为首次在美国展出",
        ],
        sourceName: "Briscoe Western Art Museum",
        sourceUrl: "https://briscoemuseum.org/tejanolegacy/",
        sourceDate: "展览信息发布 2026-07-08；开幕活动 2026-07-23",
      },
      {
        category: "艺术人文 × 博物馆 × 媒介与制度",
        image: "/story-images/museum-of-exploration.jpg",
        imageAlt: "沉浸式展厅、投影地球、展柜与票务门槛被拼贴成一台探索机器的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于讨论沉浸式博物馆、赞助与探索叙事，并非 National Geographic 场馆照片、品牌图像或展陈复制",
        title: "当“探索”变成十万平方英尺的沉浸式产品",
        summary:
          "华盛顿新开的 National Geographic Museum of Exploration 用投影、互动媒体和探险档案把“探索者”塑造成公众身份；与此同时，票价、赞助和机构自述也在决定谁能进入、谁被看见。",
        happened:
          "新馆于 6 月 26 日开放，本周进入首轮集中评论。它在 National Geographic Society 总部提供 100,000 平方英尺互动空间，以 Photo Ark、探险装备、环境影像和沉浸式装置组织参观；馆方把门票收入直接描述为对全球 Explorer 项目的支持。",
        importance:
          "沉浸技术能把遥远环境变得可感，却也容易把殖民测绘、媒体所有权和赞助关系藏在“身临其境”的效果之后。真正值得观察的不是互动是否炫目，而是展览如何区分发现、记录、占有与保护，以及谁有资格被称为探索者。",
        creatorAngle:
          "把一次参观拆成四条并行路线：观众看到的壮观影像、物件原来的采集路线、项目的资金来源，以及被拍摄社群的署名与反馈入口。比较每一层在沉浸界面里占了多少空间。",
        facts: [
          "National Geographic Museum of Exploration 于 2026 年 6 月 26 日在华盛顿特区开放",
          "新馆提供 100,000 平方英尺的互动空间与媒体体验",
          "主要内容包括 Photo Ark、Explorer 装备、Geoverse 与海洋主题沉浸式体验",
          "馆方为 SNAP 与 WIC 家庭提供每张 3 美元的 Museums for All 门票，并说明一般门票收入用于支持 Explorer 项目",
        ],
        sourceName: "National Geographic Society；Financial Times",
        sourceUrl: "https://moe.nationalgeographic.org/en",
        sourceDate: "开馆新闻稿 2026-03-26；评论 2026-07-23",
      },
      {
        category: "社会科学 × 天文学 × 模型与观测基础设施",
        image: "/story-images/milky-way-disc-flip.jpg",
        imageAlt: "倾斜的银河盘与香肠状恒星流、轨道线和模拟网格相交的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释银河并合与盘面翻转模型，并非 Gaia 观测图、真实天文照片或论文模拟截图",
        title: "银河系的“上方”可能是一次撞击留下的",
        summary:
          "Durham University 团队用 Gaia 观测约束超级计算机模拟，提出约一百亿年前的 Gaia Sausage 正面并合曾让银河盘翻转超过九十度，并解释恒星晕为何转得异常缓慢。",
        happened:
          "研究者原本在追查银河盘恒星约每秒 220 公里、恒星晕仅约每秒 25 公里的旋转差异。模拟显示，质量接近 Gaia Sausage 的矮星系若正面撞入早期银河系，会在数亿年内重定向整个盘面，并留下缓慢旋转、偏心轨道明显的恒星晕。",
        importance:
          "天文学没有在银河系外架设摄像机回看历史，而是把恒星运动、化学组成和数值模拟拼成可检验的过去。这个结论因此不是一张“碰撞照片”，而是观测任务、超级计算机和模型选择共同生产的解释；新数据仍可能改变翻转幅度与时间线。",
        creatorAngle:
          "制作一张“证据到叙事”的分层动画：先只显示 Gaia 测得的速度与轨道，再加入并合模拟，最后才出现翻转的银河盘；让观众清楚看到哪些是测量、哪些是模型推断。",
        facts: [
          "相关并合约发生在 100 亿年前，研究团队提出银河盘可能翻转超过 90 度",
          "银河盘恒星绕中心运行约为每秒 220 公里，恒星晕平均旋转约为每秒 25 公里",
          "模拟显示盘面重定向并非瞬间发生，而至少持续数亿年",
          "Gaia Sausage 的恒星、气体与暗物质总量曾超过太阳质量的 100 亿倍；研究结果在 2026 年英国皇家天文学会全国会议上报告",
        ],
        sourceName: "Durham University／Royal Astronomical Society；The Guardian",
        sourceUrl: "https://www.theguardian.com/science/2026/jul/21/milky-way-disc-flip-collision-dwarf-galaxy-astronomers",
        sourceDate: "2026-07-21",
      },
      {
        category: "社会科学 × 心理与健康 × 科研方法",
        image: "/story-images/alzheimers-organoids.jpg",
        imageAlt: "培养皿里的微型神经组织、分叉神经元与不同药物反应路径的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于解释患者来源脑类器官与药物反应差异，并非显微照片、患者组织或临床结果",
        title: "同一种药，在不同“迷你脑”里走向不同结局",
        summary:
          "Johns Hopkins 团队用患者血细胞培养数百个后脑类器官，发现阿尔茨海默病相关组织对常用抗抑郁药的分子反应并不一致；这是个体化研究工具的早期证据，不是已经可用的治疗预测。",
        happened:
          "研究者把阿尔茨海默病患者与健康参与者的血细胞重编程为诱导多能干细胞，再培养为豌豆大小、能产生血清素神经元的后脑类器官。团队比较 escitalopram 治疗前后的蛋白质和细胞外囊泡，观察到疾病相关蛋白与药物反应的异质性。",
        importance:
          "精神和行为症状几乎影响所有阿尔茨海默病患者，但药物反应差异很大。类器官让研究者在不直接试错于患者的情况下比较亚群，却仍缺少真实脑中的免疫、血管和长期环境。最危险的误读，是把一个实验室模型提前包装成“替你选药”的临床服务。",
        creatorAngle:
          "画出从血样、重编程、类器官、药物处理到囊泡分析的完整链条，并在每一步标出模型失去的现实条件。用多条不同颜色的反应路径替代单一“有效／无效”结论。",
        facts: [
          "研究使用患者来源细胞培养数百个豌豆大小的后脑类器官，作者称其可能是阿尔茨海默病领域规模最大的类器官研究之一",
          "类器官含有产生血清素的神经元，研究药物为常用 SSRI escitalopram oxalate",
          "阿尔茨海默病类器官中的 RAB3A、NSF 与 ATCAY 等神经信号相关蛋白水平较低",
          "研究发表于《Alzheimer's & Dementia》，DOI 为 10.1002/alz.71273；团队明确称液体活检与临床预测仍属未来目标",
        ],
        sourceName: "Johns Hopkins Medicine；Alzheimer's & Dementia",
        sourceUrl: "https://www.sciencedaily.com/releases/2026/07/260721000844.htm",
        sourceDate: "2026-07-22",
      },
      {
        category: "女性主义 × 健康 × 研究与照护制度",
        image: "/story-images/womens-health-infrastructure.jpg",
        imageAlt: "研究、监管、数据、人才与公众知识五个支柱由照护路径连接的女性健康制度编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释女性健康研究与照护基础设施，并非患者、医护人员、政府文件或组织标志",
        title: "女性健康缺口需要的不只是更多试验，而是一整套基础设施",
        summary:
          "三家美国女性健康组织联合三十余个伙伴，要求国会十年投入 200 亿美元，把研究、监管、数据、人才与公众教育连接成一项国家策略。",
        happened:
          "ACOG、Society for Women's Health Research 与 Women First Research Coalition 发布《National Strategy to Close the Women's Health Gap》。框架提出五项投资重点：研究创新、跨机构监管协调、数据与证据基础设施、临床和研究人才，以及公众健康素养。",
        importance:
          "1993 年法律要求 NIH 资助的临床研究纳入女性，解决了“谁被招募”的一部分，却没有自动修复研究主题、数据共享、成果转化与实际照护。新框架的价值在于把缺口写成制度链条；局限则是它目前仍是一份倡议，200 亿美元尚未成为拨款，也缺少逐项绩效指标。",
        creatorAngle:
          "把“女性健康”画成五节点公共工程：每个节点列出负责机构、资金流、可检验产出与失败方式。另设一栏区分倡议金额、已授权资金和已实际支出，避免把政策主张当成预算事实。",
        facts: [
          "框架呼吁国会在 10 年内投资 200 亿美元",
          "策略由 ACOG、SWHR 与 Women First Research Coalition 发起，并获 30 余家专业、患者和研究组织支持",
          "五个重点是研究创新、监管现代化、数据基础设施、临床与研究人才、公众教育",
          "1993 年 NIH Revitalization Act 已要求 NIH 资助的临床研究纳入女性；新策略认为仍需补足研究到照护的实施链条",
        ],
        sourceName: "Society for Women's Health Research；Endocrine Society",
        sourceUrl: "https://www.endocrine.org/news-and-advocacy/news-room/2026/leading-womens-health-organizations-launch-national-strategy-to-close-the-womens-health-gap",
        sourceDate: "2026-07-15；伙伴更新 2026-07-21",
      },
    ],
  },
  {
    date: "2026-07-22",
    displayDate: "2026.07.22",
    issueNo: "09",
    theme: "不是把事实装进框，而是看清框怎样工作",
    intro:
      "今天的五个故事都把注意力从结论移向生成结论的框架：一本哲学新书把上帝视为诗性想象的产物，一场州庆展览用二十八位艺术家争论地方身份，一项儿童研究把日常不可预测性加入创伤筛查，水库模型把遗址风险纳入未来调度，而一部在写的文学研究追问小说如何把男性越界写成天性。框架能让问题被看见，也会决定哪些证据进入、哪些经验被留在外面。",
    uniqueCount: 5,
    topics: ["艺术人文", "社会科学", "女性主义"],
    stories: [
      {
        category: "艺术人文 × 哲学 × 宗教与文学",
        image: "/story-images/radical-god-theopoetics.jpg",
        imageAlt: "一本打开的书释放出纸片、星群与不确定光环，象征神的概念由诗性想象生成的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释神学、现象学与诗性想象的关系，并非宗教圣像、书封或作者肖像",
        title: "如果‘神’不是诗歌描述的对象，而是诗歌创造的结果？",
        summary:
          "John D. Caputo 七月新书《A Radical God》把 theopoetics 推到更激进的位置：诗性语言不是替一个既有的神换上修辞外衣，而是在想象中构成‘神’这个观念。",
        happened:
          "Columbia University Press 于 2026 年 7 月出版《A Radical God: Theopoetics, Phenomenology, and the Future of Religion》。Caputo 先暂停有神论与无神论的裁决，再用现象学讨论宗教语言如何在诗、祈祷和实践中生成意义；全书从 theopoetics 进入 theopraxis，最后追问一种不依附教义正统的宗教未来。",
        importance:
          "公共讨论常把宗教压缩成‘相信某个超自然存在’或‘拒绝这种相信’。Caputo 的框架把问题改写为：共同体用哪些隐喻、叙事与实践组织苦难、希望和责任。它不证明神存在，也没有自动解决宗教制度的权力问题，却为研究宗教、文学与政治想象如何相互塑造提供了第三条路径。",
        creatorAngle:
          "选择同一句祈祷或神学命题，制作三栏文本：把神当作既有对象的陈述、暂停真假判断后的现象描述、以及把神视为诗性生成的版本。比较每一栏允许人们做什么，而不仅是它声称什么。",
        facts: [
          "该书由 Columbia University Press 于 2026 年 7 月出版，共 336 页",
          "全书分 4 部、13 章，路径从 theopoetics、onto-theology 延伸至 theopraxis 与宗教未来",
          "平装定价 35 美元，精装定价 140 美元，并同时提供 PDF 与 EPUB 电子版",
          "作者 John D. Caputo 是 Syracuse University 宗教与人文学荣休教授、Villanova University 哲学荣休教授",
        ],
        sourceName: "Columbia University Press",
        sourceUrl: "https://cup.columbia.edu/book/a-radical-god/9780231566063/",
        sourceDate: "2026-07（页面核验 2026-07-22）",
      },
      {
        category: "艺术人文 × 艺术 × 地理与地方身份",
        image: "/story-images/colorado-currents.jpg",
        imageAlt: "科罗拉多地形线、家庭档案、河流与工作室纸片交叠成一幅开放地图的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释地方身份、环境与当代艺术的关系，并非参展作品、展览现场或官方海报",
        title: "州庆展览不只是在庆祝：28 位艺术家把‘科罗拉多’拆成彼此冲突的地图",
        summary:
          "MCA Denver 将在科罗拉多建州 150 周年之际推出《Colorado Currents》。展览没有把地方身份当成现成风景，而是让 28 位相关艺术家从历史、家庭遗产和水资源压力重新定义它。",
        happened:
          "《Colorado Currents》将于 7 月 24 日开幕、展至 11 月 1 日。首席策展人 Miranda Lash 历时近两年走访工作室，尤其寻找此前没有在 MCA Denver 展出的创作者；展览以科罗拉多历史、地方与家庭遗产、自然三条线组织近期作品，并把干旱、山火与用水放进州身份叙事。",
        importance:
          "周年展很容易把复杂地域压缩成山景、开拓神话和统一的庆典口号。这一策展方法至少承认‘地方’由迁徙、原住民历史、家庭记忆、城市发展与资源分配共同形成。28 位艺术家仍不可能代表全州，但展览把代表性的缺口变成可以公开争论的问题。",
        creatorAngle:
          "制作一张没有行政边界的州地图：用作品主题标出水、火、家庭迁徙、产业与被省略的历史，再在图外列出没有进入展览的地区和社群。让‘28’既是规模，也是一条清晰的代表性边界。",
        facts: [
          "展览汇集 28 位与科罗拉多有关的艺术家，展期为 2026 年 7 月 24 日至 11 月 1 日",
          "项目为科罗拉多建州 150 周年而策划，前期工作持续近 2 年",
          "展览按科罗拉多历史、地方与家庭遗产、自然 3 条主题线组织",
          "自然主题明确涉及水资源使用、干旱与山火，策展人也优先寻找此前未在 MCA Denver 展出的艺术家",
        ],
        sourceName: "Museum of Contemporary Art Denver；Axios Denver",
        sourceUrl: "https://mcadenver.org/exhibitions/colorado-currents",
        sourceDate: "展览信息核验 2026-07-22；报道 2026-07-15",
      },
      {
        category: "社会科学 × 心理学 × 儿童与家庭",
        image: "/story-images/childhood-unpredictability.jpg",
        imageAlt: "日程方格在一张家庭餐桌周围忽然错位，而灯、餐盘和时钟保持稳定的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释日常可预测性与儿童心理健康筛查，并非儿童、家庭或临床研究对象照片",
        title: "没有发生重大创伤，也可能不知道明天会怎样",
        summary:
          "一项近三万名儿童的真实世界研究发现，在传统 ACE 创伤筛查之外加入 5 个‘日常不可预测性’问题，能更准确识别多类心理与行为风险；结果是关联证据，不是对父母的因果判决。",
        happened:
          "Chapman University、UC Irvine 与 Rady Children's Health 团队分析儿科初级照护数据，将照护者更换、作息变动和难以预期的日常安排，与传统 Adverse Childhood Experiences 筛查并列。两种量表捕捉到不同经验，合用时对抑郁、焦虑、睡眠、行为与躯体症状的识别优于只用 ACE。",
        importance:
          "创伤模型擅长询问‘发生了什么坏事’，却可能漏掉长期的不确定感。新量表为儿科筛查增加了一个维度，但也有风险：贫困、轮班工作、住房不稳和照护资源不足可能被错误地归咎于单个家庭。筛查只有连接到物质支持与可获得的服务，才不会变成新的标签。",
        creatorAngle:
          "把同一个孩子的一周画成两层时间表：上层记录重大事件，下层记录谁来照护、何时吃饭、在哪里睡觉等可预测性。再叠加住房、工时和交通条件，避免把结构性不稳定改写成父母性格。",
        facts: [
          "研究分析近 30,000 名在 Rady Children's Hospital Orange County 接受照护的儿童数据",
          "不可预测性使用 5 个问题测量，并与传统 ACE 筛查并列而非取代后者",
          "研究考察抑郁、焦虑、睡眠障碍、行为问题和躯体症状 5 类结果",
          "项目得到 California Initiative to Advance Precision Medicine 290 万美元资助；研究者强调这是风险识别工具，不能仅凭关联断定家庭日程导致疾病",
        ],
        sourceName: "Chapman University；Nature Mental Health",
        sourceUrl: "https://news.chapman.edu/2026/07/21/chapman-researcher-identifies-overlooked-childhood-risk-factor-for-mental-health/",
        sourceDate: "2026-07-21",
      },
      {
        category: "社会科学 × 地理学 × 水资源与文化遗产",
        image: "/story-images/reservoir-heritage-risk.jpg",
        imageAlt: "水库水位线在地图上反复升降，露出化石足迹、遗址网格与五级风险色带的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于解释水位调度与文化、古生物资源保存风险，并非 USGS 原始地图或具体遗址定位",
        title: "水库每升降一次，湖岸上的历史也被重新计算一次",
        summary:
          "USGS 发布 Lake Powell 与 Lake Mead 的文化和古生物资源保存风险模型，把 2026—2060 年水位方案、岸线侵蚀与潜在遗址分布纳入同一空间分析。",
        happened:
          "这份 7 月更新的数据集服务于美国两座水库的 Post-2026 运营环境影响评估。研究者分别估计化石、足迹、洞穴等古生物资源和考古遗址、历史土地使用、器物等文化资源可能位于何处，再把地形与水位变化造成的风化和侵蚀叠加，形成 1 至 5 级风险。",
        importance:
          "大坝调度通常以供水、水电和生态指标讨论，遗址保存容易变成附录。模型让这类损失进入方案比较，却不能把未知遗址变成精确坐标，也不能替代原住民社群与现场调查。地图最有价值之处，是让未来运营承认水位变化同时是一种文化治理。",
        creatorAngle:
          "把同一段湖岸画成八种运营方案下的月度翻页动画，分别显示供水、发电、生态与遗址风险。对未实地确认的位置使用模糊纹理，避免把概率模型误呈现为藏宝图。",
        facts: [
          "模型覆盖 Lake Powell 与 Lake Mead，并投射 2026 年 12 月至 2060 年 12 月的水位波动",
          "文化与古生物资源分别建模，保存风险从 1 级到 5 级排序，5 级代表最高变化潜势",
          "研究将风险与 8 种拟议大坝运营替代方案按月度时间步进行比较",
          "数据集 DOI 为 10.5066/P13UBJSP，2026 年 7 月发布第 2 版，并以 CC0 1.0 开放",
        ],
        sourceName: "U.S. Geological Survey",
        sourceUrl: "https://www.usgs.gov/data/modeled-preservation-risk-paleontological-and-cultural-resources-within-lake-powell-and-lake",
        sourceDate: "2026-07-02（第 2 版，页面核验 2026-07-22）",
      },
      {
        category: "女性主义 × 文学 × 性别与婚姻史",
        image: "/story-images/divorcing-the-rake.jpg",
        imageAlt: "十八世纪小说书页中的婚姻契约被剪开，男性放纵与女性后果落在不对称天平上的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释家庭小说、性道德与婚姻制度，并非历史手稿、书封或研究者肖像",
        title: "小说里的‘浪子’如何把男性越界写成了天性？",
        summary:
          "Rachel Gevlin 获 AAUW 一年期研究资助，将撰写《Divorcing the Rake》，研究十八世纪末英国家庭小说怎样处理通奸、重婚和离婚，并自然化男女欲望的双重标准。",
        happened:
          "Gevlin 的在研书稿将分析 Jane Austen 等作者笔下男性婚前与婚外性行为，以及婚姻破裂情节如何获得同情性解释。项目刚获得 5 万美元 American Postdoctoral Research Leave Fellowship；它提出了明确论点，但书尚未完成，因此不能把未来文本分析当成已经证实的普遍结论。",
        importance:
          "家庭小说不仅反映性道德，也通过人物魅力、叙事视角和结局分配训练读者判断谁的越界可被原谅。研究把‘男性欲望更自然’从生物常识还原为一种被反复讲述的文化脚本，同时提醒我们：出版和资助制度决定哪些尚未成书的问题获得研究时间。",
        creatorAngle:
          "选择三种婚姻破裂情节，逐段标记叙述者替男性提供的理由、女性承担的后果和结局给予的惩罚。再把性别互换，只改代词和法律处境，观察同情机制在哪里失效。",
        facts: [
          "项目暂名《Divorcing the Rake: Male Sexual Conduct in Domestic Fiction》，聚焦十八世纪末英国家庭小说",
          "研究对象包括 Jane Austen 等英国作者笔下的通奸、重婚、离婚以及男性婚前和婚外性行为",
          "Gevlin 获得为期 1 年、金额 50,000 美元的 AAUW American Postdoctoral Research Leave Fellowship",
          "AAUW 成立于 1881 年，迄今用于扩大女性高等教育机会与公平的资助超过 1.5 亿美元",
        ],
        sourceName: "Virginia Commonwealth University；American Association of University Women",
        sourceUrl: "https://news.vcu.edu/article/rachel-gevlin-earns-aauw-fellowship-to-support-book-on-sexual-mores-in-domestic-fiction",
        sourceDate: "2026-07-21",
      },
    ],
  },
  {
    date: "2026-07-21",
    displayDate: "2026.07.21",
    issueNo: "08",
    theme: "证据在哪里结束，解释从哪里开始？",
    intro:
      "今天的五个故事都在追问证据与解释之间的接缝：博物馆为古罗马遗骨补上面孔和人生，建筑师把捐赠、藏品与旧馆编织成新翼，新闻进入平台后失去直接入口，社会学家发现一个看似普通的种族变量会改变不平等结论，而女性长期被当作‘正常’的月经过多，终于被重新视为诊断线索。好的解释不会掩盖接缝，而会清楚标明哪些是观察、哪些是推断、哪些仍待验证。",
    uniqueCount: 5,
    topics: ["艺术人文", "社会科学", "女性主义"],
    stories: [
      {
        category: "艺术人文 × 历史 × 人类学与博物馆叙事",
        image: "/story-images/aquincum-reconstructed-lives.jpg",
        imageAlt: "古罗马颅骨、分层证据卡片与逐渐成形但不具真实人物特征的面孔相互叠合的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释考古证据、面部复原与虚构传记之间的边界，并非遗骨、展品或真实人物肖像",
        title: "给古罗马遗骨一张脸之后：博物馆必须告诉我们，证据在哪里结束",
        summary:
          "布达佩斯 Aquincum Museum 用 DNA、颅骨形态和考古背景复原 16 名古罗马居民，同时为他们创造名字与人生。展览最有价值的不是‘看起来像真人’，而是暴露科学推断与叙事想象如何在同一张脸上相遇。",
        happened:
          "《Once We Were Like You》正在 Aquincum Museum 展出。研究团队依据遗骨、DNA 和墓葬背景推断年龄、来源、伤病以及眼睛、头发和肤色等特征，并制作 16 个面部复原，其中 6 个是等身硅胶模型。策展团队也为人物命名、安排职业与个人经历，并明确承认这些传记是在历史基础上进行的叙事创作。",
        importance:
          "复原技术能让普通劳动者从帝王与战争构成的罗马史中重新出现，但逼真的面孔会提高观众对整个故事的信任，包括没有直接证据的部分。与此前‘罗马器物进入展台后如何变成艺术’不同，这里关注的是科学视觉化如何把概率推断转化为看似确定的人格，以及博物馆应怎样持续标记证据等级。",
        creatorAngle:
          "为一个复原人物制作三层透明肖像：骨骼能够支持的事实、DNA 与统计模型给出的概率、策展人为建立共情而补写的传记。让每一层都能单独关闭，观众会看到‘像一个人’与‘知道这个人’之间仍有多远。",
        facts: [
          "展览包含 16 个面部复原，其中 6 个为等身硅胶模型，展至 2026 年 10 月 31 日",
          "研究者结合 DNA、考古学与人类学信息推断肤色、发色、眼色、雀斑、年龄、伤病和来源",
          "遗骨显示多数人有炎症、营养不足或长期劳动痕迹，策展人据此判断他们多属较低社会阶层",
          "人物被推定来自意大利、不列颠、叙利亚、萨尔马提亚与凯尔特等不同背景，但具体姓名、职业和生平由策展团队创造",
        ],
        sourceName: "Associated Press；Aquincum Museum",
        sourceUrl: "https://apnews.com/article/hungary-ancient-rome-museum-facial-reconstrucion-73d5ed287c5de882f9ca1e12cb345f89",
        sourceDate: "2026-07-15（页面核验 2026-07-21）",
      },
      {
        category: "艺术人文 × 建筑 × 博物馆制度",
        image: "/story-images/clark-tavitian-wing.jpg",
        imageAlt: "象牙色与酒红色纸张构成的新博物馆翼楼穿过两座不同时代的旧建筑并连向山林的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释 Clark 新翼在旧馆、藏品与景观之间的连接，并非建筑效果图或建成照片",
        title: "一座新翼如何假装自己一直在那里？Clark 把捐赠、旧馆与山林缝成一条参观路线",
        summary:
          "Selldorf Architects 公布 Clark Art Institute 的 Aso O. Tavitian Wing：12 间展厅把三百余件欧洲艺术收藏安置在两座不同时代的建筑之间。所谓‘无缝’，其实是材料、资金、动线与机构记忆的精密协商。",
        happened:
          "Clark Art Institute 宣布建设专门陈列 Aso O. Tavitian Collection 的新翼，建筑由 Selldorf Architects 设计，景观由 Reed Hilderbrand 负责，计划 2028 年开放。新建筑连接 1955 年的主馆与 1973 年的 Manton Research Center，以石材、白橡木、青铜窗框和连续景观组织 12 间尺度不同的展厅。",
        importance:
          "博物馆扩建常被描述为纯粹的空间改善，但一座新翼同时固定了捐赠者的名字、收藏的地位、参观顺序和未来维护成本。与此前 Madelon Vriesendorp 讨论建筑图像和女性作者不同，本项关注真实制度如何通过材料与路径把一笔捐赠变成长期公共叙事；越是看起来无缝，越值得追问哪些谈判被藏进了墙体。",
        creatorAngle:
          "把平面图画成一份‘机构剖面’：每个展厅同时标出作品年代、捐赠关系、旧建筑接口、景观视线与维护材料。让观众看到一条优雅动线背后，至少有五种不同时间尺度在协同。",
        facts: [
          "新翼面积约 15,000 平方英尺，设置 12 间展厅，计划于 2028 年开放",
          "Aso O. Tavitian Collection 包含 300 余件作品，范围从文艺复兴延伸至十八世纪法国艺术",
          "Tavitian 的遗赠与捐赠合计价值约 4,500 万美元，用于收藏、建筑和相关项目",
          "建筑将连接 1955 年主馆与 1973 年 Manton Research Center，景观设计由 Reed Hilderbrand 承担",
        ],
        sourceName: "Selldorf Architects；Clark Art Institute",
        sourceUrl: "https://www.selldorf.com/news/clark-art-institute-reveals-design-for-new-aso-o-tavitian-wing",
        sourceDate: "2026-07-20",
      },
      {
        category: "社会科学 × 传播学 × 新闻基础设施",
        image: "/story-images/platformized-news.jpg",
        imageAlt: "同一则新闻从报纸页面分流到短视频、社交网络和聊天机器人，来源标识沿途逐渐变小的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释新闻消费的平台化与来源可见度，并非 Reuters Institute 原始图表",
        title: "新闻第一次更常从平台抵达，而不是从新闻网站抵达",
        summary:
          "Reuters Institute 的 48 个市场调查显示，社交媒体与视频网络以 54% 的使用率首次超过新闻机构网站和应用。变化不是某个平台突然获胜，而是新闻入口、信任和付费关系被第三方逐步重写。",
        happened:
          "《Digital News Report 2026》记录全球新闻消费继续从电视、新闻网站和应用转向社交媒体、视频网络与 AI 聊天机器人。社交与视频网络成为 54% 受访者使用的新闻来源，新闻机构自有网站和应用为 51%，电视为 52%；另有 10% 的人每周用独立 AI 聊天机器人获取新闻。",
        importance:
          "这不是‘年轻人不读新闻’的简单故事，而是新闻仍被阅读，却越来越在新闻机构无法完整控制的界面里出现。平台决定标题长度、视频节奏、来源显示和点击出口，也分走受众数据与订阅机会。与昨日 Pew 的公民参与类型不同，本项关注的是分发基础设施本身如何改变信任：整体新闻信任降至 37%，社交新闻和聊天机器人答案的信任度更低。",
        creatorAngle:
          "选择同一则报道，让它依次穿过新闻网站、短视频、信息流摘要和聊天机器人回答。逐站记录标题、署名、原始链接、上下文、广告和纠错入口还剩多少，把‘平台化’做成一张可见的损耗表。",
        facts: [
          "调查覆盖 48 个市场；54% 的受访者使用社交媒体或视频网络获取新闻，首次超过新闻机构网站和应用的 51%",
          "30% 将社交或视频网络视为主要新闻来源，高于五年前的 22%；12% 只通过这些平台接触新闻，比 2020 年的 6% 翻倍",
          "每周使用 AI 聊天机器人获取新闻者由 7% 升至 10%，35 岁以下人群为 16%",
          "整体新闻信任度降至 37%，为 2015 年开始追踪以来最低；社交媒体新闻信任度为 22%，聊天机器人新闻答案为 20%",
        ],
        sourceName: "Reuters Institute for the Study of Journalism · Digital News Report 2026",
        sourceUrl: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/dnr-executive-summary",
        sourceDate: "2026-06-16（页面核验 2026-07-21）",
      },
      {
        category: "社会科学 × 社会学 × 测量与不平等",
        image: "/story-images/race-measurement-inequality.jpg",
        imageAlt: "同一组人物经过不同分类表格后投射出不同工资、健康与教育统计结果的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于解释种族变量选择如何改变统计结论，并非论文原始图表或真实调查对象",
        title: "同一群人，换一个种族变量，不平等结论也会改变",
        summary:
          "Sociological Science 的开放研究比较美国纵向调查中的多种种族测量，发现常用的筛选变量在五类结果中从未获得最佳模型拟合。种族不是数据库里天然存在的一栏，而是研究者必须解释的操作选择。",
        happened:
          "Stanford 社会学者 Emma Williams-Baron 与 Aliya Saperstein 使用 1979 National Longitudinal Survey of Youth，比较自我认同、他人分类和筛选问卷等不同种族变量，并将其带入工资、薪金、失业、抑郁与学校纪律五类不平等分析。表现最好的变量会随性别、结果与拟合指标改变，没有一个通用金标准。",
        importance:
          "量化研究常把种族当作无需解释的控制变量，但分类方式会改变估计值、显著性乃至政策故事。研究并不是要求抛弃种族数据，而是要求公开变量如何生成、为何选择以及替代选择会不会得到不同结论。它也与本期古罗马面部复原形成呼应：分类工具不是现实的透明窗口，本身参与了现实的构造。",
        creatorAngle:
          "用一个可切换的统计面板呈现同一研究问题：只改变种族变量，保留样本与结果不变，观察系数和排序怎样移动。每次切换都显示变量来自自我认同、调查员判断还是早期筛选，避免把分类来源藏在脚注。",
        facts: [
          "论文于 2026 年 7 月 9 日发表，DOI 为 10.15195/v13.a32，全文采用 CC BY 4.0 许可",
          "研究使用 1979 National Longitudinal Survey of Youth，并比较多种自我认同与外部分类的种族测量",
          "分析覆盖工资、薪金、失业、抑郁和学校纪律 5 类不平等结果",
          "既有研究广泛采用的 screener race 变量，在跨结果的模型拟合比较中从未成为经验上的最佳选择；最佳变量随性别、结果和拟合指标变化",
        ],
        sourceName: "Sociological Science",
        sourceUrl: "https://sociologicalscience.com/articles-v13-32-825/",
        sourceDate: "2026-07-09",
      },
      {
        category: "女性主义 × 健康 × 诊断偏差与照护",
        image: "/story-images/women-bleeding-diagnosis.jpg",
        imageAlt: "一条十四年长的红色诊断时间线从月经日历穿过缺铁、转诊和血液检查，最终抵达诊断的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释女性出血性疾病的长期诊断延迟，并非患者、血样或临床结果图像",
        title: "把‘月经过多’当作症状，而不是命运：女性出血性疾病为何晚诊十四年",
        summary:
          "The Lancet Haematology 委员会指出，女性与女孩的出血性疾病平均需 14 至 16 年才获诊断，男性约两年；多达三分之一女性经历的月经过多，往往是最早却最容易被正常化的信号。",
        happened:
          "由 Cleveland Clinic 血液学家 Bethany Samuelson Bannow 领导的全球委员会发布女性血液健康路线图，涵盖出血、血栓、贫血、妊娠和产后并发症。报告要求把月经史与缺铁筛查纳入常规照护，建立更清晰的转诊和产后出血流程，并把女性纳入临床试验与指南设计。",
        importance:
          "‘很多女性都这样’常被当作无需检查的理由，但高发并不等于正常。月经过多被文化性地视为私人麻烦，会把潜在遗传性出血障碍变成长达十余年的缺铁、误诊和生活限制。与此前乳腺癌全球生存率的系统差距不同，本项聚焦症状进入医疗体系的第一道翻译：谁的疼痛和出血被记作临床数据，谁被要求适应。",
        creatorAngle:
          "把诊断过程画成 14 年时间线：首次月经、反复缺铁、请假、急诊、妊娠或手术出血、转诊与最终检测。每个节点同时标记患者说了什么、病历记下什么、系统漏掉什么，再与委员会提出的 24 个月目标对照。",
        facts: [
          "委员会估计女性与女孩的出血性疾病平均诊断等待为 14 至 16 年，男性约为 2 年",
          "月经过多影响多达三分之一女性，并可能是遗传性出血障碍最早出现的信号",
          "委员会目标是在 2035 年前把女性与女孩从症状出现到诊断的平均时间缩短至 24 个月以内",
          "建议包括普遍筛查月经过多与缺铁、标准化产后出血流程，以及为妊娠和产后阶段提供更个体化的血栓照护",
        ],
        sourceName: "Cleveland Clinic；The Lancet Haematology Commission",
        sourceUrl: "https://newsroom.clevelandclinic.org/2026/07/13/new-global-report-outlines-strategies-to-improve-hematologic-care-for-women",
        sourceDate: "2026-07-13",
      },
    ],
  },
  {
    date: "2026-07-20",
    displayDate: "2026.07.20",
    issueNo: "07",
    theme: "谁被看见，谁被分类：图像、参与和制度测量的边界",
    intro:
      "今天的五个故事都在追问分类如何改变现实：儿童绘本把移民记忆交给下一代，大学策展把家重新解释为劳动与过渡空间，社会调查发现公共参与并非简单的积极或冷漠，网球资格被压缩为一次基因筛查，而全球乳腺癌生存地图又不得不用有限登记数据估计大量空白。分类可以让经验变得可见，也可能把无法整齐归类的人和情境留在边缘。",
    uniqueCount: 5,
    topics: ["艺术人文", "社会科学", "女性主义"],
    stories: [
      {
        category: "艺术人文 × 设计 × 儿童文学与移民史",
        image: "/story-images/ed-young-bright-worlds.jpg",
        imageAlt: "纸张、墨迹、上海街屋、迁徙飞鸟和打开的绘本围绕一位抽象创作者剪影的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释 Ed Young 的移民记忆与绘本创作，并非艺术家原作、书封或人物肖像复制",
        title: "一本绘本可以装下多少次迁徙？Ed Young 用六十年把私人记忆变成儿童的视觉语言",
        summary:
          "Museum of Chinese in America 的首场美国回顾展以原稿、拼贴和出版物串联 Ed Young 的上海童年、赴港避乱、移居美国、收养女儿与太极实践，显示儿童书并不是缩小的成人艺术，而是记忆跨代传递的基础设施。",
        happened:
          "《Ed Young’s Bright Worlds: Gesture and Feeling in 60 Years of Picture Books for Children》正在纽约 Museum of Chinese in America 展出。展览从《The House Baba Built》《Voices of the Heart》《My Mei Mei》和身后出版的《Bright World》等作品出发，呈现 Young 如何使用粉彩、剪纸、钢笔、墨和拼贴，把日本占领时期的上海童年、移民生活、家庭经验和身体练习转译为图像叙事。",
        importance:
          "绘本常被放在文学和美术的边缘，但它可能是一个人最早接触战争、迁徙、家庭差异与异文化的媒介。Young 的案例也打破了把移民艺术只理解为身份声明的习惯：个人经历进入书页后，会通过材料、翻页节奏和亲子共读变成可反复使用的家庭记忆。它与此前讨论艺术史经典补名不同，关注的是儿童视觉文化如何建立跨代共同语言。",
        creatorAngle:
          "可选取同一段记忆，分别用文字段落、单幅画和三次翻页来表达，比较每种形式能保留什么。再把纸张、墨迹、剪切边缘和身体动作作为叙事证据，而不是只复述艺术家的生平。",
        facts: [
          "展期为 2026 年 5 月 14 日至 9 月 13 日，是 Ed Young 在美国的首场回顾展",
          "Young 的儿童书创作生涯超过 60 年，参与创作的书籍超过 100 本",
          "展览包括《The House Baba Built》(2011)、《Voices of the Heart》(1997)、《My Mei Mei》(2006) 与《Bright World》(2024) 的原作",
          "他曾带着借来的 20 美元到纽约谋生；1962 年出版的《The Mean Mouse and Other Mean Stories》开启其绘本职业生涯",
        ],
        sourceName: "Museum of Chinese in America",
        sourceUrl: "https://www.mocanyc.org/event/ed-youngs-bright-worlds/",
        sourceDate: "2026-05-14（展览开幕；页面核验 2026-07-20）",
      },
      {
        category: "艺术人文 × 女性主义 × 家庭空间与策展",
        image: "/story-images/domestic-liminal-home.jpg",
        imageAlt: "餐桌、椅子、衣物、半开的门和家庭照片在彼此错位的房间之间漂浮的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释家庭空间的亲密、劳动与过渡状态，并非 Paul R. Jones Collection 藏品复制",
        title: "家不是稳定背景：一堂艺术史课把餐桌、门缝与日常劳动变成策展问题",
        summary:
          "University of Alabama 的研究生策展项目从 Paul R. Jones Collection 选出二十世纪作品，讨论家如何同时容纳亲密、劳动、安全、压迫、记忆和离开；策展过程本身也成为学生学习如何生产解释的现场。",
        happened:
          "《The Domestic Liminal: The In-Betweenness of the Home》正在 Tuscaloosa 的 Paul R. Jones Museum 展出，7 月 20 日继续向公众免费开放。展览由 Lucy Curzon 博士的 Art History 580 二十世纪艺术研讨课策划，学生从馆藏中选择作品，以日常生活为线索重新组织二十世纪艺术与文化。",
        importance:
          "‘家’经常被当作自然、私人而且没有政治性的空间，但照护、家务、代际关系、阶级和性别分工都在其中发生。把学生策展纳入讨论，还能揭示博物馆叙事并非天然存在：选哪件作品、让哪些物件相邻、怎样书写标签，都会决定观众把日常看成琐碎还是结构。",
        creatorAngle:
          "以一张餐桌为中心画出不同时间层：做饭、照护、争吵、远程工作、空置与离家。随后用展签的口吻分别把它写成家具、劳动工具、情感遗址和权力空间，展示命名如何改变观看。",
        facts: [
          "展期为 2026 年 5 月 1 日至 8 月 21 日，7 月 20 日列为开放日期之一",
          "展览地点为 University of Alabama 的 Paul R. Jones Museum，公众可免费参观",
          "项目由 Art History 580: Twentieth Century seminar 的学生在 Lucy Curzon 博士指导下完成",
          "展品选自 Paul R. Jones Collection，策展主题聚焦二十世纪艺术与文化中的日常生活",
        ],
        sourceName: "University of Alabama · Paul R. Jones Museum",
        sourceUrl: "https://calendar.ua.edu/event/the-domestic-liminal-exhibition",
        sourceDate: "2026-05-01（展览开幕；2026-07-20 当日开放）",
      },
      {
        category: "社会科学 × 传播学 × 公民参与",
        image: "/story-images/civic-engagement-clusters.jpg",
        imageAlt: "一座纸上城市被分成动员者、社区连接者、新闻旁观者和低参与者四种网络形态的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于解释 Pew 的四类公共参与模式，并非研究原始图表或精确比例地图",
        title: "看新闻不等于参与公共生活：美国人不是从积极到冷漠排成一条直线",
        summary:
          "Pew-Knight Initiative 用 19 项行为指标将美国成年人归为动员者、连接者、旁观者与局外人四组，说明投票、志愿服务、宗教活动、新闻关注和公开表达并不会总是同步出现。",
        happened:
          "Pew Research Center 7 月 16 日发布公共参与研究。研究者用聚类分析处理一项 5,393 人、多模式调查中的 19 项政治、公民、宗教和新闻行为，再以另一项 5,195 人调查比较四组人的知识与态度。结果中，动员者占 9%，连接者占 28%，旁观者与局外人各占 31%。",
        importance:
          "把人简单分为‘关心政治’与‘不关心政治’，会漏掉大量实际差异：有人深度参与社区却避开党派政治，有人密切关注新闻但只在私人聊天中回应，也有人整体参与较少却仍然投票或参加宗教活动。分类能帮助传播者找到不同入口，但聚类不是人格诊断，而且调查期涵盖 2024 年大选，其模式未必在非选举年份保持不变。",
        creatorAngle:
          "把四种类型写成四条‘同一天’的时间线：同一则新闻如何分别变成联系议员、社区捐助、私聊转发或完全绕过。随后标出调查没有测到的照护劳动、非正式互助和无法投票者，提醒读者模型的边界。",
        facts: [
          "主要调查于 2025 年 7 月 9 日至 12 月 5 日进行，共有 5,393 名美国成年人参与",
          "研究使用政治行动、公民参与、宗教出席和新闻关注等 19 项指标进行聚类",
          "四类占比分别为动员者 9%、连接者 28%、旁观者 31% 和局外人 31%",
          "即使在低参与的局外人中，41% 表示曾在 2024 年投票，24% 至少每月参加一次宗教活动",
        ],
        sourceName: "Pew Research Center · Pew-Knight Initiative",
        sourceUrl: "https://www.pewresearch.org/journalism/2026/07/16/how-americans-are-engaged-with-news-politics-religion-and-civic-life/",
        sourceDate: "2026-07-16",
      },
      {
        category: "女性主义 × 性别 × 体育制度与数据隐私",
        image: "/story-images/wta-sry-eligibility.jpg",
        imageAlt: "空网球场被透明 DNA 链分隔，旁边出现棉签、隐私信封、准入闸门和分叉路径的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于呈现体育资格筛查的制度张力，并非运动员、检测过程或基因结果的真实图像",
        title: "一根棉签守住女子网球的门：WTA 把资格判断交给一次 SRY 基因筛查",
        summary:
          "WTA 宣布以一次性 SRY 基因检测确认女子巡回赛资格，新规 7 月 21 日生效。争论因此从睾酮规则转向基因标记，同时把隐私、例外身体与制度申诉推到中心。",
        happened:
          "WTA 更新女子巡回赛参赛政策，要求球员通过一次性 SRY 基因筛查；样本可由面颊拭子或血液取得。此前政策允许跨性别女性在声明女性身份并保持较低睾酮水平两年后参赛。WTA 表示筛查将在 2026 年开始，并承诺设置保密和球员沟通机制。",
        importance:
          "规则试图用一个可操作的统一门槛结束各项目长期分裂的资格制度，但可操作性并不等于没有代价。基因信息一旦成为职业准入凭证，检测保管、异常结果、复核与申诉就不再只是医学细节，而是劳动权和数据治理问题。报道同时指出，目前职业网坛各级别没有已知的跨性别女性球员，因此政策的象征范围远大于当前直接影响人数。",
        creatorAngle:
          "不要只制作支持／反对二选一辩论；可以画出一张完整资格流程：谁采样、谁读取、谁保存、异常结果由谁解释、运动员如何申诉。把制度最容易被一句‘检测即可’省略的环节全部放回来。",
        facts: [
          "新政策要求一次性 SRY 基因筛查，可使用面颊拭子或血液样本",
          "资格流程于 2026 年 7 月 21 日生效，WTA 表示筛查将在 2026 年内启动",
          "旧政策要求跨性别女性声明性别身份，并在参赛前保持较低睾酮水平两年",
          "Reuters 报道称，目前职业网球任何级别都没有已知的跨性别女性现役球员",
        ],
        sourceName: "Reuters（政策说明引述 WTA）",
        sourceUrl: "https://www.reuters.com/sports/tennis/womens-tour-mandates-gene-test-eligibility-2026-07-20/",
        sourceDate: "2026-07-20",
      },
      {
        category: "女性主义 × 健康 × 全球医疗与数据基础设施",
        image: "/story-images/global-breast-survival.jpg",
        imageAlt: "由五年时间线组成的世界地图连接筛查、药物、放疗和癌症登记系统，并在部分地区留下数据空白的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释全球乳腺癌生存差距与数据缺口，并非精确地图、患者影像或临床结果",
        title: "同一种癌症，五年生存率相差一倍以上：地图测量的是医疗系统，不是个人意志",
        summary:
          "WHO 首次为全部 194 个成员国估计乳腺癌五年净生存率：全球中位数为 77.8%，非洲区域为 39.1%，美洲区域为 88.5%；差距同时暴露了诊断、治疗和癌症登记能力的不平等。",
        happened:
          "WHO 发布 2017 至 2021 年确诊女性的全球乳腺癌五年生存估计，并在 Nature Medicine 发表模型结果。模型将 67 个拥有观测登记数据的成员国，与分期、药物可及性、放疗、乳腺摄影能力和成人死亡率等变量结合，为其余国家建立基线。",
        importance:
          "生存率常被讲成个人抗争故事，但国家间差异更多反映早期发现、及时确诊、复合治疗与连续照护能否连接起来。与此同时，估计值的完整世界地图可能制造一种数据已经齐全的错觉：194 个国家中只有 67 个拥有观测生存数据，36 个脆弱或受冲突影响的国家中更只有两个。数据基础设施本身就是医疗能力的一部分。",
        creatorAngle:
          "制作两张叠图：第一张呈现五年生存率，第二张只显示哪些地方真正有癌症登记观测。让颜色最确定的区域与信息最稀薄的区域分开，避免把模型估计画成同等坚实的事实。",
        facts: [
          "WHO 为全部 194 个成员国提供 2017 至 2021 年确诊患者的五年生存估计，全球中位数为 77.8%",
          "区域中位数从非洲区域的 39.1% 到美洲区域的 88.5%；欧洲区域为 84.0%",
          "低收入国家中位数为 41.9%，高收入国家为 87.3%",
          "模型只有 67 个成员国的癌症登记观测数据；36 个脆弱和冲突国家中只有 2 个拥有观测数据",
        ],
        sourceName: "World Health Organization；Nature Medicine",
        sourceUrl: "https://www.who.int/news/item/08-07-2026-first-global-breast-cancer-survival-estimates-show-wide-regional-and-income-disparities",
        sourceDate: "2026-07-08（页面核验 2026-07-20）",
      },
    ],
  },
  {
    date: "2026-07-19",
    displayDate: "2026.07.19",
    issueNo: "06",
    theme: "脱离背景之后：物件、注意力与制度如何被重新组织？",
    intro:
      "今天的五个故事都在处理‘重新组织’：罗马器物离开原始用途后成为艺术，女性抽象表现主义者被重新放回运动中心，一款游戏把焦虑治疗拆成注意力训练，印度的公共航天基础设施开始承载私人轨道发射，而产后医疗保障则从短暂窗口延伸为一年。改变名称远远不够，真正的变化发生在背景、流程和制度连接被重新搭建之时。",
    uniqueCount: 5,
    topics: ["艺术人文", "社会科学", "女性主义"],
    stories: [
      {
        category: "艺术人文 × 历史 × 博物馆研究",
        image: "/story-images/roman-art-context.jpg",
        imageAlt: "罗马头盔、壁画碎片与器皿从生活空间进入现代展台的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释器物脱离原始语境后的博物馆化，并非卢浮宫展品复制",
        title: "一顶头盔什么时候变成了‘艺术’？罗马器物离开用途后的第二次生命",
        summary:
          "尼姆罗马博物馆与卢浮宫合作的展览拒绝只谈形式之美：头盔、壁画、器皿和建筑构件首先属于战斗、家居、仪式与权力，然后才被现代展台重新命名为独立艺术品。",
        happened:
          "《L’art romain du Louvre. Un monde d’images》正在法国尼姆 Musée de la Romanité 展出。策展路径将庞贝角斗士头盔等仍能显出用途的器物，与从完整装饰体系中切下、后来被独立装框的壁画碎片并置，追问现代收藏和审美分类如何改变我们观看罗马视觉文化的方式。展览是卢浮宫希腊、伊特鲁里亚与罗马古物部门整修期间的馆际合作项目。",
        importance:
          "博物馆并非只是保存过去，也会通过切割、装框、命名和排序生产一种新的过去。当实用器物只剩下‘杰作’身份，劳动、宗教、阶层和空间关系会被审美遮住。与此前贝叶挂毯的跨国借展不同，这里关注的不是所有权，而是展示技术如何改变物件的本体论身份。",
        creatorAngle:
          "可做一组‘展台前／展台后’双联画：左侧还原器物在战斗、宴饮、住宅和祭祀中的关系，右侧标出支架、标签、聚光灯与白墙如何把它转译成艺术。让展陈装置本身成为叙事角色。",
        facts: [
          "展期为 2026 年 6 月 11 日至 2027 年 1 月 10 日",
          "展览由 Musée de la Romanité 与 Musée du Louvre 合作举办",
          "策展明确反对近现代收藏传统遗留的纯审美化路径，强调器物的功能、使用和意义",
          "展览以庞贝角斗士头盔和脱离整体装饰的壁画碎片等例子比较‘用途’与‘艺术品’身份",
        ],
        sourceName: "Musée de la Romanité；Musée du Louvre（当日评论补充：Le Monde）",
        sourceUrl: "https://museedelaromanite.fr/en/temporary-exhibition",
        sourceDate: "2026-06-11（展览开幕；页面核验 2026-07-19）",
      },
      {
        category: "艺术人文 × 女性主义 × 艺术史",
        image: "/story-images/women-abstract-expressionism.jpg",
        imageAlt: "多名匿名女性共同在巨幅画布上工作、强调尺度与身体动作的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释女性抽象表现主义者的集体创作史，并非任何艺术家原作复制",
        title: "抽象表现主义不是几位男性的酒吧传奇：三十多位女性把尺度夺了回来",
        summary:
          "Speed Art Museum 的群展把 Helen Frankenthaler、Joan Mitchell、Lee Krasner 等三十多位艺术家放回美国战后先锋运动中心，并坚持让观众以原作的完整尺度理解其身体性。",
        happened:
          "《Abstract Expressionists: The Women》正在 Louisville 的 Speed Art Museum 展出，7 月 19 日继续安排专题导览与现场讨论。展览覆盖二战后至 1970 年代，呈现 Helen Frankenthaler、Joan Mitchell、Vivian Springford、Grace Hartigan、Lee Krasner、Pat Passlof 等三十多位艺术家，是 Kentucky 首个专门讨论抽象表现主义的展览。",
        importance:
          "这不是把几位女性补进既有英雄名单，而是改变运动的基本叙述单位：从 Pollock 或 de Kooning 的个人神话，转向跨画室、画廊、教学与友谊网络的集体形成。与昨日 Gladys Nilsson 的媒介和母职偏见不同，本项追问的是一整场艺术运动为何被压缩成少数男性姓名，以及巨幅原作的尺度如何反驳‘女性创作较小、较私人’的预设。",
        creatorAngle:
          "可把传统艺术史时间线改成一张‘同时发生图’：同一年横向排列不同城市、画室、展览与教学关系，再把画布实际尺寸换算成人体比例，显示被叙事删掉的不只是姓名，也是创作的物理强度。",
        facts: [
          "展期为 2026 年 5 月 16 日至 8 月 30 日，7 月 19 日有两场专题导览和一场 Chat Spot",
          "展览汇集超过 30 位女性抽象表现主义者",
          "时间范围从二战后延伸至 1970 年代",
          "参展艺术家包括 Helen Frankenthaler、Joan Mitchell、Vivian Springford、Grace Hartigan 与 Lee Krasner",
        ],
        sourceName: "Speed Art Museum",
        sourceUrl: "https://www.speedmuseum.org/exhibitions/abstract-expressionists-the-women/",
        sourceDate: "2026-01-15（展览公告；活动页面核验 2026-07-19）",
      },
      {
        category: "社会科学 × 心理学 × 游戏与临床研究",
        image: "/story-images/eco-rescue-anxiety-trial.jpg",
        imageAlt: "青少年在家操作生态修复游戏，注意目标、干扰和情绪路径环绕屏幕的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于解释 Eco-Rescue 临床试验设计，并非真实参与者、游戏界面或疗效证明",
        title: "把焦虑训练做成生态修复游戏：有趣不等于有效，所以要设置三条对照路径",
        summary:
          "FIU 正在测试 Eco-Rescue 能否帮助 11 至 15 岁青少年练习注意力转换。研究尚无疗效结果；它最值得关注的恰恰是如何区分游戏的新鲜感、一般娱乐和针对性训练。",
        happened:
          "Florida International University 的 Center for Children and Families 成为美国首个开展 Eco-Rescue 临床试验的站点。玩家扮演修复受损环境的飞行员，同时追踪移动目标、应对突发变化并管理多项任务。研究将参与者随机分入 Eco-Rescue、非注意力训练游戏和不玩游戏三组，六周后比较注意控制、情绪调节与焦虑症状。",
        importance:
          "数字心理干预最容易出现的叙事错误，是把‘青少年愿意玩’直接等同于‘具有临床效果’。三组设计试图把针对性机制与屏幕时间、期待效应和参与感分开。它也提醒我们，可及性不只意味着把治疗装进手机；家庭设备、持续时间、隐私、退出率和真正需要传统治疗的人如何转介，同样决定技术是否公平。",
        creatorAngle:
          "可画一张‘同一名玩家的三条时间线’，分别标出针对性训练、普通游戏与无游戏条件；把研究尚未回答的问题留在终点，而不是先制作成功故事。重点解释为什么对照组比炫目的游戏画面更重要。",
        facts: [
          "FIU 计划招募 50 名参与者，全部研究站点预计共 150 名",
          "参与者年龄为 11 至 15 岁，并被分入 3 个研究组",
          "试验持续 6 周；Eco-Rescue 组每天约 30 分钟、每周 4 天，总计约 12 小时",
          "项目与 University of Geneva 合作，并有 University of Haifa 和 Yale University 参与；目前仍在招募，尚未报告疗效",
        ],
        sourceName: "Florida International University · Center for Children and Families",
        sourceUrl: "https://news.fiu.edu/2026/fiu-researchers-test-video-game-as-anxiety-treatment-for-teens",
        sourceDate: "2026-07-17",
      },
      {
        category: "社会科学 × 天文学 × 科研制度与基础设施",
        image: "/story-images/vikram-private-orbit.jpg",
        imageAlt: "私人小型火箭从公共海岸发射场升空，下方展开科研、监管和供应链结构的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释私人轨道发射背后的公共基础设施，并非 Vikram-1 实拍或精确复原",
        title: "印度第一枚私人轨道火箭升空：‘私人’成功其实站在一整套公共系统之上",
        summary:
          "Skyroot 的 Vikram-1 将载荷送入 450 公里轨道，使印度成为第三个拥有私人轨道发射能力的国家；但发射场、人才、监管和早期技术积累仍来自国家航天体系。",
        happened:
          "7 月 18 日，Vikram-1 从 ISRO 的 Satish Dhawan Space Centre 发射，在约 15 分钟后把客户载荷和在轨实验送入 450 公里轨道。此次 Mission Aagaman 主要验证推进、航电、遥测、制导、导航与控制系统；Skyroot 表示仍需更多测试飞行，之后才会进入常规商业任务。",
        importance:
          "‘私人航天’并不意味着国家退场，而是国家角色从唯一运营者转向基础设施提供者、监管者、采购者和人才训练场。两位创始人都曾在 ISRO 工作，火箭也从国家发射中心起飞。与此前 Rubin 天文台的数据公共性不同，这里要追问公共能力如何被转换为商业市场，以及风险和收益由谁承担。",
        creatorAngle:
          "可把火箭剖成五层：企业硬件、ISRO 发射场、公共科研人才、2020 年后的监管开放和全球小卫星客户。让‘私人’一词在每一层被重新限定，避免只写成创业英雄史。",
        facts: [
          "Vikram-1 于 2026 年 7 月 18 日 06:35 GMT 发射，约 15 分钟后进入 450 公里轨道",
          "火箭高约 22 米，设计近地轨道载荷能力最高 350 千克",
          "运载器采用 3 级固体燃料和带 3D 打印发动机的液体轨道调整模块",
          "印度 2020 年向私人投资开放航天部门，并计划把航天经济从约 80 亿美元提高到 2033 年的 440 亿美元",
        ],
        sourceName: "Reuters（任务信息由 Skyroot Aerospace 交叉核验）",
        sourceUrl: "https://www.reuters.com/science/indias-skyroot-launches-vikram-1-first-private-orbital-rocket-mission-2026-07-18/",
        sourceDate: "2026-07-18",
      },
      {
        category: "女性主义 × 健康 × 照护政策",
        image: "/story-images/postpartum-medicaid-map.jpg",
        imageAlt: "美国纸质地图环绕母婴形成一座延伸十二个月的照护桥梁的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释产后 Medicaid 覆盖扩展，并非真实患者或精确政策地图",
        title: "产后医疗不应在第 60 天坠落：美国几乎完成了一场安静的制度扩展",
        summary:
          "KFF 7 月 15 日更新显示，49 个州和华盛顿特区已把 Medicaid 产后覆盖延长至 12 个月，只剩一个州没有采取扩展行动。",
        happened:
          "美国 2021 年《American Rescue Plan Act》允许各州通过州计划修正，把原本通常只有 60 天的 Medicaid 产后资格延长到 12 个月；该选项 2022 年 4 月 1 日生效，并在 2023 年综合拨款法中永久化。KFF 最新追踪显示，截至 2026 年 7 月 15 日，49 州和 Washington, D.C. 已实施一年覆盖，Arkansas 成为唯一尚未扩展的州。",
        importance:
          "分娩后的身体恢复、抑郁筛查、慢性病管理和避孕需求不会在第 60 天结束。把覆盖延长到一年，是把照护从一次分娩账单重新理解为连续过程。但地图上的‘已实施’仍不能自动保证医生可得、交通、语言服务或实际参保连续性；下一步应从法律通过转向使用质量。",
        creatorAngle:
          "可以把产后一年画成十二格照护日历，把 60 天断崖放在第三格之前，再标出心理健康、心血管风险、哺乳支持和慢性病复诊可能出现的月份。最后对比‘法律覆盖’与‘真正看得到医生’两条曲线。",
        facts: [
          "截至 2026 年 7 月 15 日，49 个州和 Washington, D.C. 已实施 12 个月产后 Medicaid 扩展，1 个州尚无扩展行动",
          "联邦扩展选项来自 2021 年 American Rescue Plan Act，并于 2022 年 4 月 1 日生效",
          "Consolidated Appropriations Act 2023 把原本限期 5 年的州级选项永久化",
          "Wisconsin 2026 年的扩展使 Arkansas 成为唯一尚未实行一年覆盖的州",
        ],
        sourceName: "KFF Medicaid Postpartum Coverage Extension Tracker（州级进展补充：Associated Press）",
        sourceUrl: "https://www.kff.org/medicaid/medicaid-postpartum-coverage-extension-tracker/",
        sourceDate: "2026-07-15",
      },
    ],
  },
  {
    date: "2026-07-18",
    displayDate: "2026.07.18",
    issueNo: "05",
    theme: "切口、面具与阈值：规则如何进入身体与公共生活？",
    intro:
      "今天的五个故事都在观察一种规则如何获得力量：拼贴艺术把消费图像切开，节庆面具用传统容纳变化，语言学习的阈值解释群体规范，生成式 AI 把一地的言论限制带到另一地，而一项生育研究则试图在免疫系统造成的限制中重新寻找可能性。规则并非只写在法律里，也藏在图像、习惯、模型和身体机制之中。",
    uniqueCount: 5,
    topics: ["艺术人文", "社会科学", "女性主义"],
    stories: [
      {
        category: "艺术人文 × 女性主义 × 设计与音乐史",
        image: "/story-images/linder-punk-collage.jpg",
        imageAlt: "杂志碎片、花朵、家用器具与朋克海报被切开重组的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释 Linder 的拼贴方法与朋克语境，并非艺术家原作复制",
        title: "Linder 把朋克的“切口”带回 Blackpool：拼贴为什么仍是一种夺回图像的技术？",
        summary:
          "横跨五十年的巡回回顾展今天抵达 Blackpool：从 1970 年代曼彻斯特朋克场景到新作，Linder 用剪切、错置与表演拆解身体如何被消费图像塑造。",
        happened:
          "Hayward Gallery Touring 的《Linder: Danger Came Smiling》于 7 月 18 日在 Blackpool 的 Grundy Art Gallery 开幕，展至 10 月 3 日。展览覆盖 Linder 五十年的蒙太奇、摄影、行为与雕塑实践，从她身处 1970 年代曼彻斯特朋克场景时制作的早期拼贴，一直延伸到首次公开的新作。她常使用医用手术刀切割 glamour photography、食品、时尚与家居图像，把消费文化对身体的编码变成可见的接缝。",
        importance:
          "这不是又一次把女性艺术家写成“被重新发现”的回顾展。Linder 的关键在于：她没有逃离大众图像，而是用大众图像自身的材料制造干扰。纸质杂志正在消失、生成图像正在增加时，“切开”仍提醒我们，图像不是透明事实，而是可以识别来源、暴露权力并重新组合的设计对象。它与此前对深度伪造的技术批判不同：这里关注的是观众如何通过手工接缝恢复对图像的主动阅读。",
        creatorAngle:
          "可从一把医用手术刀切入，做一条“拼贴的政治技术史”：将 1970 年代杂志剪贴、朋克唱片封套、数字蒙太奇与生成式图像并列，比较每种媒介如何留下或抹平接缝。不要复制具体作品，而应把“看见切口”作为视觉叙事原则。",
        facts: [
          "Blackpool 展期为 2026 年 7 月 18 日至 10 月 3 日",
          "回顾展覆盖 Linder 约 50 年创作，从 1970 年代曼彻斯特朋克场景延伸至首次公开的新作",
          "展览媒介包括蒙太奇、摄影、行为艺术与雕塑",
          "巡展由 Hayward Gallery Touring 与 Inverleith House、Glynn Vivian Art Gallery、Grundy Art Gallery 合作",
        ],
        sourceName: "Hayward Gallery Touring · Southbank Centre",
        sourceUrl: "https://www.southbankcentre.co.uk/whats-on/linder-danger-came-smiling-on-tour/",
        sourceDate: "2026-07-18（Blackpool 开幕日期）",
      },
      {
        category: "艺术人文 × 宗教与文化史 × 人类学",
        image: "/story-images/mexican-masks-danza.jpg",
        imageAlt: "原创的魔鬼与老人面具、舞蹈服饰和节庆节奏组成的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释 Michoacán 面具与 danza 传统，并非展品复制或现场摄影",
        title: "魔鬼、圣徒与流行人物同场起舞：墨西哥面具不是被现代性冻结的遗产",
        summary:
          "Las Cruces Museum of Art 新展以 50 件历史和当代面具、5 套完整舞蹈服饰说明：Michoacán 的 danza 传统一直通过新材料、幽默与讽刺回应现实。",
        happened:
          "《Dancing with Life: Mexican Masks》于 7 月 17 日在新墨西哥州 Las Cruces Museum of Art 开幕，展至 10 月 17 日。展览从 Northwest Museum of Arts and Culture 的收藏中选出 Michoacán 的历史与当代面具及完整 danza 服饰：形象既有 diablos、圣徒与慈祥老人，也包括媒体名人、政治人物、罪人和“假偶像”。策展人 Pavel Shlossberg 曾在 Tócuaro 与面具艺术家共同生活和学习，并以此反思博物馆如何描述墨西哥原住民面具实践。",
        importance:
          "民俗展览容易把传统放进“即将消失”的玻璃柜，但这些面具恰恰证明传统的生命来自变化。宗教节庆、政治讽刺、流行文化与材料替换并非污染了某个纯粹原型，而是 danza 持续工作的方式。真正需要追问的是：博物馆如何在保存物件的同时，承认制作它们的社群仍在改变其意义。",
        creatorAngle:
          "可制作一张“面具的社会角色表”，不按年代而按功能排列：敬畏、嘲讽、纪念、反转权威与制造共同体。再用同一角色在不同时代换上不同材料和面孔，展示传统不是固定造型，而是一套继续回应现实的语法。",
        facts: [
          "展期为 2026 年 7 月 17 日至 10 月 17 日，8 月 7 日举行开幕招待会",
          "展览包含 50 件历史及当代面具和 5 套完整 danza 服饰",
          "展品来自 Northwest Museum of Arts and Culture，展览由 International Arts & Artists 组织巡展",
          "面具形象涵盖魔鬼、圣徒、老人、媒体与政治名人，并通过幽默和讽刺回应日常社会处境",
        ],
        sourceName: "City of Las Cruces · Museum of Art",
        sourceUrl: "https://lascruces.gov/dancing-with-life-mexican-masks-opens-at-the-museum-of-art/",
        sourceDate: "2026-07-06（新闻稿；展览 2026-07-17 开幕）",
      },
      {
        category: "社会科学 × 语言学 × 社会心理学",
        image: "/story-images/social-norm-threshold.jpg",
        imageAlt: "分散符号经过社会网络传播，在跨过阈值后形成共享模式的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于解释社会规范的阈值模型，并非实验数据图",
        title: "社会规范并非慢慢平均出来：人们先试探，然后突然把一种模式当成规则",
        summary:
          "PNAS 研究把儿童学习语法的 Tolerance Principle 用于成人协调实验：人们既不只是模仿，也不持续计算最优解，而是在证据越过阈值后稳定选择。",
        happened:
          "CUNY Graduate Center、University of Pennsylvania 与 Stanford 的研究者重新分析社会网络中的“命名游戏”，并加入预注册的双人实验：参与者要为陌生面孔独立选择名称，匹配成功即可获得小额奖励。结果显示，参与者早期会概率性尝试多个选项；当累积经验达到 Tolerance Principle 所描述的阈值，选择会从探索突然转为稳定。该模型原本用于解释儿童如何从大量规则形式和少量例外中学会语法。",
        importance:
          "这给“社会规范如何形成”提供了比从众或理性优化更具体的机制：在阈值之前，异议与新选项仍能进入；越过阈值后，零星反例可能只被当作例外。它有助于解释工作习惯、组织文化和公共行为为何有时长期不动、又在临界点后迅速翻转。但实验简化了身份、地位、惩罚与权力，不能把一个参数直接当成现实社会的万能定律。",
        creatorAngle:
          "可以用“从 walked 到办公室潜规则”做双线叙事：一边展示儿童如何接受 -ed 规则并容忍 went，另一边展示群体如何从多个名字收敛到一个约定。最后加入权力变量，追问谁有资格提供足够多的‘例子’来推动别人越过阈值。",
        facts: [
          "论文 2026 年 4 月 22 日发表于 PNAS，DOI 为 10.1073/pnas.2508061123",
          "研究连接 CUNY Graduate Center、University of Pennsylvania 与 Stanford University 三所机构",
          "实验要求参与者在社会网络中独立为陌生面孔命名，匹配可获得小额奖励",
          "Tolerance Principle 模型优于单纯模仿、持续优化与包括 Bayesian inference 在内的比较模型",
        ],
        sourceName: "PNAS；CUNY Graduate Center",
        sourceUrl: "https://www.pnas.org/doi/10.1073/pnas.2508061123",
        sourceDate: "2026-04-22（论文；CUNY 解读 2026-04-28）",
      },
      {
        category: "社会科学 × 传播学 × 科技与社会",
        image: "/story-images/ai-speech-borders.jpg",
        imageAlt: "同一政治提问穿过不同边界后，被部分人工智能对话框阻挡的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释模型拒答与跨境言论环境，并非真实产品界面或测试截图",
        title: "用户人在澳大利亚，AI 却替别国执行禁忌：言论限制如何被模型跨境复制",
        summary:
          "Oversight Board 测试 10 个商业大模型发现：生成政治批评材料时，涉及限制性言论环境的拒答率为 34%，宽松环境为 14%。",
        happened:
          "Oversight Board 7 月 16 日发布研究，通过位于澳大利亚的 IP 地址、主要在美国的商业接口，测试 10 个商业大模型对 10 个司法辖区政治批评请求的回应。模型面对 Cambodia、China、Saudi Arabia、Thailand、Turkey 等限制性环境时，生成批评传单或诗歌的平均拒答率为 34%；面对 Chile、Japan、Taiwan、UK、US 等较宽松环境时为 14%。有些拒答援引当地法律、安全或并不存在的一般政策。",
        importance:
          "模型不必受到某国政府的实时指令，也可能从训练材料、产品政策和风险规避中学习该国的禁忌，再把它输出给身处另一地的用户。这使内容治理从平台删帖提前到生成阶段，而且用户常看不到拒答规则来自哪里。与历史基线中的算法性厌女和深度伪造不同，本项关注的是政治表达在司法辖区之间的非透明迁移，以及多语言、多地区审计为何必须成为模型评估的一部分。",
        creatorAngle:
          "可用“同一个请求旅行十次”的形式，把用户位置、接口基础设施、谈论对象所在国和模型拒答理由分成四层。不要只排行哪个模型更自由，而要展示法律、训练环境与产品政策如何在一次看似私人的对话里叠加。",
        facts: [
          "研究测试 10 个商业大模型和 10 个司法辖区，查询来自澳大利亚 IP，接口基础设施主要位于美国",
          "政治批评材料的平均拒答率：限制性环境 34%，宽松环境 14%",
          "意见类请求在两组环境中的拒答率均为 41%，涉及暴力的请求则分别为 94% 与 92%",
          "部分模型差异很小，但 Claude Sonnet 4 在宽松环境拒答 16%、限制性环境拒答 59%",
        ],
        sourceName: "Oversight Board",
        sourceUrl: "https://www.oversightboard.com/news/are-llms-stifling-political-speech-an-assessment-of-how-ai-models-protect-free-expression/",
        sourceDate: "2026-07-16",
      },
      {
        category: "女性主义 × 健康 × 生育与照护",
        image: "/story-images/rituximab-fertility-pilot.jpg",
        imageAlt: "免疫细胞、卵巢滤泡与谨慎延伸的临床研究路径组成的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于解释一项早期生育研究，并非患者、药品包装或治疗现场影像",
        title: "10 人试验里诞生了 3 个婴儿：旧药带来的希望为什么仍必须写得很小心？",
        summary:
          "针对自身免疫性早发性卵巢功能不全的小型先导研究中，rituximab 治疗后 10 人有 6 人重新形成可取卵滤泡，3 人最终分娩；证据仍远不足以成为常规疗法。",
        happened:
          "NEJM Evidence 报道的一项先导研究招募 10 名自身免疫性早发性卵巢功能不全患者。她们在 rituximab 治疗前接受卵巢刺激均无反应；治疗四至六个月后，6 人形成可取卵滤泡，5 人获得可冷冻或受精的成熟卵子。3 人随后接受胚胎移植，并均分娩健康婴儿。Rituximab 1997 年首先获批治疗血液癌症，也用于部分自身免疫疾病。",
        importance:
          "生育研究很容易把少数成功病例写成“恢复生育力”的奇迹，但这里最重要的信息恰恰是分母：样本只有 10 人、对象限定为自身免疫机制、需要激素刺激与辅助生殖，且尚需更大试验确认安全性。它同时提示，女性健康并非总是需要从零发明药物；重新理解现有免疫疗法也可能打开路径，但希望必须与风险、费用、适用人群和长期随访一起叙述。",
        creatorAngle:
          "可用一张“从 10 到 6、5、3”的研究漏斗讲完整证据链，并在每一步标出条件：免疫分型、药物治疗、卵巢刺激、取卵、胚胎移植和一年等待期。这样既不抹杀参与者获得的真实结果，也不会把先导试验包装成普遍承诺。",
        facts: [
          "研究样本为 10 名自身免疫性早发性卵巢功能不全患者；该病指卵巢在 40 岁前停止正常功能",
          "治疗前 10 人对卵巢刺激均无反应；治疗后 6 人形成滤泡，5 人获得可冷冻或受精的成熟卵子",
          "3 人接受胚胎移植并均分娩健康婴儿；移植为安全起见安排在治疗至少一年后",
          "研究报告 1 起严重不良事件，研究者认为与激素刺激而非免疫治疗有关；更大规模试验正在进行",
        ],
        sourceName: "NEJM Evidence（Reuters Health Rounds 核验）",
        sourceUrl: "https://www.reuters.com/business/healthcare-pharmaceuticals/old-cancer-drug-may-help-restore-fertility-certain-women-2026-07-01/",
        sourceDate: "2026-07-01",
      },
    ],
  },
  {
    date: "2026-07-17",
    displayDate: "2026.07.17",
    issueNo: "04",
    theme: "看见一件事，需要怎样的银幕、档案、制度与投票箱？",
    intro:
      "今天的五个故事不只关心新作品或新政策，也追问它们靠什么基础设施进入公共视野：古希腊史诗要经过稀缺的 70 毫米银幕，女性艺术家的六十年实践要穿过媒介与地域偏见，宇宙的变化要靠十年连续成像，学术传统要靠分布在各地的岗位与课程，而身体自主权则要进入一张州级选票。被看见从来不是自然发生的。",
    uniqueCount: 5,
    topics: ["艺术人文", "社会科学", "女性主义"],
    stories: [
      {
        category: "艺术人文 × 电影与文学",
        image: "/story-images/odyssey-imax-infrastructure.jpg",
        imageAlt: "古代航船沿胶片驶向巨幕，少量影院如灯塔分布在地图上的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释史诗改编与放映基础设施，并非电影剧照或新闻现场影像",
        title: "《奥德赛》上映：一部全民神话，为何只有少数银幕能完整放映？",
        summary:
          "诺兰把荷马史诗拍成首部全片使用 IMAX 摄影机的叙事长片；但其首选的 70 毫米版本在美国只进入 25 家影院，技术雄心也制造了新的观看地理。",
        happened:
          "Christopher Nolan 执导、Matt Damon 饰演奥德修斯的《The Odyssey》于 7 月 17 日上映。影片被 IMAX 称为首部全片使用 IMAX 摄影机拍摄的叙事长片，Nolan 首选 70 毫米 IMAX 放映；Axios 核验，美国目前只有 25 家运营中的影院具备这一放映条件。其他观众仍可在数字 IMAX、Dolby Cinema、普通 70 毫米、35 毫米及院线自有巨幕观看，但画幅、胶片质感和银幕比例并不相同。",
        importance:
          "古代口传史诗被包装成全球同步的商业事件，看似把经典交给大众；真正决定观众看到哪个版本的，却是几十年前形成的放映网络、设备维护和地域分布。影片的航海叙事于是多了一层现实反讽：为了抵达导演所谓的“完整版本”，观众也可能需要跨城旅行。与前期贝叶挂毯的文物运输不同，这里的问题不是谁保管原物，而是谁拥有解释影像的硬件。",
        creatorAngle:
          "可以制作一张“同一部电影的多种身体”：从 65 毫米摄影底片、70 毫米放映拷贝、1.43:1 银幕到数字巨幕，逐层说明每次转换保留和丢失了什么；再把 25 家美国影院画成一张稀疏航海图，讨论文化平权是否也包括放映基础设施。",
        facts: [
          "影片于 2026 年 7 月 17 日公映，由 Universal Pictures 发行，Matt Damon 饰演奥德修斯",
          "IMAX 称其为首部全片使用 IMAX 摄影机拍摄的叙事长片",
          "美国仅有 25 家运营中的影院可放映 70 毫米 IMAX 版本，其中 8 家位于加利福尼亚州",
          "影院可提供数字 IMAX、Dolby Cinema、普通 70 毫米、35 毫米与院线自有巨幕等替代格式",
        ],
        sourceName: "Axios（技术信息由 IMAX 交叉核验）",
        sourceUrl: "https://www.axios.com/2026/07/17/odyssey-imax-christopher-nolan",
        sourceDate: "2026-07-17",
      },
      {
        category: "艺术人文 × 女性主义 × 艺术史",
        image: "/story-images/gladys-nilsson-retrospective.jpg",
        imageAlt: "水彩纸、刺绣绷架与跳舞的抽象女性形象从工作室延伸到美术馆的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释水彩、母职与媒介等级，并非 Gladys Nilsson 原作复制",
        title: "Gladys Nilsson 的第一次回顾展：水彩为何被误读成“女性媒介”？",
        summary:
          "86 岁前夕，Nilsson 迎来首场生涯回顾展；约 115 件作品把母职中的材料选择、芝加哥地域标签与水彩的媒介等级放到同一条六十年时间线上。",
        happened:
          "Crocker Art Museum 将于 7 月 19 日开幕《Gleefully Askew: A Gladys Nilsson Retrospective》，展至 11 月 29 日。这是 Nilsson 首场回顾展，汇集约 115 件水彩、绘画、素描与版画，覆盖六十余年。她 1962 年毕业于芝加哥艺术学院，后来成为 Hairy Who 成员；怀孕期间为避免松节油毒性，她把水彩作为主要媒介，却被批评界进一步归类为团体中最“女性化”的成员。",
        importance:
          "Nilsson 的故事不是泛泛的“被遗忘女艺术家再发现”。它精确揭示艺术等级如何由材料、照护条件和地理中心共同生产：水彩因便于在育儿环境中使用而成为策略，却又被当成不够宏大；在 Sacramento 的长期工作，则常被“芝加哥艺术家”标签遮蔽。回顾展把这些限制重新读作形式实验的发动机，也与此前 Mendieta 的机构回顾、Yoko Ono 的行为艺术重演形成不同判断。",
        creatorAngle:
          "可从一瓶被避开的松节油开始，追踪怀孕、工作室安全、水彩、刺绣绷架和纸上大尺幅如何组成一套“照护条件下的形式发明”。再比较艺术史为何更容易记住团体名称，而忽略成员在迁居后形成的独立路径。",
        facts: [
          "展期为 2026 年 7 月 19 日至 11 月 29 日，之后将于 2027 年巡展至 Madison Museum of Contemporary Art",
          "展览汇集约 115 件作品，覆盖 Nilsson 六十余年的创作，是她首场生涯回顾展",
          "Nilsson 1940 年出生、1962 年毕业于 School of the Art Institute of Chicago，展览前夕年满 86 岁",
          "Crocker 收藏她 30 件作品，并在本展首次展出回应 1872 年馆藏画作的新作《Loded》(2025)",
        ],
        sourceName: "Crocker Art Museum",
        sourceUrl: "https://www.crockerart.org/press/gleefully-askew-a-gladys-nilsson-retrospective",
        sourceDate: "2026-02-18（新闻稿；展览 2026-07-19 开幕）",
      },
      {
        category: "社会科学 × 天文学 × 科研基础设施",
        image: "/story-images/rubin-lsst-decade.jpg",
        imageAlt: "智利山顶望远镜连续扫描夜空，图像数据流向分布式计算节点的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于解释时间域巡天与数据基础设施，并非天文实拍影像",
        title: "Rubin 天文台开始给宇宙拍十年长片：发现将从“看得深”变成“看见变化”",
        summary:
          "位于智利的 Rubin 天文台启动十年 LSST 巡天：每三至四夜覆盖可见南天，持续生成变化警报；真正的望远镜还包括跨机构计算与数据分发系统。",
        happened:
          "Reuters 7 月 15 日报道，NSF–DOE Vera C. Rubin Observatory 开始执行为期十年的 Legacy Survey of Space and Time。位于 Cerro Pachón 的 8.4 米望远镜搭载 32 亿像素相机，计划每晚拍摄约 1,000 幅图像，并在三至四夜内覆盖整个可见南天。它由 NSF NOIRLab 与美国能源部 SLAC 国家加速器实验室联合运营，目标不是单次拍出最深图像，而是把超新星、近地小行星、变星和遥远星系的变化连接成时间序列。",
        importance:
          "这与前期 β Pictoris d 的“多仪器重查档案”不同：Rubin 把建立档案本身变成十年公共任务。发现速度将取决于相机之外的实时管线、警报代理、开放规则与后续望远镜能否承接海量瞬变。天文学因此也是制度研究：谁资助长期观测，谁能及时获得数据，哪些地区承担设备与能源成本，都会塑造最终被命名的宇宙。",
        creatorAngle:
          "可以把 Rubin 画成三层机器：山顶的光学设备、地下与跨洋的数据管线、全球研究者和后续望远镜组成的响应网络。用“一颗突然变亮的星在 60 秒内如何变成公共警报”为叙事，解释现代发现为什么常由基础设施集体署名。",
        facts: [
          "主镜口径 8.4 米，LSST Camera 达 32 亿像素，重量约 2,800 千克",
          "计划每晚获取约 1,000 幅南天图像，每三至四夜覆盖一次整个可见南天，持续 10 年",
          "首批约 10 小时测试观测已发现 2,104 颗此前未知小行星，其中 7 颗为无威胁的近地小行星",
          "巡天预计记录约 200 亿个星系；首批展示的 1,000 万个星系只约占 0.05%",
        ],
        sourceName: "Reuters；NSF–DOE Vera C. Rubin Observatory",
        sourceUrl: "https://www.reuters.com/science/chiles-rubin-observatory-begins-decade-long-mission-film-universe-2026-07-15/",
        sourceDate: "2026-07-15",
      },
      {
        category: "社会科学 × 教育与知识制度",
        image: "/story-images/uk-shape-cold-spots.jpg",
        imageAlt: "英国地图由校园档案拼成，空椅与断裂的学术阶梯向地域边缘扩散的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释学术岗位流失与地域冷点，并非校园新闻现场影像",
        title: "近四千个岗位消失之后：英国人文社科学科正在形成“知识冷点”",
        summary:
          "British Academy 的新地图显示，早期 SHAPE 学者一年减少 6%，岗位与课程也向少数机构集中；大学削减预算正在改变谁能在家乡附近学习语言、经典与社会工作。",
        happened:
          "British Academy 7 月 15 日发布 Mapping SHAPE Academic Staff 数据与地域分析，追踪 2012/13 至 2024/25 的英国高校人员变化。学院发现，2024/25 年早期职业阶段的 SHAPE 学者同比减少 6%，而高级和教授层级并未同步下降；英格兰东北部与东米德兰兹的早期人员一年降幅接近 20%。Guardian 对官方数据的补充分析显示，截至 2024 年 12 月的一年内，社会科学、人文与艺术合计减少近 4,000 个岗位。",
        importance:
          "裁员不是把每门课平均缩小一点，而会在地图上留下不可逆的空白。学生因生活成本更倾向就近入学时，某地没有神学、古典学或低门槛语言学位，就会把地域差异转化为阶层差异；早期岗位先消失，还会切断下一代教师和研究者的入口。这里的核心不是为所有旧系科免责，而是把“市场需求”拆成谁有能力迁居、哪些技能被工业政策承认、以及知识基础设施需要多长周期才能重建。",
        creatorAngle:
          "可制作一张“知识的铁路停运图”：把课程、早期岗位和地区入口视为站点，标出人员下降与学科集中如何让一些路线只剩高选择性大学可达。再追问：当一个地区最后一门语言或古典学课程关闭，损失能否用全国总招生数字衡量？",
        facts: [
          "2024/25 年早期 SHAPE 学术人员同比下降 6%，从 52,795 个全职等效岗位降至 49,410 个",
          "英格兰东北部与东米德兰兹的早期学术人员一年降幅均接近 20%",
          "截至 2024 年 12 月的一年内，社会科学减少约 3,000 岗、人文学科 820 岗、艺术 240 岗",
          "降幅最大的学科包括社会工作 -9%、英语与古典学各 -8%、人类学 -7%、语言学 -6%",
        ],
        sourceName: "The British Academy（岗位总量补充：The Guardian）",
        sourceUrl: "https://www.thebritishacademy.ac.uk/news/loss-of-academic-staff-threatens-strategically-vital-skills-for-uk/",
        sourceDate: "2026-07-15",
      },
      {
        category: "女性主义 × 健康与政治制度",
        image: "/story-images/idaho-reproductive-ballot.jpg",
        imageAlt: "匿名选民把选票投入投票箱，避孕、孕产照护、生育治疗与隐私路径环绕其外的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释生育自由公投，并非投票现场或真实人物影像",
        title: "爱达荷把生育自由交给选票：一场公投如何重新定义“医疗决定”",
        summary:
          "州务卿确认《Reproductive Freedom and Privacy Act》进入 11 月 3 日选票；它把堕胎、避孕、生育治疗与隐私放入同一项成文法选择。",
        happened:
          "爱达荷州务卿确认《Reproductive Freedom and Privacy Act》达到法定要求，将出现在 2026 年 11 月 3 日州级大选选票上。倡议不是修改州宪法，而是建立一项州法律：在胎儿具有存活能力前保障堕胎权，存活能力后在保护孕妇健康时允许医疗干预，并覆盖避孕、生育治疗、隐私与医疗提供者责任保护。发起方提交超过 100,000 个签名，高于所需的 70,725 个。",
        importance:
          "这一倡议把通常被切割讨论的服务重新放回“生育自主”连续体：避孕、IVF、流产与复杂妊娠照护并不是彼此孤立的文化议题，而共享隐私、临床判断和提供者法律风险。它也显示，在严格禁令州，直接民主既可能成为立法僵局的出口，也会把高度专业的医疗边界压缩进一张赞成/反对选票。与前期政党性别配额不同，这里争夺的是身体与临床决定的法律归属。",
        creatorAngle:
          "可以把公投文本拆成一棵“医疗决定树”：不同孕期、健康风险、避孕与生育治疗分别进入哪条法律路径；旁边再画出签名门槛、18 个立法选区分布要求和最终投票，说明身体自主如何被转换成程序性数字。",
        facts: [
          "投票日为 2026 年 11 月 3 日；州务卿页面已将该倡议标记为 Qualified",
          "发起方收集超过 100,000 个签名，法定总量门槛为 70,725 个",
          "爱达荷要求全州注册选民总数 6% 的有效签名，并在至少 18 个立法选区分别达到 6%",
          "官方修订后的短标题涵盖胎儿存活能力前的堕胎权、存活能力后保护健康、隐私与医疗提供者责任保护",
        ],
        sourceName: "Idaho Secretary of State（背景补充：The Guardian/AP）",
        sourceUrl: "https://voteidaho.gov/initiatives-amendments/",
        sourceDate: "2026-07-13（资格确认；页面核验 2026-07-17）",
      },
    ],
  },
  {
    date: "2026-07-16",
    displayDate: "2026.07.16",
    issueNo: "03",
    theme: "图像、档案与制度：谁被看见，谁承担代价？",
    intro:
      "今天的五个故事都在追问一套看似中性的系统如何分配可见性：工厂壁画替谁想象幸福，建筑绘图怎样给理论装上表情，望远镜档案如何让一颗暗行星现身，气候模型怎样把暴雨从天灾改写为可归责的风险，以及政党用什么规则决定谁能进入可胜选的席位。图像、数据与程序不是事实之外的包装，而是制造公共判断的基础设施。",
    uniqueCount: 5,
    topics: ["艺术人文", "社会科学", "女性主义"],
    stories: [
      {
        category: "艺术人文 × 女性主义 × 劳工史",
        image: "/story-images/munch-freia-frieze.jpg",
        imageAlt: "十二幅田园壁画、女性巧克力工人与可可运输路线组成的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释壁画、劳动与可可供应链，并非作品复制或新闻现场影像",
        title: "蒙克的巧克力工厂壁画：田园幸福画给谁看？",
        summary:
          "MUNCH 博物馆把 Freia 工厂女工食堂里的 12 幅壁画搬进展厅；田园场景背后，是工资差距、女性劳动与殖民可可供应链。",
        happened:
          "奥斯陆 MUNCH 博物馆正在展出 Edvard Munch 受 Freia 巧克力厂委托创作的 12 幅壁画。作品 1922 年获委托、1923 年进入女工食堂，描绘采果、浇花、海滩与休憩；此次因原食堂翻修而外借至 2026 年 10 月 11 日。这是壁画首次在挪威的工厂之外公开展出，也是继 1968 年斯德哥尔摩展出后，整组作品第二次离开工厂。展览同时追溯 Freia 从南美、加勒比到英属殖民地黄金海岸（今加纳）的可可来源。",
        importance:
          "壁画被称为面向工人的公共艺术，但它没有描绘女工的生产、收入或居住条件，而是替她们安排了一套“应当理解”的田园生活。Freia 的福利制度在当时有进步面向，作品价格与女工微薄收入之间的落差却已在 1923 年遭劳工报纸批评。把美术史与供应链、性别分工并置后，公共艺术不再只是善意装饰，而成为谁有权替劳动者想象幸福的问题。",
        creatorAngle:
          "可以制作一张“壁画之外的巧克力”双层地图：上层逐幅分析 12 个田园场景，下层追踪食堂里的女工、80,000 挪威克朗的委托费与跨大西洋可可路线。重点不是给蒙克补一项道德判决，而是比较画面里被安排的闲暇和生产链里真实存在的劳动。",
        facts: [
          "整组 Freia 壁画共 12 幅，1922 年获委托、1923 年安装在奥斯陆工厂女工食堂",
          "Johan Throne Holst 向蒙克支付 80,000 挪威克朗；报道估算相当于今日约 250 万挪威克朗或 19.2 万英镑",
          "整组作品此前只在 1968 年离厂赴斯德哥尔摩展出过一次；本次展至 2026 年 10 月 11 日",
          "Freia 的可可来源先包括南美和加勒比，后来包括当时仍为英国殖民地的加纳",
        ],
        sourceName: "The Guardian（展览与历史资料来自 MUNCH 策展团队）",
        sourceUrl: "https://www.theguardian.com/culture/2026/jul/15/edvard-munch-and-the-chocolate-factory-the-bitter-truth-behind-the-freia-frieze",
        sourceDate: "2026-07-15",
      },
      {
        category: "艺术人文 × 设计与建筑",
        image: "/story-images/vriesendorp-mind-games.jpg",
        imageAlt: "拟人化纽约摩天楼、心理棋盘与废旧包装变成的生物组成的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释建筑拟人、游戏与材料再造，并非原作复制",
        title: "让摩天楼谈恋爱：Madelon Vriesendorp 如何给建筑理论装上表情",
        summary:
          "Sir John Soane’s Museum 为 2025 年 Soane Medal 得主举办大型回顾展：从《Delirious New York》封面到废塑料雕塑，建筑思想被转换成角色、笑话和游戏。",
        happened:
          "《Madelon Vriesendorp: Mind Games》于 7 月 15 日在伦敦 Sir John Soane’s Museum 开幕，展至 9 月 20 日。展览覆盖蚀刻、绘画、书封、首饰、纸上新作与雕塑，并设置可被观众重新排列的放大版 Mind Game。Vriesendorp 1975 年创作《Flagrant Délit》，让 Empire State 与 Chrysler 两座摩天楼成为被撞见的恋人；作品后来成为 1978 年《Delirious New York》的封面。她也是 1975 年 OMA 的四位共同创办人之一。",
        importance:
          "建筑理论常以图纸、术语和大师姓名出现，Vriesendorp 的贡献在于把抽象观点变成可记忆的角色关系：城市不再是理性机器，而是欲望、拥挤、幽默和失控的舞台。新作又把牛奶瓶、蛋盒等包装材料转化为天鹅、怪兽与独裁者，显示她的设计方法不是固定的后现代风格，而是一种不断重命名日常物件的观看训练。",
        creatorAngle:
          "可做一期“谁替建筑理论画表情包”：以《Flagrant Délit》、OMA 早期未建项目和可互动 Mind Game 为三站，解释图像如何让艰深理论进入公共记忆。结尾再把 1970 年代的摩天楼欲望，与今天用废包装造生物的材料政治对照。",
        facts: [
          "展期为 2026 年 7 月 15 日至 9 月 20 日，地点是 Sir John Soane’s Museum",
          "《Flagrant Délit》创作于 1975 年，并成为 1978 年《Delirious New York》的封面图像",
          "Vriesendorp 于 1975 年与 Rem Koolhaas、Elia Zenghelis、Zoe Zenghelis 共同创办 OMA",
          "展览涵盖 50 余件创作或收藏物，包括可供观众重排的 Mind Game 与用塑料瓶、蛋盒制作的新雕塑",
        ],
        sourceName: "Sir John Soane’s Museum（评论补充：The Guardian）",
        sourceUrl: "https://www.soane.org/exhibitions/madelon-vriesendorp-mind-games",
        sourceDate: "2026-07-15（开幕日期）",
      },
      {
        category: "社会科学 × 天文学",
        image: "/story-images/beta-pictoris-d.jpg",
        imageAlt: "韦布望远镜、智利地面望远镜、年轻恒星碎屑盘与三颗行星组成的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于解释多台仪器与档案数据的联合发现，并非天体实拍影像",
        title: "一颗暗行星藏了 11 年：β Pictoris d 是被两套基础设施共同“看见”的",
        summary:
          "两个彼此独立的团队用 JWST 与 VLT 发现同一颗冷气态巨行星；真正的突破不只是新天体，而是光谱匹配、长期档案与地空协同。",
        happened:
          "两个研究团队分别报告 β Pictoris 系统的第三颗确认行星 β Pic d。美国团队在 JWST/NIRSpec 积分视场光谱中偶然识别它，并以第二轮 NIRSpec 与 MIRI 数据确认；欧洲团队则用智利 VLT/ERIS 拍到它，再回查 JWST/NIRCam 与 VLT/SPHERE 的多时期档案，建立 11 年轨迹。两组结果于 7 月 15 日在《Astrophysical Journal Letters》公开；预印本已于 6 月 22 日发布。",
        importance:
          "它与前一期“星际糖”不是同一问题：后者讨论分子在恒星形成前的化学，这里讨论的是一颗行星如何被测量系统从强烈星光和碎屑盘中分离出来。β Pic d 约比系统内另外两颗行星暗 100 倍，说明发现能力不仅来自更大的镜面，也来自光谱模板、跨仪器校准、长期保存的数据和愿意重查旧档案的研究文化。",
        creatorAngle:
          "可以把它做成一场“同一颗行星的两份侦探报告”：左线追踪 JWST 如何用甲烷、一氧化碳和水的光谱指纹找到目标，右线追踪 VLT 如何从 11 年档案拼出轨道。用两组独立证据相遇的时刻，解释可重复发现比单张震撼图像更重要。",
        facts: [
          "β Pictoris 距地球约 63 光年，年龄约 2,000 万年；β Pic d 的公转周期约 91 年",
          "JWST 光谱显示甲烷、一氧化碳与水吸收特征；团队估计质量约为木星的 2—4 倍",
          "另一团队用 VLT/ERIS、JWST/NIRCam 与 VLT/SPHERE 拼出 11 年基线，估计质量为木星的 2.4±0.6 倍、有效温度约 600 K",
          "它约比系统内另外两颗已知行星暗 100 倍；β Pictoris 因此成为第二个拥有三颗以上直接成像行星的系统",
        ],
        sourceName: "Astrophysical Journal Letters 预印本 · Gibbs et al.；Bonse et al.（AP 发布核验）",
        sourceUrl: "https://arxiv.org/abs/2606.23789",
        sourceDate: "2026-07-15（期刊发布；预印本 2026-06-22）",
      },
      {
        category: "社会科学 × 地理学",
        image: "/story-images/west-africa-flood-attribution.jpg",
        imageAlt: "几内亚湾沿岸地图、降雨模型网格、雨量计与城市排水系统组成的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释气候归因与城市排水，并非洪灾现场影像",
        title: "西非洪水不只是“雨太大”：归因科学把排水、数据与责任放进同一张图",
        summary:
          "World Weather Attribution 分析称，人为变暖让 6 月几内亚湾沿岸极端降雨约增至五倍可能；观测、模型和城市基础设施却给出不同尺度的答案。",
        happened:
          "6 月 20 日起的 72 小时内，科特迪瓦、加纳、多哥与尼日利亚沿海人口稠密地区遭遇强降雨，部分城市不到一天超过 140 毫米。World Weather Attribution 比较历史观测与气候模型，集中分析最极端的三天：观测资料显示三日强降雨强度较记录初期增加约 23%，模型给出的变暖增幅约 4%；团队综合判断，此类事件在今日气候中约为工业化前的五倍可能。",
        importance:
          "“五倍可能”并不意味着气候模型能精确复制每个被淹街区。研究者明确指出，全球南方的热带降水仍是模型薄弱区；与此同时，排水能力、湿地损失、非正规住区和预警覆盖决定同一场雨造成多大伤亡。归因科学的价值，是把“百年一遇”从宿命语言改写为可以讨论排放责任、城市投资和国际气候正义的制度问题。",
        creatorAngle:
          "可制作一张“同一场雨的三种地图”：天气图回答雨落在哪里，排水图回答水为何留在城市，责任图回答谁有资源适应。把观测的 23%、模型的 4% 和综合概率约五倍并列，解释不同数字并非互相否定，而是来自不同证据路径。",
        facts: [
          "研究窗口为 2026 年 6 月 20 日起 72 小时，覆盖科特迪瓦、加纳、多哥和尼日利亚沿海",
          "部分城市不到 24 小时降雨超过 140 毫米，城市排水系统被迅速压垮",
          "观测资料显示极端三日降雨强度增加约 23%；气候模型估计人为变暖贡献约 4% 强度增幅",
          "在全球平均升温约 1.4°C 的今日，此类规模降雨约五倍更可能，预计每 2—4 年可再现一次",
        ],
        sourceName: "World Weather Attribution（The Guardian 报道与数据核验）",
        sourceUrl: "https://www.theguardian.com/world/2026/jul/16/how-global-heating-supercharged-floods-west-africa-displacing-thousands",
        sourceDate: "2026-07-16",
      },
      {
        category: "女性主义 × 政治社会学",
        image: "/story-images/australia-gender-quota.jpg",
        imageAlt: "候选人队伍穿过狭窄入口进入澳大利亚议会，并与性别平衡刻度并置的编辑插图",
        imageCredit: "编辑插图 · AI 生成，用于阐释候选人遴选与可胜选席位，并非真实议员或议会现场影像",
        title: "当“择优”遇到可胜选席位：澳大利亚自由党重新争论性别配额",
        summary:
          "一份党内讨论稿把女性配额、开放初选和可胜选席位干预摆上桌面；领袖反对配额，女性高层则要求不要在讨论开始时排除选项。",
        happened:
          "澳大利亚自由党委员会向支持者散发改革讨论稿，提出更新老龄化党员基础、改善与女性、多元文化社群和年轻人的联系，并讨论在可胜选席位采取性别配额、开放初选、女性候选人激励或预选最低比例。党魁 Angus Taylor 7 月 16 日重申从未支持配额；副党魁 Jane Hume 表示草案仍在讨论，所有选项都会被考虑；影子内阁成员 Anne Ruston 则称，以往除配额外的方法未能改变众议院中的女性人数。",
        importance:
          "争论的关键不是“女性是否够优秀”，而是谁定义进入候选池、获得资源和分配可胜选席位的程序。2025 年大选后，女性已占澳大利亚议会近半，但自由党在众议院 28 席中只有 6 名女性；全国接近性别平衡，不能自动消除单一政党内部的入口瓶颈。“择优”如果只评价终点人物，却不检查候选人被放在哪些席位，就会隐藏制度本身的选择。",
        creatorAngle:
          "可画一条“从党员到议员”的漏斗：党员构成、提名、预选、资源投入、席位安全度和当选逐层比较。再把配额、开放初选、候选人激励三种工具放入漏斗，问它们分别改变哪一层，而不是把整场讨论压缩成支持或反对配额。",
        facts: [
          "党内讨论稿称女性约占自由党党员 21%、党内联邦议员约 33%",
          "2025 年大选后，女性占澳大利亚联邦议会席位约 49.6%，并占参议院约 56.6%",
          "自由党在 2025 年众议院赢得 28 席，其中女性 6 人，占约 21.4%",
          "草案列出的工具包括可胜选席位配额、开放初选、女性候选人激励和预选最低比例；党内领导层意见公开分裂",
        ],
        sourceName: "The Guardian Australia（议会构成数据由 Australian Parliament 公开名单交叉核验）",
        sourceUrl: "https://www.theguardian.com/australia-news/2026/jul/16/liberal-party-gender-quotas-angus-taylor-response",
        sourceDate: "2026-07-16",
      },
    ],
  },
  {
    date: "2026-07-15",
    displayDate: "2026.07.15",
    issueNo: "02",
    theme: "谁在移动历史、管理注意力，又为照护系统留下资源？",
    intro:
      "今天的五个故事从一件跨海而来的中世纪刺绣开始，经过一场把观众权力重新放上舞台的行为艺术、一种在星际云中出现的四碳糖、一次限制青少年社交媒体的现实试验，抵达正在被援助削减掏空的女性组织。它们共同提醒我们：文化遗产、科学发现、注意力与照护从来不是孤立对象，而是由运输、仪器、规则、资金和人的选择共同维系的基础设施。",
    uniqueCount: 5,
    topics: ["艺术人文", "社会科学", "女性主义"],
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
        category: "社会科学 × 天文学",
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
    topics: ["艺术人文", "社会科学", "女性主义"],
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
