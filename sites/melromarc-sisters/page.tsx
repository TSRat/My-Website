/* eslint-disable @next/next/no-img-element -- this standalone Vite site does not use next/image */
import { useEffect, useMemo, useState } from "react";
import {
  galleryItems,
  growthStages,
  stories,
  storyFilters,
  type Story,
} from "./content";

const SAVED_STORIES_KEY = "melromarc-saved-stories";

const readSavedStories = () => {
  try {
    const saved = window.localStorage.getItem(SAVED_STORIES_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed)
      ? parsed.filter((id): id is string => typeof id === "string")
      : [];
  } catch {
    return [];
  }
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("全部");
  const [query, setQuery] = useState("");
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [savedStoryIds, setSavedStoryIds] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setSavedStoryIds(readSavedStories()), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeStory ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveStory(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeStory]);

  const filteredStories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return stories.filter((story) => {
      const matchesFilter =
        activeFilter === "全部" || story.world === activeFilter;
      const searchIndex = [
        story.title,
        story.subtitle,
        story.summary,
        story.firstChange,
        story.world,
        story.tone,
        ...story.motifs,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesFilter &&
        (!normalizedQuery || searchIndex.includes(normalizedQuery))
      );
    });
  }, [activeFilter, query]);

  const toggleSavedStory = (storyId: string) => {
    const nextIds = savedStoryIds.includes(storyId)
      ? savedStoryIds.filter((id) => id !== storyId)
      : [...savedStoryIds, storyId];

    setSavedStoryIds(nextIds);
    window.localStorage.setItem(SAVED_STORIES_KEY, JSON.stringify(nextIds));
  };

  const openRandomStory = () => {
    const candidates = filteredStories.length ? filteredStories : stories;
    setActiveStory(candidates[Math.floor(Math.random() * candidates.length)]);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark"><i />M<span>&amp;</span>M<i /></span>
          <span className="brand-copy">MELROMARC<br />SISTERS ARCHIVE</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "关闭导航" : "打开导航"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="主导航">
          <a href="#stories" onClick={() => setMenuOpen(false)}>故事档案</a>
          <a href="#paths" onClick={() => setMenuOpen(false)}>命运分支</a>
          <a href="#principles" onClick={() => setMenuOpen(false)}>改写原则</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>图像书架</a>
          <a href="#data" onClick={() => setMenuOpen(false)}>Data</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-haze red-haze" />
        <div className="hero-haze blue-haze" />
        <div className="character-figure figure-malty" aria-hidden="true">
          <img src={galleryItems[0].src} alt="" />
        </div>
        <div className="character-figure figure-melty" aria-hidden="true">
          <img src={galleryItems[1].src} alt="" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">A FAN-CREATED STORY ARCHIVE · 2026</p>
          <h1>Melromarc 姐妹故事<em>两个名字，生长出许多命运。</em></h1>
          <p className="hero-intro">这里不是《盾之勇者成名录》的角色百科，而是一座为 Malty S. Melromarc 与 Melty Q. Melromarc 建造的多重故事档案馆。罪与爱、审判与尊严、离开与归来，可以同时被记住。</p>
          <div className="hero-actions">
            <a className="primary-action" href="#stories">进入故事档案 <span>↓</span></a>
            <button className="text-action" type="button" onClick={openRandomStory}>替我翻开一篇 <span>↗</span></button>
          </div>
        </div>
        <div className="hero-caption malty-caption"><strong>MALTY</strong><span>绯红 · 火焰 · 骄傲 · 归来</span></div>
        <div className="hero-caption melty-caption"><strong>MELTY</strong><span>蓝紫 · 王冠 · 边界 · 等待</span></div>
        <div className="scroll-cue">SCROLL TO READ <span /></div>
      </section>

      <section className="manifesto" aria-labelledby="manifesto-title">
        <div className="section-number">00</div>
        <div className="manifesto-main">
          <p className="kicker">这座档案馆相信</p>
          <h2 id="manifesto-title">理解不等于开脱。<br />原谅也不等于遗忘。</h2>
        </div>
        <div className="manifesto-note">
          <p>Malty 不会被简化成“其实什么都没做错”，Melty 也不会被写成只负责宽恕的圣人。她们的第二次相遇，必须允许愤怒、边界、补偿和不确定性存在。</p>
          <p className="small-note">本站收录 <strong>{stories.length}</strong> 条主要故事线 · 按 {new Set(stories.map((story) => story.world)).size} 个“首次改变时点”整理</p>
        </div>
      </section>

      <section className="story-archive" id="stories">
        <div className="section-heading">
          <div><p className="kicker">STORY INDEX</p><h2>故事档案</h2></div>
          <p>不再按结局拆成十几类；只看 Malty 在故事里的第一次改变发生在什么时候。</p>
        </div>
        <div className="archive-tools">
          <label className="search-box">
            <span>搜索</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="如：日记、火焰、五年、姐姐……"
            />
            <b>{String(filteredStories.length).padStart(2, "0")}</b>
          </label>
          <div className="filter-strip" role="group" aria-label="按 Malty 第一次改变的时间筛选">
            {storyFilters.map((filter) => (
              <button
                className={activeFilter === filter ? "active" : ""}
                type="button"
                onClick={() => setActiveFilter(filter)}
                key={filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="story-grid">
          {filteredStories.map((story, index) => {
            const saved = savedStoryIds.includes(story.id);
            return (
              <article className={`story-card tone-${story.tone}`} id={`story-${story.id}`} key={story.id}>
                <div className="card-topline">
                  <span>{String(index + 1).padStart(2, "0")} / 首次改变：{story.world}</span>
                  <button
                    type="button"
                    className={saved ? "save-button saved" : "save-button"}
                    aria-label={`${saved ? "取消收藏《" : "收藏《"}${story.title}》`}
                    onClick={() => toggleSavedStory(story.id)}
                  >
                    {saved ? "已收藏" : "收藏"}
                  </button>
                </div>
                <div className="card-body">
                  <div className="story-meta"><span>{story.stage}</span><i /> <span>{story.tone}</span></div>
                  <h3>{story.title}</h3>
                  <p className="story-subtitle">{story.subtitle}</p>
                  <p className="story-summary">{story.summary}</p>
                </div>
                <button className="read-story" type="button" onClick={() => setActiveStory(story)}>阅读故事档案 <span>→</span></button>
              </article>
            );
          })}
        </div>
        {filteredStories.length === 0 && (
          <div className="empty-state">
            <p>这条回廊里暂时没有故事。</p>
            <button type="button" onClick={() => { setQuery(""); setActiveFilter("全部"); }}>清除筛选</button>
          </div>
        )}
      </section>

      <section className="paths" id="paths">
        <div className="section-heading light-heading">
          <div><p className="kicker">BRANCHING FATES</p><h2>她们没有唯一结局</h2></div>
          <p>同一个 Malty，可以在人生的不同位置第一次回头；每个时点再长出各自的结局。</p>
        </div>
        <div className="growth-map">
          <div className="growth-root">
            <span>共同起点</span>
            <strong>“姐姐”最初不是空称呼</strong>
            <p>她们曾经相爱。下面的分歧不在于 Malty 是否天生有救，而在于她第一次停止伤害、承认爱或选择保护究竟有多晚。</p>
          </div>
          <div className="growth-stages">
            {growthStages.map((stage) => (
              <article className="growth-stage" key={stage.number}>
                <div className="growth-axis"><span>{stage.number}</span><i /></div>
                <div className="growth-copy"><p>{stage.category}</p><h3>{stage.title}</h3><div>{stage.description}</div></div>
                <div className="growth-branches" aria-label={`${stage.category}的故事`}>
                  {stage.storyIds.map((storyId) => {
                    const story = stories.find((item) => item.id === storyId);
                    return story ? (
                      <button type="button" onClick={() => setActiveStory(story)} key={story.id}>
                        <span>{story.stage}</span><strong>{story.title}</strong><em>打开档案 →</em>
                      </button>
                    ) : null;
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="principles" id="principles">
        <div className="section-heading">
          <div><p className="kicker">CANON / REWRITTEN</p><h2>从原作借来轮廓，<br />把人物重新还给她们自己</h2></div>
          <p>本站保留角色轮廓，却拒绝把女性反派的受辱与毁灭继续当成男性复仇的奖赏。</p>
        </div>
        <div className="critique-intro">
          <p className="critique-thesis">本站的批评立场是：原作不只是写了一个“有罪的女人”，还把虚假性侵指控、奴役和对女性反派的性化羞辱串成男性受害—复仇幻想。Malty 被压缩成启动男主受难、再让观众享受她受辱的装置；当改名、奴隶纹疼痛和公开处刑被当成爽点，问责便被复仇快感取代。</p>
          <div className="critique-chain">
            <article><span>01</span><h3>先制造男性受害神话</h3><p>虚假指控被用作男主与社会断裂的起点，女性的谎言和性被塑造成最危险、也最方便仇恨的威胁。</p></article>
            <article><span>02</span><h3>再让支配看似合理</h3><p>故事让受害者购买奴隶、依靠奴隶纹确认忠诚，并把女孩主动保留从属关系写成治愈与信任。</p></article>
            <article><span>03</span><h3>最后把羞辱包装成正义</h3><p>处刑威胁、奴隶纹疼痛和厌女性质的改名不再只是剧情事实，而被组织成观众应当享受的报偿。</p></article>
          </div>
        </div>
        <div className="foundation-heading">
          <span>所有故事共同遵守的两个基础</span>
          <p>它们不是某一条结局的偏好，而是这座档案馆允许故事成立的最低条件。</p>
        </div>
        <div className="story-foundations">
          <article>
            <span>基础 01</span>
            <h3>姐妹关系不能是 Nothing Special</h3>
            <p>Malty 与 Melty 不能只是同姓、争位或偶尔相遇的背景关系。妹妹的一声“姐姐”必须能改变 Malty 的选择，Malty 的离开、伤害、保护与归来也必须真实改变 Melty。即使关系破裂，它仍然必须是两人人生里的因果核心。</p>
          </article>
          <article>
            <span>基础 02</span>
            <h3>厌女羞辱不能在没有批判的情况下描写</h3>
            <p>故事可以写性化改名、奴隶纹、游街、酷刑与去人格化称谓，因为人物需要面对这些暴力；但叙事必须明确或潜在地质疑它们，呈现创伤、权力差异、制度后果或施暴逻辑，绝不能把女性受辱直接当作正义终点和观众奖励。</p>
          </article>
        </div>
        <p className="principle-guardrail">因此，Malty 可以有罪，Melty 可以不原谅；但责任必须通过停止伤害、补偿和边界来处理，不能靠把一个女人降格成笑话来完成。</p>
        <div className="source-note critical-source-note">
          <span>批评依据与争议背景</span>
          <p>以上是本站的女性主义阅读。相关评论分别讨论了首集的虚假指控与奴役框架，以及后续复仇、改名和奴隶纹惩罚如何压缩角色成长空间；同时保留一份汇总不同观点的争议背景。</p>
          <div>
            <a href="https://www.animefeminist.com/review-the-rising-of-the-shield-hero-episode-1/" target="_blank" rel="noreferrer">虚假指控与奴役批评 ↗</a>
            <a href="https://www.animefeminist.com/power-oppression-and-victimhood-in-the-twelve-kingdoms-versus-the-rising-of-the-shield-hero/" target="_blank" rel="noreferrer">复仇、改名与惩罚批评 ↗</a>
            <a href="https://openoregon.pressbooks.pub/dpdfilm/chapter/difference-power-and-discrimination-in-the-rising-of-the-shield-hero-2019/" target="_blank" rel="noreferrer">争议背景与不同观点 ↗</a>
          </div>
        </div>
        <div className="source-note canon-source-note">
          <span>原作资料边界</span>
          <p>角色外形与基础身份参考动画官网及角色资料页；本站情节、人物弧线与价值判断均为非官方二次创作。</p>
          <div>
            <a href="https://shieldhero-anime.jp/" target="_blank" rel="noreferrer">动画官网 ↗</a>
            <a href="https://shield-hero.fandom.com/wiki/Malty_S_Melromarc" target="_blank" rel="noreferrer">Malty 资料 ↗</a>
            <a href="https://shield-hero.fandom.com/wiki/Melty_Q_Melromarc" target="_blank" rel="noreferrer">Melty 资料 ↗</a>
          </div>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="section-heading light-heading">
          <div><p className="kicker">IMAGE SHELF</p><h2>图像书架</h2></div>
          <p>前三张保留联网检索到的 Anime 形象参考；其后收录用户提供的故事插图，图像书架还会继续增加。</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <figure key={item.title}>
              <div className={`image-stage ${item.className}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <img src={item.src} alt={item.title} />
              </div>
              <figcaption>
                <div><strong>{item.title}</strong><p>{item.detail}</p></div>
                <a href={item.source} target="_blank" rel="noreferrer" aria-label={`查看${item.title}图片来源`}>来源 ↗</a>
              </figcaption>
            </figure>
          ))}
          <div className="future-image-slot">
            <span>+</span><strong>下一张故事插图</strong><p>火中的选择、六十七天日记、监狱门口的拥抱……这里等待继续生长。</p>
          </div>
        </div>
      </section>

      <section className="data-appendix" id="data" aria-labelledby="data-title" data-provider="none">
        <div className="data-appendix__heading">
          <div className="data-appendix__status"><span>DATA / ARCHIVE SIGNALS</span><strong>NONE</strong><span>PROVIDER STATUS</span></div>
          <div className="data-appendix__copy">
            <p className="kicker">A SPACE FOR FUTURE EVIDENCE</p>
            <h2 id="data-title">先保留入口，<br />不把读者变成数字。</h2>
            <p>当前档案没有连接分析服务。未来如果需要理解搜索、筛选、阅读与收藏如何被使用，只记录服务于档案维护的最小事件；不会上传搜索原文、故事正文、身份或收藏内容。</p>
          </div>
        </div>
        <dl className="data-appendix__rules">
          <div><dt>现在</dt><dd>无分析 provider<br />无网络上报<br />无分析 Cookie</dd></div>
          <div><dt>未来可回答</dt><dd>哪些改变时点最常被浏览<br />搜索是否能找到故事<br />reader 是否被正常打开</dd></div>
          <div><dt>明确隔离</dt><dd>收藏仍只存在本机 localStorage<br />不上传故事 ID、原始搜索词<br />不建立跨站身份</dd></div>
        </dl>
      </section>

      <footer>
        <div className="footer-mark">M <i /> M</div>
        <p>献给一对在不同命运里，不断被重新书写的姐妹。</p>
        <div className="footer-links"><a href="#top">回到开头 ↑</a><span>NON-COMMERCIAL FAN ARCHIVE</span><span>2026 · STORY PROJECT</span></div>
      </footer>

      {activeStory && (
        <div className="reader-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveStory(null); }}>
          <article className="story-reader" role="dialog" aria-modal="true" aria-labelledby="reader-title">
            <button className="reader-close" type="button" aria-label="关闭故事档案" onClick={() => setActiveStory(null)}>关闭 ×</button>
            <div className="reader-heading"><p>{activeStory.world} · {activeStory.stage} · {activeStory.tone}</p><h2 id="reader-title">{activeStory.title}</h2><h3>{activeStory.subtitle}</h3></div>
            <blockquote>“{activeStory.quote}”</blockquote>
            <div className="reader-change"><span>Malty 的第一次改变</span><strong>{activeStory.firstChange}</strong></div>
            <div className="reader-body">
              <section><span>01 / 开端</span><p>{activeStory.opening}</p></section>
              <section><span>02 / 发展</span><p>{activeStory.turn}</p></section>
              <section><span>03 / 结局</span><p>{activeStory.ending}</p></section>
            </div>
            <div className="reader-question"><span>这篇故事追问</span><strong>{activeStory.question}</strong></div>
            <div className="reader-footer">
              <div className="motif-list">{activeStory.motifs.map((motif) => <span key={motif}>{motif}</span>)}</div>
              <div className="reader-actions">
                <button type="button" onClick={() => toggleSavedStory(activeStory.id)}>{savedStoryIds.includes(activeStory.id) ? "已收藏" : "收藏这篇"}</button>
                {activeStory.originalUrl && <a href={activeStory.originalUrl} target="_blank" rel="noreferrer">打开原对话 ↗</a>}
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
