import React from "react";

const ProductFilterSidenav = () => {
  return (
    <div
      id="ProductFilterSidenav"
      className="px-4 py-3 w-full max-w-xs md:max-w-[250px] mx-auto mt-5 md:px-8 lg:px-10 bg-white rounded-xl shadow-sm border border-gray-100"
    >
      <h2 className="my-5 text-lg font-semibold font-poppins text-center md:text-left">
        Filter By Name
      </h2>
      {/* -------------- singel filter button */}
      <div class="flex flex-wrap items-center gap-2 md:gap-3 py-2">
        <label class="group flex items-center cursor-pointer w-full">
          <input class="hidden peer" type="checkbox" />

          <span class="relative w-[20px] h-[20px] flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-500 peer-checked:border-secendary peer-checked:bg-secendary peer-hover:scale-105">
            <span class="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"></span>
          </span>

          <span class="ml-3 text-gray-700 group-hover:text-secendary font-medium transition-colors duration-300 text-sm md:text-base">
            All Feature
          </span>
        </label>
      </div>
      {/* -------------- singel filter button */}
      <div class="flex flex-wrap items-center gap-2 md:gap-3 py-2">
        <label class="group flex items-center cursor-pointer w-full">
          <input class="hidden peer" type="checkbox" />

          <span class="relative w-[20px] h-[20px] flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-500 peer-checked:border-secendary peer-checked:bg-secendary peer-hover:scale-105">
            <span class="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"></span>
          </span>

          <span class="ml-3 text-gray-700 group-hover:text-secendary font-medium transition-colors duration-300 text-sm md:text-base">
            Sofa
          </span>
        </label>
      </div>
      {/* -------------- singel filter button */}
      <div class="flex flex-wrap items-center gap-2 md:gap-3 py-2">
        <label class="group flex items-center cursor-pointer w-full">
          <input class="hidden peer" type="checkbox" />

          <span class="relative w-[20px] h-[20px] flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-500 peer-checked:border-secendary peer-checked:bg-secendary peer-hover:scale-105">
            <span class="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"></span>
          </span>

          <span class="ml-3 text-gray-700 group-hover:text-secendary font-medium transition-colors duration-300 text-sm md:text-base">
            Bed
          </span>
        </label>
      </div>
      {/* -------------- singel filter button */}
      <div class="flex flex-wrap items-center gap-2 md:gap-3 py-2">
        <label class="group flex items-center cursor-pointer w-full">
          <input class="hidden peer" type="checkbox" />

          <span class="relative w-[20px] h-[20px] flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-500 peer-checked:border-secendary peer-checked:bg-secendary peer-hover:scale-105">
            <span class="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"></span>
          </span>

          <span class="ml-3 text-gray-700 group-hover:text-secendary font-medium transition-colors duration-300 text-sm md:text-base">
            Chair
          </span>
        </label>
      </div>
      {/* -------------- singel filter button */}
      <div class="flex flex-wrap items-center gap-2 md:gap-3 py-2">
        <label class="group flex items-center cursor-pointer w-full">
          <input class="hidden peer" type="checkbox" />

          <span class="relative w-[20px] h-[20px] flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-500 peer-checked:border-secendary peer-checked:bg-secendary peer-hover:scale-105">
            <span class="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"></span>
          </span>

          <span class="ml-3 text-gray-700 group-hover:text-secendary font-medium transition-colors duration-300 text-sm md:text-base">
            Lamp
          </span>
        </label>
      </div>
      <h2 className="my-5 text-lg font-semibold font-poppins text-center md:text-left">
        Filter By Price
      </h2>
      {/* -------------- singel filter button */}
      <div class="flex flex-wrap items-center gap-2 md:gap-3 py-2">
        <label class="group flex items-center cursor-pointer w-full">
          <input class="hidden peer" type="checkbox" />

          <span class="relative w-[20px] h-[20px] flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-500 peer-checked:border-secendary peer-checked:bg-secendary peer-hover:scale-105">
            <span class="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"></span>
          </span>

          <span class="ml-3 text-gray-700 group-hover:text-secendary font-medium transition-colors duration-300 text-sm md:text-base">
            100$ - 200$
          </span>
        </label>
      </div>
      {/* -------------- singel filter button */}
      <div class="flex flex-wrap items-center gap-2 md:gap-3 py-2">
        <label class="group flex items-center cursor-pointer w-full">
          <input class="hidden peer" type="checkbox" />

          <span class="relative w-[20px] h-[20px] flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-500 peer-checked:border-secendary peer-checked:bg-secendary peer-hover:scale-105">
            <span class="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"></span>
          </span>

          <span class="ml-3 text-gray-700 group-hover:text-secendary font-medium transition-colors duration-300 text-sm md:text-base">
            200$ - 300$
          </span>
        </label>
      </div>
      {/* -------------- singel filter button */}
      <div class="flex flex-wrap items-center gap-2 md:gap-3 py-2">
        <label class="group flex items-center cursor-pointer w-full">
          <input class="hidden peer" type="checkbox" />

          <span class="relative w-[20px] h-[20px] flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-500 peer-checked:border-secendary peer-checked:bg-secendary peer-hover:scale-105">
            <span class="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"></span>
          </span>

          <span class="ml-3 text-gray-700 group-hover:text-secendary font-medium transition-colors duration-300 text-sm md:text-base">
            300$ - 400$
          </span>
        </label>
      </div>
    </div>
  );
};

export default ProductFilterSidenav;
