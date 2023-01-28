import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div id="container">
        <div className="footerSec">
          <ul>
            <h1>About</h1>
            <li>About Us</li>
            <li>Our Partners</li>
            <li>Our Services</li>
          </ul>
          <ul>
            <h1>Contact</h1>
            <li>Contact Us</li>
            <li>FAQ Page</li>
            <li>About Me</li>
          </ul>
          <ul>
            <h1>Follow Us</h1>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
