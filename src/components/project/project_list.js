import React from "react";
import Segment from "../segment";
import ProjectCard from "./project_card";
import { LightSpeed } from "react-reveal";

const projects = [
  {
    name: "Otopaholic",
    describe:
      "Group project to create an e-commerce web application that sells OTOP products. This project working on full-stack web developer use ReactJS and Express.",
    url: "https://github.com/InsanelyGood/InsanelyGood-OTOP"
  },
  {
    name: "IP subnet calculator",
    describe: "Group project to create IP subnet calaulator.",
    url: "https://github.com/dacharat/IP-subnet-calculator"
  },
  {
    name: "Math Master Game",
    describe: "Final project in OOP class, use Java to make application.",
    url: "https://github.com/dacharat/Math-Master-Game"
  },
  {
    name: "Took-took-4.0",
    describe: "Group project to create IoT(Internet of Things) application. ",
    url: "https://github.com/took-took-4/took-took4"
  }
];

const Body = () => {
  return projects.map((project, i) => (
    <LightSpeed left key={i}>
      <ProjectCard data={project}/>
    </LightSpeed>
  ));
};

const ProjectList = () => {
  return <Segment icon="list-alt" name="Projects" component={Body()} />;
};

export default ProjectList;
