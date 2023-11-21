import "./App.css";
import { useEffect } from "react";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const handleClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <p>Gunya</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
}

export default App;
