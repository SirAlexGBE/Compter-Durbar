import React from "react";
import { ArrowUpRight } from "lucide-react";

const OurMission = () => {
  return (
    <section className="bg-white pb-12 px-6 md:px-20 flex flex-col md:flex-row  justify-between gap-8 relative">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          At Computer Durbar, we are committed to delivering high-quality
          computing products and personalized services tailored to meet the
          needs of individuals, professionals, and businesses. Whether you’re a
          student in need of a dependable laptop, a creative professional
          seeking a powerful custom-built PC, or a company looking for secure
          networking solutions, we have you covered.
        </p>
        <p className="text-gray-700 mb-6">
          Our goal is to ensure that technology becomes an asset in your daily
          life, not a challenge. We offer more than just products; we provide
          expert guidance, honest recommendations, and dedicated after-sales
          support to help you make the most out of your investment. From the
          moment you walk into our store to long after your purchase, we are
          here to make technology work seamlessly for you.
        </p>
        <button className="inline-flex items-center gap-2 border border-black rounded-md px-4 py-2 hover:bg-black hover:text-white transition">
          Connect with us <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="md:w-1/2 relative">
        <img
          src="Mission.jpg" // Replace with your actual image path
          alt="Our Mission Illustration"
          className="rounded-lg w-full h-auto object-cover shadow-md"
        />
        <div className="absolute bottom-0 right-0 w-10 h-10 bg-yellow-400 rounded-sm -mb-4 -mr-4 z-[-1]" />
      </div>
    </section>
  );
};

export default OurMission;
