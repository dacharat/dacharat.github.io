"use client";

import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { motion, useScroll, useSpring } from "framer-motion";
import Toggle from "../components/nav/toggle";
import { useTheme } from "@/context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

const NavRoot = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  background-color: ${({ theme }) => `${theme.bg}cc`};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition:
    background-color 300ms ease,
    border-color 300ms ease;
`;

const Inner = styled.div`
  width: min(1200px, 92vw);
  margin: 0 auto;
  padding: 18px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Brand = styled(Link)`
  font-family: var(--font-mono-stack);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    box-shadow: 0 0 12px ${({ theme }) => theme.accent};
  }
`;

const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 6px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  font-family: var(--font-mono-stack);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 8px;
  color: ${({ theme }) => theme.textMuted};
  transition:
    color 200ms ease,
    background-color 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.surfaceAlt};
  }

  &.active {
    color: ${({ theme }) => theme.text};
  }
`;

const ThemeBtn = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 200ms ease,
    border-color 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.surfaceAlt};
    border-color: ${({ theme }) => theme.borderStrong};
  }
`;

const MobileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    .mobile-menu {
      display: none;
    }
  }
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.accent},
    ${({ theme }) => theme.accentAlt}
  );
  transform-origin: 0%;
`;

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <NavRoot>
      <Inner>
        <Brand to="cover" smooth duration={600} spy>
          DACHARAT.DEV
        </Brand>

        <NavLinks>
          <NavLink
            to="about"
            smooth
            duration={600}
            offset={-80}
            spy
            activeClass="active"
          >
            About
          </NavLink>
          <NavLink
            to="experience"
            smooth
            duration={600}
            offset={-80}
            spy
            activeClass="active"
          >
            Work
          </NavLink>
          <NavLink
            to="projects"
            smooth
            duration={600}
            offset={-80}
            spy
            activeClass="active"
          >
            Projects
          </NavLink>
          <NavLink
            to="contact"
            smooth
            duration={600}
            offset={-80}
            spy
            activeClass="active"
          >
            Contact
          </NavLink>
        </NavLinks>

        <MobileBox>
          <ThemeBtn onClick={toggleTheme} aria-label="Toggle dark mode">
            {isDark ? <BsSun /> : <BsMoon />}
          </ThemeBtn>
          <span className="mobile-menu">
            <Toggle />
          </span>
        </MobileBox>
      </Inner>
      <ProgressBar style={{ scaleX }} />
    </NavRoot>
  );
};

export default NavBar;
