import React from "react";
import { Bar } from "react-chartjs-2";
import { DataProps } from "setType";

export default function BasicBar({ data }: DataProps) {
  console.log(data.y);
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
    <div style={{ width: "25%", display: "inline-block" }}>
      <Bar type="Line" data={chartData} />
    </div>
  );
}
