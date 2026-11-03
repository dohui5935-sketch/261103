# 이도희 · 자기소개 페이지

Vanilla JavaScript와 Vite로 만든 반응형 자기소개 페이지입니다. 코드 작업 전 `AGENTS.md`의 프로젝트 규칙을 확인해 주세요.

## 실행

```sh
npm install
npm run dev
```

배포용 빌드는 `npm run build`, 빌드 결과 확인은 `npm run preview`를 사용합니다. 빌드 결과는 `dist`에 생성됩니다.

## 내용 수정

| 파일 | 수정할 내용 |
| --- | --- |
| `index.html` | 이름, 소개, 교육 철학, 연구 관심사, 프로젝트 3개, 연락처 |
| `src/style.css` | 색상, 글자 크기, 배치, PC·모바일 스타일, 애니메이션 |
| `src/main.js` | 모바일 메뉴, 스크롤 등장 효과, 현재 영역 표시, 준비 중 안내 |
| `src/assets/learning-playground.svg` | 첫 화면의 공구·도형 일러스트 |
| `public/favicon.svg` | 브라우저 탭의 꽃 아이콘 |

`index.html`의 `<!-- 수정: ... -->` 주석과 대괄호로 표시된 임시 텍스트를 찾아 바꿔 주세요. 소속, 경력, 연구 실적과 실제 연락처는 아직 입력하지 않았습니다. 교육 철학과 연구 소개 문구도 자유롭게 수정할 수 있습니다.

현재 미등록 프로젝트와 연락처 버튼은 준비 중 안내를 표시합니다. 실제 주소가 준비되면 해당 `button`을 아래처럼 `a`로 교체합니다. 기존 CSS 클래스는 유지하고 `type`과 `data-placeholder-title` 속성은 제거합니다.

```html
<a class="project-link" href="실제 프로젝트 URL" target="_blank" rel="noopener noreferrer">
  프로젝트 살펴보기 <span aria-hidden="true">↗</span>
</a>

<a class="contact-email" href="mailto:실제 이메일 주소">
  <span class="contact-label">EMAIL</span>
  <span>실제 이메일 주소</span>
  <span class="contact-link-arrow" aria-hidden="true">↗</span>
</a>

<a class="contact-site" href="실제 사이트 URL" target="_blank" rel="noopener noreferrer">
  <span>사이트 이름</span><span aria-hidden="true">↗</span>
</a>
```

이메일을 설정한 뒤에는 주소에 맞게 `mailto:` 값과 표시 문구를 함께 수정합니다. 페이지 제목과 검색 설명은 `index.html`의 `title`과 `meta name="description"`에서 수정합니다.

## 접근성과 반응형 구성

- PC에서는 다단 배치, 모바일에서는 한 열 배치와 접이식 메뉴를 사용합니다.
- 키보드 포커스, 본문 바로 가기, 안내 창의 Escape 닫기를 지원합니다.
- 기기의 동작 줄이기 설정을 존중하고, JavaScript가 없어도 본문 콘텐츠를 읽을 수 있습니다. 모바일 메뉴와 준비 중 안내는 JavaScript가 필요합니다.
- 외부 CDN, 외부 폰트, 추가 JavaScript 라이브러리를 사용하지 않습니다.

## Netlify 배포

- Build command: `npm run build`
- Publish directory: `dist`

GitHub 저장소를 Netlify에 연결하고 위 값을 설정합니다. 루트 `index.html`과 기본 출력 폴더를 사용하므로 Vite 설정을 추가로 변경할 필요가 없습니다.
