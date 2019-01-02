import React from "react";
import Card from "../card";
import styled from "styled-components";
import Lazyload from 'react-lazyload'

const Img = styled.img`
  width: 70%;
`;

const Body = (image, describe) => {
  return (
    <div className="row">
      <div className="col m4 text-center">
      <Lazyload once offset={80} >
        <Img src={image} alt="No image" />
      </Lazyload>
      </div>
      <div className="col m8">
        {describe.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ data }) => {
  return <Card head={data.name} component={Body(data.image, data.describe)} />;
};

export default ExperienceCard;
