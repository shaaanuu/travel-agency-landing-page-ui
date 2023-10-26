import React from "react";
import "./Nav-Bar.css";

const NavBar = () => (
  <div className="nav">
    <h3>Travely</h3>
    <div className="nav-items">
      <a href="#" className="nav-bar-item home">
        Home
      </a>
      <a href="#" className="nav-bar-item">
        Categories
      </a>
      <a href="#" className="nav-bar-item">
        Benefit
      </a>
      <a href="#" className="nav-bar-item">
        Gallery
      </a>
    </div>
  </div>
);

export default NavBar;
