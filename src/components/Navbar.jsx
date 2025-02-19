import React from "react";
import boostLogo from "../assets/images/boostlogo2.png"; // Left logo
import cornerLogo from "../assets/images/cornerlogo.png"; // Right logo
import layerImage from "../assets/images/Layer2.png"; // Image inside Login button

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side Logo */}
      <div className="left-logo">
        <img src={boostLogo} alt="Boost Logo" />
      </div>

      {/* Navigation Links */}
      <div className="nav-links-container">
      <ul className="nav-links">
        <li><a href="#">About Us</a></li>
        {/*<li><a href="#">Partners & Projects</a></li>*/}
        <li><a href="#">Cohort</a></li>
        <li><a href="#">Acceleration</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><button className="signup">Sign Up</button></li>
        <li>
          <button className="login">
            Login
            <img src={layerImage} alt="Layer" className="login-icon" />
          </button>
        </li>
      </ul>
      </div>

      {/* Right Side Logo (After Login) */}
      <div className="right-logo">
        <img src={cornerLogo} alt="Corner Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
