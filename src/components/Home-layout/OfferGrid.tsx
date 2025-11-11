import React from "react";

const offers = [
  { image: "/OfferImg/Tile_01-Novin_Leather_2.webp" },
  { image: "/OfferImg/Tile_02-Barez_Leather_2.webp" },
  { image: "/OfferImg/Tile_03-Saad_Leather_2.webp" },
  { image: "/OfferImg/Tile_04-Bisrak_1.webp" },
];

export default function OfferGrid() {
  return (
    <section className="container mx-auto max-w-7xl flex flex-col gap-5 px-3 md:px-6">
      {/* 🔹 ردیف بالا: در دسکتاپ ۴تایی، در موبایل ۲تایی */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-4/3 sm:aspect-3/2"
          >
            <img
              src={offer.image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* ✨ افکت برق مورب */}
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-linear-to-br before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full before:-translate-y-full group-hover:before:translate-x-full group-hover:before:translate-y-full before:transition-transform before:duration-700"></div>
          </div>
        ))}
      </div>

      {/* 🔹 بنر بزرگ پایین */}
      <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
        <img
          src="/OfferImg/Tile_05-Hydrating-Desktop_1.jpg"
          alt="نرمی و طراوت"
          className="w-full h-50 sm:h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* ✨ افکت برق مورب طبیعی */}
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-linear-to-br before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full before:-translate-y-full group-hover:before:translate-x-full group-hover:before:translate-y-full before:transition-transform before:duration-700"></div>
      </div>
    </section>
  );
}
