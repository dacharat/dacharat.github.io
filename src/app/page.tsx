"use client";

import Cover from "@/segments/cover";
import NavBar from "@/segments/nav";
import About from "@/segments/about";
import Experience from "@/segments/experiences";
import Project from "@/segments/projects";
import Contact from "@/segments/contact";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Cover />
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
