import React, { useState } from "react";
import SimilarProducts from "./SimilarProducts";
import Comments from "./Comments";

const SPECIFICATIONS = [
  {
    label: "Display",
    value: "13.3-inch (diagonal) LED-backlit display with IPS technology",
  },
  {
    label: "Graphics",
    value: "Apple M1 core GPU",
  },
  {
    label: "Processor",
    value: "Apple M1 chip",
  },
  {
    label: "In the box",
    value: "67W USB-C Power Adapter, USB-C Charge Cable (2 m)",
  },
  {
    label: "Height",
    value: "0.63 inch (1.56 cm)",
  },
  {
    label: "Width",
    value: "11.97 inches (30.41 cm)",
  },
];

const TABS = [
  { name: "Technical Details", current: true },
  { name: "Similar Products", current: false },
  { name: "Comments", current: false },
];
const TechnicalDetails = () => {
  const [tabs, setTabs] = useState(TABS);
  const currentTab = tabs.find((tab) => tab.current);

  const handleTabClick = (clickedTabName) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        current: tab.name === clickedTabName,
      }))
    );
  };

  return (
    <div className='w-full bg-white pl-25'>
      <div className='w-full px-6 py-8'>
        {/* Header with Tabs */}
        <div className='border-b border-gray-200 mb-2'>
          <div className='flex space-x-8 text-sm'>
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab.name)}
                className={`pb-2 text-left w-30 ${
                  tab.current
                    ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                    : "text-gray-500 hover:text-gray-700"
                }`}>
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Specifications Container */}
        <div>
          <div className='text-lg font-semibold text-gray-800 mb-4'>
            {currentTab.name}
          </div>
          {currentTab.name === "Technical Details" && (
            <>
              {SPECIFICATIONS.map((spec, index) => (
                <div
                  key={index}
                  className='flex items-start py-3 border-b border-gray-100 last:border-0'>
                  <div className='w-36 flex-shrink-0 text-left'>
                    <span className='text-sm font-medium text-gray-600'>
                      {spec.label}
                    </span>
                  </div>
                  <div className='flex-1 text-left'>
                    <span className='text-sm text-gray-900'>{spec.value}</span>
                  </div>
                </div>
              ))}
            </>
          )}
          {currentTab.name === "Similar Products" && <SimilarProducts />}
          {currentTab.name === "Comments" && <Comments />}
        </div>

        {/* See More Button */}
        <div className='mt-8 text-left'>
          <button className='text-blue-600 text-sm hover:text-blue-700 hover:underline transition-colors duration-150'>
            See more details ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDetails;
