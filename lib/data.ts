import pdfChatImage from "@/public/pdf-chat.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  {
    title: "Associate Professional Software Engineer",
    location: "Remote",
    description:
      "I am working as a Software Engineer in DXC Technology on Mainframe systems.",
    icon: React.createElement(CgWorkAlt),
    date: "April, 2023 - Present",
  },
  {
    title: "Graduated",
    location: "",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "August 2022",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "PDFChat",
    description:
      "AI based web app where you can upload any PDF and ask questions about it.",
    tags: ["Next.js", "OpenAI", "Langchain", "Prisma ORM", "Tailwind CSS"],
    imageUrl: pdfChatImage,
    liveLink: "https://pdf-chat-aditya.vercel.app/",
    githubLink: "https://github.com/aditya-2010/pdf-chat",
  },
] as const;

export const skillsData = [
  "Next.js",
  "React",
  "Python",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Node.js",
  "Git",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
