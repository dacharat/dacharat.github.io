import React from "react";
import Card from "../card";
import GithubButton from "./github-button";
import PropTypes from "prop-types";
import styled from "styled-components";

const Description = styled.p`
  text-indent: 7%;
`;

const Body = ({ data }) => {
  return (
    <div className="pl-2">
      <Description>
        {data.describe}
      </Description>
      <GithubButton url={data.url} />
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
