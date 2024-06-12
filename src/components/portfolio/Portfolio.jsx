import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/weather.png";
import IMG2 from "../../assets/netflix.png";
import IMG3 from "../../assets/calculator.png";
import IMG4 from "../../assets/e-commerce.jpg";
import IMG5 from "../../assets/microservices.jpg";
import IMG6 from "../../assets/jwt.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      {/* <h5>What I Offer</h5> */}
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Weather Forecast</h3>

          <div className="portfolio__item-cta">
            <div>
              <a href="https://github.com/manohar-19/Weather-Forecast-Application" className="btn" target="_blank">
                Github
              </a>
            </div>
            {/* <div>
              <a href="#" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Netflix Clone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/manohar-19/NetFlix-Clone-React" className="btn" target="_blank">
              Github
            </a>
            <a href="https://netflix-clone-f2547.web.app/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Calculator App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/manohar-19/Calculator-React" className="btn" target="_blank">
              Github
            </a>
            <a href="https://csb-kmucvs.netlify.app/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>E-commerce Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/manohar-19/Online-Cake-Shop-Angular-Spring-boot-mysql" className="btn" target="_blank">
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Microservice</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/manohar-19/spring-boot-microservices" className="btn"  target="_blank">
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>JWT using spring boot</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/manohar-19/spring-boot-jwt" className="btn" target="_blank">
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
