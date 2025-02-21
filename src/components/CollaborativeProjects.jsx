import React, { useRef } from "react";
import "./CollaborativeProjects.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import cardImage1 from "../assets/images/cardimage1.png";
import cardImage2 from "../assets/images/cardimage2.png";
import layerImage from "../assets/images/layerimage.png";

const CollaborativeProjects = () => {
  const projectsRef = useRef(null);

  const scrollLeft = () => {
    projectsRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    projectsRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="collaborative-projects">
      <div className="projects-header">
        <h2>Collaborative Projects</h2>
        <p>
          Our collaborative projects have been at the forefront of innovation, solving complex
          challenges and achieving remarkable outcomes. Here are some notable projects we have
          undertaken in collaboration with our partners.
        </p>
      </div>

      <div className="projects-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <IoIosArrowBack />
        </button>

        <img src={layerImage} alt="Layer Background" className="layer-image" />

        <div className="projects-container" ref={projectsRef}>
          <div className="project-card">
            <img src={cardImage1} alt="Project 1" className="project-image" />
            <p className="project-description">
              VetsFest 2024: Filling Your Bunker for Entrepreneurial Success! VetsFest
              2024, hosted by the Bunker Labs Ambassador Atlanta Team, is a premier event dedicated to
              empowering veteran and military spouse entrepreneurs.
            </p>
            <a href="#" className="learn-more">Learn more →</a>
          </div>

          <div className="project-card">
            <img src={cardImage2} alt="Project 2" className="project-image" />
            <p className="project-description">
              Lunch with a Luminary: Fascinating conversations with extraordinary individuals.
              Engage in enlightening exchanges with trailblazers from various sectors and delve into the
              stories that shaped their paths to success.
            </p>
            <a href="#" className="learn-more">Learn more →</a>
          </div>
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default CollaborativeProjects;
