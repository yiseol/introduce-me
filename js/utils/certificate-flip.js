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

document.addEventListener('DOMContentLoaded', function() {
  const certItems = document.querySelectorAll('.cert-item');
  const certDetailImg = document.getElementById('cert-detail-img');
  const certTitle = document.getElementById('cert-title');
  const certText = document.getElementById('cert-text');
  
  if (certItems.length > 0) {
    certItems[0].classList.add('active');
  }
  
  certItems.forEach(item => {
    item.addEventListener('click', function() {
      certItems.forEach(cert => cert.classList.remove('active'));
      
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
