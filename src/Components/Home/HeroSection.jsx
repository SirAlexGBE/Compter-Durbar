import React, { useEffect, useState } from "react";

const images = ["slider1.png", "slider1.png", "slider1.png"];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);
  const goToSlide = (index) => setCurrent(index);

  return (
    <section className='w-full h-screen min-h-[500px] relative overflow-hidden'>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className='absolute left-5 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-black p-2 rounded-full shadow z-20'>
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-5 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-black p-2 rounded-full shadow z-20'>
        &#10095;
      </button>

      {/* Dots */}
      <div className='absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20'>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
