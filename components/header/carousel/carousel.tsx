"use client";
import "@splidejs/splide/css";
import { useEffect } from "react";
import Splide from "@splidejs/splide";
import carouselStyles from "./carousel.module.scss";

export default function Carousel() {
  useEffect(() => {
    new Splide("#skillSlide").mount();
  }, []);
  return (
    <section id="skillSlide" className="splide">
      <div className="splide__track">
        <ul className={`splide__list ${carouselStyles.carouselList}`}>
          <li className="splide__slide">
            <article>Python</article>
          </li>
          <li className="splide__slide">
            <article>Javascript</article>
          </li>
          <li className="splide__slide">
            <article>React</article>
          </li>
          <li className="splide__slide">
            <article>Next</article>
          </li>
          <li className="splide__slide">
            <article>Django</article>
          </li>
          <li className="splide__slide">
            <article>Flask</article>
          </li>
        </ul>
      </div>
    </section>
  );
}
