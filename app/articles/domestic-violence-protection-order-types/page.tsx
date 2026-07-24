import type { Metadata } from "next";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "家暴保護令怎麼申請？緊急、暫時、通常保護令差在哪｜家的下一站｜家事法律",
  description:
    "整理家暴緊急、暫時與通常保護令的聲請人、適用情況、法院程序、效力及證據準備重點。",
};

const orderTypes = [
  {
    name: "緊急保護令",
    situation: "被害人有受家庭暴力的急迫危險",
    applicant: "檢察官、警察機關或地方主管機關",
    process: "可於夜間或休息日聲請；符合法定條件時，法院應於四小時內核發",
  },
  {
    name: "暫時保護令",
    situation: "通常保護令審理完成前，需要先建立安全安排",
    applicant: "被害人或其他依法有權聲請者",
    process: "法院為保護被害人，可不經完整審理程序先行核發",
  },
  {
    name: "通常保護令",
    situation: "法院審理後，認有家庭暴力事實且有保護必要",
    applicant: "被害人或其他依法有權聲請者",
    process: "內容較完整；有效期間為二年以下，符合條件可聲請延長",
  },
];

export default function DomesticViolenceProtectionOrderTypesArticle() {
  return (
    <main className="article-page">
      <nav className="article-nav">
        <a className="brand" href={sitePath("/")}>家的下一站<i>｜</i>家事法律</a>
        <a className="text-link" href={sitePath("/")}>回到首頁 <span aria-hidden="true">→</span></a>
      </nav>

      <article className="article-body">
        <header>
          <p className="section-label">家庭暴力保護 · 2026.07.20</p>
          <h1>家暴保護令怎麼申請？緊急、暫時、通常保護令差在哪</h1>
          <p className="article-lead">
            家暴不一定只是在家裡被打。當身體、精神或經濟上的騷擾、控制與脅迫發生時，真正要先判斷的，是現在有沒有急迫危險，以及需要哪一種保護令。
          </p>
        </header>

        <section>
          <h2>危險正在發生時，先處理安全</h2>
          <p>
            依《家庭暴力防治法》，家庭成員間實施身體、精神或經濟上的騷擾、控制、脅迫或其他不法侵害，都可能構成家庭暴力。如果暴力正在發生，或對方揚言立即上門、持續跟監，剛施暴後又有再犯風險，應先撥打110或請警方介入；需要保護、安置或社政協助，也可以撥打113保護專線。
          </p>
          <p>
            緊急保護令並不是由被害人自行向法院提出，而是由檢察官、警察機關或直轄市、縣市主管機關向法院聲請。被害人本人可以向法院聲請通常保護令或暫時保護令；至於個案應採哪一種程序，仍須依當下風險與資料判斷。
          </p>
        </section>

        <section>
          <h2>三種保護令，差別先看這張表</h2>
          <div className="article-table-wrap">
            <table className="article-table">
              <thead>
                <tr><th>類型</th><th>適用情況</th><th>由誰聲請</th><th>主要程序</th></tr>
              </thead>
              <tbody>
                {orderTypes.map((order) => (
                  <tr key={order.name}>
                    <th scope="row">{order.name}</th>
                    <td>{order.situation}</td>
                    <td>{order.applicant}</td>
                    <td>{order.process}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            暫時保護令與緊急保護令，自法院核發時起生效，原則上會持續到聲請人撤回通常保護令聲請、法院核發通常保護令，或法院駁回聲請時為止。法院核發這兩類保護令時，依法也可以不經完整審理程序。
          </p>
        </section>

        <section>
          <h2>保護令可以處理的不只「禁止打人」</h2>
          <p>
            法院核發通常保護令時，可以禁止相對人施暴、騷擾、接觸、跟蹤、通話或其他非必要聯絡，也可以命相對人遷出住居所、遠離被害人的住所、學校、工作場所或其他經常出入的地點。
          </p>
          <p>
            案件涉及未成年子女時，法院還可能暫時安排未成年子女權利義務的行使或負擔、命交付子女，或決定會面交往的時間、地點與方式；必要時，得禁止會面交往。通常保護令也可能命相對人給付被害人住居所租金，以及被害人與未成年子女的扶養費。
          </p>
          <p>
            不過，暫時保護令及緊急保護令依法可以核發的命令範圍，比通常保護令較窄，不能把通常保護令的所有項目一概套用。聲請時仍應依最急迫的安全與生活需要，具體說明希望法院處理的事項。
          </p>
        </section>

        <section>
          <h2>證據不只包括驗傷單</h2>
          <p>
            對方反覆傳送威脅訊息、堵人、跟監、控制經濟，或未經同意將未成年子女帶離、拒絕交付子女等情形，即使外觀上不像傳統印象中的肢體暴力，仍可能涉及家庭暴力。是否核發保護令以及命令內容，仍由法院依個案事實、證據與危險程度判斷。
          </p>
          <p>
            可以整理的資料包括訊息與通話紀錄、照片、驗傷單、就醫及報案紀錄、目擊者資料，也包括孩子的接送、就學、主要照顧及生活需求。若涉及未成年子女，法院處理子女相關命令時，核心仍會回到未成年子女最佳利益。
          </p>
        </section>

        <aside className="article-note">
          <strong>程序更新提醒</strong>
          <p>
            《家庭暴力防治法》第12條已有緊急保護令得以言詞、電信傳真或其他科技設備聲請的依據。司法院另於2026年7月15日公告相關家事文書傳真作業，將自2026年8月1日起生效；本文發布日為2026年7月20日，該公告目前尚未生效，實際送件方式仍應向承辦機關確認。
          </p>
        </aside>

        <section>
          <h2>保護令之後，可能還有其他程序</h2>
          <p>
            保護令是以安全與保護需要為核心，不代表離婚、親權、扶養費、長期會面交往或刑事責任都會在同一程序中一次解決。若案件同時涉及這些問題，仍可能需要分別評估後續家事或刑事程序。
          </p>
          <p>
            如果想進一步了解保護令如何處理未成年子女，可以接著閱讀<a className="inline-link" href={sitePath("/articles/protection-order-children/")}>〈保護令可以同時處理孩子嗎？〉</a>。
          </p>
        </section>

        <aside className="article-note emergency-note">
          <strong>安全優先</strong>
          <p>
            本文僅提供一般法律資訊，不構成個案法律意見，也不保證法院一定核發保護令或特定命令。若危險正在發生，請先撥打110；需要保護、安置或社政協助，可撥打113保護專線，再依實際情況向警方、地方家暴防治中心或律師尋求協助。
          </p>
        </aside>

        <section className="sources">
          <h2>參考資料</h2>
          <ul>
            <li><a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=D0050071" target="_blank" rel="noreferrer">全國法規資料庫：家庭暴力防治法</a></li>
            <li><a href="https://www.judicial.gov.tw/tw/cp-1710-1581602-e76e4-1.html" target="_blank" rel="noreferrer">司法院2026年7月15日公告（自2026年8月1日生效）</a></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
