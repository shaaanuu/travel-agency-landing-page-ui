import React from "react";
import { IconContext } from "react-icons";
import "./About-Card.css";

const AboutCard = ({ icon, title }) => (
  <IconContext.Provider value={{ color: "black", size: "30px" }}>
    <div className="about-card">
      <div className="about-card-icon">{icon}</div>
      <h4>{title}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
        explicabo?
      </p>
    </div>
    <hr className="divider" color="white" />
  </IconContext.Provider>
);

export default AboutCard;
