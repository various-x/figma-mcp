import React from "react";
import GeneralInformation from "./GeneralInformation";
import LineItems from "./LineItems";
import Attachment from "./Attachment";
import Surcharge from "./Surcharge";
import DataRequirement from "./DataRequirement";
import {
  GeneralInformation as GeneralInfoType,
  LineItem,
  Attachment as AttachmentType,
} from "../../types";
import dayjs from "dayjs";

const TenderContent: React.FC = () => {
  // Mock data
  const generalInfo: Partial<GeneralInfoType> = {
    projectName: "Ocean freight Y2023",
    shipper: "INVISTA CHINA",
    estVolume: "1000 TEU",
    offerDueDate: dayjs("2020-05-01 23:59"),
    issueDate: dayjs("2020-05-01 23:59"),
    priceTerm: "2020-05-01 - 2023-09-16",
    remark: "This is a projectxxxxxxxxxxxxxx",
  };

  const lineItems: LineItem[] = [
    {
      key: "1",
      originPort: "Shanghai",
      destinationPort: "Copenhagen",
      containerType: "20GP",
      commodity: "paper",
      commodityDescription: "paper",
      volume: 100,
      selected: true,
    },
    {
      key: "2",
      originPort: "Shanghai",
      destinationPort: "Copenhagen",
      containerType: "40GP",
      commodity: "paper",
      commodityDescription: "paper",
      volume: 123,
    },
    {
      key: "3",
      originPort: "Shanghai",
      destinationPort: "Copenhagen",
      containerType: "40GP",
      commodity: "paper",
      commodityDescription: "paper",
      volume: 123,
    },
    {
      key: "4",
      originPort: "Shanghai",
      destinationPort: "Copenhagen",
      containerType: "40GP",
      commodity: "paper",
      commodityDescription: "paper",
      volume: 100,
    },
    {
      key: "5",
      originPort: "Shanghai",
      destinationPort: "Copenhagen",
      containerType: "40GP",
      commodity: "paper",
      commodityDescription: "paper",
      volume: 100,
    },
    {
      key: "6",
      originPort: "Shanghai",
      destinationPort: "Copenhagen",
      containerType: "40GP",
      commodity: "paper",
      commodityDescription: "paper",
      volume: 100,
    },
    {
      key: "7",
      originPort: "Shanghai",
      destinationPort: "Copenhagen",
      containerType: "40GP",
      commodity: "paper",
      commodityDescription: "paper",
      volume: 100,
    },
    {
      key: "8",
      originPort: "Shanghai",
      destinationPort: "Copenhagen",
      containerType: "40GP",
      commodity: "paper",
      commodityDescription: "paper",
      volume: 100,
    },
  ];

  const attachments: AttachmentType[] = [
    {
      key: "1",
      name: "Shanghai",
      date: "2023.02.03",
    },
    {
      key: "2",
      name: "Shanghai",
      date: "2023.04.05",
    },
    {
      key: "3",
      name: "Shanghai",
      date: "123123123",
    },
  ];

  return (
    <div className="tender-content">
      <GeneralInformation initialValues={generalInfo} />
      <LineItems dataSource={lineItems} />
      <Attachment dataSource={attachments} />
      <Surcharge />
      <DataRequirement />
    </div>
  );
};

export default TenderContent;
