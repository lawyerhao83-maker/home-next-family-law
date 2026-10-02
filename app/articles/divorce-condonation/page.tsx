import type { Metadata } from "next";
import { sitePath } from "../../site-path";

const articleUrl =
  "https://lawyerhao83-maker.github.io/home-next-family-law/articles/divorce-condonation/";

export const metadata: Metadata = {
  title: "原諒外遇後還能離婚嗎？宥恕的認定與求償影響｜家的下一站｜家事法律",
  description:
    "原諒外遇、繼續同住或再給一次機會，是否構成宥恕？說明民法第1053條、法院認定標準，以及離婚與向第三人求償的差異。",
  alternates: { canonical: articleUrl },
  openGraph: {
    title: "原諒外遇後還能離婚嗎？宥恕的認定與求償影響",
    description:
      "原諒外遇、繼續同住或再給一次機會，是否構成宥恕？說明法院認定標準，以及離婚與向第三人求償的差異。",
    type: "article",
    publishedTime: "2026-10-01",
    url: articleUrl,
  },
  twitter: {
    card: "summary",
    title: "原諒外遇後還能離婚嗎？宥恕的認定與求償影響",
    description:
      "原諒外遇、繼續同住或再給一次機會，是否構成宥恕？一次看懂離婚與求償的差異。",
  },
};

export default function DivorceCondonationArticle() {
  return (
    <main className="article-page">
      <nav className="article-nav">
        <a className="brand" href={sitePath("/")}>家的下一站<i>｜</i>家事法律</a>
        <a className="text-link" href={sitePath("/articles/")}>文章總覽 <span aria-hidden="true">→</span></a>
      </nav>

      <article className="article-body">
        <header>
          <p className="section-label">離婚與外遇 · 2026.10.01</p>
          <h1>原諒外遇後還能離婚嗎？宥恕的認定與求償影響</h1>
          <p className="article-lead">
            原諒外遇、繼續同住或再給一次機會，是否構成法律上的宥恕？離婚與向第三人求償，必須分別判斷。
          </p>
        </header>

        <section>
          <p>
            發現配偶外遇後，有人為了孩子繼續同住，有人決定再給對方一次機會。這些選擇，會不會被認定為法律上的「宥恕」？
          </p>
          <p>
            <strong>宥恕可能限制以該次重婚或合意性交請求裁判離婚，但不代表所有離婚與求償權利都消失。</strong> 是否構成宥恕，必須看當時知道哪些事實，以及有沒有原諒並願意繼續婚姻生活的感情表達。<a href="https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LSID=FL001351&LawNo=1053" target="_blank" rel="noreferrer">民法第1053條</a>、<a href="https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=TPSU%2c91%2c%e5%8f%b0%e4%b8%8a%2c352%2c20020307&ot=in" target="_blank" rel="noreferrer">最高法院91年度台上字第352號判決</a>
          </p>
        </section>

        <section>
          <h2>宥恕影響哪些離婚事由？</h2>
          <p>
            民法第1053條針對的是「重婚」及「與配偶以外之人合意性交」。有離婚請求權的一方，如果事前同意、事後宥恕，或知悉後已逾六個月、情事發生後已逾二年，便不能再以該情事請求離婚。這些是各自獨立的限制；沒有原諒，也可能面臨期間問題。<a href="https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LSID=FL001351&LawNo=1052" target="_blank" rel="noreferrer">民法第1052條</a>、<a href="https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LSID=FL001351&LawNo=1053" target="_blank" rel="noreferrer">第1053條</a>
          </p>
          <p>
            日常所說的「外遇」範圍較廣。曖昧訊息或親密往來，不能直接等同法律上的合意性交，應依具體行為評估適用的離婚事由。
          </p>
        </section>

        <section>
          <h2>繼續同住、沒有吵架，就算宥恕嗎？</h2>
          <p>
            不當然。最高法院指出，不能只因配偶知道婚外性行為後沒有爭執、聽任其存在，就直接認定已經宥恕；仍須有原諒該行為並願繼續維持婚姻生活的感情表示。<a href="https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=TPSU%2c91%2c%e5%8f%b0%e4%b8%8a%2c352%2c20020307&ot=in" target="_blank" rel="noreferrer">最高法院91年度台上字第352號判決</a>
          </p>
          <p>
            依此標準，同住、一起照顧孩子或沒有立即起訴，都應放回完整生活背景判斷，不能只看單一舉動。傳訊息說「我原諒你」則是重要證據，但仍要看對話前後文、原諒的事件範圍及後續互動。
          </p>
        </section>

        <section>
          <h2>再給一次機會，之後就不能離婚嗎？</h2>
          <p>
            不能一概而論。應分開核對原先知悉並原諒的事實、後來是否發生新的行為，以及各事件的時間，不能單憑「以前原諒過」便概括處理。
          </p>
          <p>
            若另有不堪同居虐待，或其他難以維持婚姻的重大事由，仍須依各自要件評估。但也不能只替同一事件換個法條，就認為一定能避開宥恕的限制。<a href="https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LSID=FL001351&LawNo=1052" target="_blank" rel="noreferrer">民法第1052條</a>、<a href="https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LSID=FL001351&LawNo=1053" target="_blank" rel="noreferrer">第1053條</a>
          </p>
        </section>

        <section>
          <h2>原諒配偶，還能向第三人求償嗎？</h2>
          <p>
            <strong>宥恕與放棄損害賠償，需要分別判斷。</strong> 臺南地方法院112年度訴字第882號判決區分「宥恕」與「債務免除」，認為侵權行為的賠償債務，不會僅因被害人宥恕就消滅。
          </p>
          <p>
            不過，臺灣高等法院111年度上易字第1186號判決，曾在個案中將宥恕等因素納入判斷，減少第三人應付的賠償。前述臺南地院判決明確未採取相同見解，因此不能宣稱法院已有一致答案。
          </p>
          <p>
            求償仍須符合侵權行為及配偶身分法益受侵害、情節重大等要件；若另有和解書或免除賠償的約定，也須核對其內容與效力。<a href="https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LSID=FL001351&LawNo=184" target="_blank" rel="noreferrer">民法第184條</a>、<a href="https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LSID=FL001351&LawNo=195" target="_blank" rel="noreferrer">第195條</a>、<a href="https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LSID=FL001351&LawNo=343" target="_blank" rel="noreferrer">第343條</a>
          </p>
        </section>

        <section>
          <h2>諮詢前，先整理哪些資料？</h2>
          <p>
            建議整理事件發生與知悉日期、完整對話、道歉或和解文件，以及繼續同住的原因。這有助於確認原諒的範圍，並分別評估離婚與求償。
          </p>
          <p>
            求償期間也與離婚限制不同：侵權行為請求權原則上涉及知悉損害及賠償義務人起二年、侵權行為起十年的時效；對配偶的權利，另有婚姻關係消滅後一年內時效不完成的規定，不能直接把同一日期套用到所有對象。<a href="https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LSID=FL001351&LawNo=197" target="_blank" rel="noreferrer">民法第197條</a>、<a href="https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LSID=FL001351&LawNo=143" target="_blank" rel="noreferrer">第143條</a>
          </p>
        </section>

        <aside className="article-note">
          <p>
            本文為臺灣法律的一般資訊，並非個案法律意見。是否構成宥恕、可否離婚或求償，應由律師依完整事實與證據評估。
          </p>
        </aside>
      </article>
    </main>
  );
}
