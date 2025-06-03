import { Search, ShoppingCart, Heart, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full shadow-md bg-white px-6 py-4 flex items-center   justify-between">
      {/* Logo */}
      <div className="text-lg font-semibold text-blue-900">Computer Durbar</div>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-xl justify-center">
        <input
          type="text"
          placeholder="Search products here..."
          className="flex-1 px-4 py-2 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-[10px]"
        />
        <button className="bg-blue-900 p-2 px-3 ml-2 rounded-[10px] text-white hover:bg-blue-800">
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
          <span className="text-sm hover:underline">Sign In/ Register</span>
        </div>
      </div>
    </div>
  );
}
