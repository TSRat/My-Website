import Link from "next/link";

export function SiteHeader({ active }: { active?: "home" | "briefing" }) {
  return (
    <header className="site-header page-frame">
      <Link className="brand" href="/" aria-label="每日思想简报首页">
        <span>TS鼠 · 每日思想简报</span>
        <em>Daily Thought Briefing</em>
      </Link>
      <nav aria-label="主导航">
        <Link className={active === "home" ? "active" : ""} href="/">首页</Link>
        <Link className={active === "briefing" ? "active" : ""} href="/#archive">日刊</Link>
        <Link href="/#topics">主题索引</Link>
        <Link href="/#about">关于</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-frame footer-grid">
        <div>
          <p className="footer-brand">TS鼠 · 每日思想简报</p>
          <p>让信息停下来，成为可以理解、检索与继续创作的材料。</p>
        </div>
        <div className="footer-links">
          <Link href="/#today">今日五则</Link>
          <Link href="/#archive">全部日刊</Link>
          <Link href="/#method">去重方法</Link>
        </div>
        <p className="footer-note">Ivory Archive · 始于 2026</p>
      </div>
    </footer>
  );
}
