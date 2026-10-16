import type { Metadata } from "next";
import { sitePath } from "../../site-path";

const articleUrl =
  "https://lawyerhao83-maker.github.io/home-next-family-law/articles/spouse-left-no-contact-divorce/";

export const metadata: Metadata = {
  title: "配偶離家失聯，可以直接離婚嗎？先分清惡意遺棄、婚姻破綻與子女安排｜家的下一站｜家事法律",
  description:
    "配偶離家失聯不會讓婚姻自動結束。說明惡意遺棄、重大婚姻破綻、生死不明，以及親權、扶養費與會面交往安排。",
  alternates: { canonical: articleUrl },
  openGraph: {
    title: "配偶離家失聯，可以直接離婚嗎？",
    description:
      "先分清惡意遺棄、重大婚姻破綻、生死不明，以及未成年子女的相關安排。",
    type: "article",
    publishedTime: "2026-10-16",
    url: articleUrl,
  },
  twitter: {
    card: "summary",
    title: "配偶離家失聯，可以直接離婚嗎？",
    description:
      "離家失聯不會讓婚姻自動結束。一次看懂離婚事由與未成年子女安排。",
  },
};

export default function SpouseLeftNoContactDivorceArticle() {
  return (
    <main className="article-page">
      <nav className="article-nav">
        <a className="brand" href={sitePath("/")}>家的下一站<i>｜</i>家事法律</a>
        <a className="text-link" href={sitePath("/articles/")}>文章總覽 <span aria-hidden="true">→</span></a>
      </nav>

      <article className="article-body">
        <header>
          <p className="section-label">離婚與婚姻破綻 · 2026.10.16</p>
          <h1>配偶離家失聯，可以直接離婚嗎？先分清惡意遺棄、婚姻破綻與子女安排</h1>
          <p className="article-lead">
            配偶搬離住處、不接電話，也不再參與家庭生活，婚姻不會因此自動結束。離家失聯可能是重要事實，但仍須依法判斷。
          </p>
        </header>

        <section>
          <p>
            配偶搬離住處、不接電話，也不再參與家庭生活，婚姻會因此自動結束嗎？不會。離家失聯可能成為請求法院判決離婚的重要事實，但仍須確認離家原因、持續情形及證據，判斷符合哪一種離婚事由。臺灣目前沒有「分居滿幾年，就一律可以離婚」的一般規則。
          </p>
        </section>

        <section>
          <h2>一、離家不等於惡意遺棄，要看原因與持續狀態</h2>
          <p>
            民法第1052條第1項第5款規定，一方以惡意遺棄他方且仍在繼續狀態中，他方得請求離婚。判斷時，不能只看誰先搬出去，還要釐清是否有正當理由、是否拒絕履行夫妻共同生活的義務，以及該狀態是否持續。
          </p>
          <p>
            例如，因家暴而離家避難，與無正當理由拒絕共同生活，法律評價並不相同；因工作或就醫暫時分住，也不能直接認定為惡意遺棄。民法第1001條對夫妻同居義務，本來就保留「不能同居之正當理由」的例外。<a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=B0000001&flno=1001" target="_blank" rel="noreferrer">民法第1001條</a>
          </p>
          <p>
            如果雙方原本同意分居，或留在住處的一方更換門鎖、拒絕對方返家，也應一併查明。單憑「對方不回家」，不足以完整說明責任歸屬。
          </p>
        </section>

        <section>
          <h2>二、不符合惡意遺棄，仍可能有重大婚姻破綻</h2>
          <p>
            民法第1052條第2項另規定，有難以維持婚姻的重大事由時，可以請求離婚。長期分居、完全失去聯繫、欠缺情感交流及共同生活，可能是判斷婚姻是否已破裂、難以回復的材料，但仍須綜合個案情況。<a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=B0000001&flno=1052" target="_blank" rel="noreferrer">民法第1052條</a>
          </p>
          <p>
            責任問題也不能沿用舊說法：夫妻雙方對重大婚姻破綻均須負責時，最高法院已統一見解，雙方均得依第2項本文請求離婚，無須再比較誰的責任較重。<a href="https://www.judicial.gov.tw/tw/cp-1888-1007966-8fdcd-1.html" target="_blank" rel="noreferrer">最高法院官方說明</a>
          </p>
          <p>
            若只有請求離婚的一方應負責，則須另看法律限制與憲法裁判所要求的「顯然過苛」例外；不能簡化成有責者永遠不能離婚，也不能說分居久了就一定准離。<a href="https://cons.judicial.gov.tw/docdata.aspx?fid=97&id=310013" target="_blank" rel="noreferrer">憲法法庭112年憲判字第4號</a>
          </p>
        </section>

        <section>
          <h2>三、「聯絡不到」與「生死不明」不同</h2>
          <p>
            民法第1052條第1項第9款另列「生死不明已逾三年」為離婚事由。但不回訊息、封鎖電話或不知道住址，不當然表示連生死都無法確知。
          </p>
          <p>
            反過來說，尚未滿三年，也不代表只能等待；若有其他離婚事由，仍可就惡意遺棄或重大婚姻破綻等方向評估。報案、協尋資料可以協助釐清事實，不能單憑報案紀錄就保證法院准許離婚。<a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=B0000001&flno=1052" target="_blank" rel="noreferrer">民法第1052條</a>
          </p>
        </section>

        <section>
          <h2>四、有孩子時，親權、扶養費與會面交往都要安排</h2>
          <p>
            父母離婚時，未成年子女權利義務由誰行使或負擔，可以先協議；未協議或協議不成，得由法院酌定。法院以子女最佳利益為中心，會考量子女意願、生活與照顧情形、父母照顧意願及能力、親子感情等因素。<a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=B0000001&flno=1055" target="_blank" rel="noreferrer">民法第1055條</a>、<a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=B0000001&flno=1055-1" target="_blank" rel="noreferrer">第1055條之1</a>
          </p>
          <p>
            長期實際照顧孩子是重要事實，但不會因此自動取得單獨親權。另一方失聯如何影響就醫、就學及日常決策，也應具體說明。即使尚未離婚，父母不繼續共同生活達六個月以上，符合條件時亦可依民法第1089條之1處理親權；該條另有正當理由等例外，須個別確認。<a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=B0000001&flno=1089-1" target="_blank" rel="noreferrer">民法第1089條之1</a>
          </p>
          <p>
            父母對未成年子女的扶養義務不因離婚消失；會面交往則應依子女利益安排，不能把孩子當作父母爭執的籌碼。<a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=B0000001&flno=1116-2" target="_blank" rel="noreferrer">民法第1116條之2</a>、<a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=B0000001&flno=1055" target="_blank" rel="noreferrer">第1055條</a>
          </p>
        </section>

        <section>
          <h2>五、諮詢律師前，先整理這些資料</h2>
          <p>
            建議準備離家及最後聯絡的時間軸、完整通訊紀錄、報案或協尋資料、家庭支出與匯款紀錄，以及子女日常照顧、就醫就學等資料。也要保留對自己不利或與原先說法不同的內容，讓律師能評估完整風險。
          </p>
          <p>
            蒐證應採合法方式，避免擅自登入帳號、裝設追蹤設備或公開家人隱私。若離家與暴力、威脅有關，應先確保自己與子女安全，再評估後續程序。
          </p>
        </section>

        <aside className="article-note">
          <p>
            本文提供一般法律資訊，不構成個案法律意見。是否符合離婚事由，以及親權、扶養費與會面交往如何安排，都須依具體事實與證據判斷，建議攜帶完整資料諮詢律師。
          </p>
        </aside>
      </article>
    </main>
  );
}
