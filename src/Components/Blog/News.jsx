import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <div className='w-full p-6  mt-5'>
      <div className='flex flex-col md:flex-row bg-white rounded-xl overflow-hidden pl-5'>
        {/* Left Side - Yellow Background with Image */}
        <div className='w-full   relative flex items-center  min-h-[200px]'>
          {/* Title on Image */}

          {/* Student Image */}
          <div className='bg-[#fff6f6]  rounded-xl  shadow-md '>
            <img
              src='image.png' // Replace with your actual image path
              alt='Best budget laptops'
              className='rounded-lg   w-[725px]'
            />
          </div>

          {/* Brand Logo - Top Right */}
        </div>

        {/* Right Side - White Background with Content */}
        <div className='w-full md:w-5/6 p-8 mt-5 flex flex-col justify-center   min-h-[200px] ml-4'>
          <div className='bg-[#FDF9F9] py-2 rounded px-3'>
            <span className='bg-blue-700 text-white px-6 py-1 rounded-full text-sm mb-4 w-fit'>
              News
            </span>

            <h3 className='text-2xl md:text-3xl font-bold mb-4 text-gray-800 leading-tight'>
              Best-Budget Laptops for student in Nepal
            </h3>

            <p className='text-gray-600 mb-6 leading-relaxed text-base'>
              If you're a student in Nepal seeking a reliable and affordable
              laptop under NPR 85,000, there are several excellent options
              available in 2025. These laptops cater to various academic needs,
              from basic tasks like note-taking and web browsing to
            </p>

            <Link
              to='/bloglanding'
              className='text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group transition-colors'>
              Read More
              <ArrowRight className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
