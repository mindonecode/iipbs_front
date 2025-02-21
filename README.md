## 폴더 구조

> ⛔️ 표시가 있는 파일 및 폴더는 수정하면 안 되거나 수정 시 협의가 필요한 폴더입니다.

```
 ┣ apps # 서비스 개발은 apps 폴더에서 진행
 ┃ ┣ ⛔️onasys # 원앤올에서 제공하는 기능 관련 모듈은 onasys 폴더로 제공
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
 ┃ ┣ ⛔️onasys # 원앤올에서 제공하는 공통 모듈은 onasys 폴더로 제공
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
 ┗ ⛔️pnpm-workspace.yaml
```

## 기술 스택

- React(^19)
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
