import React from "react";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700 pt-10 pb-5 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* --- بالای فوتر (لینک‌ها و اطلاعات) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
          {/* ستون 3 - لوگو */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="public\footerImg\Modiseh-f.webp"
              alt="modishop-logo"
              className="w-50 mb-2"
            />
          </div>
          {/* ستون 1 */}
          <div>
            <h4 className="font-bold mb-3 text-gray-900">درباره مدیسه</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-600">
                  پرسش‌های متداول
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">
                  شرایط بازگشت کالا
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">
                  حریم شخصی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">
                  همکاری تجاری
                </a>
              </li>
            </ul>
          </div>

          {/* ستون 2 */}
          <div>
            <h4 className="font-bold mb-3 text-gray-900">وبلاگ مدیسه</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-600">
                  مردانه
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">
                  زنانه
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">
                  بچگانه
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">
                  آرایشی و بهداشتی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600">
                  خرید هدیه
                </a>
              </li>
            </ul>
          </div>

          {/* ستون 4 - اطلاعات تماس */}
          <div>
            <h4 className="font-bold mb-3 text-gray-900">ارتباط با ما</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> <span>۰۸۱-۳۴۵۶۷۸۹۰</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> <span>support@modishop.ir</span>
              </li>
              <li className="flex items-start gap-2 leading-6">
                <Clock className="w-4 h-4 mt-0.5" />
                شنبه تا چهارشنبه از ساعت ۹:۰۰ تا ۱۸:۰۰
                <br /> پنج‌شنبه از ساعت ۹:۰۰ تا ۱۴:۰۰
              </li>
              <li className="flex items-start gap-2 leading-6">
                <MapPin className="w-4 h-4 mt-0.5" />
                همدان، بلوار بعثت، خیابان طالقانی، پلاک ۲۵، طبقه دوم، واحد ۳
              </li>
            </ul>
          </div>

          {/* ستون 5 */}
          <div>
            <h4 className="font-bold mb-3 text-gray-900">اخبار مدیسه</h4>
            <p className="text-gray-500 text-sm mb-3">
              آدرس ایمیلتان را وارد نمایید
            </p>
            <div className="flex rounded-lg overflow-hidden border border-gray-300">
              <input
                type="email"
                placeholder="ایمیل شما"
                className="flex-1 px-3 py-2 text-sm outline-none"
              />
              <button className="bg-pink-600  text-white px-3 ps-2 text-sm font-semibold hover:bg-pink-700 transition-all">
                ثبت
              </button>
            </div>
          </div>
        </div>

        {/* --- شبکه‌های اجتماعی --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-200 pt-5 text-sm">
          <div className="flex items-center gap-3 text-gray-500">
            <span>شبکه‌های اجتماعی</span>
            <a href="#" className="hover:text-pink-600">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-pink-600">
              <Facebook size={18} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-4 md:mt-0">
            <img
              src="/soial-img/myket2.webp"
              alt="myket"
              className="h-10 rounded-md border hover:shadow-md transition-transform hover:scale-105"
            />
            <img
              src="/soial-img/sibche_1_.webp"
              alt="sibche"
              className="h-10 rounded-md border hover:shadow-md transition-transform hover:scale-105"
            />
            <img
              src="/soial-img/anardoni.webp"
              alt="anardoni"
              className="h-10 rounded-md border hover:shadow-md transition-transform hover:scale-105"
            />
            <img
              src="/soial-img/cafebazar.webp"
              alt="cafebazar"
              className="h-10 rounded-md border hover:shadow-md transition-transform hover:scale-105"
            />
          </div>
        </div>

        {/* --- خط جداکننده --- */}
        <hr className="my-8 border-gray-200" />

        {/* --- بخش پاور شده توسط --- */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/mrezanj"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-pink-600 hover:text-pink-800 transition-colors"
            >
              MrezaNJ
            </a>
            <span className="text-gray-400">&</span>
            <a
              href="https://github.com/morteza2002"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-pink-600 hover:text-pink-800 transition-colors"
            >
              Morteza2002
            </a>
          </div>{" "}
          <span>Powered by</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
