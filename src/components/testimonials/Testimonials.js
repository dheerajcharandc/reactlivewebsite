import React from 'react'
import './testimonials.css'

import CERT1 from '../../assets/ce1su.jpeg';
import CERT2 from '../../assets/ce2mo.jpeg';
import CERT3 from '../../assets/ce3busi.jpeg';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>My Achievements</h5>
      <h2>Certificates</h2>
      <Swiper className='container testimonials__container' 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}>

      <SwiperSlide className='testimonial'>
      <div>
        <img src={CERT1} alt="" className='certificate__image'/>
        <h3>Operation and Supply Chain</h3>
        <h5>IIT Madras</h5>
      </div>
      </SwiperSlide>

      <SwiperSlide className='testimonial'>
      <div>
        <img src={CERT2} alt="" className='certificate__image'/>
        <h3>Intro to Modern Politics</h3>
        <h5>IIT Guwahati</h5>
      </div>
      </SwiperSlide>

      <SwiperSlide className='testimonial'>
      <div>
        <img src={CERT3} alt="" className='certificate__image'/>
        <h3>Business Analytics</h3>
        <h5>Internshala</h5>
      </div>
      </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials