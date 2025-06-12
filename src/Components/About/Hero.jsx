import React from "react";

export default function Hero() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center h-screen text-black bg-gradient-to-r from-white to-blue-200 dark:from-black dark:to-gray-600 dark:text-gray-300 ">
          <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
          <p className="text-lg text-center mb-8">
            Your trusted computer shop for all your computing needs.
          </p>
        </div>
      </div>
    </>
  );
}
