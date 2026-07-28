import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { BriefingStory } from "../../briefings";
import { briefings } from "../../briefings";
import { SiteFooter, SiteHeader } from "../../site-shell";

const formLabels: Record<BriefingStory["informationForm"], string> = {
  timeline: "时间线",
  comparison: "对照表",
  process: "过程",
  relationship: "关系",
  evidence: "证据卡",
};

function InformationForm({ story }: { story: BriefingStory }) {
  const items = story.facts.slice(2);
  const facts = items.length ? items : story.facts;

  if (story.informationForm === "comparison") {
    return (
      <div className="information-form information-comparison">
        <p className="information-form-label">信息形式 · {formLabels[story.informationForm]}</p>
        <div className="table-scroll" tabIndex={0} role="region" aria-label={`${story.title} 对照表`}>
          <table>
            <thead><tr><th scope="col">对照项</th><th scope="col">来源中可以确认的内容</th></tr></thead>
            <tbody>
              {facts.map((fact, index) => (
                <tr key={fact}><th scope="row">{String(index + 1).padStart(2, "0")}</th><td>{fact}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (story.informationForm === "relationship") {
    return (
      <div className="information-form information-relationship">
        <p className="information-form-label">信息形式 · {formLabels[story.informationForm]}</p>
        <dl>
          {facts.map((fact, index) => (
            <div key={fact}><dt>关系 {index + 1}</dt><dd>{fact}</dd></div>
          ))}
        </dl>
      </div>
    );
  }

  return (
    <div className={`information-form information-${story.informationForm}`}>
      <p className="information-form-label">信息形式 · {formLabels[story.informationForm]}</p>
      <ol>
        {facts.map((fact, index) => (
          <li key={fact}>
            <span>{story.informationForm === "timeline" ? `节点 ${index + 1}` : story.informationForm === "process" ? `步骤 ${index + 1}` : `证据 ${index + 1}`}</span>
            <p>{fact}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function generateStaticParams() {
  return briefings.map((briefing) => ({ date: briefing.date }));
}

export default async function BriefingPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const briefingIndex = briefings.findIndex((item) => item.date === date);
  const briefing = briefings[briefingIndex];

  if (!briefing) notFound();

  const newer = briefingIndex > 0 ? briefings[briefingIndex - 1] : null;
  const older = briefingIndex < briefings.length - 1 ? briefings[briefingIndex + 1] : null;

  return (
    <div className="site-shell briefing-page">
      <a className="skip-link" href="#briefing-content">跳到正文</a>
      <SiteHeader active="briefing" />
      <main id="briefing-content">
        <header className="briefing-hero page-frame">
          <div className="briefing-meta-column">
            <Link href="/#archive">← 返回日刊档案</Link>
            <p className="eyebrow">Daily Issue</p>
            <strong>NO. {briefing.issueNo}</strong>
            <span>{briefing.displayDate}</span>
            <div className="mini-stamp">IVORY<br />ARCHIVE</div>
          </div>
          <div className="briefing-title-column">
            <p className="hero-kicker">本期要理解的事</p>
            <h1>{briefing.theme}</h1>
            <p>{briefing.intro}</p>
            <div className="briefing-topic-row">
              {briefing.topics.map((topic) => <span key={topic}>{topic}</span>)}
            </div>
          </div>
          <aside className="issue-index" aria-label="本期目录">
            <p className="eyebrow">In This Issue</p>
            <ol>
              {briefing.stories.map((story, index) => (
                <li key={story.title}>
                  <a href={`#story-${index + 1}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>{story.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>
        </header>

        <section className="issue-quick-read page-frame" aria-labelledby="quick-read-title">
          <div>
            <p className="eyebrow">3-Minute Brief</p>
            <h2 id="quick-read-title">先用三分钟掌握本期</h2>
            <p>{briefing.learningGoal}</p>
          </div>
          <ol>
            {briefing.stories.map((story, index) => (
              <li key={story.title}>
                <a href={`#story-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{story.title}</strong>
                  <p>{story.summary}</p>
                </a>
              </li>
            ))}
          </ol>
          <aside>
            <p className="eyebrow">五则怎样连在一起</p>
            <p>{briefing.connection}</p>
          </aside>
        </section>

        <div className="briefing-stories page-frame">
          {briefing.stories.map((story, index) => (
            <article className="long-story" id={`story-${index + 1}`} key={story.title}>
              <header className="long-story-header">
                <span className="long-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <span className="topic-tag">{story.category}</span>
                  <h2>{story.title}</h2>
                  <p>{story.summary}</p>
                  <a
                    className="source-link-primary"
                    data-analytics-event="source_opened"
                    data-analytics-target={`${briefing.date}:${index + 1}`}
                    href={story.sourceUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    先看原始来源：{story.sourceName} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </header>

              <figure className="long-story-image">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 1060px"
                  unoptimized
                  loading="lazy"
                />
                <figcaption>{story.imageCredit}</figcaption>
              </figure>

              <div className="story-learning-flow">
                <section className="story-section happened-block">
                  <p className="section-step">01 · What</p>
                  <h3>发生了什么</h3>
                  <p>{story.happened}</p>
                </section>

                <section className="story-section background-block">
                  <p className="section-step">02 · Context</p>
                  <h3>先补上背景</h3>
                  <ul>{story.facts.slice(0, 2).map((fact) => <li key={fact}>{fact}</li>)}</ul>
                </section>

                <section className="story-section why-block">
                  <p className="section-step">03 · Why</p>
                  <h3>为什么值得关注</h3>
                  <p>{story.whyItMatters}</p>
                </section>

                <section className="story-section evidence-block">
                  <p className="section-step">04 · Evidence</p>
                  <h3>证据与边界</h3>
                  <InformationForm story={story} />
                  <p className="evidence-boundary"><strong>这份来源不能单独证明什么：</strong>{story.evidenceBoundary}</p>
                </section>

                <section className="story-section analysis-block">
                  <p className="section-step">05 · Analysis</p>
                  <h3>分析</h3>
                  <p>{story.analysis}</p>
                  <p className="interpretation-note">这一段是 Ivory Archive 的编辑分析，不是来源中的直接事实。</p>
                </section>

                <section className="story-section reflection-block">
                  <p className="section-step">06 · Reflect</p>
                  <h3>反思与练习</h3>
                  <p>{story.reflection}</p>
                </section>

                <aside className="story-source-register" aria-label={`${story.title} 来源登记`}>
                  <p className="eyebrow">Source Register</p>
                  <dl>
                    <div><dt>来源</dt><dd>{story.sourceName}</dd></div>
                    <div><dt>类型</dt><dd>{story.sourceType}</dd></div>
                    <div><dt>日期</dt><dd>{story.sourceDate}</dd></div>
                  </dl>
                  <a
                    data-analytics-event="source_opened"
                    data-analytics-target={`${briefing.date}:${index + 1}:register`}
                    href={story.sourceUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    打开原始来源 <span aria-hidden="true">↗</span>
                  </a>
                  <small className="source-url">{story.sourceUrl}</small>
                </aside>
              </div>
              <a className="back-to-top" href="#briefing-content">回到本期顶部 ↑</a>
            </article>
          ))}
        </div>

        <section className="issue-synthesis page-frame">
          <p className="eyebrow">Issue Synthesis</p>
          <h2>读完五则之后，记住这一条连接</h2>
          <p>{briefing.connection}</p>
        </section>

        <nav className="issue-navigation page-frame" aria-label="前后期刊">
          {older ? (
            <Link href={`/briefings/${older.date}`}><span>← 上一期</span><strong>第 {older.issueNo} 期 · {older.theme}</strong></Link>
          ) : <span />}
          {newer ? (
            <Link href={`/briefings/${newer.date}`}><span>下一期 →</span><strong>第 {newer.issueNo} 期 · {newer.theme}</strong></Link>
          ) : <Link href="/#archive"><span>已到最新一期</span><strong>返回全部日刊</strong></Link>}
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}
