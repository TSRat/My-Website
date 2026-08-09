"use client";

import {
  useEffect,
  useMemo,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import Image from "next/image";

const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";

function publicAsset(path: string) {
  return `${siteBasePath}${path}`;
}

type Chapter = {
  kicker: string;
  title: string;
  time: string;
  happened: string;
  changed: string;
  question: string;
};

const chapters: Chapter[] = [
  {
    kicker: "01 · 先认识这本书",
    title: "一部没有传统冒险的日记小说",
    time: "约 1 分钟",
    happened:
      "1932 年冬天，独居在虚构海港 Bouville 的 Antoine Roquentin 开始写日记。他原本在研究十八世纪人物 Marquis de Rollebon，却发现日常物体、自己的身体和他人的脸逐渐变得陌生。",
    changed:
      "小说的事件不靠悬念推进，而靠感知逐步失效推进：熟悉的名称仍在，东西却不再安稳地服从这些名称。",
    question: "如果桌子不再只是“供人使用的桌子”，你首先会注意到什么？",
  },
  {
    kicker: "02 · 最初的裂缝",
    title: "石子、咖啡馆与一只自己的手",
    time: "约 1 分钟",
    happened:
      "最初的恶心并没有宏大原因。Roquentin 在海边无法自然地拿起石子，在咖啡馆凝视物体，也把自己的手看成一团陌生的肉。物体的用途和身体的归属感开始松动。",
    changed:
      "“恶心”首先是一种感官事件：解释来得太晚，物体已经以黏、重、软、过量的方式逼近他。",
    question: "恐惧通常指向危险；恶心为什么可以没有明确的危险对象？",
  },
  {
    kicker: "03 · 历史的失败",
    title: "Rollebon 无法替他活着",
    time: "约 1 分钟",
    happened:
      "Roquentin 一直试图用档案重建 Rollebon 的人生，但证据无法自动拼成一个必然的故事。他意识到，自己也在借这个死者逃避当下的空洞。于是他放弃了研究。",
    changed:
      "过去并非天然带着情节。历史叙事需要当下的人选择、排列和解释材料；它不能为研究者本人提供现成的存在理由。",
    question: "“事情发生过”与“事情构成一个有意义的故事”之间差了什么？",
  },
  {
    kicker: "04 · 关系的失败",
    title: "Anny 与“完美时刻”的破灭",
    time: "约 1 分钟",
    happened:
      "Roquentin 曾把希望放在旧爱 Anny 身上。Anny 过去相信，可以从某些“优越情境”中创造完美时刻；重逢时，她却说自己已不再相信这套计划。两人无法回到过去。",
    changed:
      "爱情和回忆也不能把零散时刻自动组织成命定情节。Roquentin 失去的不只是伴侣，更是一种把人生当作戏剧来安排的幻想。",
    question: "当两个人共享的过去还在，却不再导向共同未来，过去还意味着什么？",
  },
  {
    kicker: "05 · 核心场景",
    title: "公园里的栗树根",
    time: "约 2 分钟",
    happened:
      "Roquentin 凝视栗树根时，“树根”这个名称、植物学分类和日常用途都暂时失效。他感到面前的东西只是顽固地存在着，没有理由必须如此，也没有理由必须存在。",
    changed:
      "他终于理解恶心的来源：不是世界缺少某个可以补上的答案，而是存在本身没有预先保证的必要性。这就是小说中的偶然性。",
    question: "“没有原因”与“我暂时不知道原因”是同一件事吗？",
  },
  {
    kicker: "06 · 开放的结尾",
    title: "一首歌与一本尚未写出的小说",
    time: "约 2 分钟",
    happened:
      "临别 Bouville 时，Roquentin 再次听到唱片《Some of These Days》。旋律的结构与现实物体的多余形成对照。他设想写一部小说，让某种完成后的形式反过来照亮自己的生活。",
    changed:
      "这不是痊愈证明。艺术没有取消现实的偶然，只展示了人能够选择形式、制造联系，并向未来投出一个计划。结尾因此既有希望，也保留疑问。",
    question: "艺术是在赋予生活意义，还是暂时把生活转换成另一种对象？",
  },
];

const mapPlaces = [
  {
    name: "海边",
    short: "石子拒绝成为普通石子",
    detail:
      "最初的异样来自触觉。石子的湿、硬与重量压过了“可以随手捡起的小东西”这个用途，日常世界第一次出现裂缝。",
    x: "18%",
    y: "68%",
  },
  {
    name: "咖啡馆",
    short: "物体和身体变得过于靠近",
    detail:
      "Roquentin 常在咖啡馆观察杯子、吊带、手和他人的脸。熟悉的轮廓并未消失，但它们不再自动组成一个舒适的人类世界。",
    x: "44%",
    y: "44%",
  },
  {
    name: "图书馆",
    short: "历史、人文主义与人的抽象观念",
    detail:
      "他在这里查阅 Rollebon 的材料，也遇见按字母顺序读书的“自学者”。图书馆把知识排列得井然有序，却没有解决具体的人如何存在。",
    x: "67%",
    y: "31%",
  },
  {
    name: "博物馆",
    short: "Bouville 的体面人物凝固成肖像",
    detail:
      "市民肖像把偶然的人生包装成仿佛天生正当的身份。Roquentin 看到的是资产阶级如何用姿态、名望和图像制造必要性。",
    x: "77%",
    y: "62%",
  },
  {
    name: "公园",
    short: "栗树根揭示偶然性",
    detail:
      "核心认识不是“树根很丑”，而是任何名称都无法使它必然存在。感官不再替概念让路，存在显得浓重、过量而没有根据。",
    x: "55%",
    y: "75%",
  },
];

const nauseaMoments = [
  {
    n: "01",
    object: "石子",
    place: "海边",
    before: "可捡起、可投掷、属于风景的小物件",
    after: "湿、沉、贴着皮肤，无法被用途完全吸收",
    meaning: "恶心先于概念出现。Roquentin 尚不知道发生了什么，只知道习惯不再替他过滤感官。",
  },
  {
    n: "02",
    object: "自己的手",
    place: "咖啡馆",
    before: "“我的”身体，服从意志的工具",
    after: "有皮肤、肉和动作的陌生物，像独自在桌面上活着",
    meaning: "陌生的不只是外物。身体既是我，又是世界中的物；这种双重位置令主体的安全感动摇。",
  },
  {
    n: "03",
    object: "Rollebon",
    place: "档案馆",
    before: "等待被还原的完整人生，Roquentin 的使命",
    after: "彼此矛盾的纸页，以及由研究者强行维系的故事",
    meaning: "历史不再提供必然的因果链。放弃传记，也是 Roquentin 承认自己不能靠过去替当下辩护。",
  },
  {
    n: "04",
    object: "栗树根",
    place: "公园",
    before: "一种植物的组成部分，可以被命名和分类",
    after: "没有理由地挤在那里，粗糙、黏重、不可化约",
    meaning: "偶然性不是随机小概率，而是“本可以不这样、本可以不存在，却已经在这里”。",
  },
  {
    n: "05",
    object: "唱片",
    place: "铁路咖啡馆",
    before: "反复播放的旧流行歌曲",
    after: "每个音等待下一个音，组成似乎不可增删的整体",
    meaning: "艺术形式与现实存在形成反差，让 Roquentin 想象一个面向未来的写作计划，但并未抹去偶然性。",
  },
];

const characters = [
  {
    name: "Antoine Roquentin",
    label: "观察者／日记作者",
    role:
      "三十岁左右、靠收入生活的旅行者与历史研究者。他并不是 Sartre 的透明代言人：他的洞见、孤独、傲慢与局限必须一起阅读。",
    wants: "想让 Rollebon 的过去成为完整故事，也想知道恶心究竟是什么。",
    loses: "研究使命、与 Anny 复合的希望，以及世界天然有秩序的确信。",
    reveals: "概念如何从感知中脱落；自由为何首先以失去借口的形式出现。",
  },
  {
    name: "Marquis de Rollebon",
    label: "档案中的缺席者",
    role:
      "虚构的十八世纪人物，从未直接出场，只通过相互冲突的材料出现。他越像一个可写的传记人物，越暴露叙事选择的力量。",
    wants: "他没有可被确认的“意图”；我们只看到 Roquentin 试图替材料建立意图。",
    loses: "作为完整历史人格的幻觉。",
    reveals: "事实不会自行排列成故事；过去也不能替现在的人提供存在根据。",
  },
  {
    name: "Anny",
    label: "旧爱／完美时刻的导演",
    role:
      "她过去试图把生活布置成戏剧：从“优越情境”中创造“完美时刻”。重逢时，她已经放弃这一计划。",
    wants: "曾想让偶然情境服从审美形式，后来只想承认这种工程已经失败。",
    loses: "生活可以被表演和回忆固定下来的信念。",
    reveals: "人与人的共同记忆并不保证共同未来；她不是等待主角拯救的象征。",
  },
  {
    name: "自学者（Autodidact）",
    label: "知识秩序与抽象人类之爱",
    role:
      "他在图书馆按字母顺序阅读藏书，信奉社会主义与人文主义。他真诚、可笑、孤独，也在图书馆试图性接触一名年少读者，随即遭馆员殴打并驱逐。",
    wants: "通过“读完一切”和爱全人类，获得确定的伦理位置。",
    loses: "图书馆中的体面身份与 Roquentin 对他的有限同情。",
    reveals: "爱抽象的“人类”不等于能够面对具体的人；秩序、善意与伤害也可能共存。",
  },
];

const quizItems = [
  {
    statement: "“恶心”主要是 Roquentin 的胃病或临床诊断。",
    answer: false,
    explain:
      "小说保留了身体与心理层面，但把恶心写成一种揭示存在偶然性的感官经验。把它只诊断为疾病，会漏掉作品主动建构的形而上维度。",
  },
  {
    statement: "小说已经完整论证了“存在先于本质”这句口号。",
    answer: false,
    explain:
      "《恶心》戏剧化地准备了这一思想，但著名表述来自 Sartre 1945 年的演讲。阅读时应先看小说怎样让概念从经验中长出来。",
  },
  {
    statement: "栗树根场景揭示：事物存在，却没有必须如此存在的先验理由。",
    answer: true,
    explain:
      "这正是偶然性的核心。它不是“万事都很随机”，而是任何现存之物都没有从自身获得绝对必要性。",
  },
  {
    statement: "结尾证明艺术彻底治愈了 Roquentin。",
    answer: false,
    explain:
      "结尾只是打开一个项目：他也许能写出作品，让完成后的形式照亮生活。计划尚未实现，艺术与现实的关系仍有争议。",
  },
];

const routes = [
  {
    time: "20 分钟",
    title: "先抓住故事骨架",
    audience: "第一次接触 Sartre",
    steps: ["完成 6 章导读", "浏览五个恶心时刻", "做完误解辨析"],
    result: "能复述小说发生了什么，并准确解释“偶然性”。",
  },
  {
    time: "45 分钟",
    title: "从感官进入哲学",
    audience: "准备开始读原著",
    steps: ["完成感知实验", "探索 Bouville 地图", "比较小说层与后期理论层", "记录一个观察问题"],
    result: "能在阅读时辨认物体、身体、历史和艺术四条线索。",
  },
  {
    time: "90 分钟",
    title: "建立可继续研究的框架",
    audience: "读完后做复盘",
    steps: ["重建五场关键转变", "逐一查看人物功能", "检查四个常见误读", "阅读方法与延伸资料"],
    result: "能区分小说文本、后来的 Sartre 哲学与二手阐释。",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleTabKey(
  event: ReactKeyboardEvent<HTMLButtonElement>,
  index: number,
  count: number,
  setActive: (nextIndex: number) => void,
  idPrefix: string,
) {
  let nextIndex = index;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    nextIndex = (index + 1) % count;
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    nextIndex = (index - 1 + count) % count;
  } else if (event.key === "Home") {
    nextIndex = 0;
  } else if (event.key === "End") {
    nextIndex = count - 1;
  } else {
    return;
  }

  event.preventDefault();
  setActive(nextIndex);
  document.getElementById(`${idPrefix}-tab-${nextIndex}`)?.focus();
}

export default function Home() {
  const [guideOpen, setGuideOpen] = useState(false);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [activePlace, setActivePlace] = useState(4);
  const [activeMoment, setActiveMoment] = useState(0);
  const [labelsOff, setLabelsOff] = useState(false);
  const [activeCharacter, setActiveCharacter] = useState(0);
  const [conceptLayer, setConceptLayer] = useState<"novel" | "later">("novel");
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [activeRoute, setActiveRoute] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const saved = Number(window.localStorage.getItem("nausea-guide-progress") ?? 0);
      if (Number.isFinite(saved)) setCompleted(Math.min(6, Math.max(0, saved)));
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!guideOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGuideOpen(false);
      if (event.key === "ArrowRight") setChapterIndex((value) => Math.min(5, value + 1));
      if (event.key === "ArrowLeft") setChapterIndex((value) => Math.max(0, value - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [guideOpen]);

  const quizScore = useMemo(
    () =>
      quizItems.reduce(
        (score, item, index) => score + (answers[index] === item.answer ? 1 : 0),
        0,
      ),
    [answers],
  );

  const openGuide = (index = Math.min(completed, 5)) => {
    setChapterIndex(index);
    setGuideOpen(true);
  };

  const finishChapter = () => {
    const nextCompleted = Math.max(completed, chapterIndex + 1);
    setCompleted(nextCompleted);
    window.localStorage.setItem("nausea-guide-progress", String(nextCompleted));
    if (chapterIndex < 5) setChapterIndex(chapterIndex + 1);
    else setGuideOpen(false);
  };

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <header className="site-header">
        <button className="brand" onClick={() => navigate("top")} aria-label="返回页面顶部">
          《恶心》入门
        </button>
        <button
          className="menu-button"
          aria-label={menuOpen ? "关闭导航" : "打开导航"}
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "关闭" : "目录"}
        </button>
        <nav id="site-navigation" className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="章节导航">
          <button onClick={() => navigate("story")}>故事</button>
          <button onClick={() => navigate("moments")}>恶心时刻</button>
          <button onClick={() => navigate("philosophy")}>哲学</button>
          <button onClick={() => navigate("experiment")}>阅读实验</button>
          <button onClick={() => navigate("routes")}>路线图</button>
        </nav>
      </header>

      <main id="main-content">
      <section className="hero section-shell" id="top">
        <aside className="margin-index" aria-hidden="true">
          <span>笔记本 · 读书者的现场</span>
          <b>01</b>
        </aside>
        <div className="hero-copy">
          <p className="eyebrow">1938 · Jean-Paul Sartre</p>
          <h1>当世界不再<br />替你解释自己</h1>
          <p className="hero-lede">
            这不是一本“悲观小说”，而是一场关于<strong>存在、偶然与自由</strong>的感官实验。
          </p>
          <div className="hero-actions">
            <button className="button primary" onClick={() => openGuide()}>
              {completed ? "继续 8 分钟导读" : "开始 8 分钟导读"}<span aria-hidden="true">→</span>
            </button>
            <button className="button secondary" onClick={() => scrollToId("philosophy")}>查看概念地图</button>
          </div>
          <div className="chapter-progress" aria-label={`导读进度 ${completed}/6`}>
            <div className="progress-label"><strong>{completed}/6</strong><span>导读章节</span></div>
            <div className="progress-nodes">
              {chapters.map((chapter, index) => (
                <button
                  key={chapter.title}
                  className={index < completed ? "done" : index === completed ? "current" : ""}
                  aria-label={`打开第 ${index + 1} 章：${chapter.title}`}
                  title={chapter.title}
                  onClick={() => openGuide(index)}
                ><span /></button>
              ))}
            </div>
          </div>
        </div>

        <div className="evidence-board" aria-label="Bouville 阅读证据板">
          <div className="board-tab">证据板 <b>01</b></div>
          <span className="paperclip" aria-hidden="true">⌇</span>
          <div className="hero-map">
            <div className="map-heading">Bouville 简图</div>
            <div className="map-lines" aria-hidden="true" />
            <button
              className="hero-pin"
              aria-label="跳转到 Bouville 场景地图"
              onClick={() => scrollToId("story")}
            ><span /></button>
            <p><b>01</b> 小说虚构城市，<br />临海，雾气常在。</p>
          </div>
          <button className="taped-note" onClick={() => setLabelsOff(true)}>
            存在先于解释
          </button>
          <div className="mini-timeline" aria-label="作品形成时间线">
            <div><b>1931–36</b><span>三次改写</span></div>
            <i />
            <div className="timeline-focus"><b>1938</b><span>《恶心》出版</span></div>
            <i />
            <div><b>1943</b><span>《存在与虚无》</span></div>
          </div>
          <figure className="root-photo">
            <Image
              src={publicAsset("/chestnut-root.png")}
              alt="雨后公园里裸露、湿润的栗树根"
              fill
              sizes="(max-width: 780px) 100vw, 55vw"
              priority
              unoptimized
            />
            <figcaption><b>03</b> 公园的栗树根：名称退后，物体逼近。</figcaption>
          </figure>
        </div>
      </section>

      <section className="entry-strip" aria-labelledby="entry-title">
        <div className="section-shell">
          <div className="strip-heading">
            <span>入口</span>
            <h2 id="entry-title">从哪里进入《恶心》？</h2>
            <span>索引</span>
          </div>
          <div className="entry-cards">
            {[
              ["01", "故事梗概", "5 分钟把握情节脉络", "story"],
              ["02", "恶心时刻", "5 个场景，感受“恶心”的来临", "moments"],
              ["03", "核心概念", "存在、偶然与自由如何交织", "philosophy"],
              ["04", "阅读实验", "亲自体验感知如何偏移", "experiment"],
              ["05", "延伸地图", "关联作品与思想脉络", "routes"],
            ].map(([number, title, text, id]) => (
              <button key={number} className="entry-card" onClick={() => scrollToId(id)}>
                <span>{number}</span><b>{title}</b><small>{text}</small><i aria-hidden="true">↗</i>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-shell" id="story">
        <div className="section-heading">
          <p className="section-number">01 / 故事</p>
          <h2>先别急着学哲学：<br />Roquentin 到底经历了什么？</h2>
          <p>情节不是概念的包装。先沿着人物、地点和失去的东西前进，哲学会在故事中自己显形。</p>
        </div>

        <div className="story-grid">
          <article className="story-summary paper-card">
            <div className="card-label">故事骨架 · 1932 年冬</div>
            <p>
              Antoine Roquentin 在 Bouville 研究 Marquis de Rollebon。他没有工作压力，也很少与人建立关系；当“冒险”“历史”和“爱情”先后失去组织生活的能力，他开始直接暴露在日常存在面前。
            </p>
            <ol>
              <li><b>记录异样</b><span>石子、手、脸与声音变得陌生。</span></li>
              <li><b>放弃历史</b><span>档案无法证明 Rollebon 必须成为某种人。</span></li>
              <li><b>告别过去</b><span>Anny 不再相信能制造“完美时刻”。</span></li>
              <li><b>看见偶然</b><span>栗树根让他理解恶心一直揭示的东西。</span></li>
              <li><b>投向作品</b><span>他设想写小说，但未来仍未被保证。</span></li>
            </ol>
            <button className="text-link" onClick={() => openGuide(0)}>打开完整 6 章导读 <span>→</span></button>
          </article>

          <article className="bouville-panel paper-card">
            <div className="card-label">互动地图 · 点击地点</div>
            <div className="bouville-map" aria-label="Bouville 场景地图">
              <div className="coast" aria-hidden="true" />
              <div className="street-grid" aria-hidden="true" />
              {mapPlaces.map((place, index) => (
                <button
                  key={place.name}
                  style={{ left: place.x, top: place.y }}
                  className={activePlace === index ? "place-pin active" : "place-pin"}
                  onClick={() => setActivePlace(index)}
                  aria-label={`查看${place.name}场景`}
                ><span>{index + 1}</span><b>{place.name}</b></button>
              ))}
            </div>
            <div className="place-note" aria-live="polite">
              <span>地点 {String(activePlace + 1).padStart(2, "0")}</span>
              <h3>{mapPlaces[activePlace].name}：{mapPlaces[activePlace].short}</h3>
              <p>{mapPlaces[activePlace].detail}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section moments-section" id="moments">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div><p className="section-number">02 / 恶心时刻</p><h2>“恶心”如何一步步<br />从不适变成认识？</h2></div>
            <p>点击五个对象，比较它们在习惯世界中是什么，以及当习惯失效后变成了什么。</p>
          </div>

          <div className="moment-workbench">
            <div className="moment-rail" role="tablist" aria-label="五个恶心时刻">
              {nauseaMoments.map((moment, index) => (
                <button
                  key={moment.object}
                  id={`moment-tab-${index}`}
                  role="tab"
                  aria-selected={activeMoment === index}
                  aria-controls={`moment-panel-${index}`}
                  tabIndex={activeMoment === index ? 0 : -1}
                  className={activeMoment === index ? "active" : ""}
                  onClick={() => setActiveMoment(index)}
                  onKeyDown={(event) => handleTabKey(event, index, nauseaMoments.length, setActiveMoment, "moment")}
                ><span>{moment.n}</span><b>{moment.object}</b><small>{moment.place}</small></button>
              ))}
            </div>
            {nauseaMoments.map((moment, index) => (
              <div
                className="moment-detail"
                id={`moment-panel-${index}`}
                key={moment.object}
                role="tabpanel"
                aria-labelledby={`moment-tab-${index}`}
                tabIndex={0}
                hidden={activeMoment !== index}
              >
                <div className="object-stamp"><span>观察对象</span><b>{moment.object}</b></div>
                <div className="before-after">
                  <div><span>习惯仍有效时</span><p>{moment.before}</p></div>
                  <i aria-hidden="true">→</i>
                  <div><span>解释突然退后时</span><p>{moment.after}</p></div>
                </div>
                <aside><b>这一刻推进了什么？</b><p>{moment.meaning}</p></aside>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-shell" id="experiment">
        <div className="section-heading split-heading">
          <div><p className="section-number">03 / 阅读实验</p><h2>试着把名称<br />从物体上拿开</h2></div>
          <p>这不是要复制 Roquentin 的感受，而是理解小说如何让语言与感知暂时错位。</p>
        </div>

        <div className={labelsOff ? "perception-lab labels-off" : "perception-lab"}>
          <div className="lab-toolbar">
            <div><span>感知模式</span><b>{labelsOff ? "裸露的在场" : "日常用途"}</b></div>
            <button onClick={() => setLabelsOff(!labelsOff)} aria-pressed={labelsOff}>
              <span>{labelsOff ? "恢复名称" : "移除名称"}</span><i aria-hidden="true" />
            </button>
          </div>
          <div className="object-grid">
            {[
              ["杯子", "盛水的器具", "冷硬的弧面，边缘顶着光"],
              ["手", "我用来行动的身体", "皮肤、褶皱、重量与不受注视控制的细动"],
              ["树根", "固定植物的结构", "黑湿的隆起，向泥土里挤压并延伸"],
              ["椅子", "供人坐下的家具", "四条支撑与一块承受身体的平面"],
            ].map(([name, use, presence], index) => (
              <article className={`lab-object object-${index + 1}`} key={name}>
                <div className="object-shape" aria-hidden="true"><span /></div>
                <small>{labelsOff ? `样本 0${index + 1}` : name}</small>
                <h3>{labelsOff ? presence : use}</h3>
                <p>{labelsOff ? "名称没有消灭物体，但它平时替我们省略了这些细节。" : `“${name}”让复杂感官迅速收束为一个可使用的对象。`}</p>
              </article>
            ))}
          </div>
          <div className="lab-conclusion">
            <b>{labelsOff ? "你刚刚靠近了小说的技术" : "先观察日常模式"}</b>
            <p>{labelsOff
              ? "Sartre 没有证明语言是假的。他让我们注意：名称与用途只是人与世界建立关系的一层；当这一层变薄，物体会显得过量。"
              : "我们通常先认出“它是什么、能做什么”，然后自动忽略重量、质地、边缘和偶然形状。点击开关，看描述如何改变。"}</p>
          </div>
        </div>
      </section>

      <section className="content-section characters-section">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div><p className="section-number">04 / 人物</p><h2>他们不是概念的<br />纸板代言人</h2></div>
            <p>每个人都在尝试为生活建立形式，也都在某处失败。理解他们的具体处境，才能理解小说的复杂性。</p>
          </div>
          <div className="character-desk">
            <div className="character-tabs" role="tablist" aria-label="人物选择">
              {characters.map((character, index) => (
                <button
                  key={character.name}
                  id={`character-tab-${index}`}
                  role="tab"
                  aria-selected={activeCharacter === index}
                  aria-controls={`character-panel-${index}`}
                  tabIndex={activeCharacter === index ? 0 : -1}
                  className={activeCharacter === index ? "active" : ""}
                  onClick={() => setActiveCharacter(index)}
                  onKeyDown={(event) => handleTabKey(event, index, characters.length, setActiveCharacter, "character")}
                ><span>0{index + 1}</span><b>{character.name}</b><small>{character.label}</small></button>
              ))}
            </div>
            {characters.map((character, index) => (
              <article
                className="character-file"
                id={`character-panel-${index}`}
                key={character.name}
                role="tabpanel"
                aria-labelledby={`character-tab-${index}`}
                tabIndex={0}
                hidden={activeCharacter !== index}
              >
                <div className="file-topline"><span>人物档案 0{index + 1}</span><i>BOUVILLE / 1932</i></div>
                <h3>{character.name}</h3>
                <p className="character-role">{character.role}</p>
                <div className="character-facts">
                  <div><span>TA 试图抓住什么</span><p>{character.wants}</p></div>
                  <div><span>TA 最终失去什么</span><p>{character.loses}</p></div>
                  <div><span>TA 让作品显出什么</span><p>{character.reveals}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-shell" id="philosophy">
        <div className="section-heading split-heading">
          <div><p className="section-number">05 / 哲学</p><h2>从一次感官震动<br />到一张概念地图</h2></div>
          <p>先看 1938 年小说实际呈现了什么，再切换到 1943 年以后更系统的概念。两层相关，但不能倒过来混成一层。</p>
        </div>

        <div className="concept-switcher">
          <div className="layer-tabs" role="tablist" aria-label="哲学层次">
            <button
              id="concept-tab-0"
              className={conceptLayer === "novel" ? "active" : ""}
              onClick={() => setConceptLayer("novel")}
              onKeyDown={(event) => handleTabKey(event, 0, 2, (index) => setConceptLayer(index === 0 ? "novel" : "later"), "concept")}
              role="tab"
              aria-selected={conceptLayer === "novel"}
              aria-controls="concept-panel-0"
              tabIndex={conceptLayer === "novel" ? 0 : -1}
            >
              <span>1938</span><b>小说经验层</b><small>《恶心》直接写出的东西</small>
            </button>
            <button
              id="concept-tab-1"
              className={conceptLayer === "later" ? "active" : ""}
              onClick={() => setConceptLayer("later")}
              onKeyDown={(event) => handleTabKey(event, 1, 2, (index) => setConceptLayer(index === 0 ? "novel" : "later"), "concept")}
              role="tab"
              aria-selected={conceptLayer === "later"}
              aria-controls="concept-panel-1"
              tabIndex={conceptLayer === "later" ? 0 : -1}
            >
              <span>1943–45</span><b>后期理论层</b><small>后来才系统化的语言</small>
            </button>
          </div>

            <div
              className="concept-map"
              id="concept-panel-0"
              role="tabpanel"
              aria-labelledby="concept-tab-0"
              tabIndex={0}
              hidden={conceptLayer !== "novel"}
            >
              <div className="concept-card start"><span>① 日常过滤失效</span><h3>名称与用途退后</h3><p>石子不再只是石子，手不再只是“我的工具”。</p></div>
              <i className="connector">→</i>
              <div className="concept-card key"><span>② 存在显露</span><h3>偶然性</h3><p>事物存在，却没有一个先验理由保证它必须这样存在。</p></div>
              <i className="connector">→</i>
              <div className="concept-card"><span>③ 人的反应</span><h3>恶心</h3><p>这不是结论，而是身体面对“无根据的存在”时的体验。</p></div>
              <i className="connector">→</i>
              <div className="concept-card end"><span>④ 尚未完成的出口</span><h3>艺术计划</h3><p>以选择和形式回应偶然，而不是证明偶然已经消失。</p></div>
            </div>
            <div
              className="later-grid"
              id="concept-panel-1"
              role="tabpanel"
              aria-labelledby="concept-tab-1"
              tabIndex={0}
              hidden={conceptLayer !== "later"}
            >
              <article><span>自在存在 · being-in-itself</span><h3>物只是它所是</h3><p>后来 Sartre 用它描述对象饱满、不作选择的存在方式。栗树根可帮助我们直观靠近它，但小说没有把场景写成术语定义。</p></article>
              <article><span>自为存在 · being-for-itself</span><h3>意识总越出当前状态</h3><p>人能否定、想象和投向尚未实现的可能。因此人不是像物一样固定完成的东西。</p></article>
              <article><span>自由 · freedom</span><h3>不是随心所欲</h3><p>自由首先意味着没有预先写好的本质替我选择；它始终发生在已经给定的处境之中，并伴随责任。</p></article>
              <article><span>自欺 · bad faith</span><h3>把自己假装成固定的物</h3><p>人可能躲进职业、身份或过去，仿佛“我只能如此”。这是《存在与虚无》的系统主题，不应硬贴给每个小说人物。</p></article>
            </div>
        </div>

        <aside className="reading-boundary">
          <span>重要边界</span>
          <p><b>《恶心》不是一本配图版哲学教材。</b>它让读者先感到物体、身体、时间和叙事发生了什么，再允许概念出现。用后来的理论解释它有帮助，但不能抹掉作品中的犹疑、讽刺和未解决问题。</p>
        </aside>
      </section>

      <section className="content-section quiz-section">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div><p className="section-number">06 / 误解辨析</p><h2>四个判断，检查你<br />有没有读得太快</h2></div>
            <p>先选择“对”或“不对”，答案会立刻说明错在哪里。全部作答后得到结果。</p>
          </div>
          <div className="quiz-layout">
            <div className="quiz-list">
              {quizItems.map((item, index) => {
                const answered = index in answers;
                const correct = answered && answers[index] === item.answer;
                return (
                  <article className={answered ? (correct ? "quiz-card correct" : "quiz-card wrong") : "quiz-card"} key={item.statement}>
                    <div className="quiz-question"><span>0{index + 1}</span><h3>{item.statement}</h3></div>
                    <div className="quiz-actions">
                      <button onClick={() => setAnswers({ ...answers, [index]: true })} aria-pressed={answers[index] === true}>对</button>
                      <button onClick={() => setAnswers({ ...answers, [index]: false })} aria-pressed={answers[index] === false}>不对</button>
                    </div>
                    {answered && <p className="quiz-feedback"><b>{correct ? "判断准确。" : "再想一步。"}</b>{item.explain}</p>}
                  </article>
                );
              })}
            </div>
            <aside className="score-card">
              <span>理解校准</span>
              <strong>{Object.keys(answers).length === 4 ? quizScore : Object.keys(answers).length}<small>/4</small></strong>
              <p>{Object.keys(answers).length < 4
                ? `还剩 ${4 - Object.keys(answers).length} 题。重点不是记答案，而是分清小说、诊断和后期理论。`
                : quizScore === 4
                  ? "你已经抓住关键边界：体验不等于诊断，启发不等于完整理论，希望也不等于痊愈。"
                  : "回看有颜色标记的题目；每个误读都来自把作品中的开放问题过早关闭。"}</p>
              {Object.keys(answers).length === 4 && <button onClick={() => setAnswers({})}>重新作答</button>}
            </aside>
          </div>
        </div>
      </section>

      <section className="content-section section-shell" id="routes">
        <div className="section-heading split-heading">
          <div><p className="section-number">07 / 路线图</p><h2>按你的时间<br />选择下一步</h2></div>
          <p>这份网站不是阅读的替代品，而是一张进入原著、复盘原著和继续研究的地图。</p>
        </div>
        <div className="route-picker">
          <div className="route-tabs" role="tablist" aria-label="学习时长选择">
            {routes.map((route, index) => (
              <button
                key={route.time}
                id={`route-tab-${index}`}
                className={activeRoute === index ? "active" : ""}
                onClick={() => setActiveRoute(index)}
                onKeyDown={(event) => handleTabKey(event, index, routes.length, setActiveRoute, "route")}
                role="tab"
                aria-selected={activeRoute === index}
                aria-controls={`route-panel-${index}`}
                tabIndex={activeRoute === index ? 0 : -1}
              >
                <span>{route.time}</span><b>{route.title}</b><small>{route.audience}</small>
              </button>
            ))}
          </div>
          {routes.map((route, index) => (
            <article
              className="route-plan"
              id={`route-panel-${index}`}
              key={route.time}
              role="tabpanel"
              aria-labelledby={`route-tab-${index}`}
              tabIndex={0}
              hidden={activeRoute !== index}
            >
              <div className="route-time">{route.time}<span>建议路线</span></div>
              <div>
                <h3>{route.title}</h3>
                <ol>{route.steps.map((step, stepIndex) => <li key={step}><span>{stepIndex + 1}</span>{step}</li>)}</ol>
                <p><b>完成后：</b>{route.result}</p>
              </div>
              <button className="button primary" onClick={() => index === 0 ? openGuide() : scrollToId(index === 1 ? "experiment" : "moments")}>从这里开始 <span>→</span></button>
            </article>
          ))}
        </div>

        <div className="reading-method">
          <div className="method-heading"><span>阅读方法卡</span><h3>遇到难懂段落，按这个顺序拆</h3></div>
          <div className="method-steps">
            <div><b>1</b><span>发生了什么？</span><p>先写人物、地点、动作，不急着翻译成哲学。</p></div>
            <div><b>2</b><span>感官怎么变了？</span><p>注意颜色、触感、重量、声音与身体反应。</p></div>
            <div><b>3</b><span>哪层解释失效？</span><p>用途、身份、历史、爱情还是社会体面？</p></div>
            <div><b>4</b><span>人物做了什么？</span><p>作品关心的不是只看见虚无，而是如何回应。</p></div>
          </div>
        </div>
      </section>

      <section className="content-section sources-section">
        <div className="section-shell sources-grid">
          <div>
            <p className="section-number">08 / 资料与边界</p>
            <h2>这份入门依据什么？</h2>
            <p>事实部分优先采用馆藏机构、权威哲学百科与学术研究；情节解释以作品自身的叙事顺序为主。网页没有复制长段原文，也不绑定特定中文译本。</p>
          </div>
          <div className="source-list">
            <a href="https://expositions.bnf.fr/sartre/reperes/oeuvres/nausee.htm" target="_blank" rel="noreferrer"><span>01</span><div><b>Bibliothèque nationale de France</b><p>手稿形成、原题《Melancholia》、三次改写与 1938 年出版。</p></div><i>↗</i></a>
            <a href="https://plato.stanford.edu/entries/sartre/" target="_blank" rel="noreferrer"><span>02</span><div><b>Stanford Encyclopedia of Philosophy</b><p>栗树根、偶然性、现象学，以及小说与后期本体论的关系。</p></div><i>↗</i></a>
            <a href="https://plato.stanford.edu/entries/existentialism/" target="_blank" rel="noreferrer"><span>03</span><div><b>Stanford Encyclopedia · Existentialism</b><p>“恶心”等情绪如何使熟悉世界崩塌，并打开存在问题。</p></div><i>↗</i></a>
            <a href="https://www.nobelprize.org/prizes/literature/1964/sartre/facts/" target="_blank" rel="noreferrer"><span>04</span><div><b>Nobel Prize · Jean-Paul Sartre</b><p>生平、首部长篇《恶心》与 1964 年文学奖背景。</p></div><i>↗</i></a>
            <a href="https://www.persee.fr/doc/item_1167-5101_2003_num_21_1_1259" target="_blank" rel="noreferrer"><span>05</span><div><b>Michel Contat · Genesis</b><p>从《Melancholia》到《恶心》的手稿与编辑史研究。</p></div><i>↗</i></a>
            <a href="https://academic.oup.com/book/12504/chapter/162163295" target="_blank" rel="noreferrer"><span>06</span><div><b>Oxford Academic · Art, Ontology, and the End of Nausea</b><p>结尾的歌曲、艺术对象与偶然性之间的争论。</p></div><i>↗</i></a>
          </div>
        </div>
      </section>
      </main>

      <footer>
        <a className="portfolio-home-link" href="../THE-LIVING-ATLAS/" aria-label="前往 The Living Atlas 主页">
          <img className="portfolio-home-logo" src="../THE-LIVING-ATLAS/tsrat-logo.png" alt="TSRat Logo" />
        </a>
        <div><b>《恶心》入门</b><span>一份供初读者使用的互动田野笔记</span></div>
        <button onClick={() => scrollToId("top")}>回到页首 ↑</button>
        <p>Jean-Paul Sartre · La Nausée · 1938</p>
      </footer>

      {guideOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setGuideOpen(false); }}>
          <section className="guide-modal" role="dialog" aria-modal="true" aria-labelledby="guide-title">
            <div className="guide-topbar">
              <span>8 分钟导读 · {chapterIndex + 1}/6</span>
              <button onClick={() => setGuideOpen(false)} aria-label="关闭导读">关闭 ×</button>
            </div>
            <div className="guide-meter"><i style={{ width: `${((chapterIndex + 1) / 6) * 100}%` }} /></div>
            <div className="guide-body">
              <p>{chapters[chapterIndex].kicker} · {chapters[chapterIndex].time}</p>
              <h2 id="guide-title">{chapters[chapterIndex].title}</h2>
              <div className="guide-columns">
                <div><span>发生了什么</span><p>{chapters[chapterIndex].happened}</p></div>
                <div><span>它改变了什么</span><p>{chapters[chapterIndex].changed}</p></div>
              </div>
              <aside><span>带着这个问题继续</span><p>{chapters[chapterIndex].question}</p></aside>
            </div>
            <div className="guide-footer">
              <button className="button secondary" disabled={chapterIndex === 0} onClick={() => setChapterIndex(chapterIndex - 1)}>← 上一章</button>
              <div className="guide-dots">{chapters.map((_, index) => <i key={index} className={index <= chapterIndex ? "active" : ""} />)}</div>
              <button className="button primary" onClick={finishChapter}>{chapterIndex === 5 ? "完成导读" : "读完，下一章"} →</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
