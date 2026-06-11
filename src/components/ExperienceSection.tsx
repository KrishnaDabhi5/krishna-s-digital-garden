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
    icon: <Heart className="w-5 h-5" />,
    title: "Freelance AI & Data Engineer",
    company: "Various Projects",
    date: "2022 - Present, 4+ years",
    description: "Working independently with startups and businesses across the US, Canada, and Europe to deliver AI, automation, and data engineering solutions. Projects span LLM integrations, ETL pipelines, Power BI dashboards, and end-to-end ML systems for real-world business use cases.",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Data Engineer at SparkBeta Tech",
    company: "Software company",
    date: "2026 - Present",
    description: "Designing and optimizing scalable data pipelines, ETL workflows, and data solutions to support analytics, business intelligence, and AI initiatives. Working on-site with cross-functional teams to ensure reliable, production-grade data infrastructure."
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "B.Tech in Artificial Intelligence and Data Science",
    company: "University",
    date: "2022 - 2026",
    description: "Focusing on AI/ML, Deep Learning, and Computer Vision research.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "AI / ML Project Developer",
    company: "Various Projects",
    date: "2022 - 2026",
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
