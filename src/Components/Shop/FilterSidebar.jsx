import React from "react";

import {useState} from "react";
import {ChevronUp, ChevronDown} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Input} from "@/components/ui/input";
import {Slider} from "@/components/ui/slider";

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
    brand: {
      asus: false,
      acer: false,
      apple: false,
      dell: false,
    },
    gpuBrand: {
      nvidia: true,
      intel: true,
      amd: false,
      apple: false,
    },
    ram: {
      "32gb": false,
      "16gb": false,
      "12gb": true,
      "8gb": false,
    },
    driveSize: {
      "512gb": false,
      "256gb": false,
      "64gb": false,
      "128gb": true,
    },
    popularity: {
      common: false,
      popular: false,
    },
    screenSize: {
      "13-13.9": false,
      "14-14.9": false,
      "15-15.9": true,
      "16-16.9": false,
    },
    processor: {
      "intel-i5": false,
      "intel-i7": false,
      "intel-i9": false,
      "amd-ryzen9": true,
    },
  });

  const [priceRange, setPriceRange] = useState([500]);
  const [priceInput, setPriceInput] = useState("");

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (category, item, checked) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [item]: checked,
      },
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      brand: {
        asus: false,
        acer: false,
        apple: false,
        dell: false,
      },
      gpuBrand: {
        nvidia: false,
        intel: false,
        amd: false,
        apple: false,
      },
      ram: {
        "32gb": false,
        "16gb": false,
        "12gb": false,
        "8gb": false,
      },
      driveSize: {
        "512gb": false,
        "256gb": false,
        "64gb": false,
        "128gb": false,
      },
      popularity: {
        common: false,
        popular: false,
      },
      screenSize: {
        "13-13.9": false,
        "14-14.9": false,
        "15-15.9": false,
        "16-16.9": false,
      },
      processor: {
        "intel-i5": false,
        "intel-i7": false,
        "intel-i9": false,
        "amd-ryzen9": false,
      },
    });
    setPriceRange([500]);
    setPriceInput("");
  };

  const FilterSection = ({title, sectionKey, children}) => (
    <div className="border-b border-gray-200 pb-4">
      <button onClick={() => toggleSection(sectionKey)} className="flex items-center justify-between w-full py-2 text-left">
        <h3 className="font-medium text-gray-900">{title}</h3>
        {expandedSections[sectionKey] ? <ChevronUp className="h-4 w-4 text-gray-500" /> : <ChevronDown className="h-4 w-4 text-gray-500" />}
      </button>
      {expandedSections[sectionKey] && <div className="mt-3 space-y-3">{children}</div>}
    </div>
  );

  const CheckboxItem = ({label, count, checked, onChange}) => (
    <div className="flex items-center space-x-2">
      <Checkbox id={label} checked={checked} onCheckedChange={onChange} />
      <label htmlFor={label} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
        {label}
        {count && <span className="text-gray-500">({count})</span>}
      </label>
    </div>
  );
  return (
    <div className="w-64 bg-white border border-gray-200 rounded-lg p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <Button variant="link" className="text-blue-600 hover:text-blue-800 p-0 h-auto" onClick={clearAllFilters}>
          Clear all
        </Button>
      </div>

      {/* Brand */}
      <FilterSection title="Brand" sectionKey="brand">
        <CheckboxItem label="Asus" count={183} checked={filters.brand.asus} onChange={(checked) => handleFilterChange("brand", "asus", checked)} />
        <CheckboxItem label="Acer" count={78} checked={filters.brand.acer} onChange={(checked) => handleFilterChange("brand", "acer", checked)} />
        <CheckboxItem label="Apple" count={223} checked={filters.brand.apple} onChange={(checked) => handleFilterChange("brand", "apple", checked)} />
        <CheckboxItem label="Dell" count={53} checked={filters.brand.dell} onChange={(checked) => handleFilterChange("brand", "dell", checked)} />
      </FilterSection>

      {/* GPU Brand */}
      <FilterSection title="GPU Brand" sectionKey="gpuBrand">
        <CheckboxItem label="NVIDIA" checked={filters.gpuBrand.nvidia} onChange={(checked) => handleFilterChange("gpuBrand", "nvidia", checked)} />
        <CheckboxItem label="Intel" checked={filters.gpuBrand.intel} onChange={(checked) => handleFilterChange("gpuBrand", "intel", checked)} />
        <CheckboxItem label="AMD" checked={filters.gpuBrand.amd} onChange={(checked) => handleFilterChange("gpuBrand", "amd", checked)} />
        <CheckboxItem label="Apple" checked={filters.gpuBrand.apple} onChange={(checked) => handleFilterChange("gpuBrand", "apple", checked)} />
      </FilterSection>

      {/* RAM */}
      <FilterSection title="RAM" sectionKey="ram">
        <CheckboxItem label="32 GB" checked={filters.ram["32gb"]} onChange={(checked) => handleFilterChange("ram", "32gb", checked)} />
        <CheckboxItem label="16 GB" checked={filters.ram["16gb"]} onChange={(checked) => handleFilterChange("ram", "16gb", checked)} />
        <CheckboxItem label="12 GB" checked={filters.ram["12gb"]} onChange={(checked) => handleFilterChange("ram", "12gb", checked)} />
        <CheckboxItem label="8 GB" checked={filters.ram["8gb"]} onChange={(checked) => handleFilterChange("ram", "8gb", checked)} />
      </FilterSection>

      {/* Drive Size */}
      <FilterSection title="Drive Size" sectionKey="driveSize">
        <CheckboxItem label="512GB" checked={filters.driveSize["512gb"]} onChange={(checked) => handleFilterChange("driveSize", "512gb", checked)} />
        <CheckboxItem label="256GB" checked={filters.driveSize["256gb"]} onChange={(checked) => handleFilterChange("driveSize", "256gb", checked)} />
        <CheckboxItem label="64GB" checked={filters.driveSize["64gb"]} onChange={(checked) => handleFilterChange("driveSize", "64gb", checked)} />
        <CheckboxItem label="128GB" checked={filters.driveSize["128gb"]} onChange={(checked) => handleFilterChange("driveSize", "128gb", checked)} />
      </FilterSection>

      {/* Price */}
      <FilterSection title="Price" sectionKey="price">
        <div className="space-y-3">
          <Input type="text" placeholder="Enter the amount" value={priceInput} onChange={(e) => setPriceInput(e.target.value)} className="w-full" />
          <div className="px-2">
            <Slider value={priceRange} onValueChange={setPriceRange} max={2000} min={0} step={50} className="w-full" />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$0</span>
              <span>${priceRange[0]}</span>
              <span>$2000</span>
            </div>
          </div>
        </div>
      </FilterSection>

      {/* Popularity */}
      <FilterSection title="Popularity" sectionKey="popularity">
        <CheckboxItem label="Common" checked={filters.popularity.common} onChange={(checked) => handleFilterChange("popularity", "common", checked)} />
        <CheckboxItem label="Popular" checked={filters.popularity.popular} onChange={(checked) => handleFilterChange("popularity", "popular", checked)} />
      </FilterSection>

      {/* Screen Size */}
      <FilterSection title="Screen Size" sectionKey="screenSize">
        <CheckboxItem label={'13" - 13.9"'} checked={filters.screenSize["13-13.9"]} onChange={(checked) => handleFilterChange("screenSize", "13-13.9", checked)} />
        <CheckboxItem label={'14" - 14.9"'} checked={filters.screenSize["14-14.9"]} onChange={(checked) => handleFilterChange("screenSize", "14-14.9", checked)} />
        <CheckboxItem label={'15" - 15.9"'} checked={filters.screenSize["15-15.9"]} onChange={(checked) => handleFilterChange("screenSize", "15-15.9", checked)} />
        <CheckboxItem label={'16" - 16.9"'} count={63} checked={filters.screenSize["16-16.9"]} onChange={(checked) => handleFilterChange("screenSize", "16-16.9", checked)} />
      </FilterSection>

      {/* Processor */}
      <FilterSection title="Processor" sectionKey="processor">
        <CheckboxItem label="Intel Core i5" checked={filters.processor["intel-i5"]} onChange={(checked) => handleFilterChange("processor", "intel-i5", checked)} />
        <CheckboxItem label="Intel Core i7" checked={filters.processor["intel-i7"]} onChange={(checked) => handleFilterChange("processor", "intel-i7", checked)} />
        <CheckboxItem label="Intel Core i9" checked={filters.processor["intel-i9"]} onChange={(checked) => handleFilterChange("processor", "intel-i9", checked)} />
        <CheckboxItem label="AMD Ryzen 9" checked={filters.processor["amd-ryzen9"]} onChange={(checked) => handleFilterChange("processor", "amd-ryzen9", checked)} />
      </FilterSection>
    </div>
  );
}
