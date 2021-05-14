import React from "react";

import { DataProps } from "setType";
import BasicBar from "./bar/BasicBar";

export default function ChartJs({ data }: DataProps) {
  return (
    <>
      <h1>Chart.JS</h1>
      <BasicBar data={data} />
    </>
  );
}
