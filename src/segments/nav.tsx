"use client";

import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Toggle from "../components/nav/toggle";
import { useTheme } from "@/context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

const Nav = styled.nav.attrs({
  className: "navbar navbar-light navbar-expand-md sticky-top",
})`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 1px 5px ${({ theme }) => theme.navShadow};
  padding: 3px !important;
  transition: all 300ms;
`;

const NavItem = styled.span.attrs({
  className: "nav-item",
})`
  font-size: 18px;
`;

const NavbarBrand = styled.a.attrs({
  className: "navbar-brand fw-bold",
})`
  margin: 5px 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.text} !important;
`;

const ScrollLink = styled(Link).attrs({
  spy: true,
  smooth: true,
  duration: 800,
})`
  cursor: pointer;
  padding: 12px;
  transition: background 200ms;
  color: inherit !important;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.bgHover};
    color: inherit;
    text-decoration: none;
  }
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 4px 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: all 200ms;
  &:hover {
    background-color: ${({ theme }) => theme.bgHover};
  }
`;

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Nav>
      <div className="container-fluid mx-md-4">
        <NavbarBrand href="/">Dacharat</NavbarBrand>
        <div className="navbar-nav d-none d-md-flex align-items-center">
          <ScrollLink to="about" offset={-80}>
            <NavItem> About </NavItem>
          </ScrollLink>
          <ScrollLink to="experience" offset={-80}>
            <NavItem> Experience </NavItem>
          </ScrollLink>
          <ScrollLink to="projects" offset={-80}>
            <NavItem> Projects </NavItem>
          </ScrollLink>
          <ScrollLink to="contact" offset={-80}>
            <NavItem> Contact </NavItem>
          </ScrollLink>
          <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle dark mode">
            {isDark ? <BsSun /> : <BsMoon />}
          </ThemeToggleButton>
        </div>
        <div className="me-4 mt-1 d-flex d-md-none align-items-center gap-2">
          <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle dark mode">
            {isDark ? <BsSun /> : <BsMoon />}
          </ThemeToggleButton>
          <Toggle />
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
