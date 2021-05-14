import React from "react";
import { chartSize } from "mockData";
import Plot from "react-plotly.js";
import { DataProps } from "setType";

export default function BasicBar({ data }: DataProps) {
  const onClick = (e: any) => {
    console.log(e);
  };
  return (
    <Plot
      data={[
        {
          type: "bar",
          x: [1, 2, 3],
          y: data.y,
        },
      ]}
      layout={{ title: "Bar" }}
      style={chartSize}
      onClick={onClick}
      config={{
        scrollZoom: true,
        showLink: true, //아래 두개 옵션은 차트 편집 기능 제공
        plotlyServerURL: "https://chart-studio.plotly.com",
        responsive: true,
      }} //config는 chart의 mode bar에 해당하는 기능을 제공,
    />
  );
}
