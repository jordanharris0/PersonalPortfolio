import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackGround from "./components/BackGroundCanvas";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <>
      <BackGround />

      <Hero setActiveSection={setActiveSection} />

      <NavBar activeSection={activeSection} />

      <About setActiveSection={setActiveSection} />

      <Projects setActiveSection={setActiveSection} />

      <Contact setActiveSection={setActiveSection} />
    </>
  );
}

export default App;
