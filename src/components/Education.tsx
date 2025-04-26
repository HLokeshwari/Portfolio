
import Section from "./Section";
import { BookOpen } from "lucide-react";

const educationDetails = [
  {
    level: "B.Tech in Computer Science and Engineering",
    place: "Koneru Lakshmaiah University",
    detail: "CGPA: 9.91/10",
    date: "Expected 2026",
  },
  {
    level: "Class 12 (Intermediate)",
    place: "Sri Chaitanya Junior College",
    detail: "Percentage: 96%",
    date: "2020 - 2022",
  },
  {
    level: "Class 10 (High School)",
    place: "ST. ANN’S School",
    detail: "Percentage: 95%",
    date: "2020",
  }
];

const Education = () => (
  <Section title="Education">
    <ul className="max-w-xl mx-auto flex flex-col gap-5">
      {educationDetails.map((edu) => (
        <li
          key={edu.level}
          className="bg-white shadow-card rounded-xl border-l-4 border-accent p-4 flex items-start gap-4"
        >
          <BookOpen className="text-accent min-w-[28px] mt-2" size={28} />
          <div>
            <div className="font-semibold text-lg">{edu.level}</div>
            <div className="text-dark/80">{edu.place}</div>
            <div className="text-sm text-gray-500">{edu.detail}</div>
            <div className="text-xs text-accent/90 font-semibold">{edu.date}</div>
          </div>
        </li>
      ))}
    </ul>
  </Section>
);

export default Education;
