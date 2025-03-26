import React from "react";
import { List, Button, Typography, Card, Space } from "antd";
import { PaperClipOutlined, DownloadOutlined } from "@ant-design/icons";
import { Attachment as AttachmentType } from "../../types";

const { Title } = Typography;

interface AttachmentProps {
  dataSource: AttachmentType[];
}

const Attachment: React.FC<AttachmentProps> = ({ dataSource }) => {
  return (
    <div className="attachment section-container">
      <Card
        bordered={false}
        className="section-card"
        title={
          <Title level={5} className="section-title">
            Attachment
          </Title>
        }
        headStyle={{ borderBottom: "1px solid #eaedf1" }}
      >
        <List
          itemLayout="horizontal"
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  type="link"
                  icon={<DownloadOutlined />}
                  style={{ color: "#1890ff", fontWeight: 500 }}
                >
                  下载
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "#e6f7ff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PaperClipOutlined style={{ color: "#1890ff" }} />
                  </div>
                }
                title={<span style={{ fontWeight: 500 }}>{item.name}</span>}
                description={
                  <Space>
                    <span style={{ color: "#8c8c8c", fontSize: "12px" }}>
                      {item.date}
                    </span>
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Attachment;
