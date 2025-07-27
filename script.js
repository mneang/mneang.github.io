// Revised script.js for Michael's Portfolio

const translations = {
  en: {
    pageTitle: "Michael's Portfolio",
    navbarTitle: "Michael Neang",
    heroSubtitle: "Analytics | Insights | Impact",

    aboutDetailTitle: "About Me",
    aboutDetail1:
      "Building on my foundation in Information Systems and Operations Management, I blend analytical rigor with business strategy—most recently driving impact in financial services at Wintrust Specialty Finance. Certified in Power BI, Tableau, and Microsoft Fabric, I harness AI and data pipelines to translate complexity into clarity.",
    aboutDetail2:
      "From healthcare analytics to financial modeling, I immerse myself in every challenge with curiosity and purpose. I thrive at the intersection of data and decision-making, continually evolving toward roles as a data engineer or data scientist. Let’s unlock insights that power smarter growth.",

    prev: "Previous",
    next: "Next",

    experienceTitle: "Experience",
    exp1Title: "Business Analyst – Wintrust Specialty Finance",
    exp1Details: "Jun 2025 – Present | Irvine, CA",
    exp2Title: "Data Analyst (Sales Operations)",
    exp2Details: "Feb 2023 – Jun 2025 | Irvine, CA",
    exp3Title: "Global Supply Chain Intern",
    exp3Details: "Jun 2022 – Sep 2022 | Carson, CA",
    exp4Title: "Internal Audit Analyst Intern",
    exp4Details: "Jun 2021 – Aug 2021 | Irvine, CA",

    educationTitle: "Education",
    educationText:
      "BBA in Management Information Systems & Operations Management | Aug 2018 – Dec 2022",

    certificationsTitle: "Certifications",
    cert1Title:
      "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
    cert2Title:
      "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    cert3Title:
      "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    cert4Title:
      "Tableau Certified Data Analyst (TDA-C01)",
    cert5Title: "Alteryx Designer Advanced Certification",
    viewBadge: "View Badge",

    projectsTitle: "Projects",
    proj1Title: "Snapdragon AI: Multilingual Translator",
    proj1Award:
      "2nd Place out of 27 – Windows on Snapdragon AI Hackathon",
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
    proj5Award:
      "Top 13 out of 83 – Microsoft Fabric and AI Learning Hackathon",
    proj5Text:
      "A dynamic inventory management system built with Microsoft Fabric, Power BI, and Azure OpenAI that forecasts demand, minimizes risk, and supports agile, insight-led decision-making.",

    skillsTitle: "Key Competencies",
    skillsVisTitle: "Data Visualization & Reporting",
    skillsAnalysisTitle: "Data Analysis & Manipulation",
    skillsDBTitle: "Database & Cloud Technologies",
    skillsExcelTitle: "Excel & Automation",
    skillsGeneralTitle: "General Software",

    contactTitle: "Get in Touch",
    contactNameLabel: "Name:",
    contactEmailLabel: "Email:",
    contactMessageLabel: "Message:",
    sendMessageBtn: "Send Message",

    viewOnGitHub: "View on GitHub",
    footerText: "© 2025 Michael Neang. All rights reserved."
  },
  ja: {
    pageTitle: "Michael's Portfolio",
    navbarTitle: "Michael Neang",
    heroSubtitle: "アナリティクス・インサイト・インパクト",

    aboutDetailTitle: "イントロダクション",
    aboutDetail1:
      "情報システムとオペレーションマネジメントを基盤に、分析とビジネス戦略を融合。最近ではWintrust Specialty Financeで金融サービスのデータ活用を推進し、Power BI、Tableau、Microsoft Fabric の認定を取得。AIとデータパイプラインで複雑な情報を明瞭なインサイトに転換します。",
    aboutDetail2:
      "医療分析から金融モデリングまで、好奇心と目的意識をもってあらゆる課題に取り組んでいます。データと意思決定の交差点で成長を続け、データエンジニアやデータサイエンティストへの進化を目指します。",

    prev: "前へ",
    next: "次へ",

    experienceTitle: "経験",
    exp1Title: "ビジネスアナリスト — Wintrust Specialty Finance",
    exp1Details: "2025年6月〜現在 | Irvine, CA",
    exp2Title: "データアナリスト（営業オペレーション）",
    exp2Details: "2023年2月〜2025年6月 | Irvine, CA",
    exp3Title: "グローバルサプライチェーン・インターン",
    exp3Details: "2022年6月〜9月 | Carson, CA",
    exp4Title: "内部監査分析インターン",
    exp4Details: "2021年6月〜8月 | Irvine, CA",

    educationTitle: "学歴",
    educationText:
      "経営情報システム＆オペレーションマネジメント学士 | 2018年8月〜2022年12月",

    certificationsTitle: "認定資格",
    cert1Title:
      "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
    cert2Title:
      "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    cert3Title:
      "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    cert4Title: "Tableau Certified Data Analyst (TDA-C01)",
    cert5Title: "Alteryx Designer Advanced Certification",
    viewBadge: "認定証を見る",
    projectsTitle: "プロジェクト",
    proj1Title: "Snapdragon AI: 多言語翻訳機",
    proj1Award: "全27チーム中2位 – Windows on Snapdragon AI Hackathon",
    proj1Text: "最先端のAIとPythonを駆使し、英語、日本語、韓国語、中国語間のリアルタイム・オフライン翻訳を実現する多言語オンデバイス翻訳機。効率的で迅速、控えめに力強い。",
    proj2Title: "Sakura Guide さくらガイド",
    proj2Text: "洗練された日本旅行の伴侶。最新のデザインとリアルタイムガイダンスを融合し、優雅なバイリンガルの旅行インサイトを提供します。",
    proj3Title: "Supply Chain Optimization",
    proj3Text: "Pythonを活用し、サプライヤーのリードタイムと在庫リスクの非効率性を明らかにし、具体的で実践的な洞察を提供します。",
    proj4Title: "Retail Superstore Analysis",
    proj4Text: "SQL、Excel、Tableauを駆使して構築された小売パフォーマンスのダッシュボード。傾向とパターンを解析し、戦略的な判断をサポートします。",
    proj5Title: "SmartAInventory",
    proj5Award: "全83チーム中上位13位 – Microsoft Fabric and AI Learning Hackathon",
    proj5Text: "Microsoft Fabric、Power BI、Azure OpenAIを用いたデータ駆動型在庫管理システム。需要予測とリスク低減を実現し、柔軟な意思決定を支援します。",
    skillsTitle: "主要スキル",
    skillsVisTitle: "データ可視化 & レポーティング",
    skillsAnalysisTitle: "データ分析 & 報告",
    skillsDBTitle: "データベース & クラウド技術",
    skillsExcelTitle: "Excel & 自動化",
    skillsGeneralTitle: "一般ソフトウェア",
    contactTitle: "コンタクト",
    contactNameLabel: "お名前:",
    contactEmailLabel: "メール:",
    contactMessageLabel: "メッセージ:",
    sendMessageBtn: "送信する",
    footerText: "© 2025 Michael Neang. All rights reserved.",
    viewOnGitHub: "GitHubで見る"
  },
  zh: {
    pageTitle: "Michael's Portfolio",
    navbarTitle: "Michael Neang",
    heroSubtitle: "分析 • 洞察 • 影响",

    aboutDetailTitle: "关于我",
    aboutDetail1:
      "凭借信息系统与运营管理背景，我将分析严谨性与商业战略相结合——最近在 Wintrust Specialty Finance 推动金融服务的数据应用。已获 Power BI、Tableau、Microsoft Fabric 认证，擅长用 AI 和数据管道将复杂数据转化为清晰洞察。",
    aboutDetail2:
      "从医疗分析到金融建模，我始终以好奇心与使命感迎接每个挑战。在数据与决策的交汇处不断进阶，志在成为数据工程师或数据科学家。",

    prev: "上一张",
    next: "下一张",

    experienceTitle: "经历",
    exp1Title: "商务分析师 — Wintrust Specialty Finance",
    exp1Details: "2025年6月 – 现在 | Irvine, CA",
    exp2Title: "数据分析师（销售运营）",
    exp2Details: "2023年2月 – 2025年6月 | Irvine, CA",
    exp3Title: "全球供应链实习生",
    exp3Details: "2022年6月 – 9月 | Carson, CA",
    exp4Title: "内部审计分析实习生",
    exp4Details: "2021年6月 – 8月 | Irvine, CA",

    educationTitle: "教育背景",
    educationText:
      "管理信息系统与运营管理学士 | 2018年8月 – 2022年12月",

    certificationsTitle: "认证",
    cert1Title:
      "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
    cert2Title:
      "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    cert3Title:
      "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    cert4Title: "Tableau Certified Data Analyst (TDA-C01)",
    cert5Title: "Alteryx Designer Advanced Certification",
    viewBadge: "查看认证",
    projectsTitle: "项目",
    proj1Title: "Snapdragon AI: 多语种翻译器",
    proj1Award: "27队中第2名 – Windows on Snapdragon AI Hackathon",
    proj1Text: "专为Snapdragon打造的多语种设备内翻译器，实现英语、日语、韩语及中文之间的实时离线翻译，采用高效AI与Python。轻便、快速且低调强大。",
    proj2Title: "Sakura Guide さくらガイド",
    proj2Text: "为日本之行量身定制的贴心伴侣，融合JavaScript、设计与实时引导，提供优雅且基于位置的双语旅行洞察。",
    proj3Title: "Supply Chain Optimization",
    proj3Text: "利用Python深入分析供应商交货期与库存风险，识别低效环节，并通过清晰的数据洞察支持更优规划。",
    proj4Title: "Retail Superstore Analysis",
    proj4Text: "基于SQL、Excel和Tableau构建的零售绩效仪表板，揭示关键模式与趋势，为智能商业决策提供支持。",
    proj5Title: "SmartAInventory",
    proj5Award: "83队中前13名 – Microsoft Fabric and AI Learning Hackathon",
    proj5Text: "采用Microsoft Fabric、Power BI和Azure OpenAI构建的数据驱动库存系统，实现需求预测、风险降低及敏捷决策。",
    skillsTitle: "核心技能",
    skillsVisTitle: "数据可视化 & 报告",
    skillsAnalysisTitle: "数据分析 & 报告",
    skillsDBTitle: "数据库 & 云技术",
    skillsExcelTitle: "Excel & 自动化",
    skillsGeneralTitle: "常用软件",
    contactTitle: "联系我",
    contactNameLabel: "电子邮件:",
    contactEmailLabel: "电子邮件:",
    contactMessageLabel: "留言:",
    sendMessageBtn: "发送消息",
    footerText: "© 2025 Michael Neang. All rights reserved.",
    viewOnGitHub: "在 GitHub 查看"
  },
  ko: {
    pageTitle: "Michael's Portfolio",
    navbarTitle: "Michael Neang",
    heroSubtitle: "분석 • 통찰 • 임팩트",

    aboutDetailTitle: "소개",
    aboutDetail1:
      "정보 시스템과 운영 관리 배경을 바탕으로, 최근 Wintrust Specialty Finance에서 금융 서비스 데이터 활용을 주도했습니다. Power BI, Tableau, Microsoft Fabric 인증 보유, AI와 데이터 파이프라인으로 복잡함을 명료함으로 전환합니다.",
    aboutDetail2:
      "의료 분석부터 금융 모델링까지 호기심과 목적 의식으로 모든 과제에 임합니다. 데이터와 의사결정의 교차점에서 성장하며 데이터 엔지니어 혹은 데이터 과학자를 목표로 합니다.",

    prev: "이전",
    next: "다음",

    experienceTitle: "경력",
    exp1Title: "비즈니스 애널리스트 — Wintrust Specialty Finance",
    exp1Details: "2025년 6월 – 현재 | Irvine, CA",
    exp2Title: "데이터 애널리스트 (영업 운영)",
    exp2Details: "2023년 2월 – 2025년 6월 | Irvine, CA",
    exp3Title: "글로벌 공급망 인턴",
    exp3Details: "2022년 6월 – 9월 | Carson, CA",
    exp4Title: "내부 감사 분석 인턴",
    exp4Details: "2021년 6월 – 8월 | Irvine, CA",

    educationTitle: "학력",
    educationText:
      "정보 시스템 및 운영 관리 학사 | 2018년 8월 – 2022년 12월",

    certificationsTitle: "자격증",
    cert1Title:
      "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
    cert2Title:
      "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    cert3Title:
      "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    cert4Title: "Tableau Certified Data Analyst (TDA-C01)",
    cert5Title: "Alteryx Designer Advanced Certification",
    viewBadge: "배지 보기",
    projectsTitle: "프로젝트",
    proj1Title: "Snapdragon AI: 다국어 번역기",
    proj1Award: "총 27팀 중 2위 – Windows on Snapdragon AI Hackathon",
    proj1Text: "Snapdragon용으로 개발된 다국어 번역기. 영어, 일본어, 한국어, 중국어 간의 실시간 오프라인 번역을 지원하며, 최적화된 AI와 Python 기반으로 제작. 빠르고 안정적인 성능 제공.",
    proj2Title: "Sakura Guide さくらガイド",
    proj2Text: "일본 여행자를 위한 감성적인 가이드. JavaScript, 디자인, 위치 기반 기능을 활용해, 실시간으로 양방향 정보를 제공하는 우아한 동반자입니다.",
    proj3Title: "Supply Chain Optimization",
    proj3Text: "공급업체 리드 타임과 재고 리스크를 Python으로 분석하여 비효율을 찾아내고, 명확한 데이터 인사이트로 계획을 최적화한 프로젝트입니다.",
    proj4Title: "Retail Superstore Analysis",
    proj4Text: "SQL, Excel, Tableau로 구축한 리테일 분석 대시보드. 실적 흐름과 트렌드를 파악하여 전략적 의사결정을 지원합니다.",
    proj5Title: "SmartAInventory",
    proj5Award: "총 83팀 중 상위 13위 – Microsoft Fabric and AI Learning Hackathon",
    proj5Text: "Microsoft Fabric, Power BI, Azure OpenAI 기반의 재고 시스템. 수요 예측과 리스크 감소를 통해 민첩하고 전략적인 운영을 지원합니다.",
    skillsTitle: "핵심 역량",
    skillsVisTitle: "데이터 시각화 및 리포팅",
    skillsAnalysisTitle: "데이터 분석 및 가공",
    skillsDBTitle: "데이터베이스 및 클라우드",
    skillsExcelTitle: "Excel 및 자동화",
    skillsGeneralTitle: "일반 소프트웨어",
    contactTitle: "문의하기",
    contactNameLabel: "이름:",
    contactEmailLabel: "이메일:",
    contactMessageLabel: "메시지:",
    sendMessageBtn: "보내기",
    footerText: "© 2025 Michael Neang. All rights reserved.",
    viewOnGitHub: "GitHub에서 보기"
  }
};

function updateTranslations(lang) {
  const dict = translations[lang];
  for (const key in dict) {
    const elements = document.querySelectorAll(`[data-key="${key}"]`);
    elements.forEach(el => {
      el.textContent = dict[key];
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Set default language to English
  updateTranslations('en');

  // Handle language switching
  const languageSelect = document.getElementById('languageSelect');
  languageSelect.addEventListener('change', (e) => {
    updateTranslations(e.target.value);
  });

  // Skills animation trigger
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  // Fade-in effect for skill badges
  document.querySelectorAll("#skills .badge").forEach((badge) => {
    observer.observe(badge);
  });
});
