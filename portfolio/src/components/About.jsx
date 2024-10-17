import React, { useEffect, useState } from "react";
import "../styles/about.css";
import { useInView } from "react-intersection-observer";
import person from "../images/person.png";
import css from "../images/css.png";
import express from "../images/express.png";
import git from "../images/git.png";
import html from "../images/html.png";
import js from "../images/js.png";
import node from "../images/node.png";
import postman from "../images/postman.png";
import react from "../images/react.png";
import { motion } from "framer-motion";

export default function About({ setActiveSection }) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const hasAnimated = localStorage.getItem("hasAnimated"); //allows animation only on rerender

    if (hasAnimated === "true") {
      setShouldAnimate(false);
    }
  }, []);

  useEffect(() => {
    if (inView) {
      setActiveSection("about"); //set active section to 'about' when in view
    }

    if (inView && !shouldAnimate) {
      setShouldAnimate(true);
      localStorage.setItem("hasAnimated", "true");
    }
  }, [inView, setActiveSection]);

  return (
    <>
      <section id="about" className="about-section" ref={ref}>
        {/* title */}
        <div className="about-title-container">
          <h1 className="about-title">About</h1>
        </div>

        {/* about content */}
        <div className="about-content">
          <div className="about-left">
            <motion.img
              src={person}
              alt="person icon"
              className="about-icon"
              initial={{ opacity: 0 }}
              animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.75, delay: 0.5 }}
            />
            <motion.p
              className="about-paragraph"
              initial={{ opacity: 0 }}
              animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              I’m driven by a passion for creating intuitive, user-friendly
              applications and developing immersive game experiences. With
              expertise in both front-end and back-end development, I specialize
              in building dynamic web projects that seamlessly integrate
              functionality with clean, responsive design. My game design
              skills, including level creation and interactive elements, blend
              creativity with technical precision. Whether it's developing
              RESTful APIs, designing interactive UIs, or managing databases,
              I’m committed to delivering impactful, high-quality solutions.
            </motion.p>
          </div>
          <div className="about-right">
            <div className="icon-grid">
              <div className="icon-row">
                <motion.div
                  className="icon-card"
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 1 }}
                >
                  <div className="card-content">
                    <div className="icon">
                      <img src={js} alt="js" style={{ borderRadius: "5px" }} />
                    </div>
                    <span id="about-span">JavaScript</span>
                  </div>
                </motion.div>
              </div>
              <div className="icon-row">
                <motion.div
                  className="icon-card"
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <div className="card-content">
                    <div className="icon">
                      <img src={git} alt="git" />
                    </div>
                    <span id="about-span">Git</span>
                  </div>
                </motion.div>
                <motion.div
                  className="icon-card"
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 2.2 }}
                >
                  <div className="card-content">
                    <div className="icon">
                      <img src={postman} alt="postman" />
                    </div>
                    <span id="about-span">Postman</span>
                  </div>
                </motion.div>
              </div>
              <div className="icon-row">
                <motion.div
                  className="icon-card"
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 1.4 }}
                >
                  <div className="card-content">
                    <div className="icon">
                      <img
                        src={react}
                        alt="react"
                        style={{ transform: "rotate(90deg)" }}
                      />
                    </div>
                    <span id="about-span">React</span>
                  </div>
                </motion.div>
                <motion.div
                  className="icon-card"
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 2.4 }}
                >
                  <div className="card-content">
                    <div className="icon">
                      <img src={node} alt="node.js" />
                    </div>
                    <span id="about-span">Node.js</span>
                  </div>
                </motion.div>
                <motion.div
                  className="icon-card"
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 2 }}
                >
                  <div className="card-content">
                    <div className="icon">
                      <img src={express} alt="express.js" />
                    </div>
                    <span id="about-span">Express.js</span>
                  </div>
                </motion.div>
              </div>
              <div className="icon-row">
                <motion.div
                  className="icon-card"
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 1.6 }}
                >
                  <div className="card-content">
                    <div className="icon">
                      <img src={css} alt="css" />
                    </div>
                    <span id="about-span">CSS</span>
                  </div>
                </motion.div>
                <motion.div
                  className="icon-card"
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 1.8 }}
                >
                  <div className="card-content">
                    <div className="icon">
                      <img src={html} alt="html" />
                    </div>
                    <span id="about-span">HTML</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
