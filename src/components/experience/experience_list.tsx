import React from "react";
import Segment from "../segment";
import ExperienceCard from "./experience_card";
import ScrollAnimate from "../ScrollAnimate";
import { FaBook } from "react-icons/fa";

const myExperience = [
  {
    name: "Internship at Glazziq",
    image: "/assets/experiences/glazziq.jpg",
    describe: [
      "Eyewear e-commerce",
      "04/06/2018 - 03/08/2018",
      "Ruby on rails",
      "React",
      "Slim",
      "PostgreSQL",
    ],
  },
  {
    name: "Internship at Offenburg University",
    image: "/assets/experiences/offenburg_university.jpg",
    describe: [
      "Deep Learning, Face Recognition",
      "03/06/2019 - 02/08/2019",
      "Python",
      "OpenCV, Tensorflow, Keras",
      "Django Framework",
      "PostgreSQL",
    ],
  },
  {
    name: "Internship at Wongnai Media Co.,Ltd.",
    image: "/assets/experiences/wongnai.jpg",
    describe: [
      "Software Engineer, Backend [Growth squad]",
      "13/08/2019 - 20/12/2019",
      "Java, Python, Javascript, Typescript",
      "RESTful API, gRPC, graphQL",
      "React",
      "Express",
      "Spring Framework",
      "MySQL, phpMyAdmin",
    ],
  },
];

const Body = () => {
  return (
    <>
      {[...myExperience].reverse().map((experience, i) => (
        <ScrollAnimate key={i} variant="flip">
          <ExperienceCard data={experience} />
        </ScrollAnimate>
      ))}
    </>
  );
};

const ExperienceList = () => {
  return <Segment icon={FaBook} name="Experience" component={<Body />} />;
};

export default ExperienceList;
