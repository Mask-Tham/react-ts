import { Button, Card, Col, Row } from "antd";
import MapLeaflet, { MoveCenterMapCode } from "components/map/MapLeaflet";
import MapTooltipImg, { MapTooltipImgCode } from "components/map/MapTooltipImg";
import Code from "components/util/Code";
import React from "react";

type Props = {};

const Map = (props: Props) => {
  const checkstr = (str: number) => {
    let str1 = str.toString();
    let str2 = str.toString().split("").reverse().join("");
    console.log(str, str1, str2);

    if (str2 === str1) {
      console.log(true);
    }
  };
  return (
    <div>
      <Card>
        Map
        <Row gutter={10} style={{ marginBottom: "50px" }}>
          <Col span={12}>
            {/* <Button
              onClick={() => {
                checkstr(123454323);
              }}
            >
              qwe
            </Button> */}
            <MapLeaflet></MapLeaflet>
          </Col>
          <Col span={12}>
            <div style={{ height: "500px", overflow: "auto" }}>
              <Code code={MoveCenterMapCode} />
            </div>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <MapTooltipImg></MapTooltipImg>
          </Col>
          <Col span={12}>
            <div style={{ height: "300px", overflow: "auto" }}>
              <Code code={MapTooltipImgCode} />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Map;
