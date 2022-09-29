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
            <p>
              If you would like to contact Dr. Yohannes for more information, please click on the next "Let's Talk" button. Remember, one click can change everything! Let's create a wonderful world for all to enjoy. Aristotle said “Happiness is the meaning and purpose of life, the whole aim and the end of human existence” – a sentiment that is still true today. While Aristotle had a philosophical notion of the importance of happiness for human well-being, today we have a range of science and research to back it up. Scientific studies have begun to reveal a host of physical health benefits surrounding happiness including a stronger immune system, stronger resilience in the face of stress, a stronger heart and less risk of cardiovascular disease, alongside quicker recovery times when overcoming illness or surgery. There is even a body of research that indicates being happy may help us to live longer lives. Furthermore, A plurality of experts say digital life will continue to expand people’s boundaries and opportunities in the coming decade and that the world to come will produce more help than harm in people’s lives. Each of us is called upon to use the conveniences of information technology for the common good.
            </p>
            <a href="#contact" className='btn btn-primary'> Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;