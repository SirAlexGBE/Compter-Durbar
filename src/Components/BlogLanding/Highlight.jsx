import React from "react";

const Highlight = () => {
  const posts = [
    {
      title:
        "Buying a New Laptop?-We have prepared the ultimate buying guide for you",
      date: "December 07, 2023",
    },
    {
      title: "Best Gaming Laptop under 1.5Lakh in Nepal",
      date: "September 02, 2024",
    },
    {
      title: "Acer Nitro 5 Price in Nepal-prices you need to know Today!",
      date: "October 07, 2024",
    },
    {
      title: "Acer Aspire 7 vs Acer Aspire 5 2023",
      date: "January 06, 2023",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6  justify-between items-center p-6  bg-white dark:bg-black pl-10 mt-5 ">
      {/* Left Card - Main Feature Image */}
      <div className="bg-[#fff6f6]  rounded-xl  shadow-md ">
        <img
          src="image.png" // Replace with your actual image path
          alt="Best budget laptops"
          className="rounded-lg   w-[725px]"
        />
      </div>

      {/* Right Card - Popular Posts */}
      <div className="flex  justify-center items-center w-full md:w-1/2">
        <div className="bg-[#fff6f6] dark:bg-gray-300 p-4 rounded-xl   shadow-md max-w-sm w-full ">
          <h3 className="text-lg font-semibold mb-3">Popular Post</h3>
          <div className="space-y-3">
            {posts.map((post, index) => (
              <div key={index} className="border-b pb-2">
                <p className="text-sm font-medium">{post.title}</p>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
