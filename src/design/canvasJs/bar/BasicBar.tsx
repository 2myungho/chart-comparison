import React from "react";
import { DataProps } from "setType";
import CanvasJSReact from "assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function BasicBar({ data }: DataProps) {
  const options = {
    title: {
      text: "Bar",
    },
    data: [
      {
        type: "column",
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
