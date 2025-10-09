// 로딩 스크린 클릭 시 동심원 물결 효과와 함께 사이트 열기
document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  
  if (loadingScreen) {
    loadingScreen.addEventListener('click', function(e) {
      // 클릭 위치 계산
      const rect = loadingScreen.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      // 동심원 물결 생성
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const ripple = document.createElement('div');
          ripple.className = 'click-ripple';
          ripple.style.left = e.clientX - 50 + 'px';
          ripple.style.top = e.clientY - 50 + 'px';
          ripple.style.width = '100px';
          ripple.style.height = '100px';
          document.body.appendChild(ripple);
          
          // 1초 후 제거
          setTimeout(() => ripple.remove(), 1000);
        }, i * 100);
      }
      
      // 클릭 지점을 CSS 변수로 설정
      document.documentElement.style.setProperty('--click-x', x + '%');
      document.documentElement.style.setProperty('--click-y', y + '%');
      
      // 사이트 요소들 준비
      const sections = document.querySelector('.sections');
      const nav = document.querySelector('nav');
      const scrollIndicator = document.querySelector('.scroll-indicator');
      
      // n초 후 사이트 나타나기 시작
      setTimeout(() => {
        if (sections) {
          sections.style.transform = 'translateY(0)';
          sections.style.opacity = '1';
          sections.style.animation = 'none';
          sections.classList.add('reveal-site');
        }
        if (nav) {
          nav.style.transform = 'translateY(0)';
          nav.style.opacity = '1';
          nav.style.animation = 'none';
          nav.classList.add('reveal-site');
        }
        if (scrollIndicator) {
          scrollIndicator.style.transform = 'translateY(-50%)';
          scrollIndicator.style.opacity = '1';
          scrollIndicator.style.animation = 'none';
          scrollIndicator.classList.add('reveal-site');
        }
      }, 100);
      
      // n초 후 로딩 스크린 완전 제거
      setTimeout(() => {
        loadingScreen.style.visibility = 'hidden';
        
        // reveal 클래스 제거
        if (sections) sections.classList.remove('reveal-site');
        if (nav) nav.classList.remove('reveal-site');
        if (scrollIndicator) scrollIndicator.classList.remove('reveal-site');
      }, 800);
    });
  }
});

const sections = document.querySelectorAll('.section');
let currentSection = 0, isScrolling = false;
const menuNames = [
  "홈", "자기소개", "활동", "자격증", "프로젝트", "이력서"
];

function showSection(idx) {
  sections.forEach((sec, i) => {
    sec.style.transform = `translateY(${(i - idx) * 100}%)`;
  });
  currentSection = idx;
  updateScrollIndicator();
}

window.addEventListener('wheel', function(e) {
  if(isScrolling) return;
  isScrolling = true;
  if(e.deltaY > 0) {
    if(currentSection < sections.length - 1) showSection(currentSection + 1);
  } else if(e.deltaY < 0) {
    if(currentSection > 0) showSection(currentSection - 1);
  }
  setTimeout(()=>{isScrolling=false;}, 650);
}, { passive: false });

function scrollToSection(idx) { 
  showSection(idx); 
}

window.addEventListener('keydown', function(e){
  if(isScrolling) return;
  if(e.key === "ArrowDown" && currentSection < sections.length - 1) {
    isScrolling = true; 
    showSection(currentSection + 1);
    setTimeout(()=>{isScrolling=false;}, 650);
  }
  if(e.key === "ArrowUp" && currentSection > 0) {
    isScrolling = true; 
    showSection(currentSection - 1);
    setTimeout(()=>{isScrolling=false;}, 650);
  }
});

let touchStartY = null;
window.addEventListener('touchstart', function(e){
  if(e.touches.length === 1) touchStartY = e.touches[0].clientY;
});

window.addEventListener('touchend', function(e){
  if(touchStartY === null) return;
  let touchEndY = e.changedTouches[0].clientY;
  if(isScrolling) return;
  if(touchEndY < touchStartY - 50 && currentSection < sections.length - 1) {
    isScrolling = true; 
    showSection(currentSection + 1); 
    setTimeout(()=>{isScrolling=false;}, 650);
  }
  if(touchEndY > touchStartY + 50 && currentSection > 0) {
    isScrolling = true; 
    showSection(currentSection - 1); 
    setTimeout(()=>{isScrolling=false;}, 650);
  }
  touchStartY = null;
});

function updateScrollIndicator() {
  const indicator = document.getElementById('scrollIndicator');
  indicator.innerHTML = '';
  for(let i = 0; i < sections.length; i++) {
    const row = document.createElement('div');
    row.className = 'scroll-indicator-row' + (i === currentSection ? ' active' : '');
    row.onclick = ()=>showSection(i);
    const label = document.createElement('span');
    label.className = 'scroll-menu';
    label.innerText = menuNames[i];
    const dot = document.createElement('div');
    dot.className = 'scroll-dot' + (i === currentSection ? ' active' : '');
    row.appendChild(label);
    row.appendChild(dot);
    indicator.appendChild(row);
  }
}

// 초기화
showSection(0);