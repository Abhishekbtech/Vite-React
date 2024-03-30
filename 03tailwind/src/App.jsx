import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./compond/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black">Hello i am using css in Vite</h1>
      <br/>
      <Card modelName = "fun"/>
      <br/>
      <Card />
    </>
  );
}

export default App;
