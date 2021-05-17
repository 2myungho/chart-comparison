import React from "react";
import { DataProps } from "setType";
import CanvasJSReact from "assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function PieChart({ data }: DataProps) {
  const options = {
    title: {
      text: "Pie",
    },
    axisY: { title: "Y" },
    axisX: { title: "X" },

    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { label: "1", y: Number(data.y[0]) },
          { label: "2", y: Number(data.y[1]) },
          { label: "3", y: Number(data.y[2]) },
        ],
      },
    ],
  };

  return (
    <div style={{ width: "25%", display: "inline-block", padding: "0 10px" }}>
      <CanvasJSChart options={options} />
    </div>
  );
}
