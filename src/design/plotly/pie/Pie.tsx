import { chartSize } from "mockData";
import React from "react";
import Plot from "react-plotly.js";
import { DataProps } from "setType";

export default function Pie({ data }: DataProps) {
  return (
    <Plot
      data={[
        {
          type: "pie",
          values: data.y,
          labels: ["Wage", "Operating expenses", "Cost of sales"],
          textinfo: "label+percent",
        },
      ]}
      layout={{ title: "scatter" }}
      style={chartSize}
    />
  );
}
