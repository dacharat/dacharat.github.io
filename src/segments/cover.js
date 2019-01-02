import React from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";

// cover picture
import cover_pc from "../assets/cover/cover-pc.jpg";
import cover_tablet from "../assets/cover/cover-tablet.jpg";
import cover_mobile from "../assets/cover/cover-mobile.jpg";

const Img = styled.img`
  width: 100%;
`;
const CoverContainer = styled.div`
  position: relative;
  text-align: center;
`;
const CoverDescription = styled.div`
  position: absolute;
  width: 100%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Name = styled.h1`
  font-family: "Special Elite", cursive;
`;
const Job = styled.h4`
  font-family: "Baloo", cursive;
  opacity: 0.75;
`;

class Cover extends React.Component {
  state = {
    loaded: false
  };

  render() {
    return (
      <CoverContainer>
        <picture>
          <source media="(max-width: 480px)" srcSet={cover_mobile} />
          <source media="(max-width: 800px)" srcSet={cover_tablet} />
          <Img
            src={cover_pc}
            onLoad={() => this.setState({ loaded: true })}
            alt="Not found cover image"
          />
        </picture>
        {this.state.loaded && (
          <CoverDescription>
            <Typing>
              <Name>Dacharat Pankong</Name>
              <Job>Software Developer</Job>
            </Typing>
          </CoverDescription>
        )}
      </CoverContainer>
    );
  }
}

export default Cover;
