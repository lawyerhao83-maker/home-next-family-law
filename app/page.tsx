import { sitePath } from "./site-path";

const services = [
  ["01", "離婚與親權", "協助梳理離婚、監護、會面交往與扶養安排，讓每一個選擇都更有依據。", sitePath("/services/divorce-and-parenting/")],
  ["02", "遺產與家族財產", "從遺囑、繼承到家族財產規劃，陪您在關係與權益之間找到穩妥的路徑。", sitePath("/services/inheritance-and-family-assets/")],
  ["03", "家庭暴力保護", "在需要即刻保護的時候，提供清楚的程序說明與安全優先的法律協助。", sitePath("/services/domestic-violence-protection/")],
];

const steps = [
  ["01", "預約初談", "用您覺得自在的方式，先說說現在最在意的事。"],
  ["02", "理解與整理", "釐清事實、情緒與可行選項，建立您聽得懂的行動方向。"],
  ["03", "安心前行", "依您的節奏推進程序，重要決定都有充分討論的空間。"],
];

const articles = [
  {
    category: "繼承與遺囑",
    date: "2026.07.31",
    dateTime: "2026-07-31",
    title: "兄弟姊妹特留分刪除後，遺產就一定不會分給手足嗎？",
    summary:
      "兄弟姊妹特留分刪除，不等於手足完全失去繼承權。整理修法進度、法定繼承與有效遺囑安排的差異。",
    href: sitePath("/articles/sibling-reserved-portion-after-repeal-2026/"),
  },
  {
    category: "繼承與遺囑",
    date: "2026.07.28",
    dateTime: "2026-07-28",
    title: "兄弟姊妹特留分刪除三讀通過：真正影響是什麼？",
    summary:
      "刪除兄弟姊妹特留分，不等於手足失去法定繼承權。一次看懂有無遺囑的差別、新法施行時間與遺產規劃重點。",
    href: sitePath("/articles/sibling-reserved-portion-repeal-2026/"),
  },
  {
    category: "離婚與扶養",
    date: "2026.07.27",
    dateTime: "2026-07-27",
    title: "贍養費、扶養費、未成年子女扶養費差在哪？",
    summary:
      "離婚時最常被混在一起談的三筆錢，法律基礎、請求時點與保護對象都不同。一次分清楚，避免協議與訴訟一開始就用錯概念。",
    href: sitePath("/articles/alimony-spousal-support-child-support/"),
  },
  {
    category: "離婚與親權",
    date: "2026.07.24",
    dateTime: "2026-07-24",
    title: "對方不讓我見小孩怎麼辦？",
    summary:
      "會面交往、酌定或改定、交付子女與暫時處分的目的不同。先確認現有法律關係，再依孩子現況選擇適合的程序。",
    href: sitePath("/articles/child-contact-visitation-orders/"),
  },
  {
    category: "家庭暴力保護",
    date: "2026.07.20",
    dateTime: "2026-07-20",
    title: "家暴保護令怎麼申請？緊急、暫時、通常保護令差在哪",
    summary:
      "有立即危險時該先找誰？三種保護令的聲請人、處理方式與效力並不相同。一次整理安全處置、法院程序及證據準備。",
    href: sitePath("/articles/domestic-violence-protection-order-types/"),
  },
  {
    category: "繼承與繼親家庭",
    date: "2026.07.15",
    dateTime: "2026-07-15",
    title: "繼母過世，繼子女能分到遺產嗎？",
    summary:
      "很多再婚家庭感情很好，但繼子女是否能分到繼父母遺產，仍要回到法定繼承、收養、遺囑與特留分等法律安排來看。",
    href: sitePath("/articles/stepchild-inheritance/"),
  },
  {
    category: "家暴與子女安排",
    date: "2026.07.15",
    dateTime: "2026-07-15",
    title: "保護令可以同時處理孩子嗎？",
    summary:
      "保護令除了禁止接觸，也可能涉及子女交付、會面交往與扶養費。先了解可以請求什麼、哪些問題仍需另循家事程序處理。",
    href: sitePath("/articles/protection-order-children/"),
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="主要導覽">
          <a className="brand" href="#top" aria-label="家的下一站｜家事法律首頁">
            <span>家的下一站</span><i>｜</i><span>家事法律</span>
          </a>
          <div className="nav-links">
            <a href="#about">關於我們</a>
            <a href="#services">服務範圍</a>
            <a href="#process">諮詢流程</a>
            <a href="#articles">法普文章</a>
            <a href="#faq">常見問題</a>
          </div>
          <a className="nav-cta" href="#contact">預約初談</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">FAMILY LAW · WITH CARE</p>
            <h1>將難以說出口的事，<br />交給法律好好安放。</h1>
            <p className="intro">家，是情感的起點，也是需要被理解與支持的地方。<br />我們陪伴您梳理困境，找到下一步的方向，讓生活慢慢回到安穩。</p>
            <div className="hero-actions">
              <a className="button" href="#contact">預約初談 <span aria-hidden="true">→</span></a>
              <a className="text-link" href="#services">了解我們的服務 <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="sun-disc" />
            <div className="leaf leaf-a" /><div className="leaf leaf-b" /><div className="leaf leaf-c" />
            <div className="branch branch-a" /><div className="branch branch-b" />
          </div>
        </div>

        <div className="reassurance" aria-label="服務理念">
          <div><b>同理傾聽</b><span>理解您的感受與處境</span></div>
          <div><b>專業協助</b><span>以清楚法律知識陪伴</span></div>
          <div><b>量身規劃</b><span>依您的需求安排方向</span></div>
          <div><b>安心前行</b><span>讓決定更踏實穩定</span></div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-label">關於我們</div>
        <div className="about-grid">
          <h2>法律不只是解決問題，<br />更是陪伴你走過改變的過程。</h2>
          <div>
            <p><strong>司宇律法諮詢事務所</strong><br />林司涵律師・羅顥程律師・詹宗憲律師</p>
            <p>家事事件往往牽動關係、生活與未來。當事情變得複雜，我們希望先讓您知道：您不需要急著把一切說得完美。</p>
            <p>從第一次談話開始，我們會以可以理解的語言說明程序與選項，陪您一步一步，做出更貼近自己與家人的決定。</p>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><div><span className="section-label">服務範圍</span><h2>每一種家的難題，<br />都值得被好好看見。</h2></div><p>從關係的轉折到權益的安排，<br />我們提供清楚、細緻的家事法律協助。</p></div>
        <div className="service-grid">
          {services.map(([number, title, text, href]) => <article className="service-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><a href={href} aria-label={`了解更多：${title}`}>了解更多 <b>→</b></a></article>)}
        </div>
      </section>

      <section className="process section" id="process">
        <div className="process-intro"><span className="section-label">諮詢流程</span><h2>先讓自己，<br />有一個安心說話的地方。</h2></div>
        <div className="steps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="articles section" id="articles">
        <div className="section-heading"><div><span className="section-label">法普文章</span><h2>把重要的事，<br />說得清楚一些。</h2></div><p>法律資訊可以先讀懂，<br />真正的選擇仍值得好好討論。</p></div>
        <div className="article-stack">
          {articles.map((article, index) => (
            <article className={index === 0 ? "article-feature article-feature-primary" : "article-feature"} key={article.href}>
              <div className="article-meta"><span>{article.category}</span><time dateTime={article.dateTime}>{article.date}</time></div>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <a className="text-link" href={article.href}>閱讀文章 <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="section-heading"><div><span className="section-label">常見問題</span><h2>在開始之前，<br />您可以先知道這些事。</h2></div></div>
        <div className="faq-list">
          <details><summary>第一次諮詢，需要先準備什麼？</summary><p>帶著您目前已知的情況即可；若有重要文件、訊息或時間軸，也可以一併整理。我們會從您最想處理的問題開始。</p></details>
          <details><summary>我還沒有決定要不要提起訴訟，也能諮詢嗎？</summary><p>可以。初談的目的，是先了解您目前的處境與選項，並透過事先預防、蒐證來保留存證及應對上的準備，並不代表您必須立即採取任何程序。</p></details>
          <details><summary>談話內容會被保密嗎？</summary><p>我們重視每一段談話的隱私與信任，會依律師專業倫理及相關規範處理您的資訊。</p></details>
        </div>
      </section>

      <section className="contact" id="contact">
        <div><span className="section-label">諮詢資訊</span><h2>下一站，不必一個人走。</h2><p>司宇律法諮詢事務所<br />林司涵律師・羅顥程律師・詹宗憲律師</p></div>
        <div className="contact-details"><p><strong>諮詢費</strong><br />每小時 5,000 元；如後續就案件委任，得折抵委任費。</p><p><strong>事務所地址</strong><br />高雄市鹽埕區府北里七賢二路468號3樓</p><a className="button button-light line-button" href="https://line.me/R/ti/p/@070fguhy" target="_blank" rel="noreferrer">LINE 諮詢 <span aria-hidden="true">→</span></a></div>
      </section>

      <footer><a className="brand" href="#top"><span>家的下一站</span><i>｜</i><span>家事法律</span></a><p>司宇律法諮詢事務所｜高雄市鹽埕區府北里七賢二路468號3樓<br />本網站內容僅供一般資訊參考，個案仍須依實際情況進行法律評估。</p><span>© 2026 家的下一站｜家事法律</span></footer>
    </main>
  );
}
