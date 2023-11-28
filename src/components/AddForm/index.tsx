import { Modal, InputNumber, Input, Button } from "antd";
import { FC } from "react";

export type Props = {
  open: boolean;
  onOk: VoidFunction;
  onCancel: VoidFunction;
};

export const AddForm: FC<Props> = ({ open, onOk, onCancel }) => {
  return (
    <Modal
      title={"Add Transaction"}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Button type="primary">MAIB</Button>
      <Button type="primary">Cars</Button>
      <InputNumber min={1} max={10} defaultValue={3} />
      <Input defaultValue="zametka" />
      <Button type="primary">Done</Button>
    </Modal>
  );
};
