import React, { useEffect, useState } from "react";
import "../styles/navBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a className={"home"} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className={"about"} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={"projects"} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className={"contact"} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
