import type { Metadata } from "next";
import "./globals.css";

const siteBasePath =
  process.env.NEXT_PUBLIC_SITE_BASE_PATH ??
  "/My-Website/existentialism-humanism-guide";

export const metadata: Metadata = {
  title: "存在主义是一种人道主义｜初学者导读",
  description:
    "从存在先于本质、自由与责任、行动哲学一路读到 Sartre 的存在主义人道主义。",
  icons: {
    icon: `${siteBasePath}/favicon.svg`,
    shortcut: `${siteBasePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
