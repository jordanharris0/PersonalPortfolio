import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CopilotHome from "../images/CopilotHome.jpg";
import clean from "../images/clean.jpg";
import sidescroller from "../images/sidescroller.jpg";
import portfolio from "../images/portfolio.png";
import "../styles/projects.css";

export default function Projects({ setActiveSection }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      setActiveSection("projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="projects" className="projects-section">
      <div className="projects-title-container">
        <h1 className="project-title">Projects</h1>
      </div>

      {/* Content */}
      {/* project 1 */}
      <div className="project-container project-left">
        <div className="project-details">
          <h2>Copilot</h2>
          <p>
            Social media platform built with React, Node.js, Express, and
            Prisma, integrating seamless authentication and a user-friendly
            interface.
          </p>
          <a
            href="https://github.com/maisycapps/Copilot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Project
          </a>
        </div>
        <div className="project-image-container">
          <img className="project-image" src={CopilotHome} alt="Project 1" />
        </div>
      </div>
      {/* project 2 */}
      <div className="project-container project-right">
        <div className="project-image-container">
          <img className="project-image" src={portfolio} alt="Project 2" />
        </div>
        <div className="project-details">
          <h2>Personal Portfolio</h2>
          <p>
            Modern web application built with React and optimized using Vite,
            featuring an interactive particle hero canvas with custom-built
            logic and tsParticles for dynamic background effects. It integrates
            Framer Motion for smooth transitions and animations, ensuring a
            seamless user experience, and includes a contact form powered by
            Nodemailer for handling email submissions.
          </p>
          <a
            href="https://github.com/jordanharris0/PersonalPortfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Project
          </a>
        </div>
      </div>
      {/* project 3 */}
      <div className="project-container project-left">
        <div className="project-details">
          <h2>Sidescroller</h2>
          <p>
            An infinite runner experience built with Unreal Engine, featuring
            dynamic level design and asset integration through static mesh
            components and blueprint scripting.
          </p>
          <a
            href="https://www.behance.net/gallery/136946267/Sidescroller"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Project
          </a>
        </div>
        <div className="project-image-container">
          <img className="project-image" src={sidescroller} alt="Project 3" />
        </div>
      </div>
      {/* project 4 */}
      <div className="project-container project-right">
        <div className="project-image-container">
          <img className="project-image" src={clean} alt="Project 4" />
        </div>
        <div className="project-details">
          <h2>Clean Your Room</h2>
          <p>
            A time-based game built with Unreal Engine 4, featuring object
            spawning and placement using blueprint scripting, static mesh
            components, and bounding box collision for randomized item
            distribution.
          </p>
          <a
            href="https://www.behance.net/gallery/136943135/Clean-Your-Room"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Project
          </a>
        </div>
      </div>
    </section>
  );
}
