"use client"
import type { CSSProperties } from "react";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent
} from "./lib/card";
import {
  ChartContainer,
  type ChartConfig
} from "./lib/chart";
import React from "react";

// 툴팁 커스텀 css
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
    fontSize: "10px",
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

export default function LineBarchart(props: { chartConfig: ChartConfig; chartData: any[] | undefined; chartTitle:string }) {
  return (
    <Card>
      <CardContent>
        {props.chartTitle && props.chartTitle !== "" && props.chartTitle !== "undefined" ? (
        <div style={{ textAlign: "left", fontSize: "13px", fontWeight: "bold", marginTop:"13px", marginBottom: "10px" }}>
          {props.chartTitle}
        </div>): null}
        <ChartContainer config={props.chartConfig}>
          <ComposedChart data={props.chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            {/* 왼쪽 Y축: lineVal (정상) */}
            <YAxis yAxisId="left" orientation="left" />
            {/* 오른쪽 Y축: barVal (위에서 아래로 반전) */}
            <YAxis yAxisId="right" orientation="right" reversed />
            <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} />
            <Legend content={CustomLegend}/>
            {/* 바 차트 (오른쪽 Y축 사용, 위에서 아래로) */}
            <Bar yAxisId="right" dataKey="barVal" fill="#8884d8" name="강수량(mm/일)"/>
            {/* 라인 차트 (왼쪽 Y축 사용) */}
            <Line yAxisId="left" type="monotone" dataKey="lineVal" stroke="orange" strokeWidth={2} dot={{r: 0}} name="BOD(mg/L)"/>
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}