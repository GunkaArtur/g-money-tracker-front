import { Progress } from "antd";
import "./style.css";
import { CategoryButton } from "../../CategoryButton";

export const Content = () => {
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
        <Progress type="circle" percent={75} />
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
