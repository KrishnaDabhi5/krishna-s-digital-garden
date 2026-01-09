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
    title: "B.Tech in Artificial Intelligence and Data Science",
    company: "University",
    date: "2022 - 2026",
    description: "Focusing on AI/ML, Deep Learning, and Computer Vision research.",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Co-Founder & CTO",
    company: "AIRAA",
    companyUrl: "https://www.instagram.com/ai.r.aa/",
    date: "Dec 2025 - Present",
    description: "AIRAA Infotech builds AI-powered software and digital products for startups and businesses. It focuses on AI, data-driven solutions, and scalable web platforms.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "AI / ML Project Developer",
    company: "Various Projects",
    date: "2023 - Present",
    description: "Built end-to-end AI, ML, and automation projects focused on real-world data and business use cases.",
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
