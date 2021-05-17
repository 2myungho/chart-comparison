import React from "react";
import { Bar } from "react-chartjs-2";
import { DataProps } from "setType";

export default function BasicBar({ data }: DataProps) {
  const chartData = {
    labels: ["1", "2", "3"],
    datasets: [
      {
        label: "Bar",
        data: data.y,
      },
    ],
  };
  return (
    <div style={{ width: "25%", padding: "0 10px", display: "inline-block" }}>
      <Bar type="bar" data={chartData} />
    </div>
  );
}
