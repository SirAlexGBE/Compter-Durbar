import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function FilterComponent() {
  const [expandedSections, setExpandedSections] = useState({
    brand: true,
    gpuBrand: true,
    ram: true,
    driveSize: true,
    price: true,
    popularity: true,
    screenSize: true,
    processor: true,
  });

  const [filters, setFilters] = useState({
    brand: [],
    gpuBrand: ["NVIDIA", "Intel"],
    ram: ["12 GB"],
    driveSize: ["128GB"],
    price: "",
    popularity: [],
    screenSize: ['15" - 15.9"'],
    processor: ["AMD Ryzen 9"],
  });

  const [priceRange, setPriceRange] = useState(50);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      brand: [],
      gpuBrand: [],
      ram: [],
      driveSize: [],
      price: "",
      popularity: [],
      screenSize: [],
      processor: [],
    });
    setPriceRange(50);
  };

  const FilterSection = ({ title, items, category, isExpanded }) => (
    <div className='border-b border-gray-200 py-4'>
      <button
        onClick={() => toggleSection(category)}
        className='flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-200'>
        <span>{title}</span>
        {isExpanded ? (
          <ChevronUp className='w-4 h-4 text-gray-500 dark:text-gray-200' />
        ) : (
          <ChevronDown className='w-4 h-4 text-gray-500 dark:text-gray-200' />
        )}
      </button>

      {isExpanded && (
        <div className='mt-3 space-y-2'>
          {items.map((item) => (
            <label key={item.value} className='flex items-center'>
              <input
                type='checkbox'
                checked={filters[category].includes(item.value)}
                onChange={() => handleCheckboxChange(category, item.value)}
                className='w-4 h-4 text-blue-600 border border-gray-300 rounded focus:ring-blue-500 focus:ring-2  dark:border-white dark:focus:ring-purple-200'
              />
              <span className='ml-2 text-sm text-gray-700 dark:text-gray-200'>
                {item.label}
                {item.count && (
                  <span className='text-gray-500 dark:text-gray-300'>
                    ({item.count})
                  </span>
                )}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  const brandItems = [
    { value: "Asus", label: "Asus", count: "183" },
    { value: "Acer", label: "Acer", count: "78" },
    { value: "Apple", label: "Apple", count: "223" },
    { value: "Dell", label: "Dell", count: "53" },
  ];

  const gpuBrandItems = [
    { value: "NVIDIA", label: "NVIDIA" },
    { value: "Intel", label: "Intel" },
    { value: "AMD", label: "AMD" },
    { value: "Apple", label: "Apple" },
  ];

  const ramItems = [
    { value: "32 GB", label: "32 GB" },
    { value: "16 GB", label: "16 GB" },
    { value: "12 GB", label: "12 GB" },
    { value: "8 GB", label: "8 GB" },
  ];

  const driveSizeItems = [
    { value: "512GB", label: "512GB" },
    { value: "256GB", label: "256GB" },
    { value: "64GB", label: "64GB" },
    { value: "128GB", label: "128GB" },
  ];

  const popularityItems = [
    { value: "Common", label: "Common" },
    { value: "Popular", label: "Popular" },
  ];

  const screenSizeItems = [
    { value: '13" - 13.9"', label: '13" - 13.9"' },
    { value: '14" - 14.9"', label: '14" - 14.9"' },
    { value: '15" - 15.9"', label: '15" - 15.9"' },
    { value: '16" - 16.9"', label: '16" - 16.9"', count: "63" },
  ];

  const processorItems = [
    { value: "Intel Core i5", label: "Intel Core i5" },
    { value: "Intel Core i7", label: "Intel Core i7" },
    { value: "Intel Core i9", label: "Intel Core i9" },
    { value: "AMD Ryzen 9", label: "AMD Ryzen 9" },
  ];

  return (
    <div className='w-80 bg-white border px-2 py-4 border-gray-200 rounded-lg shadow-sm dark:bg-black'>
      {/* Header */}
      <div className='flex items-center justify-between p-4 border-b border-gray-200'>
        <h2 className='text-lg font-semibold text-gray-900 dark:text-gray-200'>
          Filters
        </h2>
        <button
          onClick={clearAllFilters}
          className='text-sm text-blue-600 hover:text-blue-800 font-medium dark:text-blue-300'>
          Clear all
        </button>
      </div>

      <div className='p-4'>
        {/* Brand Section */}
        <FilterSection
          title='Brand'
          items={brandItems}
          category='brand'
          isExpanded={expandedSections.brand}
        />

        {/* GPU Brand Section */}
        <FilterSection
          title='GPU Brand'
          items={gpuBrandItems}
          category='gpuBrand'
          isExpanded={expandedSections.gpuBrand}
        />

        {/* RAM Section */}
        <FilterSection
          title='RAM'
          items={ramItems}
          category='ram'
          isExpanded={expandedSections.ram}
        />

        {/* Drive Size Section */}
        <FilterSection
          title='Drive Size'
          items={driveSizeItems}
          category='driveSize'
          isExpanded={expandedSections.driveSize}
        />

        {/* Price Section */}
        <div className='border-b border-gray-200 py-4 px-4 dark:border-gray-900'>
          <button
            onClick={() => toggleSection("price")}
            className='flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300'>
            <span>Price</span>
            {expandedSections.price ? (
              <ChevronUp className='w-4 h-4 text-gray-500 dark:text-white' />
            ) : (
              <ChevronDown className='w-4 h-4 text-gray-500 dark:text-white' />
            )}
          </button>

          {expandedSections.price && (
            <div className='mt-3 space-y-3'>
              <input
                type='text'
                placeholder='Enter the amount'
                value={filters.price}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, price: e.target.value }))
                }
                className='w-full px-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-purple-200 dark:focus:border-purple-200 dark:placeholder-gray-200'
              />
              <div className='relative'>
                <input
                  type='range'
                  min='0'
                  max='100'
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className='w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider dark:bg-white'
                  style={{
                    background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${priceRange}%, #E5E7EB ${priceRange}%, #E5E7EB 100%)`,
                  }}
                />
                <div className='flex justify-between text-xs text-gray-500 mt-1 dark:text-gray-200'>
                  <span>Min</span>
                  <span>Max</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Popularity Section */}
        <FilterSection
          title='Popularity'
          items={popularityItems}
          category='popularity'
          isExpanded={expandedSections.popularity}
        />

        {/* Screen Size Section */}
        <FilterSection
          title='Screen Size'
          items={screenSizeItems}
          category='screenSize'
          isExpanded={expandedSections.screenSize}
        />

        {/* Processor Section */}
        <FilterSection
          title='Processor'
          items={processorItems}
          category='processor'
          isExpanded={expandedSections.processor}
        />
      </div>
    </div>
  );
}
