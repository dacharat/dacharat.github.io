import React from "react";
import Segment from "../segment";
import ProjectCard from "./project_card";
import ScrollAnimate from "../ScrollAnimate";
import { FaListAlt } from "react-icons/fa";

const projects = [
  {
    name: "Face Emotion Result",
    describe:
      "Internship project that maintain the University project which can predict emotion to recognize the face and record to the database and develop a web application to show the result from the database as a graph.",
    url: "https://github.com/dacharat/face_emotion_result",
    images: [],
    technology: [
      "/assets/skills/language/python.png",
      "/assets/skills/back-end/django.png",
      "/assets/skills/database/postgreSQL.png",
      "/assets/skills/python-tools/opencv.png",
      "/assets/skills/python-tools/tensorflow.png",
      "/assets/skills/python-tools/keras.png",
      "/assets/skills/tools/nvidia.png",
    ],
  },
  {
    name: "Otopaholic",
    describe:
      "Group project to create an e-commerce web application that sells OTOP products. This project working on full-stack web developer use ReactJS and Express.",
    url: "https://github.com/InsanelyGood/InsanelyGood-OTOP",
    images: [
      "/assets/projects/otopaholic/first.png",
      "/assets/projects/otopaholic/second.png",
      "/assets/projects/otopaholic/third.png",
      "/assets/projects/otopaholic/fourth.png",
      "/assets/projects/otopaholic/fifth.png",
      "/assets/projects/otopaholic/sixth.png",
    ],
    technology: [
      "/assets/skills/language/javascript.png",
      "/assets/skills/front-end/react.png",
      "/assets/skills/back-end/node.png",
      "/assets/skills/database/mongodb.png",
      "/assets/skills/tools/gitlab.png",
      "/assets/skills/tools/asana.png",
    ],
  },
  {
    name: "IP subnet calculator",
    describe: "Group project to create IP subnet calculator.",
    url: "https://github.com/dacharat/IP-subnet-calculator",
    images: [
      "/assets/projects/ip-subnet/first.png",
      "/assets/projects/ip-subnet/second.png",
    ],
    technology: [
      "/assets/skills/language/javascript.png",
      "/assets/skills/front-end/react.png",
      "/assets/skills/database/firebase.png",
    ],
  },
  {
    name: "Math Master Game",
    describe: "Final project in OOP class, use Java to make application.",
    url: "https://github.com/dacharat/Math-Master-Game",
    images: [
      "/assets/projects/math-game/first.png",
      "/assets/projects/math-game/second.png",
      "/assets/projects/math-game/third.png",
      "/assets/projects/math-game/fourth.png",
    ],
    technology: [
      "/assets/skills/language/java.png",
      "/assets/skills/tools/javafx.png",
      "/assets/skills/database/mysqlAdmin.png",
    ],
  },
  {
    name: "Took-took-4.0",
    describe: "Group project to create IoT(Internet of Things) application.",
    url: "https://github.com/took-took-4/took-took4",
    images: [
      "/assets/projects/took-took/first.png",
      "/assets/projects/took-took/second.png",
    ],
    technology: [
      "/assets/skills/language/javascript.png",
      "/assets/skills/front-end/html.png",
      "/assets/skills/front-end/css.png",
    ],
  },
];

const Body = () => {
  return (
    <>
      {projects.map((project, i) => (
        <ScrollAnimate key={i} variant="pulse">
          <ProjectCard data={project} />
        </ScrollAnimate>
      ))}
    </>
  );
};

const ProjectList = () => {
  return <Segment icon={FaListAlt} name="Projects" component={<Body />} />;
};

export default ProjectList;
