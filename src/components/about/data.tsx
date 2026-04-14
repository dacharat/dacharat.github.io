import React from "react";
import styled from "styled-components";

const Left = styled.b.attrs({
  className: "ms-3",
})`
  float: left;
  font-size: 18px;
`;
const Right = styled.p.attrs({
  className: "me-3",
})`
  float: right;
  font-size: 18px;
`;

interface DataProps {
  left: string;
  right: string;
}

const Data = ({ left, right }: DataProps) => {
  return (
    <div className="clearfix">
      <Left>{left}:</Left>
      <Right>{right}</Right>
      <br />
    </div>
  );
};

export default Data;
