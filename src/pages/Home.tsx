import HomeCategory from "../components/Home-layout/HomeCategory";
import OfferGrid from "../components/Home-layout/OfferGrid";

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
      <section className="container mx-auto   ">
          <ProductSlider />
      </section>

      <section className="">
           <OfferGrid />
      </section>
    </div>
  );
};

export default Home;
