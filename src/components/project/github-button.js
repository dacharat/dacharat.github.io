import React from "react";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.a`
  @media (min-width: 769px) {
    transition: max-width 0.4s;
    max-width: 45px;
  }
  color: black !important;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  border-radius: 200px;
  border: 1px solid black;
  padding: 2px 7px;
  :hover {
    text-decoration: none;
    border-radius: 100px;
    overflow: hidden;
    white-space: nowrap;
    max-width: 175px;
    span {
      display: initial;
    }
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

const GithubButton = ({ url }) => {
  return (
    <Button href={url}>
      <FontAwesome name="github" size="2x" />
      <Message>See in Github</Message>
    </Button>
  );
};

GithubButton.propTypes = {
  url: PropTypes.string
};
GithubButton.defaultProps = {
  url: "nothing"
};

export default GithubButton;
