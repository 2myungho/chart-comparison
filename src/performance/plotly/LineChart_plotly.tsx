import React, { useState } from "react";
import Plot from "react-plotly.js";
import { Input, Form, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

export default function LineChart_plotly() {
  const [point, setPoint] = useState(1);
  const [dataCnt, setDataCnt] = useState(0);
  const [marker, setMarker] = useState("lines");

  const onPoint = (e: any) => {
    setPoint(e.target.value);
  };

  const onRandomData = (e: any) => {
    setDataCnt(e.target.value);
  };

  const onChecked = (e: any) => {
    if (e.target.checked) {
      setMarker("lines+markers");
    } else {
      setMarker("lines");
    }
  };

  let arrX: number[] = [];
  let arrY: number[] = [];
  const [data, setData] = useState([]);
  let dataSave: any = [];
  const onSubmit = () => {
    for (let n: number = 0; n < point; n++) {
      arrX = [];
      arrY = [];
      for (let i: number = 0; i < dataCnt; i++) {
        const random = Math.floor(Math.random() * 100);
        arrX.push(i);
        arrY.push(random);
      }

      let dataObj = {
        type: "scatter",
        x: arrX,
        y: arrY,
        mode: `${marker}`,
      };

      dataSave.push(dataObj);
      setData(dataSave);
    }
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
        <Checkbox onChange={onChecked}>markers</Checkbox> <br />
        <Button type="primary" htmlType="submit" onClick={onSubmit}>
          Submit
        </Button>
        <Link to="performance">퍼포먼스 메인 돌아가기</Link>
      </Form>

      <Plot
        data={data}
        config={{
          scrollZoom: true,
        }}
        layout={{
          width: window.screen.width - 250,
          height: window.screen.height - 400,
          title: "Plotly",
        }}
      />
    </>
  );
}
