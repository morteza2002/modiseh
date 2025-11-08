import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  "/Slider-img/Amahi-Royal_Jeans-Desktop_Size.webp",
  "/Slider-img/Bornos_02-Desktop_Size_1.webp",
  "/Slider-img/Cosmetic_04-Desktop_Size.webp",
  "/Slider-img/Pama_02-Desktop_Size.webp",
  "/Slider-img/Unipro-Mel_Moj-Eloj-Panil-Desktop_Size.webp",
];

const HeroSlider = () => {
  return (
    <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden">
      {/* خود Swiper */}
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
          // بدون custom el — Swiper خودش داخل div اضافه می‌کند ✅
        }}
        className="heroSwiper"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-[350px] md:h-[420px] lg:h-[400px] object-cover transition-transform duration-500"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* استایل بولت‌ها */}
  <style>
  {`
    /* حالت اصلی (دسکتاپ و تبلت) – بدون تغییر */
    .heroSwiper .swiper-pagination {
      bottom: 15px !important;
      display: flex;
      justify-content: flex-start;
      gap: 1px;
      right: 20px;
    }

    .heroSwiper .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background-color: #000;
      border-radius: 50%;
      opacity: 0.4;
      transition: all 0.3s ease;
    }

    .heroSwiper .swiper-pagination-bullet-active {
      width: 25px;
      background-color: #ff4d4d;
      opacity: 1;
      border-radius: 9999px;
    }

    /* ✅ فقط موبایل (تا 768px) → بولت‌ها وسط */
    @media (max-width: 768px) {
      .heroSwiper .swiper-pagination {
        justify-content: center !important;
        right: 0 !important;
        left: 0 !important;
        gap: 6px;
      }

      /* ✅ عکس در موبایل کامل دیده بشه */
      .heroSwiper img {
        object-fit: cover !important;
        background: #fff;
      }
    }
  `}
</style>

    </div>
  );
};

export default HeroSlider;
