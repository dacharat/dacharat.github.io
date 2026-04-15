"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaFacebookSquare, FaFilePdf } from "react-icons/fa";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import {
  Container,
  Section,
  SectionLabel,
  Mono,
  fadeUp,
} from "../components/primitives";

const Wrap = styled(Section)`
  background-color: ${({ theme }) => theme.surface};
  border-top: 1px solid ${({ theme }) => theme.border};
  position: relative;
  overflow: hidden;
`;

const Glow = styled.div`
  position: absolute;
  bottom: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: 80vw;
  max-width: 900px;
  max-height: 900px;
  background: radial-gradient(
    circle at center,
    ${({ theme }) => theme.accent}1f 0%,
    ${({ theme }) => theme.accentAlt}14 35%,
    transparent 70%
  );
  filter: blur(80px);
  pointer-events: none;
`;

const Inner = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const BigQuestion = styled.h2`
  font-size: clamp(2.25rem, 6vw, 4.5rem);
  letter-spacing: -0.035em;
  line-height: 1.05;
  max-width: 16ch;

  span {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.accent},
      ${({ theme }) => theme.accentAlt}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const EmailButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 18px 32px;
  border-radius: 999px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.bg};
  font-weight: 600;
  font-size: 1.05rem;
  transition:
    transform 250ms ease,
    box-shadow 250ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px ${({ theme }) => theme.accent}55;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px 24px;
  margin-top: 8px;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono-stack);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  transition:
    color 200ms ease,
    border-color 200ms ease,
    background-color 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.text};
    border-color: ${({ theme }) => theme.borderStrong};
    background-color: ${({ theme }) => theme.surfaceAlt};
  }
`;

const Footer = styled.footer`
  margin-top: clamp(80px, 10vw, 140px);
  padding-top: 32px;
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  font-family: var(--font-mono-stack);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textSubtle};
`;

const Contact = () => {
  return (
    <Wrap>
      <Glow />
      <Container>
        <motion.div {...fadeUp}>
          <Inner>
            <SectionLabel>04 · Contact</SectionLabel>
            <BigQuestion>
              Got something interesting to <span>build together?</span>
            </BigQuestion>
            <Mono>
              Open to chats about backend, distributed systems, and food.
            </Mono>
            <EmailButton href="mailto:dacharat.p@ku.th?subject=Hi Jack">
              <FiMail size={20} />
              dacharat.p@ku.th
              <FiArrowUpRight size={18} />
            </EmailButton>
            <Socials>
              <SocialLink
                href="https://github.com/dacharat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </SocialLink>
              <SocialLink
                href="https://facebook.com/dacharat.pankong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare /> Facebook
              </SocialLink>
              <SocialLink
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFilePdf /> Resume
              </SocialLink>
            </Socials>
          </Inner>

          <Footer>
            <span>© {new Date().getFullYear()} Dacharat Pankong</span>
            <span>Built with Next.js · Designed in Bangkok</span>
          </Footer>
        </motion.div>
      </Container>
    </Wrap>
  );
};

export default Contact;
