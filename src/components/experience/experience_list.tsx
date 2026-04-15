/**
 * Career data — single source of truth.
 * Edit the items below to update the experience timeline.
 */

export interface ExperienceHighlight {
  text: string;
  /** Optional metric chip rendered next to the highlight, e.g. "10×" */
  metric?: string;
}

export interface ExperienceItem {
  /** Display period, e.g. "2022 — Present" */
  period: string;
  /** Role title */
  role: string;
  /** Company / organisation */
  company: string;
  /** Optional company URL */
  companyUrl?: string;
  /** Short summary paragraph */
  summary: string;
  /** Bulleted highlights */
  highlights?: ExperienceHighlight[];
  /** Stack chips */
  stack?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: "2022 — Present",
    role: "Senior Software Engineer, Backend",
    company: "LINE MAN Wongnai",
    companyUrl: "https://lmwn.com",
    summary:
      "Building the backend powering LINE MAN's food delivery platform — pricing, ordering, and the systems millions of orders run through every day. Promoted to Senior in 2022.",
    highlights: [
      {
        text: "Introduced a dedicated Price Engine to LINE MAN services with the team, replacing scattered pricing logic with a single source of truth.",
      },
      {
        text: "Delivered the คนละครึ่ง (Half-Half) government co-payment integration on the user side of the LINE MAN app.",
      },
      {
        text: "Led an order-creation latency effort, bringing p99 from >5s down to <500ms on one of the platform's hottest paths.",
        metric: "10×",
      },
    ],
    stack: ["Go", "MongoDB", "Kafka", "RabbitMQ", "Redis", "gRPC"],
  },
  {
    period: "2019 — 2022",
    role: "Software Engineer, Backend",
    company: "Wongnai Media",
    summary:
      "Joined Wongnai full-time out of my internship on the Growth squad. Stayed on through the LINE MAN Wongnai merger and moved to the food delivery org.",
    stack: [
      "Java",
      "Spring",
      "Python",
      "TypeScript",
      "gRPC",
      "GraphQL",
      "MySQL",
    ],
  },
];

export const earlierInternships = [
  {
    year: "2019",
    role: "Backend Intern, Growth squad",
    company: "Wongnai Media",
    stack: "Java · Spring · gRPC · GraphQL",
  },
  {
    year: "2019",
    role: "Deep Learning Research Intern",
    company: "Offenburg University, Germany",
    stack: "Python · TensorFlow · Keras · Django",
  },
  {
    year: "2018",
    role: "Full-stack Intern",
    company: "Glazziq",
    stack: "Ruby on Rails · React · PostgreSQL",
  },
];
