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
          size={"large"}
          icon={<CreditCardOutlined />}
        />
        <Button
          className={"button-item"}
          type="primary"
          shape="circle"
          size={"large"}
          icon={<PieChartOutlined />}
        />
        <Button
          className={"button-item"}
          type="primary"
          shape="circle"
          size={"large"}
          icon={<FileTextOutlined />}
        />
        <Button
          className={"button-item"}
          type="primary"
          shape="circle"
          size={"large"}
          icon={<DashboardOutlined />}
        />
        <Button
          className={"button-item"}
          type="primary"
          shape="circle"
          size={"large"}
          icon={<BarChartOutlined />}
        />
      </div>
    </div>
  );
};
