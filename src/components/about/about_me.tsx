import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Segment from "../segment";
import { FaUserCircle } from "react-icons/fa";
const Paragraph = styled.p`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: 12px;
  width: 90%;
  margin: auto;
`;

const Body = () => {
  return (
    <div className="row">
      <div className="col-md-6 text-center">
        <Image
          src="/assets/profile.png"
          alt="MyPicture"
          width={300}
          height={300}
          style={{
            borderRadius: "50%",
            width: "70%",
            height: "auto",
            padding: "0.7em",
          }}
        />
      </div>
      <div className="col-md-6 m-auto text-center">
        <Paragraph>
          {" "}
          Hi, I&apos;m <b>Dacharat</b>. I&apos;m currently a Software Engineer
          student at Kasetsart University. Nowadays, technology is growing
          rapidly. I want to develop a modern Software for human.
        </Paragraph>
      </div>
    </div>
  );
};

const AboutMe = () => {
  return <Segment icon={FaUserCircle} name="About Me" component={<Body />} />;
};

export default AboutMe;
