import React from "react";
import { DataProps } from "setType";
import BasicBar from "./bar/BasicBar";
import Pie from "./pie/Pie";
import LabelsScatter from "./scatter/LabelsScatter";
import LineScatter from "./scatter/LineScatter";

export default function Plotly({ data }: DataProps) {
  return (
    <>
      <h1>Plotly Chart</h1>
      <BasicBar data={data} />
      <LineScatter data={data} />
      <LabelsScatter data={data} />
      <Pie data={data} />
    </>
  );
}
