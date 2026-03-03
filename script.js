// script.js (multilingual)

const translations = {
  en: {
    pageTitle: "Michael's Portfolio",
    navbarTitle: "Michael Neang",
    heroSubtitle: "Analytics • Insights • Impact",

    aboutDetailTitle: "About",
    aboutDetail1:
      "I partner with teams at the intersection of business, operations, and data—turning messy inputs into clean reporting, reliable pipelines, and decisions people can move on.",
    aboutDetail2:
      "Today I’m a Business Analyst / Data Administrator at Wintrust Specialty Finance, building clarity across workflows and stakeholders. I’m especially interested in practical AI and modern analytics platforms—shipping solutions that stay grounded in what the business actually needs.",

    carouselCaption1: "Professional headshot",
    carouselCaption2: "Tokyo teamLab Borderless — digital systems, human experience",
    carouselCaption3: "A moment of connection — LA",
    carouselCaption4: "Dotonbori, Osaka — energy, systems, motion",

    prev: "Previous",
    next: "Next",

    experienceTitle: "Experience",
    exp1Title: "Business Analyst / Data Administrator",
    exp1Details: "Jun 2025 – Present | Irvine, CA",
    exp1Note: "Business operations • reporting • data governance • automation",

    exp2Title: "Data Analyst (Sales Operations)",
    exp2Details: "Feb 2023 – Jun 2025 | Irvine, CA",
    exp2Note: "Pricing analytics • data quality • stakeholder reporting",

    exp3Title: "Global Supply Chain Intern",
    exp3Details: "Jun 2022 – Sep 2022 | Carson, CA",
    exp3Note: "Dashboards • process improvement • data accuracy",

    exp4Title: "Internal Audit Analyst Intern",
    exp4Details: "Jun 2021 – Aug 2021 | Irvine, CA",
    exp4Note: "Root-cause analysis • controls • client communication",

    educationTitle: "Education",
    educationText:
      "BBA in Management Information Systems & Operations Management | Aug 2018 - Dec 2022",

    certificationsTitle: "Certifications",
    cert1Title: "Microsoft Certified: AI Transformation Leader (AB-731)",
    cert2Title: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
    cert3Title: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
    cert4Title: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    cert5Title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    cert6Title: "Tableau Certified Data Analyst (TDA-C01)",
    viewBadge: "View Badge",

    projectsTitle: "Projects",
    proj1Title: "Snapdragon AI: Multilingual Translator",
    proj1Award: "2nd Place out of 27 – Windows on Snapdragon AI Hackathon",
    proj1Text:
      "An innovative on-device translator for Snapdragon that offers real-time, offline translation between English, Japanese, Korean, and Chinese using optimized AI and Python.",

    proj2Title: "Sakura Guide さくらガイド",
    proj2Text:
      "A refined travel companion for Japan that blends modern design with real-time guidance to deliver elegant, bilingual travel insights.",

    proj3Title: "Supply Chain Optimization",
    proj3Text:
      "A focused analysis using Python to uncover inefficiencies in supplier lead times and inventory risk, providing actionable insights for smarter planning.",

    proj4Title: "Retail Superstore Analysis",
    proj4Text:
      "A thoughtfully designed dashboard built with SQL, Excel, and Tableau that reveals trends in retail performance, empowering strategic decisions.",

    proj5Title: "SmartAInventory",
    proj5Award: "Top 13 out of 83 – Microsoft Fabric and AI Learning Hackathon",
    proj5Text:
      "A dynamic inventory management system built with Microsoft Fabric, Power BI, and Azure OpenAI that forecasts demand, minimizes risk, and supports agile, insight-led decision-making.",

    skillsUsedLabel: "Skills Used:",

    contactTitle: "Contact",
    contactNameLabel: "Name:",
    contactEmailLabel: "Email:",
    contactMessageLabel: "Message:",
    sendMessageBtn: "Send Message",

    viewOnGitHub: "View on GitHub",
    footerText: "© 2026 Michael Neang. All rights reserved."
  },

  ja: {
    pageTitle: "Michael's Portfolio",
    navbarTitle: "Michael Neang",
    heroSubtitle: "アナリティクス・インサイト・インパクト",

    aboutDetailTitle: "イントロダクション",
    aboutDetail1:
      "ビジネス・オペレーション・データの交差点で、曖昧な情報を整え、判断できる形へ落とし込みます。レポーティングだけでなく、運用に根づく“使われる仕組み”を作ることを重視しています。",
    aboutDetail2:
      "現在はWintrust Specialty Financeにて、業務の見える化とデータ整備を担いながら、関係者が迷わず動ける状態をつくっています。実務に効くAIや最新の分析基盤に関心があり、机上ではなく現場で役立つ形で届けます。",

    carouselCaption1: "プロフィール写真",
    carouselCaption2: "teamLab Borderless（東京）— 体験とシステムの融合",
    carouselCaption3: "LAでの交流",
    carouselCaption4: "道頓堀（大阪）— 流れと熱量",

    prev: "前へ",
    next: "次へ",

    experienceTitle: "経験",
    // natural JP title (not English)
    exp1Title: "業務企画・データ運用（Wintrust Specialty Finance）",
    exp1Details: "2025年6月〜現在 | Irvine, CA",
    exp1Note: "業務運用 • レポート整備 • データ整合 • 自動化",

    exp2Title: "データアナリスト（営業オペレーション）",
    exp2Details: "2023年2月〜2025年6月 | Irvine, CA",
    exp2Note: "価格分析 • データ品質 • ステークホルダー向け可視化",

    exp3Title: "グローバルサプライチェーン・インターン",
    exp3Details: "2022年6月〜9月 | Carson, CA",
    exp3Note: "ダッシュボード • 業務改善 • 精度向上",

    exp4Title: "内部監査分析インターン",
    exp4Details: "2021年6月〜8月 | Irvine, CA",
    exp4Note: "原因分析 • 統制 • コミュニケーション",

    educationTitle: "学歴",
    educationText:
      "経営情報システム＆オペレーションマネジメント学士 | 2018年8月〜2022年12月",

    certificationsTitle: "認定資格",
    cert1Title: "マイクロソフト認定: AI 変革リーダー (AB-731)",
    cert2Title: "マイクロソフト認定資格: Fabric データ エンジニア アソシエイト (DP-700)",
    cert3Title: "マイクロソフト認定: ファブリック分析エンジニア アソシエイト (DP-600)",
    cert4Title: "マイクロソフト認定: Azure AI エンジニア アソシエイト (AI-102)",
    cert5Title: "マイクロソフト認定: Power BI データアナリスト アソシエイト資格 (PL-300)",
    cert6Title: "Tableau Certified Data Analyst (TDA-C01)",
    viewBadge: "認定証を見る",

    projectsTitle: "プロジェクト",
    proj1Title: "Snapdragon AI: 多言語翻訳機",
    proj1Award: "全27チーム中2位 – Windows on Snapdragon AI Hackathon",
    proj1Text:
      "Snapdragon向けのオンデバイス翻訳。最適化したAIとPythonで多言語をリアルタイム・オフライン対応。",

    proj2Title: "Sakura Guide さくらガイド",
    proj2Text:
      "デザインとリアルタイム情報を統合した日本旅行アシスタント。言語と場所に合わせて案内します。",

    proj3Title: "Supply Chain Optimization",
    proj3Text:
      "Pythonでリードタイムと在庫リスクを分析し、意思決定につながる示唆を整理。",

    proj4Title: "Retail Superstore Analysis",
    proj4Text:
      "SQL/Excel/Tableauで小売の傾向を可視化し、実務に使えるダッシュボードへ。",

    proj5Title: "SmartAInventory",
    proj5Award: "全83チーム中上位13位 – Microsoft Fabric and AI Learning Hackathon",
    proj5Text:
      "Microsoft FabricとAIで需要予測と在庫判断を支える仕組みを設計。",

    skillsUsedLabel: "使用スキル:",

    contactTitle: "コンタクト",
    contactNameLabel: "お名前:",
    contactEmailLabel: "メール:",
    contactMessageLabel: "メッセージ:",
    sendMessageBtn: "送信する",

    viewOnGitHub: "GitHubで見る",
    footerText: "© 2026 Michael Neang. All rights reserved."
  },

  zh: {
    pageTitle: "Michael's Portfolio",
    navbarTitle: "Michael Neang",
    heroSubtitle: "分析 • 洞察 • 影响",

    aboutDetailTitle: "关于我",
    aboutDetail1:
      "我在业务、运营与数据的交汇处工作：把零散信息整理成可信的报表与可复用的流程，让团队能够更快做出判断并落地行动。我更看重“能被用起来”的体系，而不是只停留在展示。",
    aboutDetail2:
      "目前我在 Wintrust Specialty Finance 从事业务分析与数据管理相关工作，推动流程协作更清晰、口径更统一。我尤其关注可落地的 AI 与现代分析平台——用贴近业务的方式交付价值。",

    carouselCaption1: "职业头像",
    carouselCaption2: "东京 teamLab Borderless：科技与艺术的融合",
    carouselCaption3: "洛杉矶的一次交流",
    carouselCaption4: "大阪道顿堀：系统与节奏",

    prev: "上一张",
    next: "下一张",

    experienceTitle: "经历",
    // natural CN title (not English)
    exp1Title: "业务分析 / 数据管理（Wintrust Specialty Finance）",
    exp1Details: "2025年6月 – 现在 | Irvine, CA",
    exp1Note: "业务运营 • 报表体系 • 数据治理 • 自动化",

    exp2Title: "数据分析师（销售运营）",
    exp2Details: "2023年2月 – 2025年6月 | Irvine, CA",
    exp2Note: "定价分析 • 数据质量 • 决策支持",

    exp3Title: "全球供应链实习生",
    exp3Details: "2022年6月 – 9月 | Carson, CA",
    exp3Note: "仪表板 • 流程优化 • 数据准确性",

    exp4Title: "内部审计分析实习生",
    exp4Details: "2021年6月 – 8月 | Irvine, CA",
    exp4Note: "根因分析 • 风控 • 沟通协作",

    educationTitle: "教育背景",
    educationText:
      "管理信息系统与运营管理学士 | 2018年8月 – 2022年12月",

    certificationsTitle: "认证",
    cert1Title: "Microsoft认证：AI 转型领导者 (AB-731)",
    cert2Title: "Microsoft 认证：Fabric 数据工程师助理 (DP-700)",
    cert3Title: "Microsoft 认证：Fabric Analytics Engineer Associate (DP-600)",
    cert4Title: "Microsoft认证：Azure AI 工程师助理 (AI-102)",
    cert5Title: "Microsoft认证：Power BI 数据分析师助理 (PL-300)",
    cert6Title: "Tableau Certified Data Analyst (TDA-C01)",
    viewBadge: "查看认证",

    projectsTitle: "项目",
    proj1Title: "Snapdragon AI：多语种翻译器",
    proj1Award: "27队中第2名 – Windows on Snapdragon AI Hackathon",
    proj1Text:
      "面向 Snapdragon 的端侧翻译器，AI + Python 实现多语种离线实时翻译。",

    proj2Title: "Sakura Guide さくらガイド",
    proj2Text:
      "面向日本旅行的轻量助手：结合设计与实时信息，提供双语、位置相关的引导。",

    proj3Title: "Supply Chain Optimization",
    proj3Text:
      "用 Python 分析供应商交期与库存风险，输出可执行的规划建议。",

    proj4Title: "Retail Superstore Analysis",
    proj4Text:
      "SQL/Excel/Tableau 搭建零售分析看板，提炼趋势并支持决策。",

    proj5Title: "SmartAInventory",
    proj5Award: "83队中前13名 – Microsoft Fabric and AI Learning Hackathon",
    proj5Text:
      "基于 Microsoft Fabric 的库存决策系统：预测需求、降低风险、提升响应。",

    skillsUsedLabel: "使用技术:",

    contactTitle: "联系我",
    contactNameLabel: "姓名:",
    contactEmailLabel: "邮箱:",
    contactMessageLabel: "留言:",
    sendMessageBtn: "发送",

    viewOnGitHub: "在 GitHub 查看",
    footerText: "© 2026 Michael Neang. All rights reserved."
  },

  ko: {
    pageTitle: "Michael's Portfolio",
    navbarTitle: "Michael Neang",
    heroSubtitle: "분석 • 통찰 • 임팩트",

    aboutDetailTitle: "소개",
    aboutDetail1:
      "저는 비즈니스·운영·데이터의 교차점에서 일합니다. 흩어진 정보를 정리해 신뢰할 수 있는 리포트와 재사용 가능한 흐름으로 만들고, 팀이 더 빠르게 실행할 수 있도록 돕습니다. 보여주기보다 실제로 ‘쓰이는’ 체계를 만드는 데 집중합니다.",
    aboutDetail2:
      "현재 Wintrust Specialty Finance에서 업무 분석과 데이터 운영을 맡아 프로세스의 정합성과 가시성을 높이고 있습니다. 특히 실무에 바로 적용되는 AI와 현대적 분석 플랫폼에 관심이 많고, 비즈니스에 맞는 형태로 빠르게 전달합니다.",

    carouselCaption1: "프로필 사진",
    carouselCaption2: "도쿄 teamLab Borderless — 기술과 경험",
    carouselCaption3: "LA에서의 한 장면",
    carouselCaption4: "오사카 도톤보리 — 흐름과 에너지",

    prev: "이전",
    next: "다음",

    experienceTitle: "경력",
    // natural KR title (not English)
    exp1Title: "비즈니스 분석 · 데이터 운영 (Wintrust Specialty Finance)",
    exp1Details: "2025년 6월 – 현재 | Irvine, CA",
    exp1Note: "업무 운영 • 리포팅 • 데이터 거버넌스 • 자동화",

    exp2Title: "데이터 애널리스트(영업 운영)",
    exp2Details: "2023년 2월 – 2025년 6월 | Irvine, CA",
    exp2Note: "가격 분석 • 데이터 품질 • 의사결정 지원",

    exp3Title: "글로벌 공급망 인턴",
    exp3Details: "2022년 6월 – 9월 | Carson, CA",
    exp3Note: "대시보드 • 프로세스 개선 • 정확도 향상",

    exp4Title: "내부 감사 분석 인턴",
    exp4Details: "2021년 6월 – 8월 | Irvine, CA",
    exp4Note: "근본 원인 분석 • 통제 • 커뮤니케이션",

    educationTitle: "학력",
    educationText:
      "경영정보시스템 & 운영관리 학사 | 2018년 8월 – 2022년 12월",

    certificationsTitle: "자격증",
    cert1Title: "Microsoft 인증: 인공지능 혁신 리더 (AB-731)",
    cert2Title: "Microsoft 인증: Fabric Data Engineer Associate (DP-700)",
    cert3Title: "Microsoft 인증: 패브릭 분석 엔지니어 어소시에이트 (DP-600)",
    cert4Title: "Microsoft 인증: Azure AI 엔지니어 준회원 (AI-102)",
    cert5Title: "Microsoft 인증: Power BI 데이터 분석 전문가 어소시에이트 (PL-300)",
    cert6Title: "Tableau Certified Data Analyst (TDA-C01)",
    viewBadge: "배지 보기",

    projectsTitle: "프로젝트",
    proj1Title: "Snapdragon AI: 다국어 번역기",
    proj1Award: "총 27팀 중 2위 – Windows on Snapdragon AI Hackathon",
    proj1Text:
      "Snapdragon용 온디바이스 번역기. AI + Python으로 다국어 오프라인 실시간 번역 지원.",

    proj2Title: "Sakura Guide さくらガイド",
    proj2Text:
      "일본 여행을 위한 가벼운 동반자. 디자인과 실시간 정보를 결합해 양언어·위치 기반 안내 제공.",

    proj3Title: "Supply Chain Optimization",
    proj3Text:
      "Python으로 리드타임과 재고 리스크를 분석해 계획 수립에 필요한 인사이트 도출.",

    proj4Title: "Retail Superstore Analysis",
    proj4Text:
      "SQL/Excel/Tableau로 리테일 성과를 시각화하고 추세를 분석.",

    proj5Title: "SmartAInventory",
    proj5Award: "총 83팀 중 상위 13위 – Microsoft Fabric and AI Learning Hackathon",
    proj5Text:
      "Microsoft Fabric 기반 재고 의사결정 시스템: 수요 예측, 리스크 감소, 빠른 대응 지원.",

    skillsUsedLabel: "사용 기술:",

    contactTitle: "문의",
    contactNameLabel: "이름:",
    contactEmailLabel: "이메일:",
    contactMessageLabel: "메시지:",
    sendMessageBtn: "보내기",

    viewOnGitHub: "GitHub 보기",
    footerText: "© 2026 Michael Neang. All rights reserved."
  }
};

function updateTranslations(lang) {
  const dict = translations[lang] || translations.en;
  document.title = dict.pageTitle;

  for (const key in dict) {
    const elements = document.querySelectorAll(`[data-key="${key}"]`);
    elements.forEach(el => {
      el.textContent = dict[key];
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateTranslations('en');

  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.addEventListener('change', (e) => {
      updateTranslations(e.target.value);
    });
  }
});