/* =======================================================
   PROJECT PAGE - Business Clean Design
   移대뱶 洹몃━???덉씠?꾩썐 諛?紐⑤떖 ?명꽣?숈뀡
======================================================= */

// ?꾨줈?앺듃 ?곗씠??const projectsData = [
    {
        id: 1,
        title: 'Personal Information Protection System',
        shortDesc: '媛쒖씤?뺣낫 ?뷀샇??諛??묎렐 ?쒖뼱瑜??꾪븳 ?듯빀 蹂댁븞 ?뚮옯??,
        description: '媛쒖씤?뺣낫 ?뷀샇??諛??묎렐 ?쒖뼱瑜??꾪븳 ?듯빀 蹂댁븞 ?뚮옯??媛쒕컻 ?꾨줈?앺듃?낅땲?? GDPR 諛?媛쒖씤?뺣낫蹂댄샇踰뺤쓣 以?섑븯硫? AES-256 ?뷀샇???쒖뒪?쒓낵 ??븷 湲곕컲 ?묎렐 ?쒖뼱瑜?援ы쁽?덉뒿?덈떎.',
        image: '../images/project_images/project_1.jpg',
        tags: ['Security', 'Node.js', 'React'],
        features: [
            'AES-256 湲곕컲 媛쒖씤?뺣낫 ?뷀샇???쒖뒪??,
            '??븷 湲곕컲 ?묎렐 ?쒖뼱(RBAC) 援ы쁽',
            '媛쒖씤?뺣낫 ?대엺 ?대젰 異붿쟻 諛?媛먯궗 濡쒓렇',
            'GDPR 諛?媛쒖씤?뺣낫蹂댄샇踰?以??湲곕뒫'
        ],
        tech: 'Backend: Node.js, Express, MongoDB<br>Security: JWT, bcrypt, crypto<br>Frontend: React, TypeScript',
        achievements: [
            '媛쒖씤?뺣낫 ?좎텧 ?ш퀬 0嫄??ъ꽦',
            '蹂댁븞 媛먯궗 ?듦낵??100%',
            '?곗씠???묎렐 ?쒖뼱 ?뺥솗??99.9%'
        ]
    },
    {
        id: 2,
        title: 'Smart Door Lock Security System',
        shortDesc: 'IoT 湲곕컲 ?ㅻ쭏???꾩뼱?쎌쓽 蹂댁븞 媛뺥솕 ?붾（??,
        description: 'IoT 湲곕컲 ?ㅻ쭏???꾩뼱?쎌쓽 蹂댁븞 痍⑥빟??遺꾩꽍 諛?媛뺥솕 ?붾（??媛쒕컻 ?꾨줈?앺듃?낅땲?? ?뷀샇?붾맂 ?듭떊 ?꾨줈?좎퐳怨??ㅼ쨷 ?몄쬆 ?쒖뒪?쒖쓣 援ъ텞?섏뿬 ?덉쟾??異쒖엯 愿由??쒖뒪?쒖쓣 ?쒓났?⑸땲??',
        image: '../images/project_images/project_2.jpg',
        tags: ['IoT', 'Python', 'Security'],
        features: [
            '?뷀샇?붾맂 ?듭떊 ?꾨줈?좎퐳 援ы쁽 (TLS 1.3)',
            '?ㅼ쨷 ?몄쬆 ?쒖뒪??(吏臾? 鍮꾨?踰덊샇, NFC)',
            '?ㅼ떆媛?移⑥엯 媛먯? 諛??뚮┝',
            '?먭꺽 ?묎렐 ?쒖뼱 諛?濡쒓렇 紐⑤땲?곕쭅'
        ],
        tech: 'Hardware: Arduino, Raspberry Pi<br>Backend: Python, Flask, MQTT<br>Mobile: React Native<br>Security: SSL/TLS, AES-256',
        achievements: [
            '?댄궧 ?쒕룄 李⑤떒??99.8%',
            '?몄쬆 泥섎━ ?띾룄 0.3珥??대궡',
            '?ㅼ옉?숇쪧 0.1% 誘몃쭔 ?ъ꽦'
        ]
    },
    {
        id: 3,
        title: 'Building Blueprint Security System',
        shortDesc: '嫄댁텞 ?꾨㈃ ?묎렐 ?쒖뼱 諛??좎텧 諛⑹? ?듯빀 ?붾（??,
        description: '嫄댁꽕??諛?嫄댁텞 ?щТ?뚮? ?꾪븳 ?꾨㈃ ?묎렐 ?쒖뼱 諛??좎텧 諛⑹? ?듯빀 ?붾（?섏엯?덈떎. DRM 湲곕컲 臾몄꽌 蹂댁븞怨??먮룞 ?뷀샇?붾줈 以묒슂 ?꾨㈃???덉쟾?섍쾶 蹂댄샇?⑸땲??',
        image: '../images/project_images/project_3.jpg',
        tags: ['DRM', 'Java', 'AWS'],
        features: [
            '?꾨㈃ ?뚯씪 ?먮룞 ?뷀샇??諛??뚰꽣留덊겕 ?쎌엯',
            '沅뚰븳蹂??대엺/?ㅼ슫濡쒕뱶 ?쒖뼱',
            'DRM 湲곕컲 臾몄꽌 蹂댁븞 ?쒖뒪??,
            '?ㅼ떆媛??묎렐 濡쒓렇 諛??댁긽 ?됱쐞 ?먯?',
            '臾몄꽌 踰꾩쟾 愿由?諛?諛깆뾽'
        ],
        tech: 'Backend: Java Spring Boot, PostgreSQL<br>Storage: AWS S3, CloudFront CDN<br>Security: DRM, Digital Watermarking<br>Frontend: Vue.js, Canvas API',
        achievements: [
            '?꾨㈃ ?좎텧 ?ш퀬 100% 諛⑹?',
            '臾몄꽌 ?묎렐 ?쒖뼱 ?먮룞?붾줈 愿由??쒓컙 70% ?⑥텞',
            '???嫄댁꽕??3怨??꾩엯 ?꾨즺'
        ]
    },
    {
        id: 4,
        title: 'Corporate VPN Security Solution',
        shortDesc: '?쒕줈 ?몃윭?ㅽ듃 湲곕컲 VPN 蹂댁븞 ?명봽??,
        description: '?ы깮洹쇰Т ?섍꼍???꾪븳 ?쒕줈 ?몃윭?ㅽ듃 湲곕컲 VPN 蹂댁븞 ?명봽??援ъ텞 ?꾨줈?앺듃?낅땲?? ?ㅻ떒怨??몄쬆怨?AI 湲곕컲 ?댁긽 ?묎렐 ?먯?濡?湲곗뾽 ?ㅽ듃?뚰겕瑜??덉쟾?섍쾶 蹂댄샇?⑸땲??',
        image: '../images/project_images/project_4.jpg',
        tags: ['VPN', 'Network', 'Zero Trust'],
        features: [
            '?쒕줈 ?몃윭?ㅽ듃 ?꾪궎?띿쿂 湲곕컲 VPN 援ъ텞',
            '?ㅻ떒怨??몄쬆(MFA) ?쒖뒪??,
            '?몃옒???뷀샇??諛??ㅼ떆媛?紐⑤땲?곕쭅',
            '?댁긽 ?묎렐 ?⑦꽩 AI 湲곕컲 ?먯?',
            '?먮룞 濡쒓렇?꾩썐 諛??몄뀡 愿由?
        ],
        tech: 'Network: OpenVPN, WireGuard<br>Backend: Python, Django<br>Database: Redis, PostgreSQL<br>Monitoring: Prometheus, Grafana<br>Security: IPsec, IKEv2, 2FA',
        achievements: [
            '?숈떆 ?묒냽??500紐??덉젙??泥섎━',
            '?ㅽ듃?뚰겕 移⑥엯 ?쒕룄 100% 李⑤떒',
            '?곌껐 ?띾룄 ?됯퇏 150Mbps ?좎?',
            '蹂댁븞 ?ш퀬 0嫄??ъ꽦'
        ]
    },
    {
        id: 5,
        title: 'AI-Based CCTV Security System',
        shortDesc: '?λ윭??湲곕컲 ?ㅼ떆媛??곸긽 遺꾩꽍 諛??댁긽 ?됰룞 ?먯?',
        description: '?λ윭??湲곕컲 ?ㅼ떆媛??곸긽 遺꾩꽍 諛??댁긽 ?됰룞 ?먯? ?듯빀 愿???쒖뒪??媛쒕컻 ?꾨줈?앺듃?낅땲?? YOLO ?뚭퀬由ъ쬁???쒖슜??媛앹껜 ?먯?? AI 湲곕컲 ?⑦꽩 遺꾩꽍?쇰줈 蹂댁븞 ?섏????μ긽?쒗궢?덈떎.',
        image: '../images/project_images/project_5.jpg',
        tags: ['AI', 'Computer Vision', 'Python'],
        features: [
            'YOLO 湲곕컲 ?ㅼ떆媛?媛앹껜 ?먯?',
            '?댁긽 ?됰룞 ?⑦꽩 AI 遺꾩꽍 諛??뚮┝',
            '?쇨뎬 ?몄떇 諛?異쒖엯 愿由??곕룞',
            '?ㅼ쨷 移대찓???듯빀 紐⑤땲?곕쭅',
            '?곸긽 ?곗씠???뷀샇?????諛??묎렐 ?쒖뼱'
        ],
        tech: 'AI/ML: Python, TensorFlow, YOLO v5<br>Backend: FastAPI, Celery<br>Frontend: React, WebRTC<br>Storage: MinIO, FFmpeg<br>Database: MongoDB, TimescaleDB',
        achievements: [
            '?댁긽 ?됰룞 ?먯? ?뺥솗??94.7%',
            '?ㅼ떆媛??곸긽 泥섎━ 吏?곗떆媛?0.5珥??대궡',
            '?ㅽ깘??5% 誘몃쭔 ?ъ꽦',
            '????쇳븨紐?2怨??쒖뒪??援ъ텞 ?꾨즺'
        ]
    }
];

// DOM ?붿냼
let projectsGrid;
let modal;
let modalOverlay;
let modalClose;
let modalImage;
let modalTitle;
let modalDescription;
let modalDetails;

// 珥덇린??document.addEventListener('DOMContentLoaded', function() {
    // DOM ?붿냼 媛?몄삤湲?    projectsGrid = document.getElementById('projectsGrid');
    modal = document.getElementById('projectModal');
    modalOverlay = document.getElementById('modalOverlay');
    modalClose = document.getElementById('modalClose');
    modalImage = document.getElementById('modalImage');
    modalTitle = document.getElementById('modalTitle');
    modalDescription = document.getElementById('modalDescription');
    modalDetails = document.getElementById('modalDetails');

    // ?꾨줈?앺듃 移대뱶 ?뚮뜑留?    renderProjectCards();

    // ?대깽??由ъ뒪???ㅼ젙
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // ESC ?ㅻ줈 紐⑤떖 ?リ린
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// ?꾨줈?앺듃 移대뱶 ?뚮뜑留?function renderProjectCards() {
    projectsGrid.innerHTML = '';
    
    projectsData.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
    });
}

// ?꾨줈?앺듃 移대뱶 ?앹꽦
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

// 紐⑤떖 ?닿린
function openModal(project) {
    // ?대?吏 ?ㅼ젙
    modalImage.src = project.image;
    modalImage.alt = project.title;
    
    // ?쒕ぉ 諛??ㅻ챸
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    
    // ?곸꽭 ?뺣낫
    const featuresHTML = project.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    const achievementsHTML = project.achievements.map(achievement => 
        `<li>${achievement}</li>`
    ).join('');
    
    modalDetails.innerHTML = `
        <div class="detail-section">
            <h3>二쇱슂 湲곕뒫</h3>
            <ul>
                ${featuresHTML}
            </ul>
        </div>
        <div class="detail-section">
            <h3>湲곗닠 ?ㅽ깮</h3>
            <p>${project.tech}</p>
        </div>
        <div class="detail-section">
            <h3>?깃낵</h3>
            <ul>
                ${achievementsHTML}
            </ul>
        </div>
    `;
    
    // 紐⑤떖 ?쒖떆
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 紐⑤떖 ?リ린
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
