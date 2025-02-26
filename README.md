## 폴더 구조

> "주의" 표시가 있는 파일 및 폴더는 수정 시 협의가 필요한 폴더 및 파일입니다.

```
 ┣ apps # 개발은 apps 폴더에서 진행
 ┃ ┣ ⛔️common # 원앤올에서 제공하는 기능 관련 모듈은 common 폴더로 제공
 ┃ ┃ ┣ board
 ┃ ┃ ┣ survey
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ package.json
 ┃ ┃
 ┃ ┗ (타개발사 작업 폴더)
 ┃   ┣ feature1
 ┃   ┣ feature2
 ┃   ┣ ...
 ┃   ┗ package.json
 ┃
 ┣ packages # 공통 모듈이 위치할 폴더
 ┃ ┣ ⛔️common # 원앤올에서 제공하는 공통 모듈은 common 폴더로 제공
 ┃ ┃ ┣ components
 ┃ ┃ ┣ utils
 ┃ ┃ ┗ ...
 ┃ ┃
 ┃ ┗ (타개발사 작업 폴더)
 ┃   ┣ ...
 ┃   ┗ package.json
 ┃
 ┣ ⛔️package.json
 ┣ ⛔️pnpm-lock.yaml
 ┣ ⛔️pnpm-workspace.yaml
 ┣ ⛔️tsconfig.base.json
 ┗ ⛔️turbo.json
```

## 새로운 프로젝트 설치 및 실행

### 1. 프로젝트 생성(Next.js)

```bash
npx create-next-app@latest ./apps/as --typescript --eslint --tailwind --app
```

### 2. package.json 수정

```json
{
  // 기타 설정 ...
  "dependencies": {
    "@common/components": "workspace:*", // 추가
    "react": "^19.0.0", // 제거
    "react-dom": "^19.0.0", // 제거
  },
  "devDependencies": {
    "@types/react": "^19", // 제거
    "@types/react-dom": "^19" // 제거
  }
}
```

### 3. tsconfig.json 수정

```json
{
  // 기타 설정 ...
  "paths": {
    "@common/components": ["../../packages/common/components/src"], // 추가
    "@common/assets/*": ["../../packages/common/assets/dist/*"], // 추가
    "@common/assets": ["../../packages/common/assets/dist"] // 추가
  }
}
```

### 4. tailwind.config.ts 수정

```ts
import type { Config } from "tailwindcss";
import presetConfig from "../../tailwind.config.preset";

export default {
  presets: [presetConfig],
  darkMode: ["class", "[data-mode='dark']"],
  content: [
    "../../packages/common/components/src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    // 기타 컨텐츠 ...
  ],
} satisfies Config;
```

### 5. globals.css(또는 전역 css) 수정

```css
@import "@common/assets/index.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

/* 기타 스타일 */
```

### 6. 패키지 의존성 재설치

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 기술 스택

- React(^18)
- TypeScript(^5)
- Next.js(^15)
- Tailwind CSS(^3)
- react-dnd-treeview(^3)
- TUI Grid(^4)
- Chart.js(^4)
- Storybook(^8)
- tus-js-client(^4)
- Zustand(^5)
- TanStack Query(^5)
- Axios(^1)

## 링크

- 컴포넌트 가이드(스토리북): http://www.onasys.co.kr/design/template
