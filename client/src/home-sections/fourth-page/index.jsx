import React from "react";
import Cards from "../../components/cards";
import "./index.scss";

const FourthSection = () => {
  return (
    <div className="fourthSection">
        <img
          src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/background1.jpg"
          alt=""
          className="bg-img"
        />
      <div id="container">
        <div className="fourthSec">
          <div>
            <h3>Devoted to wonderful beauty</h3>
            <h1>Events Pricing</h1>
          </div>
          <div>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
