import Logo from "../../assets/Logo/Logo.webp";
import SearchBar from "../ui/SearchBar";
import { FiShoppingCart, FiPhoneCall } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      {/* موبایل: فقط SearchBar + آیکون تماس */}
      <div className="flex items-center justify-between p-2 md:hidden bg-gray-100 border border-gray-300 rounded-lg gap-3">
        <SearchBar />
        <button className="text-2xl text-gray-500 p-2 border border-gray-300 rounded-lg">
          <FiPhoneCall />
        </button>
      </div>

      {/* دسکتاپ: ساختار اصلی حفظ شده */}
      <div className="hidden md:flex justify-center items-center py-11 px-8 bg-white shadow-sm">
        {/* سمت راست: لوگو */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Modishop" className="w-45 me-5" />
        </div>

        {/* وسط: منو */}
        <div className="flex flex-col justify-items-end">
          <SearchBar />
          <nav className="hidden md:flex gap-6 text-gray-600 text-sm">
            {[
              "زنانه",
              "مردانه",
              "بچگانه",
              "ورزشی",
              "رسمی",
              "راحتی",
              "زمستانه",
              "تابستانه",
              "هودی و سویشرت",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-neutral-400 font-bold text-lg"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* سمت چپ: دکمه‌ها */}
        <div className="flex mb-5 mr-1 gap-1">
          <button>
            <img src="public/buy-option.png" className="rounded-full" alt="" />
          </button>
          <button className="text-gray-700 text-xl">
            <FiShoppingCart />
          </button>
          <button className="font-semibold text-base text-gray-950">
            وارد شوید
          </button>
        </div>
      </div>
    </header>
  );
}
