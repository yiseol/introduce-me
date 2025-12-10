/**
 * =======================================================
 * FILE: helpers.js
 * PURPOSE: 유틸리티 헬퍼 함수 모음
 * CONTENTS:
 *   - 일반적인 헬퍼 함수들
 *   - 포맷팅 함수들
 *   - 검증 함수들
 * AUTHOR: 이설 (Lee Seol)
 * DATE: 2025-11-19
 * =======================================================
 */

'use strict';

/**
 * 요소가 뷰포트에 보이는지 확인
 * @param {HTMLElement} element - 확인할 HTML 요소
 * @returns {boolean} 요소가 보이면 true
 */
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * 부드러운 스크롤 애니메이션
 * @param {number} targetPosition - 목표 스크롤 위치
 * @param {number} duration - 애니메이션 지속 시간 (ms)
 */
function smoothScrollTo(targetPosition, duration = 800) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // easeInOutCubic
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

/**
 * 디바운스 함수 - 연속 호출 방지
 * @param {Function} func - 실행할 함수
 * @param {number} wait - 대기 시간 (ms)
 * @returns {Function} 디바운스된 함수
 */
function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * 쓰로틀 함수 - 일정 시간마다 한 번만 실행
 * @param {Function} func - 실행할 함수
 * @param {number} limit - 제한 시간 (ms)
 * @returns {Function} 쓰로틀된 함수
 */
function throttle(func, limit = 300) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
