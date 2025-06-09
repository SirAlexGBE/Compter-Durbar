import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import ProductsOnSale from "../Components/Home/ProductOnsale";
import DealOfTheDay from "../Components/Home/DealOfTheDay";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DealOfTheDay />
      <ProductsOnSale />
    </>
  );
};

export default Home;
