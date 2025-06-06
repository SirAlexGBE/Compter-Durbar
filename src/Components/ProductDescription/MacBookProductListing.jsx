import React, { useState } from "react";
import {
  Heart,
  Bell,
  User,
  Star,
  Package,
  Shield,
  Truck,
  Check,
  ChevronRight,
} from "lucide-react";

// Product Data Constants
const PRODUCT_DATA = {
  name: "MacBook Pro 14-inch",
  rating: 4.9,
  soldCount: "5.2k",
  features: [
    { icon: Shield, text: "1 Year Warranty" },
    { icon: Truck, text: "Free Delivery" },
  ],
  colors: [
    { color: "bg-gray-900" },
    { color: "bg-silver-400" },
    { color: "bg-orange-500" },
    { color: "bg-blue-500" },
  ],
  specifications: {
    processor: "M2 Pro",
    ram: "16GB",
    storage: "512GB SSD",
    display: "14-inch Retina XDR",
    battery: "Up to 18 hours",
  },
  currentPrice: 1999.99,
  originalPrice: 2499.99,
  discount: 20,
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'%3E%3Cdefs%3E%3ClinearGradient id='screen' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b35'/%3E%3Cstop offset='50%25' style='stop-color:%23f7931e'/%3E%3Cstop offset='100%25' style='stop-color:%23c2185b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='500' fill='%23f8f9fa'/%3E%3Cpath d='M100 150 L700 150 L680 120 L120 120 Z' fill='%23333'/%3E%3Crect x='120' y='120' width='560' height='350' rx='10' fill='%23333'/%3E%3Crect x='130' y='130' width='540' height='320' rx='5' fill='url(%23screen)'/%3E%3Cpath d='M350 470 L450 470 L460 500 L340 500 Z' fill='%23ddd'/%3E%3Ctext x='400' y='490' text-anchor='middle' fill='%23666' font-family='Arial' font-size='12'%3EMacBook Pro%3C/text%3E%3C/svg%3E",
};

const INSTALLMENT_OPTIONS = [3, 6, 9, 12];

// Component Definition
export default function MacBookProductListing() {
  // State Management
  const [paymentMethod, setPaymentMethod] = useState("paynow");
  const [selectedMonths, setSelectedMonths] = useState(3);
  const [selectedColor, setSelectedColor] = useState(1);

  // Render Component
  return (
    <div className='w-full bg-white'>
      <div className='max-w-7xl mx-auto p-4 lg:p-6'>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>
          {/* Sidebar Icons - Vertical on desktop, horizontal on mobile */}
          <div className='flex lg:flex-col gap-4 py-4 lg:py-8 order-1 lg:order-none'>
            <Heart className='w-6 h-6 cursor-pointer transition-colors text-gray-400 hover:text-red-500' />
            <Bell className='w-6 h-6 cursor-pointer transition-colors text-gray-400 hover:text-blue-500' />
            <User className='w-6 h-6 cursor-pointer transition-colors text-gray-400 hover:text-blue-500' />
          </div>

          {/* Product Image Section */}
          <div className='flex-1 lg:w-[40%] order-2 lg:order-none'>
            <div className='mb-6 relative overflow-hidden rounded-lg'>
              <img
                src={PRODUCT_DATA.image}
                alt={PRODUCT_DATA.name}
                className='w-full h-auto object-contain'
                loading='lazy'
              />
            </div>

            {/* Product Thumbnails */}
            <div className='flex gap-4 overflow-x-auto lg:overflow-visible lg:justify-center pb-4 lg:pb-0'>
              {[Package, ...Array(3)].map((Icon, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center cursor-pointer border-2 transition-all ${
                    index === 2
                      ? "bg-orange-200 border-blue-500"
                      : "bg-gray-200 border-transparent hover:border-blue-500"
                  }`}>
                  {index === 0 ? (
                    <Icon className='w-8 h-8 text-gray-400' />
                  ) : (
                    <div
                      className={`w-8 h-8 rounded ${
                        index === 2
                          ? "bg-gradient-to-br from-orange-400 to-red-500"
                          : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className='flex-1 lg:w-[35%] order-3 lg:order-none space-y-6'>
            <div className='space-y-4'>
              <h1 className='text-xl lg:text-2xl font-semibold text-gray-900'>
                {PRODUCT_DATA.name}
              </h1>

              <div className='flex flex-wrap items-center gap-4'>
                <div className='flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded'>
                  <Star className='w-4 h-4 fill-current' />
                  <span className='text-sm font-medium'>
                    {PRODUCT_DATA.rating}
                  </span>
                </div>
                <span className='text-gray-500'>
                  Sold {PRODUCT_DATA.soldCount}
                </span>
              </div>
            </div>

            {/* Features */}
            <div className='flex flex-wrap gap-4'>
              {PRODUCT_DATA.features.map((feature, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 text-blue-600'>
                  <feature.icon className='w-5 h-5' />
                  <span className='text-sm'>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Color Selection */}
            <div className='space-y-3'>
              <h3 className='text-lg font-medium text-gray-900'>
                Select color
              </h3>
              <div className='flex flex-wrap gap-3'>
                {PRODUCT_DATA.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-10 h-10 rounded-full border-2 relative transition-all ${
                      color.color
                    } ${
                      selectedColor === index
                        ? "border-gray-800"
                        : "border-transparent hover:border-gray-600"
                    }`}>
                    {selectedColor === index && (
                      <Check className='w-5 h-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className='space-y-4'>
              {Object.entries(PRODUCT_DATA.specifications).map(
                ([key, value]) => (
                  <div key={key} className='flex justify-between'>
                    <span className='text-gray-600 break-words'>
                      {key.charAt(0).toUpperCase() +
                        key.slice(1).replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className='font-medium text-gray-900'>{value}</span>
                  </div>
                )
              )}
            </div>

            <button className='flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors'>
              <span>Show More</span>
              <ChevronRight className='w-4 h-4' />
            </button>
          </div>

          {/* Pricing Card Section */}
          <div className='w-full lg:w-80 order-4 lg:order-none lg:sticky lg:top-6'>
            <div className='rounded-2xl border border-gray-200 bg-white p-4 lg:p-6'>
              {/* Price Display */}
              <div className='flex items-center justify-between mb-6 flex-wrap gap-4'>
                <div>
                  <div className='text-2xl lg:text-3xl font-bold mb-1 text-gray-900'>
                    ${PRODUCT_DATA.currentPrice.toFixed(2)}
                  </div>
                  <div className='line-through text-sm text-gray-500'>
                    ${PRODUCT_DATA.originalPrice.toFixed(2)}
                  </div>
                </div>
                <div className='flex items-center gap-2 text-red-500 font-semibold'>
                  <div className='bg-red-500 text-white rounded-md px-2 py-1 text-sm font-bold'>
                    %
                  </div>
                  <span>-{PRODUCT_DATA.discount}%</span>
                </div>
              </div>

              {/* Payment Options */}
              <div className='space-y-4 mb-6'>
                {/* Pay Now Option */}
                <div className='flex items-center gap-3'>
                  <button
                    onClick={() => setPaymentMethod("paynow")}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      paymentMethod === "paynow"
                        ? "bg-blue-600 border-blue-600"
                        : "border-gray-300 hover:border-blue-400"
                    }`}>
                    {paymentMethod === "paynow" && (
                      <div className='w-2 h-2 bg-white rounded-full' />
                    )}
                  </button>
                  <span className='text-lg font-medium text-gray-900'>
                    Pay Now
                  </span>
                </div>

                {/* Installments Option */}
                <div className='space-y-3'>
                  <div className='flex items-center gap-3'>
                    <button
                      onClick={() => setPaymentMethod("installments")}
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        paymentMethod === "installments"
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-300 hover:border-blue-400"
                      }`}>
                      {paymentMethod === "installments" && (
                        <div className='w-2 h-2 bg-white rounded-full' />
                      )}
                    </button>
                    <span className='text-lg font-medium text-gray-900'>
                      Buy in installments
                    </span>
                  </div>

                  {paymentMethod === "installments" && (
                    <>
                      <div className='text-sm pl-8 text-gray-500'>
                        Choose your installments period
                      </div>
                      <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 pl-8'>
                        {INSTALLMENT_OPTIONS.map((months) => (
                          <button
                            key={months}
                            onClick={() => setSelectedMonths(months)}
                            className={`p-2 rounded-lg border text-center transition-all hover:border-blue-500 ${
                              selectedMonths === months
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200"
                            }`}>
                            <div className='text-lg font-bold text-gray-900'>
                              {months}
                            </div>
                            <div className='text-xs text-gray-500'>Months</div>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className='space-y-3'>
                <button className='w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors'>
                  Buy Now
                </button>
                <button className='w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg text-lg font-semibold transition-colors hover:bg-blue-50'>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
