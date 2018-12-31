import React, { Component } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import Head from './segments/head'
import Nav from "./segments/nav";
import About from "./segments/about";
import Experience from "./segments/experiences";
import Project from "./segments/projects";
import Contact from './segments/contact'

const Body = styled.div.attrs({
  className: "container"
})`
  max-width: 900px !important;
`;
class App extends Component {
  render() {
    return <React.Fragment>
        <Nav />
        <Head />
        <Body className="container">
          <Element name="about">
            <About />
          </Element>
          <Element name="experiences">
            <Experience />
          </Element>
          <Element name="projects">
            <Project />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </Body>
      </React.Fragment>;
  }
}

export default App;
