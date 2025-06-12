import React from "react";
import HeroSection from "../Components/Home/HeroSection";

import DealOfTheDay from "../Components/Home/DealOfTheDay";
import NewProducts from "../Components/Home/NewProducts";
import ProductCategories from "../Components/Home/ProductCatogories";
import Newsletter from "../Components/Home/Newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DealOfTheDay />
      <NewProducts />
      <ProductCategories />
      <Newsletter />
    </>
  );
};

export default Home;
