'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const ImageSlider = () => {
  const images = [
    { src: '/images/sky1.jpg', alt: 'sky1'},
    { src: '/images/sky2.jpg', alt: 'sky2'},
    { src: '/images/sky3.jpg', alt: 'sky3'},
  ];

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-96">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider

