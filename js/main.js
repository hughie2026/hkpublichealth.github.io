/* ================================================================
   HKPHTRC — Shared Scripts
   ================================================================ */

// 高亮當前頁面導航
function highlightCurrentNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// 移動端選單
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// 滾動時 header 陰影
function initScrollHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }, { passive: true });
}

// 新聞數據（共用）
const newsData = [
  {
    date: '2025-11-18',
    category: '中心動態',
    categoryEn: 'Institutional',
    title: '中心發布年度工作進展，持續推進灣區公共衛生科研協作',
    summary: '中心發布年度工作進展摘要，系統梳理科研規劃、團隊建設、學術交流與合作對接等方面的重點工作。',
    content: [
      '香港公眾健康技術研究中心於本月發布年度工作進展摘要，圍繞科研規劃、團隊建設、學術交流與合作對接等方面進行系統梳理。',
      '報告指出，中心於成立首年完成了學術委員會、行政管理層與外部顧問三層治理架構建設，並陸續啟動六大研究支柱下的多個前期研究項目。',
      '展望未來，中心將進一步深化粵港澳大灣區公共衛生協同機制，推動跨機構、跨區域、跨學科的研究合作，為人口健康政策提供持續的循證支撐。'
    ]
  },
  {
    date: '2025-10-22',
    category: '學術交流',
    categoryEn: 'Academic',
    title: '中心舉辦灣區公共衛生技術前沿研討會',
    summary: '中心於香港總部舉辦灣區公共衛生技術前沿研討會，邀請多位學者就健康監測、智能預警等議題交流。',
    content: [
      '本次研討會圍繞智能健康監測、傳染病防控、健康數據治理等議題展開深入討論，學者們就方法學進展與實務應用分享研究觀察。',
      '中心表示，將以本次研討會為契機，持續構建跨學科、跨區域的學術交流平台。'
    ]
  },
  {
    date: '2025-09-30',
    category: '合作對接',
    categoryEn: 'Partnership',
    title: '中心與多家高校及科研機構簽署合作意向',
    summary: '中心於成立後與多家高校、科研機構建立溝通管道，就聯合研究、人才培養、學術會議等方向達成合作意向。',
    content: [
      '中心相關負責人介紹，合作將圍繞早期篩查、智能監測、區域協同等研究主題展開，並計劃以聯合項目方式推進實質協作。',
      '未來中心將持續開放合作通道，誠邀有志於公共衛生科技創新的單位共同參與。'
    ]
  },
  {
    date: '2025-09-12',
    category: '中心動態',
    categoryEn: 'Institutional',
    title: '中心廣州、澳門分中心籌備工作正式啟動',
    summary: '中心宣布廣州、澳門分中心籌備工作正式啟動，將進一步夯實大灣區研究網絡布局。',
    content: [
      '廣州、澳門分中心將承擔在地科研協作、學術交流與人才培養等職能，與香港總部形成研究合力。',
      '中心將持續優化區域研究網絡布局，深化與內地及澳門夥伴的合作。'
    ]
  },
  {
    date: '2025-08-25',
    category: '健康科普',
    categoryEn: 'Public Engagement',
    title: '中心啟動社區健康素養提升計劃',
    summary: '中心面向社區開展健康素養提升計劃，透過科普講座、主題活動傳播健康理念。',
    content: [
      '計劃聚焦慢病防治、健康生活方式、心理健康等社區關切議題，採用線上線下結合的形式廣泛推廣。',
      '中心將持續以實證為本，推動公眾健康知識的可及與可用。'
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  highlightCurrentNav();
  initMobileMenu();
  initScrollHeader();
});
