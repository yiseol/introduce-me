/* =======================================================
   MOBILE NAVIGATION - Hamburger Menu
======================================================= */

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const navRight = document.querySelector('.nav-right');
  
  if (hamburger && navRight) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navRight.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });
    
    // 메뉴 아이템 클릭 시 메뉴 닫기
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navRight.classList.remove('active');
        document.body.classList.remove('nav-open');
      });
    });
    
    // 메뉴 외부 클릭 시 닫기
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.nav') && navRight.classList.contains('active')) {
        hamburger.classList.remove('active');
        navRight.classList.remove('active');
        document.body.classList.remove('nav-open');
      }
    });
  }
});
