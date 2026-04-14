import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

const Content = styled.div.attrs({
  className: "text-center container",
})`
  margin-top: 15px;
  font-size: 30px;
`;

interface SegmentProps {
  icon: IconType;
  name: string;
  component: React.ReactNode;
}

const Segment = ({ icon: Icon, name, component }: SegmentProps) => {
  return (
    <div className="mt-3">
      <Content>
        <p>
          <Icon size={30} /> {name}
        </p>
      </Content>
      <hr />
      {component}
      <hr />
    </div>
  );
};

export default Segment;
