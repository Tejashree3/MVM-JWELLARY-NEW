import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";
import Ribben from "./Ribben";

const images = [banner1, banner2, banner3];

export default function ImageSlider() {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        <Swiper
          modules={[Navigation, EffectFade]}
          effect="fade"
          navigation={false}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <motion.img
                src={img}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute xl:left-1/3 left-10 top-2/3 -translate-y-1/2 bg-[#D9D9D9] text-[#717171] p-3 md:p-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-10"
        >
          ❮
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-10 xl:right-1/3 top-2/3 -translate-y-1/2 bg-[#D9D9D9] text-[#717171] p-3 md:p-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-10"
        >
          ❯
        </button>
      </div>
      <Ribben />
    </>
  );
}