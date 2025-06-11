import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import ProductsOnSale from "../Components/Home/ProductOnsale";
import DealOfTheDay from "../Components/Home/DealOfTheDay";
import NewProducts from "../Components/Home/NewProducts";
import ProductCategories from "../Components/Home/ProductCatogories";
import NewsletterSubscription from "../Components/Home/Newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DealOfTheDay />
      <NewProducts />
      <ProductCategories />
      {/* <ProductsOnSale /> */}
      <NewsletterSubscription />
    </>
  );
};

export default Home;
