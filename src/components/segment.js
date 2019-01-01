import React from "react";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";

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

export default Segment;