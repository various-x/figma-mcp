import React from "react";
import { Typography, Card, Row, Col } from "antd";
import { DataRequirementType } from "../../types";

const { Title, Text } = Typography;

interface DataRequirementProps {
  value?: DataRequirementType;
}

const DataRequirement: React.FC<DataRequirementProps> = () => {
  const requirementItems = [
    { key: "lineItem", label: "Line Item Effective" },
    { key: "origin", label: "Origin Inland Transit Time" },
    { key: "destination", label: "Destination Terminal" },
    { key: "originPort", label: "Origin Port Free Days (Demurrage)" },
  ];

  return (
    <div className="data-requirement section-container">
      <Card
        bordered={false}
        className="section-card"
        title={
          <Title level={5} className="section-title">
            Data Requirement
          </Title>
        }
        headStyle={{ borderBottom: "1px solid #eaedf1" }}
      >
        <Row gutter={[24, 16]}>
          {requirementItems.map((item) => (
            <Col span={8} key={item.key}>
              <div className="dot-item">
                <div className="blue-dot" />
                <Text style={{ fontSize: "14px" }}>{item.label}</Text>
              </div>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default DataRequirement;
