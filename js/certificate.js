/* =======================================================
   CERTIFICATE PAGE FUNCTIONALITY
======================================================= */

// 자격증 데이터 매핑
const certData = {
  privacy: {
    front: '../images/certificate_images/Certified Privacy Protection General_front.png',
    back: '../images/certificate_images/Certified Privacy Protection General_back.png',
    title: '개인정보보호관리사'
  },
  cissp: {
    front: '../images/certificate_images/CISSP_front.png',
    back: '../images/certificate_images/CISSP_back.png',
    title: 'CISSP'
  },
  forensics: {
    front: '../images/certificate_images/digital forensics_front.png',
    back: '../images/certificate_images/digital forensics_back.png',
    title: '디지털 포렌식'
  },
  engineer: {
    front: '../images/certificate_images/Engineer Information Processing_front.png',
    back: '../images/certificate_images/Engineer Information Processing_back.png',
    title: '정보처리기사'
  },
  industrial: {
    front: '../images/certificate_images/Industrial Security Expert_front.png',
    back: '../images/certificate_images/Industrial Security Expert_back.png',
    title: '산업보안관리사'
  },
  infosec: {
    front: '../images/certificate_images/Information Security_front.png',
    back: '../images/certificate_images/Information Security_back.png',
    title: '정보보안기사'
  }
};

// 페이지 로드 시 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', function() {
  const certItems = document.querySelectorAll('.cert-item');
  const certDetailImg = document.getElementById('cert-detail-img');
  const certTitle = document.getElementById('cert-title');
  const certText = document.getElementById('cert-text');
  
  // 첫 번째 자격증을 기본으로 활성화
  if (certItems.length > 0) {
    certItems[0].classList.add('active');
  }
  
  certItems.forEach(item => {
    item.addEventListener('click', function() {
      // 모든 아이템에서 active 클래스 제거
      certItems.forEach(cert => cert.classList.remove('active'));
      
      // 클릭한 아이템에 active 클래스 추가
      this.classList.add('active');
      
      const certType = this.getAttribute('data-cert');
      if (certData[certType]) {
        certDetailImg.src = certData[certType].back;
        certDetailImg.alt = certType + ' back';
        certTitle.textContent = certData[certType].title;
        certText.textContent = certData[certType].description;
      }
    });
  });
});
