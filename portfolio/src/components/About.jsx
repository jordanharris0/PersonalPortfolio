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
import { transform } from "framer-motion";

export default function About({ setActiveSection }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setActiveSection("about"); //set active section to 'about' when in view
    }
  }, [inView, setActiveSection]);

  return (
    <>
      <section id="about" className="about-section" ref={ref}>
        {/* title */}
        <div className="about-title-container">
          <h1 className="about-title">About Me</h1>
        </div>

        {/* about content */}
        <div className="about-content">
          <div className="about-left">
            <img src={person} alt="person icon" className="about-icon" />
            <p className="about-paragraph">
              I’m someone with a passion for building intuitive, user-friendly
              applications. With experience in both front-end and back-end
              development, I specialize in creating dynamic web experiences that
              integrate seamless functionality with clean, responsive design. I
              love solving complex problems and continuously learning new
              technologies to stay at the forefront of the ever-evolving tech
              landscape. Whether it's developing RESTful APIs, designing
              interactive UIs, or working with databases, I’m dedicated to
              delivering high-quality solutions that make an impact
            </p>
          </div>
          <div className="about-right">
            <div className="icon-grid">
              <div className="icon-row">
                <div className="icon-card">
                  <div className="card-content">
                    <div className="icon">
                      <img src={js} alt="js" style={{ borderRadius: "5px" }} />
                    </div>
                    <span id="about-span">JavaScript</span>
                  </div>
                </div>
              </div>
              <div className="icon-row">
                <div className="icon-card">
                  <div className="card-content">
                    <div className="icon">
                      <img src={git} alt="git" />
                    </div>
                    <span id="about-span">Git</span>
                  </div>
                </div>
                <div className="icon-card">
                  <div className="card-content">
                    <div className="icon">
                      <img src={postman} alt="postman" />
                    </div>
                    <span id="about-span">Postman</span>
                  </div>
                </div>
              </div>
              <div className="icon-row">
                <div className="icon-card">
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
                </div>
                <div className="icon-card">
                  <div className="card-content">
                    <div className="icon">
                      <img src={node} alt="node.js" />
                    </div>
                    <span id="about-span">Node.js</span>
                  </div>
                </div>
                <div className="icon-card">
                  <div className="card-content">
                    <div className="icon">
                      <img src={express} alt="express.js" />
                    </div>
                    <span id="about-span">Express.js</span>
                  </div>
                </div>
              </div>
              <div className="icon-row">
                <div className="icon-card">
                  <div className="card-content">
                    <div className="icon">
                      <img src={css} alt="css" />
                    </div>
                    <span id="about-span">CSS</span>
                  </div>
                </div>
                <div className="icon-card">
                  <div className="card-content">
                    <div className="icon">
                      <img src={html} alt="html" />
                    </div>
                    <span id="about-span">HTML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
