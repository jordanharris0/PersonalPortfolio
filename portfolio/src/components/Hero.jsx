import React, { useState, useEffect } from "react";
import Canvas from "./Canvas";
import "../styles/hero.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Hero({ setActiveSection }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

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
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            Hello, I'm <span id="heroSpan">Jordan</span>.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Creative developer with a passion for web and game design.
          </motion.h1>
          {/* <h1>Skilled in building web applications end-to-end.</h1> */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.25, delay: 1.5 }}
            className="aboutButton"
            onClick={handleViewMyWorkClick}
          >
            View My Work ↓
          </motion.button>
        </div>
      </div>
    </>
  );
}
