// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolio } from "./data/portfolio";

function App() {
  return (
    <div className="font-sans bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section id="home">
          <Hero data={portfolio} />
        </section>
        <section id="about" className="py-16 px-4 md:px-8 lg:px-16">
          <About data={portfolio} />
        </section>
        <section id="skills" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-800">
          <Skills data={portfolio} />
        </section>
        <section id="experience" className="py-16 px-4 md:px-8 lg:px-16">
          <Experience data={portfolio} />
        </section>
        <section id="projects" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-800">
          <Projects data={portfolio} />
        </section>
        <section id="education" className="py-16 px-4 md:px-8 lg:px-16">
          <Education data={portfolio} />
        </section>
        <section id="certifications" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-800">
          <Certifications data={portfolio} />
        </section>
        <section id="coding-profiles" className="py-16 px-4 md:px-8 lg:px-16">
          <CodingProfiles data={portfolio} />
        </section>
        <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-800">
          <Contact data={portfolio} />
        </section>
      </main>
      <Footer data={portfolio} />
    </div>
  );
}

export default App;
