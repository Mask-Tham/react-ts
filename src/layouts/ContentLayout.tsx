import React, { useState } from "react";
import { Button, Col, Dropdown, Image, Layout, Menu, Row } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { logout } from "../store/slices/auth/auth.slice";
import { useAppDispatch } from "../store/store";
import SideBarNav, { FooterSidebar } from "./components/sidebarNav/SideBarNav";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
// import './ContentLayout.scss'
import './ContentLayoutStyle.scss'
const { Header, Footer, Sider, Content } = Layout;

const HeaderNav = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const MenuUser = (
    <Menu style={{ width: 200 }}>
      <Menu.Item icon={<MdDarkMode />} onClick={() => {}}>
        Theme
      </Menu.Item>
      <Menu.Item
        icon={<LogoutOutlined />}
        onClick={() => {
          dispatch(logout()).then(() => {
            navigate("/");
          });
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        background: "#fff",
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <Row justify="space-between">
        <Col>
          <Image height={60} src="/logo192.png" preview={false} />
          <span
            style={{ marginLeft: 20, fontSize: "1.5em", fontWeight: "bold" }}
          >
            My React
          </span>
        </Col>
        <Col>
          <Dropdown
            overlay={MenuUser}
            placement="bottomRight"
            trigger={["click"]}
            arrow={{ pointAtCenter: true }}
          >
            <Button shape="circle" type="text" icon={<UserOutlined />}></Button>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

const ContentLayout: React.FC = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <HeaderNav></HeaderNav>
      <Layout style={{ marginTop: 64 }}>
        <Sider
          style={{
            height: "calc(100vh - 54px)",
            background: "#fff",
            overflow: "auto",
            position: "fixed",
            left: 0,
            top: 64,
            bottom: 0,
          }}
          
        >
          <SideBarNav></SideBarNav>
          <FooterSidebar></FooterSidebar>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ padding: 20,overflow: "auto", }} className="sidebar">
            {/* component content in outlet*/}
            <Outlet />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ContentLayout;
