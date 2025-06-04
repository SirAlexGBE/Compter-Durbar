import React from "react";

import LaptopCarousel from "../Component/LaptopCarousel";
import Footer from "../Components/Footer";
import News from "../Components/News";

const Home = () => {
  return (
    <>
      <LaptopCarousel />

      {/* <MacBookProductListing /> */}
      <News />
      <LaptopCarousel />
      <Footer />
    </>
  );
};

export default Home;
