import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </div>
      <div>
        <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
      </div>
    </>
  );
}

export default App;
