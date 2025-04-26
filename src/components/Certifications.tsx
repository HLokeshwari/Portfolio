
import Section from "./Section";
import { Award, Check } from "lucide-react";

const certs = [
  { title: "AWS Cloud Practitioner", label: "Certification" },
  { title: "Azure Fundamentals (AZ-900)", label: "Credential" },
  { title: "RedHat Certified Developer", label: "Certificate" },
  { title: "Salesforce AI Associate", label: "Achievement" },
  { title: "Automation Anywhere RPA", label: "Certificate" },
];

const badgeColor = {
  Certification: "bg-accent/10 text-accent",
  Credential: "bg-blue-100 text-blue-700",
  Certificate: "bg-green-100 text-green-700",
  Achievement: "bg-yellow-100 text-yellow-800",
};

const Certifications = () => (
  <Section title="Certifications">
    <div className="flex flex-wrap gap-4">
      {certs.map((c) => (
        <span
          key={c.title}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-semibold shadow-sm text-sm border ${badgeColor[c.label]} border-accent/15`}
        >
          <Award className="w-4 h-4" />
          {c.title}
          <span className="text-xs ml-2 px-2 py-0.5 rounded-lg font-semibold bg-white/50 border">{c.label}</span>
        </span>
      ))}
    </div>
  </Section>
);

export default Certifications;
