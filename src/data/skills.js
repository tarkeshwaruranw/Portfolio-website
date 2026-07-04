import { FaReact, FaHtml5, FaCss3, FaGit } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { FaCode } from "react-icons/fa";
// import {BsDevices} from "react-icons/bs"
const skills = [
  {
    id: 1,
    title: "React",
    icon: FaReact,
    proficiency: 70,
    colorKey: "text-cyan-400",
    description:
      "Building reusable, state-driven, component-based user interfaces.",
  },
  {
    id: 2,
    title: "Javascript",
    icon: SiJavascript,
    proficiency: 75,
    colorKey: "text-yellow-400",
    description:
      "Implementing dynamic functionality, logic, and asynchronous data fetching.",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    proficiency: 85,
    colorKey: "text-sky-400",
    description:
      "Creating rapid, highly customizable designs using utility-first styling.",
  },
  {
    id: 4,
    title: "Git",
    icon: FaGit,
    proficiency: 65,
    colorKey: "text-orange-600",
    description:
      "Managing version control, team collaboration, and seamless code deployment.",
  },
  {
    id: 5,
    title: "Responsive Design",
    icon: DiResponsive,
    proficiency: 85,
    colorKey: "text-green-400",
    description:
      "Ensuring flawless user experiences across all screen sizes and mobile devices.",
  },
  {
    id: 6,
    title: "HTML & CSS",
    icon: FaCode,
    proficiency: 85,
    colorKey: "text-orange-500",
    description:
      "Structuring semantic web content with clean, modern layouts.",
  },
];

export default skills;
