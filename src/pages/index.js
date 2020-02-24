import React from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Splash from "./sections/Splash";
import Projects from "./sections/Projects";

export default function Home() {

  return (
    <div className>
      <Splash />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

