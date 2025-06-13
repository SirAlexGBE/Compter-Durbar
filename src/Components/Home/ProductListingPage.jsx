import React, { useState } from "react";
import { Filter, X, Grid, List, Search } from "lucide-react";
import FilterComponent from "../Shop/FilterSidebar";
import ProductCard from "../Home/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductListingPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const sampleProduct = {
    id: 1,
    name: "Lenovo LOQ i7-12650H RTX 4050",
    specs: "| 16GB RAM | 512GB SSD | 144Hz Display | Luna Grey",
    currentPrice: "Rs 119,999",
    originalPrice: "Rs 152,999",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format",
  };

  const products = [
    { ...sampleProduct, id: 1 },
    { ...sampleProduct, id: 2 },
    { ...sampleProduct, id: 3 },
    { ...sampleProduct, id: 4 },
    { ...sampleProduct, id: 5 },
    { ...sampleProduct, id: 6 },
    { ...sampleProduct, id: 7 },
    { ...sampleProduct, id: 8 },
    { ...sampleProduct, id: 9 },
    { ...sampleProduct, id: 10 },
    { ...sampleProduct, id: 11 },
    { ...sampleProduct, id: 12 },
    { ...sampleProduct, id: 13 },
    { ...sampleProduct, id: 14 },
    { ...sampleProduct, id: 15 },
    { ...sampleProduct, id: 16 },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-black">
      {/* Header */}

      <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
        <div className="w-full px-4 py-3 flex items-center justify-between">
          <h1 className=" text-2xl font-semibold text-black dark:text-white">
            All Product
          </h1>
          <div className="flex items-center space-x-1 text-black dark:text-white">
            <ChevronLeft className="w-10 h-8" />
            <ChevronRight className="w-10 h-8" />
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterComponent />
          </div>

          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
              <div className="fixed inset-y-0 left-0 w-80 bg-white dark:bg-black shadow-xl">
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Filters
                  </h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="overflow-y-auto h-full pb-20">
                  <FilterComponent />
                </div>
              </div>
            </div>
          )}

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing {products.length} products
              </div>

              <div className="md:hidden relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-40 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700 dark:text-white">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
                <option>Name: Z to A</option>
              </select>
            </div>

            <div
              className={`grid gap-4 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
