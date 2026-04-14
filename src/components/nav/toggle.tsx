"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-scroll";

const ToggleButton = styled.span`
  cursor: pointer;
  z-index: 1;
`;

const Menu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  padding-top: 50px;
  right: 0;
  top: 0;
  height: 100%;
  width: ${(props) => (props.$isOpen ? "240px" : "0")};
  background-color: white;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 300ms;
  overflow: hidden;
`;

const ScrollLink = styled(Link).attrs({
  spy: true,
  smooth: true,
  duration: 800,
})`
  cursor: pointer;
  display: block;
  padding: 15px 25px;
  font-size: 1.5em;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => setIsOpen((prev) => !prev);

  return (
    <>
      <ToggleButton onClick={toggleHandler}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </ToggleButton>
      <Menu $isOpen={isOpen}>
        <ScrollLink onClick={toggleHandler} to="about" offset={-80}>
          About
        </ScrollLink>
        <ScrollLink onClick={toggleHandler} to="experience" offset={-80}>
          Experience
        </ScrollLink>
        <ScrollLink onClick={toggleHandler} to="projects" offset={-80}>
          Projects
        </ScrollLink>
        <ScrollLink onClick={toggleHandler} to="contact" offset={-80}>
          Contact
        </ScrollLink>
      </Menu>
    </>
  );
};

export default Toggle;
