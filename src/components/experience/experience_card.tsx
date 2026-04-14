import React from "react";
import Image from "next/image";
import Card from "../card";

interface ExperienceData {
  name: string;
  image: string;
  describe: string[];
}

interface ExperienceCardProps {
  data: ExperienceData;
}

const Body = ({ image, describe }: { image: string; describe: string[] }) => {
  return (
    <div className="row">
      <div className="col m4 text-center">
        <Image
          src={image}
          alt="Experience"
          width={400}
          height={250}
          style={{ width: "70%", height: "auto" }}
          loading="lazy"
        />
      </div>
      <div className="col m8">
        {describe.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ data }: ExperienceCardProps) => {
  return (
    <Card
      head={data.name}
      component={<Body image={data.image} describe={data.describe} />}
    />
  );
};

export default ExperienceCard;
