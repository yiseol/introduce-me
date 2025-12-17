# AI 프롬프트 히스토리

> 이 문서는 프로젝트 개발 과정에서 사용한 AI 프롬프트와 그 결과를 시간순으로 기록합니다.

---

## 2025-10-23

### CSS 파일 통합
**요청:** 중복된 CSS 파일 통합  
**결과:**
- styles.css와 front.css 통합
- 중복 스타일 제거

---

### HTML 주석 시스템 추가
**요청:** 페이지 섹션별 주석 구분 추가  
**결과:**
- HTML 파일에 계층적 주석 시스템 (`=======`) 추가
- 섹션별 명확한 구분

---

### CSS 파일 모듈화
**요청:** CSS를 큰 섹션별로 2개 이상 파일로 분리  
**결과:**
- base.css, layout.css, components.css로 모듈화
- 유지보수성 향상

---

### 해양 테마 제거
**요청:** 돌고래 요소 삭제  
**결과:**
- 해양 테마 관련 요소 제거
- 깔끔한 디자인으로 변경

---

### 커스텀 폰트 적용
**요청:** 타이틀 텍스트 폰트를 Storyscript로 변경  
**결과:**
- 커스텀 폰트 적용
- 폰트 파일 관리 시스템 구축

---

### 폰트 통일
**요청:** 모든 폰트를 기본 폰트로 변경  
**결과:**
- Arial 폰트로 통일
- 안정성과 가독성 확보

---

## 2025-10-31

### 프로토타입 생성
**요청:** HTML/CSS만으로 웹사이트 프로토타입 생성  
**결과:**
- 완전한 프로토타입 버전 생성
- HTML/CSS만으로 구현

---

### 멀티 페이지 구조 전환
**요청:** 프로토타입 코드를 page 폴더로 분리  
**결과:**
- 단일 페이지에서 멀티 페이지 구조로 전환
- prototype 폴더 구조 생성

---

### 풀스크린 섹션 설정
**요청:** 홈 섹션이 화면 전체를 채우도록 수정  
**결과:**
- 홈 섹션 100vh 설정
- 풀스크린 경험 제공

---

### 레이아웃 변경 (그리드 → 세로)
**요청:** 포트폴리오 박스를 3x2 그리드에서 세로 배치로 변경  
**결과:**
- 세로 배치로 변경
- 각 박스가 화면 전체 차지

---

### 정사각형 카드 구현
**요청:** 박스를 정사각형으로 키우고 각 메뉴마다 풀스크린 섹션 배치  
**결과:**
- 400x400px 정사각형 카드 구현
- 각 메뉴마다 독립적인 풀스크린 섹션

---

### 인라인 스타일 제거
**요청:** 섹션 배경 통일 및 CSS 파일로 스타일 이동  
**결과:**
- 인라인 스타일 제거
- CSS 파일로 통합 관리

---

### 우주 테마 제거
**요청:** 우주 관련 효과 제거 및 블루/화이트 테마로 통일  
**결과:**
- 별 애니메이션 및 우주 배경 제거
- 블루/화이트 테마로 통일

---

### Git 원격 저장소 수정
**요청:** GitHub 저장소 주소를 올바른 주소로 변경  
**결과:**
- 원격 저장소 URL 수정
- 올바른 GitHub 연결 (yiseol/Introduce-me)

---

### 프롬프트 히스토리 문서화
**요청:** 개발 과정의 프롬프트를 GitHub에 정리  
**결과:**
- 개발 과정 문서화
- prompts.md 파일 생성 및 프롬프트 히스토리 정리

---

### 중복 문서 정리
**요청:** DEVELOPMENT.md 삭제 및 중복 README 정리  
**결과:**
- DEVELOPMENT.md 파일 삭제
- 중복 README 파일 정리

---

### 중복 폴더 구조 정리
**요청:** introduce-me 폴더 내 중복 폴더 제거  
**결과:**
- 중복된 introduce-me 폴더 구조 제거
- 깔끔한 단일 구조로 정리

---

### 프로토타입 폴더 삭제
**요청:** 프로토타입 폴더 삭제 및 자동 히스토리 업데이트 설정  
**결과:**
- 프로토타입 폴더 완전 삭제
- 자동 프롬프트 히스토리 업데이트 설정

---

### 다중 장면 로딩 애니메이션
**요청:** 로딩 화면에 여러 장면 추가  
**결과:**
- 5개 장면 순차 진행: 로딩바 → 타이핑 효과 → 부제목 → 환영메시지 → 진입안내
- 총 9초간 진행되는 인트로 애니메이션 구현

---

## 2025-11-03

### 스크롤 가능한 섹션 추가
**요청:** 풀페이지에서 스크롤 가능한 멀티 섹션으로 변경  
**결과:**
- 홈페이지에 6개의 스크롤 가능한 섹션 추가
- 각 메뉴별 미리보기 섹션 구현
- 부드러운 스크롤 네비게이션 연동
- 반응형 카드형 UI 디자인 적용

---

## 2025-11-19

### 프로젝트 명세 수립
**요청:** 명확한 Specification과 로드맵 수립  
**결과:**
- 점진적 정리 방식 선택 (Option B)
- CSS 네이밍 컨벤션 통일 (kebab-case)
- 코딩 스타일 가이드 문서화
- Master Plan 수립 준비

---

### 전체 코드 구조 개선
**요청:** HTML, CSS, JavaScript 모든 코드의 구조를 통일감 있게 정리  
**결과:**
- styles.css 중복 코드 제거 (2232줄 → 5줄, 99.8% 감소)
- Resume.html 구조 개선 (175줄 → 73줄, 58% 감소)
- CSS 파일 모듈화: base.css, layout.css, components.css
- 모든 파일에 표준화된 헤더 주석 추가
- JavaScript JSDoc 주석 적용
- CODING_STYLE_GUIDE.md 작성

---

### 폴더 구조 재정리
**요청:** 포트폴리오 사이트 파일 구조 정리 및 Master Plan에 반영  
**결과:**
- js/utils/ 폴더 생성 및 helpers.js 추가
- images/projects/, images/icons/ 폴더 생성
- 불필요한 폴더 제거 결정 (tests/, data/, services/)
- 프로젝트 구조 문서화

---

### 프로젝트 문서 작성
**요청:** TODO, SPEC(Master Plan), 작업 수칙 문서 생성  
**결과:**
- SPEC.md 작성 (프로젝트 마스터 플랜, 550줄)
- TODO.md 작성 (작업 로드맵, 480줄)
- OPERATIONAL_RULES.md 작성 (Copilot 작업 수칙 7가지, 320줄)
- MoSCoW 우선순위 정의
- 디자인 시스템 문서화

---

### 작업 수칙 수정 및 파일 정리
**요청:** 작업 수칙을 prompts.md 기록 방식으로 수정, 백업 파일 및 구 테마 리소스 삭제  
**결과:**
- OPERATIONAL_RULES.md Rule 1 수정 (CHANGELOG → prompts.md 기록 방식)
- prompts.md 기록 형식 및 예시 추가
- Resume.html.backup 파일 삭제
- images/planets/ 폴더 및 행성 이미지 7개 삭제 (구 우주 테마 리소스)

---

### prompts.md 재구성
**요청:** 프롬프트를 요약하여 작성하고 시간순으로 정리, Rule 1에 반영  
**결과:**
- prompts.md를 카테고리별 → 시간순으로 재구성
- 프롬프트 내용을 요약하여 간결하게 작성
- OPERATIONAL_RULES.md Rule 1에 요약 방식 명시

---

## 2025-11-21

### 프로토타입 디자인 완전 적용
**요청:** 보내준 프로토타입 사이트 코드를 현재 사이트에 완전 적용  
**결과:**
- 프로토타입 7개 파일(styles.css, 5개 페이지, index.html) 수신 및 분석
- Activity.html 프로토타입 적용 완료 (작업 #1, #2)
- 전체 사이트 프로토타입 구현 시작 (작업 #3)
- css/styles.css 프로토타입 CSS 전체 교체
- index.html 교체 (WELCOME 인트로 + 5개 풀페이지 카드)
- Certificate.html 교체 (4x2 그리드 레이아웃)
- Introduce_myself.html 교체 (기본 정보 + 성장 타임라인)
- Project.html 교체 (5개 풀페이지 스크롤 프로젝트)
- Resume.html 교체 (기술 스택 그리드 + PDF 다운로드)
- 프로토타입 디자인 완전 적용: Blue/white 테마, 3초 인트로, Fixed 네비게이션, 반응형

---

### CSS 모듈화 및 구조 정리
**요청:** 프로토타입 CSS 1개 파일을 기존처럼 4개로 분할, 나머지 CSS 삭제  
**결과:**
- 기존 base.css, layout.css, components.css 삭제
- 프로토타입 CSS를 논리적으로 분할:
  - base.css (71줄): 변수, 리셋, 인트로/Hero 애니메이션
  - layout.css (166줄): 네비게이션, 홈 섹션, 페이지 레이아웃, 반응형
  - components.css (676줄): 메뉴 카드, 자기소개, 활동, 자격증, 프로젝트, 이력서 컴포넌트
- styles.css를 @import 구조로 변경 (13줄)
- 프로토타입과 동일한 디자인 유지하면서 모듈화된 CSS 구조 완성

---

### 네비게이션 메뉴 영문화 및 구조 개선
**요청:** 네비게이션에서 홈 버튼 삭제, 로고에 홈 링크 기능 추가, 메뉴명 영어로 변경  
**결과:**
- "강지웅 포트폴리오" → "INTRODUCE-ME" (홈 링크 기능 추가)
- "홈" 버튼 제거
- 메뉴명 영문화: 자기소개→About, 활동→Activity, 자격증→Certificate, 프로젝트→Project, 이력서→Resume
- 전체 페이지 네비게이션 통일 (index.html, Activity.html, Certificate.html, Introduce_myself.html, Project.html, Resume.html)
- layout.css에 .nav-left 링크 스타일 추가

---

## 2025-11-23

### 홈 섹션 배경 이미지 적용 안내
**요청:** 홈 섹션 백그라운드에 이미지 넣는 코드 제공  
**결과:**
- background-image, background-size, background-position 코드 제공
- 오버레이 옵션 (background-blend-mode) 설명
- 이미지 경로 및 옵션 상세 안내

---

### 스크롤 기반 네비게이션 배경 변경
**요청:** 홈 섹션에서는 네비게이션 투명, 스크롤 후 배경색 추가  
**결과:**
- layout.css에 .nav-container 투명 배경 및 .scrolled 클래스 추가
- index.html에 스크롤 감지 JavaScript 추가
- 스크롤 100px 이상 시 네비게이션 파란색 배경 표시
- 홈 섹션: 배경 이미지만 보임 (네비게이션 투명)
- 메뉴 카드 섹션: 배경색(#f8f9fa) + 네비게이션 파란색

---

### 네비게이션 높이 조절 위치 안내 및 규칙 확인
**요청:** 네비게이션 두께 조절 위치 안내, 규칙 준수 확인  
**결과:**
- base.css의 --nav-height 변수 위치 안내 (현재 80px)
- OPERATIONAL_RULES.md 규칙 확인 완료
- Rule 1 (변경 사항 기록) 및 Rule 3 (코드 정리) 준수 다짐

---

### 서브 페이지 네비게이션 배경색 항상 표시
**요청:** 네비게이션 투명 효과는 index.html 홈 섹션에만 적용, 서브 페이지에서는 항상 배경색 표시  
**결과:**
- layout.css 네비게이션 기본 스타일 수정
- 서브 페이지(.page-body)에서는 네비게이션 배경색 항상 표시
- index.html에서만 초기 투명 + 스크롤 시 배경색 표시
- body:not(.page-body) 선택자로 index 페이지 전용 스타일 분리

---

### 인덱스 페이지 메뉴 카드 섹션 제거
**요청:** index.html의 5개 메뉴 카드 섹션 전체 삭제, 새로 꾸밀 예정  
**결과:**
- index.html에서 자기소개, 활동, 자격증, 프로젝트, 이력서 카드 섹션 전체 제거
- 홈 섹션 아래 빈 메뉴 영역 확보
- 주석으로 "새로 꾸밀 영역" 표시

---

### JavaScript 코드 분리 및 Rule 9 추가
**요청:** 스크롤 시 네비게이션 배경 변경 JavaScript 코드를 파일로 분리, 코드 분리 원칙 규칙 추가  
**결과:**
- index.html에서 인라인 `<script>` 태그 제거, 외부 파일 참조로 변경
- js/script.js에 `handleNavScroll()` 함수 추가
  - 스크롤 100px 이상 시 .nav-container에 scrolled 클래스 추가
  - DOMContentLoaded 초기화 섹션에 통합
- OPERATIONAL_RULES.md에 Rule 9 "코드 분리 원칙" 추가
  - 모든 코드는 언어에 맞는 파일에 작성
  - HTML에 인라인 `<script>`, `<style>` 태그 작성 금지
  - 외부 파일 참조 방식 사용
  - 예외 사항 명시 (외부 서비스 스크립트, 1-2줄 설정값)

**변경된 파일:**
- index.html (인라인 스크립트 제거)
- js/script.js (handleNavScroll 함수 추가)
- docs/OPERATIONAL_RULES.md (Rule 9 추가)
- docs/prompts.md (이 기록)

---

### fullPage.js 적용 및 메뉴 섹션 재구성
**요청:** 인덱스 페이지에 fullPage.js 라이브러리 적용하여 풀페이지 스크롤 구현  
**결과:**
- fullPage.js CDN 추가 (CSS 및 JS)
- 홈 섹션과 5개 메뉴 섹션을 fullPage.js 구조로 변경
- 각 섹션이 화면 전체를 차지하며 부드럽게 전환
- fullPage.js 옵션 설정:
  - scrollingSpeed: 700ms
  - autoScrolling: true
  - navigation: false (오른쪽 네비게이션 점 비활성화)
- afterLoad 콜백으로 네비게이션 제어:
  - 홈 섹션(index 0): 네비게이션 투명
  - 메뉴 섹션(index 1-5): 네비게이션 숨김 (opacity: 0)

**변경된 파일:**
- index.html (fullPage.js 구조 적용, 초기화 스크립트)
- css/layout.css (.nav-hidden 클래스 추가)
- css/components.css (fullPage.js 오버라이드 스타일)

---

### 메뉴 섹션 디자인 구현
**요청:** 5개 메뉴 섹션 디자인 - 이미지와 텍스트를 좌우 교차 배치  
**결과:**
- 각 메뉴 섹션 구조: 이미지 영역(40-50%) + 콘텐츠 영역(50-60%)
- 좌우 교차 배치:
  - About, Certificate, Resume: 이미지 왼쪽, 콘텐츠 오른쪽
  - Activity, Project: 이미지 오른쪽, 콘텐츠 왼쪽 (.menu-section-reverse)
- 콘텐츠 구성: 타이틀 + 설명 + 버튼
- 메뉴 버튼 스타일: 흰색 배경, 검정색 텍스트, 검정 테두리
- 메뉴 타이틀: 검정색 통일 (섹션별 색상 테마 제거)
- 반응형 디자인: 모바일에서 세로 배치로 전환

**사용된 이미지:**
- About: about_background.jpg (벚꽃)
- Activity: Activity_background.jpg (에펠탑)
- Certificate: Certificate_background.jpg (파리 카페)
- Project: Project_background_background.jpg (산과 호수)
- Resume: Resume_background.jpg (나무)

**변경된 파일:**
- index.html (5개 메뉴 섹션 HTML 구조)
- css/components.css (메뉴 섹션 스타일, 역방향 레이아웃)

---

### 홈 섹션 배경을 동영상으로 변경
**요청:** 홈 섹션 배경 이미지를 동영상으로 교체  
**결과:**
- 배경 이미지 제거, `<video>` 태그 추가
- 동영상 파일: video/Home_video.mp4
- 비디오 설정: autoplay muted loop playsinline
- 전체 화면 커버, z-index로 배경 배치
- 어두운 오버레이 및 밝기 조절 효과 제거 (원본 그대로 재생)
- 히어로 콘텐츠를 비디오 위에 표시

**변경된 파일:**
- index.html (video 태그 추가)
- css/layout.css (배경 비디오 스타일, 이미지 제거)

---

### 코드 정리 및 최적화
**요청:** 불필요한 코드 제거 및 정리  
**결과:**
- HTML: 사용하지 않는 섹션별 클래스 제거 (menu-about, menu-activity 등)
- CSS: Legacy 메뉴 풀페이지 카드 스타일 전체 삭제 (~120줄)
- JS: handleNavScroll() 함수 제거 (fullPage.js로 대체)
- 중복 코드 제거, 구조 간소화

**정리된 내용:**
- 사용하지 않는 메뉴 카드 컴포넌트 스타일
- 일반 스크롤 이벤트 리스너 (fullPage.js로 대체)
- 섹션별 색상 클래스 (통일된 디자인으로 변경)

**변경된 파일:**
- index.html
- css/components.css
- js/script.js

---

## 2025-11-24

### 이미지 폴더 구조 정리
**요청:** images 폴더 안의 모든 이미지를 home_images 폴더로 이동하고 경로 수정  
**결과:**
- images/*.jpg → images/home_images/로 이동
- index.html의 5개 메뉴 섹션 이미지 경로 업데이트
- 이동된 파일: about_background.jpg, Activity_background.jpg, Certificate_background.jpg, Project_background_background.jpg, Resume_background.jpg

**변경된 파일:**
- images/ 폴더 구조
- index.html

---

### Activity 페이지 배경 디자인
**요청:** Activity 페이지에 배경 이미지 추가 및 타임라인 박스 반투명 효과  
**결과:**
- images/activity_image/ 폴더 생성
- 배경 이미지: 활동_백그라운드.jpg (background-attachment: fixed)
- 주요 활동 내역 박스 불투명도 85%로 조정
- backdrop-filter: blur(10px) 효과 추가

**변경된 파일:**
- css/layout.css (activity-page 배경 스타일)
- css/components.css (timeline 반투명도)
- pages/Activity.html (activity-page 클래스 추가)

---

### Git 작업 복구
**요청:** 동영상 파일 제외 후 Git push 실패, 이전 작업 복구  
**결과:**
- git reset --hard origin/main으로 작업 손실
- git reflog로 커밋 13e881a 찾아서 복구
- 복구된 내용: 동영상 파일, 이미지 파일, fullPage.js, 메뉴 섹션, 코드 분리

**복구 커밋:**
- 13e881a: 홈 페이지 디자인 수정, 내비 디자인 수정, 코드 정리, 프롬프트 기록

---

## 2025-11-26

### 프롬프트 파일 업데이트 및 작업 번호 시스템 제거
**요청:** 최근 작업 내용을 prompts.md에 기록 및 작업 번호 시스템 삭제  
**결과:**
- prompts.md에 2025-11-26 섹션 추가 및 최근 작업 5개 기록
- 모든 "작업 #숫자" 표기 제거 및 자연스러운 문장으로 변경
- OPERATIONAL_RULES.md에서 Rule 8 "작업 버전 관리" 완전 삭제
- 헤더 "8가지 핵심 원칙" → "핵심 원칙"으로 변경

**변경된 파일:**
- docs/prompts.md
- docs/OPERATIONAL_RULES.md

---

### 인트로 애니메이션 로고 변경
**요청:** 인트로 화면의 텍스트를 로고 GIF로 교체  
**결과:**
- video/logo_video.gif 파일 추가 확인
- index.html: `<div class="intro-text">` → `<img class="intro-logo">`로 변경
- css/base.css: 로고 이미지 스타일 추가
  - max-width: 80%, max-height: 80%
  - object-fit: contain
  - introLogoAnimation (fadeIn + scale)
- 기존 .intro-text 스타일 삭제

**변경된 파일:**
- index.html
- css/base.css

---

## 2025-11-30

### Project 페이지 디자인 구현
**요청:** Patead Image 스타일 참고하여 프로젝트 쇼케이스 페이지 디자인  
**결과:**
- 투명 네비게이션 적용 (project-page 클래스)
- 배경 이미지: images/project_images/main_image.jpg
- 프로젝트 제목: 왼쪽 중앙 배치 (64px)
- 크레딧 정보: 왼쪽 하단 (Year, Role 가로 배치)
- 썸네일 갤러리: 오른쪽 하단 5개 (project_1~5.jpg)
- 프로젝트 설명 박스: 오른쪽 중앙 (블러 효과, 500px x 70vh)
- 클릭 인터랙션: 썸네일 클릭 시 페이드 인/아웃 효과로 프로젝트 전환

**변경된 파일:**
- pages/Project.html
- css/layout.css (투명 네비게이션)
- css/project.css (신규 생성)
- js/project.js (신규 생성)

---

### Project 페이지 컨텐츠 작성
**요청:** 5개 보안 관련 프로젝트 내용 작성  
**결과:**
1. 개인정보 보호 시스템 (2024) - Security Engineer & Full Stack Developer
   - AES-256 암호화, RBAC, 감사 로그
2. 스마트 도어락 보안 시스템 (2024) - IoT Security Specialist
   - TLS 1.3, 다중 인증, 실시간 침입 감지
3. 건물 도면 보안 관리 시스템 (2023) - Security Architect & Backend Developer
   - DRM, 워터마크, 접근 제어
4. 기업용 VPN 보안 솔루션 (2023) - Network Security Engineer
   - 제로 트러스트, MFA, AI 기반 탐지
5. AI 기반 CCTV 보안 관제 시스템 (2022) - AI Security Developer
   - YOLO 객체 탐지, 이상 행동 분석, 영상 암호화

**변경된 파일:**
- pages/Project.html (data-* 속성에 프로젝트 정보)

---

### Certificate 페이지 초기화
**요청:** Certificate 페이지 내비게이션 제외 전체 삭제  
**결과:**
- pages/Certificate.html: PAGE CONTENT 섹션 비움
- css/certificate.css: 헤더 주석만 남기고 모든 스타일 삭제
- js/certificate.js: 기존 파일 유지 (추후 재사용 가능)

**변경된 파일:**
- pages/Certificate.html
- css/certificate.css

---

### Project 페이지 상세 조정
**요청:** 프로젝트 페이지 레이아웃 미세 조정  
**결과:**
- 썸네일 개수: 4개 → 5개로 증가 (project_1~5.jpg)
- 썸네일 테두리 제거 (흰색 border 삭제)
- 크레딧 정보 배치: 세로 → 가로 한 줄로 변경
- 크레딧 위치: fixed 포지션으로 변경하여 화면 기준 고정
  - bottom: 50px, left: 80px
- 역할 텍스트: white-space: nowrap으로 한 줄 유지
- 프로젝트 설명 박스: 우측 중앙 배치
  - width: 500px, height: 70vh
  - right: 190px, top: 50%
  - 블러 효과 및 반투명 배경

**변경된 파일:**
- pages/Project.html (썸네일 5개 추가)
- css/project.css (레이아웃 조정)

---

### Certificate 페이지 다양한 디자인 시도
**요청:** 자격증 페이지 여러 디자인 시도 및 초기화  
**결과:**
1. 첫 번째 시도: 3D 원형 회전 캐러셀
   - 6개 카드가 원을 그리며 자동 회전 (30초/회전)
   - 각 카드별 그라데이션 배경
   - 호버 시 확대 및 회전 일시정지

2. 두 번째 시도: 3D Cover Flow (커버 플로우)
   - 5개 카드 아치형 배치
   - 중앙 카드 정면, 양옆 카드 45도 회전
   - 좌우 네비게이션 버튼 및 키보드 조작
   - 카드 클릭으로 중앙 이동

3. 최종: 단순 카드 테스트
   - 중앙에 작은 세로 카드 1개 배치 (175x250px)
   - padding-top으로 위치 조정 (15vh → 40vh)

4. 전체 초기화
   - HTML과 CSS 모두 비우고 재시작 준비

**변경된 파일:**
- pages/Certificate.html (여러 번 구조 변경)
- css/certificate.css (여러 번 스타일 변경)
- js/certificate.js (Cover Flow 인터랙션)

---

### HTML 인라인 CSS 분리
**요청:** Certificate.html의 인라인 style 태그를 CSS 파일로 분리  
**결과:**
- Certificate.html: `<style>` 태그 제거
- certificate.css: 인라인 스타일 이동 및 구조화
  - .certificate-section (컨테이너)
  - .certificate-card (카드 스타일)
  - 카드 내부 요소 스타일 (h3, p, .date)
- Rule 9 "코드 분리 원칙" 준수

**변경된 파일:**
- pages/Certificate.html (인라인 CSS 제거)
- css/certificate.css (스타일 추가)

---