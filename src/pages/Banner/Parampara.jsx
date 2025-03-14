import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import p11 from "../../assets/parampara/parampara.png";
import p1 from "../../assets/parampara/p1.png";
import p2 from "../../assets/parampara/p2.png";
import p3 from "../../assets/parampara/p3.png";
import p4 from "../../assets/parampara/p4.png";
import p5 from "../../assets/parampara/p5.png";
import pp1 from "../../assets/parampara/pp1.png";
import pp2 from "../../assets/parampara/pp2.png";
import pp3 from "../../assets/parampara/pp3.png";
import pp4 from "../../assets/parampara/pp4.png";
import pp5 from "../../assets/parampara/pp5.png";
import img1 from "../../assets/parampara/para.png"
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant";
import img2 from "../../assets/navri/img2.png";
import Ribben from "../Ribben";

const products = [
  { img1: pp1, image: p1 },
  { img1: pp2, image: p2 },
  { img1: pp3, image: p3 },
  { img1: pp4, image: p4 },
  { img1: pp5, image:p5  },
];

const Parampara = () => {
  return (
    <>
    
    <Ribben/>

    <div className="">
              <div
                  style={{ backgroundImage: `url(${p11})` }}
                  className="bg-cover bg-no-repeat bg-center w-full flex justify-center items-center custom-height-1"
              >
                  <div className="container">
                      <div className="flex justify-end items-center pt-10 md:pt-10 pb-20 flex-col w-full max-w-[850px]">
                          <div className="flex items-center gap-3 md:pb-15 pb-10 pr-0   md:pr-30 flex-col">
                              <img src={img1} alt="" className="h-24"/>
                              <img src={img2} alt="" />
                          </div>
  
                          
                          <div className="w-full max-w-[1200px]">
  
                              <Swiper
                                  spaceBetween={0}
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
                                                                     <Link to={ROUTES.COLLECTIONS} className="flex justify-center">
                                                                       <img 
                                                                         src={product.image} 
                                                                         alt="Placeholder" 
                                                                         className="mb-5 h-52 object-contain mx-auto" 
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
  
                                  आपल्या दागिन्यांमध्ये भारतीय परंपरेची मोहक छटा गुंफलेली आहे. MVM ज्वेलर्समध्ये प्रत्येक दागिना<br /> हा
                                  सांस्कृतिक वारशाचा संगम आणि कौशल्यपूर्ण कारागिरीचे प्रतीक आहे.
                              </p>
                          </div>
                  </div>
              </div>
          </div>

    <Ribben/>
    </>
    );
};

export default Parampara;
