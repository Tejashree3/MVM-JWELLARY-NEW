import React, { useEffect, useState } from 'react';
import img from "../../assets/navri/navri.png";
import img1 from "../../assets/navri/img1.png";
import img2 from "../../assets/navri/img2.png";
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant';
import img11 from "../../assets/navri/1.png";
import Ribben from '../Ribben';

const Navri = () => {
  const [imageSrc, setImageSrc] = useState(img);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth >= 1600) {
        setImageSrc(img);
      } else {
        setImageSrc(img11);
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage); 

    return () => window.removeEventListener("resize", updateImage); 
  }, []);
  return (
    <>


    <div className="relative w-full">
<img 
      src={imageSrc} 
      alt="Background" 
      className="w-full custom-height-1 bg-center "
    />  <div className="absolute inset-0 flex items-start justify-center text-white">
  <div className='container flex justify-end items-end pt-0 lg:pt-32 flex-col'>

<div className='flex justify-between items-center gap-6 pr-0 md:pr-28 flex-col'>
  <img src={img1} alt="" className="h-28"/>
  <img src={img2} alt="" />

  <div className=''>
    <Link to={ROUTES.COLLECTIONS}>
      <button className='shop-now'>
        SHOP NOW
      </button>
    </Link>
  </div>
</div>
</div> 
 </div>
</div>
<Ribben/>
    </>
  );
};

export default Navri;
