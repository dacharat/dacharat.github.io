import React from "react";
import styled from "styled-components";
import Card from '../card'

const Img = styled.img`
  width: 90px;
`;

const Body = body => {
  return <div className='row text-center'>
    {body.map((item, i) => (
      <div className='col s4 m2' key={i}>
        <Img src={item.image} alt={item.name} />
        <p>{item.name}</p>
      </div>
    ))}
  </div>
}

const SkillCard = ({ head, body }) => {
  return (
    <Card head={head} component={Body(body)} />
  );
};

export default SkillCard;
