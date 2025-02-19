import React from "react";
import "./HowItWorks.css";
/*import maskImage from "../assets/Maskimage.png";*/ // Right-side image

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        {/* Left Side Text */}
        <div className="how-it-works-text">
          <p className="section-subtitle">Next Steps:</p>
          <h2 className="section-title">How Does It Work</h2>

          <h3>For Prospective Partners:</h3>
          <ul>
            <li>1. Review the features and benefits on this page.</li>
            <li>
              2. Email us with information regarding your interest in a strategic partnership. 
              You can expect a follow-up within 48-72 business hours.
            </li>
            <li>
              3. Join our vibrant community at BusinessBoostSociety.com to take 
              advantage of personalized insights, expert advice, exclusive events, 
              collaboration opportunities, and other resources.
            </li>
          </ul>

          <h3>For Students, Entrepreneurs, or Existing Business Owners Interested in a Cohort:</h3>
          <ul>
            <li>1. Review the features and benefits on this page.</li>
            <li>
              2. Browse our list of cohorts, select a cohort, and apply! You can expect 
              a decision according to the info included in the application details.
            </li>
            <li>
              3. Join BusinessBoostSociety.com for personalized insights, expert advice, 
              exclusive events, and collaboration opportunities.
            </li>
          </ul>
        </div>

        {/* Right Side Circular Image */}
        {/*<div className="how-it-works-image">
          <img src={maskImage} alt="How It Works" />
  </div>*/}
  </div>
    </section>
  );
};

export default HowItWorks;
