// src/pages/NewProducts.jsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../Home/ProductCard"; // adjust path if needed

const NewProducts = () => {
  const newArrivals = [
    {
      id: 1,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 2,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 3,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 4,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 5,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 6,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
  ];

  return (
    <div className="min-h-1/2 bg-gray-50">
      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-full mx-auto px-6 pt-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">New Products</h1>
          <div className="flex gap-2">
            <button className="hover:bg-gray-100 p-1 rounded-full">
              <ChevronLeft size={30} />
            </button>
            <button className="hover:bg-gray-100 p-1 rounded-full">
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
        <hr className="mb-6" />

        {/* Left Banner + Right Products */}
        <div className="flex gap-8">
          {/* Left: Legion Pro Promo */}
          <div className="w-1/3 bg-gray-100 rounded-2xl p-6">
            <span className="text-red-500 text-sm font-medium mb-10 block">
              NEW ARRIVAL
            </span>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Lenovo Legion <br /> Pro
            </h2>
            <p className="text-gray-700 text-lg mb-15 ml-2">
              Don't miss the last <br /> Opportunity
            </p>
            <img
              src="/legion.png"
              alt="Lenovo Legion"
              className="rounded-xl mb-10 object-cover w-full h-60"
            />
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-medium text-lg transition-colors">
              Shop Now
            </button>
          </div>

          {/* Right: Grid of New Arrivals */}
          <div className="w-2/3">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-900">New Products</h1>
          <div className="flex gap-1">
            <button className="rounded-md">
              <ChevronLeft size={20} />
            </button>
            <button className="rounded-md">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <hr className="mb-4" />

        {/* Mobile: Legion Banner */}
        <div className="flex bg-gray-100 rounded-2xl mt-6 mb-6">
          <div className="p-4 flex-1">
            <span className="text-red-500 text-xs font-medium">
              NEW ARRIVAL
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-2">
              Lenovo Legion Pro
            </h2>
            <p className="text-sm text-gray-700 mb-3">
              Don't miss the last <br />
              Opportunity
            </p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-full font-medium">
              Shop Now
            </button>
          </div>
          <img
            src="/legion.png"
            alt="Lenovo Legion"
            className="h-32 w-28 object-cover rounded-r-2xl"
          />
        </div>

        {/* Mobile Grid of Products */}
        <div className="grid grid-cols-2 gap-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
