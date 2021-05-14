import { chartSize } from "mockData";
import React from "react";
import Plot from "react-plotly.js";
import { DataProps } from "setType";

export default function LabelsScatter({ data }: DataProps) {
  return (
    <Plot
      data={[
        {
          type: "scatter",
          x: [1, 2, 3],
          y: data.y,
          mode: "text+markers", //공식문서에서는 markers+text 이지만 에러난다.
          marker: { color: "red" },
          text: ["A-1", "A-2", "A-3", "A-4", "A-5"], //tag
          textposition: "bottom center",
        },
      ]}
      layout={{ title: "scatter" }}
      style={chartSize}
    />
  );
}
