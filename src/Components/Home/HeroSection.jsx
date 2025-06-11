import React, { useEffect, useState } from "react";

// Images from public folder
const images = ["/slider1.png", "/slider1.png", "/slider1.png"];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 1000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className='relative w-full'>
      {/* Main container with responsive aspect ratio */}
      <section className='w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[calc(100vh-80px)] relative overflow-hidden'>
        {/* Image slider */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out 
              ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-fill object-center'
              loading='lazy'
              sizes='(max-width: 640px) 70vw,
                    (max-width: 768px) 100vw,
                (max-width: 1024px) 100vw,
                  100vw'
            />
          </div>
        ))}
      </section>

      {/* Bottom spacing container with responsive height */}
      <div className='w-full h-[150px] sm:h-[100px] md:h-[80px] lg:h-[230px] bg-gray-200' />
    </div>
  );
};

export default HeroSection;
