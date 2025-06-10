import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom";

import Footer from "./Components/Footer";
import Blog from "./Pages/Blog";
import BlogLanding from "./Pages/BlogLanding";
import ProductDescription from "./Pages/ProductDescription";

import Home from "./Pages/Home";

import About from "./Pages/About";

import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/Login";
import ResetPasswordPage from "./Components/Auth/Forget";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/bloglanding" element={<BlogLanding />} />
        <Route path="/productdescription" element={<ProductDescription />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="forget" element={<ForgetPasswordPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
