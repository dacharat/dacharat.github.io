import React from "react";
import AboutMe from "../components/about/about_me";
import Information from "../components/about/information";
import Skill from '../components/about/skill'

const About = () => {
  return (
    <div className="mt-3 mb-3">
      <AboutMe />
      <Information />
      <Skill />
    </div>
  );
};

export default About;
