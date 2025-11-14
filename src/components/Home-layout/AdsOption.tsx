import React from "react";

interface AdBanner {
  id: number;
  image: string;
  alt: string;
}

const ads: AdBanner[] = [
  {
    id: 1,
    image: "/adsOption/Tile_07-_Snapp_Pay.webp",
    alt: "تبلیغ اسنپ پی",
  },
  {
    id: 2,
    image: "/adsOption/Tile_08-Coupon.webp",
    alt: "تبلیغ کد تخفیف مدیسه",
  },
];

const AdsOption: React.FC = () => {
  return (
    <div className="w-full flex justify-center my-10">
      <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ads.map((ad) => (
          <div
            key={ad.id}
            className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={ad.image}
              alt={ad.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdsOption;
