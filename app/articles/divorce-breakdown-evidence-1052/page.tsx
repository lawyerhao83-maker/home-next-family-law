import type { Metadata } from "next";
import { sitePath } from "../../site-path";

const articleTitle =
  "感情破裂就能判離婚嗎？民法第1052條第2項的婚姻破綻與蒐證重點";
const articleUrl =
  "https://lawyerhao83-maker.github.io/home-next-family-law/articles/divorce-breakdown-evidence-1052/";

const sources = {
  civilCode: "https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=B0000001&flno=1052",
  supreme930:
    "https://judgment.judicial.gov.tw/FJUD/printData.aspx?id=TPSV%2C112%2C%E5%8F%B0%E4%B8%8A%2C930%2C20240103%2C1",
  tainan117:
    "https://judgment.judicial.gov.tw/FJUD/printData.aspx?id=TNDU%2C113%2C%E5%A9%9A%2C117%2C20250430%2C1",
  chiayi134:
    "https://judgment.judicial.gov.tw/FJUD/printData.aspx?id=CYDU%2C112%2C%E5%A9%9A%2C134%2C20240314%2C1",
  procedure: "https://www.judicial.gov.tw/tw/cp-165-123027-1420b-1.html",
  supreme1612: "https://www.judicial.gov.tw/tw/cp-1888-1007966-8fdcd-1.html",
  constitutional4: "https://cons.judicial.gov.tw/docdata.aspx?fid=40&id=310013",
};

export const metadata: Metadata = {
  title: `${articleTitle}｜家的下一站｜家事法律`,
  description:
    "民法第1052條第2項的婚姻破綻要到什麼程度？整理吵架、冷戰、分居的法院判斷重點與蒐證表格，說明雙方有責及唯一有責配偶的離婚請求。",
  alternates: { canonical: articleUrl },
  openGraph: {
    title: articleTitle,
    description:
      "感情破裂不等於當然判准離婚。一次看懂婚姻破綻、證據準備與有責配偶的請求限制。",
    type: "article",
    publishedTime: "2026-10-02",
    url: articleUrl,
  },
  twitter: {
    card: "summary",
    title: articleTitle,
    description:
      "以兩組表格整理婚姻破綻的判斷程度與蒐證重點，附官方法條及裁判來源。",
  },
};

export default function DivorceBreakdownEvidenceArticle() {
  return (
    <main className="article-page">
      <nav className="article-nav" aria-label="文章導覽">
        <a className="brand" href={sitePath("/")}>家的下一站<i>｜</i>家事法律</a>
        <a className="text-link" href={sitePath("/articles/")}>文章總覽 <span aria-hidden="true">→</span></a>
      </nav>

      <article className="article-body">
        <header>
          <p className="section-label">離婚與婚姻破綻 · <time dateTime="2026-10-02">2026.10.02</time></p>
          <h1>{articleTitle}</h1>
          <p className="article-lead">
            感情破裂不等於當然判准離婚。法院會綜合判斷婚姻是否已發生重大破綻、難以維持，以及是否仍有合理的修復可能。
          </p>
        </header>

        <section>
          <p>「我們早就沒有感情了，為什麼法院還不一定准離婚？」</p>
          <p>
            許多人以為，只要夫妻長期吵架、分居，或一方堅持不想繼續婚姻，就能請法院判決離婚。但依民法第1052條第2項，法院必須判斷：婚姻是否已發生重大破綻，客觀上難以維持，而且難以期待修復。
          </p>
          <p>
            因此，離婚訴訟的重點不只在表達「我想離婚」，更在於提出具體事實與證據，讓法院理解這段婚姻如何走到難以繼續共同生活的程度。
          </p>
        </section>

        <section>
          <h2>一、什麼是民法第1052條第2項的「婚姻破綻」？</h2>
          <p>民法第1052條第2項規定：</p>
          <blockquote className="article-note">
            <p>有前項以外之重大事由，難以維持婚姻者，夫妻之一方得請求離婚。但其事由應由夫妻之一方負責者，僅他方得請求離婚。</p>
          </blockquote>
          <p>
            這項規定提供概括性的離婚事由。即使夫妻間的問題不完全符合第1項列舉的離婚原因，仍可能依整體情況，認定婚姻已經難以維持。<a className="inline-link" href={sources.civilCode} target="_blank" rel="noreferrer">民法第1052條</a>
          </p>
          <p>
            法院判斷時，會觀察婚姻是否已失去共同生活、互信與相互扶持的實質基礎，以及是否仍有合理的修復可能。一方主觀上覺得婚姻不幸福，與法律上已達重大破綻，是不同層次的問題。<a className="inline-link" href={sources.supreme930} target="_blank" rel="noreferrer">最高法院112年度台上字第930號民事判決</a>
          </p>
        </section>

        <section>
          <h2>二、吵架、冷戰或分居，要到什麼程度才足夠？</h2>
          <p>
            現行規定沒有「吵架幾次」「分居滿幾年」就必須判准離婚的固定門檻。法院會綜合事件性質、持續時間、夫妻互動及後續發展判斷。
          </p>
          <p>以下依裁判所呈現的判斷方式整理，並非每個案件都必須具備全部情況：</p>
          <div className="article-table-wrap" tabIndex={0} role="region" aria-label="婚姻破綻判斷重點表，可左右捲動">
            <table className="article-table">
              <thead>
                <tr><th scope="col">情況</th><th scope="col">單獨提出時的證明限制</th><th scope="col">應進一步說明的重點</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">經常吵架</th><td>尚須區分一般摩擦與重大衝突</td><td>爭執原因、頻率、具體言行及影響</td></tr>
                <tr><th scope="row">長期冷戰</th><td>「很少說話」可能只是概括描述</td><td>是否長期失去溝通、照顧及共同生活</td></tr>
                <tr><th scope="row">分房或分居</th><td>不當然代表感情無法修復</td><td>起因、期間、互動及是否曾恢復共同生活</td></tr>
                <tr><th scope="row">經濟問題</th><td>收入差距或一次欠款未必足夠</td><td>費用分擔、債務、拒絕協力及家庭影響</td></tr>
                <tr><th scope="row">不信任或疑似外遇</th><td>猜疑不等於事實已獲證明</td><td>具體往來、承認、欺瞞及信任受損情形</td></tr>
                <tr><th scope="row">暴力、威脅或控制</th><td>須核對行為內容及證據</td><td>嚴重程度、持續風險及對婚姻安全的影響</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            長期反覆的小衝突，可能累積成無法修復的破綻；嚴重事件也可能在短時間內摧毀婚姻基礎。相反地，夫妻雖兩地居住，若仍共同安排家庭生活、相互關心與扶持，就不能只憑居住分開認定婚姻已經破裂。
          </p>
          <p>
            例如，臺南地方法院113年度婚字第117號判決，綜合夫妻多年分居、家庭費用與財產等問題長期無法協調，以及持續相互指責的情況，認定婚姻已難以維持。判斷基礎是整體關係的破裂，而非單一分居日期。<a className="inline-link" href={sources.tainan117} target="_blank" rel="noreferrer">該判決</a>
          </p>
        </section>

        <section>
          <h2>三、當事人應該準備哪些證據？</h2>
          <p>蒐證應圍繞三個問題：<strong>發生了什麼、如何影響婚姻、為什麼難以修復。</strong></p>
          <p>
            證據不必全部集中在「對方做錯什麼」。共同生活如何逐步消失、分居後是否仍有實質互動，以及改善是否成功，也可能影響法院判斷。
          </p>
          <div className="article-table-wrap" tabIndex={0} role="region" aria-label="婚姻破綻證據準備表，可左右捲動">
            <table className="article-table">
              <thead>
                <tr><th scope="col">要證明的事實</th><th scope="col">可準備的資料</th><th scope="col">整理時的注意事項</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">實際分居</th><td>租約、付款、搬家紀錄、訊息、證人</td><td>戶籍地址只是線索，仍須證明實際居住情況</td></tr>
                <tr><th scope="row">反覆衝突或威脅</th><td>完整對話、電子郵件、錄音原檔</td><td>保留日期、身分及前後文，避免只截取片段</td></tr>
                <tr><th scope="row">暴力事件</th><td>傷勢照片、診斷資料、報案紀錄、保護令、目擊證人</td><td>傷勢、行為人與事件經過最好能相互印證</td></tr>
                <tr><th scope="row">經濟協力失衡</th><td>匯款、家庭支出、催討費用訊息、照顧分工</td><td>須說明具體失衡，不能只比較收入高低</td></tr>
                <tr><th scope="row">信任基礎受損</th><td>承認、道歉、反覆欺瞞或不當往來資料</td><td>將事件與婚姻影響連結</td></tr>
                <tr><th scope="row">改善未果</th><td>協商訊息、實際諮商、承諾後再犯紀錄</td><td>諮商並非必要前提，但可能呈現修復過程</td></tr>
                <tr><th scope="row">目前各自生活</th><td>聯絡、照顧、費用及生活安排紀錄</td><td>說明現在是否仍有夫妻共同生活的實質</td></tr>
                <tr><th scope="row">破綻形成原因</th><td>各事件的時間軸及相應證據</td><td>釐清先後順序，避免把結果誤認為原因</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            嘉義地方法院112年度婚字第134號判決，曾綜合傷勢照片、錄音與具體威脅認定婚姻破綻；但對部分欠缺證據的「不關心孩子」等概括指控，並未直接採信。可見法院會逐項檢查主張與證據是否對應。<a className="inline-link" href={sources.chiayi134} target="_blank" rel="noreferrer">該判決</a>
          </p>
        </section>

        <section>
          <h2>四、哪些蒐證方式容易留下缺口？</h2>
          <p>第一，只有評價，沒有事件。例如「對方完全沒有責任感」，應進一步交代何時發生什麼事、有哪些資料支持。</p>
          <p>第二，只有診斷書，沒有其他脈絡。診斷資料可以支持身心狀況，卻不必然直接證明是配偶造成，也不當然代表婚姻無法修復。</p>
          <p>第三，只有分居日期。分居原因、期間內互動及後續發展，仍須說明。</p>
          <p>
            第四，忽略不利資料。曾經和好、共同旅行或恢復同住，可能影響法院判斷，應如實說明背景，而非省略。為子女或費用所作的必要聯絡，也應交代其性質，不能一概當成感情已修復。
          </p>
          <p>
            第五，把調解失敗當作唯一理由。未能談成離婚，並不等於法定要件已經成立；調解中的陳述或讓步，也不能直接作為後續本案裁判的基礎。<a className="inline-link" href={sources.procedure} target="_blank" rel="noreferrer">司法院家事程序須知</a>
          </p>
        </section>

        <section>
          <h2>五、自己也有責任，還能請求離婚嗎？</h2>
          <p>可以提出請求，但必須區分責任情況。</p>
          <p>
            最高法院112年度台上字第1612號指出，夫妻雙方對難以維持婚姻的重大事由均有責任時，原則上雙方都得請求離婚，不再以責任輕重比較作為限制。仍須先證明婚姻已達難以維持的程度。<a className="inline-link" href={sources.supreme1612} target="_blank" rel="noreferrer">最高法院官方說明</a>
          </p>
          <p>
            如果請求者是唯一有責的一方，則須進一步審查。憲法法庭112年憲判字第4號並未全面取消限制，而是要求對重大破綻已經過或持續相當期間、禁止離婚會造成顯然過苛的個案，作衡平判斷；判決未訂固定年數。<a className="inline-link" href={sources.constitutional4} target="_blank" rel="noreferrer">112年憲判字第4號</a>
          </p>
          <p>
            因此，不能只說「我們都吵過架」就認定雙方有責，也不能只憑對方不同意離婚，便認為對方應對破綻負責。仍須釐清具體行為與婚姻破裂之間的關係。
          </p>
        </section>

        <section>
          <h2>六、從一份清楚的婚姻時間軸開始</h2>
          <p>準備資料時，可以將重要事件逐一整理為：</p>
          <blockquote className="article-note">
            <p>日期 → 具體行為或原話 → 在場者 → 支持證據 → 婚姻影響 → 後續是否改善。</p>
          </blockquote>
          <p>
            再補充目前的居住、聯絡、照顧及經濟往來狀態，讓法院看見完整的婚姻發展過程。
          </p>
          <p>
            訊息、照片及錄音應保存原檔和完整脈絡；證人應以親身見聞為主。蒐證方式是否合法有疑問時，宜先請律師評估，避免因侵入帳號或不當監控衍生其他爭議。涉及子女時，也應避免要求孩子選邊或承擔父母蒐證的壓力。
          </p>
          <p>
            法院採認某件衝突發生，與認定婚姻已達重大破綻，是兩個不同判斷。完整而可核對的資料，才能協助律師評估請求依據、舉證缺口及訴訟風險。
          </p>
        </section>

        <aside className="article-note">
          <strong>提醒</strong>
          <p>
            本文為一般法律資訊，不構成特定案件的法律意見。實際能否依民法第1052條第2項判決離婚，仍須綜合夫妻相處、破綻原因、目前狀態及證據判斷，建議攜帶完整資料諮詢律師。
          </p>
        </aside>

        <section className="sources">
          <h2>官方資料來源</h2>
          <ol className="article-list">
            <li><a href={sources.civilCode} target="_blank" rel="noreferrer">全國法規資料庫：民法第1052條</a></li>
            <li><a href={sources.supreme930} target="_blank" rel="noreferrer">最高法院112年度台上字第930號民事判決</a></li>
            <li><a href={sources.tainan117} target="_blank" rel="noreferrer">臺灣臺南地方法院113年度婚字第117號民事判決</a></li>
            <li><a href={sources.chiayi134} target="_blank" rel="noreferrer">臺灣嘉義地方法院112年度婚字第134號民事判決</a></li>
            <li><a href={sources.procedure} target="_blank" rel="noreferrer">司法院：家事程序須知</a></li>
            <li><a href={sources.supreme1612} target="_blank" rel="noreferrer">最高法院112年度台上字第1612號請求離婚等事件新聞稿</a></li>
            <li><a href={sources.constitutional4} target="_blank" rel="noreferrer">憲法法庭112年憲判字第4號：限制唯一有責配偶請求裁判離婚案</a></li>
          </ol>
        </section>
      </article>
    </main>
  );
}
