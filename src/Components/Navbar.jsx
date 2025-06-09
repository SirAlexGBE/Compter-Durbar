import { useState } from "react";
import { User, Heart, ShoppingCart, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Contact Us", path: "/contact" },
  { name: "About US", path: "/about" },
  { name: "Blog", path: "/blog" },
];

const navIcons = [
  { name: "Sign In", path: "/signin", icon: <User className='w-5 h-5' /> },
  { name: "Wishlist", path: "/wishlist", icon: <Heart className='w-5 h-5' /> },
  { name: "Cart", path: "/cart", icon: <ShoppingCart className='w-5 h-5' /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full bg-white sticky top-0 z-50 border-b border-gray-200 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-end justify-between h-20 pb-2'>
          {/* Logo - Positioned at start point */}
          <a href='/' className='flex-shrink-0 mr-4'>
            <img
              src='logo.png'
              alt='Durbar Logo'
              className=' h-18 object-contain max-w-none'
            />
          </a>

          {/* Desktop Navigation Links - Baseline aligned */}
          <div className='hidden lg:flex items-baseline justify-center flex-1 mx-8 min-w-0'>
            <div className='flex space-x-8 flex-wrap justify-center'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className='text-gray-700 text-xl px-3 py-2 font-medium transition-colors duration-200 hover:text-gray-900'>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop & Tablet Icons - Baseline aligned with increased spacing */}
          <div className='hidden md:flex items-baseline space-x-8'>
            {navIcons.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className='group flex flex-col items-center text-gray-700 transition-colors hover:text-gray-900'>
                <span className='p-2 rounded-full group-hover:bg-gray-100 transition-colors duration-200'>
                  {item.icon}
                </span>
                <span className='text-xs font-medium text-gray-600 group-hover:text-blue-600'>
                  {item.name}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200'>
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className='px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className='text-gray-700 text-2xl hover:bg-gray-100 block px-3 py-2 rounded-md font-medium transition-colors duration-200'
              onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <div className='flex justify-around py-4 border-t border-gray-200 mt-4'>
            {navIcons.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className='flex flex-col items-center'
                onClick={() => setIsOpen(false)}>
                <span className='p-1 rounded-full hover:bg-gray-200 transition-colors duration-200'>
                  {item.icon}
                </span>
                <span className='text-xs font-medium text-gray-600'>
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
