# Operational Rules: Copilot 작업 수칙

## 📋 개요

이 문서는 GitHub Copilot이 프로젝트 작업을 수행할 때 반드시 준수해야 하는 원칙을 정의합니다.  
모든 작업은 아래 규칙을 엄격하게 따라야 하며, 이를 통해 코드 품질과 작업 효율성을 보장합니다.

**작성일:** 2025-11-19  
**최종 수정일:** 2025-11-26  
**작성자:** 이설 (Yi Seol)

---

## 🔒 핵심 원칙

### 1. 변경 사항 기록 및 요약 (Documentation)

**규칙:**
- 작업을 마칠 때마다, 수행한 작업 내용과 파일 변경 사항을 요약해서 보고해야 합니다.
- 모든 작업 요청과 그에 따른 결과를 `docs/prompts.md` 파일에 **시간순**으로 기록해야 합니다.
- 사용자의 요청을 그대로 복사하지 말고, **핵심 내용만 요약**하여 간결하게 작성합니다.

**목적:**
- 프로젝트 개발 과정 및 의사결정 이력 추적
- AI와의 대화 내역 문서화
- 향후 유사한 작업 시 참고 자료 활용

**기록 형식:**
```markdown
## YYYY-MM-DD

### [작업 제목]
**요청:** [사용자 요청 핵심 내용 요약]  
**결과:**
- [수행한 작업 1]
- [수행한 작업 2]
- [변경된 파일 및 영향 범위]

---
```

**예시:**
```markdown
## 2025-11-19

### 코드 구조 개선
**요청:** HTML, CSS, JavaScript 코드 구조 정리  
**결과:**
- styles.css 중복 코드 제거
- Resume.html 구조 개선
- CSS 파일 모듈화: base.css, layout.css, components.css
- 표준화된 헤더 주석 추가

---
```

**작성 원칙:**
- ❌ 나쁜 예: 사용자가 말한 내용을 그대로 인용 ("홈 페이지가 풀페이지로 한장이 끝인데 아래로 스크롤 할 수 있게 페이지수를 늘려줘...")
- ✅ 좋은 예: 핵심만 요약 ("스크롤 가능한 멀티 섹션으로 변경")

---

### 2. 사용자 주도 의사결정 (User-Centric Decision)

**규칙:**
- 구현 방법이 여러 가지인 경우(예: 라이브러리 사용 vs 직접 구현, 디자인 A안 vs B안), AI 판단으로 결정하지 않습니다.
- 장단점을 설명한 뒤 사용자에게 선택권을 제공해야 합니다.

**목적:**
- 사용자의 프로젝트 목표와 선호도 존중
- 잘못된 기술 선택으로 인한 리팩토링 최소화
- 학습 기회 제공

**예시:**
```
🤔 선택이 필요합니다

[옵션 A] 외부 라이브러리 사용 (AOS.js)
✅ 장점: 빠른 구현, 다양한 애니메이션 효과
❌ 단점: 번들 크기 증가 (~10KB), 외부 의존성

[옵션 B] Vanilla JavaScript로 직접 구현
✅ 장점: 가벼움, 커스터마이징 자유도 높음
❌ 단점: 개발 시간 증가, 브라우저 호환성 직접 처리

어떤 방식으로 진행하시겠습니까?
```

---

### 3. 코드 중복 방지 및 정리 (Code Hygiene)

**규칙:**
- 새로운 기능을 추가할 때, 기존에 비슷한 기능을 하는 코드가 있는지 먼저 확인합니다.
- 중복 코드를 발견하면, 새로 작성하지 말고 기존 코드를 수정하거나 삭제하여 리팩토링을 우선합니다.
- **DRY 원칙(Don't Repeat Yourself)** 을 엄격히 준수합니다.

**목적:**
- 코드 유지보수성 향상
- 버그 발생 가능성 감소
- 파일 크기 최적화

**체크리스트:**
- [ ] 비슷한 함수가 이미 존재하는가?
- [ ] 같은 스타일 규칙이 중복 정의되었는가?
- [ ] 공통 로직을 유틸리티 함수로 분리할 수 있는가?

**예시:**
```javascript
// ❌ 나쁜 예: 중복 코드
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToSection(index) {
  const section = sections[index];
  window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
}

// ✅ 좋은 예: 공통 로직 분리
function smoothScrollTo(targetPosition) {
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}
```

---

### 4. 배포 및 커밋 전 확인 (Version Control Check)

**규칙:**
- 작업이 하나의 단위(Unit)로 끝날 때마다, "이 내용을 Git에 커밋(Commit)하고 GitHub에 업로드하시겠습니까?"라고 먼저 물어봐야 합니다.
- 커밋 메시지(Commit Message)도 작업 내용에 맞춰 미리 제안해야 합니다.

**목적:**
- 체계적인 버전 관리
- 의미 있는 커밋 단위 유지
- 명확한 커밋 메시지로 히스토리 추적 용이

**커밋 메시지 규칙:**
```
<타입>: <제목>

<본문 (선택)>

타입:
- feat: 새로운 기능 추가
- fix: 버그 수정
- refactor: 코드 리팩토링
- style: 스타일 수정 (CSS, 포맷팅)
- docs: 문서 수정
- chore: 기타 작업 (빌드, 설정 등)
```

**예시:**
```
📝 Git 커밋 제안

커밋 메시지:
refactor: CSS 중복 코드 제거 및 모듈화

- styles.css를 base.css, layout.css, components.css로 분리
- 2232줄 → 5줄로 대폭 감소
- @import 구조로 모듈화

이 내용으로 커밋하시겠습니까? (Y/N)
```

---

### 5. 컨텍스트 우선 파악 (Context Awareness)

**규칙:**
- 질문에 답하기 전에 현재 프로젝트의 파일 구조와 열려있는 파일의 내용을 먼저 숙지합니다.
- 문맥에 맞지 않는 코드를 제공하지 않습니다.

**목적:**
- 프로젝트 구조와 맞는 정확한 답변 제공
- 불필요한 재작업 방지
- 일관성 있는 코드 유지

**확인 사항:**
- [ ] 현재 파일의 기존 코드 스타일 확인
- [ ] 관련 파일들의 의존성 확인
- [ ] 프로젝트 전체 구조 이해
- [ ] 사용 중인 기술 스택 확인

---

### 6. 스타일 일관성 유지 (Consistency)

**규칙:**
- 기존 코드의 변수 명명 규칙(camelCase, kebab-case 등)과 들여쓰기 스타일을 그대로 따릅니다.
- 이질적인 스타일이 섞이지 않도록 주의합니다.

**목적:**
- 코드 가독성 향상
- 팀 협업 시 혼란 방지
- 프로페셔널한 코드베이스 유지

**프로젝트 스타일 가이드:**
- **CSS 클래스명:** kebab-case (예: `timeline-container`)
- **JavaScript 변수/함수:** camelCase (예: `scrollToSection`)
- **들여쓰기:** 2 스페이스
- **주석:** 한글 사용
- **파일 구조:** 표준화된 헤더 주석 사용

**참고 문서:**
- `docs/CSS_NAMING_GUIDE.md`
- `docs/CODING_STYLE_GUIDE.md`

---

### 7. 주석 및 설명 (Language)

**규칙:**
- 코드를 작성할 때, 복잡한 로직이나 중요한 부분 또는 카테고리별로 반드시 **한글 주석**을 달아야 합니다.
- 사용자가 나중에 코드를 볼 때 이해하기 쉬워야 합니다.

**목적:**
- 코드 가독성 향상
- 유지보수 용이성 확보
- 학습 자료로 활용 가능

**주석 작성 규칙:**

```javascript
/**
 * =======================================================
 * SECTION: 주요 기능 설명
 * =======================================================
 */

/**
 * 함수 설명 (한글)
 * @param {타입} 매개변수명 - 매개변수 설명
 * @returns {타입} 반환값 설명
 */
function exampleFunction(param) {
  // 구현 내용에 대한 한글 주석
}
```

**주석이 필요한 경우:**
- 복잡한 알고리즘이나 로직
- 비직관적인 코드
- 중요한 비즈니스 로직
- 향후 수정이 필요할 수 있는 부분
- 외부 라이브러리 사용 시 설명

---

## 8. 코드 분리 원칙 (Separation of Concerns)

**핵심 원칙:** 모든 코드는 언어에 맞는 파일 형식에 작성되어야 합니다.

### 금지사항

❌ **HTML 파일 내 인라인 코드 작성:**
```html
<!-- 금지: <script> 태그를 HTML 파일에 직접 작성 -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello');
  });
</script>

<!-- 금지: <style> 태그를 HTML 파일에 직접 작성 -->
<style>
  .container {
    background: blue;
  }
</style>
```

### 올바른 방법

✅ **외부 파일 참조:**
```html
<!-- HTML 파일: index.html -->
<head>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- HTML 콘텐츠만 -->
  <script src="js/script.js"></script>
</body>
```

```javascript
// JavaScript 파일: js/script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello');
});
```

```css
/* CSS 파일: css/styles.css */
.container {
  background: blue;
}
```

### 예외 사항

다음의 경우에만 인라인 코드가 허용됩니다:

1. **외부 서비스 스크립트 (Google Analytics, 광고 스크립트 등):**
   ```html
   <!-- 허용: 외부 서비스 제공 스크립트 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

2. **1-2줄의 페이지별 특정 설정 (예: 페이지 ID):**
   ```html
   <!-- 허용: 단순 설정값 -->
   <script>const PAGE_ID = 'about';</script>
   ```

### 코드 분리 체크리스트

코드 작성 전 확인사항:
- [ ] HTML 파일에 `<script>` 태그가 없는가? (예외 제외)
- [ ] HTML 파일에 `<style>` 태그가 없는가? (예외 제외)
- [ ] JavaScript 코드가 `.js` 파일에 작성되었는가?
- [ ] CSS 코드가 `.css` 파일에 작성되었는가?
- [ ] HTML 파일이 외부 파일을 올바르게 참조하는가?

### 적용 범위

이 원칙은 다음에 적용됩니다:
- ✅ 모든 HTML 페이지 (index.html, Activity.html, Certificate.html 등)
- ✅ 새로 생성하는 모든 파일
- ✅ 기존 파일 수정 시

**목적:** 코드의 유지보수성, 가독성, 재사용성을 높이고, 관심사를 명확히 분리하여 프로젝트 구조를 체계적으로 관리합니다.
