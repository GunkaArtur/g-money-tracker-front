import "./style.css";
import { Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const CategoryButton = () => {
  return (
    <div className={"categoryButton__item"}>
      <Text className={"categoryButton__item__name"}>Cars</Text>
      <Button
        className={"button-item"}
        type="primary"
        shape="circle"
        size={"large"}
        icon={<PlusOutlined />}
      />
      <Text className={"categoryButton__item__count"}>6545$</Text>
    </div>
  );
};
