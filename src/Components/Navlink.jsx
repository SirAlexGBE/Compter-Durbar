import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navlink = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Contact us", link: "/contact" },
    { name: "About us", link: "/about" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <nav className='bg-white border-b border-t border-gray-200 pb-2 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center items-center h-12'>
          {/* Desktop Navigation - Centered */}
          <div className='hidden md:block'>
            <div className='flex items-center space-x-14'>
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className={`text-gray-700 hover:text-gray-900 text-sm font-normal transition-colors duration-200 ${
                    location.pathname === item.link
                      ? "font-medium text-blue-600"
                      : ""
                  }`}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden absolute right-4'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none'>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className='px-4 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200'>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className={`text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-normal transition-colors duration-200 w-full text-center ${
                location.pathname === item.link
                  ? "font-medium text-blue-600"
                  : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navlink;
