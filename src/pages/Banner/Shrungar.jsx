import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import p1 from "../../assets/shrungar/shrungar.png";
import s1 from "../../assets/shrungar/sh1.png";
import s2 from "../../assets/shrungar/sh2.png";
import s3 from "../../assets/shrungar/sh3.png";
import s4 from "../../assets/shrungar/sh4.png";
import s11 from "../../assets/shrungar/sh11.png";
import s12 from "../../assets/shrungar/sh12.png";
import s13 from "../../assets/shrungar/sh13.png";
import s14 from "../../assets/shrungar/sh14.png";

import img1 from "../../assets/shrungar/gaar.png";
import img2 from "../../assets/navri/img2.png";

import { Link } from "react-router-dom";
import { ROUTES } from "../../constant";
import Ribben from "../Ribben";

const products = [
    { img1:s11 , image: s1 },
    { img1:s12, image: s2 },
    { img1:s13 , image: s3 },
    { img1: s14, image: s4 },
];

const Shrungar = () => {
    return (
        <>
        
        
    
        <div className="">
            <div
                style={{ backgroundImage: `url(${p1})` }}
                className="bg-cover bg-no-repeat bg-bottom flex justify-center items-center w-full custom-height-1"
            >
                <div className="container">
                    <div className="flex justify-end items-center pt-10 md:pt-10 pb-20 flex-col w-full max-w-[750px]">
                        <div className="flex items-center gap-3 md:pb-15 pb-10 pr-0   md:pr-30 flex-col">
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
                                    <SwiperSlide key={index} className="flex flex-col justify-center items-center">
   <Link to={ROUTES.PRODUCTS}>
                                        
                                        <img src={product.image} alt="Placeholder" className="mb-5   h-52" />
                                      </Link>                                               

                                       <div className="flex justify-center items-center">
                                      
                                                                                <img src={product.img1} className="" alt=""/>
                                                                              </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

</div>
                    </div>

                        <div className="w-full pb-20 flex justify-start items-start">
                            <p className="text-white baloo text-[23px]">

                                आपल्या दागिन्यांमध्ये भारतीय परंपरेची मोहक छटा गुंफलेली आहे. MVM ज्वेलर्समध्ये <br /> प्रत्येक दागिना हा
                                सांस्कृतिक वारशाचा संगम आणि कौशल्यपूर्ण कारागिरीचे प्रतीक आहे.
                            </p>
                        </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Shrungar;
