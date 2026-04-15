"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Mono, fadeUp } from "../primitives";
import type { ExperienceItem } from "./experience_list";

// ─── Styles ──────────────────────────────────────────────────────────────────

const Card = styled(motion.article)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: clamp(28px, 4vw, 48px) 0;
  border-top: 1px solid ${({ theme }) => theme.border};

  @media (min-width: 800px) {
    grid-template-columns: 200px 1fr;
    gap: 48px;
  }
`;

const Period = styled(Mono)`
  align-self: start;
  padding-top: 4px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Role = styled.h3`
  font-size: clamp(1.35rem, 2.2vw, 1.75rem);
  letter-spacing: -0.02em;
`;

const Company = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.textMuted};

  a {
    color: ${({ theme }) => theme.text};
    border-bottom: 1px solid ${({ theme }) => theme.border};
    transition:
      border-color 200ms ease,
      color 200ms ease;
  }
  a:hover {
    color: ${({ theme }) => theme.accent};
    border-bottom-color: ${({ theme }) => theme.accent};
  }
`;

const Summary = styled.p`
  color: ${({ theme }) => theme.textMuted};
  font-size: 1rem;
  line-height: 1.7;
  max-width: 64ch;
`;

const Highlights = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Highlight = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding-left: 0;
  font-size: 0.97rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.text};

  &::before {
    content: "";
    flex: 0 0 auto;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    margin-top: 10px;
  }
`;

const Metric = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  margin-left: 8px;
  border-radius: 999px;
  font-family: var(--font-mono-stack);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.accent},
    ${({ theme }) => theme.accentAlt}
  );
  color: #ffffff;
  vertical-align: middle;
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`;

const StackChip = styled.span`
  font-family: var(--font-mono-stack);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textMuted};
  background-color: ${({ theme }) => theme.surface};
`;

// ─── Component ───────────────────────────────────────────────────────────────

const ExperienceCard = ({ data }: { data: ExperienceItem }) => {
  return (
    <Card {...fadeUp}>
      <Period>{data.period}</Period>
      <Body>
        <Role>{data.role}</Role>
        <Company>
          {data.companyUrl ? (
            <a href={data.companyUrl} target="_blank" rel="noopener noreferrer">
              {data.company}
            </a>
          ) : (
            data.company
          )}
        </Company>
        <Summary>{data.summary}</Summary>
        {data.highlights && data.highlights.length > 0 && (
          <Highlights>
            {data.highlights.map((h, i) => (
              <Highlight key={i}>
                <span>
                  {h.text}
                  {h.metric && <Metric>{h.metric}</Metric>}
                </span>
              </Highlight>
            ))}
          </Highlights>
        )}
        {data.stack && data.stack.length > 0 && (
          <Stack>
            {data.stack.map((s) => (
              <StackChip key={s}>{s}</StackChip>
            ))}
          </Stack>
        )}
      </Body>
    </Card>
  );
};

export default ExperienceCard;
