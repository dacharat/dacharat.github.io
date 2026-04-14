import React from "react";
import styled from "styled-components";
const Box = styled.div.attrs({ className: "p-3 m-2" })`
  box-shadow: -1px -1px 10px 2px ${({ theme }) => theme.cardShadow};
  text-align: left;
`;

interface CardProps {
  head: string;
  component: React.ReactNode;
}

const Card = ({ head, component }: CardProps) => {
  return (
    <Box>
      <h4 className="pt-2 ps-3">{head}</h4>
      <hr />
      {component}
    </Box>
  );
};

export default Card;
