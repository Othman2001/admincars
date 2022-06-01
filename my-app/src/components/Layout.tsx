import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Row, Col, Button } from "antd";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  IdcardOutlined,
  ShopOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];
function LayoutComponent({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as unknown as MenuItem;
  }
  const items: MenuItem[] = [
    getItem("dashboard", "1", <PieChartOutlined />),
    getItem("Mange Users", "2", <DesktopOutlined />),
    getItem("Drivers", "3", <IdcardOutlined />),
    getItem("Workshops", "4", <ShopOutlined />),
  ];

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#265A60" }}>
      <Sider
        style={{
          backgroundColor: "#265A60",
          minHeight: "100vh",
        }}
        collapsed={true}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          style={{
            backgroundColor: "#265A60",
            color: "#fff",
          }}
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <Menu.Item key="1">
            <Link to="/">
              <PieChartOutlined />
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
          style={{ padding: 0, backgroundColor: "#ffffff" }}
        >
          {/* <Row>
            <Col
              style={{
                marginLeft: 30,
                fontSize: 24,
              }}
              span={20}
            >
              Car Saviors
            </Col>
            <Col span={1}>
              <Button
                style={{
                  backgroundColor: "#265A60",
                  color: "#fff",
                }}
              >
                Log Out
              </Button>
            </Col>
          </Row> */}
        </Header>
        <Content style={{ margin: "0 16px" }}>
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
