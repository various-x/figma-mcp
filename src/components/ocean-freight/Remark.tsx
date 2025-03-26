import React from "react";
import { Typography, Card } from "antd";
import { RemarkType } from "../../types";

const { Title, Paragraph } = Typography;

interface RemarkProps {
  value?: RemarkType;
}

const Remark: React.FC<RemarkProps> = () => {
  return (
    <div className="remark section-container">
      <Card
        bordered={false}
        className="section-card"
        title={
          <Title level={5} className="section-title">
            Remark
          </Title>
        }
        headStyle={{ borderBottom: "1px solid #eaedf1" }}
      >
        <Paragraph style={{ fontSize: "14px" }}>
          This agreement is entered into on April 1st, 2023 between the Ocean Carrier and the Shipper for the
          transportation of goods as described in the General Information section. All terms and conditions apply as per
          the carrier's standard bill of lading. Any disputes arising from this agreement shall be resolved through
          arbitration in accordance with the rules of the Maritime Arbitration Association.
        </Paragraph>
      </Card>
    </div>
  );
};

export default Remark; 