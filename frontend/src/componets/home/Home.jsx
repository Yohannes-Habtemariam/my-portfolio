import React, { useEffect, useRef } from "react";
import myPhoto from "../../images/Yohannes.jpg";
import success from "../../images/success.png";
import love from "../../images/love.png"
import { AiOutlineGithub } from "react-icons/ai";
import { FaXingSquare, FaLinkedin } from "react-icons/fa";
import "./Home.css";
import MERN2 from "../../images/mern-stack.png";
import CV from "../../images/CV.pdf";

// React Animation with iTyped
import { init } from 'ityped'

const Home = () => {
  // Animation using iTyped
  const businessRef = useRef()

  useEffect(() => {
    init(businessRef.current, { 
      showCursor: true, 
      backDelay:  2000,
      backSpeed:  50,
      strings: ["MongoDB", "Express", "React", "Node.js", "Project Manager", "Strategic Planner", "Researcher", "Lecturer" ] 
    })
  }, []) 

  return (
    <div id="home">

      <div className="header header-container">
        <div className="photo-personal-info-container">
          <div className="photo-educational-background">
              <div className="photo-icons-container">
                <figure className="photo-container">
                  <img src={myPhoto} alt="Yohannes Photo" />
                </figure>

                <div className="social-media-container">
                  <a href="https://github.com/Yohannes-Habtemariam" target="_blank">
                    <AiOutlineGithub className="social-media-container-icon" /> </a>
                  <a href="linkedin.com/in/yohannes-habtemariam" target="_blank">
                    <FaLinkedin className="social-media-container-icon" /> </a>
                  <a href="https://www.xing.com/profile/Yohannes_Habtemariam4/cv" target="_blank">
                    <FaXingSquare className="social-media-container-icon" /> </a>
                </div>
              </div>

              <div className="personal-info">
                <h2>Yohannes Habtemariam</h2>
                <h3>Fullstack Developer </h3>
                <h3>Business Administrator</h3>
                <> <span ref={businessRef}></span> </>
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
          <div className="personal-mission">
            <p className="home-paragraph">
              The mission of life is to serve others with love. Service then pays off according to what you serve others. That is why I am always happy to serve others with all my heart, mind, soul and body.
            </p>
            <p className="home-paragraph">
              Passionate Fullstack Web Developer  with 7+ years of professional experience in business administration. Equipped with strong project management and presentation skills due to work in research, consultancy and lecturing.  Looking for an exciting new challenge to build innovative solutions.
            </p>
            <p className="home-paragraph">
              Confident and look forward to bringing IT and business management together for the benefit of stakeholders.
            </p>
          </div>
         
          <figure className="success-image1">
            <img src={success} alt="Success Photo" />
          </figure>
          <figure className="success-image2">
            <img src={love} alt="Love of Serving Others" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Home;
