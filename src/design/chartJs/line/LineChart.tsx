import React from "react";
import { Line } from "react-chartjs-2";

import { DataProps } from "setType";

export default function LineChart({ data }: DataProps) {
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
      <Line type="line" data={chartData} />
    </div>
  );
}
