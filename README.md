# INTRODUCE-ME Portfolio Website

> 반응형 디자인과 인터랙티브한 UI를 적용한 개인 포트폴리오 웹사이트

## ⚠️ 중요 안내

**본 포트폴리오 사이트에 포함된 모든 콘텐츠(프로젝트, 자격증, 활동 내역 등)는 프로젝트 시연을 위한 허구의 데이터입니다.**  
실제 개인의 경력이나 업적과는 무관하며, 웹사이트 구현 능력을 보여주기 위한 샘플 데이터로 제작되었습니다.

---

## 🌟 프로젝트 소개

### 개요

한세대학교 융합보안학과 학생 포트폴리오 웹사이트입니다. 본 프로젝트는 프론트엔드 개발 역량을 보여주기 위해 제작되었으며, 면접관이나 협업자에게 기술 스택과 디자인 감각을 효과적으로 전달하는 것을 목표로 합니다.

### 주요 특징

* **fullPage.js 활용**: 섹션 기반 풀스크린 스크롤 네비게이션으로 몰입감 있는 사용자 경험 제공
* **반응형 디자인**: 모바일부터 데스크톱까지 다양한 화면 크기에 최적화된 레이아웃
* **인트로 애니메이션**: 첫 방문 시 브랜드 로고와 타이핑 효과로 인상적인 첫인상 제공
* **비디오 배경**: 동적인 홈 섹션 배경으로 현대적인 웹 디자인 구현
* **모듈화된 CSS 구조**: 유지보수가 용이한 컴포넌트 기반 스타일 설계

---

## 🚀 주요 페이지 및 기능

### 홈페이지 (index.html)
* **인트로 스크린**: 9초간의 로딩 애니메이션 (프로그레스 바, 타이핑 효과)
* **Home Section**: 비디오 배경과 히어로 콘텐츠
* **Menu Sections**: Activity, Certificate, Project, Resume 4개 섹션을 좌우 교차 레이아웃으로 소개
* **Footer Section**: 스크롤 최상단 이동 버튼 포함
* **네비게이션 제어**: fullPage.js의 afterLoad 콜백으로 특정 섹션에서 네비게이션 자동 숨김/표시

### Activity 페이지
* 타임라인 형식으로 활동 내역 표시
* 기간, 제목, 역할, 설명이 포함된 세로 타임라인 레이아웃
* 깔끔한 카드 기반 디자인

### Certificate 페이지
* 그리드 레이아웃의 자격증 카드 배치
* 카드 플립(Flip) 효과로 앞면/뒷면 정보 표시
* hover 인터랙션과 3D 효과

### Project 페이지
* 프로젝트 카드 그리드 레이아웃
* 모달 팝업으로 프로젝트 상세 정보 표시
* 기술 스택, 주요 기능, 성과 등을 체계적으로 구성

### Resume 페이지
* PDF 이력서 뷰어
* 간단한 자기소개 및 연락처 정보

---

## 🛠 사용 기술

### 프론트엔드
* **HTML5**: 시맨틱 태그를 활용한 구조적 마크업
* **CSS3**: 
  - CSS Custom Properties (변수)
  - Flexbox & Grid Layout
  - CSS Animations & Transitions
  - 모듈화된 구조 (variables, reset, animations, layout, components)
* **JavaScript (Vanilla ES6+)**: 
  - DOM 조작
  - 이벤트 핸들링
  - 모달 인터랙션
  - 동적 콘텐츠 생성

### 라이브러리
* **fullPage.js v4**: 풀스크린 스크롤 네비게이션

### 도구
* **Git/GitHub**: 버전 관리 및 저장소 호스팅
* **VS Code**: 개발 환경
* **GitHub Copilot**: AI 기반 코드 작성 보조

### 브라우저 호환성
* **Chrome**: 최신 버전 (권장)
* **Firefox**: 최신 버전
* **Safari**: 최신 버전
* **Edge**: 최신 버전
* **모바일 브라우저**: iOS Safari, Chrome Mobile

**참고**: fullPage.js 및 CSS3 기능을 사용하므로 최신 브라우저 환경에서 최적의 경험을 제공합니다.

---

## 📐 사이트맵 (페이지 구조도)

```
INTRODUCE-ME Portfolio
│
├── 🏠 Home (index.html)
│   ├── Intro Screen (로딩 애니메이션)
│   ├── Home Section (비디오 배경)
│   ├── Menu Section - Activity
│   ├── Menu Section - Certificate
│   ├── Menu Section - Project
│   ├── Menu Section - Resume
│   └── Footer Section
│
├── 📋 Activity (Activity.html)
│   └── 타임라인 형식 활동 내역
│
├── 🎓 Certificate (Certificate.html)
│   └── 4x3 그리드 자격증 카드 (플립 효과)
│
├── 💼 Project (Project.html)
│   └── 프로젝트 갤러리 및 상세 정보
│
└── 📄 Resume (Resume.html)
    └── PDF 이력서 뷰어
```

**네비게이션 구조:**
- 모든 페이지 상단에 고정 네비게이션 바
- 홈페이지에서는 fullPage.js 섹션 전환 시 네비게이션 자동 제어
- 서브 페이지는 독립적인 스크롤 구조

---

## 🎨 와이어프레임 (레이아웃 스케치)

### 홈페이지 (index.html)

```
┌─────────────────────────────────────────┐
│  [INTRODUCE-ME]  [Activity][Certificate]│  ← 네비게이션 (투명/고정)
│                  [Project][Resume]       │
├─────────────────────────────────────────┤
│                                          │
│         [비디오 배경]                     │
│                                          │
│            YISEOL                        │  ← Home Section (100vh)
│     Security Engineer & Consultant       │
│     Safety First, Innovation Always      │
│                                          │
└─────────────────────────────────────────┘
         ↓ 스크롤 (fullPage.js)
┌─────────────────────────────────────────┐
│  [이미지 영역]  │  Activity               │  ← Menu Section (100vh)
│   (40-50%)     │  설명 텍스트             │     좌우 교차 레이아웃
│                │  [Learn more 버튼]       │
└─────────────────────────────────────────┘
         ↓ 추가 메뉴 섹션들...
┌─────────────────────────────────────────┐
│  Copyright © 2024                        │  ← Footer Section
│  [SNS 아이콘]  [↑ 최상단 이동 버튼]      │
└─────────────────────────────────────────┘
```

### Activity 페이지

```
┌─────────────────────────────────────────┐
│  [INTRODUCE-ME]  [Activity][Certificate]│  ← 네비게이션 (고정)
│                  [Project][Resume]       │
├─────────────────────────────────────────┤
│                                          │
│           ACTIVITIES                     │  ← 페이지 헤더
│     다양한 경험과 도전을 통해...          │
│                                          │
├─────────────────────────────────────────┤
│  ●───────────────────────────────        │
│  │  [캡스톤 디자인 프로젝트]              │  ← 타임라인 아이템
│  │   2024.03 - 2024.11                   │     (세로 스크롤)
│  │   역할: 팀장 & 보안 담당              │
│  │   설명: ...                           │
│  │                                       │
│  ●───────────────────────────────        │
│  │  [보안 해커톤 참가]                    │
│  │   2024.06.15 - 2024.06.16            │
│     ...                                  │
└─────────────────────────────────────────┘
```

### Certificate 페이지

```
┌─────────────────────────────────────────┐
│  [INTRODUCE-ME]  [Activity][Certificate]│  ← 네비게이션
│                  [Project][Resume]       │
├─────────────────────────────────────────┤
│                                          │
│         CERTIFICATIONS                   │  ← 페이지 헤더
│                                          │
├─────────────────────────────────────────┤
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐               │
│  │ 1 │ │ 2 │ │ 3 │ │ 4 │               │  ← 4x3 그리드
│  └───┘ └───┘ └───┘ └───┘               │     (hover시 플립)
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐               │
│  │ 5 │ │ 6 │ │ 7 │ │ 8 │               │     앞면: 자격증명
│  └───┘ └───┘ └───┘ └───┘               │     뒷면: 설명
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐               │
│  │ 9 │ │10 │ │11 │ │12 │               │
│  └───┘ └───┘ └───┘ └───┘               │
└─────────────────────────────────────────┘
```

### Project 페이지

```
┌─────────────────────────────────────────┐
│  [INTRODUCE-ME]  [Activity][Certificate]│  ← 네비게이션 (투명)
│                  [Project][Resume]       │
├─────────────────────────────────────────┤
│                                          │
│  [배경 이미지 - 프로젝트 메인 이미지]      │
│                                          │
│  개인정보 보호 시스템                     │  ← 프로젝트 제목 (좌측)
│                                          │
│                        ┌──────────────┐  │
│                        │ 프로젝트 설명  │  │  ← 설명 박스 (우측)
│                        │ - 주요 기능   │  │     블러 효과
│  2024 | Security Eng. │ - 사용 기술   │  │
│  (좌측 하단)            │ - 성과       │  │
│                        └──────────────┘  │
│  [썸네일1][썸네일2][썸네일3][썸네일4][5]   │  ← 썸네일 갤러리 (우측 하단)
└─────────────────────────────────────────┘
```

### Resume 페이지

```
┌─────────────────────────────────────────┐
│  [INTRODUCE-ME]  [Activity][Certificate]│  ← 네비게이션
│                  [Project][Resume]       │
├─────────────────────────────────────────┤
│                                          │
│              RESUME                      │  ← 페이지 헤더
│                                          │
├─────────────────────────────────────────┤
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │      [PDF 이력서 뷰어]             │  │  ← PDF Embed
│  │                                   │  │     (80% width, 85vh)
│  │      (PDF 컨트롤러 포함)           │  │
│  │                                   │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                          │
└─────────────────────────────────────────┘
```

**반응형 레이아웃:**
- 데스크톱: 위 레이아웃 유지
- 태블릿 (1024px↓): 그리드 조정, 네비게이션 간격 축소
- 모바일 (768px↓): 1열 세로 배치, 메뉴 섹션 이미지/텍스트 세로 정렬

---

## 📁 프로젝트 구조

```
introduce-me/
├── index.html                    # 메인 홈페이지
├── pages/                        # 서브 페이지
│   ├── Activity.html            # 활동 내역
│   ├── Certificate.html         # 자격증
│   ├── Project.html             # 프로젝트
│   └── Resume.html              # 이력서
├── css/                          # 스타일시트
│   ├── styles.css               # 메인 CSS 진입점 (@import)
│   ├── variables.css            # CSS 변수 정의
│   ├── reset.css                # 브라우저 리셋 및 전역 스타일
│   ├── animations.css           # 키프레임 애니메이션
│   ├── layout.css               # 레이아웃 구조
│   └── components/              # 컴포넌트별 스타일
│       ├── home.css             # 홈페이지 전용
│       ├── activity.css         # Activity 페이지
│       ├── certificate.css      # Certificate 페이지
│       ├── project.css          # Project 페이지
│       └── resume.css           # Resume 페이지
├── js/                           # JavaScript
│   ├── script.js                # 메인 스크립트
│   ├── home-init.js             # fullPage.js 초기화
│   ├── project.js               # 프로젝트 데이터 및 모달
│   └── certificate.js           # 자격증 데이터 (현재 미사용)
├── images/                       # 이미지 파일
│   ├── home_images/             # 홈페이지 메뉴 이미지
│   ├── project_images/          # 프로젝트 스크린샷
│   ├── certificate_images/      # 자격증 이미지
│   ├── resume_images/           # 이력서 관련 이미지
│   ├── planets/                 # 배경 행성 이미지
│   └── logo/                    # 로고 파일
├── video/                        # 비디오 파일
│   └── Home_video.mp4           # 홈 섹션 배경 비디오
├── docs/                         # 프로젝트 문서
│   ├── CODING_STYLE_GUIDE.md    # 코딩 스타일 가이드
│   ├── CSS_NAMING_GUIDE.md      # CSS 네이밍 규칙
│   └── prompts.md               # AI 프롬프트 히스토리
└── README.md                     # 프로젝트 소개 (본 문서)
```

---

## 💡 실행 방법

본 프로젝트는 **정적 웹사이트**로, 별도의 빌드 과정이나 서버 없이 브라우저에서 바로 실행 가능합니다.

### 1. 저장소 복제

```bash
git clone https://github.com/yiseol/introduce-me.git
cd introduce-me
```

### 2. 실행 방법

#### 방법 1: Live Server 사용 (VS Code 확장)
1. VS Code에서 프로젝트 폴더 열기
2. `index.html` 파일 우클릭
3. "Open with Live Server" 선택

#### 방법 2: 직접 브라우저에서 열기
1. 탐색기에서 `index.html` 파일 찾기
2. 더블클릭하여 기본 브라우저에서 실행

#### 방법 3: Python 간이 서버 (옵션)
```bash
# Python 3가 설치되어 있다면
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

### 3. 접속 확인

브라우저에서 인트로 애니메이션이 재생되고, 홈페이지가 정상적으로 표시되면 성공입니다.

---

## 🎨 CSS 구조 및 네이밍 규칙

### CSS 아키텍처

모듈화된 CSS 구조로 유지보수성을 극대화했습니다:

1. **variables.css**: CSS Custom Properties (색상, 폰트, 간격 등)
2. **reset.css**: 브라우저 기본 스타일 리셋, 전역 스타일, 스크롤바 숨김
3. **animations.css**: 재사용 가능한 keyframe 애니메이션
4. **layout.css**: 네비게이션, 레이아웃 구조
5. **components/**: 페이지별 컴포넌트 스타일

### 네이밍 컨벤션

* **kebab-case** 방식: 모든 클래스명은 소문자와 하이픈 사용
* **BEM 원칙 적용** (가벼운 버전):
  - Block: `.section`, `.card`, `.timeline`
  - Element: `.section-inner`, `.card-title`, `.timeline-item`
  - Modifier: `.menu-section-reverse`, `.activity-section`

자세한 내용은 [CSS_NAMING_GUIDE.md](docs/CSS_NAMING_GUIDE.md)와 [CODING_STYLE_GUIDE.md](docs/CODING_STYLE_GUIDE.md)를 참고하세요.

---

## 📝 개발 히스토리

프로젝트 개발 과정 및 AI를 활용한 작업 내역은 [docs/prompts.md](docs/prompts.md)에서 확인할 수 있습니다.

주요 개발 마일스톤:
* 초기 HTML/CSS 구조 구축
* fullPage.js 통합 및 섹션 기반 네비게이션 구현
* CSS 파일 재구성 (모듈화 및 컴포넌트 분리)
* 네비게이션 숨김/표시 로직 구현
* 스크롤 최상단 버튼 추가
* 반응형 디자인 최적화

---

## 👨‍💻 개발자 정보

* **이름**: 최이설
* **소속**: 한세대학교 융합보안학과
* **GitHub**: [@yiseol](https://github.com/yiseol)
* **이메일**: chldltjf0919@naver.com

---

## 📜 라이선스

이 프로젝트는 학교 과제로 제작되었으며, **All Rights Reserved** 입니다.  
무단 복제 및 배포를 금지합니다.

---

## 🙏 감사의 말

본 프로젝트는 한세대학교 융합보안학과 웹 프로그래밍 수업의 기말고사 과제로 제작되었습니다.  
GitHub Copilot의 도움을 받아 효율적인 개발이 가능했습니다.