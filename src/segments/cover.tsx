"use client";

import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Display, Mono } from "../components/primitives";
import { Link } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";

const Hero = styled.section`
  position: relative;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  padding: clamp(80px, 12vw, 140px) 0 clamp(60px, 10vw, 100px);
  overflow: hidden;
`;

const Glow = styled(motion.div)`
  position: absolute;
  top: -20%;
  right: -10%;
  width: 60vw;
  height: 60vw;
  max-width: 800px;
  max-height: 800px;
  background: radial-gradient(
    circle at center,
    ${({ theme }) => theme.accent}26 0%,
    ${({ theme }) => theme.accentAlt}1a 35%,
    transparent 70%
  );
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 4vw, 40px);
`;

const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Dot = styled(motion.span)`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent};
  box-shadow: 0 0 16px ${({ theme }) => theme.accent};
`;

const Name = styled(Display)`
  max-width: 14ch;

  span.accent {
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

const Tagline = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  line-height: 1.55;
  color: ${({ theme }) => theme.textMuted};
  max-width: 56ch;

  strong {
    color: ${({ theme }) => theme.text};
    font-weight: 600;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px 32px;
  margin-top: 8px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MetaLabel = styled(Mono)`
  font-size: 0.7rem;
`;

const MetaValue = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;

const ScrollHint = styled(Link)`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono-stack);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
  cursor: pointer;
  z-index: 1;
  transition: color 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.text};
  }

  svg {
    animation: bob 2.4s ease-in-out infinite;
  }

  @keyframes bob {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const Cover = () => {
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <Hero id="cover">
      <Glow style={{ y: glowY, opacity: glowOpacity }} />
      <Container>
        <Content>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>
              <Dot
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Mono>Portfolio · 2026</Mono>
            </Eyebrow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Name>
              Dacharat
              <br />
              <span className="accent">Pankong.</span>
            </Name>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Tagline>
              <strong>Senior backend engineer at LINE MAN Wongnai.</strong> I
              build food delivery systems at scale — pricing, ordering, and the
              paths millions of orders run through every day.
            </Tagline>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Meta>
              <MetaItem>
                <MetaLabel>Role</MetaLabel>
                <MetaValue>Senior Backend Engineer</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>Company</MetaLabel>
                <MetaValue>LINE MAN Wongnai</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>Based in</MetaLabel>
                <MetaValue>Bangkok, Thailand</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>Stack</MetaLabel>
                <MetaValue>Go · MongoDB · Kafka · Redis · gRPC</MetaValue>
              </MetaItem>
            </Meta>
          </motion.div>
        </Content>
      </Container>

      <ScrollHint to="about" smooth duration={800} offset={-80}>
        Scroll
        <FaArrowDown size={12} />
      </ScrollHint>
    </Hero>
  );
};

export default Cover;
