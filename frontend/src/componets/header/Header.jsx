import React from "react";
import myPhoto from "../../images/Yohannes.jpg";
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
        <figure className="photo-container">
          <div>
            <img src={myPhoto} alt="Yohannes Photo" />
          </div>
          <div className="social-media-container">
            <a href="https://github.com" target="_blank">
              <AiOutlineGithub className="social-media-container-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="social-media-container-icon" />
            </a>
            <a href="https://xing.com" target="_blank">
              <FaXingSquare className="social-media-container-icon" />
            </a>
          </div>
        </figure>

        <div className="profession">
          <h1>Yohannes Habtemariam</h1>
          <h3>Fullstack Developer</h3>
          <h3>Business Adminstrator</h3>
          <div className="resume-chat-container">
            <a href={CV} download className="btn">
              Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>

        <figure className="full-stack-developer">
          <img src={MERN2} alt="" />
          <div className="MERN">
            <h2 className="mongoDB">MongoDB</h2>
            <h2 className="express">Express.JS</h2>
            <h2 className="react">React.JS</h2>
            <h2 className="node">Node.JS</h2>
          </div>
        </figure>
        <div className="career-info">
          <h2> Further Info</h2>
          <div>
            <h3> Business research consultant </h3>
            <h3> Strategic plan developer </h3>
            <h3> Project Manager </h3>
            <h3> Lecturer </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
