import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";



const techStack = [
  {
    id: 1,
    name: "React",
    icon: FaReact,
    colorKey: "react",
  },
  {
    id: 2,
    name: "JavaScript",
    icon: SiJavascript,
    colorKey: "javascript",
  },
  {
    id: 3,
    name: "HTML",
    icon: FaHtml5,
    colorKey: "html",
  },
  {
    id: 4,
    name: "CSS",
    icon: FaCss3Alt,
    colorKey: "css",
  },
  {
    id: 5,
    name: "Tailwind",
    icon: SiTailwindcss,
    colorKey: "tailwind",
  },
  {
    id: 6,
    name: "Git",
    icon: FaGitAlt,
    colorKey: "git",
  },
];


export const techColors = {
  react: "text-cyan-400",
  javascript: "text-yellow-400",
  html: "text-orange-500",
  css: "text-blue-500",
  tailwind: "text-sky-400",
  git: "text-orange-600",
};


export default techStack;
