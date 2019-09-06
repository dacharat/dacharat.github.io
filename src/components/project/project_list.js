import React from "react";
import Segment from "../segment";
import ProjectCard from "./project_card";
import Pulse from "react-reveal/Pulse";

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

// technology
import java from "../../assets/skills/language/java.png";
import javascript from "../../assets/skills/language/javascript.png";
import python from "../../assets/skills/language/python.png";
import html from "../../assets/skills/front-end/html.png";
import css from "../../assets/skills/front-end/css.png";
import react_icon from "../../assets/skills/front-end/react.png";
import node from "../../assets/skills/back-end/node.png";
import django from "../../assets/skills/back-end/django.png";
import mongo from "../../assets/skills/database/mongodb.png";
import postgreSQL from "../../assets/skills/database/postgreSQL.png";
import sqlAdmin from "../../assets/skills/database/mysqlAdmin.png";
import firebase from "../../assets/skills/database/firebase.png";
import asana from "../../assets/skills/tools/asana.png";
import gitlab from "../../assets/skills/tools/gitlab.png";
import javafx from "../../assets/skills/tools/javafx.png";
import nvidia from "../../assets/skills/tools/nvidia.png";
import openCV from "../../assets/skills/python-tools/opencv.png";
import tensorflow from "../../assets/skills/python-tools/tensorflow.png";
import keras from "../../assets/skills/python-tools/keras.png";

const projects = [
  {
    name: "Face Eotion Result",
    describe:
      "Internship project that maintain the University project which can predict emotion to recognize the face and record to the database and develop a web application to show the result from the database as a graph.",
    url: "https://github.com/dacharat/face_emotion_result",
    images: [],
    technology: [python, django, postgreSQL, openCV, tensorflow, keras, nvidia]
  },
  {
    name: "Otopaholic",
    describe:
      "Group project to create an e-commerce web application that sells OTOP products. This project working on full-stack web developer use ReactJS and Express.",
    url: "https://github.com/InsanelyGood/InsanelyGood-OTOP",
    images: [
      otop_first,
      otop_second,
      otop_third,
      otop_fourth,
      otop_fifth,
      otop_sixth
    ],
    technology: [javascript, react_icon, node, mongo, gitlab, asana]
  },
  {
    name: "IP subnet calculator",
    describe: "Group project to create IP subnet calaulator.",
    url: "https://github.com/dacharat/IP-subnet-calculator",
    images: [ip_first, ip_second],
    technology: [javascript, react_icon, firebase]
  },
  {
    name: "Math Master Game",
    describe: "Final project in OOP class, use Java to make application.",
    url: "https://github.com/dacharat/Math-Master-Game",
    images: [math_first, math_second, math_third, math_fourth],
    technology: [java, javafx, sqlAdmin]
  },
  {
    name: "Took-took-4.0",
    describe: "Group project to create IoT(Internet of Things) application. ",
    url: "https://github.com/took-took-4/took-took4",
    images: [tt_first, tt_second],
    technology: [javascript, html, css]
  }
];

const Body = () => {
  return projects.map((project, i) => (
    <Pulse key={i}>
      <ProjectCard data={project} />
    </Pulse>
  ));
};

// const Body = () => {
//   return projects.map((project, i) => ({
//     ...(i % 2 === 0 ? (
//       <LightSpeed left key={i}>
//         <ProjectCard data={project} />
//       </LightSpeed>
//     ) : (
//       <LightSpeed right key={i}>
//         <ProjectCard data={project} />
//       </LightSpeed>
//     ))
//   }));
// };

const ProjectList = () => {
  return <Segment icon="list-alt" name="Projects" component={<Body />} />;
};

export default ProjectList;
