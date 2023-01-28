import React from "react";
import "./index.scss";

const Cards = () => {
  return (
    <div className="cardBox">
      <div className="card">
        <div className="topOfCard">
          <h1>$16</h1>
          <p>per table</p>
        </div>
        <h2>Birthday Events</h2>
        <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
        <button>Shop now</button>
      </div>
      <div className="card">
        <div className="topOfCard">
          <h1>$31</h1>
          <p>per table</p>
        </div>
        <h2>Birthday Events</h2>
        <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
        <button>Shop now</button>
      </div>
      <div className="card">
        <div className="topOfCard">
          <h1>$16</h1>
          <p>per table</p>
        </div>
        <h2>Birthday Events</h2>
        <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
        <button>Shop now</button>
      </div>
    </div>
  );
};

export default Cards;
