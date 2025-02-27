 
import React from 'react'
import BarChart from './BarChart';
import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';
import {type ChartConfig } from './lib/chart';

/** 차트 기본 스타일 */
const styles = {
    divHeight : {
        height: '400px',
        width : '500px'
    } as React.CSSProperties
}

/**차트 FORM */
const CHART_FORM = {
  /**바 차트 형태*/
  BAR : 'bar',
  /**라인 차트 형태*/
  LINE:'line',
  /**도넛 차트 형태*/
  DN :'daughnut'
};

function MainChart(props: { chartForm: string; chartConfig: any; chartData: any; }) {
  if( props.chartForm == CHART_FORM.BAR ){
    return (
      <div>
        <BarChart chartConfig={props.chartConfig} chartStyle={styles.divHeight} chartData={props.chartData}>
        </BarChart>
      </div>
    );
  } else if( props.chartForm == CHART_FORM.LINE ){
    return (
      <div>
        <LineChart chartConfig={props.chartConfig} chartStyle={styles.divHeight} chartData={props.chartData}>
        </LineChart>
      </div>
    );
  } else if( props.chartForm == CHART_FORM.DN ){
    return (
      <div>
        <DoughnutChart chartConfig={props.chartConfig} chartStyle={styles.divHeight} chartData={props.chartData}>
        </DoughnutChart>
      </div>
    );
  }
}

export {MainChart};
// eslint-disable-next-line react-refresh/only-export-components
export {CHART_FORM};
export type {ChartConfig};