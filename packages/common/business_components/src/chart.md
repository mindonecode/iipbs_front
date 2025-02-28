## Chart 모듈
### 공통 모듈 중 Chart를 다양한 테마로 적용시킬 수 있도록 해주는 모듈
&emsp; 1. 차트 모듈 사용법

&emsp; &emsp; 1-1) 호출방법

&emsp; &emsp; &emsp; (1) 파일에 차트생성에 필요한 form, MainChart, MainConfig 임폴트
```js
import  {type ChartConfig, MainChart, CHART_FORM } from "@common/business_components";
```
&emsp; &emsp; &emsp; (2) ChartForm 지정
```js
/**
 * CHART_FORM.BAR : Bar차트 
 * CHART_FORM.LINE : Line차트
 * DN : Daughnut차트
**/
const chartForm = CHART_FORM.BAR;
```
&emsp; &emsp; &emsp; (3) chartData 정의
``` js
/**
 * label : 차트항목 / val : 데이터값
**/
const chartData = [
  { label: "January", val: 186},
  { label: "March", val: 237},
  { label: "February", val: 305},
  { label: "April", val: 73},
  { label: "May", val: 209},
  { label: "June", val: 214},
]
```
&emsp; &emsp; &emsp; (4) Chart생성에 필요한 chartConfig 정의
``` js
/**
 * 차트 Config
 */
const chartConfig = chartData.reduce((config,>>element) => {
      label: element.label,
    config[element.label] = {
      color : "hsl(var(--chart-1))"
    };
    return config;
  }, {} as Record<string, { label: string; color: string; }>) satisfies ChartConfig;
```
&emsp; &emsp; &emsp; (5) Chart 객체 생성
```html
return (
    <div>
      <MainChart chartConfig={chartConfig} chartForm={chartForm} chartData={chartData}></MainChart>
    </div>
  );
```