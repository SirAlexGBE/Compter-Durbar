import { useState } from "react";
import { Search, Grid3X3, ChevronDown } from "lucide-react";
import OfferIcon from "../assets/offer1.png";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Sample categories - you can replace with your actual categories
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

  const handleSearch = () => {
    console.log("Searching for:", searchTerm, "in category:", selectedCategory);
    // Add your search logic here
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

  return (
    <div className='w-full border-b mb-2 border-gray-200 py-4 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6'>
          {/* All Categories Dropdown */}
          <div className='relative w-full lg:w-auto'>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='flex items-center justify-between w-full lg:w-48 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
              <div className='flex items-center gap-2'>
                <Grid3X3 className='w-5 h-5 text-gray-600' />
                <span className='text-gray-700 font-medium text-sm lg:text-base'>
                  {selectedCategory}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className='absolute top-full left-0 right-0 lg:right-auto lg:w-48 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto'>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150 ${
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

          {/* Search Bar */}
          <div className='flex-1 w-full lg:max-w-2xl'>
            <div className='relative'>
              <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder='Search products, brands, categories...'
                className='w-full px-6 py-3 pr-12 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-500 text-sm lg:text-base'
              />
              <button
                onClick={handleSearch}
                className='absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 focus:outline-none'>
                <Search className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* Special Offer */}
          <div className='w-full lg:w-auto'>
            <button
              onClick={() => console.log("Special offers clicked")}
              className='flex items-center justify-center lg:justify-start gap-3 px-6 py-3 bg-white transition-all duration-200 text-sm lg:text-base w-full lg:w-aut0'>
              <span className='w-8 h-8 flex-shrink-0'>
                <img
                  src={OfferIcon}
                  alt='Special Offer'
                  className='w-full h-full object-contain'
                />
              </span>
              <span className='font-medium text-gray-900 text-xl'>
                Special Offer
              </span>
            </button>
          </div>

          {/* Mobile Category Pills (Alternative mobile view) */}
          <div className='lg:hidden mt-4 flex flex-wrap gap-2'>
            {categories.slice(1, 6).map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
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
  );
};

export default SearchBar;
