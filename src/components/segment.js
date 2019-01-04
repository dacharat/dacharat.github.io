import React from "react";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";
import PropTypes from "prop-types";

const Content = styled.div.attrs({
  className: "text-center container"
})`
  margin-top: 15px;
  font-size: 30px;
`;

const Segment = ({ icon, name, component }) => {
  return (
    <div className="mt-3">
      <Content>
        <p>
          <FontAwesome name={icon} /> {name}
        </p>
      </Content>
      <hr />
      {component}
      <hr />
    </div>
  );
};

Segment.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  component: PropTypes.node
};
Segment.defaultProps = {
  icon: "nothing",
  name: "nothing",
  component: <p>nothing</p>
};

export default Segment;
