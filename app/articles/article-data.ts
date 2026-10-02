export const articleTopics = [
  { id: "marriage", label: "離婚與婚姻關係" },
  { id: "property", label: "夫妻財產與贍養" },
  { id: "children", label: "子女親權與扶養" },
  { id: "inheritance", label: "繼承與遺囑" },
  { id: "protection", label: "家暴與保護令" },
] as const;

export type ArticleTopicId = (typeof articleTopics)[number]["id"];

export type FamilyArticle = {
  category: string;
  topic: ArticleTopicId;
  date: string;
  dateTime: string;
  title: string;
  summary: string;
  href: string;
};

// Add each article here once; the homepage and directory share this list.
export const articles: FamilyArticle[] = [
  {
    category: "離婚與婚姻破綻",
    topic: "marriage",
    date: "2026.10.02",
    dateTime: "2026-10-02",
    title: "感情破裂就能判離婚嗎？民法第1052條第2項的婚姻破綻與蒐證重點",
    summary:
      "吵架、冷戰或分居，要到什麼程度才能判離婚？以表格整理法院判斷重點與證據準備，說明雙方有責及唯一有責配偶的差異。",
    href: "/articles/divorce-breakdown-evidence-1052/",
  },
  {
    category: "離婚與外遇",
    topic: "marriage",
    date: "2026.10.01",
    dateTime: "2026-10-01",
    title: "原諒外遇後還能離婚嗎？宥恕的認定與求償影響",
    summary:
      "原諒外遇、繼續同住或再給一次機會，是否構成宥恕？說明法院認定標準，以及離婚與向第三人求償的差異。",
    href: "/articles/divorce-condonation/",
  },
  {
    category: "離婚與財產",
    topic: "property",
    date: "2026.09.30",
    dateTime: "2026-09-30",
    title: "離婚時怎麼算夫妻剩餘財產？先備齊這6類資料",
    summary:
      "離婚財產不是把所有財產直接各分一半。先整理婚姻日期、房產、存款、債務、財產來源及家庭分工，才能正確評估。",
    href: "/articles/divorce-marital-property-documents/",
  },
  {
    category: "離婚與扶養",
    topic: "children",
    date: "2026.09.07",
    dateTime: "2026-09-07",
    title: "離婚後扶養費怎麼算？不是沒帶小孩就不用付",
    summary:
      "未成年子女扶養費沒有全國統一公定價。法院會綜合孩子的實際需要、父母經濟能力及照顧分工判斷。",
    href: "/articles/child-support-after-divorce-calculation/",
  },
  {
    category: "離婚與親權",
    topic: "children",
    date: "2026.08.21",
    dateTime: "2026-08-21",
    title: "法院怎麼判未成年子女親權？從「最佳利益」看5個關鍵",
    summary:
      "法院不是只看收入高低，而會綜合評估照顧事實、親職態度、家庭安全、親子關係與孩子意願等因素。",
    href: "/articles/child-custody-best-interests-five-factors/",
  },
  {
    category: "繼承與遺囑",
    topic: "inheritance",
    date: "2026.08.07",
    dateTime: "2026-08-07",
    title: "預立遺囑怎麼做才有效？",
    summary:
      "遺囑不是寫下來就一定有效。一次整理自書、代筆、見證人資格、特留分與遺囑執行人的重要規定。",
    href: "/articles/valid-will-self-written-dictated-reserved-portion/",
  },
  {
    category: "繼承與遺囑",
    topic: "inheritance",
    date: "2026.07.31",
    dateTime: "2026-07-31",
    title: "兄弟姊妹特留分刪除後，遺產就一定不會分給手足嗎？",
    summary:
      "兄弟姊妹特留分刪除，不等於手足完全失去繼承權。整理修法進度、法定繼承與有效遺囑安排的差異。",
    href: "/articles/sibling-reserved-portion-after-repeal-2026/",
  },
  {
    category: "繼承與遺囑",
    topic: "inheritance",
    date: "2026.07.28",
    dateTime: "2026-07-28",
    title: "兄弟姊妹特留分刪除三讀通過：真正影響是什麼？",
    summary:
      "刪除兄弟姊妹特留分，不等於手足失去法定繼承權。一次看懂有無遺囑的差別、新法施行時間與遺產規劃重點。",
    href: "/articles/sibling-reserved-portion-repeal-2026/",
  },
  {
    category: "離婚與扶養",
    topic: "property",
    date: "2026.07.27",
    dateTime: "2026-07-27",
    title: "贍養費、扶養費、未成年子女扶養費差在哪？",
    summary:
      "離婚時最常被混在一起談的三筆錢，法律基礎、請求時點與保護對象都不同。一次分清楚，避免協議與訴訟一開始就用錯概念。",
    href: "/articles/alimony-spousal-support-child-support/",
  },
  {
    category: "離婚與親權",
    topic: "children",
    date: "2026.07.24",
    dateTime: "2026-07-24",
    title: "對方不讓我見小孩怎麼辦？",
    summary:
      "會面交往、酌定或改定、交付子女與暫時處分的目的不同。先確認現有法律關係，再依孩子現況選擇適合的程序。",
    href: "/articles/child-contact-visitation-orders/",
  },
  {
    category: "家庭暴力保護",
    topic: "protection",
    date: "2026.07.20",
    dateTime: "2026-07-20",
    title: "家暴保護令怎麼申請？緊急、暫時、通常保護令差在哪",
    summary:
      "有立即危險時該先找誰？三種保護令的聲請人、處理方式與效力並不相同。一次整理安全處置、法院程序及證據準備。",
    href: "/articles/domestic-violence-protection-order-types/",
  },
  {
    category: "繼承與繼親家庭",
    topic: "inheritance",
    date: "2026.07.15",
    dateTime: "2026-07-15",
    title: "繼母過世，繼子女能分到遺產嗎？",
    summary:
      "很多再婚家庭感情很好，但繼子女是否能分到繼父母遺產，仍要回到法定繼承、收養、遺囑與特留分等法律安排來看。",
    href: "/articles/stepchild-inheritance/",
  },
  {
    category: "家暴與子女安排",
    topic: "protection",
    date: "2026.07.15",
    dateTime: "2026-07-15",
    title: "保護令可以同時處理孩子嗎？",
    summary:
      "保護令除了禁止接觸，也可能涉及子女交付、會面交往與扶養費。先了解可以請求什麼、哪些問題仍需另循家事程序處理。",
    href: "/articles/protection-order-children/",
  },
];

export const newestArticles = [...articles].sort((a, b) =>
  b.dateTime.localeCompare(a.dateTime),
);
