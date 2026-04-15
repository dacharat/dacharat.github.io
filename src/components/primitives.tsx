"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

/**
 * Shared layout + typography primitives used across all sections.
 * Centralising them here keeps spacing, type scale, and motion presets
 * consistent and lets us tweak the design system in one place.
 */

// ─── Layout ──────────────────────────────────────────────────────────────────

export const Container = styled.div`
  width: min(1200px, 92vw);
  margin: 0 auto;
`;

export const Section = styled.section`
  padding: clamp(80px, 12vw, 160px) 0;
  position: relative;
`;

// ─── Typography ──────────────────────────────────────────────────────────────

export const Mono = styled.span`
  font-family: var(--font-mono-stack);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

export const SectionLabel = styled(Mono)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  &::before {
    content: "";
    display: inline-block;
    width: 32px;
    height: 1px;
    background: ${({ theme }) => theme.accent};
  }
`;

export const SectionHeading = styled.h2`
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  letter-spacing: -0.025em;
  margin-bottom: clamp(40px, 6vw, 72px);
  max-width: 24ch;
`;

export const Display = styled.h1`
  font-size: clamp(3rem, 8vw, 5.75rem);
  letter-spacing: -0.035em;
  line-height: 1;
`;

export const Lead = styled.p`
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.65;
  max-width: 60ch;
`;

// ─── Motion presets ──────────────────────────────────────────────────────────

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export const fadeUpStagger = (delay: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
});

export const MotionDiv = motion.div;
