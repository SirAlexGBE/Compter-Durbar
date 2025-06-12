import React from "react";

const WeekendDiscount = () => {
  return (
    <div className="relative w-full   mx-auto bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="relative flex items-center justify-between h-full px-4 sm:px-8 lg:px-14 py-6 sm:py-8 lg:py-11">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start gap-3 sm:gap-4 lg:gap-5 flex-1 lg:w-[854px]">
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[57px] leading-tight lg:leading-[64px] font-medium text-[#0082FF] dark:text-blue-400 tracking-[-0.25px]">Weekend Discount</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-[28px] leading-relaxed lg:leading-[36px] font-medium text-[#666666] dark:text-gray-400 lg:w-[720px]">
              Don't Miss the last opportunity.
            </p>
          </div>

          <button className="flex justify-center items-center px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-5 bg-[#83B8F5] hover:bg-[#6BA3E8] dark:bg-blue-500 dark:hover:bg-blue-600 text-black dark:text-white rounded-[30px] text-sm sm:text-base md:text-lg lg:text-[32px] leading-tight lg:leading-[32px] font-normal transition-colors duration-200  lg:w-[214px] h-[40px] sm:h-[48px] lg:h-[68px]">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0 ml-2 sm:ml-4 lg:ml-0">
          <img src="/HPVictus.png" alt="Gaming Laptop" className="w-32 h-24 sm:w-48 sm:h-40 md:w-64 md:h-48 lg:w-80 lg:h-60 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default WeekendDiscount;
