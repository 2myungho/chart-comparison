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
  return (
    <div style={{ width: "15%", padding: "0 10px", display: "inline-block" }}>
      <Pie type="pie" data={chartData} />
    </div>
  );
}
