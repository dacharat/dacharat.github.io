import React from "react";
import Image from "next/image";
import Card from "../card";

interface SkillItem {
  name: string;
  image: string;
}

interface SkillCardProps {
  head: string;
  body: SkillItem[];
}

const Body = ({ body }: { body: SkillItem[] }) => {
  return (
    <div className="row text-center">
      {body.map((item, i) => (
        <div className="col s4 m2" key={i}>
          <Image
            src={item.image}
            alt={item.name}
            width={90}
            height={90}
            style={{ objectFit: "contain" }}
            loading="lazy"
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

const SkillCard = ({ head, body }: SkillCardProps) => {
  return <Card head={head} component={<Body body={body} />} />;
};

export default SkillCard;
