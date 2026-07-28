import type { Metadata } from "next";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "贍養費、扶養費、未成年子女扶養費差在哪？離婚時最常搞混的3筆錢｜家的下一站｜家事法律",
  description:
    "說明法定贍養費、婚姻存續中的夫妻扶養費，以及不因離婚而消失的未成年子女扶養費，在法律基礎、請求時點與保護對象上的差異。",
  openGraph: {
    title: "贍養費、扶養費、未成年子女扶養費差在哪？",
    description: "離婚時最常搞混的3筆錢，一次分清楚法律基礎、請求時點與保護對象。",
    type: "article",
    publishedTime: "2026-07-27",
    url: "https://lawyerhao83-maker.github.io/home-next-family-law/articles/alimony-spousal-support-child-support/",
    images: [{
      url: "https://lawyerhao83-maker.github.io/home-next-family-law/article-alimony-support-og.png",
      width: 1536,
      height: 1024,
      alt: "贍養費、扶養費、未成年子女扶養費差在哪？",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "贍養費、扶養費、未成年子女扶養費差在哪？",
    description: "離婚時最常搞混的3筆錢，一次分清楚。",
    images: ["https://lawyerhao83-maker.github.io/home-next-family-law/article-alimony-support-og.png"],
  },
};

const paymentTypes = [
  {
    name: "贍養費",
    timing: "判決離婚後，且符合民法第1057條的嚴格要件",
    recipient: "符合條件的前配偶",
    purpose: "填補離婚後陷於生活困難者的個人生活需要",
  },
  {
    name: "夫妻扶養費",
    timing: "婚姻關係仍存在時",
    recipient: "有受扶養必要的配偶",
    purpose: "履行夫妻彼此的扶養義務",
  },
  {
    name: "未成年子女扶養費",
    timing: "子女未成年期間，不因父母離婚而消失",
    recipient: "未成年子女",
    purpose: "負擔孩子的生活、教育、醫療等成長需要",
  },
];

export default function AlimonySpousalSupportChildSupportArticle() {
  return (
    <main className="article-page">
      <nav className="article-nav">
        <a className="brand" href={sitePath("/")}>家的下一站<i>｜</i>家事法律</a>
        <a className="text-link" href={sitePath("/")}>回到首頁 <span aria-hidden="true">→</span></a>
      </nav>

      <article className="article-body">
        <header>
          <p className="section-label">離婚與扶養 · 2026.07.27</p>
          <h1>贍養費、扶養費、未成年子女扶養費差在哪？離婚時最常搞混的3筆錢</h1>
          <p className="article-lead">
            一談到離婚，很多人最先想到的就是：「對方要不要付我贍養費？」但在法律上，離婚時常被混在一起談的，其實是三種不同性質的給付：贍養費、夫妻扶養費、未成年子女扶養費。
          </p>
        </header>

        <section>
          <h2>先講結論</h2>
          <ul className="article-list">
            <li>贍養費的法定適用範圍最窄。</li>
            <li>夫妻扶養費通常發生在婚姻關係還存在時。</li>
            <li>未成年子女扶養費則是父母對孩子的義務，不會因為離婚就消失。</li>
          </ul>
          <p>
            如果把這三者分清楚，談離婚條件、擬協議、進調解或進法院時，才不會一開始就用錯法律概念。
          </p>
        </section>

        <section>
          <h2>一、什麼是贍養費？</h2>
          <p>
            依民法第1057條，夫妻無過失之一方，因判決離婚而陷於生活困難者，得向他方請求相當的贍養費。
          </p>
          <p>
            這代表，法律上的「贍養費」不是只要離婚就一定有，也不是收入較少的一方就當然可以請求。從現行法規與實務來看，通常至少要同時面對幾個門檻：
          </p>
          <ul className="article-list">
            <li>請求方原則上須屬無過失之一方。</li>
            <li>通常須屬判決離婚。</li>
            <li>還要證明自己因離婚陷於生活困難。</li>
          </ul>

          <h3>現行實務上，贍養費判准門檻通常較高</h3>
          <p>
            這一點很重要。很多人以為，離婚後生活變差，就自然可以向前配偶請求贍養費；但實際上，法定贍養費的判准門檻相對高，法院審查也通常較嚴格。
          </p>
          <p>
            司法院公報所載最高法院裁判要旨指出，民法第1057條所定贍養費，是為填補婚姻中生活保持請求權消滅後的生活需要，其範圍以權利人個人生活所需為核心，並不是離婚後對方當然必須長期供養。後續裁判也進一步說明，贍養費不是單純的離婚賠償，更不是當然終身保障，法院會綜合考量請求方的年齡、身分、工作能力、生活程度，以及相對人的資力來判斷。
          </p>
          <p>
            換句話說，法定贍養費不是「離婚後的標配」，而是要件相對嚴格、個案性很強的請求權。
          </p>
        </section>

        <section>
          <h2>二、什麼是夫妻扶養費？</h2>
          <p>
            很多人口語上講的「扶養費」，其實指的是夫妻間的扶養義務。
          </p>
          <p>
            依民法第1116條之1，夫妻互負扶養義務。這種扶養義務的重點是：婚姻關係還存在時，夫妻彼此本來就有互相扶養的責任。
          </p>
          <p>
            所以，如果雙方還沒離婚，只是分居、衝突、已經在談離婚或正在打離婚官司，經濟較弱勢的一方，真正可能涉及的問題，往往是婚姻存續中的夫妻扶養，而不是離婚後的法定贍養費。
          </p>

          <h3>夫妻扶養費不是一開口就一定會有</h3>
          <p>
            夫妻扶養義務也不是一方主張，另一方就必須無條件支付。法院通常仍會看：
          </p>
          <ul className="article-list">
            <li>雙方的收入與財產狀況。</li>
            <li>是否已有工作能力與謀生能力。</li>
            <li>是否確實有受扶養的必要。</li>
            <li>相對人是否具備負擔能力。</li>
          </ul>
          <p>
            因此，夫妻扶養和贍養費雖然都和生活支持有關，但發生的時點與法律結構並不相同。
          </p>
        </section>

        <section>
          <h2>三、什麼是未成年子女扶養費？</h2>
          <p>
            這是離婚時最重要，也最常被誤會的一筆錢。
          </p>
          <p>
            依民法第1116條之2，父母對未成年子女的扶養義務，不因離婚而受影響。也就是說，即使離婚後孩子主要跟其中一方生活，另一方對孩子的扶養義務原則上仍然存在。
          </p>
          <p>
            這筆錢的法律目的，是照顧孩子，不是照顧前配偶。
          </p>

          <h3>有親權，不代表另一方就不用分擔費用</h3>
          <p>
            很多人會把親權和扶養費綁在一起理解，這其實不夠精確。民法第1055條處理的是離婚後未成年子女權利義務由誰行使或負擔，以及會面交往等安排；但由誰主要照顧孩子，不代表另一方就可以完全不分擔費用。
          </p>
          <p>
            孩子的生活費、教育費、醫療費，原則上仍應依個案情況，由父母按能力分擔。簡單說，主要照顧者不等於單獨負擔者。
          </p>
        </section>

        <section>
          <h2>四、三筆錢怎麼快速分？</h2>
          <div className="article-table-wrap">
            <table className="article-table">
              <thead>
                <tr><th>類型</th><th>發生時點</th><th>保護對象</th><th>主要目的</th></tr>
              </thead>
              <tbody>
                {paymentTypes.map((payment) => (
                  <tr key={payment.name}>
                    <th scope="row">{payment.name}</th>
                    <td>{payment.timing}</td>
                    <td>{payment.recipient}</td>
                    <td>{payment.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>如果要用最簡單的方式記住：</p>
          <ul className="article-list">
            <li>贍養費：離婚後在特定嚴格條件下，給前配偶的。</li>
            <li>夫妻扶養費：婚姻關係還存在時，配偶彼此間的扶養義務。</li>
            <li>未成年子女扶養費：父母對孩子的責任，不因離婚而消失。</li>
          </ul>
          <p>
            這三者的法律基礎、請求時點與保護對象都不同，不能混成一筆，也不能只靠日常用語判斷。
          </p>
        </section>

        <section>
          <h2>五、離婚時最常見的誤解</h2>
          <h3>1. 只要離婚，就一定有贍養費</h3>
          <p>不一定。法定贍養費有明確要件，不是離婚就當然成立。</p>

          <h3>2. 收入比較少，就可以直接請求贍養費</h3>
          <p>不一定。法院通常還會看是否符合民法第1057條所要求的條件，尤其是否已因離婚陷於生活困難。</p>

          <h3>3. 拿到親權，另一方就不用付孩子的費用</h3>
          <p>不對。未成年子女扶養義務不因離婚消失，原則上仍由父母依能力分擔。</p>

          <h3>4. 所有離婚後的金錢安排都叫贍養費</h3>
          <p>不對。很多情況其實是夫妻扶養或未成年子女扶養，不是法律上狹義的贍養費。</p>
        </section>

        <section>
          <h2>六、結語</h2>
          <p>
            離婚談到錢，最怕的不是數字難算，而是把不同性質的請求混在一起。先分清楚贍養費、夫妻扶養費、未成年子女扶養費，才能更精準判斷自己真正面對的是哪一種法律問題，也比較知道該怎麼談、怎麼蒐集資料、怎麼和律師討論。
          </p>
          <p>
            如果你正面臨分居、協議離婚或家事訴訟，建議不要只用「贍養費」一個詞概括所有問題，而應先釐清：這筆錢是給前配偶的、給婚姻存續中的配偶的，還是給孩子的。概念分清楚，後面的協商與法律判斷才會準。
          </p>
        </section>

        <section>
          <h2>常見問題 FAQ</h2>
          <h3>Q1：贍養費和子女扶養費可以一起談嗎？</h3>
          <p>
            可以一起處理，但法律性質不同。前者是前配偶間的問題，後者是父母對未成年子女的責任，不能混成同一筆。
          </p>

          <h3>Q2：我沒有工作，就一定能請求贍養費嗎？</h3>
          <p>
            不一定。法院仍會看你是否符合民法第1057條要件，也會看年齡、身分、工作能力、生活程度及對方資力。
          </p>

          <h3>Q3：孩子跟我住，對方就一定要固定付錢嗎？</h3>
          <p>
            原則上，父母對未成年子女扶養義務不因離婚消失，但實際負擔方式、金額與比例，仍要依個案情況判斷。
          </p>
        </section>

        <aside className="article-note">
          <strong>提醒</strong>
          <p>
            本文提供一般法律資訊，不構成特定個案的法律意見。贍養費、夫妻扶養費與未成年子女扶養費的要件、金額及請求方式，仍須依婚姻狀態、既有協議、雙方資力、照顧分工與個案證據分別評估。
          </p>
        </aside>

        <section className="sources">
          <h2>參考資料</h2>
          <ul>
            <li><a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?flno=1057&pcode=B0000001" target="_blank" rel="noreferrer">全國法規資料庫：民法第1057條</a></li>
            <li><a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?flno=1116-1&pcode=B0000001" target="_blank" rel="noreferrer">全國法規資料庫：民法第1116條之1</a></li>
            <li><a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?flno=1116-2&pcode=B0000001" target="_blank" rel="noreferrer">全國法規資料庫：民法第1116條之2</a></li>
            <li><a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?flno=1055&pcode=B0000001" target="_blank" rel="noreferrer">全國法規資料庫：民法第1055條</a></li>
            <li><a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?flno=1117&pcode=B0000001" target="_blank" rel="noreferrer">全國法規資料庫：民法第1117條</a></li>
            <li><a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?flno=1119&pcode=B0000001" target="_blank" rel="noreferrer">全國法規資料庫：民法第1119條</a></li>
            <li><a href="https://www.judicial.gov.tw/tw/lp-1386-1-177-60.html" target="_blank" rel="noreferrer">司法院公報第40卷第8期：最高法院87年度台上字第128號裁判要旨</a></li>
            <li><a href="https://www.judicial.gov.tw/tw/cp-1429-1400534-f63dc-1.html" target="_blank" rel="noreferrer">司法院：最高法院民事大法庭113年度台簡抗大字第246號裁定</a></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
