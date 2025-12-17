# 코딩 스타일 가이드

## 📋 프로젝트 개요

**프로젝트명:** INTRODUCE-ME Portfolio Website  
**작성자:** 이설 (Lee Seol)  
**최종 업데이트:** 2025-11-19

---

## 🎯 통일된 코딩 원칙

### **1. 일관성 (Consistency)**
- 모든 파일은 동일한 구조와 스타일을 따릅니다
- 네이밍, 들여쓰기, 주석 스타일 통일

### **2. 가독성 (Readability)**
- 명확한 주석으로 코드의 목적 설명
- 적절한 공백과 줄바꿈으로 시각적 구분

### **3. 유지보수성 (Maintainability)**
- 모듈화된 구조로 변경사항 최소화
- 명확한 파일 역할 구분

---

## 📁 파일 구조

```
introduce-me/
├── css/
│   ├── base.css          # 변수, 글로벌 스타일, 애니메이션
│   ├── layout.css        # 헤더, 네비게이션, 레이아웃
│   ├── components.css    # 재사용 가능한 컴포넌트
│   └── styles.css        # @import 진입점
├── js/
│   └── script.js         # 메인 JavaScript
├── pages/
│   └── *.html            # 서브 페이지들
├── docs/
│   ├── CSS_NAMING_GUIDE.md
│   └── CODING_STYLE_GUIDE.md (이 파일)
└── index.html            # 메인 페이지
```

---

## 🎨 HTML 코딩 스타일

### **파일 구조**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <!-- =======================================================
       METADATA & DOCUMENT SETTINGS
  ======================================================= -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>페이지 제목</title>
  
  <!-- =======================================================
       STYLESHEETS
  ======================================================= -->
  <link rel="stylesheet" href="css/styles.css">
</head>

<body>
  <!-- =======================================================
       SECTION 1: Description
  ======================================================= -->
  <section>
    <!-- Content -->
  </section>
  
  <!-- =======================================================
       JAVASCRIPT
  ======================================================= -->
  <script src="js/script.js"></script>
</body>
</html>
```

### **주석 규칙**

1. **대섹션 구분 (Major Sections)**
   ```html
   <!-- =======================================================
        SECTION NAME
   ======================================================= -->
   ```

2. **중섹션 구분 (Sub-sections)**
   ```html
   <!-- Section Description -->
   ```

3. **인라인 주석 (Inline Comments)**
   ```html
   <div class="example"><!-- Brief explanation --></div>
   ```

### **들여쓰기 규칙**

- **2칸 공백** 사용
- 중첩된 태그는 각 레벨당 +2칸
- 닫는 태그는 여는 태그와 같은 들여쓰기

```html
<!-- ✅ 올바른 예 -->
<div class="container">
  <div class="inner">
    <p>Content</p>
  </div>
</div>

<!-- ❌ 잘못된 예 -->
<div class="container">
<div class="inner">
<p>Content</p>
</div>
</div>
```

### **속성 작성 규칙**

```html
<!-- ✅ 올바른 예: 속성이 많을 경우 줄바꿈 -->
<button 
  class="preview-btn" 
  onclick="location.href='pages/Resume.html'"
>
  자세히 보기
</button>

<!-- ✅ 올바른 예: 속성이 적을 경우 한 줄 -->
<button class="btn">클릭</button>
```

---

## 🎨 CSS 코딩 스타일

### **파일 헤더**

```css
/* =======================================================
   INTRODUCE-ME WEBSITE - FILE PURPOSE
   
   Purpose: 파일의 목적 설명
   
   Contents:
   1. Section 1
   2. Section 2
   3. Section 3
   
   Author: Lee Seol
   Last Updated: 2025-11-19
======================================================= */
```

### **섹션 구분**

```css
/* =======================================================
   1. SECTION NAME
======================================================= */

/**
 * 컴포넌트 설명
 * 추가 설명이 필요한 경우
 */
.component-name {
  /* 스타일 */
}
```

### **네이밍 컨벤션**

- **kebab-case** 사용
- 명확하고 설명적인 이름
- 2-3 단어 권장

```css
/* ✅ 올바른 예 */
.section-title { }
.preview-btn { }
.activity-card { }

/* ❌ 잘못된 예 */
.sectionTitle { }      /* camelCase */
.section_title { }     /* snake_case */
.btn-pv { }            /* 불명확한 축약 */
```

### **속성 작성 순서**

1. **레이아웃** (display, position, float, clear)
2. **박스 모델** (width, height, margin, padding, border)
3. **시각적** (background, color, font, text)
4. **기타** (cursor, z-index, transition, animation)

```css
.example {
  /* Layout */
  display: flex;
  position: relative;
  
  /* Box Model */
  width: 100%;
  padding: 20px;
  margin: 10px 0;
  
  /* Visual */
  background: #fff;
  color: #222;
  font-size: 1rem;
  
  /* Other */
  cursor: pointer;
  transition: all 0.3s ease;
}
```

### **값 작성 규칙**

```css
/* ✅ 올바른 예 */
.example {
  margin: 0;              /* 0에는 단위 불필요 */
  padding: 10px 20px;     /* 축약형 사용 */
  color: #fff;            /* 축약 가능한 색상 코드 */
  font-family: Arial, sans-serif;  /* fallback 폰트 */
}

/* ❌ 잘못된 예 */
.example {
  margin: 0px;            /* 불필요한 단위 */
  padding: 10px 20px 10px 20px;  /* 축약 가능 */
  color: #ffffff;         /* 축약 가능 */
}
```

---

## 💻 JavaScript 코딩 스타일

### **파일 헤더**

```javascript
/* =======================================================
   INTRODUCE-ME WEBSITE - MAIN JAVASCRIPT
   
   Table of Contents:
   1. Section 1
   2. Section 2
   3. Section 3
   
   Author: Lee Seol
   Last Updated: 2025-11-19
======================================================= */

'use strict';
```

### **함수 작성 규칙**

```javascript
/**
 * 함수 설명
 * @param {type} paramName - 파라미터 설명
 * @returns {type} 반환값 설명
 */
function functionName(paramName) {
  // 함수 로직
  return result;
}
```

### **네이밍 컨벤션**

- **camelCase** 사용
- 동사로 시작 (함수/메서드)
- 명사로 시작 (변수/상수)

```javascript
// ✅ 올바른 예
function scrollToSection(idx) { }
function initializePage() { }
const userName = 'Lee Seol';
let isActive = true;

// ❌ 잘못된 예
function ScrollToSection(idx) { }  /* PascalCase */
function scroll_to_section(idx) { } /* snake_case */
const user_name = 'Lee Seol';      /* snake_case */
```

### **들여쓰기 및 공백**

```javascript
// ✅ 올바른 예
function example() {
  const value = 10;
  
  if (value > 5) {
    console.log('Greater than 5');
  } else {
    console.log('Less or equal to 5');
  }
}

// 연산자 주변에 공백
const sum = a + b;
const isEqual = (x === y);

// 쉼표 뒤에 공백
const arr = [1, 2, 3];
function test(a, b, c) { }
```

### **주석 규칙**

```javascript
/* =======================================================
   SECTION DIVIDER
======================================================= */

/**
 * JSDoc 스타일 함수 설명
 */
function example() {
  // 한 줄 설명
  const x = 10;
  
  /* 
   * 여러 줄 설명
   * 복잡한 로직 설명
   */
  if (x > 5) {
    // ...
  }
}
```

---

## 📐 들여쓰기 규칙

### **HTML**
- 2칸 공백
- 중첩 레벨당 +2칸

### **CSS**
- 2칸 공백
- 속성은 선택자보다 +2칸

### **JavaScript**
- 2칸 공백
- 블록 코드는 +2칸

---

## 🎯 주석 스타일 통일

### **대섹션 구분 (모든 파일 공통)**

```
/* =======================================================
   SECTION NAME
======================================================= */
```

### **중섹션 설명 (CSS/JS)**

```css
/**
 * 컴포넌트/함수 설명
 * 추가 설명
 */
```

### **인라인 주석**

```css
.example { 
  margin: 0;  /* Brief explanation */
}
```

```javascript
const x = 10;  // Brief explanation
```

---

## ✅ 체크리스트

새로운 코드를 작성할 때 다음을 확인하세요:

### **HTML**
- [ ] 올바른 DOCTYPE과 lang 속성
- [ ] 섹션별 주석 구분
- [ ] 2칸 들여쓰기 일관성
- [ ] 시맨틱 태그 사용

### **CSS**
- [ ] 파일 헤더 존재
- [ ] kebab-case 네이밍
- [ ] 섹션별 주석 구분
- [ ] 속성 작성 순서 준수

### **JavaScript**
- [ ] 'use strict' 선언
- [ ] camelCase 네이밍
- [ ] JSDoc 스타일 주석
- [ ] 함수/변수 설명 명확

---

## 📚 참고 자료

- [CSS Naming Guide](./CSS_NAMING_GUIDE.md)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

---

**작성일:** 2025-11-19  
**프로젝트:** INTRODUCE-ME Portfolio Website  
**버전:** 1.0.0
