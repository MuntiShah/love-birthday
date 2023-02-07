import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Text from "./Components/Text";

function App() {
  const [mode, setMode] = useState("dark");

  const handleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#f0a6ca";
      // document.title = "Love App";
      // document.body.style.color = "#9c89b8";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#9c89b8";
      // document.body.style.color = "#f0a6ca";
    }
  };
  return (
    <div className="App">
      <Navbar handleMode={handleMode} mode={mode} />
      <Text mode={mode} />
      <Home />
    </div>
  );
}

export default App;
