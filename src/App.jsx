import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Marquee from "./component/Marquee";
import Project from "./component/Project";
import About from "./component/About";
import Work from "./component/Education";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <main className="font-light text-white antialiased selection-bg-lime-300 section:text-black ">
        <Navbar />
        <Hero />
        <Marquee />
        <Project />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  );
}

export default App;
