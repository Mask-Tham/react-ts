import { Card, Col, Row } from "antd";
import CardProfileMini, {
  coedCardProfileMini,
} from "components/card/CardProfileMini";
import Code from "components/util/Code";
import { Outlet } from "react-router-dom";

type Props = {};

const Components = (props: Props) => {
  const userData = { name: "Mask", position: "CEO", img: require('assets/images/profile.jpg') };
  const codeCard = `
    <Card style={{color:#fff}}>
      
    </Card>
    `;
  return (
    <div>
      <Row gutter={20}>
        <Col span={24}>
          Components
        </Col>
        <Col span={24}>
          <Outlet/>
        </Col>
      </Row>
    </div>
  );
};

export default Components;
