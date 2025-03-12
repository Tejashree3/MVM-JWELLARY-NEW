import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import p1 from "../../assets/purusharth/purushrth.png";
import p2 from "../../assets/purusharth/pu1.png";
import img1 from "../../assets/purusharth/pu2.png";
import img2 from "../../assets/navri/img2.png";
import brooch from "../../assets/purusharth/ss1.png";
import pin from "../../assets/purusharth/pin.png";
import ring from "../../assets/purusharth/ss4.png";
import mala from "../../assets/purusharth/ss2.png";
import brecleate from "../../assets/purusharth/ss3.png";
import pp1 from "../../assets/purusharth/brooch.png"
import pp2 from "../../assets/purusharth/mala.png"
import pp3 from "../../assets/purusharth/brecleate.png"
import pp4 from "../../assets/purusharth/ring.png"
import pp5 from "../../assets/purusharth/pin.png"


import { Link } from "react-router-dom";
import { ROUTES } from "../../constant";

const products = [
  { img1:pp1 , image: p2 },
  { img1:pp2, image: brooch },
  { img1: pp3, image: mala },
  { img1:pp4, image: brecleate },
  { img1: pp5, image: ring },
];

const Purusharth = () => {
  return (
    <div className="">
              <div
                  style={{ backgroundImage: `url(${p1})` }}
                  className="bg-cover bg-no-repeat bg-center  flex justify-center items-center w-full custom-height-1"
              >
                  <div className="container">
                      <div className="flex justify-end items-center pt-10 md:pt-10 pb-20 flex-col w-full max-w-[850px]">
                          <div className="flex items-center gap-3 md:pb-15 pb-10 pr-0   md:pr-30 flex-col">
                              <img src={img1} alt="" className="h-28"/>
                              <img src={img2} alt="" />
                          </div>
  
                          
                          <div className="w-full max-w-[1200px]">
  
                              <Swiper
                                  spaceBetween={1}
                                  navigation={false}
                                  pagination={{ clickable: true }}
                                  modules={[Navigation]}
                                  className="mySwiper"
                                  breakpoints={{
                                    
                                    320: { slidesPerView: 1 }, 
                                    480: { slidesPerView: 2 }, 
                                    640: { slidesPerView: 3 }, 
                                    768: { slidesPerView: 4 }, 
                                    1024: { slidesPerView: 5 }, 
                                  }}
                              >
                                  {products.map((product, index) => (
                                     <SwiperSlide key={index} className="flex flex-col items-center justify-center">
                                     <Link to={ROUTES.PRODUCTS} className="flex justify-center">
                                       <img 
                                         src={product.image} 
                                         alt="Placeholder" 
                                         className="mb-5 h-52 object-contain mx-auto" 
                                       />
                                     </Link>   
                                     <img 
                                       src={product.img1} 
                                       alt="" 
                                       className="h-10 object-contain mx-auto" 
                                     />
                                   </SwiperSlide>
                                   
                                  ))}
                              </Swiper>
  
  </div>
                      </div>
  
                          <div className="w-full pb-20 flex justify-start items-start">
                              <p className="text-white baloo text-[23px]">
  
                                  आपल्या दागिन्यांमध्ये भारतीय परंपरेची मोहक छटा गुंफलेली आहे. MVM ज्वेलर्समध्ये प्रत्येक<br /> दागिना हा
                                  सांस्कृतिक वारशाचा संगम आणि कौशल्यपूर्ण कारागिरीचे प्रतीक आहे.
                              </p>
                          </div>
                  </div>
              </div>
          </div>
  );
};

export default Purusharth;
