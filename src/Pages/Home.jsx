import React from "react";

import Navbar from "../Component/Navbar";
import LaptopCarousel from "../Component/LaptopCarousel";
import Footer from "../Component/Footer";
import News from "../Components/News";
import Footer from "../Components/Footer";


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
