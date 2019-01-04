import React from "react";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.a.attrs({
  className: "btn border-dark"
})`
  border-radius: 100px !important;
  padding: 2px 7px !important;
  :hover span {
    display: initial;
  }
`;
const Message = styled.span`
  @media (max-width: 768px) {
    display: initial;
  }
  item-align: center;
  justify-content: center;
  margin: 0px 10px;
  display: none;
`;

const GithubButton = ({url}) => {
  return (
    <Button href={url}>
      <FontAwesome name="github" size="2x" />
      <Message>See in Github</Message>
    </Button>
  ); 
}

GithubButton.propTypes = {
  url: PropTypes.string
};
GithubButton.defaultProps = {
  url: "nothing"
};

export default GithubButton;
