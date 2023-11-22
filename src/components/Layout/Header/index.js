import "./style.css";
import { Button, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const Header = () => {
  return (
    <div className={"header"}>
      <div className={"title"}>
        <Text className={"title-info"}>All accounts 1 000 000$</Text>
      </div>
      <div className={"date-block"}>
        <Button type="primary" shape="circle" icon={<LeftOutlined />} />
        <Text className={"date-info"}>20.12.2023</Text>
        <Button type="primary" shape="circle" icon={<RightOutlined />} />
      </div>
    </div>
  );
};
