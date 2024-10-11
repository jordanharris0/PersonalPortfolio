import React, { useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  return (
    <>
      <Hero />
      <NavBar />
      <section id="about">
        <About />
      </section>
      <section id="projects">{/* <Projects /> */}</section>
      <section id="contact">{/* <Contact /> */}</section>
    </>
  );
}

export default App;
