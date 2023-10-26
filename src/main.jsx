import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./components/nav-bar/Nav-Bar";
import GallerySection from "./components/gallery-section/Gallery-Section";
import InfoSection from "./components/about-section/AboutSection";
import DefaultFooter from "./components/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <GallerySection />
    <InfoSection />
    <DefaultFooter />
  </React.StrictMode>
);
