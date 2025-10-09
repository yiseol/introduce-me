// 네비게이션 동적 생성 함수
function createNavigation() {
  // 현재 페이지가 어디인지 확인
  const currentPath = window.location.pathname;
  const isIndexPage = currentPath.includes('index.html') || currentPath.endsWith('/') || (currentPath.includes('introduce-me') && !currentPath.includes('pages'));
  
  // 네비게이션 HTML 생성
  const navHTML = `
    <nav class="${isIndexPage ? '' : 'page-nav'}">
      <div class="nav-left">
        ${isIndexPage 
          ? '<span onclick="scrollToSection(0)">introduce-me</span>' 
          : '<a href="../index.html">introduce-me</a>'
        }
      </div>
      <div class="nav-right">
        ${isIndexPage 
          ? `<span onclick="scrollToSection(1)">introduce</span>
             <span onclick="scrollToSection(2)">Activity</span>
             <span onclick="scrollToSection(3)">Certificates</span>
             <span onclick="scrollToSection(4)">Projects</span>
             <span onclick="scrollToSection(5)">Resume</span>`
          : `<a href="Introduce_myself.html">introduce</a>
             <a href="Activity.html">Activity</a>
             <a href="Certificate.html">Certificates</a>
             <a href="Project.html">Projects</a>
             <a href="Resume.html">Resume</a>`
        }
      </div>
    </nav>
  `;
  
  // 기존 nav 요소가 있으면 교체, 없으면 body 첫 번째 자식으로 추가
  const existingNav = document.querySelector('nav');
  if (existingNav) {
    existingNav.outerHTML = navHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }
}





// 로딩 스크린 클릭 시 동심원 물결 효과와 함께 사이트 열기
document.addEventListener('DOMContentLoaded', function() {
  // 네비게이션 먼저 생성
  createNavigation();
  
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
  } else {
    // 로딩 스크린이 없는 페이지 (부가 페이지들)에서는 즉시 초기화
    initializePage();
  }
});

// 페이지 초기화 함수 (부가 페이지용)
function initializePage() {
  // 부가 페이지에서만 실행되는 초기화 코드
  const currentPath = window.location.pathname;
  const isIndexPage = currentPath.includes('index.html') || currentPath.endsWith('/') || (currentPath.includes('introduce-me') && !currentPath.includes('pages'));
  
  if (!isIndexPage) {
    // 부가 페이지에서의 추가 초기화 로직이 필요하면 여기에 작성
    console.log('부가 페이지 초기화 완료');
  }
}

// 메인 페이지 스크롤 관련 변수들
const sections = document.querySelectorAll('.section');
let currentSection = 0, isScrolling = false;
const menuNames = [
  "홈", "자기소개", "활동", "자격증", "프로젝트", "이력서"
];

function showSection(idx) {
  if (sections.length === 0) return; // sections가 없으면 실행하지 않음
  
  sections.forEach((sec, i) => {
    sec.style.transform = `translateY(${(i - idx) * 100}%)`;
  });
  currentSection = idx;
  updateScrollIndicator();
}

// 스크롤 이벤트 (메인 페이지에서만 작동)
window.addEventListener('wheel', function(e) {
  if (sections.length === 0) return; // 메인 페이지가 아니면 실행하지 않음
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
  if (sections.length === 0) return;
  showSection(idx); 
}

// 키보드 이벤트 (메인 페이지에서만 작동)
window.addEventListener('keydown', function(e){
  if (sections.length === 0) return;
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

// 터치 이벤트 (메인 페이지에서만 작동)
let touchStartY = null;
window.addEventListener('touchstart', function(e){
  if (sections.length === 0) return;
  if(e.touches.length === 1) touchStartY = e.touches[0].clientY;
});

window.addEventListener('touchend', function(e){
  if (sections.length === 0) return;
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
  if (!indicator) return; // 스크롤 인디케이터가 없으면 실행하지 않음
  
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

// 초기화 (메인 페이지에서만)
if (sections.length > 0) {
  showSection(0);
}

// 프로젝트 페이지 관련 함수들
function initProjectPage() {
  // 프로젝트별 풀페이지 스크롤, 가로 애니메이션
  const projects = document.querySelectorAll('.project-section');
  const navBar = document.getElementById('projectNavBar');
  
  if (!projects.length || !navBar) return; // 프로젝트 페이지가 아니면 리턴
  
  const projectNames = [
    "WatchPick",
    "8_Grope"
  ];
  
  let currentProject = 0, isScrolling = false;
  
  function showProject(idx, direction = null) {
    projects.forEach((proj, i) => {
      if (direction === 'left') {
        proj.style.transform = `translateX(${(i - idx) * 100}%)`;
      } else {
        proj.style.transform = `translateX(${(i - idx) * 100}%)`;
      }
    });
    currentProject = idx;
    updateProjectNavBar();
  }

  // 오른쪽 중앙 라인탭 네비 생성
  function updateProjectNavBar() {
    navBar.innerHTML = '';
    for(let i = 0; i < projects.length; i++) {
      const btn = document.createElement('button');
      btn.className = 'project-nav-btn' + (i === currentProject ? ' active' : '');
      btn.innerText = projectNames[i] || `프로젝트 ${i + 1}`;
      btn.onclick = () => showProject(i);
      navBar.appendChild(btn);
    }
  }

  // 키보드 ← →
  window.addEventListener('keydown', function(e){
    if(isScrolling) return;
    if(e.key === 'ArrowLeft' && currentProject > 0) {
      isScrolling = true;
      showProject(currentProject - 1, 'left');
      setTimeout(() => {isScrolling = false;}, 700);
    }
    if(e.key === 'ArrowRight' && currentProject < projects.length - 1) {
      isScrolling = true;
      showProject(currentProject + 1, 'right');
      setTimeout(() => {isScrolling = false;}, 700);
    }
  });

  // 터치 스와이프
  let touchStartX = null;
  window.addEventListener('touchstart', function(e){
    if(e.touches.length === 1) touchStartX = e.touches[0].clientX;
  });

  window.addEventListener('touchend', function(e){
    if(touchStartX === null) return;
    if(isScrolling) return;
    
    let touchEndX = e.changedTouches[0].clientX;
    if(touchEndX < touchStartX - 50 && currentProject < projects.length - 1) {
      isScrolling = true;
      showProject(currentProject + 1, 'right');
      setTimeout(() => {isScrolling = false;}, 700);
    }
    if(touchEndX > touchStartX + 50 && currentProject > 0) {
      isScrolling = true;
      showProject(currentProject - 1, 'left');
      setTimeout(() => {isScrolling = false;}, 700);
    }
    touchStartX = null;
  });

  // 첫 진입
  showProject(0);
}

// 페이지별 초기화
document.addEventListener('DOMContentLoaded', function() {
  // 기본 초기화는 위에서 이미 처리됨
  
  // 프로젝트 페이지 확인 및 초기화
  const currentPath = window.location.pathname;
  if (currentPath.includes('Project.html')) {
    setTimeout(initProjectPage, 100); // DOM이 완전히 로드된 후 실행
  }
});