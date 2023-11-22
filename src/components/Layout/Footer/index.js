import { Button } from "antd";
import {
  BarChartOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  FileTextOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import "./style.css";

export const Footer = () => {
  return (
    <div className={"footer"}>
      <div className={"button-list"}>
        <Button
          className={"button-item"}
          type="primary"
          shape="circle"
          icon={<CreditCardOutlined />}
        />
        <Button
          className={"button-item"}
          type="primary"
          shape="circle"
          icon={<PieChartOutlined />}
        />
        <Button
          className={"button-item"}
          type="primary"
          shape="circle"
          icon={<FileTextOutlined />}
        />
        <Button
          className={"button-item"}
          type="primary"
          shape="circle"
          icon={<DashboardOutlined />}
        />
        <Button
          className={"button-item"}
          type="primary"
          shape="circle"
          icon={<BarChartOutlined />}
        />
      </div>
    </div>
  );
};
