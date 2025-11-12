import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";

const miniSlides: string[] = [
  "/miniSlider/PowerBank-Desktop_Size_1.jpg",
  "/miniSlider/Home_Kitchen_02-Desktop_Size.jpg",
];

const MiniBannerSlider: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden rounded-2xl">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="miniSwiper"
      >
        {miniSlides.map((img: string, index: number) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`mini-slide-${index}`}
              className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-2xl transition-transform duration-500"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🎨 استایل مخصوص بولت‌ها و موقعیت */}
      <style>{`
        .miniSwiper .swiper-pagination {
          bottom: 10px !important;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
        }

        .miniSwiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background-color: #444;
          opacity: 0.3;
          transition: all 0.3s ease;
        }

        .miniSwiper .swiper-pagination-bullet-active {
          width: 16px;
          height: 6px;
          background-color: #ff4d4d;
          border-radius: 9999px;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .miniSwiper .swiper-pagination {
            bottom: 6px !important;
            gap: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default MiniBannerSlider;
