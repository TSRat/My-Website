"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Briefing } from "./briefings";

const filters = ["全部", "艺术人文", "社会科学（包括天文学）", "女性主义"];

export function ArchiveExplorer({ briefings }: { briefings: Briefing[] }) {
  const [activeFilter, setActiveFilter] = useState("全部");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return briefings.filter((briefing) => {
      const matchesFilter = activeFilter === "全部" || briefing.topics.includes(activeFilter);
      const searchable = [
        briefing.theme,
        briefing.displayDate,
        ...briefing.stories.flatMap((story) => [story.title, story.category, story.summary]),
      ].join(" ").toLowerCase();
      return matchesFilter && (!normalized || searchable.includes(normalized));
    });
  }, [activeFilter, briefings, query]);

  return (
    <div className="archive-explorer">
      <div className="archive-toolbar">
        <div className="filter-row" aria-label="按主题筛选">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? "active" : ""}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
        <label className="archive-search">
          <span className="sr-only">搜索日刊标题或关键词</span>
          <span aria-hidden="true">⌕</span>
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索人物、作品或议题"
            type="search"
            value={query}
          />
        </label>
      </div>

      <div className="archive-results" aria-live="polite">
        {visible.length ? visible.map((briefing) => (
          <Link className="archive-entry" href={`/briefings/${briefing.date}`} key={briefing.date}>
            <div className="archive-entry-date">
              <span>{briefing.displayDate.slice(0, 4)}</span>
              <strong>{briefing.displayDate.slice(5)}</strong>
            </div>
            <div>
              <p>第 {briefing.issueNo} 期 · {briefing.stories.length} 则</p>
              <h3>{briefing.theme}</h3>
              <div className="archive-tags">
                {briefing.topics.map((topic) => <span key={topic}>{topic}</span>)}
              </div>
            </div>
            <span className="archive-arrow" aria-hidden="true">→</span>
          </Link>
        )) : (
          <p className="empty-state">档案中暂时没有匹配内容。试试更短的关键词。</p>
        )}
      </div>
    </div>
  );
}
