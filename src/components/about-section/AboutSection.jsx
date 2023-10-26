import React from "react";
import { PiMountains } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { PiHandHeartLight } from "react-icons/pi";
import "./AboutSection.css";
import AboutCard from "../about-card/About-Card";

let img = "src/assets/3.jpg";

const AboutSection = () => (
  <div className="about-section">
    <div className="about-left">
      <h1 className="about-h1">
        Elevate Your Adventures
        <br />
        with our Travel Agency
      </h1>
      <p className="about">
        We are a travel agency that specializes in customizing trips
        <br />
        according to your preferences, needs, and desires
      </p>
      <div>
        <AboutCard title="Proffessional Tour Guide" icon={<PiMountains />} />
        <AboutCard title="Easy and Comfy" icon={<AiOutlineLike />} />
        <AboutCard title="Memoriable" icon={<PiHandHeartLight />} />
      </div>
    </div>
    <div className="about-right">
      <img className="about-image" src={img} alt="img" />
    </div>
  </div>
);

export default AboutSection;
