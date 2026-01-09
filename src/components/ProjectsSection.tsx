import { ArrowRight, BookOpen, Sparkles, Code, Brain } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: { icon: React.ReactNode; title: string; desc: string }[];
  cta: { label: string; href: string };
}

const projects: Project[] = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "AI Research Blog",
    description: "Practical AI insights based on real projects and experiments.I simplify complex ML concepts, explain modern architectures, and share learnings from building production-ready AI systems.",
    features: [
      { icon: <Brain className="w-4 h-4" />, title: "Deep Dives", desc: "Breaking down ML and DL architectures with real use cases" },
      { icon: <Code className="w-4 h-4" />, title: "Code Tutorials", desc: "Practical implementations & guides" },
    ],
    cta: { label: "Read Posts", href: "/posts" },
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "ML Projects",
    description: "Applied AI and ML projects focused on solving real problems. From computer vision and NLP to automation and analytics—built with research thinking and practical execution.",
    features: [
      { icon: <Code className="w-4 h-4" />, title: "Real-World AI", desc: "Projects built for real data and real impacte" },
      { icon: <Brain className="w-4 h-4" />, title: "End-to-End Systems", desc: "From data and models to deployment and dashboards" },
    ],
    cta: { label: "View on GitHub", href: "https://github.com/krishnadabhi5" },
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="container-narrow py-12">
      <h2 className="section-heading">stay in the loop</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="card-style">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {project.icon}
              </div>
              <h3 className="font-sans font-semibold">{project.title}</h3>
            </div>
            
            <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
            
            <div className="space-y-3 mb-5">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-muted-foreground mt-0.5">{feature.icon}</span>
                  <div>
                    <p className="font-sans font-medium text-sm">{feature.title}</p>
                    <p className="text-muted-foreground text-xs">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {project.cta.href.startsWith("http") ? (
              <a
                href={project.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                {project.cta.label} <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <Link
                to={project.cta.href}
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                {project.cta.label} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
