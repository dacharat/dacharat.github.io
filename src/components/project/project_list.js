import React from "react";
import Segment from "../segment";
import ProjectCard from "./project_card";
import { LightSpeed } from "react-reveal";

// ip-subnet
import ip_first from "../../assets/projects/ip-subnet/first.png";
import ip_second from "../../assets/projects/ip-subnet/second.png";

// math-game
import math_first from "../../assets/projects/math-game/first.png";
import math_second from "../../assets/projects/math-game/second.png";
import math_third from "../../assets/projects/math-game/third.png";
import math_fourth from "../../assets/projects/math-game/fourth.png";

// otopaholic
import otop_first from "../../assets/projects/otopaholic/first.png";
import otop_second from "../../assets/projects/otopaholic/second.png";
import otop_third from "../../assets/projects/otopaholic/third.png";
import otop_fourth from "../../assets/projects/otopaholic/fourth.png";
import otop_fifth from "../../assets/projects/otopaholic/fifth.png";
import otop_sixth from "../../assets/projects/otopaholic/sixth.png";

// took-took
import tt_first from "../../assets/projects/took-took/first.png";
import tt_second from "../../assets/projects/took-took/second.png";

const projects = [
  {
    name: "Otopaholic",
    describe:
      "Group project to create an e-commerce web application that sells OTOP products. This project working on full-stack web developer use ReactJS and Express.",
    url: "https://github.com/InsanelyGood/InsanelyGood-OTOP",
    image: [
      { src: otop_first },
      { src: otop_second },
      { src: otop_third },
      { src: otop_fourth },
      { src: otop_fifth },
      { src: otop_sixth }
    ]
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
  return projects.map((project, i) => ({
    ...(i % 2 === 0 ? (
      <LightSpeed left key={i}>
        <ProjectCard data={project} />
      </LightSpeed>
    ) : (
      <LightSpeed right key={i}>
        <ProjectCard data={project} />
      </LightSpeed>
    ))
  }));
};

const ProjectList = () => {
  return <Segment icon="list-alt" name="Projects" component={Body()} />;
};

export default ProjectList;
