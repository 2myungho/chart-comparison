import { chartSize } from "mockData";
import React from "react";
import Plot from "react-plotly.js";
import { DataProps } from "setType";

export default function LineScatter({ data }: DataProps) {
  const onMarkerClick = (e: any) => {
    console.log(e.points[0].data.marker); //클릭시 marker 색상 바꾸기
    console.log(e.points[0]["marker.color"]); //클릭한 marker 색상
    console.log(e);
  };

  return (
    <Plot
      data={[
        {
          type: "scatter",
          x: [1, 2, 3],
          y: data.y,
          marker: { color: ["red", "blue", "red"] },
        },
      ]}
      layout={{ title: "scatter" }}
      style={chartSize}
      onClick={onMarkerClick}
    />
  );
}
