
 import React from "react";
 import img1 from "../../assets/logo.png"
  import img2 from "../../assets/collection/collection.png"
  import img3 from "../../assets/collection/bg.png"
  import img4 from "../../assets/collection/c-1.png"
  import i1 from "../../assets/collection/img1.png"
  import i2 from "../../assets/collection/img2.png"
  import i3 from "../../assets/collection/img3.png"
  import i4 from "../../assets/collection/img4.png"
  import i5 from "../../assets/collection/img5.png"
  import i6 from "../../assets/collection/img6.png"
  import i7 from "../../assets/collection/img7.png"
  import d from "../../assets/collection/dash.png"


 import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
 const collections = [
   {
     title: i1,
     items: Array(5).fill({
       img: img4, 
       name: "Saaj 1.2",
       desc: "abcdefghijklmnopqrstuvwxyz",
       code: "123456789",
       price: "14685",
     }),
   },
   {
     title: i2,
     items: [
       { img: img4, name: "बोरस", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
       { img: img4, name: "माळा", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
       { img: img4, name: "ब्रेसलेट", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
       { img: img4, name: "अंगठी", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
       { img: img4, name: "टाय पिन", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
     ],
   },
   {
    title: i3,
    items: [
      { img: img4, name: "बोरस", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "माळा", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "ब्रेसलेट", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "अंगठी", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "टाय पिन", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
    ],
  },
  {
    title: i4,
    items: [
      { img: img4, name: "बोरस", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "माळा", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "ब्रेसलेट", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "अंगठी", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "टाय पिन", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
    ],

  },
  {
    title: i5,
    items: [
      { img: img4, name: "बोरस", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "माळा", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "ब्रेसलेट", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "अंगठी", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "टाय पिन", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
    ],
  },
  {
    title: i6,
    items: [
      { img: img4, name: "बोरस", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "माळा", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "ब्रेसलेट", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "अंगठी", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "टाय पिन", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
    ],
    
  },

  {
    title: i7,
    items: [
      { img: img4, name: "बोरस", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "माळा", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "ब्रेसलेट", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "अंगठी", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
      { img: img4, name: "टाय पिन", desc: "abcdefghijklmnopqrstuvwxyz", code: "123456789", price: "14685" },
    ],
  },
 ];

 const Collection = () => {
   return (
     <div className="bg-cover bg-center  z-10 p-6"
    
     style={{backgroundImage:`url(${img3})`}}
     >

       <div className="max-w-7xl mx-auto relative ">
        <nav className="bg-transparent px-10 mb-10">
        <div className="container mx-auto flex justify-between items-center">
          <img src={img2} alt="" className='h-12 w-auto' />
          <Link to="/">
          <img
            src={img1}
            alt="Logo"
            className="h-12 w-auto"
          />
          </Link>
        </div>
      </nav>

<div className="p-8   inset-0 bg-[#660033] bg-opacity-50">

         {collections.map((collection, index) => (
           <div key={index} className="container mb-10 ">

<div className="relative flex items-end  pt-2 pb-8">
      <img src={collection.title} alt="" />

      <div className="flex-grow border-b border-dashed border-white mx-3"></div>

 
      <div className="absolute right-[50px] top-0 h-full w-[1px] bg-[radial-gradient(circle,_white_10%,_transparent_20%)] bg-repeat-y bg-[length:2px_5px]"></div>
    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
  {collection.items.map((item, i) => (
    <div
    key={i}
    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform 
    duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-2xl hover:scale-105"
  >
  
      <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
      <div className="px-4 py-3">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500 break-words">{item.desc}</p>
        <p className="text-sm text-gray-500">{item.code}</p>
        <p className="text-sm text-gray-500">₹{item.price}</p>
        <div className="flex justify-end py-2">
          <FaArrowRight />
        </div>
      </div>
    </div>
  ))}
</div>

           </div>
         ))}
</div>

       </div>
     </div>
   );
 };

 export default Collection;
