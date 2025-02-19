import React from "react";
import boostLogo from "../assets/images/boostlogo2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Purple Section with Subscription */}
      <div className="footer-top">
        <input type="email" placeholder="Enter your email address" className="subscribe-input" />
        <button className="subscribe-button">Subscribe</button>
      </div>

      {/* Middle White Section with Centered Logo and Right Side Contact Us */}
      <div className="footer-middle">
        <img src={boostLogo} alt="Boost Logo" className="footer-logo" />
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Learning & Lives</a></li>
          <li><a href="#">Monitor & Measure</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <a href="#" className="footer-contact-right">Contact Us</a>
      </div>

      {/* Bottom Purple Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Give Me a Boost | BOOST STRATEGY GROUP LLC</p>
        <ul className="footer-bottom-links">
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookies Policies</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
