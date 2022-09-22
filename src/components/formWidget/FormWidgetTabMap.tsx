import {
  Col,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Row,
  Segmented,
  Upload,
} from "antd";
import React, { useState } from "react";
import MapMarkPin from "./MapMarkPin";
import { AiFillHome, AiOutlineWifi } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { ImImage } from "react-icons/im";
import { GrServers } from "react-icons/gr";
import { FaServer } from "react-icons/fa";
import { PlusOutlined } from "@ant-design/icons";
import { renderToStaticMarkup } from "react-dom/server";
import TextArea from "antd/lib/input/TextArea";
import { CirclePicker } from "react-color";
export const PickColor = ({ color = "#565656" }: { color?: string }) => {
  return (
    <div
      style={{
        width: "22px",
        height: "100%",
        borderRadius: "5px",
        background: color,
      }}
    ></div>
  );
};

export const radioPickColor = {
  padding: "5px 10px",
  margin: "0 0px",
  border: "none",
  background: "#fff",
} as React.CSSProperties;

export const radioPinColor: Array<string> = [
  "#89C3A4",
  "#E6C953",
  "#FF8800",
  "#FF5858",
  "#A08FAB",
  "#6F8BB9",
  "#565656",
];

const green = "#89c3a4";
const yellow = "#e6c953";
const orange = "#ffa200";
const red = "#fc7c7d";
const purple = "#a08fab";
const blue = "#6f8bb9";
const normal = "#f1f1f1";

const widgetTilePalette = [normal, green, yellow, orange, red, purple, blue];

const widgetTileKey = [
  { hex: "#89c3a4", name: "green" },
  { hex: "#e6c953", name: "yellow " },
  { hex: "#ffa200", name: "orange " },
  { hex: "#fc7c7d", name: "red " },
  { hex: "#a08fab", name: "purple " },
  { hex: "#6f8bb9", name: "blue " },
  { hex: "#f1f1f1", name: "normal " },
];

export const radioPinIcon: Array<any> = [
  { name: "AiFillHome", element: <AiFillHome /> },
  { name: "GoAlert", element: <GoAlert /> },
  { name: "AiOutlineWifi", element: <AiOutlineWifi /> },
  { name: "ImImage", element: <ImImage /> },
  { name: "FaServer", element: <FaServer /> },
];

type Props = {};
const FormWidgetTabMap = (props: Props) => {
  const form = Form.useFormInstance();

  const [Tab, setTab] = useState();
  const changTab = (e: RadioChangeEvent) => {
    setTab(e.target.value);
  };

  const [Pincolor, setPincolor] = useState<string>("#89c3a4");
  const changPincolor = (color: any, event: any) => {
    form.setFieldsValue({
      pinColor: widgetTileKey.filter((e) => e.hex === color.hex)[0].name,
    });
    setPincolor(color.hex);
  };

  return (
    <>
      <Form.Item name="pinIcon" label="Choose Pin icon to map">
        <Radio.Group buttonStyle="outline" value={Tab} onChange={changTab}>
          {radioPinIcon.map((item, item_i) => {
            return (
              <Radio.Button value={item.name} key={item_i}>
                {item.element}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Form.Item>
      <MapMarkPin iconMarker={Tab} color={Pincolor} />
      <Form.Item name="pinName" label="Pin Name">
        <Input />
      </Form.Item>
      <Form.Item name="pinColor" label="Select Background Color">
        <CirclePicker
          width="100%"
          onChange={changPincolor}
          colors={widgetTilePalette}
        />
      </Form.Item>
      <Form.Item label="Add Photo">
        <Row>
          <Col md={6} xs={24}>
            <Form.Item name={"img"} label="" valuePropName="fileList">
              <Upload action="/upload.do" listType="picture-card" maxCount={1}>
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
          <Col md={18} xs={24}>
            <Form.Item name={"desImg"} label="">
              <TextArea placeholder="Description" rows={4} />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
    </>
  );
};

export default FormWidgetTabMap;
