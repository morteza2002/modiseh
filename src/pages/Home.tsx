import AdsOption from "../components/Home-layout/AdsOption";
import HomeCategory from "../components/Home-layout/HomeCategory";
import Homewarranty from "../components/Home-layout/Homewarranty";
import MagazineSection from "../components/Home-layout/MagazineSection";
import MiniBannerSlider from "../components/Home-layout/MiniBannerSliderHome";
import OfferGrid from "../components/Home-layout/OfferGrid";
import SelectedBrands from "../components/Home-layout/SelectedBrandsHome";

import HeroSlider from "../components/layout/HeroSlider";
import ManClothesSlider from "../components/ProductComponents/manProductSlider/ProductSliderWithSidebar-man";
import ProductSlider from "../components/ProductComponents/ProductSlider";
import WomenClothesSlider from "../components/ProductComponents/womanProductSlider/ProductSliderWithSidebar-woman";

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
       <section className="">
        <WomenClothesSlider />
      </section>
        <section className="">
        <ManClothesSlider />
      </section>
      <section>
        <MiniBannerSlider />
      </section>
      <section>
        <SelectedBrands />
      </section>
      <section>
        <AdsOption/>
      </section>
      <section>
        <MagazineSection />
      </section>
      <section>
        <Homewarranty />
      </section>
    </div>
  );
};

export default Home;
