import type { ChartConfig } from "@common/business_components";
import { CHART_FORM, MainChart, SearchDiv, SelectBox } from "@common/business_components";
import { Button } from "@common/components/ui";

/**
 * 차트 Form
 */
const chartForm = CHART_FORM.BAR;

/** 기본 스타일 */
const styles = {
    leftDiv : {
      width : '70%',
      margin : '1rem 0rem 1rem 0rem',
      display : 'flex'
    } as React.CSSProperties,
    rightDiv : {
      width : '30%',
      margin : '1rem 2rem 1rem 0rem',
    } as React.CSSProperties,
    searchBtn : {
      float : 'right',
      fontSize : '14px',
      marginRight : '0.8rem'
    } as React.CSSProperties,
  }

/**
 * 차트 Data
 */
const chartData = [
  { label: "January", val: 186},
  { label: "February", val: 305},
  { label: "March", val: 237},
  { label: "April", val: 73},
  { label: "May", val: 209},
  { label: "June", val: 214},
]

/**
 * 차트 Config
 */
const chartConfig = chartData.reduce((config,element) => {
    config[element.label] = {
      label: element.label,
      color : "hsl(var(--chart-1))"
    };
    return config;

  }, {} as Record<string, { label: string; color: string; }>) satisfies ChartConfig;

/**
 * selectBox data
 */
const selectData1 = [
  { text: "January", val: '00'},
  { text: "February", val: '01'},
  { text: "March", val: '03'},
  { text: "April", val: '04'},
  { text: "May", val: '05'},
  { text: "June", val: '06'},
]

const selectData2 = [
  { text: "January", val: '00'},
  { text: "February", val: '01'},
  { text: "March", val: '03'},
  { text: "April", val: '04'},
  { text: "May", val: '05'},
  { text: "June", val: '06'},
]

const labelArray = ['구분', '시도', '시군구'];

export default function Home() {
  return (
      <div>
        <MainChart chartConfig={chartConfig} chartForm={chartForm} chartData={chartData}></MainChart>

        <SearchDiv>
            <div style={styles.leftDiv}>
            </div>
            <div style={styles.rightDiv}>
              <Button style={styles.searchBtn} size="sm">
                초기화
              </Button>
              <Button style={styles.searchBtn} size="sm">
                조회
              </Button>
            </div>
        </SearchDiv>
      </div>
  );
}
