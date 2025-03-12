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
import s1 from "../../assets/special/sp1.png";
import s2 from "../../assets/special/sp2.png";
import s3 from "../../assets/special/sp3.png";
import s4 from "../../assets/special/sp4.png";
import s11 from "../../assets/special/sp11.png";
import s12 from "../../assets/special/sp12.png";
import s13 from "../../assets/special/sp13.png";
import s14 from "../../assets/special/sp14.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant";
import Ribben from "../Ribben";
const products = [
  { img1:s1 , image: s11 },
  { img1:s2, image: s12 },
  { img1: s3, image: s13 },
  { img1:s4, image: s14 },
];

const Special = () => {
  return (


    <>
    <div className="w-full">
      <div className="flex justify-center items-center flex-col gap-3 py-28">
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img3} alt="" />
      </div>

      <div
        style={{ backgroundImage: `url(${img1})` }}
        className="bg-cover bg-center bg-[#660033] bg-no-repeat w-full h-[600px] md:min-h-[800px] relative flex flex-col items-center"
      >
        <img
          src={img2}
          alt="Maharashtra Theme"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-4/5"
        />

        <div className="container relative z-0 w-full -my-10">
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
           {products.map((product, index) => (
                                      <SwiperSlide key={index} className="flex flex-col justify-center gap-4 items-center">
   <Link to={ROUTES.PRODUCTS}>
                                        
                                        <img src={product.img1} alt="Placeholder" className="mb-5  p-2 " />
                                      </Link>   
                                      <div className="flex justify-center items-center">

                                      <img src={product.image} alt="" />
                                      </div>

                                      </SwiperSlide>
                                  ))}
          </Swiper>
        </div>
      </div>
    </div>


    <Ribben/>
    </>
  );
};

export default Special;
