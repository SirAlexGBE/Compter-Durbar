import React from "react";
import Highlight from "../Components/BlogLanding/Highlight";
import Introduction from "../Components/BlogLanding/Intrduction";
import LaptopCarousel from "../Components/Blog/LaptopCarousel";

const BlogLanding = () => {
  return (
    <>
      <div className="dark:bg-black">
        <Highlight />
        <Introduction />
        <LaptopCarousel />
      </div>
    </>
  );
};

export default BlogLanding;
