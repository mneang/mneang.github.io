// Revised script.js for Michael's Portfolio

const translations = {
  en: {
    pageTitle: "Michael's Portfolio",
    navbarTitle: "Michael Neang",
    heroSubtitle: "Analytics | Insights | Impact",
    aboutDetailTitle: "About Me",
    aboutDetail1: "With a background rooted in Information Systems and Operations Management, I’ve spent the last few years growing as a data analyst—primarily in the healthcare and medical device industries. I’ve supported sales operations and supply chain initiatives, blending analytics with business context to uncover the patterns that guide smart, timely decisions. While my work is technical, my mindset is strategic: I thrive on connecting data to action, and always keep the bigger picture in view.",
    aboutDetail2: "Though early in my career, I approach every challenge with quiet determination and a deep curiosity. I’m constantly learning, refining my skills, and seeking new ways to create impact—from process optimization to predictive insights. My long-term path leads toward data engineering or data science, and I’m excited by any opportunity that challenges me to grow. Whether in tech, logistics, or beyond, I bring focus, flexibility, and a genuine passion for turning complexity into clarity.",    
    carouselCaption1: "My professional headshot",
    carouselCaption2: "Exploring the fusion of digital innovation and art at Tokyo's teamLab Borderless",
    carouselCaption3: "Meeting with Japan’s Consul-General in LA",
    carouselCaption4: "Starting my first job at Össur",
    prev: "Previous",
    next: "Next",
    experienceTitle: "Experience",
    exp1Title: "Data Analyst (Sales Operations)",
    exp1Details: "Feb 2023 - Present | Irvine, CA",
    exp2Title: "Global Supply Chain Intern",
    exp2Details: "Jun 2022 - Sep 2022 | Carson, CA",
    exp3Title: "Internal Audit Analyst Intern",
    exp3Details: "Jun 2021 - Aug 2021 | Irvine, CA",
    educationTitle: "Education",
    educationText: "BBA in Management Information Systems & Operations Management | Aug 2018 - Dec 2022",
    certificationsTitle: "Certifications",
    cert1Title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    cert2Title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    cert3Title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    cert4Title: "Tableau Certified Data Analyst (TDA-C01)",
    cert5Title: "Alteryx Designer Advanced Certification",
    viewBadge: "View Badge",
    projectsTitle: "Projects",
    proj1Title: "Snapdragon AI: Multilingual Translator",
    proj1Award: "2nd Place out of 27 – Windows on Snapdragon AI Hackathon",
    proj1Text: "An innovative on-device translator for Snapdragon that offers real-time, offline translation between English, Japanese, Korean, and Chinese using optimized AI and Python.",
    proj2Title: "Sakura Guide さくらガイド",
    proj2Text: "A refined travel companion for Japan that blends modern design with real-time guidance to deliver elegant, bilingual travel insights.",
    proj3Title: "Supply Chain Optimization",
    proj3Text: "A focused analysis using Python to uncover inefficiencies in supplier lead times and inventory risk, providing actionable insights for smarter planning.",
    proj4Title: "Retail Superstore Analysis",
    proj4Text: "A thoughtfully designed dashboard built with SQL, Excel, and Tableau that reveals trends in retail performance, empowering strategic decisions.",
    proj5Title: "SmartAInventory",
    proj5Award: "Top 13 out of 83 – Microsoft Fabric and AI Learning Hackathon",
    proj5Text: "A dynamic inventory management system built with Microsoft Fabric, Power BI, and Azure OpenAI that forecasts demand, minimizes risk, and supports agile, insight-led decision-making.",
    skillsTitle: "Key Competencies",
    skillsVisTitle: "Data Visualization & Reporting",
    skillsAnalysisTitle: "Data Analysis & Manipulation",
    skillsDBTitle: "Database & Cloud Technologies",
    skillsExcelTitle: "Excel & Automation",
    skillsGeneralTitle: "General Software",
    contactTitle: "Contact",
    contactNameLabel: "Name:",
    contactEmailLabel: "Email:",
    contactMessageLabel: "Message:",
    sendMessageBtn: "Send",
    footerText: "© 2025 Michael Neang. All rights reserved.",
    viewOnGitHub: "View on GitHub"
  },
  ja: {
    pageTitle: "Michael's Portfolio",
    navbarTitle: "Michael Neang",
    heroSubtitle: "アナリティクス・インサイト・インパクト",
    aboutDetailTitle: "イントロダクション",
    aboutDetail1: "はじめまして。情報システムとオペレーションマネジメントの知識を基盤に、私は医療機器業界を中心にデータアナリストとしての経験を積んできました。営業オペレーションやサプライチェーンの分野で、ビジネスの現場に寄り添った分析を行い、意思決定を支えるインサイトを提供してきました。数字の裏側にある流れや意味を見出し、行動へとつなげることにやりがいを感じています。",
    aboutDetail2: "キャリアはまだ始まったばかりですが、常に学びを大切にし、課題には静かな情熱と探究心で取り組んでいます。データの力を信じ、より深い専門性を求めて日々スキルを磨いており、将来的にはデータエンジニアやデータサイエンティストへの成長を目指しています。業界を問わず、複雑な課題に向き合い、本質を見抜く力で組織に貢献したいと考えています。",
    carouselCaption1: "私のプロフェッショナルなヘッドショット",
    carouselCaption2: "東京のteamLab Borderlessでテクノロジーとアートの融合を体感",
    carouselCaption3: "ロサンゼルスで日本総領事との出会い",
    carouselCaption4: "Össurでキャリアの第一歩を踏み出す",
    prev: "前へ",
    next: "次へ",
    experienceTitle: "経験",
    exp1Title: "Associate Data Analyst",
    exp1Details: "2023年2月～現在 | Irvine, CA",
    exp2Title: "Global Supply Chain Intern",
    exp2Details: "2022年6月～9月 | Carson, CA",
    exp3Title: "Internal Audit Analyst Intern",
    exp3Details: "2021年6月～8月 | Irvine, CA",
    educationTitle: "学歴",
    educationText: "経営情報システム＆オペレーションマネジメント学士 | 2018年8月～2022年12月",
    certificationsTitle: "認定資格",
    cert1Title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    cert2Title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    cert3Title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
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
    aboutDetail1: "我拥有信息系统与运营管理的专业背景，近年来专注于医疗与医疗设备行业的分析工作。在支持销售运营和供应链项目的过程中，我将数据分析与商业判断相结合，挖掘背后的关键洞察，助力更高效的决策。我的工作虽以技术为基础，但始终以战略视角驱动结果。",
    aboutDetail2: "虽然职业生涯仍处于初期，我始终保持谦逊、专注与好奇心，持续学习和成长。我正朝着数据工程或数据科学方向不断拓展专业能力，并乐于接受来自各行业的新挑战。我相信数据不仅是信息，更是推动组织变革与持续发展的核心力量。",
    carouselCaption1: "我的专业头像",
    carouselCaption2: "在东京teamLab Borderless体验科技与艺术的融合",
    carouselCaption3: "在洛杉矶与日本总领事交流",
    carouselCaption4: "在Össur踏出数据分析师的第一步",
    prev: "上一张",
    next: "下一张",
    experienceTitle: "经历",
    exp1Title: "Associate Data Analyst",
    exp1Details: "2023年2月 - 现在 | Irvine, CA",
    exp2Title: "Global Supply Chain Intern",
    exp2Details: "2022年6月 - 9月 | Carson, CA",
    exp3Title: "Internal Audit Analyst Intern",
    exp3Details: "2021年6月 - 8月 | Irvine, CA",
    educationTitle: "教育背景",
    educationText: "管理信息系统与运营管理学士 | 2018年8月 - 2022年12月",
    certificationsTitle: "认证",
    cert1Title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    cert2Title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    cert3Title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
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
    aboutDetail1: "저는 정보 시스템과 운영 관리 배경을 바탕으로, 최근에는 헬스케어 및 의료기기 분야에서 데이터 분석가로 활동하고 있습니다. 영업 운영과 공급망 프로젝트를 지원하며, 데이터를 통해 비즈니스 상황을 입체적으로 파악하고 실행 가능한 인사이트를 도출해왔습니다. 기술과 전략을 연결하는 데서 보람을 느끼며, 항상 더 나은 의사결정을 위한 해답을 찾고자 노력하고 있습니다.",
    aboutDetail2: "비교적 이른 커리어 단계에 있지만, 꾸준한 성장과 배움을 중시하며 다양한 산업 분야에서 역량을 넓히고 있습니다. 조용한 열정과 호기심으로 새로운 도전에 임하고 있으며, 향후에는 데이터 엔지니어 또는 데이터 사이언티스트로 발전해 조직에 더욱 깊이 있는 영향을 주는 전문가가 되고자 합니다.",
    carouselCaption1: "전문적인 프로필 사진",
    carouselCaption2: "도쿄 teamLab Borderless에서 기술과 예술을 경험하며",
    carouselCaption3: "LA에서 일본 총영사님과 만남",
    carouselCaption4: "Össur에서 데이터 분석가 첫 날",
    prev: "이전",
    next: "다음",
    experienceTitle: "경력",
    exp1Title: "Associate Data Analyst",
    exp1Details: "2023년 2월 – 현재 | Irvine, CA",
    exp2Title: "Global Supply Chain Intern",
    exp2Details: "2022년 6월 – 9월 | Carson, CA",
    exp3Title: "Internal Audit Analyst Intern",
    exp3Details: "2021년 6월 – 8월 | Irvine, CA",
    educationTitle: "학력",
    educationText: "정보 시스템 및 운영 관리 전공 학사 | 2018년 8월 – 2022년 12월",
    certificationsTitle: "자격증",
    cert1Title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    cert2Title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    cert3Title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
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
