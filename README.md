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
 ┃   ┣ ...
 ┃   ┗ package.json
 ┃
 ┣ packages # 공통 모듈이 위치할 폴더
 ┃ ┣ ⛔️common # 원앤올에서 제공하는 공통 모듈은 common 폴더로 제공
 ┃ ┃ ┣ assets
 ┃ ┃ ┣ components
 ┃ ┃ ┗ ...
 ┃ ┃
 ┃ ┗ (타개발사 작업 폴더)
 ┃   ┣ ...
 ┃   ┗ package.json
 ┃
 ┣ ⛔️package.json
 ┣ ⛔️pnpm-workspace.yaml
 ┣ ⛔️tailwind.config.preset.ts
 ┣ ⛔️tsconfig.base.json
 ┗ ⛔️turbo.json
```

## 새로운 프로젝트 설치 및 실행

### 1. 프로젝트 생성(Next.js 기준)

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
    "@common/components/*": ["../../../packages/common/components/src/*"],
    "@common/components": ["../../../packages/common/components/src"],
    "@common/network/*": ["../../../packages/common/network/*"],
    "@common/network": ["../../../packages/common/network/"]
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

### 5. next.config.ts 수정
```json
import type { NextConfig } from "next";
import webpack from "webpack";

const serverApiUrl =
  process.env.NEXT_PUBLIC_SERVER_API_URL || "http://localhost:3000";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.plugins.push(
      // common/components의 vite 환경 변수를 next 환경 변수로 정의
      new webpack.DefinePlugin({
        "import.meta.env.VITE_PORT": JSON.stringify(
          process.env.NEXT_PUBLIC_PORT,
        ),
        "import.meta.env.VITE_PROXY_HOST": JSON.stringify(
          process.env.NEXT_PUBLIC_PROXY_HOST,
        ),
        "import.meta.env.VITE_SERVER_API_URL": JSON.stringify(
          process.env.NEXT_PUBLIC_SERVER_API_URL,
        ),
        "import.meta.env.VITE_SITE_ID": JSON.stringify(process.env.SITE_ID),
        "import.meta.env.VITE_CLAIM_NAME": JSON.stringify(
          process.env.NEXT_PUBLIC_CLAIM_NAME,
        ),
        "import.meta.env.VITE_ACCESS_TOKEN": JSON.stringify(
          process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        ),
        "import.meta.env.VITE_REFRESH_TOKEN": JSON.stringify(
          process.env.NEXT_PUBLIC_REFRESH_TOKEN,
        ),
        "import.meta.env.VITE_AUTH_USER_ID": JSON.stringify(
          process.env.NEXT_PUBLIC_AUTH_USER_ID,
        ),
        "process.env.SITE_ID": JSON.stringify(process.env.NEXT_PUBLIC_SITE_ID),
      }),
    );

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/server/:path*",
        destination: `${serverApiUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
```

### 6. globals.css(또는 전역 css) 수정

```css
@import "@common/assets/index.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

/* 기타 스타일 */
```

### 7. 패키지 의존성 재설치

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
- TanStack Table (v8)
- Chart.js(^4)
- Storybook(^8)
- tus-js-client(^4)
- Zustand(^5)
- TanStack Query(^5)
- Axios(^1)

## 링크

- 컴포넌트 가이드(스토리북): http://www.onasys.co.kr/design/template


## API 서버 
http://dev.onasys.co.kr:8000

##Swagger
http://dev.onasys.co.kr:8000/webjars/swagger-ui/index.html?urls.primaryName=attach-service
