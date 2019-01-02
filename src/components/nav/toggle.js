import React from "react";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";
import { Link } from "react-scroll";

const ToggleButton = styled.span`
  cursor: pointer;
  z-index: 1;
`;

const Menu = styled.div`
  position: fixed;
  padding-top: 50px;
  right: 0;
  top: 0;
  height: 100%;
  width: ${props => (props.isOpen ? "240px" : "0")};
  background-color: white;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 300ms;
`;

const ScrollLink = styled(Link).attrs({
  spy: true,
  smooth: true,
  duration: 800
})`
  cursor: pointer;
  display: block;
  padding: 15px 25px;
  font-size: 1.5em;
`;

class Toggle extends React.Component {
  state = {
    isOpen: false
  };

  toggleHandler = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <React.Fragment>
        <ToggleButton onClick={this.toggleHandler}>
          <FontAwesome name={this.state.isOpen ? "close" : "bars"} size="lg" />
        </ToggleButton>
        <Menu isOpen={this.state.isOpen}>
          <ScrollLink onClick={this.toggleHandler} to="about" offset={-80}>
            About
          </ScrollLink>
          <ScrollLink
            onClick={this.toggleHandler}
            to="experiences"
            offset={-80}
          >
            Experiences
          </ScrollLink>
          <ScrollLink onClick={this.toggleHandler} to="projects" offset={-80}>
            Projects
          </ScrollLink>
          <ScrollLink onClick={this.toggleHandler} to="contact" offset={-80}>
            Contact
          </ScrollLink>
        </Menu>
      </React.Fragment>
    );
  }
}

export default Toggle;
