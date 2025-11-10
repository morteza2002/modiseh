interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
}

const ProductCard = ({ title, image, price, oldPrice, discount }: ProductCardProps) => {
  return (
    <div className="relative bg-white rounded-xl shadow p-3 flex flex-col items-center transition hover:-translate-y-1 hover:shadow-lg duration-200">
      {/* تخفیف بالا */}
      {discount && (
        <div className="absolute top-2 right-2 bg-[#C6284B] text-white text-xs font-bold px-2 py-1 rounded-r-lg rounded-bl-lg">
          %{discount}
        </div>
      )}

      {/* تصویر */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* عنوان */}
      <h3 className="text-sm font-semibold mt-2 text-center line-clamp-1">
        {title}
      </h3>

      {/* قیمت‌ها */}
      <div className="flex items-center gap-2 mt-1">
        {oldPrice && (
          <span className="text-gray-400 line-through text-xs">
            {oldPrice.toLocaleString()} تومان
          </span>
        )}
        <span className="text-green-600 font-bold">
          {price.toLocaleString()} تومان
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
