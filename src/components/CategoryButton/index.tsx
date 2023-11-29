import "./style.css";
import { Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { FC } from "react";

const { Text } = Typography;

export type Props = {
  id: string;
  name: string;
  value: number;
  onClick: (id: string) => void;
};

export const CategoryButton: FC<Props> = ({ id, name, value, onClick }) => {
  return (
    <div className={"categoryButton__item"}>
      <Text className={"categoryButton__item__name"}>{name}</Text>
      <Button
        className={"button-item"}
        type="primary"
        shape="circle"
        size={"large"}
        icon={<PlusOutlined />}
        onClick={() => onClick(id)}
      />
      <Text className={"categoryButton__item__count"}>{value}$</Text>
    </div>
  );
};
