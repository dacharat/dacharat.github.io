import React from "react";
import Card from "../card";
// import FontAwesome from "react-fontawesome";
import GithubButton from "./github-button";

const Body = data => {
  return (
    <div className="pl-2">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.describe}</p>
      <GithubButton url={data.url} />
    </div>
  );
};

const ProjectCard = ({ data }) => {
  return <Card head={data.name} component={Body(data)} />;
};

export default ProjectCard;
