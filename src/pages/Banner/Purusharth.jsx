import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import p1 from "../../assets/purusharth/purushrth.png";
import p2 from "../../assets/purusharth/pu1.png";
import img1 from "../../assets/purusharth/pu2.png";
import img2 from "../../assets/navri/img2.png";
import brooch from "../../assets/purusharth/ss1.png";
import pin from "../../assets/purusharth/pin.png";
import ring from "../../assets/purusharth/ss4.png";
import mala from "../../assets/purusharth/ss2.png";
import brecleate from "../../assets/purusharth/ss3.png";
import pp1 from "../../assets/purusharth/brooch.png";
import pp2 from "../../assets/purusharth/mala.png";
import pp3 from "../../assets/purusharth/brecleate.png";
import pp4 from "../../assets/purusharth/ring.png";
import pp5 from "../../assets/purusharth/pin.png";
import mobile from "../../assets/mobile/pursharth.png"
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant";
import Ribben from "../Ribben";

// Product Array
const products = [
  { img1: pp1, image: p2 },
  { img1: pp2, image: brooch },
  { img1: pp3, image: mala },
  { img1: pp4, image: brecleate },
  { img1: pp5, image: ring },
];

const Purusharth = () => {
  // State to track window width
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
            <img src={img1} alt="" className="w-40 h-20" />
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
      पुर्षार्थ म्हणजे केवळ दागदागिने नाही, ती आहे नवरदेवाच्या आत्मविश्वासाची आणि
      त्याच्या शानदारी व्यक्तिमत्वाची ओळख!{" "}
      <span className="font-bold">MVM</span> चं रुबाब कलेक्शन नवरदेवांच्या खास
      दिवसाला शोभणाऱ्या परंपरेचा आणि आधुनिकतेचा संगम आहे.
    </p>
  </div>
</div>

              </>
      ) : (
        // ✅ Desktop View
        <>
          <div className="">
            <div
              style={{ backgroundImage: `url(${p1})` }}
              className="bg-cover bg-no-repeat bg-center flex w-full custom-height-1"
            >
              <div className="container pt-10">
                <div className="flex justify-end items-center pb-10 flex-col w-full max-w-[850px]">
                  <div className="flex items-center gap-3 md:pb-10 pb-10 pr-0 md:pr-30 flex-col">
                    <img src={img1} alt="" className="h-28" />
                    <img src={img2} alt="" />
                  </div>

                  <div className="w-full max-w-[1200px]">
                    <Swiper
                      spaceBetween={1}
                      navigation={false}
                      pagination={{ clickable: true }}
                      modules={[Navigation, Pagination]}
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

                <div className="w-full flex justify-start items-start">
                  <p className="text-white baloo text-[23px]">
                    आपल्या दागिन्यांमध्ये भारतीय परंपरेची मोहक छटा गुंफलेली
                    आहे. MVM ज्वेलर्समध्ये प्रत्येक<br /> दागिना हा सांस्कृतिक
                    वारशाचा संगम आणि कौशल्यपूर्ण कारागिरीचे प्रतीक आहे.
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

export default Purusharth;
