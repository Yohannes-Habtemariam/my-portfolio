import React from "react";
import "./Testimonial.css"
import {testimonialData} from "../../data/Data";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5> Review From Clients </h5>
      <h2> Testimonials </h2>

      <Swiper className="container testimonial-container"
        modules={[Navigation, EffectFade]}
        navigation
        effect
        spaceBetween={40}
        speed={700}
        slidesPerView={1}
        loop
      >
        {testimonialData.map(({image, name, paragraph}, index) => {
          return (
            <SwiperSlide className="testimonial-slider" key={index}>
              <div className="swiper-slide-container">
                <figure className="client-image">
                  <img src={image} alt="" />
                </figure>
                <h5 className="client-name"> {name} </h5>
                <small className="client-review"> {paragraph} </small>
              </div>
            </SwiperSlide>
          );
        })}
        
      </Swiper>
    </section>
  );
};

export default Testimonial;
