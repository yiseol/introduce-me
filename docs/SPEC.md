# SPEC.md - Project Specification (Master Plan)

## 📌 프로젝트 개요

**프로젝트명:** INTRODUCE-ME Portfolio Website  
**프로젝트 타입:** 개인 포트폴리오 웹사이트  
**작성일:** 2025-11-19  
**작성자:** 이설 (Lee Seol)  
**버전:** 1.0.0  

### 프로젝트 목적
이설의 학업 성과, 프로젝트, 자격증, 활동 내역을 효과적으로 보여주는 인터랙티브 포트폴리오 웹사이트 구축

---

## 🏗️ 프로젝트 구조

### 폴더 구조 (2025-11-19 확정)

```
introduce-me/
├── index.html                    # 메인 페이지
├── pages/                        # 서브 페이지들
│   ├── Activity.html            # 활동 내역
│   ├── Certificate.html         # 자격증 페이지
│   ├── Introduce_myself.html    # 자기소개
│   ├── Project.html             # 프로젝트 페이지
│   └── Resume.html              # 이력서
├── css/                          # 스타일시트
│   ├── styles.css               # 메인 진입점 (@import 모음)
│   ├── base.css                 # 변수, 리셋, 애니메이션
│   ├── layout.css               # 레이아웃 구조
│   └── components.css           # 컴포넌트 스타일
├── js/                           # JavaScript
│   ├── script.js                # 메인 진입점
│   └── utils/                   # 유틸리티 함수
│       └── helpers.js           # 헬퍼 함수 모음
├── images/                       # 이미지 파일
│   ├── planets/                 # 배경 이미지
│   ├── projects/                # 프로젝트 스크린샷
│   └── icons/                   # 아이콘 이미지
├── fonts/                        # 폰트 파일
│   └── stylesheet.css           # 폰트 정의
├── docs/                         # 문서
│   ├── README.md                # 프로젝트 소개
│   ├── SPEC.md                  # 프로젝트 명세 (본 문서)
│   ├── TODO.md                  # 작업 로드맵
│   ├── OPERATIONAL_RULES.md     # Copilot 작업 수칙
│   ├── CODING_STYLE_GUIDE.md    # 코딩 스타일 가이드
│   ├── CSS_NAMING_GUIDE.md      # CSS 네이밍 규칙
│   └── prompts.md               # AI 프롬프트 히스토리
└── README.md                     # 프로젝트 루트 README

```

### 폴더 구조 원칙
1. **pages/**: 모든 서브 페이지는 이 폴더에 위치
2. **css/**: 모듈화된 CSS 구조 (@import 사용)
3. **js/**: 기능별로 분리 (utils, components 등)
4. **images/**: 용도별 하위 폴더 구분
5. **docs/**: 모든 프로젝트 문서 통합 관리

---

## 🎯 핵심 기능 명세 (MoSCoW 우선순위)

### Must Have (필수 기능) - Phase 1

#### 1. Hero Section (메인 화면)
- **위치:** `index.html` 최상단
- **기능:**
  - 5단계 로딩 애니메이션 (총 9초)
    1. 프로그레스 바 (0-2초)
    2. 타이핑 효과 제목 "INTRODUCE-ME" (2-4초)
    3. 부제목 "Portfolio Website" (4-6초)
    4. 환영 메시지 (6-8초)
    5. 진입 안내 (8-9초)
  - 로딩 완료 후 자동으로 메인 콘텐츠 표시
- **기술:** CSS animations, JavaScript setTimeout
- **완성도:** ✅ 100% (구현 완료)

#### 2. About Section (자기소개)
- **위치:** `index.html` Hero 다음 섹션
- **기능:**
  - 이름, 전공, 학교 정보
  - 간단한 자기소개 텍스트
  - 프로필 이미지 (선택)
- **기술:** HTML5 semantic elements
- **완성도:** 🟡 진행 중

#### 3. Skills Section (기술 스택)
- **위치:** `index.html` 중간 섹션
- **기능:**
  - 보유 기술 목록 표시
  - 카테고리별 분류 (예: 프로그래밍 언어, 프레임워크, 도구)
- **기술:** 정적 HTML/CSS
- **완성도:** 🟡 진행 중

#### 4. Projects Section (프로젝트 소개)
- **위치:** `index.html` + `pages/Project.html`
- **기능:**
  - 프로젝트 카드 형태로 표시
  - 각 카드에 프로젝트명, 설명, 기술 스택, 링크
  - 클릭 시 상세 페이지로 이동
- **기술:** Card UI 컴포넌트
- **완성도:** 🟡 진행 중

#### 5. Certificates Section (자격증)
- **위치:** `index.html` + `pages/Certificate.html`
- **기능:**
  - 취득 자격증 목록 표시
  - 자격증명, 발급 기관, 취득 날짜
- **기술:** Timeline 또는 Card 컴포넌트
- **완성도:** 🟡 진행 중

#### 6. Activities Section (활동 내역)
- **위치:** `pages/Activity.html`
- **기능:**
  - 학술 활동, 동아리, 봉사활동 등 표시
  - 시간순 정렬
- **기술:** Timeline 컴포넌트
- **완성도:** 🟡 진행 중

#### 7. Resume Section (이력서)
- **위치:** `pages/Resume.html`
- **기능:**
  - 학력, 경력, 기술, 자격증 통합 표시
  - 인쇄 친화적 레이아웃
- **기술:** 시맨틱 HTML5
- **완성도:** ✅ 100% (구조 개선 완료)

#### 8. Contact Section (연락처)
- **위치:** `index.html` 하단 또는 Footer
- **기능:**
  - 이메일, GitHub, LinkedIn 등 링크
  - 간단한 연락 정보
- **기술:** 정적 링크
- **완성도:** 🟡 진행 중

#### 9. Navigation (네비게이션)
- **위치:** 모든 페이지 상단 고정
- **기능:**
  - 메뉴 항목: Home, About, Skills, Projects, Certificates, Activities, Resume, Contact
  - 부드러운 스크롤 애니메이션
  - 현재 섹션 하이라이트
- **기술:** Fixed header, JavaScript scrolling
- **완성도:** ✅ 90% (구현 완료, 미세 조정 필요)

#### 10. Footer
- **위치:** 모든 페이지 하단
- **기능:**
  - 저작권 정보
  - 소셜 미디어 링크
  - 추가 네비게이션 링크
- **기술:** 정적 HTML/CSS
- **완성도:** 🟡 진행 중

---

### Should Have (중요 기능) - Phase 2

#### 1. Scroll Reveal Animations
- 섹션이 뷰포트에 들어올 때 애니메이션 효과
- **기술:** Intersection Observer API
- **우선순위:** 높음

#### 2. Project Filtering
- 프로젝트를 카테고리별로 필터링
- **기술:** JavaScript filtering
- **우선순위:** 중간

#### 3. Responsive Mobile Menu
- 모바일에서 햄버거 메뉴
- **기술:** CSS transforms, JavaScript toggle
- **우선순위:** 높음

#### 4. Back to Top Button
- 페이지 최상단으로 스크롤
- **기술:** JavaScript smooth scroll
- **우선순위:** 낮음

---

### Could Have (선택 기능) - Phase 3

#### 1. Dark Mode Toggle
- 다크/라이트 테마 전환
- **기술:** CSS variables, localStorage

#### 2. Contact Form
- 이메일 전송 기능
- **기술:** FormSubmit 또는 EmailJS

#### 3. Multi-language Support (i18n)
- 한국어/영어 전환
- **기술:** JavaScript i18n library

#### 4. Resume PDF Download
- 이력서를 PDF로 다운로드
- **기술:** html2pdf.js

---

### Won't Have (구현 안 함)

#### 1. 백엔드 서버
- 정적 사이트로 유지

#### 2. 데이터베이스
- JSON 파일 또는 HTML에 직접 작성

#### 3. 사용자 인증
- 공개 포트폴리오이므로 불필요

---

## 🎨 디자인 시스템

### 컬러 팔레트
```css
:root {
  /* Primary Colors */
  --color-primary: #007bff;      /* 블루 */
  --color-secondary: #ffffff;    /* 화이트 */
  
  /* Grayscale */
  --color-dark: #333333;
  --color-gray: #666666;
  --color-light-gray: #f5f5f5;
  
  /* Accent Colors */
  --color-accent: #00d4ff;       /* 밝은 블루 */
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-danger: #dc3545;
}
```

### 타이포그래피
- **제목 폰트:** Storyscript (커스텀 폰트)
- **본문 폰트:** Arial, sans-serif
- **폰트 크기:**
  - H1: 48px
  - H2: 36px
  - H3: 24px
  - Body: 16px

### 간격 시스템
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-xxl: 48px;
```

### 반응형 브레이크포인트
```css
--breakpoint-mobile: 480px;
--breakpoint-tablet: 768px;
--breakpoint-desktop: 1024px;
--breakpoint-wide: 1280px;
```

---

## 💻 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript (ES6+)**: Vanilla JS (프레임워크 없음)

### 도구
- **Version Control**: Git, GitHub
- **Code Editor**: VS Code
- **Browser**: Chrome, Firefox, Safari (크로스 브라우저 테스트)

### 외부 라이브러리 (최소화 원칙)
- ❌ jQuery: 사용 안 함 (Vanilla JS로 대체)
- ❌ Bootstrap: 사용 안 함 (커스텀 CSS)
- ✅ Intersection Observer API: 스크롤 애니메이션용 (브라우저 네이티브)

---

## 📝 코딩 규칙

### CSS 네이밍 컨벤션
- **규칙:** kebab-case
- **예시:** `timeline-container`, `project-card`, `nav-menu`
- **상세 문서:** `docs/CSS_NAMING_GUIDE.md`

### JavaScript 네이밍 컨벤션
- **변수/함수:** camelCase (예: `scrollToSection`)
- **상수:** UPPER_SNAKE_CASE (예: `MAX_SECTIONS`)
- **클래스:** PascalCase (예: `ProjectCard`)

### 들여쓰기 및 포맷팅
- **들여쓰기:** 2 스페이스 (탭 대신 스페이스 사용)
- **줄바꿈:** LF (Unix 스타일)
- **인코딩:** UTF-8

### 주석 규칙
- **언어:** 한글 우선
- **스타일:** JSDoc 형식 또는 `=======` 구분자
- **상세 문서:** `docs/CODING_STYLE_GUIDE.md`

---

## 🔄 개발 프로세스

### Git Workflow
1. **브랜치 전략:** main 브랜치 직접 작업 (소규모 프로젝트)
2. **커밋 규칙:**
   - `feat:` 새로운 기능
   - `fix:` 버그 수정
   - `refactor:` 코드 리팩토링
   - `style:` 스타일 변경
   - `docs:` 문서 수정
   - `chore:` 기타 작업

### 작업 흐름
1. **계획 단계:** TODO.md 작성 및 업데이트
2. **개발 단계:** 기능 구현
3. **테스트 단계:** 브라우저 테스트
4. **배포 단계:** GitHub Pages로 배포
5. **문서화 단계:** 변경 사항 기록

---

## 📊 성능 목표

### 페이지 로드 속도
- **목표:** 3초 이내 (모바일 기준)
- **최적화 방법:**
  - 이미지 압축 및 최적화
  - CSS/JS 파일 최소화
  - 불필요한 외부 라이브러리 제거

### 접근성 (Accessibility)
- **WCAG 2.1 Level AA 준수**
- 시맨틱 HTML 사용
- 키보드 네비게이션 지원
- 적절한 대비율 유지

### SEO
- 메타 태그 최적화
- Open Graph 태그 추가
- 구조화된 데이터 (Schema.org)

---

## 🚀 배포 계획

### 호스팅
- **플랫폼:** GitHub Pages
- **URL:** `https://yiseol.github.io/Introduce-me/`
- **배포 방법:** Git push to main branch

### 도메인 (선택)
- 커스텀 도메인 연결 가능 (추후 결정)

---

## 📅 개발 히스토리

### Phase 1: 초기 개발 (2025-10-23 ~ 2025-11-03)
- 기본 HTML 구조 작성
- CSS 스타일링
- 로딩 애니메이션 구현
- 우주 테마 → 블루/화이트 테마 전환

### Phase 2: 코드 정리 (2025-11-19)
- styles.css 중복 코드 제거 (2232줄 → 5줄)
- Resume.html 구조 개선 (175줄 → 73줄)
- CSS 네이밍 컨벤션 통일
- 코딩 스타일 가이드 작성
- 폴더 구조 재정리

### Phase 3: 문서화 및 명세 작성 (2025-11-19)
- SPEC.md (본 문서) 작성
- TODO.md 작성
- OPERATIONAL_RULES.md 작성

---

## 🔗 관련 문서

- `docs/TODO.md` - 작업 로드맵 및 우선순위
- `docs/OPERATIONAL_RULES.md` - Copilot 작업 수칙
- `docs/CODING_STYLE_GUIDE.md` - 코딩 스타일 가이드
- `docs/CSS_NAMING_GUIDE.md` - CSS 네이밍 규칙
- `docs/prompts.md` - AI 프롬프트 히스토리

---

## 📞 연락처

**작성자:** 이설 (Lee Seol)  
**GitHub:** https://github.com/yiseol/Introduce-me  
**이메일:** (추가 예정)

---

**문서 버전:** 1.0.0  
**최종 업데이트:** 2025-11-19  
**다음 리뷰 예정일:** 프로젝트 완료 후
