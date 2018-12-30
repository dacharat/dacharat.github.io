import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import Nav from "./nav";
import About from "./about";
import Experience from "./experiences";
import Project from './projects'

const Component = styled.div.attrs({
  className: "container"
})`
  max-width: 900px !important;
`;

const Home = () => {
  return <React.Fragment>
      <Nav />
      <Component className="container">
        <Element name="about">
          <About />
        </Element>
        <Element name="experiences">
          <Experience />
        </Element>
        <Element name="projects">
          <Project />
        </Element>
      </Component>
    </React.Fragment>;
};

export default Home;
