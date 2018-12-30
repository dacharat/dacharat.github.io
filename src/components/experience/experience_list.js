import React from "react";
import Segment from "../segment";
import ExperienceCard from "./experience_card";
import { Flip } from "react-reveal";

// experiences
import glazziq from "../../assets/experiences/glazziq.jpg";

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
      "ProgeSQL"
    ]
  }
];

const Body = () => {
  return myExperience.map((experience, i) => (
    <Flip top key={i}>
      <ExperienceCard data={experience} />
    </Flip>
  ));
};

const ExperienceList = () => {
  return <Segment icon="book" name="Experiences" component={Body()} />;
};

export default ExperienceList;
