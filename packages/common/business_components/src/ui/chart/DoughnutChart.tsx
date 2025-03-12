"use client"

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent
} from "./lib/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "./lib/chart";
import type { CSSProperties } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export default (props: { chartConfig: ChartConfig; chartData: never[] | undefined; chartTitle:string}) =>{
  return (
    <Card className="flex flex-col">
      {props.chartTitle && props.chartTitle !== "" && props.chartTitle !== "undefined" ? (
        <div style={{ textAlign: "left", fontSize: "13px", fontWeight: "bold", marginTop:"13px", marginBottom: "10px" }}>
          {props.chartTitle}
        </div>): null}
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={props.chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={props.chartData}
              dataKey="val"
              nameKey="label"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
