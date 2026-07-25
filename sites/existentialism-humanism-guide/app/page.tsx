"use client";

import { useState } from "react";

const route = [
  {
    number: "01",
    title: "存在先于本质",
    note: "人没有写好的蓝图",
  },
  {
    number: "02",
    title: "自由与责任",
    note: "选择无法外包给别人",
  },
  {
    number: "03",
    title: "行动定义人",
    note: "你是已经做出的行动",
  },
  {
    number: "04",
    title: "存在主义人道主义",
    note: "在他人面前创造共同自由",
  },
];

const emotions = [
  {
    word: "焦虑",
    french: "Angoisse",
    not: "不是：考试前的紧张",
    is: "而是：我知道选择会影响他人，并且没有人能替我承担。",
    index: "A",
  },
  {
    word: "孤苦伶仃",
    french: "Délaissement",
    not: "不是：身边没有朋友",
    is: "而是：没有上帝或永恒规则替价值担保，我必须自己判断。",
    index: "B",
  },
  {
    word: "绝望",
    french: "Désespoir",
    not: "不是：放弃一切希望",
    is: "而是：只把行动建立在可控制的范围与合理概率上。",
    index: "C",
  },
];

const myths = [
  {
    myth: "“存在先于本质”就是人没有性格。",
    answer:
      "不是。身体、家庭、经历和性格倾向都真实存在；Sartre 否认的是它们已经替你写完一生。它们构成处境，却不自动成为最终本质。",
  },
  {
    myth: "“绝对自由”就是想做什么都能做到。",
    answer:
      "恰好相反。能力和选项会被贫困、疾病、性别、阶级与暴力严重限制。这里的“绝对”指：即使不能选择处境，人仍必须以某种方式回应处境。",
  },
  {
    myth: "没有上帝，所以什么都可以。",
    answer:
      "Sartre 的结论不是责任消失，而是责任加重：人再也不能把自己的解释和行动归给神圣命令。即使面对所谓神谕，仍是人决定它是否可信。",
  },
  {
    myth: "价值由人创造，所以道德只是个人喜好。",
    answer:
      "选择总发生在他人面前。你追求自己的自由时，也必须承认他人的自由；把别人降为工具，会破坏你用来主张自身自由的基础。",
  },
  {
    myth: "焦虑说明一个人不够坚定。",
    answer:
      "在讲演中，焦虑反而说明行动者意识到了后果。一个指挥官若决定士兵生死却毫无不安，才可能没有认真承担责任。",
  },
  {
    myth: "“人就是行动”是在羞辱失败者。",
    answer:
      "这句话确实严厉，却也拒绝把过去变成永久判决：如果行动塑造人，那么从今天开始的新行动也能重新塑造人。",
  },
  {
    myth: "存在主义只关心孤立的个人。",
    answer:
      "Sartre 从主观性出发，却认为我在他人的目光、承认和反对中认识自己。世界不是只有一个“我”，而是多个自由相遇、冲突和支持的世界。",
  },
  {
    myth: "人道主义就是赞美人类伟大。",
    answer:
      "Sartre 明确拒绝这种人类崇拜。他所谓人道主义，是人没有外部立法者，必须走出封闭内心，通过指向目标、他人与未来的行动实现自己。",
  },
];

const glossary = [
  ["本质", "一个事物是什么、用来做什么的预设定义。"],
  ["存在", "一个人实际出现并处在世界之中。"],
  ["事实性", "出生、身体、时代、阶级等无法随意取消的条件。"],
  ["规划", "人把自己投向未来可能性，并由此组织现在。"],
  ["自欺", "明明在选择，却假装自己只是被决定的物。"],
  ["主体间性", "自我通过他人的目光、回应和承认而形成。"],
];

export default function Home() {
  const [decision, setDecision] = useState<"mother" | "resistance" | null>(null);

  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>
      <main id="main-content" tabIndex={-1}>
      <header className="site-header" aria-label="主导航">
        <a className="wordmark" href="#top" aria-label="返回首页">
          存在主义是一种人道主义
        </a>
        <nav className="desktop-nav" aria-label="章节导航">
          <a href="#map">全书地图</a>
          <i aria-hidden="true">/</i>
          <a href="#foundation">核心概念</a>
          <i aria-hidden="true">/</i>
          <a href="#situation">现实处境</a>
          <i aria-hidden="true">/</i>
          <a href="#myths">误解澄清</a>
        </nav>
        <span className="edition-mark">BEGINNER&apos;S EDITION&nbsp;&nbsp;01</span>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="registration-mark mark-left" aria-hidden="true" />
        <div className="registration-mark mark-right" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">1945 · 巴黎 · 一场公开讲演</p>
          <h1 id="hero-title">
            你已经被抛进世界。
            <br />
            然后呢？
          </h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="hero-deck">
            用一条清晰路径读懂 <em>Sartre</em>：
            <br />
            自由不是随心所欲，责任也不是自我惩罚。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#start">
              从零开始 <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="#map">
              先看全书地图
            </a>
          </div>
        </div>

        <div className="hero-diagram" aria-label="从存在走向选择、行动与他人的概念路径">
          <span className="diagram-label label-one"><b>01</b> 存在先于本质</span>
          <span className="diagram-label label-two"><b>02</b> 自由与责任</span>
          <span className="diagram-label label-three"><b>03</b> 选择与他人</span>
          <span className="diagram-origin" aria-hidden="true">×</span>
          <span className="diagram-line line-one" aria-hidden="true" />
          <span className="diagram-line line-two" aria-hidden="true" />
          <span className="question-mark" aria-hidden="true">?</span>
        </div>
        <div className="hero-footer">
          <span>阅读路径</span>
          <span>约 20 分钟入门</span>
          <span>向下阅读&nbsp; ↓</span>
        </div>
      </section>

      <section className="orientation" id="start">
        <div className="section-kicker">先别急着背概念</div>
        <div className="orientation-grid">
          <h2>这本书到底在做什么？</h2>
          <div className="orientation-copy">
            <p>
              1945 年 10 月 29 日，第二次世界大战刚刚结束。法国仍在清算抵抗、合作与沉默的责任，旧有的宗教和进步信念也遭到重创。
            </p>
            <p>
              <strong>Jean-Paul Sartre 不是在书斋里泛谈“人生意义”。</strong>
              他面对的是一个更紧迫的问题：没有上帝、没有写好的道德剧本，也没有胜利保证时，人还能怎样选择和行动？
            </p>
          </div>
        </div>
        <div className="charge-strip" aria-label="存在主义面对的三类批评">
          <div>
            <span>共产党人的批评</span>
            <b>“你们让人绝望，所以不会行动。”</b>
          </div>
          <div>
            <span>基督教徒的批评</span>
            <b>“没有上帝，道德就会失去标准。”</b>
          </div>
          <div>
            <span>Sartre 的回应</span>
            <b>“恰恰因为无人担保，责任才无法推卸。”</b>
          </div>
        </div>
      </section>

      <section className="route-map" id="map" aria-labelledby="map-title">
        <div className="route-heading">
          <div>
            <p className="section-kicker">全书地图 · 不是四句口号，而是一条论证</p>
            <h2 id="map-title">Sartre 怎样一步步走到“人道主义”？</h2>
          </div>
          <p>从左到右读：每一步都由前一步推出，跳过任何一步，都容易把自由误解成任性。</p>
        </div>
        <ol className="route-list">
          {route.map((item, index) => (
            <li key={item.number}>
              <span className="route-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
              {index < route.length - 1 && <span className="route-arrow" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </section>

      <section className="foundation-preview" id="foundation">
        <span className="oversized-index" aria-hidden="true">01</span>
        <div>
          <p className="section-kicker light">理论起点</p>
          <h2>人不是一把裁纸刀。</h2>
          <p>
            裁纸刀在制造前就有用途、蓝图与“本质”。人却先来到世界，随后才通过选择和行动成为某种人。
          </p>
          <a href="#essence">从这个比喻开始理解 <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="chapter chapter-one" id="essence" aria-labelledby="essence-title">
        <div className="chapter-side">
          <span>CHAPTER 01</span>
          <b>存在主义的理论起点</b>
        </div>
        <div className="chapter-body">
          <p className="section-kicker">先把顺序弄清楚</p>
          <h2 id="essence-title">“存在先于本质”究竟颠倒了什么？</h2>
          <p className="lead">
            传统观念把人想成一件制成品：先有设计者和蓝图，随后才有具体的人。Sartre 则把这个顺序彻底倒过来。
          </p>

          <div className="comparison-board" aria-label="裁纸刀与人的形成顺序对比">
            <article>
              <span className="comparison-tag">物品 · 裁纸刀</span>
              <h3>先有用途，再被制造</h3>
              <ol>
                <li><b>1</b><span>工匠先知道它用来裁纸</span></li>
                <li><b>2</b><span>蓝图规定形状和功能</span></li>
                <li><b>3</b><span>实物只是把蓝图变成现实</span></li>
              </ol>
              <p className="board-result">本质 → 存在</p>
            </article>
            <div className="comparison-versus" aria-hidden="true">≠</div>
            <article className="human-board">
              <span className="comparison-tag">人 · 没有预设蓝图</span>
              <h3>先来到世界，再成为自己</h3>
              <ol>
                <li><b>1</b><span>你没有选择出生和起点</span></li>
                <li><b>2</b><span>你必须在处境中选择回应</span></li>
                <li><b>3</b><span>行动逐渐构成你是什么人</span></li>
              </ol>
              <p className="board-result">存在 → 选择 → 行动 → 本质</p>
            </article>
          </div>

          <div className="plain-language">
            <span>换成一句日常话</span>
            <p>
              你并不是先天完成的“勇敢者”“善良者”或“失败者”。这些词只有进入一次次真实行动，才逐渐成为关于你的可靠描述。
            </p>
          </div>

          <div className="situation-grid" id="situation">
            <div>
              <p className="section-kicker">自由不发生在真空里</p>
              <h3>处境是真实限制，但不是人生说明书。</h3>
            </div>
            <div>
              <p>
                时代、家庭、身体、疾病、贫富、性别与种族身份，都是 Sartre 所说的<strong>事实性</strong>：你不能假装它们不存在。
              </p>
              <p>
                但“它强烈影响我”不等于“它已经替我完成选择”。自由不是取消限制，而是在限制中仍要回应。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter chapter-two" id="freedom" aria-labelledby="freedom-title">
        <div className="chapter-side">
          <span>CHAPTER 02</span>
          <b>没有借口的人</b>
        </div>
        <div className="chapter-body">
          <p className="section-kicker light">自由不是礼物，更像一项判决</p>
          <h2 id="freedom-title">为什么人会“被判定为自由”？</h2>
          <div className="quote-block">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>你没有选择被抛进世界，却必须选择怎样回应已经发生的一切。</p>
          </div>
          <div className="freedom-explainer">
            <article>
              <span>它不保证</span>
              <h3>你能实现任何愿望</h3>
              <p>贫困者和富人、病人和健康者、被压迫者和掌权者拥有的现实选项显然不同。</p>
            </article>
            <article>
              <span>它真正意味着</span>
              <h3>回应不能被彻底外包</h3>
              <p>沉默、拖延、服从、抛硬币或让别人决定，都仍是你选择采用的回应方式。</p>
            </article>
            <article>
              <span>它必然带来</span>
              <h3>对选择承担责任</h3>
              <p>情绪、传统和命令可以解释压力，却不能自动替行动者承担最终后果。</p>
            </article>
          </div>

          <div className="emotion-section">
            <div className="subsection-heading">
              <div>
                <p className="section-kicker light">三个最常被误解的词</p>
                <h3>它们不是情绪诊断，而是自由的三种体验。</h3>
              </div>
              <p>依次回答：责任有多重？价值由谁担保？行动能依靠什么？</p>
            </div>
            <div className="emotion-cards">
              {emotions.map((emotion) => (
                <article key={emotion.word}>
                  <span className="emotion-index">{emotion.index}</span>
                  <p className="emotion-french">{emotion.french}</p>
                  <h4>{emotion.word}</h4>
                  <p className="emotion-not">{emotion.not}</p>
                  <p>{emotion.is}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dilemma" id="dilemma" aria-labelledby="dilemma-title">
        <div className="dilemma-heading">
          <p className="section-kicker">把抽象理论放进一个真实困境</p>
          <h2 id="dilemma-title">照顾母亲，还是参加抵抗军？</h2>
          <p>
            Sartre 的一名学生生活在被占领的法国：父亲准备合作，哥哥已战死，母亲只剩他作为依靠。他必须在两个都有理由、也都会伤害某些人的选项之间决定。
          </p>
        </div>
        <div className="decision-board">
          <button
            type="button"
            className={decision === "mother" ? "decision-option active" : "decision-option"}
            onClick={() => setDecision("mother")}
            aria-pressed={decision === "mother"}
          >
            <span>A · 留下</span>
            <strong>照顾孤苦无依的母亲</strong>
            <small>具体照护 · 效果较确定 · 可能放弃公共责任</small>
          </button>
          <div className="decision-or" aria-hidden="true">OR</div>
          <button
            type="button"
            className={decision === "resistance" ? "decision-option active" : "decision-option"}
            onClick={() => setDecision("resistance")}
            aria-pressed={decision === "resistance"}
          >
            <span>B · 离开</span>
            <strong>投奔自由法国军队</strong>
            <small>公共正义 · 效果不确定 · 可能抛弃具体亲人</small>
          </button>
        </div>
        <div className={decision ? "decision-result visible" : "decision-result"} aria-live="polite">
          {decision ? (
            <>
              <span>Sartre 不会替你判卷</span>
              <p>
                你选择了{decision === "mother" ? "留下照顾母亲" : "离开并参加抵抗"}。这个选项并不会因此自动成为标准答案；真正的问题是：你是否承认这是自己的选择，是否看见另一种价值的损失，并愿意承担代价？
              </p>
            </>
          ) : (
            <p>先选择一个你此刻更倾向的行动，再看 Sartre 怎样回应。</p>
          )}
        </div>
        <div className="dead-ends">
          <h3>为什么三种常见“求答案”方式仍然失败？</h3>
          <div>
            <article><b>诉诸情感</b><p>情感有多深，往往要由行动来证明；它不能预先替行动判决。</p></article>
            <article><b>寻求建议</b><p>选择询问谁、采纳哪条建议，本身已经暴露了你的价值倾向。</p></article>
            <article><b>解读预兆</b><p>同一事件能被赋予不同意义；真正起作用的是你选择了哪种解释。</p></article>
          </div>
        </div>
      </section>

      <section className="chapter chapter-three" id="action" aria-labelledby="action-title">
        <div className="chapter-side">
          <span>CHAPTER 03</span>
          <b>人就是他的行动</b>
        </div>
        <div className="chapter-body">
          <p className="section-kicker">存在主义不是无作为论</p>
          <h2 id="action-title">没有成功保证，为什么还要行动？</h2>
          <div className="action-equation" aria-label="Sartre 的行动原则">
            <span>放弃不可控的保证</span>
            <b>＋</b>
            <span>集中于能够承担的行动</span>
            <b>＝</b>
            <strong>严肃的乐观主义</strong>
          </div>
          <p className="lead">
            “绝望”在这里是一种现实主义：火车通常准点、具体同伴已作出承诺，这些是可参考的合理概率；“历史必然胜利”“好人一定有好报”却不能成为行动的保证。
          </p>
          <div className="action-examples">
            <article><span>反抗暴政</span><p>不是因为保证能推翻它，而是选择不成为顺从暴政的人。</p></article>
            <article><span>照顾病人</span><p>不是因为保证能治愈，而是选择承担眼前的照护。</p></article>
            <article><span>公开道歉</span><p>不是因为保证被原谅，而是选择成为愿意修复伤害的人。</p></article>
            <article><span>完成创作</span><p>不是因为保证被看见，而是让“我想创作”成为真实行动。</p></article>
          </div>
          <div className="potential-panel">
            <div className="potential-no">
              <span>自欺式说法</span>
              <p>“我内心很勇敢，只是从未行动。”</p>
              <p>“我本来是天才，只是作品没有写出来。”</p>
              <p>“我很爱你，只是从未关心或承担。”</p>
            </div>
            <div className="potential-yes">
              <span>Sartre 的追问</span>
              <h3>你实际做了什么？</h3>
              <p>意图和梦想并非毫无意义，但它们不能替已经发生的行动证明“真正的我”。</p>
            </div>
          </div>
          <aside className="restarting-note">
            <span>严厉思想的另一面</span>
            <p>如果人由行动塑造，那么过去也不是永久身份。从今天开始写作、道歉、求助或反抗，你就在成为一个不同的人。</p>
          </aside>
        </div>
      </section>

      <section className="chapter chapter-four" id="humanism" aria-labelledby="humanism-title">
        <div className="chapter-side">
          <span>CHAPTER 04</span>
          <b>从主观性到人道主义</b>
        </div>
        <div className="chapter-body">
          <p className="section-kicker light">最后一道难题</p>
          <h2 id="humanism-title">从“我选择”出发，为什么不会只剩下“我”？</h2>
          <div className="subjectivity-flow">
            <article><span>01</span><h3>我意识到自己正在选择</h3><p>主观性首先保住人不是一件由规律推动的物。</p></article>
            <i aria-hidden="true">→</i>
            <article><span>02</span><h3>我在他人面前认识自己</h3><p>“真诚”“可靠”“残忍”等身份都在关系中显现。</p></article>
            <i aria-hidden="true">→</i>
            <article><span>03</span><h3>自由进入共同世界</h3><p>我要别人承认我的自由，也必须承认别人是自由主体。</p></article>
          </div>

          <div className="shame-example">
            <div className="door-mark" aria-hidden="true"><span /></div>
            <div>
              <p className="section-kicker light">门缝前的羞耻</p>
              <h3>一个脚步声，怎样把“他人”带进自我？</h3>
              <p>
                一个人正透过门缝偷看，起初只沉浸于行为。听见身后脚步时，他突然意识到：自己不只是观看的主体，也成了别人眼中的“偷窥者”。他人的目光参与了自我认识。
              </p>
            </div>
          </div>

          <div className="condition-panel">
            <h3>没有固定“人性”，仍然有人类处境。</h3>
            <p>
              古代奴隶、封建贵族、战时难民与现代劳动者的历史条件完全不同；但他们都必须面对身体、劳动、死亡、他人、限制与选择。共同性不是预先写好的人类本质，而是在彼此理解和共同生活中形成。
            </p>
          </div>

          <div className="humanism-compare">
            <article>
              <span>Sartre 拒绝</span>
              <h3>把抽象“人类”当偶像</h3>
              <p>不能因为少数人发明飞机、写出杰作，就宣布每个人都分享了这份伟大；更不能以“人类未来”之名牺牲具体的人。</p>
            </article>
            <article>
              <span>Sartre 接受</span>
              <h3>人在超越自身中成为人</h3>
              <p>人不是退回内心寻找固定真我，而是投向他人、目标、创作和未来，通过外在行动实现自己。</p>
            </article>
          </div>
          <div className="humanism-definition">
            <span>所以，标题真正意味着</span>
            <p>
              人除了自己之外别无立法者；但他不是封闭在自己内部，而是在追求自身与他人的自由、不断超越当前状态的行动中成为人。
            </p>
          </div>
        </div>
      </section>

      <section className="myths" id="myths" aria-labelledby="myths-title">
        <div className="myths-heading">
          <p className="section-kicker">误解澄清</p>
          <h2 id="myths-title">八个最容易读歪的地方</h2>
          <p>点开每一项，检查你理解的是 Sartre 的论证，还是流行文化中的存在主义印象。</p>
        </div>
        <div className="myth-list">
          {myths.map((item, index) => (
            <details key={item.myth}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.myth}</strong>
                <i aria-hidden="true">＋</i>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="glossary" aria-labelledby="glossary-title">
        <div>
          <p className="section-kicker">随时回来查</p>
          <h2 id="glossary-title">六个概念，一页收住</h2>
        </div>
        <dl>
          {glossary.map(([term, meaning]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{meaning}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="critical-coda" aria-labelledby="coda-title">
        <div className="coda-label">读懂之后，再看它的边界</div>
        <div>
          <h2 id="coda-title">这篇讲演是入口，不是 Sartre 的全部。</h2>
          <p>
            它把复杂的《存在与虚无》压缩成面向公众的辩护，因此清晰有力，也容易显得个人责任过重、对制度和历史结构讨论不足。Sartre 后来进一步处理阶级与集体实践；Simone de Beauvoir、Frantz Fanon 等思想家也把处境、性别与殖民压迫推进得更具体。
          </p>
          <p>
            这并不取消讲演的价值，而是提醒我们：先完整理解“没有借口的自由”，再追问<strong>什么样的社会让不同人的实践自由极不平等</strong>。
          </p>
        </div>
      </section>

      <section className="takeaway" aria-labelledby="takeaway-title">
        <p className="section-kicker light">离开前带走四句话</p>
        <h2 id="takeaway-title">没有写好的你。没有保证的结局。<br />有处境中的选择，也有必须承担的行动。</h2>
        <div className="takeaway-list">
          <span>存在先于本质</span>
          <span>自由不等于能力无限</span>
          <span>行动使价值成为现实</span>
          <span>我的自由牵涉他人的自由</span>
        </div>
        <a className="button button-paper" href="#top">回到开头 <span aria-hidden="true">↑</span></a>
      </section>

      <footer className="site-footer">
        <span>《存在主义是一种人道主义》初学者导读</span>
        <span>根据五章阅读笔记整理</span>
      </footer>
      </main>
    </>
  );
}
