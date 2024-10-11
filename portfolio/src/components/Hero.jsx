import React, { useState } from "react";
import Canvas from "./Canvas";
import "../styles/hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  //scrolls to about page for when view work button is clicked
  const handleViewMyWorkClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div id="hero">
        <Canvas />
        <div className="hero-content">
          <h1>
            Hello, I'm <span>Jordan</span>.
          </h1>
          <h1>I'm a full stack web developer.</h1>
          <button className="aboutButton" onClick={handleViewMyWorkClick}>
            View My Work ↓
          </button>
        </div>
      </div>
    </>
  );
}
