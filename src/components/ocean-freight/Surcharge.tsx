import React from "react";
import { Typography, Card, Row, Col } from "antd";
import { SurchargeType } from "../../types";

const { Title, Text } = Typography;

interface SurchargeProps {
  value?: SurchargeType;
}

const Surcharge: React.FC<SurchargeProps> = () => {
  const surchargeItems = [
    { key: "repairs", label: "Repairs And Maintenance" },
    { key: "office", label: "Office Space Rental" },
    { key: "operation", label: "Operation Recovery Surcharge" },
    { key: "staff", label: "Other Staff Cost" },
  ];

  return (
    <div className="surcharge section-container">
      <Card
        bordered={false}
        className="section-card"
        title={
          <Title level={5} className="section-title">
            Allowable Surcharge
          </Title>
        }
        headStyle={{ borderBottom: "1px solid #eaedf1" }}
      >
        <Row gutter={[24, 16]}>
          {surchargeItems.map((item) => (
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

export default Surcharge;
