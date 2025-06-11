import React from "react";
import FilterComponent from "../Components/Shop/FilterSidebar";
import ProductCard from "../Components/Home/ProductCard";

export default function Shop() {
  const products = [
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
    {
      id: 7,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 8,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 9,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 10,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 11,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 12,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 13,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 14,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
    {
      id: 15,
      name: "Lenovo LOQ i7-12650H RTX 4050",
      specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
      currentPrice: "Rs 119,999",
      originalPrice: "Rs 152,999",
      image: "/Newproduct1.png",
    },
  ];

  return (
    <div className="w-full mx-auto  py-6">
      <div className="flex flex-col lg:flex-row items-start ">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <FilterComponent />
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
