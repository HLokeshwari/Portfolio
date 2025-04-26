
import { ArrowRight } from "lucide-react";
import Section from "./Section";

const profiles = [
  {
    name: "LeetCode",
    url: "#",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    name: "HackerRank",
    url: "#",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "CodeChef",
    url: "#",
    color: "bg-teal-100 text-teal-700",
  },
];

const CodingProfiles = () => (
  <Section title="Coding Profiles">
    <div className="flex gap-3 flex-wrap">
      {profiles.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm shadow-sm border border-gray-200 transition hover:scale-105 hover:shadow-md ${p.color}`}
        >
          {p.name}
          <ArrowRight className="w-4 h-4" />
        </a>
      ))}
    </div>
  </Section>
);

export default CodingProfiles;
