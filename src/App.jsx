import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import Blog from "./Pages/Blog";
import BlogLanding from "./Pages/BlogLanding";
import ProductDescription from "./Pages/ProductDescription";
import About from "./Pages/ABout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/bloglanding' element={<BlogLanding />} />
        <Route path='/productdescription' element={<ProductDescription />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
