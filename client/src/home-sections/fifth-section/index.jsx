import React from "react";
import "./index.scss";

const FifthSection = () => {
  return (
    <div id="container">
      <div className="fifthSection">
        <div className="topOfsec">
          <p>Contacts</p>
          <h1>Our Team</h1>
        </div>
        <div className="bottomOfSec">
          <div className="userCard">
            <img
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg"
              alt=""
            />
            <h1>Velva Kopf</h1>
            <p>Biologist</p>
          </div>
          <div className="userCard">
            <img
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg"
              alt=""
            />
            <h1>Sarah Palmer</h1>
            <p>Florist</p>
          </div>
          <div className="userCard">
            <img
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg"
              alt=""
            />
            <h1>Jessica Swift</h1>
            <p>Photographer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
