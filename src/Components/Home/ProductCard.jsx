// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className='bg-white rounded-xl p-4 dark:bg-black'>
      <div className='relative mb-4'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-55 p-2 border border-gray-200 object-cover rounded-lg dark:border-white'
        />
      </div>
      <h3 className='font-semibold text-gray-900 mb-2 text-sm leading-tight dark:text-white'>
        {product.name}
      </h3>
      <p className='text-xs text-gray-600 mb-3 leading-tight dark:text-gray-200'>
        {product.specs}
      </p>
      <div className='flex items-center gap-2'>
        <span className='text-red-500 font-bold text-lg'>
          {product.currentPrice}
        </span>
        <span className='text-gray-400 line-through text-sm dark:text-gray-200'>
          {product.originalPrice}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
