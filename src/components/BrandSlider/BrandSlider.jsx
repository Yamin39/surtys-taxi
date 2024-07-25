import { Swiper, SwiperSlide } from "swiper/react";
import brand1 from "../../assets/images/brand-1-1.jpg";
import brand2 from "../../assets/images/brand-1-2.jpg";
import brand3 from "../../assets/images/brand-1-3.jpg";
import brand4 from "../../assets/images/brand-1-4.jpg";
import brand5 from "../../assets/images/brand-1-5.jpg";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const BrandSlider = () => {
  const brands = [
    {
      logo: brand1,
    },
    {
      logo: brand2,
    },
    {
      logo: brand3,
    },
    {
      logo: brand4,
    },
    {
      logo: brand5,
    },
    {
      logo: brand3,
    },
  ];
  return (
    <div className="py-[5.625rem] border-t-[0.125rem] border-t-[#F3F3F3]">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <Swiper
          slidesPerView={window.innerWidth <= 640 ? 3 : 5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          loop={true}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="w-fit">
              <img src={brand?.logo} alt="Brand logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSlider;
