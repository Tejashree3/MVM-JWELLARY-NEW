import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import p1 from "../../assets/sushobhita/sushobhita.png";
import p2 from "../../assets/purusharth/pu1.png";
import s1 from "../../assets/sushobhita/su1.png";
import s2 from "../../assets/sushobhita/su2.png";
import s3 from "../../assets/sushobhita/su3.png";
import s4 from "../../assets/sushobhita/su4.png";
import s11 from "../../assets/sushobhita/su11.png";
import s12 from "../../assets/sushobhita/su12.png";
import s13 from "../../assets/sushobhita/su13.png";
import s14 from "../../assets/sushobhita/su14.png";


import img1 from "../../assets/sushobhita/sushobit.png";
import img2 from "../../assets/navri/img2.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant";
import Ribben from "../Ribben";

import mobile from "../../assets/mobile/sushobhita.png"
const products = [
    { img1: s11, image: s1 },
    { img1:s12, image: s2 },
    { img1:s13 , image: s3 },
    { img1:s14, image: s4 },
];

const Sushobhit = () => {
        const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 550);
    
        // Handle window resize to update view
        useEffect(() => {
          const handleResize = () => {
            setIsMobileView(window.innerWidth <= 550);
          };
      
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
    return (
        <>
   {isMobileView ? (
        <>
        
     
   
        <div className="">
  <div className="relative w-full">
    {/* Background Section with Overlay */}
    <div
      style={{ backgroundImage: `url(${mobile})` }}
      className="bg-cover bg-no-repeat flex w-full relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#482318] opacity-80"></div>

      {/* Content Section */}
      <div className="container pt-10 relative z-10">
        <div className="flex justify-end items-center pb-10 flex-col w-full max-w-[850px]">
          <div className="flex items-center gap-3 md:pb-10 pb-10 pr-0 md:pr-30 flex-col">
            <img src={img1} alt="" className="w-56 h-20" />
            <img src={img2} alt="" className="w-48" />
          </div>

          <div className="w-full max-w-[1200px]">
            <Swiper
              spaceBetween={1}
           
           
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              loop={true}
              autoplay={{ delay: 2500 }}
              navigation={false}
              pagination={false}
            >
              {products.map((product, index) => (
                <SwiperSlide
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <Link
                    to={ROUTES.COLLECTIONS}
                    className="flex justify-center"
                  >
                    <img
                      src={product.image}
                      alt="Placeholder"
                      className="mb-5 h-60 object-contain mx-auto"
                    />
                  </Link>
                  <img
                    src={product.img1}
                    alt=""
                    className="h-8 object-contain mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Ribben Component */}
  <Ribben />

  <div className="w-full flex justify-start items-start">
    <p className="text-[#482318] baloo text-[13px] px-4 py-6">
    परंपरेला साजेसे तोडे, पाटल्या, बांगड्या आणि नथ, तुमच्या सौंदर्यात नवे तेज आणण्यासाठी.
    <span className="font-bold">MVM</span>  ज्वेलर्समध्ये सांस्कृतिक वारशाची झळाळी जपलेले खास दागिने.

    </p>
  </div>
</div>
</>

       ):(
        <>
        <div className="">
        <div
            style={{ backgroundImage: `url(${p1})` }}
            className="bg-cover bg-no-repeat bg-center w-full flex  custom-height-1"
        >
            <div className="container pt-10">
                <div className="flex justify-end items-center  pb-10 flex-col w-full max-w-[750px]">
                    <div className="flex items-center gap-3 md:pb-10 pb-10 pr-0   md:pr-30 flex-col">
                        <img src={img1} alt="" className="h-28"/>
                        <img src={img2} alt="" />
                    </div>

                    
                    <div className="w-full max-w-[1200px]">

                        <Swiper
                            spaceBetween={0}
                            navigation={false}
                            pagination={{ clickable: false }}
                            modules={[Navigation]}
                            className="mySwiper"
                            breakpoints={{
                              320: { slidesPerView: 1 }, 
                              480: { slidesPerView: 2 }, 
                              640: { slidesPerView: 3 }, 
                              768: { slidesPerView: 4 }, 
                              1024: { slidesPerView: 4 }, 
                            }}
                        >
                                 {products.map((product, index) => (
                                                                 <SwiperSlide key={index} className="flex flex-col items-center justify-center">
                                                                 <Link to={ROUTES.COLLECTIONS} className="flex justify-center">
                                                                   <img 
                                                                     src={product.image} 
                                                                     alt="Placeholder" 
                                                                     className="mb-5 h-48 object-contain mx-auto" 
                                                                   />
                                                                 </Link>   
                                                                 <img 
                                                                   src={product.img1} 
                                                                   alt="" 
                                                                   className="h-8 object-contain mx-auto" 
                                                                 />
                                                               </SwiperSlide>
                            
                                                              ))}
                        </Swiper>

</div>
                </div>

                    <div className="w-full pb-20 flex justify-start items-start">
                        <p className="text-white baloo text-[23px]">

                            आपल्या दागिन्यांमध्ये भारतीय परंपरेची मोहक छटा गुंफलेली आहे. MVM ज्वेलर्समध्ये <br />प्रत्येक दागिना हा
                            सांस्कृतिक वारशाचा संगम आणि कौशल्यपूर्ण कारागिरीचे प्रतीक आहे.
                        </p>
                    </div>
            </div>
        </div>
    </div>

<Ribben/>

</>
    )}
  </>


    );
};

export default Sushobhit;
