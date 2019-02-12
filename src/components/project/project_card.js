import React from "react";
import Card from "../card";
import GithubButton from "./github-button";
import PropTypes from "prop-types";
import styled from "styled-components";

const Description = styled.p`
  text-indent: 7%;
`;
const Img = styled.img`
  width: 30px;
  margin-left: 5px;
  margin-right: 5px;
`;
const Col = styled.div.attrs(props => ({
  className: "col-md-" + props.num
}))`
  margin-top: 20px;
`;

const Body = ({ data }) => {
  return (
    <div className="pl-2">
      <Description>{data.describe}</Description>
      <div className="row">
        <Col num="9">
          {data.technology.map((img, i) => (
            <Img key={i} src={img} />
          ))}
        </Col>
        <Col num="3">
          <GithubButton url={data.url} />
        </Col>
      </div>
    </div>
  );
};

const ProjectCard = ({ data }) => {
  return <Card head={data.name} component={<Body data={data} />} />;
};

ProjectCard.propTypes = {
  right: PropTypes.object
};
ProjectCard.defaultProps = {
  right: {
    name: "nothing",
    describe: "nothing",
    url: "https://dacharat.github.io",
    images: ["nothing"]
  }
};

export default ProjectCard;
