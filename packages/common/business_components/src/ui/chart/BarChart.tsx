"use client"
import type { CSSProperties } from "react";
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
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function Chart(props: { chartConfig: ChartConfig; chartData: any[] | undefined; chartTitle: string}) {
  return (
    <Card className="h-full">
      <CardContent className="h-full">
        {props.chartTitle && props.chartTitle !== "" && props.chartTitle !== "undefined" ? (
        <div style={{ textAlign: "left", fontSize: "13px", fontWeight: "bold", marginTop:"13px", marginBottom: "10px" }}>
          {props.chartTitle}
        </div>): null}
        <div className="h-[calc(100%-42px)] flex justify-center">
          <ChartContainer config={props.chartConfig} className="h-full w-full">
              <BarChart accessibilityLayer data={props.chartData} className="h-full">
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="label"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />}/>
                  <Bar dataKey="val" radius={10} />
              </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}