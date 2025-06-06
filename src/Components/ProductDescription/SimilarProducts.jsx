import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const SimilarProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description:
        "High-quality sound with noise cancellation and long battery life for music lovers.",
      originalPrice: "$999.99",
      currentPrice: "$899.99",
      discount: "10% off",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      description:
        "Track your health and fitness goals with advanced sensors and GPS connectivity.",
      originalPrice: "$999.99",
      currentPrice: "$899.99",
      discount: "10% off",
      image:
        "https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvbXB1dGVyfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      description:
        "Powerful sound in a compact design, perfect for outdoor adventures and parties.",
      originalPrice: "$999.99",
      currentPrice: "$899.99",
      discount: "10% off",
      image:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbXB1dGVyfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Professional Camera Lens",
      description:
        "Capture stunning photos with this high-performance lens for professional photography.",
      originalPrice: "$999.99",
      currentPrice: "$899.99",
      discount: "10% off",
      image:
        "https://images.unsplash.com/photo-1651241678796-422d47d747ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hY2tib29rfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Gaming Mechanical Keyboard",
      description:
        "Enhanced gaming experience with RGB lighting and responsive mechanical switches.",
      originalPrice: "$999.99",
      currentPrice: "$899.99",
      discount: "10% off",
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "4K Webcam for Streaming",
      description:
        "Ultra-high definition video quality for professional streaming and video calls.",
      originalPrice: "$999.99",
      currentPrice: "$899.99",
      discount: "10% off",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (products.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + (products.length - 3)) % (products.length - 3)
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <div className='relative w-full max-w-[1144px] mx-auto p-4'>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors'
        disabled={currentIndex === 0}>
        <ChevronLeft className='w-6 h-6 text-gray-600' />
      </button>

      <button
        onClick={nextSlide}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors'
        disabled={currentIndex >= products.length - 4}>
        <ChevronRight className='w-6 h-6 text-gray-600' />
      </button>

      {/* Product Grid */}
      <div className='flex gap-6 overflow-hidden'>
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className='flex-shrink-0 w-[268px] bg-white rounded-[10px] p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
            {/* Product Image Container */}
            <div className='relative w-full h-[162.94px] bg-gray-100 rounded-[8.79px] p-3 mb-2 overflow-hidden'>
              {/* Discount Badge */}
              <div className='absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10'>
                {product.discount}
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-full object-cover rounded-md'
              />
            </div>

            {/* Product Info */}
            <div className='space-y-2'>
              <h3 className='text-sm font-medium text-gray-900 line-clamp-2 leading-tight'>
                {product.name}
              </h3>

              <p className='text-xs text-gray-600 line-clamp-2 leading-relaxed'>
                {product.description}
              </p>

              {/* Price Section */}
              <div className='flex flex-col gap-1'>
                <span className='text-xs text-gray-400 line-through'>
                  {product.originalPrice}
                </span>
                <span className='text-lg font-bold text-gray-900'>
                  {product.currentPrice}
                </span>
              </div>

              {/* Action Buttons */}
              <div className='flex items-center gap-2 pt-1'>
                <button className='flex-1 w-[208px] h-9 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md px-4 py-2 transition-colors'>
                  Add to Cart
                </button>

                <button className='p-2 hover:bg-gray-100 rounded-md transition-colors'>
                  <Heart className='w-5 h-5 text-gray-400 hover:text-red-500 transition-colors' />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className='flex justify-center gap-2 mt-6'>
        {Array.from({ length: products.length - 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
