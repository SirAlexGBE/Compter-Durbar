import OfferIcon from "../assets/offer1.png";
import { useState } from "react";
import {
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
  Search,
  Grid3X3,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Contact Us", path: "/contact" },
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
];

const navIcons = [
  { name: "Sign In", path: "/signin", icon: <User className='w-5 h-5' /> },
  { name: "Wishlist", path: "/wishlist", icon: <Heart className='w-5 h-5' /> },
  { name: "Cart", path: "/cart", icon: <ShoppingCart className='w-5 h-5' /> },
];

const categories = [
  "All Categories",
  "Asus",
  "Lenovo",
  "Apple",
  "Accessories",
  "Dell",
  "Fantech",
  "Gigabyte",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activeTab, setActiveTab] = useState("Menu");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm, "in category:", selectedCategory);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveTab("Menu");
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className='w-full bg-white sticky top-0 z-40 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-end  h-16 sm:h-20 pb-2'>
            {/* Empty space for mobile layout balance */}
            <div className='flex md:hidden items-baseline'>
              {/* Empty div for layout balance */}
            </div>

            {/* Logo - Using logo.png */}

            <a href='/' className='flex-shrink-0'>
              <img
                src='logo.png'
                alt='DURBAR'
                className='h-10 ml-[-20px] sm:h-12 md:h-16 lg:h-18 w-24 sm:w-28 px-1 md:w-32 lg:w-36  object-contain'
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className='hidden xl:flex items-baseline justify-center flex-1 mx-8'>
              <div className='flex space-x-8'>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className='text-gray-700 text-md px-3  py-2 font-medium hover:text-gray-900 transition-colors'>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Large Desktop Icons */}
            <div className='hidden xl:flex items-baseline space-x-6'>
              {navIcons.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className='flex flex-col items-center text-gray-700 hover:text-gray-900 transition-colors'>
                  <span className='p-2 rounded-full hover:bg-gray-100'>
                    {item.icon}
                  </span>
                  <span className='text-xs font-medium'>{item.name}</span>
                </a>
              ))}
            </div>

            {/* Tablet/Medium Desktop Icons - Horizontal */}
            <div className='hidden md:flex xl:hidden items-baseline space-x-4'>
              {navIcons.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className='flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100'>
                  {item.icon}
                  <span className='text-sm font-medium hidden lg:block'>
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Mobile/Tablet Menu Button - Right Side */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className='xl:hidden flex items-center pb-2.5 p-2 text-gray-700 hover:text-blue-600 pl-65 transition-colors self-end'>
              <Menu className='w-5 h-5 sm:w-6 sm:h-6' />
            </button>
          </div>
        </div>

        {/* Desktop Search Bar */}
        <div className='hidden xl:block py-2 border-t border-gray-100'>
          <div className='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between gap-4'>
              {/* Categories Dropdown */}
              <div className='relative flex-shrink-0'>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className='flex items-center justify-between w-52 px-4 py-3 bg-white hover:bg-gray-50 transition-colors'>
                  <div className='flex items-center gap-2'>
                    <Grid3X3 className='w-5 h-5 text-gray-600' />
                    <span className='text-gray-700 font-medium'>
                      {selectedCategory}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className='absolute top-full left-0 w-52 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto'>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                          selectedCategory === category
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700"
                        }`}>
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Input */}
              <div className='flex-1 max-w-md mr-60 pr-39'>
                <div className='relative'>
                  <input
                    type='text'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder='Search'
                    className='w-full px-4 py-2 pr-12 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                  />
                  <button
                    onClick={handleSearch}
                    className='absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-blue-600 transition-colors'>
                    <Search className='w-5 h-5' />
                  </button>
                </div>
              </div>

              {/* Special Offer */}
              <div className='flex-shrink-0'>
                <button
                  onClick={() => console.log("Special offers clicked")}
                  className='flex items-center gap-3 px-4 py-3 bg-white hover:bg-gray-50 transition-all duration-200'>
                  <span className='w-6 h-6 flex-shrink-0'>
                    <img
                      src={OfferIcon}
                      alt='Special Offer'
                      className='w-full h-full object-contain'
                    />
                  </span>
                  <span className='font-medium text-gray-900 text-base whitespace-nowrap'>
                    Special Offer
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet/Medium Desktop Compact Search */}
        <div className='hidden md:block xl:hidden py-3 border-t border-gray-100'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center gap-4'>
              {/* Compact Search Input */}
              <div className='flex-1 max-w-md'>
                <div className='relative'>
                  <input
                    type='text'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder='Search products...'
                    className='w-full px-4 py-2 pr-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'
                  />
                  <button
                    onClick={handleSearch}
                    className='absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-blue-600 transition-colors'>
                    <Search className='w-4 h-4' />
                  </button>
                </div>
              </div>

              {/* Quick Category Pills */}
              <div className='flex gap-2 overflow-x-auto'>
                {categories.slice(1, 4).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Slide Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}>
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-transparent transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? "bg-opacity-50" : "bg-opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Slide Menu */}
        <div
          className={`absolute left-0 top-0 h-full w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 bg-gray-100 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          {/* Header with Logo */}
          <div className='flex items-center justify-between p-4 bg-white border-b'>
            <img
              src='logo.png'
              alt='DURBAR'
              className='h-8 w-20 object-contain'
            />
            <button
              onClick={closeMenu}
              className='p-2 text-gray-700 hover:text-blue-600 transition-colors'>
              <X className='w-6 h-6' />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className='flex bg-white border-b'>
            <button
              onClick={() => setActiveTab("Menu")}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors text-sm sm:text-base ${
                activeTab === "Menu"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-800"
              }`}>
              Menu
            </button>
            <button
              onClick={() => setActiveTab("Categories")}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors text-sm sm:text-base ${
                activeTab === "Categories"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-800"
              }`}>
              Categories
            </button>
          </div>

          {/* Content Area */}
          <div className='p-4 h-full overflow-y-auto pb-24'>
            {/* Search Bar */}
            <div className='mb-6'>
              <div className='relative'>
                <input
                  type='text'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder='Search for anything'
                  className='w-full px-4 py-3 pr-12 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base'
                />
                <button
                  onClick={handleSearch}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500'>
                  <Search className='w-5 h-5' />
                </button>
              </div>
            </div>

            {/* Menu Tab Content */}
            {activeTab === "Menu" && (
              <div className='space-y-1'>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={closeMenu}
                    className='block py-3 px-4 text-gray-800 text-base sm:text-lg font-medium hover:bg-gray-200 rounded-lg transition-colors'>
                    {link.name}
                  </a>
                ))}
              </div>
            )}

            {/* Categories Tab Content */}
            {activeTab === "Categories" && (
              <div className='space-y-1'>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      handleCategorySelect(category);
                      closeMenu();
                    }}
                    className={`block w-full text-left py-3 px-4 text-base sm:text-lg font-medium rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-800 hover:bg-gray-200"
                    }`}>
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Icons */}
          <div className='absolute bottom-0 left-0 right-0 bg-white border-t p-4'>
            <div className='flex justify-around'>
              {navIcons.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={closeMenu}
                  className='flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors'>
                  <span className='p-2 rounded-full hover:bg-gray-100'>
                    {item.icon}
                  </span>
                  <span className='text-xs font-medium'>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
