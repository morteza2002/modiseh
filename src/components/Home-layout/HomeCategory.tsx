import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./HomeCategory.css";

const categories = [
  { title: "سفر و ورزش", img: "/HomeCategory/Sport_Travel-Icon.webp" },
  { title: "لوازم خانه", img: "/HomeCategory/Home-Icon.webp" },
  { title: "لوازم تحریر", img: "/HomeCategory/Stationary-Icon.webp" },
  { title: "لوازم الکترونیک", img: "/HomeCategory/Electronic-Icon.webp" },
  { title: "سوپرمارکت", img: "/HomeCategory/Super_Market-Icon.webp" },
  { title: "آرایشی و بهداشتی", img: "/HomeCategory/Cosmetics-Icon.webp" },
  { title: "بچگانه", img: "/HomeCategory/Kids-Icon.webp" },
  { title: "مردانه", img: "/HomeCategory/Men-Icon.webp" },
  { title: "زنانه", img: "/HomeCategory/Women-Icon.webp" },
];

export default function CategoriesSlider() {
  return (
    <Swiper
      slidesPerView={8}
      spaceBetween={0}
      breakpoints={{
        1024: { slidesPerView: 6 },
        768: { slidesPerView: 4 },
        480: { slidesPerView: 3 },
        0: { slidesPerView: 2 },
      }}
      className="categories-swiper"
    >
      {categories.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="cat-card">
            <div className="cat-image">
              <img src={item.img} alt={item.title} />
            </div>
            <span className="cat-title">{item.title}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
