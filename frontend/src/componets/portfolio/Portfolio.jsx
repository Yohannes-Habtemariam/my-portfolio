import React from "react";
import "./Portfolio.css";
import { portfolioDat } from "../../data/Data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work </h5>
      <h2 className="experience-h2"> Portfolio </h2>

      <div className="portfolio-container">
        {portfolioDat.map((item) => {
          return (
            <article className="portfolio-item" key={item.id}>
              <div className="portfolio-item-imgage">
                <img src={item.image} alt="" />
              </div>
              <h3> {item.title} </h3>
              <div className="portfolio-item-github">
                <a href={item.github} className="btn"> Github</a>
                <a href={item.demo} className="btn btn-primary"> Live Demo </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
