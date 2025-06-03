import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import { Laptop } from "lucide-react";
import LaptopCarousel from "./Component/LaptopCarousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="gap-4 flex flex-col items-center justify-center min-h-screen ">
        <Navbar />
        <LaptopCarousel />
      </div>
    </>
  );
}

export default App;
