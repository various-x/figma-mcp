import React from "react";
import { Layout, Input, Space } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  DownloadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Logo from "../assets/images/logo";

const { Header, Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#fff",
          padding: "0 24px",
          borderBottom: "1px solid #f0f0f0",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        }}
      >
        <div className="logo" style={{ marginRight: "auto" }}>
          <Logo />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input
            placeholder="search"
            prefix={<SearchOutlined />}
            style={{ width: 200, marginRight: "20px" }}
          />
          <Space size={16}>
            <BellOutlined style={{ fontSize: "18px", color: "#1890ff" }} />
            <DownloadOutlined style={{ fontSize: "18px" }} />
            <UserOutlined
              style={{
                fontSize: "18px",
                background: "#1890ff",
                color: "white",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
          </Space>
        </div>
      </Header>
      <Content style={{ padding: "0 24px", background: "#f5f7fa" }}>
        <div
          style={{
            background: "#fff",
            padding: "24px",
            margin: "24px 0",
            borderRadius: "8px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayout;
