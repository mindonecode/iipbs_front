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

export default function Chart(props: { chartStyle: CSSProperties | undefined; chartConfig: ChartConfig; chartData: any[] | undefined; }) {
  return (
    <Card>
        <CardContent>
            <ChartContainer style={props.chartStyle} config={props.chartConfig}>
                <BarChart accessibilityLayer data={props.chartData}>
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
        </CardContent>
    </Card>
  )
}