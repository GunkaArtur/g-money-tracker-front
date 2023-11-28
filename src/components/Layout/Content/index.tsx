// import { Progress } from "antd";
import "./style.css";
import { CategoryButton } from "../../CategoryButton";
import { Pie } from "@ant-design/plots";

export const Content = () => {
  const data = [
    {
      type: "分类一",
      value: 27,
    },
    {
      type: "分类二",
      value: 25,
    },
    {
      type: "分类三",
      value: 18,
    },
    {
      type: "分类四",
      value: 15,
    },
    {
      type: "分类五",
      value: 10,
    },
    {
      type: "其他",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    legend: false,
    innerRadius: 0.6,
  };
  return (
    <div className={"content"}>
      <div className={"top-line"}>
        <div className={"categoryButton__contaiter"}>
          {[1, 2, 3, 4].map(() => (
            <CategoryButton />
          ))}
        </div>
      </div>
      <div className={"center-line"}>
        <div>
          <CategoryButton />
          <CategoryButton />
        </div>
        {/*<Progress type="circle" percent={75} />*/}
        <Pie {...config} />
        <div>
          <CategoryButton />
          <CategoryButton />
        </div>
      </div>
      <div className={"bottom-line"}>
        <div className={"categoryButton__contaiter"}>
          {[1, 2, 3, 4].map(() => (
            <CategoryButton />
          ))}
        </div>
      </div>
    </div>
  );
};
