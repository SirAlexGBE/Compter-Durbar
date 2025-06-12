import React, { useRef } from "react";
import { Heart, ChevronDown } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Product Name ipsum pharetra neque elit molestie amet in sodales egestas.",
    originalPrice: 999.99,
    salePrice: 899.99,
    discount: "10% off",
    image: "product1.jpg",
  },
  {
    id: 2,
    name: "Product Name ipsum pharetra neque elit molestie amet in sodales egestas.",
    originalPrice: 999.99,
    salePrice: 899.99,
    discount: "10% off",
    image: "product2.jpg",
  },
  {
    id: 3,
    name: "Product Name ipsum pharetra neque elit molestie amet in sodales egestas.",
    originalPrice: 999.99,
    salePrice: 899.99,
    discount: "10% off",
    image: "product3.jpg",
  },
  {
    id: 4,
    name: "Product Name ipsum pharetra neque elit molestie amet in sodales egestas.",
    originalPrice: 999.99,
    salePrice: 899.99,
    discount: "10% off",
    image: "product4.jpg",
  },
];

const ProductsOnSale = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='relative w-full max-w-[1280px] mx-auto'>
      {/* Main Section */}
      <section className='bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl px-4 py-10 relative overflow-hidden min-h-[350px] mt-4 mb-4 gap-[4px]'>
        {/* Decorative Background Circles */}
        <div className='absolute inset-0 opacity-10 pointer-events-none'>
          <div className='absolute top-0 left-20 w-32 h-32 bg-white rounded-full' />
          <div className='absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full' />
        </div>

        {/* Flex Layout */}
        <div className='relative flex flex-col lg:flex-row items-start gap-8'>
          {/* Section Text */}
          <div className='text-left flex-shrink-0 lg:w-72'>
            <h2 className='text-4xl font-bold text-white mb-2'>
              Products On Sale
            </h2>
            <p className='text-lg text-blue-100'>Shop Now!</p>
          </div>

          {/* Product Cards */}
          <div className='relative flex-1 overflow-hidden pr-4'>
            <div
              ref={scrollRef}
              className='flex gap-6 overflow-x-auto pb-4 scrollbar-hide'>
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className='bg-white rounded-2xl p-4 shadow-md min-w-[268px] h-[295px] flex-shrink-0 relative'>
                  {/* Discount Badge */}
                  <div className='absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10'>
                    {product.discount}
                  </div>

                  {/* Image Placeholder */}
                  <div className='bg-gray-100 rounded-xl h-28 flex items-center justify-center mb-4'>
                    <span className='text-gray-400 text-sm'>Image</span>
                  </div>

                  {/* Product Info */}
                  <div className='mb-3'>
                    <h3 className='text-gray-800 font-medium mb-2 text-sm leading-snug line-clamp-2 min-h-[2.6rem]'>
                      {product.name}
                    </h3>
                    <div className='flex items-center gap-2 mb-3'>
                      <span className='text-gray-400 line-through text-sm'>
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <span className='text-lg font-bold text-gray-900'>
                        ${product.salePrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className='flex items-center gap-2'>
                    <button className='flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 rounded-lg text-sm'>
                      Add to Cart
                    </button>
                    <button className='p-2 border border-gray-200 rounded-lg hover:bg-gray-50'>
                      <Heart className='w-4 h-4 text-gray-700' />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* External Navigation Arrows */}
      <div className='absolute -bottom-6 right-0 flex gap-3 mt-3 z-20'>
        <button
          onClick={() => scroll("left")}
          className='bg-black text-white p-3 rounded-full shadow-md hover:scale-105 transition'>
          <ChevronDown className='w-5 h-5 rotate-90' />
        </button>
        <button
          onClick={() => scroll("right")}
          className='bg-black text-white p-3 rounded-full shadow-md hover:scale-105 transition'>
          <ChevronDown className='w-5 h-5 -rotate-90' />
        </button>
      </div>

      {/* Hide Scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProductsOnSale;
