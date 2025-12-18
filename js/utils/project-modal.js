const projectsData = [
    {
        id: 1,
        title: 'Personal Information Protection System',
        shortDesc: '개인정보 암호화 및 접근 제어를 위한 통합 보안 플랫폼',
        description: '개인정보 암호화 및 접근 제어를 위한 통합 보안 플랫폼 개발 프로젝트입니다. GDPR 및 개인정보보호법을 준수하며, AES-256 암호화 시스템과 역할 기반 접근 제어를 구현했습니다.',
        image: '../images/project_images/project_1.jpg',
        tags: ['Security', 'Node.js', 'React'],
        features: [
            'AES-256 기반 개인정보 암호화 시스템',
            '역할 기반 접근 제어(RBAC) 구현',
            '개인정보 열람 이력 추적 및 감사 로그',
            'GDPR 및 개인정보보호법 준수 기능'
        ],
        tech: 'Backend: Node.js, Express, MongoDB<br>Security: JWT, bcrypt, crypto<br>Frontend: React, TypeScript',
        achievements: [
            '개인정보 유출 사고 0건 달성',
            '보안 감사 통과율 100%',
            '데이터 접근 제어 정확도 99.9%'
        ]
    },
    {
        id: 2,
        title: 'Smart Door Lock Security System',
        shortDesc: 'IoT 기반 스마트 도어락의 보안 강화 솔루션',
        description: 'IoT 기반 스마트 도어락의 보안 취약점 분석 및 강화 솔루션 개발 프로젝트입니다. 암호화된 통신 프로토콜과 다중 인증 시스템을 구축하여 안전한 출입 관리 시스템을 제공합니다.',
        image: '../images/project_images/project_2.jpg',
        tags: ['IoT', 'Python', 'Security'],
        features: [
            '암호화된 통신 프로토콜 구현 (TLS 1.3)',
            '다중 인증 시스템 (지문, 비밀번호, NFC)',
            '실시간 침입 감지 및 알림',
            '원격 접근 제어 및 로그 모니터링'
        ],
        tech: 'Hardware: Arduino, Raspberry Pi<br>Backend: Python, Flask, MQTT<br>Mobile: React Native<br>Security: SSL/TLS, AES-256',
        achievements: [
            '해킹 시도 차단율 99.8%',
            '인증 처리 속도 0.3초 이내',
            '오작동률 0.1% 미만 달성'
        ]
    },
    {
        id: 3,
        title: 'Building Blueprint Security System',
        shortDesc: '건축 도면 접근 제어 및 유출 방지 통합 솔루션',
        description: '건설사 및 건축 사무소를 위한 도면 접근 제어 및 유출 방지 통합 솔루션입니다. DRM 기반 문서 보안과 자동 암호화로 중요 도면을 안전하게 보호합니다.',
        image: '../images/project_images/project_3.jpg',
        tags: ['DRM', 'Java', 'AWS'],
        features: [
            '도면 파일 자동 암호화 및 워터마크 삽입',
            '권한별 열람/다운로드 제어',
            'DRM 기반 문서 보안 시스템',
            '실시간 접근 로그 및 이상 행위 탐지',
            '문서 버전 관리 및 백업'
        ],
        tech: 'Backend: Java Spring Boot, PostgreSQL<br>Storage: AWS S3, CloudFront CDN<br>Security: DRM, Digital Watermarking<br>Frontend: Vue.js, Canvas API',
        achievements: [
            '도면 유출 사고 100% 방지',
            '문서 접근 제어 자동화로 관리 시간 70% 단축',
            '대형 건설사 3곳 도입 완료'
        ]
    },
    {
        id: 4,
        title: 'Corporate VPN Security Solution',
        shortDesc: '제로 트러스트 기반 VPN 보안 인프라',
        description: '재택근무 환경을 위한 제로 트러스트 기반 VPN 보안 인프라 구축 프로젝트입니다. 다단계 인증과 AI 기반 이상 접근 탐지로 기업 네트워크를 안전하게 보호합니다.',
        image: '../images/project_images/project_4.jpg',
        tags: ['VPN', 'Network', 'Zero Trust'],
        features: [
            '제로 트러스트 아키텍처 기반 VPN 구축',
            '다단계 인증(MFA) 시스템',
            '트래픽 암호화 및 실시간 모니터링',
            '이상 접근 패턴 AI 기반 탐지',
            '자동 로그아웃 및 세션 관리'
        ],
        tech: 'Network: OpenVPN, WireGuard<br>Backend: Python, Django<br>Database: Redis, PostgreSQL<br>Monitoring: Prometheus, Grafana<br>Security: IPsec, IKEv2, 2FA',
        achievements: [
            '동시 접속자 500명 안정적 처리',
            '네트워크 침입 시도 100% 차단',
            '연결 속도 평균 150Mbps 유지',
            '보안 사고 0건 달성'
        ]
    },
    {
        id: 5,
        title: 'AI-Based CCTV Security System',
        shortDesc: '딥러닝 기반 실시간 영상 분석 및 이상 행동 탐지',
        description: '딥러닝 기반 실시간 영상 분석 및 이상 행동 탐지 통합 관제 시스템 개발 프로젝트입니다. YOLO 알고리즘을 활용한 객체 탐지와 AI 기반 패턴 분석으로 보안 수준을 향상시킵니다.',
        image: '../images/project_images/project_5.jpg',
        tags: ['AI', 'Computer Vision', 'Python'],
        features: [
            'YOLO 기반 실시간 객체 탐지',
            '이상 행동 패턴 AI 분석 및 알림',
            '얼굴 인식 및 출입 관리 연동',
            '다중 카메라 통합 모니터링',
            '영상 데이터 암호화 저장 및 접근 제어'
        ],
        tech: 'AI/ML: Python, TensorFlow, YOLO v5<br>Backend: FastAPI, Celery<br>Frontend: React, WebRTC<br>Storage: MinIO, FFmpeg<br>Database: MongoDB, TimescaleDB',
        achievements: [
            '이상 행동 탐지 정확도 94.7%',
            '실시간 영상 처리 지연시간 0.5초 이내',
            '오탐율 5% 미만 달성',
            '대형 쇼핑몰 2곳 시스템 구축 완료'
        ]
    }
];

let projectsGrid;
let modal;
let modalOverlay;
let modalClose;
let modalImage;
let modalTitle;
let modalDescription;
let modalDetails;

document.addEventListener('DOMContentLoaded', function() {
    projectsGrid = document.getElementById('projectsGrid');
    modal = document.getElementById('projectModal');
    modalOverlay = document.getElementById('modalOverlay');
    modalClose = document.getElementById('modalClose');
    modalImage = document.getElementById('modalImage');
    modalTitle = document.getElementById('modalTitle');
    modalDescription = document.getElementById('modalDescription');
    modalDetails = document.getElementById('modalDetails');

    renderProjectCards();

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

function renderProjectCards() {
    projectsGrid.innerHTML = '';
    
    projectsData.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openModal(project);
    
    const tagsHTML = project.tags.map(tag => 
        `<span class="project-tag">${tag}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="project-card-image">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-card-number">PROJECT ${project.id}</div>
        </div>
        <div class="project-card-content">
            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-card-description">${project.shortDesc}</p>
            <div class="project-card-tags">
                ${tagsHTML}
            </div>
        </div>
    `;
    
    return card;
}

function openModal(project) {
    modalImage.src = project.image;
    modalImage.alt = project.title;
    
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    
    const featuresHTML = project.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    const achievementsHTML = project.achievements.map(achievement => 
        `<li>${achievement}</li>`
    ).join('');
    
    modalDetails.innerHTML = `
        <div class="detail-section">
            <h3>주요 기능</h3>
            <ul>
                ${featuresHTML}
            </ul>
        </div>
        <div class="detail-section">
            <h3>기술 스택</h3>
            <p>${project.tech}</p>
        </div>
        <div class="detail-section">
            <h3>성과</h3>
            <ul>
                ${achievementsHTML}
            </ul>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
