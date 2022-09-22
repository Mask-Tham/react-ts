import { Card, Col, Row, Skeleton } from "antd";
import CardProfileMini, {
  coedCardProfileMini,
} from "components/card/CardProfileMini";
import Code from "components/util/Code";
import React, { useState } from "react";

type Props = {};

const DemoCard = (props: Props) => {
  const userData = {
    name: "Mask",
    position: "CEO",
    img: require("assets/images/profile.jpg"),
  };
  const codeCard = `
    <Card>    
    </Card>
    `;
  const codeCardLoading = `
    <Card loading={loading}>
    </Card>
    `;

  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <Card>
            <Row gutter={10}>
              <Col span={24}>
                <h2>Card</h2>
              </Col>
              <Col span={12}>
                <Card></Card>
              </Col>
              <Col span={12}>
                <Code code={codeCard} language="markup" />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <Row gutter={10} justify="space-between">
              <Col span={24}>
                <h2>Card</h2>
              </Col>
              <Col span={6}>
                <div>
                  <CardProfileMini item={userData}></CardProfileMini>
                </div>
              </Col>
              <Col span={12}>
                <Code code={coedCardProfileMini} language="markup" />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <Row gutter={10}>
              <Col span={24}>
                <h2>Card Loading</h2>
              </Col>
              <Col span={12}>
                <Card loading={loading}>
                  {/* <Skeleton loading={loading}></Skeleton> */}
                </Card>
              </Col>
              <Col span={12}>
                <Code code={codeCardLoading} language="markup" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DemoCard;
