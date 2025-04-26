
import Section from "./Section";
import { Star } from "lucide-react";

const achievements = [
  "Won 2nd place in a university hackathon (50+ teams) with an NLP chatbot.",
  "Represented university in 5+ Tennis and Throwball tournaments.",
  "Engineered a predictive stock trend model, increasing accuracy by 15%."
];

const Achievements = () => (
  <Section title="Achievements">
    <ul className="flex flex-col gap-2 max-w-2xl mx-auto">
      {achievements.map((ach, i) => (
        <li key={i} className="flex items-start gap-2 bg-accent/10 rounded-lg px-3 py-2 shadow-sm">
          <Star className="text-accent min-w-[20px]" size={20} />
          <span className="text-gray-800">{ach}</span>
        </li>
      ))}
    </ul>
  </Section>
);

export default Achievements;
