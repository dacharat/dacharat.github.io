"use client";

import styled from "styled-components";
import Cover from "@/segments/cover";
import NavBar from "@/segments/nav";
import About from "@/segments/about";
import Experience from "@/segments/experiences";
import Project from "@/segments/projects";
import Contact from "@/segments/contact";

const Body = styled.div.attrs({ className: "container" })`
  max-width: 900px !important;
`;

export default function Home() {
  return (
    <>
      <NavBar />
      <Cover />
      <Body>
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
      </Body>
    </>
  );
}
