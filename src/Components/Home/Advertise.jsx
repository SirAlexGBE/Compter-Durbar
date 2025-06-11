// import React from "react";

// const Advertise = () => {
//   return (
//     <div className='w-full relative'>
//       <img
//         src='gaminglaptop.png'
//         alt='Asus TUF Gaming Advertisement'
//         className='w-full h-auto'
//       />
//       <button
//         className='absolute
//         top-[67%] right-[25%]
//         transform -translate-y-1/2
//         bg-blue-400 hover:bg-blue-500
//         text-black font-semibold
//         text-xs
//         xs:text-sm
//         sm:text-base
//         md:text-lg
//         lg:text-xl
//         px-3 py-1.5
//         xs:px-4 xs:py-2
//         sm:px-6 sm:py-2
//         md:px-7 md:py-3
//         lg:px-8 lg:py-3
//         rounded-full
//         transition-colors duration-200
//         shadow-lg
//         min-w-fit whitespace-nowrap'>
//         Shop Now
//       </button>
//     </div>
//   );
// };

// export default Advertise;

import React from "react";

const Advertise = () => {
  return (
    <div className='w-full relative'>
      <img
        src='gaminglaptop.png'
        alt='Asus TUF Gaming Advertisement'
        className='w-full h-auto'
      />
      {/* Desktop Button */}
      <button
        className='absolute hidden sm:block
        top-[67%] right-[25%] 
        transform -translate-y-1/2
        bg-blue-400 hover:bg-blue-500 
        text-black font-semibold
        sm:text-sm 
        md:text-base 
        lg:text-lg 
        xl:text-xl
        sm:px-4 sm:py-2 
        md:px-6 md:py-2.5 
        lg:px-7 lg:py-3 
        xl:px-8 xl:py-3
        rounded-full 
        transition-colors duration-200
        shadow-lg
        min-w-fit whitespace-nowrap
        z-10'>
        Shop Now
      </button>
      {/* Mobile Button - Same position as desktop but scaled */}
      <button
        className='absolute block sm:hidden
        top-[62%] right-[22%] 
        transform -translate-y-1/2
        bg-blue-400 hover:bg-blue-500 
        text-black font-semibold
        text-[8px] xs:text-[10px]
        px-2 py-1 xs:px-3 xs:py-1.5
        rounded-full 
        transition-colors duration-200
        shadow-lg
        min-w-fit whitespace-nowrap
        z-10'>
        Shop Now
      </button>
    </div>
  );
};

export default Advertise;
