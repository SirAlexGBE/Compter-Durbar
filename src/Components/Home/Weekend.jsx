import React from "react";
import {Link} from "react-router-dom";
// import bannerImage from "../../assets/bannerimage.png"; // adjust path as needed

const WeekendDiscount = () => {
  return (
    <div className="flex flex-col justify-center items-start px-6 md:px-14 py-10 gap-4 md:gap-6 bg-white/80 dark:bg-black/50 w-full md:w-[854px] h-full isolate">
      <div className="flex flex-col justify-center items-start gap-2 z-0">
        <h2 className="text-[36px] md:text-[57px] leading-tight font-medium text-blue-500 dark:text-blue-400">Weekend Discount</h2>
        <p className="text-[18px] md:text-[28px] text-gray-600 dark:text-gray-300">Don’t miss the last opportunity.</p>
      </div>

      <Link to="/shop" className="absolute left-6 top-[128px] md:static">
        <button className="flex justify-center items-center px-6 py-3 md:px-5 md:py-3 gap-2 bg-[#83B8F5] rounded-full text-black text-[12px] md:text-[30px] font-normal hover:bg-blue-400 transition">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default WeekendDiscount;
