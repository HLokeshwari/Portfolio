
import { Mail, Linkedin, Phone, Github } from "lucide-react";

const contactLinks = [
  {
    icon: Phone,
    url: "tel:+917416859518",
    label: "Call",
  },
  {
    icon: Mail,
    url: "mailto:2200030474cseh@gmail.com",
    label: "Email",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/lokeshwari-hukumathirao",
    label: "LinkedIn",
  },
  {
    icon: Github,
    url: "https://github.com/",
    label: "GitHub", // Replace with actual URL if available
  }
];

const Header = () => (
  <header className="sticky top-0 left-0 z-40 bg-white/70 backdrop-blur-lg border-b border-gray-100 shadow-[0_2px_12px_-2px_rgba(139,92,246,0.07)]">
    <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-4">
      <div className="flex items-center gap-3">
        <img
          src="/lovable-uploads/36065e0e-6296-4d90-8fbc-53c6568e51a5.png"
          alt="Lokeshwari Hukumathirao"
          className="w-14 h-14 object-cover rounded-full border-4 border-accent shadow-card bg-accent/5"
        />
        <span className="text-2xl md:text-3xl font-bold text-dark">Lokeshwari Hukumathirao</span>
      </div>
      <nav className="flex items-center gap-4">
        {contactLinks.map(({ icon: Icon, url, label }) => (
          <a
            href={url}
            aria-label={label}
            key={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:scale-110 transition-transform p-2 rounded-full hover:bg-accent/10"
          >
            <Icon size={22} />
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
