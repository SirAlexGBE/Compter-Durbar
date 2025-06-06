import React from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

// Constants
const SECTION_TITLE = "Products On Sale";
const SECTION_SUBTITLE = "Shop Now!";

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
  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
  };

  const handleWishlist = (productId) => {
    console.log(`Added product ${productId} to wishlist`);
  };

  const handlePrevious = () => {
    console.log("Previous products");
  };

  const handleNext = () => {
    console.log("Next products");
  };

  return (
    <section className='bg-gradient-to-r from-blue-500 to-blue-600 py-8 px-8 relative overflow-hidden p-8 top-6'>
      {/* Background decoration */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-20 w-32 h-32 bg-white rounded-full'></div>
        <div className='absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full'></div>
      </div>

      <div className='max-w-7xl mx-auto relative'>
        {/* Section Header */}
        <div className='text-left mb-12'>
          <h2 className='text-4xl font-bold text-white mb-2'>
            {SECTION_TITLE}
          </h2>
          <p className='text-xl text-blue-100'>{SECTION_SUBTITLE}</p>
        </div>

        {/* Products Grid */}
        <div className='flex gap-6 overflow-x-auto pb-4'>
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-2xl p-6 shadow-lg min-w-[320px] flex-shrink-0 relative'>
              {/* Discount Badge */}
              <div className='absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                {product.discount}
              </div>

              {/* Product Image */}
              <div className='bg-gray-200 rounded-xl h-48 flex items-center justify-center mb-4'>
                <span className='text-gray-500 text-lg'>Image</span>
              </div>

              {/* Product Info */}
              <div className='mb-4'>
                <h3 className='text-gray-800 font-medium mb-3 line-clamp-2 leading-relaxed'>
                  {product.name}
                </h3>

                <div className='flex items-center gap-2 mb-4'>
                  <span className='text-gray-400 line-through text-sm'>
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className='text-2xl font-bold text-gray-900'>
                    ${product.salePrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex items-center gap-3'>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className='flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200'>
                  Add to Cart
                </button>
                <button
                  onClick={() => handleWishlist(product.id)}
                  className='p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200'>
                  <Heart className='w-5 h-5 text-gray-600' />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className='flex justify-end gap-2 mt-6'>
          <button
            onClick={handlePrevious}
            className='bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-200'>
            <ChevronLeft className='w-5 h-5' />
          </button>
          <button
            onClick={handleNext}
            className='bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-200'>
            <ChevronRight className='w-5 h-5' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsOnSale;
