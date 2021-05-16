import React from "react";
import { Scatter } from "react-chartjs-2";
import { DataProps } from "setType";

export default function ScatterChart({ data }: DataProps) {
  const chartData = {
    labels: ["1", "2", "3"],
    datasets: [
      {
        label: "Bar",
        data: data.y,
      },
    ],
  };
  console.log(chartData);
  return (
    <div style={{ width: "25%", padding: "0 10px", display: "inline-block" }}>
      <Scatter type="scatter" data={chartData} />
    </div>
  );
}
