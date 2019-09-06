import React from "react";
import Segment from "../segment";
import ExperienceCard from "./experience_card";
import { Flip } from "react-reveal";

// experiences
import glazziq from "../../assets/experiences/glazziq.jpg";
import offenburg from "../../assets/experiences/offenburg_university.jpg";

const myExperience = [
  {
    name: "Internship at Glazziq",
    image: glazziq,
    describe: [
      "Eyewear e-commerce",
      "04/06/2018 - 03/08/2018",
      "Ruby on rails",
      "React",
      "Slim",
      "PostgreSQL"
    ]
  },
  {
    name: "Internship at Offenburg University",
    image: offenburg,
    describe: [
      "Deep Learning, Face Recognition",
      "03/06/2019 - 02/08/2019",
      "Python",
      "OpenCV, Tensorflow, Keras",
      "Django Framework",
      "PostgreSQL"
    ]
  }
];

const Body = () => {
  return myExperience.reverse().map((experience, i) => (
    <Flip top key={i}>
      <ExperienceCard data={experience} />
    </Flip>
  ));
};

const ExperienceList = () => {
  return <Segment icon="book" name="Experiences" component={<Body />} />;
};

export default ExperienceList;
