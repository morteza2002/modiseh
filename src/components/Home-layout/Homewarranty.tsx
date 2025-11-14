import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  const icons = [
    { title: "بازگشت رایگان تا هفت روز", img: "/warranty/Artboard_4-min.webp" },
    { title: "ارسال اکسپرس", img: "/warranty/Artboard_3-min.webp" },
    { title: "امکان پرداخت در محل", img: "/warranty/Artboard_2-min.webp" },
    { title: "ضمانت اصالت کالا", img: "/warranty/Artboard_1-min.webp" },
  ];

  const trustLogos = [
    "/trustFolder/logo.png",
    "/trustFolder/logo (1).png",
    "/trustFolder/22-80.webp",

  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-10 text-center">
      {/* آیکون‌ها */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {icons.map((item, i) => (
          <div key={i} className="flex flex-col items-center space-y-3">
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
              loading="lazy"
            />
            <p className="text-sm text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>

      {/* عنوان */}
      <h2 className="text-2xl md:text-3xl font-extrabold mb-5 text-gray-900 text-right ps-2">
        قالب فروشگاهی
      </h2>

      {/* بخش توضیحات و لوگوها */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* توضیحات */}
        <div className="md:w-[70%] w-full leading-8 text-gray-700 text-justify bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
          <div
            className={`transition-all duration-700 ease-in-out ${
              expanded
                ? "max-h-[2000px] opacity-100 translate-y-0"
                : "max-h-40 opacity-90 overflow-hidden translate-y-1"
            }`}
          >
            این یک دمو از قالب فروشگاهی حرفه‌ای است که با الهام از ساختار، چیدمان و تجربه کاربری وب‌سایت مدیسه طراحی شده است. هدف این قالب، نمایش قدرت طراحی واکنش‌گرا و پیاده‌سازی رابط کاربری مدرن با استفاده از تکنولوژی‌های روز مانند React، TypeScript و TailwindCSS است.  
            <br />
            در این قالب سعی شده تا تمامی اجزای اصلی یک فروشگاه اینترنتی مانند دسته‌بندی محصولات، اسلایدرها، پیشنهاد ویژه، کارت محصول، صفحه جزئیات، سبد خرید و صفحه پرداخت با بالاترین سطح بهینه‌سازی طراحی شوند. ساختار کدنویسی این قالب بر پایه کامپوننت‌های ماژولار و قابل استفاده مجدد است تا توسعه‌دهندگان بتوانند به‌سادگی آن را شخصی‌سازی و گسترش دهند.  
            <br />
            این دمو صرفاً جهت نمایش طراحی، انیمیشن‌ها و عملکرد واکنش‌گرای صفحات ساخته شده و شامل هیچ محتوای واقعی یا تجاری نیست. تمامی متن‌ها، تصاویر و آیکون‌ها در این نسخه صرفاً جنبه نمونه دارند. هدف این پروژه، ارائه‌ی الگویی تمیز، زیبا و سازگار با تمام دستگاه‌هاست تا مسیر ساخت فروشگاه اینترنتی شما را هموارتر کند.  
            <br />
            در نهایت، تمرکز اصلی این قالب روی تجربه کاربری روان، سرعت بالا، و زیبایی بصری هماهنگ با برندهای مدرن ایرانی است تا کاربران هنگام بازدید از سایت شما، حس اعتماد و حرفه‌ای بودن را تجربه کنند.
          </div>

          {/* دکمه نمایش بیشتر */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-pink-600 font-semibold hover:text-pink-700 transition-all duration-300"
            >
              {expanded ? (
                <>
                  نمایش کمتر <ChevronUp className="w-4 h-4 mt-0.5" />
                </>
              ) : (
                <>
                  نمایش بیشتر <ChevronDown className="w-4 h-4 mt-0.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* لوگوهای پایین */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 md:mt-0 md:w-[25%]">
          {trustLogos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`trust-logo-${i}`}
              className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
