import React from "react";

import Navbar from "../Component/Navbar";
import LaptopCarousel from "../Component/LaptopCarousel";
import Footer from "../Components/Footer";
import News from "../Components/News";

const Home = () => {
  return (
    <>
      <LaptopCarousel />

      {/* <MacBookProductListing /> */}
      <News />
      <Footer />
    </>
  );
};

export default Home;
