import React from 'react'
import myPhoto from "../../images/Yohannes.jpg";
import {BsFillAwardFill} from "react-icons/bs"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import "./About.css";

const About = () => {
  return (
    <section id='about'>
      <h5> Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about-container'>
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
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, suscipit praesentium quos molestias libero modi unde adipisci id quo esse odit quas aspernatur, sapiente, ipsa earum autem asperiores consectetur repellat?
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;