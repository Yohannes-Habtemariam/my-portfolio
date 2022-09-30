import React from "react";
import IT from "../../images/IT.jpg"
import ITBusiness from "../../images/ItAndBusiness.png"
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5> What Skills I have</h5>
      <h2 className="experience-h2"> My Experience </h2>
      <div className="experience-container">
        <div className="experience-list-container">
          <div className="experience-frontend">
            <h3> Frontend Development</h3>
            <div className="experience-content">
              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>HTML5</h4>
                  <small>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>CSS3</h4>
                  <small>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>SCSS</h4>
                  <small>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small>Intermediate</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small>Intermediate</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>DOM Manipulation</h4>
                  <small>Intermediate</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>React</h4>
                  <small>Intermediate</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>Git & GitHub</h4>
                  <small>Intermediate</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience-backend">
            <h3> Backend Development</h3>
            <div className="experience-content">
              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>Node JS</h4>
                  <small>Intermediate</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small>Intermediate</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small>Basic</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>Mongoose</h4>
                  <small>Intermediate</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>API</h4>
                  <small>Intermediate</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>Building Express Server</h4>
                  <small>Intermediate</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience-business-administration">
            <h3> Business Administration</h3>
            <div className="experience-content">
              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>Strategic Plan</h4>
                  <small>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>Performance Evaluation</h4>
                  <small>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>Project Management</h4>
                  <small>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>Business Research</h4>
                  <small>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>Lecturing</h4>
                  <small>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>Management Consultant</h4>
                  <small>Experienced</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>HR Management</h4>
                  <small>Intermediate</small>
                </div>
              </article>

              <article className="experience-details">
                <BsFillCheckCircleFill className="experience-details-icon" />
                <div>
                  <h4>Stock Market</h4>
                  <small>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="role-of-in-business">
          <div className="experience-paragraphs">
            <p>
              Business management without information technology (IT) is like eating bread without soup.This is one of the factors that inspired me to be expert in web development, because an agile and adaptive company requires the benefit-focused and goal-oriented use of relevant information technologies. In addition, IT could be used to achieve a competitive advantage through cost leadership and differentiation. So IT is becoming increasingly important in achieving our vision.  
            </p>
          </div>
          <figure className="experience-image">
              <img src={ITBusiness} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Experience;
