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
import brooch from "../../assets/purusharth/brooch.png";
import pin from "../../assets/purusharth/pin.png";
import ring from "../../assets/purusharth/ring.png";
import mala from "../../assets/purusharth/mala.png";
import brecleate from "../../assets/purusharth/brecleate.png";

const products = [
  { name: "ब्रोजेस", image: brooch },
  { name: "माळा", image: mala },
  { name: "ब्रॅसलेट", image: brecleate },
  { name: "अंगठी", image: ring },
  { name: "टाय पिन्स", image: pin },
];

const Purusharth = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        style={{ backgroundImage: `url(${p1})` }}
        className="bg-cover flex justify-start items-start bg-no-repeat bg-center w-full h-100vh"
      >
        <div className="container">
          <div className="flex justify-end items-center pt-30 md:pt-50 pb-20 flex-col">
            <div className="flex items-center gap-3 md:pb-25 pb-10 pr-0   md:pr-30 flex-col">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>

            <div className="w-full max-w-[1200px] mx-auto">
            <Swiper
  spaceBetween={0}
  navigation={true}
  pagination={{ clickable: true }}
  modules={[Navigation]}
  className="mySwiper"
  breakpoints={{
    320: { slidesPerView: 2, },  
    500: { slidesPerView: 3, },  
    768: { slidesPerView: 4,  },  
    1024: { slidesPerView: 5,  },
  }}
>
  {products.map((product, index) => (
    <SwiperSlide key={index} className="flex flex-col justify-center items-center">
      <img src={p2} alt="Placeholder" className="mb-12 " />
      <img src={product.image} alt={product.name} />
    </SwiperSlide>
  ))}
</Swiper>

            </div>

            <div className="md:pt-22 pt-10">
              <p className="text-white baloo text-[23px]">
                पुर्षार्थ म्हणजे केवळ दागदागिने नाही, ती आहे नवरदेवाच्या आत्मविश्वासाची आणि
                त्याच्या शानदारी <br />
                व्यक्तिमत्वाची ओळख! MVM चं रुबाब कलेक्शन नवरदेवांच्या खास दिवसाला शोभणाऱ्या
                परंपरेचा आणि आधुनिकतेचा संगम आहे.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purusharth;
