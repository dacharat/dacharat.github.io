import React from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";

// head picture
import head_pic from "../assets/head.jpg";

const Img = styled.img`
  width: 100%;
`;
const HeadContainer = styled.div`
  position: relative;
  text-align: center;
`;
const InImage = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Name = styled.p`
  font-family: monospace;
  font-size: 30px;
`;

const Head = () => {
  return (
    <HeadContainer>
      <Img src={head_pic} alt="No head" />
      <InImage>
        <Typing>
          <Name>Dacharat Pankong</Name>
          <p>Software Developer</p>
        </Typing>
      </InImage>
    </HeadContainer>
  );
};

export default Head;
