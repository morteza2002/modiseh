import { useEffect, useState } from "react";

const OfferCard = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 29,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#C6284B] text-white rounded-2xl p-4 relative overflow-hidden flex flex-col items-center w-[180px] h-[290px]">
      <div className="absolute top-3 right-3 text-xs font-semibold cursor-pointer hover:underline">
        مشاهده همه &lt;
      </div>

      <div className="flex gap-2 mt-10">
        <div className="border-2 border-white rounded-lg px-3 py-1 text-center">
          <p className="text-lg font-bold">
            {String(timeLeft.hours).padStart(2, "0")}
          </p>
          <p className="text-xs">ساعت</p>
        </div>
        <div className="border-2 border-white rounded-lg px-3 py-1 text-center">
          <p className="text-lg font-bold">
            {String(timeLeft.minutes).padStart(2, "0")}
          </p>
          <p className="text-xs">دقیقه</p>
        </div>
      </div>

      <img
        src="/offImage/offimg.png"
        alt="offer bag"
        className="w-[113px]  mt-4 object-contain"
      />

   
    </div>
  );
};

export default OfferCard;
