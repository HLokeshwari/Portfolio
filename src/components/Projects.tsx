
import Section from "./Section";
import { Code, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Stock Portfolio Management System",
    year: "2025",
    stack: ["SpringBoot", "JSP", "MySQL"],
    desc: "Enabled real-time stock tracking for 100+ users, reducing manual effort by 40%.",
    link: "#"
  },
  {
    title: "Corporate Grievance Management System",
    year: "2024",
    stack: ["Java", "JSF", "MySQL"],
    desc: "Automated grievance tracking for 500+ employees with interactive data visualization.",
    link: "#"
  },
  {
    title: "Online Art Gallery",
    year: "2024",
    stack: ["Spring Boot", "JSP", "Docker"],
    desc: "Optimized database queries, improving page load speed and performance.",
    link: "#"
  },
  {
    title: "Air Canvas using OpenCV",
    year: "2024",
    stack: ["Python", "OpenCV"],
    desc: "Designed an AI-powered gesture-based drawing tool with 90% accuracy.",
    link: "#"
  },
  {
    title: "Student Course Management System",
    year: "2024",
    stack: ["MERN Stack"],
    desc: "Implemented role-based authentication, increasing course enrollment by 65%.",
    link: "#"
  },
  {
    title: "Astrology Prediction Portal",
    year: "2023",
    stack: ["Django", "ML", "PostgreSQL"],
    desc: "Developed AI-driven astrology predictions with 85% accuracy.",
    link: "#"
  },
];

const Projects = () => (
  <Section title="Projects">
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((proj) => (
        <div
          key={proj.title}
          className="bg-white rounded-xl shadow-card border-l-4 border-accent p-5 flex flex-col gap-1 hover:scale-[1.02] hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-2 mb-2">
            <Code className="text-accent" size={22} />
            <span className="font-semibold text-lg">{proj.title}</span>
            <span className="ml-auto text-xs bg-accent/10 text-accent px-2 py-0.5 rounded">{proj.year}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {proj.stack.map((tech) => (
              <span key={tech} className="text-xs font-semibold bg-accent/10 text-accent px-2 py-0.5 rounded">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-700 text-sm mb-2">{proj.desc}</p>
          <div>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent font-medium gap-1 underline underline-offset-4"
            >
              Explore
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Projects;
