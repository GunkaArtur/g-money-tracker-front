import "./App.css";
import { useEffect } from "react";
import { Button, Typography, Progress } from "antd";
import { useTg } from "./hooks/useTg";

const { Title } = Typography;

function App() {
  const { tg, onClose, user } = useTg();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Title>Hello {user?.username ?? "Unknown"}</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, cum
        debitis enim error facere molestiae pariatur placeat possimus quae
        reprehenderit temporibus? Asperiores beatae, ducimus et excepturi fuga
        laborum nemo nihil nisi non nulla numquam obcaecati pariatur
        perspiciatis provident quibusdam quod similique, sint soluta tempora
        tempore ullam veniam voluptas. A aliquid animi architecto consequatur
        deleniti doloribus eligendi fugit in incidunt inventore, minus repellat
        tempore totam. Accusamus alias atque aut dignissimos eius esse est
        expedita id illum nihil numquam, porro repellendus sapiente vel
        voluptatum. Consequatur corporis culpa error exercitationem fuga illum
        laudantium, minus nobis officiis perspiciatis quisquam, suscipit tempora
        totam. Eius.
      </p>
      <Progress type="circle" percent={75} />
      <Button danger onClick={onClose}>
        Close
      </Button>
    </div>
  );
}

export default App;
