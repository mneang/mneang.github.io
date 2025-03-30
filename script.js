document.addEventListener('DOMContentLoaded', () => {
  // Existing code for language picker...
  const aboutLanguageSelect = document.getElementById('about-language');
  const aboutText = document.getElementById('about-text');

  const translations = {
    en: "Hello! With a solid background in Information Systems and Operations Management, I’ve dedicated my career to harnessing data to drive strategic decisions and optimize processes. Whether managing databases or refining business intelligence, I approach every challenge with the focus of a tactician on the field – always pushing for excellence. Let’s connect and create meaningful impact.",
    zh: "你好！凭借信息系统与运营管理的坚实背景，我在职业生涯中一直致力于利用数据推动战略决策与流程优化。无论是管理数据库还是提升商业智能，我都以赛场上战术家的专注态度迎接每一个挑战，力求臻于完美。",
    ja: "こんにちは！情報システムとオペレーションマネジメントの確かな基盤をもとに、データを活用して戦略的な意思決定とプロセスの最適化に取り組んできました。データベースの管理やビジネスインテリジェンスの向上において、フィールドの戦術家のような集中力で挑戦し、常に卓越性を目指しています。",
    ko: "안녕하세요! 정보 시스템과 운영 관리의 탄탄한 기반을 바탕으로, 데이터로 전략적 의사결정과 프로세스 최적화를 이끌어왔습니다. 데이터베이스 관리와 비즈니스 인텔리전스 향상에 있어, 필드의 전술가처럼 집중하여 항상 완벽을 추구합니다."
  };

  aboutLanguageSelect.addEventListener('change', function() {
    const lang = this.value;
    aboutText.innerText = translations[lang];
  });

  // Carousel code
  const carouselImages = document.querySelectorAll('.carousel-img');
  let currentIndex = 0;
  const changeInterval = 5000; // 5 seconds

  function showNextImage() {
    carouselImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselImages.length;
    carouselImages[currentIndex].classList.add('active');
  }
  
  setInterval(showNextImage, changeInterval);
});