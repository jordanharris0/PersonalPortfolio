import React, { useState, useEffect, useRef } from "react";
import Canvas from "./Canvas";
import "../styles/hero.css";

export default function Hero() {
  return (
    <>
      <div id="hero">
        <Canvas />
        <div className="hero-content">
          <h1>
            Hello, I'm <span>Jordan</span>.
          </h1>
          <h1>I'm a full stack web developer.</h1>
          <button className="aboutButton">View My Work ↓</button>
        </div>
      </div>
    </>
  );
}
