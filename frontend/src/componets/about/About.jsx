import React from 'react'
import myPhoto from "../../images/Yohannes.jpg";
import {BsFillAwardFill} from "react-icons/bs"
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import {FaHandsHelping} from "react-icons/fa"
import "./About.css";

const About = () => {
  return (
    <section id='about'>
      <h5> Get to Know</h5>
      <h2 className='about-h2'>About Me</h2>
      <div className='about about-container'>
        <figure className='about-me'>
          <img src={myPhoto} alt="The photo of Yohannes" />
        </figure>
        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <BsFillAwardFill className='about-icon' />
              <h5>Experience</h5>
              <small> 7+ Years Working</small>
            </article>

            <article className='about-card'>
              <AiOutlineFundProjectionScreen className='about-icon' />
              <h5>Projects</h5>
              <small> 20+ Completed</small>
            </article>

            <article className='about-card'>
              <FaHandsHelping className='about-icon' />
              <h5>Social Services</h5>
              <small> for disadvantaged groups </small>
            </article>
          </div>

          <div className='about-paragraphs'>
            <p>
              More than seven years of professional experience in business management. Equipped with strong project management and presentation skills due to working in research, consulting and teaching.  
            </p>

            <p>
              20 web development projects have already been completed. The projects are mainly focused on e-commerce websites, such as online shopping and stock market consulting. There are also some projects that are social-service oriented websites. 
            </p>

            <p>
              15+ years of social service experience in youth coordination and development, and disadvantaged groups. Writing a book about <strong>success is a matter of personal choice</strong> with the intention of making disadvantaged people successful.
            </p>
          
          </div>

          <div className='about-chat-btn'>
            <a href="#contact" className='btn btn-primary'> Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;