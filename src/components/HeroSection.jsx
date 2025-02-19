import React, { useState } from "react";
{/*import "./HeroSection.css";*/}
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";

const banners = [
  {
    image: banner1,
    heading: "Business BOOST! Society™",
    text: "Welcome to Business BOOST! Society™ Join a community of like-minded business owners committed to positive impact and sustainable growth. At Business BOOST! Society™ we connect strategic vision with tangible results.",
  },
  {
    image: banner2,
    heading: "BoostSociety.Ai",
    text: "We offer a cutting-edge platform for hosting various programs, featuring expert-led cohorts & advanced tools. Explore dynamic partnership opportunities and see how we can elevate your organization or help you join one of our transformative cohorts!",
  },
];

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Remove useEffect for auto-switching banners

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${banners[currentBanner].image})` }}>
      <div className="hero-content">
        <h1 className="hero-heading">{banners[currentBanner].heading}</h1>
        <p className="hero-text">{banners[currentBanner].text}</p>
        <button className="hero-button">Know More <span className="arrow">→</span></button>
      </div>
      
      <div className="hero-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentBanner === index ? "active" : ""}`}
            onClick={() => setCurrentBanner(index)} // Click on dot to change banner
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
