// import React, { useEffect, useState } from 'react';
// import img1 from "../../assets/navri/img1.png";
// import img2 from "../../assets/navri/img2.png";
// import { Link } from 'react-router-dom';
// import { ROUTES } from '../../constant';
// import img11 from "../../assets/navri/1.png";
// import Ribben from '../Ribben';

// const Navri = () => {
  
//   return (
//     <>


//     <div className="relative w-full">
// <img 
//       src={img11} 
//       alt="Background" 
//       className="w-full  bg-center "
//     />  <div className="absolute inset-0 flex items-start justify-center text-white">
//   <div className='container flex justify-end items-end pt-0 lg:pt-32 flex-col'>

// <div className='flex justify-between items-center gap-6 pr-0 md:pr-28 flex-col'>
//   <img src={img1} alt="" className="h-28"/>
//   <img src={img2} alt="" />

//   <div className=''>
//     <Link to={ROUTES.COLLECTIONS}>
//       <button className='shop-now'>
//         SHOP NOW
//       </button>
//     </Link>
//   </div>
// </div>
// </div> 
//  </div>
// </div>
// <Ribben/>
//     </>
//   );
// };

// export default Navri;
import React, { useEffect, useState } from 'react';
import img1 from '../../assets/navri/img1.png';
import img2 from '../../assets/navri/img2.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant';
import img11 from '../../assets/navri/1.png';
import Ribben from '../Ribben';
import mobile from "../../assets/mobile/navrai.png"
const Navri = () => {
  return (
    <>
      <div className="relative">
        {/* Web View */}
        <div
          style={{ backgroundImage: `url(${img11})` }}
          className="bg-cover bg-no-repeat bg-center hidden sm:flex w-full min-h-screen"
        >
          <div className="container pt-20">
            <div className="flex justify-start items-end pb-10 flex-col w-full">
              <div className="flex items-center gap-3 md:pb-10 pb-10 pr-0 md:pr-40 flex-col">
                <img src={img1} alt="" className="" />
                <img src={img2} alt="" />
                <div className="">
                  <Link to={ROUTES.COLLECTIONS}>
                    <button className="shop-now">SHOP NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Show below 500px */}
        <div
          style={{ backgroundImage: `url(${mobile})` }}
          className="bg-cover bg-no-repeat bg-center flex sm:hidden w-full min-h-screen"
        >
          <div className="container pt-10 px-6">
            <div className="flex flex-col h-[100%] justify-end items-center w-full pb-8">
              {/* Mobile Image */}
              <img src={img1} alt="Navri" className="w-auto h-16 mb-4" />
              <img src={img2} alt="Design" className=" w-48 h-8 mb-4" />
              {/* Mobile Button */}
              <div className="mt-1">
                <Link to={ROUTES.COLLECTIONS}>
                  <button className="shop-now">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ribbon Component */}
      <Ribben />
    </>
  );
};

export default Navri;
