import React from "react";
import styled from "styled-components";
import profile from "../../assets/profile.png";
import Segment from "../segment";

const Img = styled.img`
  border-radius: 50%;
  width: 70%;
  padding: 0.7em;
`;
const Left = styled.div.attrs({
  className: "col-md-6"
})``;
const Paragraph = styled.p`
  border-radius: 10px;
  background-color: #e7e7e7;
  padding: 12px;
`;

const Body = (
  <div className="row">
    <Left>
      <Img src={profile} alt="MyPicture" />
    </Left>
    <div className="col-md-6 m-auto">
      <Paragraph>
        {" "}
        Hi, I'm <b>Dacharat</b>. I'm currently a Software Developer student at
        Kasetsart University. Nowadays, technology is growing rapidly. I want to
        develop a modern Software for human.
      </Paragraph>
    </div>
  </div>
);

const AboutMe = () => {
  return <Segment icon="user" name="About Me" component={Body} />;
};

export default AboutMe;
