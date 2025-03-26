import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import TenderContent from "./TenderContent";

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tender");

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  const handleTabClick = (key: string) => {
    setActiveTab(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "tender",
      label: "Tender",
      children: <TenderContent />,
    },
    {
      key: "quote",
      label: "Quote",
      children: <div>Quote content will be implemented in the future.</div>,
    },
    {
      key: "mqc",
      label: "MQC",
      children: <div>MQC content will be implemented in the future.</div>,
    },
  ];

  return (
    <Tabs
      activeKey={activeTab}
      items={items}
      onChange={onChange}
      onTabClick={handleTabClick}
      className="ocean-freight-tabs"
      tabBarStyle={{ marginBottom: 24 }}
    />
  );
};

export default TabComponent;
