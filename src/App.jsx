
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
<<<<<<< HEAD
import { Laptop } from "lucide-react";
import LaptopCarousel from "./Component/LaptopCarousel";
=======
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

>>>>>>> 8e8a0e2090e128401f41a19db731982e4505482e

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
<<<<<<< HEAD
      <div className="gap-4 flex flex-col items-center justify-center min-h-screen ">
        <Navbar />
        <LaptopCarousel />
      </div>
=======
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
>>>>>>> 8e8a0e2090e128401f41a19db731982e4505482e
    </>
  );
}

export default App;
