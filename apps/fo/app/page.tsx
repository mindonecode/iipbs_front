import type { ChartConfig } from "@/components/ui/chart";
import { Chart, CHART_FORM} from "./components/chart/Chart";

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
const chartConfig = chartData.reduce((config,element,idx) => {
    element.fill = "hsl(var(--chart-"+(idx+1)+"))";
    config[element.month] = {
      label: element.month,
      color : "hsl(var(--chart-1))"
    };
    return config;

  }, {} as Record<string, { label: string; color: string; }>) satisfies ChartConfig;

export default function Home() {
  return (
    <div>
      <Chart chartConfig={chartConfig} chartForm={chartForm} chartData={chartData}></Chart>
    </div>
  );
}
