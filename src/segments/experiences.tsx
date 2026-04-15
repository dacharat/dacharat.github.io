"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Container,
  Section,
  SectionLabel,
  SectionHeading,
  Lead,
  Mono,
  fadeUp,
  fadeUpStagger,
} from "../components/primitives";
import ExperienceCard from "../components/experience/experience_card";
import {
  experiences,
  earlierInternships,
} from "../components/experience/experience_list";

const Wrap = styled(Section)`
  background-color: ${({ theme }) => theme.surface};
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Timeline = styled.div`
  margin-top: clamp(40px, 6vw, 64px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Earlier = styled.div`
  margin-top: clamp(48px, 6vw, 80px);
`;

const EarlierGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 24px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const EarlierItem = styled(motion.div)`
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Year = styled(Mono)`
  font-size: 0.7rem;
`;

const EarlierRole = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const EarlierCompany = styled.span`
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.9rem;
`;

const EarlierStack = styled.span`
  margin-top: 6px;
  font-family: var(--font-mono-stack);
  font-size: 0.72rem;
  color: ${({ theme }) => theme.textSubtle};
`;

const Experience = () => {
  return (
    <Wrap>
      <Container>
        <motion.div {...fadeUp}>
          <SectionLabel>02 · Work</SectionLabel>
          <SectionHeading>Where I&apos;ve been shipping things.</SectionHeading>
          <Lead>
            From a Growth-squad intern to a Senior Backend Engineer on
            Thailand&apos;s largest food delivery platform.
          </Lead>
        </motion.div>

        <Timeline>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} data={exp} />
          ))}
        </Timeline>

        <Earlier>
          <motion.div {...fadeUp}>
            <Mono>Earlier · Internships</Mono>
          </motion.div>
          <EarlierGrid>
            {earlierInternships.map((item, i) => (
              <EarlierItem key={i} {...fadeUpStagger(0.05 * i)}>
                <Year>{item.year}</Year>
                <EarlierRole>{item.role}</EarlierRole>
                <EarlierCompany>{item.company}</EarlierCompany>
                <EarlierStack>{item.stack}</EarlierStack>
              </EarlierItem>
            ))}
          </EarlierGrid>
        </Earlier>
      </Container>
    </Wrap>
  );
};

export default Experience;
