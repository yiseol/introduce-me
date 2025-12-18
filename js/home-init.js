// fullPage.js 초기화
var myFullpage = new fullpage('#fullpage', {
    // fullPage.js 옵션
    navigation: false, // 오른쪽 네비게이션 점 비활성화
    scrollingSpeed: 700, // 스크롤 속도 (ms)
    autoScrolling: true, // 자동 스크롤 활성화
    fitToSection: true, // 섹션에 딱 맞춤
    scrollBar: false, // 스크롤바 숨기기
    css3: true, // CSS3 변환 사용
    credits: { enabled: false }, // fullPage.js 워터마크 제거
    
    // 섹션 이동 후 콜백
    afterLoad: function(origin, destination, direction) {
        const nav = document.querySelector('.nav-container');
        const scrollTopBtn = document.querySelector('.scroll-top-btn');
        
        if (destination.index === 0) {
            // 홈 섹션(0): 네비게이션 표시, 버튼 숨김
            nav.classList.remove('nav-hidden');
            if (scrollTopBtn) scrollTopBtn.classList.remove('visible');
        } else if (destination.index === 5) {
            // 푸터 섹션(5): 네비게이션 숨김, 버튼 표시
            nav.classList.add('nav-hidden');
            if (scrollTopBtn) scrollTopBtn.classList.add('visible');
        } else {
            // 메뉴 섹션 (1-4): 네비게이션 숨김, 버튼 숨김
            nav.classList.add('nav-hidden');
            if (scrollTopBtn) scrollTopBtn.classList.remove('visible');
        }
    }
});
