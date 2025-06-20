import React from "react";
import HeroSection from "../Components/Home/HeroSection";

import DealOfTheDay from "../Components/Home/DealOfTheDay";
import NewProducts from "../Components/Home/NewProducts";
import ProductCategories from "../Components/Home/ProductCatogories";
import NewsletterSubscription from "../Components/Home/Newsletter";
import WeekendDiscount from "../Components/Home/Weekend";

const Home = () => {
  return (
    <>
      <div className="dark:bg-black">
        <HeroSection />
        <DealOfTheDay />
        <NewProducts />
        <ProductCategories />
        <WeekendDiscount />
        <NewsletterSubscription />
      </div>
    </>
  );
};

export default Home;
