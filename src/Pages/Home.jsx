import React from "react";
import HeroSection from "../Components/Home/HeroSection";

import DealOfTheDay from "../Components/Home/DealOfTheDay";
import NewProducts from "../Components/Home/NewProducts";
import ProductCategories from "../Components/Home/ProductCatogories";
import Advertise from "../Components/Home/Advertise";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DealOfTheDay />
      <NewProducts />

      <ProductCategories />
    </>
  );
};

export default Home;
