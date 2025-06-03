import React, { useState } from "react";
import Left from "../assets/Left.png";
import right from "../assets/right.png";

const leftArrow = Left;
const rightArrow = right;

const LaptopCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const laptops = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=250&fit=crop",
      author: "Shyam Sharma",
      date: "20 April 2024",
      title: "Best Laptops Under Rs.85,000 in Nepal.....",
      description:
        "If you're searching for the best laptops under Rs. 85,000 in Nepal, there are several excellent options that cater to students, and",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=250&fit=crop",
      author: "Shyam Sharma",
      date: "20 April 2024",
      title: "Best Gaming Laptops Under Rs.85,000 in Nepal.....",
      description:
        "If you're searching for the best gaming laptops under Rs. 85,000 in Nepal, there are several excellent options that cater to gamers, and",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=250&fit=crop",
      author: "Shyam Sharma",
      date: "20 April 2024",
      title: "Best Business Laptops Under Rs.85,000 in Nepal.....",
      description:
        "If you're searching for the best business laptops under Rs. 85,000 in Nepal, there are several excellent options that cater to professionals, and",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      author: "Shyam Sharma",
      date: "18 April 2024",
      title: "Best Ultrabooks Under Rs.85,000 in Nepal.....",
      description:
        "If you're searching for the best ultrabooks under Rs. 85,000 in Nepal, there are several excellent options that cater to portability, and",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=250&fit=crop",
      author: "Shyam Sharma",
      date: "17 April 2024",
      title: "Best 2-in-1 Laptops Under Rs.85,000 in Nepal.....",
      description:
        "If you're searching for the best 2-in-1 laptops under Rs. 85,000 in Nepal, there are several excellent options that cater to versatility, and",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop",
      author: "Shyam Sharma",
      date: "16 April 2024",
      title: "Best Creative Laptops Under Rs.85,000 in Nepal.....",
      description:
        "If you're searching for the best creative laptops under Rs. 85,000 in Nepal, there are several excellent options that cater to designers, and",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=250&fit=crop",
      author: "Shyam Sharma",
      date: "15 April 2024",
      title: "Best Budget Laptops Under Rs.85,000 in Nepal.....",
      description:
        "If you're searching for the best budget laptops under Rs. 85,000 in Nepal, there are several excellent options that cater to affordability, and",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop",
      author: "Shyam Sharma",
      date: "14 April 2024",
      title: "Best Performance Laptops Under Rs.85,000 in Nepal.....",
      description:
        "If you're searching for the best performance laptops under Rs. 85,000 in Nepal, there are several excellent options that cater to power users, and",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      author: "Shyam Sharma",
      date: "13 April 2024",
      title: "Best Student Laptops Under Rs.85,000 in Nepal.....",
      description:
        "If you're searching for the best student laptops under Rs. 85,000 in Nepal, there are several excellent options that cater to education, and",
    },
  ];

  const maxIndex = Math.max(0, laptops.length - 3);
  const scrollLeft = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const scrollRight = () =>
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  const getVisibleItems = () => laptops.slice(currentIndex, currentIndex + 3);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">You may like also:</h2>
        <div className="flex">
          <button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full   ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:shadow-md"
            }`}
          >
            <img src={leftArrow} alt="Left" className="w-[30px] h-[30px]" />
          </button>
          <button
            onClick={scrollRight}
            disabled={currentIndex >= maxIndex}
            className={`p-2 rounded-full   ${
              currentIndex >= maxIndex
                ? "opacity-40 cursor-not-allowed"
                : "hover:shadow-md"
            }`}
          >
            <img src={rightArrow} alt="Right" className="w-[35px] h-[35px]" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex gap-6 overflow-hidden my-10  h-[520px] ">
        {getVisibleItems().map((laptop) => (
          <div
            key={laptop.id}
            className=" bg-white rounded-xl shadow-xl  hover:shadow-lg border border-gray-200 transition-all duration-300 h-[480px] w-[371px] ml-5"
          >
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={laptop.image}
                alt={laptop.title}
                className="w-[371px] h-[245px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 pb-8">
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span className="font-medium">{laptop.author}</span>
                <span>{laptop.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {laptop.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                {laptop.description}
              </p>
              <button className="flex items-center gap-2 text-black text-sm font-medium group">
                Read More
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-4 my-10">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-yellow-400"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LaptopCarousel;
