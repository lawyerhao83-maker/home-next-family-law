import { sitePath } from "../site-path";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: Array<{ title: string; body: string[] }>;
  emergency?: boolean;
};

export function ServicePage({ eyebrow, title, lead, sections, emergency = false }: ServicePageProps) {
  return (
    <main className="article-page service-page">
      <nav className="article-nav">
        <a className="brand" href={sitePath("/")}><span>家的下一站</span><i>｜</i><span>家事法律</span></a>
        <a className="text-link" href={sitePath("/#services")}>回到服務範圍 <span aria-hidden="true">→</span></a>
      </nav>
      <article className="article-body">
        <header>
          <p className="section-label">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="article-lead">{lead}</p>
        </header>

        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}

        {emergency && <aside className="article-note emergency-note"><strong>如果您正處於立即危險中</strong><p>請先撥打 110 報警；也可撥打 113 保護專線，尋求 24 小時的家庭暴力與安全協助。</p></aside>}

        <aside className="article-note">
          <strong>諮詢資訊</strong>
          <p>司宇律法諮詢事務所｜林司涵律師・羅顥程律師・詹宗憲律師</p>
          <p>諮詢費每小時 5,000 元；如後續就案件委任，得折抵委任費。事務所位於高雄市鹽埕區府北里七賢二路468號3樓。</p>
        </aside>

        <p className="service-disclaimer">本頁內容僅供一般法律資訊參考；個案的處理方式仍須依具體事實、證據與程序階段進行評估。</p>
      </article>
    </main>
  );
}
