 
import React from 'react';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import { type ChartConfig } from './lib/chart';
import LineChart from './LineChart';
import LineBarchart from './LineBarChart';

/**차트 FORM */
const CHART_FORM = {
  /**바 차트 형태*/
  BAR : 'bar',
  /**라인 차트 형태*/
  LINE:'line',
  /**도넛 차트 형태*/
  DN :'daughnut',
  /**LINE,BAR차트 */
  LINEBAR : 'linebar'
};

function MainChart(props: { chartForm: string; chartConfig: any; chartData: any; chartTitle:string; }) {
  if( props.chartForm == CHART_FORM.BAR ){
    return (
      <BarChart chartConfig={props.chartConfig} chartData={props.chartData} chartTitle={props.chartTitle}>
      </BarChart>
    );
  } else if( props.chartForm == CHART_FORM.LINE ){
    return (
      <LineChart chartConfig={props.chartConfig} chartData={props.chartData} chartTitle={props.chartTitle}>
      </LineChart>
    );
  } else if( props.chartForm == CHART_FORM.DN ){
    return (
      <DoughnutChart chartConfig={props.chartConfig} chartData={props.chartData} chartTitle={props.chartTitle}>
      </DoughnutChart>
    );
  } else if (props.chartForm == CHART_FORM.LINEBAR){
    return (
      <LineBarchart chartConfig={props.chartConfig} chartData={props.chartData} chartTitle={props.chartTitle}>
      </LineBarchart>
    );
  }
}

export { MainChart };
// eslint-disable-next-line react-refresh/only-export-components
  export { CHART_FORM };
  export type { ChartConfig };
