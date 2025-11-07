const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner */}
      <section className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center mb-10">
        <h2 className="text-3xl font-bold text-gray-700">خوش‌آمدید به M‍odishop 🛍️</h2>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">دسته‌بندی‌ها</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["پوشاک", "کفش", "اکسسوری", "زیبایی"].map((cat) => (
            <div
              key={cat}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer text-center"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section>
        <h3 className="text-xl font-semibold mb-4">محصولات جدید</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg"
            >
              <div className="h-40 bg-gray-100 mb-3 rounded-lg"></div>
              <h4 className="font-medium">محصول {i + 1}</h4>
              <p className="text-sm text-gray-500">قیمت: 250,000 تومان</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
