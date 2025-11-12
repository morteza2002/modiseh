import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const products = [
  {
    id: 1,
    title: "مانتو پاییزه زنانه",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 850000,
    oldPrice: 1100000,
    discount: 23,
  },
  {
    id: 2,
    title: "شلوار زنانه لینن",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 520000,
    oldPrice: 650000,
    discount: 20,
  },
  {
    id: 3,
    title: "تی‌شرت نخی زنانه",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 280000,
    oldPrice: 400000,
    discount: 30,
  },
  {
    id: 4,
    title: "کفش اسپرت زنانه",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 980000,
    oldPrice: 1500000,
    discount: 35,
  },
  {
    id: 5,
    title: "پالتو زمستانی زنانه",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 1450000,
    oldPrice: 1900000,
    discount: 24,
  },
  {
    id: 6,
    title: "دامن گلدار نخی",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 430000,
    oldPrice: 550000,
    discount: 22,
  },
  {
    id: 7,
    title: "کت جین زنانه",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 890000,
    oldPrice: 1150000,
    discount: 18,
  },
  {
    id: 8,
    title: "بلوز آستین‌بلند زنانه",
    image: "https://cdn.modiseh.com/unsafe/medium/ch2043/ch2043_1_.jpg",
    price: 360000,
    oldPrice: 480000,
    discount: 25,
  },
];

const ManClothesSlider = () => {
  return (
    <div className="w-full flex justify-center my-12">
      <div className="w-[92%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] bg-white rounded-2xl shadow-sm p-3">
        
        {/* ✅ باکس عنوان و دکمه - در موبایل بالا نمایش داده می‌شود */}
        <div className="flex lg:hidden flex-col justify-center items-center bg-linear-to-b from-rose-600 to-rose-500 rounded-2xl text-white p-5 mb-5 text-center shadow-md">
          <h3 className="text-lg font-semibold mb-3">پوشاک مردانه</h3>
          <p className="text-sm mb-4 opacity-90">جدیدترین و پرفروش‌ترین لباس‌های مردانه</p>
          <button className="bg-white text-rose-600 font-semibold px-6 py-2 rounded-lg hover:bg-rose-100 duration-200">
            مشاهده همه
          </button>
        </div>

        {/* ✅ ساختار دسکتاپ: گرید */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* سمت راست برای دسکتاپ */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-[#BC264B] rounded-2xl text-white p-6 text-center shadow-md">
  <h3 className="text-xl font-semibold mb-4">پوشاک مردانه</h3>
  <p className="text-sm mb-4 opacity-90">جدیدترین و پرفروش‌ترین لباس‌های مردانه</p>
  <button className="bg-white text-[#BC264B] font-semibold px-6 py-2 rounded-lg  duration-200">
    مشاهده همه
  </button>
</div>


          {/* ✅ اسلایدر محصولات */}
          <div className="lg:col-span-4 overflow-hidden">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode]}
              style={{ width: "100%", padding: "10px 0 20px" }}
            >
              {products.map((p) => (
                <SwiperSlide
                  key={p.id}
                  className="w-40! sm:w-[180px]! md:w-[200px]! lg:w-[220px]! flex justify-center"
                >
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-3 w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="relative">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-40 object-cover rounded-xl"
                      />
                      {p.discount > 0 && (
                        <span className="absolute top-2 left-2 bg-[#BC264B] text-white text-xs font-bold px-2 py-1 rounded-lg">
                          %{p.discount} تخفیف
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold mt-3 line-clamp-1">
                      {p.title}
                    </h3>
                    <div className="flex flex-col gap-1 mt-1 text-center">
                      <span className="text-gray-400 line-through text-xs">
                        {p.oldPrice.toLocaleString()} تومان
                      </span>
                      <span className="text-green-600 font-bold text-sm">
                        {p.price.toLocaleString()} تومان
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManClothesSlider;
