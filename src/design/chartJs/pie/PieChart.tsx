import React from "react";
import { DataProps } from "setType";
import { Pie } from "react-chartjs-2";

export default function PieChart({ data }: DataProps) {
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
      <Pie type="pie" data={chartData} />
    </div>
  );
}
