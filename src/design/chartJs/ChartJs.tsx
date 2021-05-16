import React from "react";

import { DataProps } from "setType";
import BasicBar from "./bar/BasicBar";
import LineChart from "./line/LineChart";
import PieChart from "./pie/PieChart";
import ScatterChart from "./scatter/ScatterChart";

export default function ChartJs({ data }: DataProps) {
  return (
    <>
      <h1>Chart.JS</h1>
      <BasicBar data={data} />
      <LineChart data={data} />
      <ScatterChart data={data} />
      <PieChart data={data} />
    </>
  );
}
