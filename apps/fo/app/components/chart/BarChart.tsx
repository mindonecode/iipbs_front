"use client"
import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function Chart(props) {
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