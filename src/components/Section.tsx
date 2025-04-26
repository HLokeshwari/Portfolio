
import { ReactNode } from "react";

const Section = ({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) => (
  <section className={`my-7 md:my-12 w-full ${className}`}>
    {title && (
      <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-accent animate-fade-in">{title}</h2>
    )}
    <div className="animate-fade-in">{children}</div>
  </section>
);

export default Section;
