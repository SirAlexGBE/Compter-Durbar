import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-md bg-white px-4 sm:px-6 py-4">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-semibold text-blue-900">
          Computer Durbar
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-xl justify-center">
          <input
            type="text"
            placeholder="Search products here..."
            className="flex-1 px-4 py-2 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-[30px]"
          />
          <button className="bg-[#041E42] p-2 px-3 ml-2 rounded-[10px] text-white ">
            <Search size={20} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-black">
          <div className="mr-30 flex items-center space-x-10">
            <ShoppingCart className="cursor-pointer" />
            <Heart className="cursor-pointer" />
          </div>

          <div className="flex items-center cursor-pointer space-x-1">
            <User size={20} />
            <span className="text-sm hover:underline">Sign In/Register</span>
          </div>
        </div>
      </div>
      {/* Tablet Layout (md to lg) */}
      <div className="hidden md:flex lg:hidden items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-semibold text-blue-900">
          Computer Durbar
        </div>

        {/* Search Bar */}
        <div className="flex items-center flex-1 max-w-md mx-4">
          <input
            type="text"
            placeholder="Search products here..."
            className="flex-1 px-4 py-2 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-[30px]"
          />
          <button className="bg-[#041E42] p-2 px-3 ml-2 rounded-[10px] text-white ">
            <Search size={20} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3 text-black">
          <ShoppingCart className="cursor-pointer" />
          <Heart className="cursor-pointer" />
          <div className="flex items-center cursor-pointer space-x-1">
            <User size={20} />
            <span className="text-xs hover:underline">Sign In</span>
          </div>
        </div>
      </div>
      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-semibold text-blue-900">
            Computer Durbar
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-3">
            <ShoppingCart className="cursor-pointer" size={20} />
            <Heart className="cursor-pointer" size={20} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-4 flex items-center">
          <input
            type="text"
            placeholder="Search products here..."
            className="flex-1 px-4 py-2 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-[30px]"
          />
          <button className="bg-[#041E42] p-2 px-3 ml-2 rounded-[10px] text-white ">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 py-4 border-t border-gray-200">
            <div className="flex items-center cursor-pointer space-x-2">
              <User size={20} />
              <span className="text-sm hover:underline">Sign In/Register</span>
            </div>
          </div>
        )}
      </div>
         
    </div>
  );
}
