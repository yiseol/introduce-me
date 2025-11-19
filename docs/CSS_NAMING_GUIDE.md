# CSS 네이밍 컨벤션 가이드

## 📌 현재 프로젝트 네이밍 규칙

### ✅ **채택된 규칙: kebab-case**
- 모든 클래스명은 소문자와 하이픈(`-`)으로 작성
- 예: `.loading-screen`, `.intro-title`, `.section-inner`

### 🎯 **적용된 BEM 원칙 (가벼운 버전)**

#### **1. Block (독립적인 컴포넌트)**
```css
.card { }
.section { }
.timeline { }
```

#### **2. Element (Block의 하위 요소)**
```css
/* Block__Element 형식은 사용하지 않고 */
/* Block-element 형식 사용 (더 간결) */
.card-title { }
.card-image { }
.section-inner { }
.timeline-item { }
```

#### **3. Modifier (상태/변형)**
```css
/* 별도 클래스로 분리 */
.activity-section { }  /* section의 activity 변형 */
.certificate-section { }  /* section의 certificate 변형 */
.preview-btn { }  /* 버튼의 preview 변형 */
```

---

## 📋 **네이밍 패턴 예시**

### **섹션 (Sections)**
```css
.section              /* 기본 섹션 */
.section-inner        /* 섹션 내부 컨테이너 */
.section-title        /* 섹션 제목 */
.section-content      /* 섹션 콘텐츠 */
.intro-section        /* 인트로 섹션 변형 */
.activity-section     /* 액티비티 섹션 변형 */
```

### **카드 (Cards)**
```css
.card                 /* 기본 카드 */
.card-title           /* 카드 제목 */
.card-image           /* 카드 이미지 */
.card-icon            /* 카드 아이콘 */
.activity-card        /* 액티비티 카드 변형 */
.project-card         /* 프로젝트 카드 변형 */
```

### **내비게이션 (Navigation)**
```css
nav                   /* 기본 네비게이션 */
.nav-left             /* 네비 왼쪽 영역 */
.nav-right            /* 네비 오른쪽 영역 */
.page-nav             /* 페이지용 네비 변형 */
```

### **버튼 (Buttons)**
```css
.btn                  /* 기본 버튼 */
.preview-btn          /* 미리보기 버튼 */
```

---

## ⚠️ **피해야 할 패턴**

### ❌ **CamelCase 사용**
```css
.loadingScreen { }      /* 잘못됨 */
.introTitle { }         /* 잘못됨 */
```

### ❌ **snake_case 사용**
```css
.loading_screen { }     /* 잘못됨 */
.intro_title { }        /* 잘못됨 */
```

### ❌ **지나치게 긴 이름**
```css
.main-content-section-inner-wrapper-container { }  /* 너무 길음 */
```

### ❌ **의미 없는 축약**
```css
.btn-prim { }           /* preview? primary? */
.sec-ttl { }            /* section-title이 더 명확 */
```

---

## ✨ **네이밍 팁**

### 1. **명확성 우선**
```css
.preview-btn          ✅ (명확)
.btn-pv              ❌ (불명확)
```

### 2. **계층 구조 표현**
```css
.timeline             /* 부모 */
.timeline-item        /* 자식 */
.timeline-dot         /* 손자 */
```

### 3. **상태는 별도 클래스**
```css
.card:hover { }       ✅
.card--active { }     ✅ (BEM 스타일)
```

### 4. **일관성 유지**
```css
/* 모두 같은 패턴 사용 */
.activity-card
.project-card
.certificate-card
```

---

## 📚 **프로젝트 클래스 카탈로그**

### **레이아웃**
- `.section`, `.section-inner`, `.section-title`, `.section-content`
- `.intro`, `.intro-section`, `.activity-section`, `.certificate-section`
- `.page-body`, `.page-container`, `.page-nav`

### **네비게이션**
- `nav`, `.nav-left`, `.nav-right`

### **카드/아이템**
- `.card`, `.activity-card`, `.project-card`, `.cert-item`
- `.card-icon`, `.card-title`

### **타임라인**
- `.timeline`, `.timeline-item`, `.timeline-dot`
- `.timeline-title`, `.timeline-meta`, `.timeline-desc`

### **프로젝트**
- `.project-grid`, `.project-card`, `.project-image`, `.project-info`
- `.project-tech`, `.tech-tag`

### **이력서**
- `.resume-section`, `.resume-title`, `.resume-list`
- `.resume-item`, `.resume-small`

### **푸터**
- `.footer-section`, `.footer-content`, `.footer-logo`
- `.footer-links`, `.footer-bottom`, `.link-group`

### **버튼 & 인터랙션**
- `.preview-btn`, `.slide-up-entrance`

### **로딩 & 애니메이션**
- `.loading-screen`, `.intro-progress-container`, `.intro-progress-bar`
- `.intro-title`, `.intro-subtitle`, `.intro-welcome`, `.intro-enter`

### **배경 효과**
- `.background-effects`, `.bubble`, `.star`

---

## 🎓 **새로운 클래스 추가 시 체크리스트**

1. [ ] kebab-case 사용했는가?
2. [ ] 기존 패턴과 일관성이 있는가?
3. [ ] 이름만 봐도 역할을 알 수 있는가?
4. [ ] 너무 길거나 짧지 않은가? (2-3 단어 권장)
5. [ ] 다른 클래스와 충돌하지 않는가?

---

**작성일:** 2025-11-19  
**프로젝트:** INTRODUCE-ME Portfolio Website
