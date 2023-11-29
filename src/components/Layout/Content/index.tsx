import "./style.css";
import { CategoryButton } from "../../CategoryButton";
import { Pie } from "@ant-design/plots";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { AddForm } from "../../AddForm";
import { useState } from "react";
import { transactionsSlice } from "../../../redux/reducers/transactions";

export const Content = () => {
  const { categories } = useAppSelector((state) => state.categories);
  const { addTransaction } = transactionsSlice.actions;
  const dispatch = useAppDispatch();

  const data1 = categories.map((cat) => ({ type: cat.name, value: cat.value }));
  const config = {
    appendPadding: 10,
    data: data1,
    angleField: "value",
    colorField: "type",
    radius: 1,
    legend: false,
    innerRadius: 0.6,
  };

  const topLine = categories.length > 4 ? categories.slice(0, 4) : categories;
  const leftLine = categories.length > 6 ? categories.slice(4, 6) : categories;
  const rightLine = categories.length > 8 ? categories.slice(6, 8) : categories;
  const bottomLine = categories.slice(8, categories.length);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active, setActive] = useState({ from: "mainCount", to: "" });

  const handleClick = (id: string) => {
    const activeCat = categories.find((it) => it.id === id);

    setActive((state) => ({ ...state, to: activeCat?.name ?? "unknown" }));
    setIsModalOpen(true);
  };

  const handleOk = ({ value }: { value: number }) => {
    dispatch(
      addTransaction({
        id: "some",
        from: active.from,
        to: active.to,
        value: value,
      }),
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={"content"}>
      <div className={"top-line"}>
        <div className={"categoryButton__contaiter"}>
          {topLine.map(({ id, value, name }) => (
            <CategoryButton
              value={value}
              id={id}
              name={name}
              key={id}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
      <div className={"center-line"}>
        <div>
          {leftLine.map(({ id, value, name }) => (
            <CategoryButton
              value={value}
              id={id}
              name={name}
              key={id}
              onClick={handleClick}
            />
          ))}
        </div>
        <Pie {...config} />
        <div>
          {rightLine.map(({ id, value, name }) => (
            <CategoryButton
              value={value}
              id={id}
              name={name}
              key={id}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
      <div className={"bottom-line"}>
        <div className={"categoryButton__contaiter"}>
          {bottomLine.map(({ id, value, name }) => (
            <CategoryButton
              value={value}
              id={id}
              name={name}
              key={id}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
      <AddForm
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        from={active.from}
        to={active.to}
      />
    </div>
  );
};
