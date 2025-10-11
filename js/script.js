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
  
  // 기존 nav 요소가 있으면 교체, 없으면 body 첫 번째 자식으로 추가
  const existingNav = document.querySelector('nav');
  if (existingNav) {
    existingNav.outerHTML = navHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }
}

// 페이지 초기화 및 로딩 스크린 처리
document.addEventListener('DOMContentLoaded', function() {
  // 페이지 구분: 홈페이지가 아닌 경우 page-body 클래스 추가
  const currentPath = window.location.pathname;
  const isIndexPage = currentPath.includes('index.html') || currentPath.endsWith('/') || (currentPath.includes('introduce-me') && !currentPath.includes('pages'));
  
  // 홈페이지가 아닌 경우에만 네비게이션 동적 생성
  if (!isIndexPage) {
    createNavigation();
    document.body.classList.add('page-body');
  }
  
  const loadingScreen = document.querySelector('.loading-screen');
  
  if (loadingScreen) {
    loadingScreen.addEventListener('click', function(e) {
      // 클릭 위치 계산
      const rect = loadingScreen.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      // 클릭 효과 생성 (동심원 애니메이션)
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
  
  // 프로젝트 페이지 확인 및 초기화 (기존 currentPath 변수 재사용)
  if (currentPath.includes('Project.html')) {
    setTimeout(initProjectPage, 100); // DOM이 완전히 로드된 후 실행
  }
});

// 페이지 초기화 함수 (부가 페이지용)
function initializePage() {
  // 부가 페이지에서의 추가 초기화 로직
  console.log('부가 페이지 초기화 완료');
}

// 홈페이지 스크롤 함수 (홈섹션으로만 이동)
function scrollToSection(idx) { 
  if (idx === 0) {
    const sections = document.querySelectorAll('.section');
    if (sections[0]) {
      sections[0].scrollIntoView({ behavior: 'smooth' });
    }
  }
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

/* =======================================================
   DYNAMIC EFFECTS (동적 효과 함수들)
======================================================= */

// 🫧 기포 효과 생성
function createBubbles() {
  const introSection = document.querySelector('.intro');
  if (!introSection) return;

  // 기포 7개 생성
  for (let i = 1; i <= 7; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.bottom = '0';
    introSection.appendChild(bubble);
  }
}

// 🌟 별 효과 생성
function createStars() {
  const introSection = document.querySelector('.intro');
  if (!introSection) return;

  // 별 5개 생성
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    introSection.appendChild(star);
  }
}

// 커서 트레일 효과 비활성화
function initCursorTrail() {
  // 마우스를 따라다니는 빛 효과 제거
}

// 🌊 동적 효과 초기화
function initDynamicEffects() {
  // 홈페이지에서만 실행
  const currentPath = window.location.pathname;
  const isIndexPage = currentPath.includes('index.html') || currentPath.endsWith('/') || (currentPath.includes('introduce-me') && !currentPath.includes('pages'));
  
  if (isIndexPage) {
    // 페이지 로드 후 효과들 초기화
    setTimeout(() => {
      createBubbles();
      createStars();
    }, 1000); // 로딩 애니메이션 후 실행
  }
}

// 동적 효과 초기화 실행
document.addEventListener('DOMContentLoaded', initDynamicEffects);

// 배경 애니메이션 완전 비활성화
function initWaveBackgroundEffect() {
  // 배경 움직임 모든 효과 제거
  // 배경은 완전히 정적으로 고정됨
}

// 동적 파티클 생성 효과
function createDynamicParticles() {
  const introSection = document.querySelector('.intro');
  if (!introSection) return;

  setInterval(() => {
    // 랜덤한 위치에 임시 파티클 생성
    const particle = document.createElement('div');
    particle.className = 'dynamic-particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 6 + 2}px;
      height: ${Math.random() * 6 + 2}px;
      background: radial-gradient(circle, rgba(255,255,255,0.8), transparent);
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: 100%;
      z-index: 3;
      pointer-events: none;
      animation: tempParticleFloat 8s linear forwards;
    `;
    
    introSection.appendChild(particle);
    
    // 애니메이션 완료 후 제거
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 8000);
  }, 3000); // 3초마다 새 파티클 생성
}

// 스크롤 효과 비활성화 (배경 완전 고정)
function initScrollEffects() {
  // 스크롤에 따른 배경 움직임 완전 제거
}

// ============================================================
//                 MOUSE INTERACTION EFFECTS
// ============================================================

// 마우스 인터랙션 비활성화 (정적 배경 유지)
function initMouseInteractionEffects() {
  // 마우스 인터랙션 효과 모두 제거
  // 배경은 CSS 애니메이션만으로 미세하게 움직임
}

// 자동 파티클 생성 시스템
function createAutoParticleSystem() {
  const backgroundEffects = document.querySelector('.background-effects');
  if (!backgroundEffects) return;
  
  setInterval(() => {
    // 새 파티클 생성
    const particle = document.createElement('div');
    particle.className = 'temp-particle';
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 6 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '-10px';
    particle.style.animation = 'tempParticleFloat 8s linear forwards';
    particle.style.pointerEvents = 'none';
    
    backgroundEffects.appendChild(particle);
    
    // 8초 후 파티클 제거
    setTimeout(() => {
      if (particle && particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 8000);
  }, 3000); // 3초마다 새 파티클 생성
}

// 새로운 동적 효과들 초기화
document.addEventListener('DOMContentLoaded', () => {
  initWaveBackgroundEffect();
  createDynamicParticles();
  initScrollEffects();
  createAutoParticleSystem();
});

