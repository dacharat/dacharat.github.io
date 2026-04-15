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
  fadeUp,
} from "../components/primitives";
import {
  FeaturedProjectCard,
  ProjectCard,
} from "../components/project/project_card";
import { projects } from "../components/project/project_list";

const FeaturedSlot = styled.div`
  margin-top: clamp(40px, 6vw, 64px);
`;

const Grid = styled.div`
  margin-top: clamp(32px, 5vw, 56px);
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(20px, 2vw, 28px);

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Project = () => {
  const [featured, ...rest] = projects;

  return (
    <Section>
      <Container>
        <motion.div {...fadeUp}>
          <SectionLabel>03 · Projects</SectionLabel>
          <SectionHeading>Things I&apos;ve built along the way.</SectionHeading>
          <Lead>
            A handful of projects from school, internships, and weekends — kept
            here because each one taught me something I still use today.
          </Lead>
        </motion.div>

        <FeaturedSlot>
          <FeaturedProjectCard data={featured} />
        </FeaturedSlot>

        <Grid>
          {rest.map((p) => (
            <ProjectCard key={p.name} data={p} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Project;
