import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Canvas from "./components/Canvas";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  return (
    <>
      <Hero />
      <NavBar />
      <About />
    </>
  );
}

export default App;
