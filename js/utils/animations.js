'use strict';

function initLetterAnimation() {
  const handwritingText = document.querySelector('.handwriting-text');
  if (!handwritingText) return;
  
  const originalText = handwritingText.textContent || 'INTRODUCE-ME';
  handwritingText.innerHTML = '';
  
  for (let i = 0; i < originalText.length; i++) {
    const char = originalText[i];
    const span = document.createElement('span');
    span.className = char === '-' ? 'letter hyphen' : 'letter';
    span.textContent = char;
    span.style.animationDelay = `${i * 0.1 + 0.5}s`;
    handwritingText.appendChild(span);
  }
}

function finishIntroAnimation() {
  const loadingScreen = document.querySelector('.loading-screen');
  const sections = document.querySelector('.sections');
  const nav = document.querySelector('nav');
  
  loadingScreen.style.animation = 'slideUpAndOut 1s ease-out forwards';
  
  if (sections) sections.classList.add('slide-up-entrance');
  if (nav) nav.classList.add('slide-up-entrance');
  
  setTimeout(() => {
    loadingScreen.style.visibility = 'hidden';
    loadingScreen.style.display = 'none';
    
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

function createAutoParticleSystem() {
  const backgroundEffects = document.querySelector('.background-effects');
  if (!backgroundEffects) return;
  
  setInterval(() => {
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
    
    setTimeout(() => {
      if (particle && particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 8000);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const isIndexPage = currentPath.includes('index.html') || currentPath.endsWith('/') || 
                     (currentPath.includes('introduce-me') && !currentPath.includes('pages'));
  
  if (isIndexPage) {
    initLetterAnimation();
    
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        finishIntroAnimation();
      }, 2700);
      
      loadingScreen.addEventListener('click', function() {
        finishIntroAnimation();
      });
    }
    
    createAutoParticleSystem();
  }
});
