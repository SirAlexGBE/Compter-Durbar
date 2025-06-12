import React from "react";

const WeekendDiscount = () => {
  return (
    <div className="relative w-full max-w-[1380px] h-[294px] mx-auto bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Background Image - you'll need to add your banner-4.png */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5" style={{backgroundImage: "url(/path-to-your/banner-4.png)"}}></div>

      <div className="relative flex items-center justify-between h-full px-14 py-11">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start gap-5 w-[854px]">
          <div className="flex flex-col gap-5">
            <h2 className="text-[57px] leading-[64px] font-medium text-[#0082FF] dark:text-blue-400 tracking-[-0.25px]">Weekend Discount</h2>
            <p className="text-[28px] leading-[36px] font-medium text-[#666666] dark:text-gray-400 w-[720px]">Don't Miss the last opportunity.</p>
          </div>

          <button className="flex justify-center items-center px-5 py-5 bg-[#83B8F5] hover:bg-[#6BA3E8] dark:bg-blue-500 dark:hover:bg-blue-600 text-black dark:text-white rounded-[30px] text-[32px] leading-[32px] font-normal transition-colors duration-200 w-[214px] h-[68px]">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block flex-shrink-0">
          <div className="relative">
            <img src="/HPVictus.png" alt="Gaming Laptop" className="w-80 h-60 object-cover rounded-lg shadow-xl" />
          </div>
        </div>
      </div>

      {/* Mobile Image - shown below content on small screens */}
      <div className="lg:hidden absolute bottom-4 right-4">
        <img src="/HPVictus.png" alt="Gaming Laptop" className="w-48 h-32 object-cover rounded-lg shadow-lg opacity-80" />
      </div>
    </div>
  );
};

export default WeekendDiscount;
