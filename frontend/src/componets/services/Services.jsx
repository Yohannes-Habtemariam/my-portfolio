import React from 'react'
import {BsCheck} from "react-icons/bs"
import "./Services.css";

const Services = () => {
  return (
    <section id='services'>
      <h5> What I Offer </h5>
      <h2>Services</h2>

      <div className='container servics-container'>
        <article className='service'>
          <h3>UL/UX Design</h3>
          <ul className='service-list'>
            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <h3> Web Development</h3>
          <ul className='service-list'>
            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <h3> Content Creation </h3>
          <ul className='service-list'>
            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BsCheck className='sercice-list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;