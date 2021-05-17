import React, { useState } from "react";
import { Input, Form, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import CanvasJSReact from "assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function LineChart_canvasJs() {
  const [point, setPoint] = useState(1);
  const [dataCnt, setDataCnt] = useState(0);
  const [marker, setMarker] = useState("");

  const onPoint = (e: any) => {
    setPoint(e.target.value);
  };

  const onRandomData = (e: any) => {
    setDataCnt(e.target.value);
  };

  const onChecked = (e: any) => {
    if (e.target.checked) {
      setMarker("circle");
    } else {
      setMarker("");
    }
  };

  let arrData: object[] = [];
  const [data, setData] = useState([]);
  let dataSave: any = [];
  const onSubmit = () => {
    for (let n: number = 0; n < point; n++) {
      arrData = [];
      for (let i: number = 0; i < dataCnt; i++) {
        const random = Math.floor(Math.random() * 100);
        arrData.push({ label: i, y: random });
      }

      let dataObj = {
        type: "line",
        markerType: marker,
        dataPoints: arrData,
      };

      dataSave.push(dataObj);
      setData(dataSave);
    }
  };

  const options = {
    title: {
      text: "Line",
    },
    axisY: { title: "Y" },
    axisX: { title: "X" },
    width: window.screen.width - 250,
    height: window.screen.height - 400,

    data: data,
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
      <CanvasJSChart options={options} />
    </>
  );
}
