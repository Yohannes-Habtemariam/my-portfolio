import React from 'react'
import {BsFillCheckCircleFill} from "react-icons/bs"
import "./Experience.css";


const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skill I have</h5>
      <h2> My Experience </h2>
      <div className='container experience-container'>
        <div className='experience-frontend'>
          <h3> Frontend Development</h3>
          <div className='experience-content'>
            <article className='experience-details'>
              <BsFillCheckCircleFill className='experience-details-icon'/>
              <div>
                <h4>HTML5</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillCheckCircleFill className='experience-details-icon'/>
              <div>
                <h4>CSS3</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillCheckCircleFill className='experience-details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillCheckCircleFill className='experience-details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillCheckCircleFill className='experience-details-icon'/>
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillCheckCircleFill className='experience-details-icon'/>
              <div>
                <h4>Git & GitHub</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience-backend'>
          <h3> Backend Development</h3>
          <div className='experience-content'>
            <article className='experience-details'>
              <BsFillCheckCircleFill className='experience-details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillCheckCircleFill className='experience-details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small>Intermediate</small>
                </div>
            </article>

            <article className='experience-details'>
              <BsFillCheckCircleFill className='experience-details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small>Basic</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillCheckCircleFill className='experience-details-icon'/>
              <div>
                <h4>Mongoose</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillCheckCircleFill className='experience-details-icon'/>
              <div>
                <h4>API</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className='experience-details'>
              <BsFillCheckCircleFill className='experience-details-icon'/>
              <div>
                <h4>Building Express Server</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;