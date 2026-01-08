import { ExternalLink, GraduationCap, Briefcase, Heart } from "lucide-react";

interface ExperienceItem {
  icon: React.ReactNode;
  title: string;
  company?: string;
  companyUrl?: string;
  date: string;
  description: string;
  tag?: string;
}

const experiences: ExperienceItem[] = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "B.Tech in Computer Science",
    company: "University",
    date: "2021 - Present",
    description: "Focusing on AI/ML, Deep Learning, and Computer Vision research.",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "AI Research Intern",
    company: "Tech Lab",
    companyUrl: "#",
    date: "Jun 2024 - Present",
    description: "Working on LLM optimization and fine-tuning for domain-specific applications.",
    tag: "Current",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Open Source Contributor",
    company: "Various Projects",
    date: "2023 - Present",
    description: "Contributing to ML frameworks and tools, helping build the AI community.",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="container-narrow py-12">
      <h2 className="section-heading">what i do</h2>
      
      <p className="text-foreground/70 mb-8">
        Exploring the intersection of AI research and practical applications. Building tools that make ML more accessible.
      </p>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 group">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {exp.icon}
              </div>
              {index < experiences.length - 1 && (
                <div className="w-px h-full bg-border mt-2" />
              )}
            </div>
            
            <div className="flex-1 pb-6">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-sans font-semibold text-foreground">
                    {exp.title}
                    {exp.company && (
                      <>
                        {" • "}
                        {exp.companyUrl ? (
                          <a href={exp.companyUrl} className="link-accent" target="_blank" rel="noopener noreferrer">
                            {exp.company} <ExternalLink className="w-3 h-3 inline" />
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{exp.company}</span>
                        )}
                      </>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground">{exp.date}</p>
                </div>
                {exp.tag && (
                  <span className="badge-new">{exp.tag}</span>
                )}
              </div>
              <p className="text-foreground/70 mt-2 text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
