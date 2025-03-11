import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/special/d.png";
import img2 from "../../assets/special/d1.png";
import img3 from "../../assets/special/s.png";
import img4 from "../../assets/special/special.png";
import img5 from "../../assets/special/shobha.png";
import img6 from "../../assets/special/mangalsutra.png";

const Special = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center flex-col gap-3 py-24">
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img3} alt="" />
      </div>

      <div
        style={{ backgroundImage: `url(${img1})` }}
        className="bg-cover bg-center bg-[#660033] bg-no-repeat w-full h-[600px] md:min-h-[900px] relative flex flex-col items-center"
      >
        <img
          src={img2}
          alt="Maharashtra Theme"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-4/5"
        />

        <div className="container relative z-0 w-full px-6 md:px-16 lg:px-32 -my-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{ delay: 2500 }}
            navigation={false}
            pagination={ false }
            className="w-full text-center"
          >
            <SwiperSlide>
              <div>
                <img src={img6} alt="Mangalsutra" className="p-2" />
                <p className="text-white text-lg font-semibold mt-2">
                  मंगळसूत्र
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img6} alt="Necklace" className="p-2" />
                <p className="text-white text-lg font-semibold mt-2">
                  लक्ष्मी हार
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img6} alt="Earrings" className="p-2" />
                <p className="text-white text-lg font-semibold mt-2">
                  १ ग्रॅम गोल्ड
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={img6} alt="Nath" className="p-2" />
                <p className="text-white text-lg font-semibold mt-2">नथ</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Special;
