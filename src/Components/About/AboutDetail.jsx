import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function AboutDetail() {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-12 dark:bg-black dark:text-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome to Computer Durbar
        </h1>
        <p className="text-gray-500 mb-6 dark:text-gray-400">
          Delivering Confidence Through Every Click and Connection
        </p>
      </div>
      <section className="w-full px-4 pb-12 md:px-16 flex flex-col md:flex-row  justify-between gap-10 bg-white  dark:bg-black dark:text-gray-200">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
          <img
            src="Man.jpg" // replace this with actual image path
            alt="People working on laptops"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Right: Text content */}
        <div className="w-full md:w-1/2  md:text-left">
          <p className="text-gray-700 mb-4 dark:text-gray-200">
            At Computer Durbar, we are committed to delivering high-quality
            computing products and personalized services tailored to meet the
            needs of individuals, professionals, and businesses. Whether you're
            a student in need of a dependable laptop, a creative professional
            seeking a powerful custom-built PC, or a company looking for secure
            networking solutions, we have you covered.
          </p>

          <p className="text-gray-700 mb-6 dark:text-gray-200">
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
      </section>
    </>
  );
}
