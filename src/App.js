import React, { Component } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

// component
import Cover from "./segments/cover";
import Nav from "./segments/nav";
import About from "./segments/about";
import Experience from "./segments/experiences";
import Project from "./segments/projects";
import Contact from "./segments/contact";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Baloo|Special+Elite|Happy+Monkey');
  * {
  font-family: "Happy Monkey", cursive;
  }
`;

const Body = styled.div.attrs({
  className: "container",
})`
  max-width: 900px !important;
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Nav />
        <Cover />
        <Body>
          <Element name="about">
            <About />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="projects">
            <Project />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </Body>
      </React.Fragment>
    );
  }
}

export default App;
