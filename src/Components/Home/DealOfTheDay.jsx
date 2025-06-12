import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Fire from "../../assets/Fire.png";

const DealOfTheDay = () => {
  const dealsData = [
    {
      id: 1,
      title: "Acer Aspire Lite 15 (AMD Ryzen 7 5700U, 16GB, 512GB, 15.6″ FHD)",
      currentPrice: 64499,
      originalPrice: 92000,
      discount: 30,
      available: 5,
      sold: 15,
      image: "/DaytoDeal1.png",
    },
    {
      id: 2,
      title: "Acer Aspire Lite 15 (AMD Ryzen 7 5700U, 16GB, 512GB, 15.6″ FHD)",
      currentPrice: 64499,
      originalPrice: 92000,
      discount: 30,
      available: 5,
      sold: 15,
      image: "/DaytoDeal1.png",
    },
  ];

  const dealData = dealsData[0];

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    days: 0,
  });

  useEffect(() => {
    const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, "0");

  const calculateProgress = (deal) => {
    const total = deal.available + deal.sold;
    return (deal.sold / total) * 100;
  };

  return (
    <div className="w-full  max-w-7xl mx-auto p-4  ">
      {/* Desktop Layout */}
      <div className="hidden lg:block h-55 transform translate-y-[-75%]">
        <div className="bg-white rounded-3xl shadow shadow-gray-400 p-8 py-10 relative overflow-hidden dark:bg-black">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12  rounded-full flex items-center justify-center">
                <span className="text-white text-lg">
                  <img src={Fire} alt="" />
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray">
                Deal of The Day
              </h1>
            </div>

            {/* Countdown Timer */}
            <div className="flex items-center gap-2">
              <button className="bg-black text-white px-7 mr-10 py-2 rounded-lg text-sm font-medium">
                Choose a deal
              </button>
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((time, index) => (
                <div>
                  <div key={index} className="flex flex-grid">
                    <div className="text-sm font-bold bg-red-500 text-white px-3 py-2 rounded-lg flex flex-rowmin-w-[50px] text-center">
                      {formatNumber(time.value)}
                    </div>
                    <div className="pl-2  text-2xl">:</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex ">
              <button className="p-2 rounded-lg hover:bg-gray-50">
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button className="p-2  rounded-lg hover:bg-gray-50">
                <ChevronRight className="w-10 h-10" />
              </button>
            </div>
          </div>

          <hr className="mb-5 text-gray-300" />

          {/* Product Cards */}
          <div className="grid grid-cols-2 gap-8">
            {dealsData.map((deal) => (
              <div
                key={deal.id}
                className="bg-white rounded-2xl p-6 flex gap-6"
              >
                <div className="relative w-48 h-32 flex-shrink-0">
                  <div className="absolute -top-6 -right-6 bg-red-500 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-xs font-bold z-10">
                    <span>Sale</span>
                    <span>{deal.discount}%</span>
                  </div>

                  <img
                    src={deal.image}
                    alt=""
                    className="border-gray-200 border rounded-2xl w-full h-[120%] p-5 "
                  />
                </div>

                {/* Left: Specs */}
                <div className="flex-1 space-y-4">
                  <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                    {deal.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-red-500">
                      Rs. {deal.currentPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-500 line-through">
                      Rs. {deal.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>
                      Available: <strong>{deal.available}</strong>
                    </span>
                    <span>
                      Sold: <strong>{deal.sold}</strong>
                    </span>
                  </div>

                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${calculateProgress(deal)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden transform translate-y-[-25%] h-110">
        <div className="bg-white rounded-2xl shadow shadow-gray-400 p-6 relative ">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">
                  <img src={Fire} alt="" />
                </span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Deal of The Day
              </h1>
            </div>

            <div className=" ">
              <button className="p-1 rounded-md">
                <ChevronLeft className="w-8 h-8 font-extrabold" />
              </button>
              <button className="p-1  rounded-md">
                <ChevronRight className="w-8 h-8 font-extrabold" />
              </button>
            </div>
          </div>
          <hr />

          {/* Mobile Product Card */}
          <div className="bg-white rounded-xl p-4 relative mt-5 ">
            <div className="relative flex justify-center mb-4">
              <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-12 h-12 flex flex-col items-center justify-center text-xs font-bold z-10">
                <span>Sale</span>
                <span>{dealData.discount}%</span>
              </div>

              <img src={dealData.image} alt="" className="border rounded-xl" />
            </div>

            {/* Info */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 text-base leading-tight">
                {dealData.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-red-500">
                  Rs {dealData.currentPrice.toLocaleString()}
                </span>
                <span className="text-gray-500 line-through text-sm">
                  Rs {dealData.originalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>
                  Available: <strong>{dealData.available}</strong>
                </span>
                <span>
                  Sold: <strong>{dealData.sold}</strong>
                </span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                <div
                  className="bg-red-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${calculateProgress(dealData)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between mt-4 gap-4">
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium flex-shrink-0">
              Choose a deal
            </button>
            <div className="flex gap-1">
              {[
                timeLeft.days,
                timeLeft.hours,
                timeLeft.minutes,
                timeLeft.seconds,
              ].map((val, idx) => (
                <div key={idx} className="flex flex-grid">
                  <div className="text-sm font-bold bg-red-500 text-white px-2 py-2 rounded-lg flex flex-rowmin-w-[20px] text-center">
                    {formatNumber(val)}
                  </div>
                  <div className="pl-1  text-2xl">:</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
