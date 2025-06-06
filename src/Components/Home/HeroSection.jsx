import React from "react";

const HeroSection = () => {
  return (
    <section className='w-full h-screen min-h-[500px] mt-5'>
      <img
        src='Hero.png'
        alt='Hero'
        className='w-full h-full object-cover object-center'
      />
    </section>
  );
};

export default HeroSection;
