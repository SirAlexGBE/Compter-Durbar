import React from "react";

import Navbar from "../Component/Navbar";
import LaptopCarousel from "../Component/LaptopCarousel";

import News from "../Components/News";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <News />
      <LaptopCarousel />

      {/* <MacBookProductListing /> */}

      <Footer />
    </>
  );
};

export default Home;
