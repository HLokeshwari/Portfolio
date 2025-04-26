
import Section from "./Section";
import { Briefcase, ArrowRight } from "lucide-react";

// Experience timeline data
const expData = [
  {
    role: "Software Development Intern",
    org: "SmartInternz, India",
    duration: "Jan 2024 - Mar 2024",
    bullets: [
      "Developed and deployed 5+ Salesforce CRM applications, improving operational efficiency by 20%.",
      "Processed 10,000+ records, enhancing data accuracy by 30%.",
      "Integrated APIs for cloud-based solutions, reducing response times.",
    ],
    cert: "https://smartinternz.com/certificate-url" // Placeholder
  },
  {
    role: "Android Developer Intern",
    org: "AICTC-EDUSKILLS, India",
    duration: "May 2024 - Jun 2024",
    bullets: [
      "Designed and developed an Android app with Firebase, reducing data sync latency by 30%.",
      "Integrated ML features, boosting user engagement by 25%.",
      "Optimized UI/UX and backend services for seamless functionality.",
    ],
    cert: "https://eduskillsfoundation.org/certificate-url" // Placeholder
  }
];

const Experience = () => (
  <Section title="Experience">
    <ol className="border-l-2 border-accent/50 pl-4">
      {expData.map((exp) => (
        <li key={exp.role} className="mb-8 relative">
          <span className="absolute -left-4 top-2 bg-accent w-4 h-4 rounded-full shadow-card border-4 border-white"></span>
          <div className="bg-white shadow-card rounded-xl p-5">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2">
                <Briefcase className="text-accent" size={20} />
                <span className="font-semibold text-lg">{exp.role}</span>
                <span className="mx-1 text-sm text-gray-500">at</span>
                <span className="font-medium text-dark/90">{exp.org}</span>
              </div>
              <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded">{exp.duration}</span>
            </div>
            <ul className="list-disc ml-7 mb-2 text-sm text-gray-700">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <a
              href={exp.cert}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent underline underline-offset-4 hover:text-accent/80 text-sm font-medium"
            >
              View Certificate
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
