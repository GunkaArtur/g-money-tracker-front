import { Modal, InputNumber, Input, Button } from "antd";
import { FC, useState } from "react";

export type Props = {
  open: boolean;
  onOk: ({ value }: { value: number }) => void;
  onCancel: VoidFunction;
  from: string;
  to: string;
};

export const AddForm: FC<Props> = ({ open, onOk, onCancel, from, to }) => {
  const [val, setVal] = useState<number>(0);

  return (
    <Modal title={"Add Transaction"} open={open}>
      <Button type="primary">{from}</Button>
      <Button type="primary">{to}</Button>
      <InputNumber value={val} onChange={(v) => setVal(v ?? 0)} />
      <Input defaultValue="zametka" />
      <Button type="primary" onClick={() => onOk({ value: val })}>
        Done
      </Button>
    </Modal>
  );
};
