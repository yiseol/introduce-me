/* =======================================================
   INTRODUCE-ME WEBSITE JAVASCRIPT - 통합 및 정리
======================================================= */

/* =======================================================
   1. NAVIGATION & PAGE MANAGEMENT
======================================================= */

/* 1) 네비게이션 동적 생성 */
function createNavigation() {
  // 현재 페이지 위치 확인
  const currentPath = window.location.pathname;
  const isIndexPage = currentPath.includes('index.html') || currentPath.endsWith('/') || 
                     (currentPath.includes('introduce-me') && !currentPath.includes('pages'));
  
  // 네비게이션 HTML 생성
  const navHTML = `
    <nav class="${isIndexPage ? '' : 'page-nav'}">
      <div class="nav-left">
        ${isIndexPage 
          ? '<span onclick="scrollToSection(0)">INTRODUCE-ME</span>' 
          : '<a href="../index.html">INTRODUCE-ME</a>'
        }
      </div>
      <div class="nav-right">
        ${isIndexPage 
          ? `<!-- 홈섹션만 남김 -->`
          : `<a href="Introduce_myself.html">introduce</a>
             <a href="Activity.html">Activity</a>
             <a href="Certificate.html">Certificates</a>
             <a href="Project.html">Projects</a>
             <a href="Resume.html">Resume</a>`
        }
      </div>
    </nav>
  `;
  
  // 기존 nav 요소 교체 또는 생성
  const existingNav = document.querySelector('nav');
  if (existingNav) {
    existingNav.outerHTML = navHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }
}

/* 2) 홈페이지 스크롤 함수 */
function scrollToSection(idx) { 
  if (idx === 0) {
    const sections = document.querySelectorAll('.section');
    if (sections[0]) {
      sections[0].scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/* 3) 페이지 초기화 함수 */
function initializePage() {
  console.log('부가 페이지 초기화 완료');
}

/* =======================================================
   2. LOADING & ANIMATION SYSTEM
======================================================= */

/* 1) 글자별 애니메이션 초기화 */
function initLetterAnimation() {
  const handwritingText = document.querySelector('.handwriting-text');
  if (!handwritingText) return;
  
  const originalText = handwritingText.textContent || 'INTRODUCE-ME';
  handwritingText.innerHTML = '';
  
  // 각 글자를 span으로 감싸서 순차 애니메이션
  for (let i = 0; i < originalText.length; i++) {
    const char = originalText[i];
    const span = document.createElement('span');
    span.className = char === '-' ? 'letter hyphen' : 'letter';
    span.textContent = char;
    span.style.animationDelay = `${i * 0.1 + 0.5}s`;
    handwritingText.appendChild(span);
  }
}

/* 2) 인트로 애니메이션 완료 처리 */
function finishIntroAnimation(x, y) {
  const loadingScreen = document.querySelector('.loading-screen');
  const sections = document.querySelector('.sections');
  const nav = document.querySelector('nav');
  
  // 1. 인트로 화면을 위로 올려서 사라지게 함
  // 2. 메인 사이트를 아래에서 위로 올라오게 함
  loadingScreen.style.animation = 'slideUpAndOut 1s ease-out forwards';
  
  if (sections) sections.classList.add('slide-up-entrance');
  if (nav) nav.classList.add('slide-up-entrance');
  
  // 3. 애니메이션 완료 후 정리
  setTimeout(() => {
    loadingScreen.style.visibility = 'hidden';
    loadingScreen.style.display = 'none';
    
    // 최종 상태로 설정
    if (sections) {
      sections.classList.remove('slide-up-entrance');
      sections.style.transform = 'translateY(0)';
      sections.style.opacity = '1';
    }
    if (nav) {
      nav.classList.remove('slide-up-entrance');
      nav.style.transform = 'translateY(0)';
      nav.style.opacity = '1';
    }
  }, 1000);
}

/* =======================================================
   3. PROJECT PAGE FUNCTIONALITY
======================================================= */

/* 1) 프로젝트 페이지 초기화 */
function initProjectPage() {
  const projects = document.querySelectorAll('.project-section');
  const navBar = document.getElementById('projectNavBar');
  
  if (!projects.length || !navBar) return;
  
  const projectNames = ["WatchPick", "8_Grope"];
  let currentProject = 0, isScrolling = false;
  
  /* 프로젝트 표시 함수 */
  function showProject(idx, direction = null) {
    projects.forEach((proj, i) => {
      proj.style.transform = `translateX(${(i - idx) * 100}%)`;
    });
    currentProject = idx;
    updateProjectNavBar();
  }

  /* 프로젝트 네비게이션 바 업데이트 */
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

  /* 키보드 네비게이션 */
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

  /* 터치 스와이프 네비게이션 */
  let touchStartX = null;
  window.addEventListener('touchstart', function(e){
    if(e.touches.length === 1) touchStartX = e.touches[0].clientX;
  });

  window.addEventListener('touchend', function(e){
    if(touchStartX === null || isScrolling) return;
    
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

  // 첫 진입 시 첫 번째 프로젝트 표시
  showProject(0);
}

/* =======================================================
   4. DYNAMIC BACKGROUND EFFECTS
======================================================= */

/* 1) 자동 파티클 생성 시스템 */
function createAutoParticleSystem() {
  const backgroundEffects = document.querySelector('.background-effects');
  if (!backgroundEffects) return;
  
  setInterval(() => {
    // 새 파티클 생성
    const particle = document.createElement('div');
    particle.className = 'temp-particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 6 + 2}px;
      background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      bottom: -10px;
      animation: tempParticleFloat 8s linear forwards;
      pointer-events: none;
    `;
    particle.style.height = particle.style.width;
    
    backgroundEffects.appendChild(particle);
    
    // 8초 후 파티클 제거
    setTimeout(() => {
      if (particle && particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 8000);
  }, 3000); // 3초마다 새 파티클 생성
}

/* =======================================================
   5. MAIN INITIALIZATION
======================================================= */

/* 1) 메인 DOMContentLoaded 이벤트 */
document.addEventListener('DOMContentLoaded', function() {
  // 현재 페이지 타입 확인
  const currentPath = window.location.pathname;
  const isIndexPage = currentPath.includes('index.html') || currentPath.endsWith('/') || 
                     (currentPath.includes('introduce-me') && !currentPath.includes('pages'));
  const isProjectPage = currentPath.includes('Project.html');
  
  /* 공통 초기화 */
  // 홈페이지가 아닌 경우 네비게이션 동적 생성
  if (!isIndexPage) {
    createNavigation();
    document.body.classList.add('page-body');
  }
  
  /* 페이지별 초기화 */
  if (isIndexPage) {
    // 인덱스 페이지: 로딩 애니메이션
    initLetterAnimation();
    
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      // 자동 인트로 종료 (2.7초 후)
      setTimeout(() => {
        finishIntroAnimation(50, 50);
      }, 2700);
      
      // 클릭 시 즉시 종료
      loadingScreen.addEventListener('click', function(e) {
        const rect = loadingScreen.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        finishIntroAnimation(x, y);
      });
    }
    
    // 백그라운드 효과 초기화
    createAutoParticleSystem();
    
  } else if (isProjectPage) {
    // 프로젝트 페이지: 프로젝트 네비게이션
    setTimeout(initProjectPage, 100);
    
  } else {
    // 기타 부가 페이지들
    initializePage();
  }
});

