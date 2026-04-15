"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-scroll";

// ─── Styles ──────────────────────────────────────────────────────────────────

const ToggleButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  position: relative;
  z-index: 70;
`;

/*
 * NOTE: These fixed elements are rendered into a React portal at document.body,
 * NOT inline inside the <nav>. The parent <nav> applies `backdrop-filter`,
 * which creates a new stacking / containing block and would otherwise trap
 * `position: fixed` inside the nav — causing the drawer to get clipped to the
 * 64px nav height and the backdrop to only cover the nav bar.
 */
const Backdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.bg}cc;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  opacity: ${(p) => (p.$isOpen ? 1 : 0)};
  pointer-events: ${(p) => (p.$isOpen ? "auto" : "none")};
  transition: opacity 250ms ease;
  z-index: 100;
`;

const Drawer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 82vw);
  padding: 96px 32px 32px;
  background-color: ${({ theme }) => theme.surface};
  border-left: 1px solid ${({ theme }) => theme.border};
  box-shadow: -12px 0 48px rgba(0, 0, 0, 0.2);
  transform: translateX(${(p) => (p.$isOpen ? "0" : "100%")});
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 110;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ScrollLink = styled(Link)`
  cursor: pointer;
  display: block;
  padding: 16px 8px;
  font-family: var(--font-mono-stack);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition:
    color 200ms ease,
    padding-left 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    padding-left: 16px;
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only enable the portal after mount so SSR/hydration stays clean.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [isOpen, mounted]);

  const close = () => setIsOpen(false);

  const overlay = (
    <>
      <Backdrop $isOpen={isOpen} onClick={close} />
      <Drawer $isOpen={isOpen} aria-hidden={!isOpen}>
        <ScrollLink
          onClick={close}
          to="about"
          smooth
          duration={600}
          offset={-80}
        >
          01 · About
        </ScrollLink>
        <ScrollLink
          onClick={close}
          to="experience"
          smooth
          duration={600}
          offset={-80}
        >
          02 · Work
        </ScrollLink>
        <ScrollLink
          onClick={close}
          to="projects"
          smooth
          duration={600}
          offset={-80}
        >
          03 · Projects
        </ScrollLink>
        <ScrollLink
          onClick={close}
          to="contact"
          smooth
          duration={600}
          offset={-80}
        >
          04 · Contact
        </ScrollLink>
      </Drawer>
    </>
  );

  return (
    <>
      <ToggleButton
        onClick={() => setIsOpen((p) => !p)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
      </ToggleButton>
      {mounted && createPortal(overlay, document.body)}
    </>
  );
};

export default Toggle;
