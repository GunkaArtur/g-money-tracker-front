import { Progress } from "antd";
import "./style.css";

export const Content = () => {
  return (
    <div className={"content"}>
      <Progress type="circle" percent={75} />
    </div>
  );
};
