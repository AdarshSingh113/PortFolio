import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Associate Software Engineer",
    location: "ElectrifAi ,Noida ",
    description:
      "In my role as a React Native Developer, I focused on key aspects of app development. I specialized in robust authentication flows using Firebase and React Native, ensuring secure user interactions. Additionally, I designed features like real-time chat interfaces and maintenance scheduling systems. I successfully integrated Firebase Cloud Messaging for push notifications and introduced captivating animations using the React Reanimated library. Contributing to system robustness, I implemented the App Center SDK for crash analytics. Proficient in Redux Toolkit and Redux Persist, I streamlined global state management and API calls. In the backend, I designed scalable RESTful APIs and leveraged RabbitMQ for efficient camera metadata processing, emphasizing optimal system performance.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2022 - Nov 2023",
  },
  {
    title: "Software Trainee",
    location: "Axtria, Noida",
    description:
      "Worked on frontend development for a SaaS solution tailored to pharmaceutical companies. I built the frontend architecture and designed an intuitive administration portal, streamlining data management for IT managers. Using React.js and Redux, I improved performance and user experience. Collaborating closely with the ETL team, I ensured smooth data flow. I handled various Frontend tasks, including UI design and integration. Working with backend developers and UI/UX designers, I ensured seamless integration and met project goals efficiently. This experience deepened my Frontend development skills and passion for user-centric design.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Dec 2022",
  },
  {
    title: "Teaching Assistant",
    location: "Coding Ninjas, Remote",
    description:
      "Helped students with DSA doubts which helped me with DSA in deeper level",
    icon: React.createElement(FaReact),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
