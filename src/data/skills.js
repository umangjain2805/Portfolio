import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiJsonwebtokens } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: FaJs, description: "Advanced scripting and logic for dynamic web apps." },
      { name: "C/C++", icon: TbBrandCpp, description: "Strong foundation in data structures and algorithms." },
      { name: "Java", icon: FaJava, description: "Object-oriented programming and backend development." },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, description: "Declarative and efficient UI development with Vite." },
      { name: "Tailwind CSS", icon: SiTailwindcss, description: "Modern styling for responsive and sleek designs." },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, description: "Scalable server-side development with JavaScript." },
      { name: "Express.js", icon: SiExpress, description: "Fast and minimalist web framework for Node.js." },
      { name: "JWT", icon: SiJsonwebtokens, description: "Secure authentication and authorization logic." },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, description: "NoSQL database for flexible data management." },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, description: "Version control for tracking changes in code." },
      { name: "GitHub", icon: FaGithub, description: "Platform for code hosting and collaboration." },
      { name: "Postman", icon: SiPostman, description: "API development and testing powerhouse." },
    ]
  }
];