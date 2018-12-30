import React from "react";
import Card from "../card";

const Body = () => {
  return (<p>test</p>)
}

const ProjectCard = ({data}) => {
  return <Card head={data.name} component={Body()} />;
};

export default ProjectCard;
