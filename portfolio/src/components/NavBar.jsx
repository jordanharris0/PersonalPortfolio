import React, { useEffect, useState } from "react";
import "../styles/navBar.css";
import { motion } from "framer-motion";

const linkVariants = {
  active: { color: "rgb(51, 101, 138)" },
  inactive: { color: "rgb(255, 255, 255)" },
};
export default function NavBar({ activeSection }) {
  return (
    <>
      <nav className="navbar">
        <ul>
          <motion.li
            variants={linkVariants}
            animate={activeSection === "hero" ? "active" : "inactive"}
          >
            <a href="#hero">Home</a>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={activeSection === "about" ? "active" : "inactive"}
          >
            <a href="#about">About</a>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={activeSection === "projects" ? "active" : "inactive"}
          >
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={activeSection === "contact" ? "active" : "inactive"}
          >
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
      </nav>
    </>
  );
}
