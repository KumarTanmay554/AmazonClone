import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/navigation"
import { Navigation, Autoplay } from 'swiper/modules';
function Carousel() {
  return (
    <div className="h-[600px] bg-white">
      <Swiper 
        loop={true}
        spaceBetween={3}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_2.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_4.jpg"} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_5.jpg"} alt="Carousel POR" />
        </SwiperSlide>

      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
    </div>
  )
}

export default Carousel
