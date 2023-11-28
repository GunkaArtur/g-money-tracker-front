import "./style.css";
import { Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AddForm } from "../AddForm";
import { useState } from "react";

const { Text } = Typography;

export const CategoryButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={"categoryButton__item"}>
      <Text className={"categoryButton__item__name"}>Cars</Text>
      <Button
        className={"button-item"}
        type="primary"
        shape="circle"
        size={"large"}
        icon={<PlusOutlined />}
        onClick={showModal}
      />
      <Text className={"categoryButton__item__count"}>6545$</Text>
      <AddForm open={isModalOpen} onCancel={handleCancel} onOk={handleOk} />
    </div>
  );
};
