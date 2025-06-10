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

import Home from "./Pages/Home";

import About from "./Pages/About";

import SignUpPage from "./Pages/SignUp/SignUpPage3";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/bloglanding' element={<BlogLanding />} />
        <Route path='/productdescription' element={<ProductDescription />} />
        <Route path='/signup' element={<SignUpPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
