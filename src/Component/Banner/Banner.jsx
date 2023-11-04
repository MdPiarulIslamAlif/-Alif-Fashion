import React, { useRef, useState } from 'react';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
import banner from "../../../src/assets/banner/banner1.jpg"
import banner2 from "../../../src/assets/banner/banner2.jpg"
import banner3 from "../../../src/assets/banner/banner3.jpg"
import banner4 from "../../../src/assets/banner/banner4.jpg"
import banner5 from "../../../src/assets/banner/banner5.jpg"
import banner6 from "../../../src/assets/banner/banner6.jpg"
import banner7 from "../../../src/assets/banner/banner7.jpg"
import banner8 from "../../../src/assets/banner/banner8.jpeg"
import banner9 from "../../../src/assets/banner/banner9.jpg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
     return (
       <div>
         <Swiper
           spaceBetween={30}
           centeredSlides={true}
           autoplay={{
             delay: 2500,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true,
           }}
           navigation={true}
           modules={[Autoplay, Pagination, Navigation]}
           className="mySwiper">
           <SwiperSlide>
             <img className="max-h-[800px]" src={banner} alt="" />
           </SwiperSlide>
           <SwiperSlide>
             <img className="max-h-[800px]" src={banner2} alt="" />
           </SwiperSlide>
           <SwiperSlide>
             <img className="max-h-[800px]" src={banner3} alt="" />
           </SwiperSlide>
           <SwiperSlide>
             <img className="max-h-[800px]" src={banner4} alt="" />
           </SwiperSlide>
           <SwiperSlide>
             <img className="max-h-[800px]" src={banner5} alt="" />
           </SwiperSlide>
           <SwiperSlide>
             <img className="max-h-[800px]" src={banner6} alt="" />
           </SwiperSlide>
           <SwiperSlide>
             <img className="max-h-[800px]" src={banner7} alt="" />
           </SwiperSlide>
           <SwiperSlide>
             <img className="max-h-[800px]" src={banner8} alt="" />
           </SwiperSlide>
           <SwiperSlide>
             <img className="max-h-[800px]" src={banner9} alt="" />
           </SwiperSlide>
         </Swiper>
       </div>
     );
};

export default Banner;