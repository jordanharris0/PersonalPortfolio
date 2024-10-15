import React, { useState, useEffect } from "react";
import Canvas from "./Canvas";
import "../styles/hero.css";
import { useInView } from "react-intersection-observer";

export default function Hero({ setActiveSection }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setActiveSection("hero"); //set active section to 'hero' when in view
    }
  }, [inView, setActiveSection]);

  //scrolls to about page for when view work button is clicked
  const handleViewMyWorkClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div id="hero" ref={ref}>
        <Canvas />
        <div className="hero-content">
          <h1>
            Hello, I'm <span id="heroSpan">Jordan</span>.
          </h1>
          <h1>Skilled in building web applications end-to-end.</h1>
          <button className="aboutButton" onClick={handleViewMyWorkClick}>
            View My Work ↓
          </button>
        </div>
      </div>
    </>
  );
}
