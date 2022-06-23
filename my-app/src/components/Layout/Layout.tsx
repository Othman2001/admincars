import React, { useState } from "react";
import { Button, Col, Layout, Menu, Row } from "antd";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  IdcardOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import logo from "./logo.png";
import "./navbar.css";
import { useActions } from "../../services/config";

const { Header, Content, Footer, Sider } = Layout;

function LayoutComponent({
  children,
  selectedKey,
}: {
  children: React.ReactNode;
  selectedKey: string;
}) {
  const {
    admin: { signOut },
  } = useActions();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="nav"
        style={{
          backgroundColor: "#fff",
          borderRadius: 30,
        }}
        collapsed={true}
      >
        <Menu
          style={{
            backgroundColor: "#fff",
            color: "#fff",
            borderRadius: 30,
            marginTop: 50,
          }}
          defaultSelectedKeys={[selectedKey]}
          mode="inline"
        >
          <Menu.Item key="1">
            <Link to="/">
              <PieChartOutlined width="300px" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/users">
              <DesktopOutlined />
              <span>Mange Users</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/Drivers">
              <IdcardOutlined />
              <span>Drivers</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/Workshops">
              <ShopOutlined />
              <span>Workshops</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, backgroundColor: "#fff" }}
        >
          <Row>
            <Col span={20}>
              <img
                src={logo}
                alt="logo"
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 40,
                }}
              />
            </Col>
            <Col span={4}>
              <Button onClick={signOut}> Log Out </Button>
            </Col>
          </Row>
        </Header>
        <Content className="layout">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#265A60",
            color: "#fff",
          }}
        >
          Car Saviors 2022
        </Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutComponent;
