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
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

/** 차트 기본 스타일 */
const styles = {
  tooltipDiv: {
    borderRadius: "5px",
    backgroundColor: "white",
    padding: "10px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
    width: "180px", // 적절한 크기로 설정
  } as React.CSSProperties,
  tooltipLabel: {
    fontWeight: "bold",
    fontSize: "12px",
    marginBottom: "5px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "3px",
  } as React.CSSProperties,
  tooltipText: {
    fontSize: "11px",
    fontWeight:"bold",
  } as React.CSSProperties,
  legendContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "9px",
    fontWeight : "bold",
    marginTop: "10px",
  } as CSSProperties,
};

// 커스텀 툴팁
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={styles.tooltipDiv}>
        <p style={styles.tooltipLabel}>{label}</p>
        {payload.map((item, index) => (
          <div key={index} style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
            {/* 색상 박스 추가 (범례 색상과 동일) */}
            <div style={{ width: "10px", height: "10px", backgroundColor: item.color, borderRadius: "50%" }}></div>
            <span style={styles.tooltipText}>{`${item.name}: ${item.value}`}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// 커스텀 범례 (글씨 크기 키우기 + 스타일 추가)
const CustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <div style={styles.legendContainer}>
      {payload.map((entry, index) => (
        <div key={`legend-${index}`} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "12px", height: "12px", backgroundColor: entry.color, borderRadius: "50%" }}></div>
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function Linechart(props: { chartConfig: ChartConfig; chartData: any[] | undefined; chartTitle:string}) {
  return (
    <Card className="h-full">
      <CardContent className="h-full">
      {props.chartTitle && props.chartTitle !== "" && props.chartTitle !== "undefined" ? (
        <div style={{ textAlign: "left", fontSize: "13px", fontWeight: "bold", marginTop:"13px", marginBottom: "10px" }}>
          {props.chartTitle}
        </div>): null}
        <div className="h-[calc(100%-42px)] flex justify-center">
          <ChartContainer config={props.chartConfig} className="h-full w-full">
            <LineChart data={props.chartData} className="h-full">
              <CartesianGrid vertical={false} />
              <XAxis dataKey="label" fontSize="8px" fontWeight="bold"/>
              <YAxis yAxisId="left" orientation="left" />
              <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} />
              <Legend content={CustomLegend}/>
              <Line yAxisId="left" dataKey="val" type="linear" strokeWidth={2} dot={false} name="값"/>
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}