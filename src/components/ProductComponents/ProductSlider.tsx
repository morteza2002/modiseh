import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import OfferCard from "./OfferCard";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "عینک آفتابی مدل OP",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 1250000,
    oldPrice: 2500000,
    discount: 50,
  },
  {
    id: 2,
    title: "پیراهن جین پسرانه",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 340000,
    oldPrice: 480000,
    discount: 30,
  },
  {
    id: 3,
    title: "کفش چرمی زنانه",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 3579000,
    oldPrice: 6398000,
    discount: 45,
  },
  {
    id: 4,
    title: "رژ لب مایع حجم دهنده",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 306300,
    oldPrice: 666000,
    discount: 54,
  },
  {
    id: 5,
    title: "تی‌شرت نخی مردانه",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 290000,
    oldPrice: 420000,
    discount: 31,
  },
  {
    id: 6,
    title: "کفش اسپرت مردانه",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 899000,
    oldPrice: 1200000,
    discount: 25,
  },
];

const ProductSlider = () => {
  return (
    <div
      className="mt-10 flex justify-center"
      style={{
        width: "100%",
      }}
    >
      <div
        className="w-[90%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%]"
        style={{
          overflow: "hidden",
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation
          loop={true}
          modules={[Navigation]}
          style={{
            width: "100%",
            padding: "10px 0 40px",
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 8 }, // برای موبایل کوچک
            480: { slidesPerView: 1, spaceBetween: 8 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 12 },
            1440: { slidesPerView: 5, spaceBetween: 14 },
          }}
        >
          {/* OfferCard */}
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <OfferCard />
          </SwiperSlide>

          {/* سایر محصولات */}
          {products.map((p) => (
            <SwiperSlide
              key={p.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProductCard {...p} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* استایل ناوبری */}
        <style>{`
          .swiper-button-prev,
          .swiper-button-next {
            color: #fff;
            width: 30px;
            height: 30px;
            background: #c6284b;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
            z-index: 10;
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 18px;
            font-weight: bold;
          }

          .swiper-button-prev {
            left: 2px;
          }
          .swiper-button-next {
            right: 2px;
          }

          @media (max-width: 640px) {
            .swiper-button-prev,
            .swiper-button-next {
              width: 22px;
              height: 22px;
            }
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 14px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProductSlider;
