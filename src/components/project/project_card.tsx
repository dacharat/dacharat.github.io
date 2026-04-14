import React from "react";
import Image from "next/image";
import Card from "../card";
import GithubButton from "./github-button";
import styled from "styled-components";

interface ProjectData {
  name: string;
  describe: string;
  url: string;
  images: string[];
  technology: string[];
}

interface ProjectCardProps {
  data: ProjectData;
}

const Description = styled.p`
  text-indent: 7%;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Body = ({ data }: { data: ProjectData }) => {
  return (
    <div className="ps-2">
      <Description>{data.describe}</Description>
      <Flex>
        <GithubButton url={data.url} />
        <div className="mt-3">
          {data.technology.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="technology"
              width={30}
              height={30}
              style={{ marginLeft: "5px", marginRight: "5px", objectFit: "contain" }}
            />
          ))}
        </div>
      </Flex>
    </div>
  );
};

const ProjectCard = ({ data }: ProjectCardProps) => {
  return <Card head={data.name} component={<Body data={data} />} />;
};

export default ProjectCard;
