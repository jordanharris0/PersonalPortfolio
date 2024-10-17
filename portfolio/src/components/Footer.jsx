import React from "react";
import "../styles/footer.css";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export default function Footer() {
  const scrollToTop = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <a
            href="https://www.linkedin.com/in/jordanharrisfullstack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="social-icon" />
          </a>
          <a
            href="https://github.com/jordanharris0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" className="social-icon" />
          </a>
        </div>
        <button className="scroll-up-button" onClick={scrollToTop}>
          ↑
        </button>
      </footer>
    </>
  );
}
