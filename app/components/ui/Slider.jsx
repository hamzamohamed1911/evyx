"use client";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { ourCustomers } from '@/app/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';

const Slider = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 bg-[#CCCCCC]"></div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={7}
        spaceBetween={10}

        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }} breakpoints={{
          320: { // Mobile devices
            slidesPerView: 1,
          },
          480: { // Small tablets
            slidesPerView: 2,
          },
          768: { // Tablets
            slidesPerView: 3,
          },
          1024: { // Laptops and above
            slidesPerView: 5,
          },
          1440: { // Large screens
            slidesPerView: 7,
          },
        }}
        className={styles.swiperContainer}
      >
        {ourCustomers.map((customer) => (
          <SwiperSlide key={customer.id} className={styles.swiperSlide}>
            <div  className="flex justify-center items-center h-full w-full"> 
              <Image
                src={customer.image}
                alt={customer.name}
                priority={true}
                quality={100}
                width={190}
                height={80}
                className="mx-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
