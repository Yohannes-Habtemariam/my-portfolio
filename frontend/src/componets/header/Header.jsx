import React from "react";
import myPhoto from "../../images/Yohannes.jpg";
import success from "../../images/success.png";
import love from "../../images/love.png"
import { AiOutlineGithub } from "react-icons/ai";
import { FaXingSquare, FaLinkedin } from "react-icons/fa";
import "./Header.css";
import MERN2 from "../../images/mern-stack.png";
import CV from "../../images/CV.pdf";

const Header = () => {
  return (
    <header className="header-page-container">
      <nav className="navbar-top">
        <figure className="logo">
          <img src="" alt="" />
        </figure>
        <ul className="list-items">
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#about"> About </a>
          </li>
          <li>
            <a href="#experience"> Experience </a>
          </li>
          <li>
            <a href="#services"> Services </a>
          </li>
          <li>
            <a href="#portfolio"> Portfolio </a>
          </li>
          <li>
            <a href="#testimonials"> Testimonials </a>
          </li>
          <li>
            <a href="#contact"> Contact </a>
          </li>
        </ul>
      </nav>
      <div className="header header-container">
        <div className="photo-personal-info-container">
          <div className="photo-educational-background">
              <div className="photo-icons-container">
                <figure className="photo-container">
                  <img src={myPhoto} alt="Yohannes Photo" />
                </figure>

                <div className="social-media-container">
                  <a href="https://github.com" target="_blank">
                    <AiOutlineGithub className="social-media-container-icon" /> </a>
                  <a href="https://linkedin.com" target="_blank">
                    <FaLinkedin className="social-media-container-icon" /> </a>
                  <a href="https://xing.com" target="_blank">
                    <FaXingSquare className="social-media-container-icon" /> </a>
                </div>
              </div>

              <div className="personal-info">
                <h2>Yohannes Habtemariam</h2>
                <h3>Fullstack Developer</h3>
                <h3>Business Adminstrator</h3>
              </div>
          </div>

          <div className="resume-chat-container">
            <a href={CV} download className="CV-button"> Download CV </a>
            <a href="#contact" className="btn btn-primary"> Let's Talk </a>
          </div>

        </div>

        <div className="careers-container">
          <div className="web-development">
            <h2> Web Development </h2>
            <figure className="full-stack-developer">
              <img src={MERN2} alt="" />
              <div className="MERN">
                <h3 className="mongoDB">MongoDB</h3>
                <h3 className="express">Express.JS</h3>
                <h3 className="react">React.JS</h3>
                <h3 className="node">Node.JS</h3>
              </div>
            </figure>
          </div>

          <div className="business-administration">
            <h2> Business Administration </h2>
            <div>
              <h3> Business research consultant </h3>
              <h3> Strategic plan developer </h3>
              <h3> Project Manager </h3>
              <h3> Lecturer </h3>
            </div>
          </div>
        </div>

        <div className="success-container">
          <p> 
            The mission of life is to serve others with love. Service then pays off according to what you serve others. That is why I am always happy to serve others with all my heart, mind, soul and body. 
          </p>
          <figure>
            <img src={success} alt="Success Photo" />
          </figure>
          <figure>
            <img src={love} alt="Love of Serving Others" />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
