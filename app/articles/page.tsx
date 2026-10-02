import type { Metadata } from "next";
import { sitePath } from "../site-path";
import ArticleDirectory from "./article-directory";
import styles from "./directory.module.css";

const directoryUrl = "https://lawyerhao83-maker.github.io/home-next-family-law/articles/";

export const metadata: Metadata = {
  title: "文章總覽｜家的下一站｜家事法律",
  description:
    "依主題閱讀臺灣家事法律文章：離婚與婚姻關係、夫妻財產與贍養、子女親權與扶養、繼承與遺囑、家暴與保護令。",
  alternates: { canonical: directoryUrl },
  openGraph: {
    title: "文章總覽｜家的下一站｜家事法律",
    description: "從您目前在意的事開始，找到需要的家事法律資訊。",
    type: "website",
    url: directoryUrl,
  },
  twitter: {
    card: "summary",
    title: "文章總覽｜家的下一站｜家事法律",
    description: "依5大主題閱讀家事法律文章，讓下一步更有方向。",
  },
};

export default function ArticlesPage() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#article-topics">跳到文章主題</a>
      <nav className={styles.nav} aria-label="主要導覽">
        <a className={styles.brand} href={sitePath("/")}>家的下一站<i>｜</i>家事法律</a>
        <div className={styles.navLinks}>
          <a href={sitePath("/")}>首頁</a>
          <a href={sitePath("/#services")}>服務範圍</a>
          <a href={sitePath("/articles/")} aria-current="page">文章總覽</a>
          <a href={sitePath("/#faq")}>常見問題</a>
        </div>
        <a className={styles.navCta} href={sitePath("/#contact")}>預約初談</a>
      </nav>

      <div className={styles.content}>
        <header className={styles.header}>
          <nav className={styles.breadcrumb} aria-label="所在位置">
            <a href={sitePath("/")}>首頁</a><span aria-hidden="true">/</span><span aria-current="page">文章總覽</span>
          </nav>
          <div className={styles.headerCopy}>
            <p className={styles.eyebrow}>FAMILY LAW · KNOWLEDGE</p>
            <h1>找到您需要的<span>家事法律資訊。</span></h1>
            <p className={styles.intro}>從您目前在意的事開始，讓下一步更有方向。</p>
          </div>
          <svg className={styles.botanical} viewBox="0 0 260 260" aria-hidden="true">
            <circle cx="125" cy="125" r="104" fill="#edf1e4" />
            <circle cx="157" cy="159" r="87" fill="none" stroke="#cbd3b8" />
            <path d="M90 216 159 72M132 133 199 115" fill="none" stroke="#697849" strokeWidth="2" />
            <path d="M148 127C142 91 170 69 207 65C206 102 181 125 148 127Z" fill="#aab58d" />
            <path d="M113 174C74 167 61 140 71 108C106 117 122 143 113 174Z" fill="#aab58d" />
          </svg>
        </header>

        <ArticleDirectory />

        <aside className={styles.disclaimer}>
          本網站內容僅供一般法律資訊參考，不構成個案法律意見。實際情況仍須依完整事實與證據評估，建議諮詢律師。
        </aside>
      </div>

      <footer className={styles.footer}>
        <a className={styles.brand} href={sitePath("/")}>家的下一站<i>｜</i>家事法律</a>
        <a className={styles.footerLink} href={sitePath("/#contact")}>了解諮詢資訊 <span aria-hidden="true">→</span></a>
        <span>© 2026 家的下一站｜家事法律</span>
      </footer>
    </main>
  );
}
