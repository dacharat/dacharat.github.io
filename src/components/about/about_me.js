import React from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import profile from "../../assets/profile.png";
import { Content } from "../component";

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
  padding: 10px;
`;

const AboutMe = () => {
  return <div>
      <Content className="container content-container">
        <p>
          <FontAwesome name="user-circle" /> About Me
        </p>
      </Content>
      <hr />
      <div className="row">
        <Left>
          <Img src={profile} alt="MyPicture" />
        </Left>
        <div className="col-md-6 m-auto">
          <Paragraph>
            {" "}
            Hi, I'm <b>
              Dacharat
            </b>. I'm currently a Software Developer student at Kasetsart University. I'm interesting in Web Developer. Now I'm looking for an internship about Software Develoment. If you are interested, feel free to contact me.
          </Paragraph>
        </div>
      </div>
    </div>;
};

export default AboutMe;
