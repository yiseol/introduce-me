/* =======================================================
   CERTIFICATE PAGE JAVASCRIPT
   3D Cover Flow Navigation
======================================================= */

let currentIndex = 2; // 중앙 카드 (0-based index)
const cards = document.querySelectorAll('.certificate-card');
const totalCards = cards.length;

function updateCoverflow() {
    cards.forEach((card, index) => {
        // 현재 카드의 상대적 위치 계산
        const position = index - currentIndex;
        
        // data-position 속성 업데이트
        card.setAttribute('data-position', position);
        
        // active 클래스 관리
        if (position === 0) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function moveCoverflow(direction) {
    // 인덱스 이동
    currentIndex += direction;
    
    // 순환 처리
    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }
    
    // Cover Flow 업데이트
    updateCoverflow();
}

// 카드 클릭 이벤트
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const position = parseInt(card.getAttribute('data-position'));
        if (position !== 0) {
            moveCoverflow(-position);
        }
    });
});

// 키보드 네비게이션
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveCoverflow(-1);
    } else if (e.key === 'ArrowRight') {
        moveCoverflow(1);
    }
});

// 초기 상태 설정
updateCoverflow();
