import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import "../css/sandbox.css";
import "../css/embla.css";

const OPTIONS = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Parallaximage = () => (
  <main className="sandbox">
    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
);

export default Parallaximage;
