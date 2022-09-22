import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Spin,
} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { authSelect, login } from "../../store/slices/auth/auth.slice";
import { useSelector } from "react-redux";
import { getCookie, saveCookie } from "../../services/cookies";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const userData = useSelector(authSelect);


  const onFinish = async (values: any) => {
    console.log("Success:", values);
    let res = await dispath(login(values)).unwrap()
    saveCookie('userData',res)
    navigate('/home')
    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  let initLogin = {
    password: "mask",
    username: "mask",
  };

  return (
    <Row
      justify="space-around"
      align="middle"
      style={{ height: "100vh", background: "#ececec" }}
    >
      <Col>
        <Spin spinning={userData.loading}>
          <Card title="Login">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={initLogin}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              {/* <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Spin>
      </Col>
    </Row>
  );
};

export default Login;
