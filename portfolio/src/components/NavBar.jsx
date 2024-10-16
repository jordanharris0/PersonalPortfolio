import React from "react";
import "../styles/navBar.css";
import { motion } from "framer-motion";

const linkVariants = {
  active: {
    color: "rgb(114, 189, 163)",
  },
  inactive: { color: "rgb(255, 255, 255)" },
};
export default function NavBar({ activeSection }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className="navbar">
        <ul>
          <motion.li
            variants={linkVariants}
            animate={activeSection === "hero" ? "active" : "inactive"}
          >
            <a onClick={() => scrollToSection("hero")}>Home</a>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={activeSection === "about" ? "active" : "inactive"}
          >
            <a onClick={() => scrollToSection("about")}>About</a>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={activeSection === "projects" ? "active" : "inactive"}
          >
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={activeSection === "contact" ? "active" : "inactive"}
          >
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </motion.li>
        </ul>
      </nav>
    </>
  );
}
