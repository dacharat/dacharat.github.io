import React from "react";
import styled from "styled-components";

const Box = styled.div.attrs({ className: "p-3 m-2" })`
  box-shadow: -1px -1px 10px 2px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const Img = styled.img`
  width: 90px;
`;

const SkillCard = ({ head, body }) => {
  return (
    <Box>
      <h4 className="pt-2 pl-3">{head}</h4>
      <hr />
      <div className='row text-center'>
        {body.map((item, i) => (
          <div className='col s4 m2' key={i}>
            <Img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default SkillCard;
