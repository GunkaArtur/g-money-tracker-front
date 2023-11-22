import "./App.css";
import { useEffect } from "react";
import { Button } from "antd";
import { useTg } from "./hooks/useTg";
import { Header } from "./components/Layout/Header";
import { Content } from "./components/Layout/Content";
import { Footer } from "./components/Layout/Footer";

function App() {
  const { tg, onClose, user } = useTg();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />

      <Button danger onClick={onClose}>
        Close
      </Button>
    </div>
  );
}

export default App;
