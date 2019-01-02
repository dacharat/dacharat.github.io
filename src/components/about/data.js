import React from "react";
import styled from "styled-components";

const Left = styled.b.attrs({
  className: "ml-3"
})`
  float: left;
  font-size: 18px;
`;

const Right = styled.p.attrs({
  className: "mr-3"
})`
  float: right;
  font-size: 18px;
`;

const Data = ({ left, right }) => {
  return (
    <div className="clearfix">
      <Left>{left}:</Left>
      <Right>{right}</Right>
      <br />
    </div>
  );
};

export default Data;
