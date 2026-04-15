"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Mono, fadeUp } from "../primitives";
import type { ProjectItem } from "./project_list";

// ─── Shared styles ───────────────────────────────────────────────────────────

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const StackChip = styled.span`
  font-family: var(--font-mono-stack);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textMuted};
  background-color: ${({ theme }) => theme.surface};
`;

const ViewLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono-stack);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.text};
  padding-bottom: 4px;
  transition:
    color 200ms ease,
    border-color 200ms ease,
    gap 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    border-bottom-color: ${({ theme }) => theme.accent};
    gap: 14px;
  }
`;

// ─── Featured (large, image left) ────────────────────────────────────────────

const Featured = styled(motion.article)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding: clamp(28px, 4vw, 48px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.surface};
  box-shadow: ${({ theme }) => theme.shadow};
  transition:
    box-shadow 300ms ease,
    transform 300ms ease,
    border-color 300ms ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowHover};
    border-color: ${({ theme }) => theme.borderStrong};
    transform: translateY(-2px);
  }

  @media (min-width: 900px) {
    grid-template-columns: 1.1fr 1fr;
    gap: 56px;
    align-items: center;
  }
`;

const FeaturedImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.accent}33,
    ${({ theme }) => theme.accentAlt}33
  );
  border: 1px solid ${({ theme }) => theme.border};
`;

const FeaturedBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FeaturedTagline = styled.h3`
  font-size: clamp(1.5rem, 2.6vw, 2rem);
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const FeaturedDesc = styled.p`
  color: ${({ theme }) => theme.textMuted};
  font-size: 1rem;
  line-height: 1.7;
`;

const Meta = styled.div`
  display: flex;
  gap: 16px;
  color: ${({ theme }) => theme.textSubtle};
`;

// ─── Compact card (grid item) ────────────────────────────────────────────────

const Compact = styled(motion.article)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.surface};
  transition:
    transform 300ms ease,
    border-color 300ms ease,
    box-shadow 300ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.borderStrong};
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const CompactHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

const CompactTitle = styled.h4`
  font-size: 1.2rem;
  letter-spacing: -0.015em;
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.textMuted};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  transition:
    color 200ms ease,
    border-color 200ms ease,
    background-color 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => theme.surfaceAlt};
  }
`;

const CompactDesc = styled.p`
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.92rem;
  line-height: 1.6;
  flex: 1;
`;

// ─── Components ──────────────────────────────────────────────────────────────

export const FeaturedProjectCard = ({ data }: { data: ProjectItem }) => {
  return (
    <Featured {...fadeUp}>
      <FeaturedImage>
        {data.cover && (
          <Image
            src={data.cover}
            alt={`${data.name} cover`}
            fill
            sizes="(max-width: 900px) 92vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        )}
      </FeaturedImage>
      <FeaturedBody>
        <Mono>Featured · {data.year}</Mono>
        <FeaturedTagline>{data.tagline}</FeaturedTagline>
        <FeaturedDesc>{data.description}</FeaturedDesc>
        <StackRow>
          {data.stack.map((s) => (
            <StackChip key={s}>{s}</StackChip>
          ))}
        </StackRow>
        <Meta>{data.context && <Mono>{data.context}</Mono>}</Meta>
        <ViewLink href={data.url} target="_blank" rel="noopener noreferrer">
          View on GitHub <FaArrowRight size={12} />
        </ViewLink>
      </FeaturedBody>
    </Featured>
  );
};

export const ProjectCard = ({ data }: { data: ProjectItem }) => {
  return (
    <Compact {...fadeUp}>
      <CompactHeader>
        <div>
          <Mono>{data.year}</Mono>
          <CompactTitle>{data.name}</CompactTitle>
        </div>
        <IconLink
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${data.name} on GitHub`}
        >
          <FaGithub size={14} />
        </IconLink>
      </CompactHeader>
      <CompactDesc>{data.description}</CompactDesc>
      <StackRow>
        {data.stack.map((s) => (
          <StackChip key={s}>{s}</StackChip>
        ))}
      </StackRow>
    </Compact>
  );
};

export default ProjectCard;
