
import Section from "./Section";
import { Code } from "lucide-react";

// Skill chips
const skills = [
  {
    name: "Python", cat: "Programming"
  },
  {
    name: "Java", cat: "Programming"
  },
  {
    name: "JavaScript", cat: "Programming"
  },
  {
    name: "Go", cat: "Programming"
  },
  {
    name: "C", cat: "Programming"
  },
  {
    name: "React.js", cat: "Web Dev"
  },
  {
    name: "Node.js", cat: "Web Dev"
  },
  {
    name: "Spring Boot", cat: "Web Dev"
  },
  {
    name: "Django", cat: "Web Dev"
  },
  {
    name: "Hibernate", cat: "Web Dev"
  },
  {
    name: "AWS", cat: "Cloud / DevOps"
  },
  {
    name: "Azure", cat: "Cloud / DevOps"
  },
  {
    name: "Kubernetes", cat: "Cloud / DevOps"
  },
  {
    name: "Docker", cat: "Cloud / DevOps"
  },
  {
    name: "CI/CD", cat: "Cloud / DevOps"
  },
  {
    name: "Jenkins", cat: "Cloud / DevOps"
  },
  {
    name: "Terraform", cat: "Cloud / DevOps"
  },
  {
    name: "TensorFlow", cat: "AI / Data"
  },
  {
    name: "OpenCV", cat: "AI / Data"
  },
  {
    name: "NLP", cat: "AI / Data"
  },
  {
    name: "Pandas", cat: "AI / Data"
  },
  {
    name: "Scikit-Learn", cat: "AI / Data"
  },
  {
    name: "Tableau", cat: "AI / Data"
  },
  {
    name: "MySQL", cat: "Database"
  },
  {
    name: "PostgreSQL", cat: "Database"
  },
  {
    name: "MongoDB", cat: "Database"
  },
  {
    name: "Firebase", cat: "Database"
  },
  {
    name: "Git", cat: "Tools"
  },
  {
    name: "GitHub", cat: "Tools"
  },
  {
    name: "REST APIs", cat: "Tools"
  },
  {
    name: "Postman", cat: "Tools"
  },
  {
    name: "Linux", cat: "OS"
  },
  {
    name: "Windows", cat: "OS"
  },
  {
    name: "Microservices", cat: "Other"
  },
  {
    name: "GraphQL", cat: "Other"
  },
  {
    name: "Redis", cat: "Other"
  },
];

const categories = [
  "Programming", "Web Dev", "Cloud / DevOps", "AI / Data", "Database", "Tools", "OS", "Other"
];

const colorForCat: { [k: string]: string } = {
  "Programming": "bg-accent/10 text-accent",
  "Web Dev": "bg-blue-100 text-blue-700",
  "Cloud / DevOps": "bg-emerald-100 text-emerald-700",
  "AI / Data": "bg-orange-100 text-orange-700",
  "Database": "bg-pink-100 text-pink-700",
  "Tools": "bg-sky-100 text-sky-700",
  "OS": "bg-gray-200 text-gray-800",
  "Other": "bg-violet-100 text-violet-700"
};

const Skills = () => (
  <Section title="Technical Skills">
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className={`px-3 py-1 rounded-lg font-medium text-sm shadow-sm border ${colorForCat[skill.cat]} border-accent/10`}
        >
          {skill.name}
        </span>
      ))}
    </div>
  </Section>
);

export default Skills;
