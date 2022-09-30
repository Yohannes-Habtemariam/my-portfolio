import React from 'react'
import {FaFacebookSquare, FaGithubSquare, FaLinkedin, FaXingSquare, FaTwitterSquare} from "react-icons/fa"
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <ul className='footer-internal-links'>
        <li><a href="#"> Home </a></li>
        <li><a href="#about"> About </a></li>
        <li><a href="#experience">Experience </a></li>
        <li><a href="#portfolio"> Portfolio </a></li>
        <li><a href="#testimonials"> Testimonials </a></li>
        <li><a href="#contact"> Contact </a></li>
      </ul>

      <div className='footer-socials'>
            <a href="https://github.com"> <FaGithubSquare className='footer-socials-icon'/> </a>
            <a href="https://www.linkedin.com/"> <FaLinkedin className='footer-socials-icon'/></a>
            <a href="https://www.xing.com/"> <FaXingSquare className='footer-socials-icon'/></a>
            <a href="https://twitter.com/"> <FaTwitterSquare className='footer-socials-icon'/></a>
            <a href="https://www.facebook.com/"> <FaFacebookSquare className='footer-socials-icon'/></a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; Yohannes Portfolio. All rights reserved.</small>
        <a href="" className='footer-logo'>Yohannes</a>
      </div>
    </footer>
  )
}

export default Footer;