import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full">
      {/* نوار تبلیغاتی بالا */}
       <img
        className="w-full md:object-cover object-fill h-13 md:h-20" 
        src="/head-bg-info.gif"
        alt="تبلیغات"
      />

       {/* نوبار سایت */}
       <Navbar />
  
    </header>
  );
}
