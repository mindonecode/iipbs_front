"use client"
import { useFoStore } from "@/app/store";
import { CHART_FORM, type ChartConfig, MainChart } from "@common/business_components";

  const chartData = [
    {label : 'a', val : '123'},
    {label : 'b', val : '143'},
    {label : 'c', val : '163'}
  ];

/**
 * 차트 Config
 */
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function ProcessFacilitySearch() {
  const {MainGraph} = useFoStore((state) => state);

  const {
    chart_inflowRain
  } = MainGraph;

  return (
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-6">
          <MainChart chartForm={CHART_FORM.LINEBAR} chartConfig={chartConfig} chartData={chart_inflowRain}></MainChart>
        </div>
        <div className="col-span-6">
          <MainChart chartForm={CHART_FORM.LINE} chartConfig={chartConfig} chartData={chartData}></MainChart>
        </div>
        <div className="col-span-6">
          <MainChart chartForm={CHART_FORM.LINE} chartConfig={chartConfig} chartData={chartData}></MainChart>
        </div>
        <div className="col-span-6">
          <MainChart chartForm={CHART_FORM.LINE} chartConfig={chartConfig} chartData={chartData}></MainChart>
        </div>
      </div>
  );
}
