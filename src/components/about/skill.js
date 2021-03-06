import React from "react";
import Segment from "../segment";
import SkillCard from "./skill_card";
import { Zoom } from "react-reveal";

//language
import c_pro from "../../assets/skills/language/c.png";
import java from "../../assets/skills/language/java.png";
import javascript from "../../assets/skills/language/javascript.png";
import python from "../../assets/skills/language/python.png";
import ruby from "../../assets/skills/language/ruby.png";

//front-end
import pug from "../../assets/skills/front-end/pug.png";
import react from "../../assets/skills/front-end/react.png";

//back-end
import node from "../../assets/skills/back-end/node.png";
import rails from "../../assets/skills/back-end/rails.png";
import django from "../../assets/skills/back-end/django.png";

//database
import firebase from "../../assets/skills/database/firebase.png";
import mongodb from "../../assets/skills/database/mongodb.png";
import postgreSQL from "../../assets/skills/database/postgreSQL.png";

//mobile
import android from "../../assets/skills/mobile/android.png";
import xcode from "../../assets/skills/mobile/xcode.jpg";
import reactnative from "../../assets/skills/mobile/react-native.png";

//tools
import github from "../../assets/skills/tools/github.png";
import gitlab from "../../assets/skills/tools/gitlab.png";
import asana from "../../assets/skills/tools/asana.png";
import slack from "../../assets/skills/tools/slack.png";

const language = [
  { name: "C", image: c_pro },
  { name: "Java", image: java },
  { name: "Javascript", image: javascript },
  { name: "Python", image: python },
  { name: "Ruby", image: ruby }
];

const front_end = [
  { name: "ReactJS", image: react },
  { name: "Pug", image: pug }
];

const back_end = [
  { name: "NodeJS & Express", image: node },
  { name: "Ruby on Rails", image: rails },
  { name: "Django", image: django }
];

const mobile = [
  { name: "Android Studio", image: android },
  { name: "Xcode", image: xcode },
  { name: "React Native", image: reactnative }
];

const database = [
  { name: "Firebase", image: firebase },
  { name: "MongoDB", image: mongodb },
  { name: "PostgreSQL", image: postgreSQL }
];

const tools = [
  { name: "Github", image: github },
  { name: "Gitlab", image: gitlab },
  { name: "Slack", image: slack },
  { name: "Asana", image: asana }
];

const skills = [
  { head: "Language", data: language },
  { head: "Front-end", data: front_end },
  { head: "Back-end", data: back_end },
  { head: "Mobile", data: mobile },
  { head: "Database", data: database },
  { head: "Tools", data: tools }
];

const Body = () => {
  return skills.map((skill, i) => (
    <Zoom key={i}>
      <SkillCard head={skill.head} body={skill.data} />
    </Zoom>
  ));
};

const Skill = () => {
  return <Segment icon="align-left" name="Skill" component={<Body />} />;
};

export default Skill;
