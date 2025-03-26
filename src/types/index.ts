// 定义海运投标系统的类型
import { Dayjs } from 'dayjs';

// 项目基本信息
export interface GeneralInformation {
  projectName: string;
  shipper: string;
  estVolume: string;
  offerDueDate: string | Dayjs;
  issueDate: string | Dayjs;
  priceTerm: string;
  remark: string;
}

// 航线项目
export interface LineItem {
  key: string;
  originPort: string;
  destinationPort: string;
  containerType: string;
  commodity: string;
  commodityDescription: string;
  volume: number;
  selected?: boolean;
}

// 附件
export interface Attachment {
  key: string;
  name: string;
  date: string;
}

// 允许的附加费用类型
export type SurchargeType = "repairs" | "office" | "operation" | "staff";

// 数据要求类型
export type DataRequirementType =
  | "lineItem"
  | "origin"
  | "destination"
  | "originPort";
