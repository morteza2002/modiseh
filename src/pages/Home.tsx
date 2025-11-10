import HomeCategory from "../components/Home-layout/HomeCategory";

import HeroSlider from "../components/layout/HeroSlider";
import ProductSlider from "../components/ProductComponents/ProductSlider";

const Home = () => {
  return (
    <div className="">
                     {/* Banner */}
      <section className=" flex items-center justify-center ">
     <HeroSlider />
      </section>
                
              
 

      {/* Categories */}
      <section className="mb-12">
      <HomeCategory />
      </section>

      {/* Products */}
      <section className="container mx-auto px-4 py-8 ">
          <ProductSlider />
      </section>
    </div>
  );
};

export default Home;
