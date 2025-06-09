import React, { useState, useEffect } from "react";
import leftArrow from "../../assets/Left.png";
import rightArrow from "../../assets/right.png";

const LaptopCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const laptops = [
    {
      id: 1,
      image: "First.png",
      author: "Shyam Sharma",
      date: "20 April 2024",
      title: "Best Laptops Under Rs.85,000 in Nepal.....",
      description:
        "If you're searching for the best laptops under Rs. 85,000 in Nepal, there are several excellent options that cater to students, and",
    },
    {
      id: 2,
      image: "Second.png",
      author: "Shyam Sharma",
      date: "20 April 2024",
      title: "Best Gaming Laptops Under Rs.85,000 in Nepal.....",
      description:
        "If you're searching for the best gaming laptops under Rs. 85,000 in Nepal, there are several excellent options that cater to gamers, and",
    },
    {
      id: 3,
      image: "Thirds.png",
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
      image: "Blank.webp",
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
      title: "Best Student Laptops Under Rs.85,000 in Nepal......",
      description:
        "If you're searching for the best student laptops under Rs. 85,000 in Nepal, there are several excellent options that cater to education, and",
    },
  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1000) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, laptops.length - itemsPerView);
  const scrollLeft = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const scrollRight = () =>
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  const getVisibleItems = () =>
    laptops.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="w-full max-w-7xl mx-auto my-12 bg-white mb-5">
      {/* Header */}
      <div className="w-full px-6">
        <div className="flex justify-between items-center py-6">
          <h2 className="text-3xl font-bold text-gray-900">
            You may like also:
          </h2>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-200"
              } transition-colors duration-200`}
            >
              <img src={leftArrow} alt="Left" className="w-[25px] h-[25px]" />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex >= maxIndex}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentIndex >= maxIndex
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-200"
              } transition-colors duration-200`}
            >
              <img src={rightArrow} alt="Right" className="w-[30px] h-[30px]" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-visible my-10 px-4 h-auto max-h-[520px]">
          {getVisibleItems().map((laptop) => (
            <div
              key={laptop.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 flex-shrink-0 
                         w-[90%] sm:w-[48%] md:w-[47%] lg:w-[32%] xl:w-[31%] h-auto max-h-[500px]"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={laptop.image}
                  alt={laptop.title}
                  className="w-full h-[180px] sm:h-[200px] md:h-[210px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 pb-6">
                <div className="flex justify-between text-xs text-gray-600 mb-3">
                  <span className="font-medium">{laptop.author}</span>
                  <span>{laptop.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {laptop.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {laptop.description}
                </p>
                <button className="flex items-center gap-2 text-black text-sm font-semibold group mt-auto">
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
        <div className="flex justify-center gap-2 pb-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-yellow-400"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaptopCarousel;
