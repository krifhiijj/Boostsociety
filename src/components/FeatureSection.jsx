import React from "react";
import borderImage from "../assets/images/bordervector.png"
import "./FeatureSection.css";

import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      {/* Left Side Text */}
      <div className="feature-text">
        <p className="feature-subtitle">Key Features & Benefits</p>
        <h2 className="feature-title">Unlock Exclusive Resources and Opportunities</h2>
        <p className="feature-description">
          Introducing the BoostSociety.ai portal – your gateway to advanced business and technical
          functionality. Partner with us to host your educational, community, and
          business programs on our platform, benefiting from dynamic, expert-led cohorts and innovative tools.
          Enhance learning with interactive courses, robust community features, and seamless communication.
          Track progress efficiently and gain valuable insights with our monitoring tools. Elevate your
          organization and unlock your program’s full potential with BoostSociety.ai. Interested in
          joining one of our cohorts? Explore our offerings and apply TODAY!
        </p>
        <button className="feature-button">View All Features →</button>
      </div>

      {/* Right Side Feature Cards */}
      <div className="feature-container">
        <div className="feature-card">
          <img src={borderImage} alt=""  className="border-image"/>
          <img src={icon2} alt="Monitor & Measure" className="feature-icon" />
          <h3 className="feature-card-title">Monitor & Measure</h3>
          <p className="feature-card-description">
            Feature: Track quantifiable and qualitative results to monitor progress and performance. Benefit: 
            Make data-driven decisions and continuously improve your strategies by measuring the impact of your efforts with clear metrics.
          </p>
        </div>

        <div className="feature-card">
        <img src={borderImage} alt=""  className="border-image"/>
          <img src={icon1} alt="Scheduling Functionalities" className="feature-icon" />
          <h3 className="feature-card-title">Scheduling Functionalities</h3>
          <p className="feature-card-description">
            Feature: Schedule meetings and collaboration sessions between business owners and strategic advisors. Benefit: 
            Optimize your time and enhance productivity by coordinating effectively with your advisors for regular check-ins.
          </p>
        </div>

        <div className="feature-card">
          <img src={borderImage} alt=""  className="border-image"/>
          <img src={icon3} alt="Cohort-based Learning" className="feature-icon" />
          <h3 className="feature-card-title">Cohort-based Learning</h3>
          <p className="feature-card-description">
            Feature: Join exclusive cohorts led by industry experts to enhance your business skills and knowledge. Benefit: 
            Collaborate with like-minded entrepreneurs and accelerate your business growth through expert guidance.
          </p>
        </div>

        <div className="feature-card">
          <img src={borderImage} alt=""  className="border-image"/>
          <img src={icon4} alt="Personalized Business Solutions" className="feature-icon" />
          <h3 className="feature-card-title">Personalized Business Solutions</h3>
          <p className="feature-card-description">
            Feature: Utilize our advanced AI-powered tool to identify the best funding opportunities tailored to your business needs. Benefit: 
            Save time in securing capital by accessing a curated list of funding options that match your requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
