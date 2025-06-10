import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewProducts = () => {
  const products = [
    {
      id: 1,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs:
        "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey - Best Price In Nepal",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 2,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs:
        "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey - Best Price In Nepal",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 3,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs:
        "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey - Best Price In Nepal",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 4,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs:
        "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey - Best Price In Nepal",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 5,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs:
        "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey - Best Price In Nepal",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 6,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs:
        "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey - Best Price In Nepal",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
  ];

  return (
    <div className=" min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-full  mx-10 px-4 pt-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">New Products</h1>
            <div className="flex">
              <button className="  hover:bg-gray-100">
                <ChevronLeft size={30} />
              </button>
              <button className=" hover:bg-gray-100">
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
          <hr className="mb-5" />

          <div className="flex gap-8">
            {/* Left Sidebar - Legion Pro */}
            <div className="w-100 bg-gray-100 rounded-2xl p-6">
              <div className="mb-4">
                <span className=" text-red-500  py-3 mb-5 rounded-full text-sm font-medium">
                  NEW ARRIVAL
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Lenovo Legion <br />
                Pro
              </h2>

              <p className="text-gray-700 mb-10 text-lg">
                Don't miss the last <br /> Opportunity
              </p>

              <div className="mb-12">
                <img
                  src="/legion.png"
                  alt="Lenovo Legion Pro"
                  className="w-full h-75 object-cover rounded-lg"
                />
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-medium text-lg transition-colors">
                Shop Now
              </button>
            </div>

            {/* Right Grid - Products */}
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl p-4 ">
                    <div className="relative mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-55 p-5 border border-gray-200 object-cover rounded-lg"
                      />
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 leading-tight">
                      {product.specs}
                    </p>

                    <div className="flex items-center gap-2">
                      <span className="text-red-500 font-bold text-lg">
                        {product.currentPrice}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className=" py-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-2 px-4">
            <h1 className="text-xl font-bold text-gray-900 mb-3">
              New Product
            </h1>
            <div className="flex gap-1">
              <button className=" rounded-md">
                <ChevronLeft size={20} />
              </button>
              <button className=" rounded-md">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <hr />

          {/* Acer Products Row */}
          <div className="flex gap-4  mb-6  overflow-x-auto pb-2 px-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded mt-5 p-3   min-w-[160px]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-30 object-cover border p-5 border-gray-200 rounded-md mb-2"
                />
                <h3 className="text-xs font-medium text-gray-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex flex-col">
                  <span className="text-red-500 font-bold text-sm">
                    {product.currentPrice}
                  </span>
                  <span className="text-gray-400 line-through text-xs">
                    {product.originalPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Legion Pro Section */}
          <div className="flex flex-row w-full bg-gray-100  rounded-2xl">
            <div className=" rounded-2xl p-4">
              <div className="mb-3">
                <span className=" text-red-500 px-2 py-2 rounded-full text-xs font-medium">
                  NEW ARRIVAL
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                Lenovo Legion Pro
              </h2>

              <p className="text-gray-700 mb-4 text-sm">
                Don't miss the last <br />
                Opportunity
              </p>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-4 rounded-full font-medium transition-colors">
                Shop Now
              </button>
            </div>
            <div className="flex items-center">
              <img
                src="/legion.png"
                alt="Lenovo Legion Pro"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
