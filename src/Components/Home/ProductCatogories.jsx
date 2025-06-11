import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Advertise from "./Advertise";

const products = Array(4)
  .fill()
  .map((_, i) => ({
    id: i + 1,
    name: 'Acer Aspire lite i5 (AMD Ryzen 7 5700U, 16GB, 512GB, 15.6" FHD)',
    currentPrice: "Rs 64,499",
    originalPrice: "Rs 99,000",
    image: "/DaytoDeal1.png",
  }));

const categories = [
  { key: "trending", title: "Trending Products" },
  { key: "features", title: "Features Products" },
  { key: "topSelling", title: "Top-selling Products" },
  { key: "onSale", title: "On-Sale Products" },
];

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-3 mb-3">
    <div className="flex gap-3">
      <img
        src={product.image}
        alt={product.name}
        className="w-1/3  h-4/5 object-cover rounded-md"
      />

      <div className="flex-1">
        <h3 className="text-gray-900 font-medium leading-tight mb-2 text-xs">
          {product.name}
        </h3>
        <div className="space-y-1">
          <div className="text-red-500 font-bold text-sm">
            {product.currentPrice}
          </div>
          <div className="text-gray-400 line-through text-xs">
            {product.originalPrice}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CategoryColumn = ({ title, categoryKey }) => {
  const scroll = (direction) => {
    const container = document.getElementById(`${categoryKey}-container`);
    const scrollAmount = 200;
    if (direction === "up") {
      container.scrollTop -= scrollAmount;
    } else {
      container.scrollTop += scrollAmount;
    }
  };

  return (
    <>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <div className="flex gap-1">
            <button
              onClick={() => scroll("up")}
              className="border border-gray-300 rounded-md p-1 hover:bg-gray-100"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("down")}
              className="border border-gray-300 rounded-md p-1 hover:bg-gray-100"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div
          id={`${categoryKey}-container`}
          className="overflow-y-auto h-96 scrollbar-hide scroll-smooth"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

const MobileCategorySection = ({ title, category }) => {
  const scroll = (dir) => {
    const container = document.getElementById(`${category}-container-mobile`);
    container.scrollLeft += dir === "left" ? -300 : 300;
  };

  return (
    <>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-gray-900 text-lg">{title}</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="border border-gray-300 rounded-lg p-2 hover:bg-gray-100"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="border border-gray-300 rounded-lg p-2 hover:bg-gray-100"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div
          id={`${category}-container-mobile`}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
        >
          {products.slice(0, 1).map((product) => (
            <div key={product.id} className="min-w-[250px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ProductCategories = () => (
  <div className="bg-white w-full min-h-screen">
    {/* Desktop View - Side by Side Categories */}
    <div className="hidden lg:block">
      <div>
        <Advertise />
      </div>
      <div className="max-w-full  mx-auto px-10 py-8">
        <div className="flex gap-6">
          {categories.map(({ key, title }) => (
            <CategoryColumn key={key} title={title} categoryKey={key} />
          ))}
        </div>
      </div>
    </div>

    {/* Mobile View */}
    <div className="lg:hidden px-4 py-6">
      {categories.map(({ key, title }) => (
        <MobileCategorySection
          key={key}
          title={title.replace("Products", "Product")}
          category={key}
        />
      ))}
      <div>
        <Advertise />
      </div>
    </div>

    <style jsx>{`
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  </div>
);

export default ProductCategories;
