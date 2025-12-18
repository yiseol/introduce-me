document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.resume-tab');
    const resumeImage = document.getElementById('resume-image');
    const downloadBtnKo = document.getElementById('download-btn-ko');
    const downloadBtnEn = document.getElementById('download-btn-en');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const lang = tab.dataset.lang;
            
            if (lang === 'ko') {
                resumeImage.src = '../images/resume_images/KOREA Resume.png';
                resumeImage.alt = '한글 이력서';
                downloadBtnKo.style.display = 'flex';
                downloadBtnEn.style.display = 'none';
            } else {
                resumeImage.src = '../images/resume_images/ENGLISH Resume.png';
                resumeImage.alt = '영어 이력서';
                downloadBtnKo.style.display = 'none';
                downloadBtnEn.style.display = 'flex';
            }
        });
    });
});
