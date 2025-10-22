// Front 페이지 전용 JavaScript
document.addEventListener('DOMContentLoaded', function() {
  
  // 행성 호버 효과 강화
  const planets = document.querySelectorAll('.planet');
  
  planets.forEach(planet => {
    planet.addEventListener('mouseenter', function() {
      // 호버 시 행성 발광 효과
      const planetImage = this.querySelector('.planet-image');
      const planetType = this.classList[1]; // sun, earth, mars 등
      
      switch(planetType) {
        case 'sun':
          planetImage.style.filter = 'drop-shadow(0 0 30px rgba(255,215,0,0.8)) brightness(1.2)';
          break;
        case 'earth':
          planetImage.style.filter = 'drop-shadow(0 0 25px rgba(0,150,255,0.8)) brightness(1.1)';
          break;
        case 'mars':
          planetImage.style.filter = 'drop-shadow(0 0 25px rgba(255,100,100,0.8)) brightness(1.1)';
          break;
        case 'moon':
          planetImage.style.filter = 'drop-shadow(0 0 20px rgba(200,200,200,0.8)) brightness(1.2)';
          break;
        case 'jupiter':
          planetImage.style.filter = 'drop-shadow(0 0 25px rgba(255,165,0,0.8)) brightness(1.1)';
          break;
        case 'saturn':
          planetImage.style.filter = 'drop-shadow(0 0 25px rgba(255,215,100,0.8)) brightness(1.1)';
          break;
      }
    });
    
    planet.addEventListener('mouseleave', function() {
      // 호버 해제 시 원래 상태로
      const planetImage = this.querySelector('.planet-image');
      planetImage.style.filter = 'drop-shadow(0 0 15px rgba(255,255,255,0.3))';
    });
    
    // 클릭 효과
    planet.addEventListener('click', function() {
      // 클릭 시 확장 애니메이션
      this.style.transform = 'scale(1.2)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
    });
  });
  
  // 랜덤 유성 생성
  function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 10px white;
      top: ${Math.random() * 50}%;
      left: ${Math.random() * 100}%;
      animation: shoot 3s linear forwards;
    `;
    
    document.querySelector('.universe-background').appendChild(shootingStar);
    
    // 애니메이션 완료 후 제거
    setTimeout(() => {
      if (shootingStar.parentNode) {
        shootingStar.parentNode.removeChild(shootingStar);
      }
    }, 3000);
  }
  
  // 유성 애니메이션 키프레임 추가
  if (!document.querySelector('#shooting-star-style')) {
    const style = document.createElement('style');
    style.id = 'shooting-star-style';
    style.textContent = `
      @keyframes shoot {
        0% {
          transform: translateX(0) translateY(0);
          opacity: 1;
        }
        70% {
          opacity: 1;
        }
        100% {
          transform: translateX(300px) translateY(300px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // 주기적으로 유성 생성 (5-15초 간격)
  function scheduleShootingStar() {
    const delay = Math.random() * 10000 + 5000; // 5-15초
    setTimeout(() => {
      createShootingStar();
      scheduleShootingStar();
    }, delay);
  }
  
  scheduleShootingStar();
  
  // 페이지 로드 시 페이드인 효과
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s ease-in-out';
    document.body.style.opacity = '1';
  }, 100);
  
  // 행성들 순차적 등장 애니메이션
  planets.forEach((planet, index) => {
    planet.style.opacity = '0';
    planet.style.transform = 'scale(0)';
    
    setTimeout(() => {
      planet.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      planet.style.opacity = '1';
      planet.style.transform = 'scale(1)';
    }, 500 + index * 200);
  });
  
});

// 키보드 단축키
document.addEventListener('keydown', function(e) {
  switch(e.key) {
    case 'Escape':
      // ESC 키로 홈으로 돌아가기
      window.location.href = '../index.html';
      break;
    case '1':
      window.location.href = 'Introduce_myself.html';
      break;
    case '2':
      window.location.href = 'Activity.html';
      break;
    case '3':
      window.location.href = 'Certificate.html';
      break;
    case '4':
      window.location.href = 'Project.html';
      break;
    case '5':
      window.location.href = 'Resume.html';
      break;
  }
});