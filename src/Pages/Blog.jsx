import React from "react";
import LaptopCarousel from "../Components/Blog/LaptopCarousel";
import News from "../Components/Blog/News";
import DealOfTheDay from "../Components/Home/DealOfTheDay";

const Blog = () => {
  return (
    <>
      <div className="dark:bg-black text-white">
        <News />
        <LaptopCarousel />
      </div>
    </>
  );
};

export default Blog;
