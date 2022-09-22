import { Button, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Page404: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Row
        align="middle"
        style={{ height: "100vh", padding: 20 ,flexDirection:'column'}}
      >
        <p style={{ fontSize: "5em", fontWeight: "bold", color: "gray" }}>
          404
        </p>
        <p style={{ fontSize: "4em", fontWeight: "bold", color: "gray" }}>
          Page Not Found
        </p>
        <Button onClick={() =>navigate(-1)}>
          go back
        </Button>
      </Row>
    </>
  );
};

export default Page404;
