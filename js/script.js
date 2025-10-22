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

// 글자별 애니메이션 함수
function initLetterAnimation() {
  const handwritingText = document.querySelector('.handwriting-text');
  if (!handwritingText) return;
  
  const originalText = handwritingText.textContent || 'INTRODUCE-ME';
  handwritingText.innerHTML = ''; // 기존 텍스트 제거
  
  // 각 글자를 span으로 감싸서 추가
  for (let i = 0; i < originalText.length; i++) {
    const char = originalText[i];
    const span = document.createElement('span');
    span.className = char === '-' ? 'letter hyphen' : 'letter';
    span.textContent = char;
    
    // 순차적으로 애니메이션 지연 시간 설정 (각 글자마다 0.1초씩 지연)
    span.style.animationDelay = `${i * 0.1 + 0.5}s`;
    
    handwritingText.appendChild(span);
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
  
  // 글자별 애니메이션 초기화 (로딩 스크린이 있는 경우에만)
  if (isIndexPage) {
    initLetterAnimation();
  }
  
  const loadingScreen = document.querySelector('.loading-screen');
  
  // 인트로 애니메이션 완료 함수
  function finishIntroAnimation(x, y) {
    // 사이트 요소들 준비
    const sections = document.querySelector('.sections');
    const nav = document.querySelector('nav');
    
    // 1. 인트로 화면을 위로 올려서 사라지게 함과 동시에
    // 2. 메인 사이트를 아래에서 위로 올라오게 함 (지연 없이 동시에)
    loadingScreen.style.animation = 'slideUpAndOut 1s ease-out forwards';
    
    if (sections) {
      sections.classList.add('slide-up-entrance');
    }
    if (nav) {
      nav.classList.add('slide-up-entrance');
    }
    
    // 3. 애니메이션 완료 후 정리
    setTimeout(() => {
      loadingScreen.style.visibility = 'hidden';
      loadingScreen.style.display = 'none';
      
      // 애니메이션 클래스 제거 후 최종 상태로 설정
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
    }, 1000); // 애니메이션 시간에 맞춤
  }
  
  if (loadingScreen) {
    // 자동으로 인트로 종료 (글자 애니메이션 완료 후)
    // 총 12글자 × 0.1s 지연 + 0.5s 시작지연 + 0.6s 애니메이션 시간 + 0.8s 여유 = 2.7s
    setTimeout(() => {
      finishIntroAnimation(50, 50); // 중앙에서 시작하는 효과
    }, 2700);
    
    // 클릭 시에도 즉시 종료 가능
    loadingScreen.addEventListener('click', function(e) {
      // 클릭 위치 계산
      const rect = loadingScreen.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      finishIntroAnimation(x, y);
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

// 동적 효과들 초기화
document.addEventListener('DOMContentLoaded', () => {
  createAutoParticleSystem();
});

