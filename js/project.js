/* =======================================================
   PROJECT PAGE INTERACTIONS
   썸네일 클릭 시 프로젝트 정보 전환
======================================================= */

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    const bgImage = document.querySelector('.project-background img');
    const projectTitle = document.querySelector('.project-title');
    const yearValue = document.querySelector('.credit-item:nth-child(1) .credit-value');
    const roleValue = document.querySelector('.credit-item:nth-child(2) .credit-value');
    const projectDesc = document.querySelector('.project-description');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // 데이터 속성에서 정보 가져오기
            const newBg = this.dataset.bg;
            const newTitle = this.dataset.title;
            const newYear = this.dataset.year;
            const newRole = this.dataset.role;
            const newDesc = this.dataset.desc;

            // 배경 이미지 페이드 아웃
            bgImage.classList.add('fade-out');

            // 페이드 아웃 완료 후 내용 변경 및 페이드 인
            setTimeout(() => {
                // 배경 이미지 변경
                bgImage.src = newBg;
                
                // 텍스트 정보 변경
                projectTitle.textContent = newTitle;
                yearValue.textContent = newYear;
                roleValue.textContent = newRole;
                projectDesc.innerHTML = newDesc;

                // 페이드 인
                bgImage.classList.remove('fade-out');
            }, 300);

            // 활성 썸네일 표시
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 첫 번째 썸네일을 기본 활성화
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
    }
});
