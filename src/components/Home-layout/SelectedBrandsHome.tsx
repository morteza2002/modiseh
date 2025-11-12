import React from "react";

const brands = [
  { id: 1, name: "Mante" },
  { id: 2, name: "Berionix" },
  { id: 3, name: "Mel & Moj" },
  { id: 4, name: "Hydroderm" },
  { id: 5, name: "Rees" },
  { id: 6, name: "Serge" },
  { id: 7, name: "Replay" },
  { id: 8, name: "David Jones" },
];

const BrandSection = () => {
  return (
    <div className="py-10 sm:py-12">
      <h2 className="text-center text-xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-700">
        برندهای منتخب
      </h2>

      <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-3 sm:gap-6 px-2 sm:px-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="group relative w-28 h-20 sm:w-36 sm:h-28 bg-linear-to-b from-white/90 to-gray-50 border border-gray-100 shadow-sm hover:shadow-lg rounded-2xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:from-rose-50 hover:to-rose-100"
          >
            <p className="text-gray-700 text-sm sm:text-lg italic font-serif tracking-wide group-hover:text-rose-600 transition-all duration-300 group-hover:scale-110">
              {brand.name}
            </p>
            <span className="absolute bottom-1 sm:bottom-2 opacity-0 group-hover:opacity-100 text-[10px] sm:text-xs text-rose-400 transition-all duration-500 italic">
              Collection
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
