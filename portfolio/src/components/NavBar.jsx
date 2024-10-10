import React, { useEffect, useState } from "react";
import "../styles/navBar.css";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //check how much user has scrolled
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true); //show navBar when user scrolls
      } else {
        setIsScrolled(false); //hide navBar when scroll back
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
