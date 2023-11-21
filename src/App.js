import "./App.css";
import { useEffect } from "react";
import { Button, Typography } from "antd";
import { useTg } from "./hooks/useTg";

const { Title } = Typography;

function App() {
  const { tg, user, onClose } = useTg();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Title>Hello {user?.username}</Title>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
}

export default App;
