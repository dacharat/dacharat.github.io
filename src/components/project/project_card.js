import React from "react";
import Card from "../card";
import GithubButton from "./github-button";
import PropTypes from "prop-types";

const Body = ({ data }) => {
  return (
    <div className="pl-2">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.describe}</p>
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
