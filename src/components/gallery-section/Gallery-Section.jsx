import React from "react";
import "./Gallery-Section.css";
import Parallaximage from "../about-section/parallax-image/js/parallax";

const GallerySection = () => (
  <div className="gallery-section">
    <h1>
      Make your dream trip
      <br />
      come true with us
    </h1>
    <div className="info-sec">
      <p className="info">
        Our dedicated travel consultants craft your ideal trip, from ideas to
        details.
      </p>
      <button className="learn-more-btn">Learn more</button>
    </div>
    <Parallaximage />
  </div>
);

export default GallerySection;
