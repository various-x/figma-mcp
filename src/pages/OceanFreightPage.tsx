import React from "react";
import { Typography } from "antd";
import TabComponent from "../components/ocean-freight/TabComponent";
import MainLayout from "../layouts/MainLayout";

const { Title } = Typography;

const OceanFreightPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="ocean-freight-page">
        <Title level={4} className="page-title">
          Ocean Freight Y2023-Released
        </Title>
        <TabComponent />
      </div>
    </MainLayout>
  );
};

export default OceanFreightPage;
