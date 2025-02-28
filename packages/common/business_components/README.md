## business_components 패키지
### 원앤올에서 제공받는 컴포넌트 외에 업무 파트에서 사용할 수 있는 별도 components 패키지지
&emsp; 1) 설정

&emsp; &emsp; (1) tsconfig.json 'path'에 '@common/business_components' 변수를 추가
```json
"paths": {
  "@/*": ["./*"],
  "@common/components/*": ["../../packages/common/components/src/*"],
  "@common/components": ["../../packages/common/components/src/index"],
  // 작성구문문
  "@common/business_components/*": ["../../packages/common/business_components/src/*"],
  "@common/business_components": ["../../packages/common/business_components/src/index"]
}
```
&emsp; &emsp; (2) package.json 'dependencies'에 '@common/business_components' 추가
```json
"dependencies": {
  "@common/business_components": "workspace:*",
  "next": "15.1.7"
},
```