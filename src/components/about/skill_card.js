import React from "react";
import styled from "styled-components";
import Card from "../card";
import Lazyload from "react-lazyload";
import PropTypes from "prop-types";

const Img = styled.img`
  width: 90px;
`;

const Body = ({ body }) => {
  return (
    <div className="row text-center">
      {body.map((item, i) => (
        <div className="col s4 m2" key={i}>
          <Lazyload height="90px" once offset={80}>
            <Img src={item.image} alt={item.name} />
          </Lazyload>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

const SkillCard = ({ head, body }) => {
  return <Card head={head} component={<Body body={body} />} />;
};

SkillCard.propTypes = {
  head: PropTypes.string,
  right: PropTypes.object
};
SkillCard.defaultProps = {
  head: "nothing",
  right: { image: "", name: "nothing" }
};

export default SkillCard;
