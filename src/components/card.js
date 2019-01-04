import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled.div.attrs({ className: "p-3 m-2" })`
  box-shadow: -1px -1px 10px 2px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const Card = ({ head, component }) => {
  return (
    <Box>
      <h4 className="pt-2 pl-3">{head}</h4>
      <hr />
      {component}
    </Box>
  );
};

Card.propTypes = {
  head: PropTypes.string,
  component: PropTypes.node
};
Card.defaultProps = {
  head: "nothing",
  component: <p>nothing</p>
};

export default Card;
