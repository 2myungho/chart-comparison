import React, { useState } from "react";
import Plot from "react-plotly.js";
import { Input, Form, Button } from "antd";

export default function LineChart_plotly() {
  let arrX: number[] = [];
  let arrY: number[] = [];
  const [point, setPoint] = useState(0);
  const [dataCnt, setDataCnt] = useState(0);
  const [dataX, setDataX] = useState(arrX);
  const [randomData, setRandomData] = useState(arrY);

  const onPoint = (e: any) => {
    setPoint(e.target.value);
  };
  const onRandomData = (e: any) => {
    setDataCnt(e.target.value);
  };
  const onSubmit = () => {
    for (let i: number = 0; i < dataCnt; i++) {
      arrX.push(i);
      arrY.push(i);
    }
    setDataX(arrX);
    setRandomData(arrY);
  };
  return (
    <>
      <Form>
        <Input addonBefore="point" onChange={onPoint} value={point} />
        <Input
          addonBefore="랜덤 데이터의 수"
          onChange={onRandomData}
          value={dataCnt}
        />{" "}
        <br />
        <Button type="primary" htmlType="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
      <Plot
        data={[
          {
            type: "scatter",
            x: dataX,
            y: randomData,
            mode: "lines+markers",
          },
        ]}
        config={{
          scrollZoom: true,
        }}
        layout={{ title: "Plotly" }}
      />
    </>
  );
}
