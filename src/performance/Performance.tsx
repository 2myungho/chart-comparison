import React from "react";
import { Link } from "react-router-dom";

export default function Performance() {
  return (
    <>
      <Link to="/plotly">Plotly</Link> <br />
      <Link to="/chartJs">Chart.js</Link>
    </>
  );
}
