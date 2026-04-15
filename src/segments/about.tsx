"use client";

import React from "react";
import Image from "next/image";
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

// ─── Layout ──────────────────────────────────────────────────────────────────

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: start;

  @media (min-width: 900px) {
    grid-template-columns: 320px 1fr;
  }
`;

const Portrait = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 1 / 1;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.accent}1a 0%,
      transparent 50%,
      ${({ theme }) => theme.accentAlt}1a 100%
    );
    pointer-events: none;
  }
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BioParagraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.text};

  strong {
    font-weight: 600;
  }

  a {
    color: ${({ theme }) => theme.accent};
    border-bottom: 1px solid ${({ theme }) => theme.accent}66;
    transition: border-color 200ms ease;

    &:hover {
      border-bottom-color: ${({ theme }) => theme.accent};
    }
  }
`;

// ─── Skill chips ─────────────────────────────────────────────────────────────

const SkillBlock = styled.div`
  margin-top: clamp(60px, 8vw, 100px);
  display: grid;
  gap: 32px;
`;

const SkillGroup = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 24px;
  padding: 24px 0;
  border-top: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const SkillLabel = styled(Mono)`
  align-self: start;
`;

const SkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  font-size: 0.85rem;
  font-weight: 500;
  cursor: default;
  transition:
    border-color 200ms ease,
    color 200ms ease,
    background-color 200ms ease,
    transform 200ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
  }
`;

const skills: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Go", "TypeScript", "Python", "Java"],
  },
  {
    label: "Backend",
    items: ["gRPC", "REST", "GraphQL", "Microservices", "Distributed systems"],
  },
  {
    label: "Data",
    items: ["MongoDB", "Redis", "MySQL", "PostgreSQL"],
  },
  {
    label: "Messaging",
    items: ["Kafka", "RabbitMQ"],
  },
  {
    label: "Tooling",
    items: ["Docker", "Kubernetes", "Git", "GitHub", "GitLab"],
  },
];

const About = () => {
  return (
    <Section>
      <Container>
        <motion.div {...fadeUp}>
          <SectionLabel>01 · About</SectionLabel>
          <SectionHeading>
            Backend engineer, builder, occasional tinkerer.
          </SectionHeading>
        </motion.div>

        <Grid>
          <Portrait {...fadeUpStagger(0.1)}>
            <Image
              src="/assets/profile.jpg"
              alt="Portrait of Dacharat Pankong"
              fill
              sizes="(max-width: 900px) 70vw, 320px"
              style={{ objectFit: "cover" }}
              priority
            />
          </Portrait>

          <Bio>
            <motion.div {...fadeUpStagger(0.15)}>
              <Lead>
                I&apos;m Dacharat Pankong — friends call me Jack. I&apos;m a
                software engineer based in Bangkok, focused on building backend
                systems that scale.
              </Lead>
            </motion.div>

            <motion.div {...fadeUpStagger(0.2)}>
              <BioParagraph>
                I started out studying computer engineering at Kasetsart
                University and found myself drawn to the messy, satisfying work
                of turning ideas into shipped products. My path began with
                internships across three very different worlds — an eyewear
                e-commerce startup, a deep learning research lab in Germany, and
                the Growth squad at Wongnai.
              </BioParagraph>
            </motion.div>

            <motion.div {...fadeUpStagger(0.25)}>
              <BioParagraph>
                Today I&apos;m a <strong>Senior Backend Engineer</strong> at{" "}
                <strong>LINE MAN Wongnai</strong>, working on the food delivery
                platform. I care most about writing code that&apos;s clear
                enough to delete, systems that fail loudly, and products that
                respect the people using them.
              </BioParagraph>
            </motion.div>
          </Bio>
        </Grid>

        <SkillBlock>
          <motion.div {...fadeUp}>
            <Mono>What I work with</Mono>
          </motion.div>
          {skills.map((group, i) => (
            <motion.div key={group.label} {...fadeUpStagger(0.05 * i)}>
              <SkillGroup>
                <SkillLabel>{group.label}</SkillLabel>
                <SkillChips>
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </SkillChips>
              </SkillGroup>
            </motion.div>
          ))}
        </SkillBlock>
      </Container>
    </Section>
  );
};

export default About;
