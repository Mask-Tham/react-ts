import { Avatar, Button, Card, Col, Image, Row } from "antd";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

type Props = { item?: { name: string; position: string; img: string } };

export const coedCardProfileMini = `
<script>
  const userData = { 
    name: "Mask", 
    position: "CEO", 
    img: "string" 
  };
</script>

<CardProfileMini item={userData}>
</CardProfileMini>

`;
const marginBottom = { marginBottom: "10px" };

const CardProfileMini = (props: Props) => {
  const { item } = props;

  return (
    <Card style={{borderRadius:'10px'}} bodyStyle={{padding:'12px'}}>
      <Row justify="end">
        <Col>
          <Button type="text" shape="circle" icon={<BsThreeDots />}></Button>
        </Col>
      </Row>
      <Row justify="center" style={marginBottom}>
        <Col>
          <Avatar
          style={{border:'5px solid #fff ',boxShadow: '0px 5px 10px 0px #BDBDBD'}}
            src={item?.img !== "" ? item?.img : "/logo192.png"}
            size={100}
          />
        </Col>
      </Row>
      <Row justify="center" style={marginBottom}>
        <Col>
          <Card.Meta
            title={item?.name}
            style={{ justifyContent: "center" }}
          ></Card.Meta>
          <Card.Meta
            description={item?.position}
            style={{ justifyContent: "center" }}
          ></Card.Meta>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Button type="primary" shape="round" onClick={()=>{}}>
            View Profile
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

CardProfileMini.defaultProps = {
  item: { name: "name", position: "position", img: "string" },
};

export default CardProfileMini;
