import React, { useState } from "react";
import { Table, Checkbox, Typography, Card } from "antd";
import type { ColumnsType } from "antd/es/table";
import { LineItem } from "../../types";

const { Title } = Typography;

interface LineItemsProps {
  dataSource: LineItem[];
  onChange?: (selectedRowKeys: React.Key[]) => void;
}

const LineItems: React.FC<LineItemsProps> = ({ dataSource, onChange }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const columns: ColumnsType<LineItem> = [
    {
      title: "",
      dataIndex: "selected",
      width: 40,
      render: (_, record) => (
        <Checkbox
          checked={selectedRowKeys.includes(record.key)}
          onChange={(e) => {
            const newSelectedRowKeys = e.target.checked
              ? [...selectedRowKeys, record.key]
              : selectedRowKeys.filter((key) => key !== record.key);
            setSelectedRowKeys(newSelectedRowKeys);
            onChange?.(newSelectedRowKeys);
          }}
        />
      ),
    },
    {
      title: "Origin Port",
      dataIndex: "originPort",
      width: "15%",
    },
    {
      title: "Destination Port",
      dataIndex: "destinationPort",
      width: "15%",
    },
    {
      title: "箱型",
      dataIndex: "containerType",
      width: "10%",
    },
    {
      title: "Commodity",
      dataIndex: "commodity",
      width: "15%",
    },
    {
      title: "Description",
      dataIndex: "commodityDescription",
      width: "25%",
    },
    {
      title: "Volume",
      dataIndex: "volume",
      width: "10%",
      align: "right",
    },
  ];

  return (
    <div className="line-items section-container">
      <Card
        bordered={false}
        className="section-card"
        title={
          <Title level={5} className="section-title">
            Line Items
          </Title>
        }
        headStyle={{ borderBottom: "1px solid #eaedf1" }}
        bodyStyle={{ padding: "8px 0 0 0" }}
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          size="middle"
          rowClassName={(record) =>
            selectedRowKeys.includes(record.key) ? "ant-table-row-selected" : ""
          }
          className="custom-table"
        />
      </Card>
    </div>
  );
};

export default LineItems;
