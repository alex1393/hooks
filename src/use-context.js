import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
const MyContext = React.createContext();
const App = () => {
  return (
    <MyContext.Provider value={"Hello World"}>
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  const value = useContext(MyContext);
  return <p>{value}</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
