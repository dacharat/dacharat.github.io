import React from "react";
import Segment from "../segment";
import SkillCard from "./skill_card";
import ScrollAnimate from "../ScrollAnimate";
import { FaAlignLeft } from "react-icons/fa";

const language = [
  { name: "C", image: "/assets/skills/language/c.png" },
  { name: "Java", image: "/assets/skills/language/java.png" },
  { name: "Javascript", image: "/assets/skills/language/javascript.png" },
  { name: "Python", image: "/assets/skills/language/python.png" },
  { name: "Ruby", image: "/assets/skills/language/ruby.png" },
];

const front_end = [
  { name: "ReactJS", image: "/assets/skills/front-end/react.png" },
  { name: "Pug", image: "/assets/skills/front-end/pug.png" },
];

const back_end = [
  { name: "NodeJS & Express", image: "/assets/skills/back-end/node.png" },
  { name: "Ruby on Rails", image: "/assets/skills/back-end/rails.png" },
  { name: "Django", image: "/assets/skills/back-end/django.png" },
];

const mobile = [
  { name: "Android Studio", image: "/assets/skills/mobile/android.png" },
  { name: "Xcode", image: "/assets/skills/mobile/xcode.jpg" },
  { name: "React Native", image: "/assets/skills/mobile/react-native.png" },
];

const database = [
  { name: "Firebase", image: "/assets/skills/database/firebase.png" },
  { name: "MongoDB", image: "/assets/skills/database/mongodb.png" },
  { name: "PostgreSQL", image: "/assets/skills/database/postgreSQL.png" },
];

const tools = [
  { name: "Github", image: "/assets/skills/tools/github.png" },
  { name: "Gitlab", image: "/assets/skills/tools/gitlab.png" },
  { name: "Slack", image: "/assets/skills/tools/slack.png" },
  { name: "Asana", image: "/assets/skills/tools/asana.png" },
];

const skills = [
  { head: "Language", data: language },
  { head: "Front-end", data: front_end },
  { head: "Back-end", data: back_end },
  { head: "Mobile", data: mobile },
  { head: "Database", data: database },
  { head: "Tools", data: tools },
];

const Body = () => {
  return (
    <>
      {skills.map((skill, i) => (
        <ScrollAnimate key={i} variant="zoom">
          <SkillCard head={skill.head} body={skill.data} />
        </ScrollAnimate>
      ))}
    </>
  );
};

const Skill = () => {
  return <Segment icon={FaAlignLeft} name="Skill" component={<Body />} />;
};

export default Skill;
