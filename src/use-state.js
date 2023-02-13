import React, { useState } from "react";
import ReactDOM from "react-dom/client";
const App = () => {
  return (
    <div>
      <HoockSwitcher />
    </div>
  );
};

const HoockSwitcher = () => {
  const [color, setColor] = useState("gray");
  const [fontSize, setFontSize] = useState(33);
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: color,
        fontSize: `${fontSize}px`,
      }}
    >
      Hello world
      <button onClick={() => setColor("gray")}>Dark</button>
      <button onClick={() => setColor("white")}>Light</button>
      <button onClick={() => setFontSize((s) => s + 1)}>+</button>
      <button onClick={() => setFontSize((s) => s - 1)}>-</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
