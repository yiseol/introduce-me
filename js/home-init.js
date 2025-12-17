// fullPage.js 초기화
var myFullpage = new fullpage('#fullpage', {
    // fullPage.js 옵션
    navigation: false, // 오른쪽 네비게이션 점 비활성화
    scrollingSpeed: 700, // 스크롤 속도 (ms)
    autoScrolling: true, // 자동 스크롤 활성화
    fitToSection: true, // 섹션에 딱 맞춤
    scrollBar: false, // 스크롤바 숨기기
    css3: true, // CSS3 변환 사용
    
    // 섹션 이동 후 콜백
    afterLoad: function(origin, destination, direction) {
        const nav = document.querySelector('.nav-container');
        
        if (destination.index === 0 || destination.index === 5) {
            // 홈 섹션(0) 또는 푸터 섹션(5): 투명 표시
            nav.classList.remove('nav-hidden');
        } else {
            // 메뉴 섹션 (1-4): 네비게이션 숨기기
            nav.classList.add('nav-hidden');
        }
    }
});
