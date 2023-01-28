import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div id="container">
        <div className="headerBox">
          <div>
            <h1>Floral Studio</h1>
          </div>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/add-page"}>Add product</NavLink>
            </li>
            <li>
              <NavLink to={"/wishlist-page"}>Wishlist</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>About us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
