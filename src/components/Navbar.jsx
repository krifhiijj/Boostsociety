import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import boostLogo from "../assets/images/boostlogo2.png"; // Left logo
import cornerLogo from "../assets/images/cornerlogo.png"; // Right logo
import layerImage from "../assets/images/Layer2.png"; // Image inside Login button

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Side (Hamburger + Logo) */}
      <div className="left-section">
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        {/* Left Logo */}
        <div className="left-logo">
          <img src={boostLogo} alt="Boost Logo" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links-container ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><a href="#">About Us</a></li>
          
          <li><a href="#">Cohort</a></li>
          <li><a href="#">Acceleration</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      {/* Right Section (Signup, Login, Right Logo) */}
      <div className="right-section">
        <button className="signup">Sign Up</button>
        <button className="login">
          Login
          <img src={layerImage} alt="Layer" className="login-icon" />
        </button>
        <div className="right-logo">
          <img src={cornerLogo} alt="Corner Logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
