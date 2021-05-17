import React, { useState } from "react";
import Plotly from "./plotly/Plotly";
import { Menu, Row, Col } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { mockData } from "mockData";
import ChartJs from "./chartJs/ChartJs";
import { Link } from "react-router-dom";
import Canvas from "./canvasJs/Canvas";

const { SubMenu } = Menu;

export default function Design() {
  const [data, setData] = useState(mockData[0]);

  const handleClick = (e: any) => {
    if (data.key !== e.key) {
      setData(mockData[Number(e.key) - 1]);
    }
  };
  return (
    <>
      <Link to="/">메인페이지 돌아가기</Link>
      <Row>
        <Col span={3}>
          <Menu
            style={{ width: 256, marginTop: "200px" }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            onClick={handleClick}
          >
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Y">
              <Menu.Item key="1">양</Menu.Item>
              <Menu.Item key="2">무게</Menu.Item>
              <Menu.Item key="3">습도</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>

        <Col span={21}>
          <Plotly data={data} />
          <ChartJs data={data} />
          <Canvas data={data} />
        </Col>
      </Row>
    </>
  );
}
