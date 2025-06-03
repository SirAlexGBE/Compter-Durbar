import React from "react";
import { ArrowRight } from "lucide-react";

export default function News() {
  return (
    <div className='w-full p-6'>
      <div className='flex flex-col md:flex-row bg-white rounded-xl overflow-hidden'>
        {/* Left Side - Yellow Background with Image */}
        <div className='w-full md:w-2/5 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 relative flex items-center justify-center min-h-[200px]'>
          {/* Title on Image */}

          {/* Student Image */}
          <div className='flex-1 flex items-center justify-center'>
            <img
              src='image.png'
              alt='Student with laptop'
              className='max-w-full max-h-full object-contain'
            />
          </div>

          {/* Brand Logo - Top Right */}
        </div>

        {/* Right Side - White Background with Content */}
        <div className='w-full md:w-3/5 p-8 flex flex-col justify-center   min-h-[200px] ml-4'>
          <div className='bg-[#FDF9F9] py-2 rounded px-3'>
            <span className='bg-blue-700 text-white px-6 py-1 rounded-full text-sm mb-4 w-fit'>
              News
            </span>

            <h3 className='text-2xl md:text-3xl font-bold mb-4 text-gray-800 leading-tight'>
              Best Budget Laptops for student in Nepal
            </h3>

            <p className='text-gray-600 mb-6 leading-relaxed text-base'>
              If you're a student in Nepal seeking a reliable and affordable
              laptop under NPR 85,000, there are several excellent options
              available in 2025. These laptops cater to various academic needs,
              from basic tasks like note-taking and web browsing to
            </p>

            <a
              href='#'
              className='text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group transition-colors'>
              Read More
              <ArrowRight className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
