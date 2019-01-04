import React from "react";
import styled from "styled-components";
import profile from "../../assets/profile.png";
import Segment from "../segment";

const Img = styled.img`
  border-radius: 50%;
  width: 70%;
  padding: 0.7em;
`;
const Paragraph = styled.p`
  border-radius: 10px;
  background-color: #e7e7e7;
  padding: 12px;
  width: 90%;
  margin: auto;
`;

const Body = () => {
  return (
    <div className="row">
      <div className="col-md-6 text-center">
        <Img src={profile} alt="MyPicture" />
      </div>
      <div className="col-md-6 m-auto text-center">
        <Paragraph>
          {" "}
          Hi, I'm <b>Dacharat</b>. I'm currently a Software Developer student at
          Kasetsart University. Nowadays, technology is growing rapidly. I want
          to develop a modern Software for human.
        </Paragraph>
      </div>
    </div>
  );
};

const AboutMe = () => {
  return <Segment icon="user-circle" name="About Me" component={<Body />} />;
};

export default AboutMe;
