import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { GeneralInformation as GeneralInfoType } from "../../types";
import dayjs from "dayjs";

const { Text, Title } = Typography;

interface GeneralInformationProps {
  initialValues?: Partial<GeneralInfoType>;
}

const GeneralInformation: React.FC<GeneralInformationProps> = ({
  initialValues,
}) => {
  // 将日期转换为字符串显示
  const formatDate = (date: unknown) => {
    if (!date) return "-";
    if (dayjs.isDayjs(date)) {
      return date.format("YYYY-MM-DD HH:mm");
    }
    return String(date);
  };

  return (
    <div className="general-information section-container">
      <Card
        bordered={false}
        className="section-card"
        title={
          <Title level={5} className="section-title">
            General Information
          </Title>
        }
        headStyle={{ borderBottom: "1px solid #eaedf1" }}
      >
        <Row gutter={[24, 16]}>
          <Col span={8}>
            <div className="info-item">
              <Text
                type="secondary"
                style={{ display: "block", fontSize: "13px" }}
              >
                Project Name
              </Text>
              <Text strong style={{ fontSize: "14px" }}>
                {initialValues?.projectName || "-"}
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="info-item">
              <Text
                type="secondary"
                style={{ display: "block", fontSize: "13px" }}
              >
                Shipper
              </Text>
              <Text strong style={{ fontSize: "14px" }}>
                {initialValues?.shipper || "-"}
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="info-item">
              <Text
                type="secondary"
                style={{ display: "block", fontSize: "13px" }}
              >
                Est. Volume
              </Text>
              <Text strong style={{ fontSize: "14px" }}>
                {initialValues?.estVolume || "-"}
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="info-item">
              <Text
                type="secondary"
                style={{ display: "block", fontSize: "13px" }}
              >
                Offer Due Date
              </Text>
              <Text strong style={{ fontSize: "14px" }}>
                {formatDate(initialValues?.offerDueDate)}
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="info-item">
              <Text
                type="secondary"
                style={{ display: "block", fontSize: "13px" }}
              >
                Issue Date
              </Text>
              <Text strong style={{ fontSize: "14px" }}>
                {formatDate(initialValues?.issueDate)}
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="info-item">
              <Text
                type="secondary"
                style={{ display: "block", fontSize: "13px" }}
              >
                Price Term
              </Text>
              <Text strong style={{ fontSize: "14px" }}>
                {initialValues?.priceTerm || "-"}
              </Text>
            </div>
          </Col>
          <Col span={24}>
            <div className="info-item">
              <Text
                type="secondary"
                style={{ display: "block", fontSize: "13px" }}
              >
                Remark
              </Text>
              <Text style={{ fontSize: "14px" }}>
                {initialValues?.remark || "-"}
              </Text>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default GeneralInformation;
