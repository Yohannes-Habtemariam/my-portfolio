import React, { useState } from "react";
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
  // State variables 
  const [fullName, setFullName] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [photo, setPhoto] = useState("");
  const [testimonials, setTestimonials] = useState([]);

  // Update data 
  const updateData = (event) => {
    switch(event.target.name) {
      case "fullName":
        setFullName(event.target.value)
        break;
      case "testimonial":
         setTestimonial(event.target.value)
         break;
      case "photo":
        setPhoto(event.target.value)
        break;
      default:
        break;
    }
  }

  // Submit Testimonial
  const submitTestimonial = (event) => {
    event.preventDefault();
  
    const newTestimonial = {
      fullName: fullName,
      testimonial: testimonial,
      photo: photo
    }
      try{
        setTestimonials([...testimonials, newTestimonial]);
        setFullName("")
        setTestimonial("")
        setPhoto("")
      }catch(err){
        console.log(err)
      }
  }


  return (
    <section id="testimonials">
      <h5> Review From Clients </h5>
      <h2 className="testimonial-h2"> Testimonials </h2>

      <div className="testimonial-container">

          <Swiper className="swiper-container"
            modules={[Navigation, EffectFade]}
            navigation
            effect
            spaceBetween={40}
            speed={700}
            slidesPerView={1}
            loop
          >
            {testimonialData.map(({image, name, title, paragraph}, index) => {
              return (
                <SwiperSlide className="testimonial-slider" key={index}>
                  <div className="swiper-slide-container">
                    <figure className="client-image">
                      <img src={image} alt="" />
                    </figure>
                    <h3 className="client-name"> {name} </h3>
                    <h6 className="client-title"> {title} </h6>
                    <p className="client-testimonial"> {paragraph} </p>
                  </div>
                </SwiperSlide>
              );
            })}
            
          </Swiper>

          <div>
            <p className="testimonial-paragraph">
              The testimonials provided in the slider are an honest endorsement of my character, qualifications, and accomplishments provided by my clients, colleagues, teachers, or peers. Thank you all for your constructive comments. If you do not feel comfortable to post your photo on the testimonial page, it is not a must. However, if you are willing to have your photo published, I would appreciate it if you could send me via the form below.
            </p>

            <form onSubmit={submitTestimonial} encType="multipart/form-data" className="testimonial-form">
              <div className="testimonial-form-input-container">
                <label htmlFor="fullName"> Full Name </label>
                <input 
                    type="text" 
                    name="fullName" 
                    id="fullName" 
                    onChange={updateData}
                    value={fullName} 
                />
              </div>

              <div className="testimonial-form-input-container">
                <textarea 
                    name="testimonial" 
                    cols="30" 
                    rows="11" 
                    placeholder="Type here your testimonial about Dr.Yohannes"
                    onChange={updateData}
                    value={testimonial}
                ></textarea>
              </div>

              <div className="testimonial-form-input-container">
                <label htmlFor="photo"> Attach Photo </label>
                <input 
                    type="file" 
                    name="photo" 
                    id="photo" 
                    onChange={updateData}
                    value={photo}
                />
              </div>

              <div>
                <button className='btn btn-primary'>Submit</button>
              </div>
            </form>
          </div>
      </div>
    </section>
  );
};

export default Testimonial;
