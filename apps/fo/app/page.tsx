import type { ChartConfig } from "@common/business_components";
import {MainChart} from "@common/business_components";
import {CHART_FORM} from "@common/business_components";

/**
 * 차트 Form
 */
const chartForm = CHART_FORM.BAR;

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

export default function Home() {
  return (
    <div>
      <MainChart chartConfig={chartConfig} chartForm={chartForm} chartData={chartData}></MainChart>
    </div>
  );
}
