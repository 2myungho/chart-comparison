import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Input, Form, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

export default function LineChart_chartJs() {
  let arrX: number[] = [];
  let arrY: number[] = [];

  const [point, setPoint] = useState(1);
  const [dataCnt, setDataCnt] = useState(0);
  const [marker, setMarker] = useState(0);
  const [dataX, setDataX] = useState(arrX);

  const onPoint = (e: any) => {
    setPoint(e.target.value);
  };

  const onRandomData = (e: any) => {
    setDataCnt(e.target.value);
  };

  const onChecked = (e: any) => {
    if (e.target.checked) {
      setMarker(3);
    } else {
      setMarker(0);
    }
  };

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
      let color = ["red", "blue", "green", "gray"];
      setDataX(arrX);
      let dataObj = {
        label: `line${n}`,
        data: arrY,
        backgroundColor: `${color[n]}`,
        borderColor: `${color[n]}`,
        pointRadius: `${marker}`,
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
      <Line
        type="line"
        data={{
          labels: dataX,
          datasets: data,
        }}
      />
    </>
  );
}
