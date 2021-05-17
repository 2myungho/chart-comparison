import React from "react";
import { DataProps } from "setType";
import BasicBar from "./bar/BasicBar";
import LineChart from "./line/LineChart";
import PieChart from "./pie/PieChart";

export default function Canvas({ data }: DataProps) {
  return (
    <>
      <h1>CanvasJS</h1>
      <BasicBar data={data} />
      <LineChart data={data} />
      <PieChart data={data} />
    </>
  );
}
