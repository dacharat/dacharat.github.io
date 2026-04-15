/**
 * Project data — single source of truth.
 * The first project is rendered as the "featured" card,
 * the rest fall into the grid below.
 */

export interface ProjectItem {
  name: string;
  tagline: string;
  description: string;
  url: string;
  /** Cover image path (optional — falls back to gradient placeholder) */
  cover?: string;
  /** Primary stack chips */
  stack: string[];
  /** When this project was built */
  year: string;
  /** Role / context, e.g. "Internship" or "Side project" */
  context?: string;
}

export const projects: ProjectItem[] = [
  {
    name: "Otopaholic",
    tagline: "Full-stack e-commerce for Thailand's local OTOP goods.",
    description:
      "A full-stack e-commerce platform for Thailand's OTOP (One Tambon One Product) program. I worked across the stack — React on the front, Node/Express and MongoDB on the back — and learned more about making real product decisions than I did about code.",
    url: "https://github.com/InsanelyGood/InsanelyGood-OTOP",
    cover: "/assets/projects/otopaholic/first.png",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    year: "2019",
    context: "University · Group project",
  },
  {
    name: "Face Emotion Result",
    tagline: "Real-time face emotion recognition with a Postgres dashboard.",
    description:
      "A computer vision pipeline that detects faces in real time, classifies emotional state, and streams results to a Postgres-backed dashboard. Built on top of an existing university research project — I extended the model serving layer and wrote the web app that visualises aggregate emotion data as time-series graphs.",
    url: "https://github.com/dacharat/face_emotion_result",
    stack: ["Python", "Django", "TensorFlow", "Keras", "OpenCV", "PostgreSQL"],
    year: "2019",
    context: "Internship · Offenburg University",
  },
  {
    name: "IP Subnet Calculator",
    tagline: "A web tool for calculating subnets, masks, and host ranges.",
    description:
      "A web tool for calculating IP subnets, network masks, and host ranges. Small in scope, but the first time I felt the satisfaction of shipping something other people actually used.",
    url: "https://github.com/dacharat/IP-subnet-calculator",
    stack: ["React", "Firebase"],
    year: "2018",
    context: "University · Group project",
  },
  {
    name: "Math Master Game",
    tagline: "A desktop math game built in Java + JavaFX.",
    description:
      "A desktop math game built in Java + JavaFX with MySQL for score tracking. My first real encounter with OOP beyond classroom exercises — inheritance, polymorphism, and a lot of refactoring.",
    url: "https://github.com/dacharat/Math-Master-Game",
    stack: ["Java", "JavaFX", "MySQL"],
    year: "2018",
    context: "University · OOP final project",
  },
  {
    name: "Took-took 4.0",
    tagline: "An IoT application for Bangkok's iconic tuk-tuks.",
    description:
      "A group project that pushed me to work with hardware sensors and real-time data for the first time.",
    url: "https://github.com/took-took-4/took-took4",
    stack: ["JavaScript", "HTML", "CSS", "IoT"],
    year: "2018",
    context: "University · Group project",
  },
];
