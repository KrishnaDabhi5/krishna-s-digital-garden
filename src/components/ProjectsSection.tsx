import { ArrowRight, BookOpen, Sparkles, Code, Brain } from "lucide-react";

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
    description: "Deep dives into ML architectures, hands-on implementation insights, and explorations of cutting-edge AI research.",
    features: [
      { icon: <Brain className="w-4 h-4" />, title: "Deep Dives", desc: "Breaking down complex architectures" },
      { icon: <Code className="w-4 h-4" />, title: "Code Tutorials", desc: "Practical implementations & guides" },
    ],
    cta: { label: "Read Posts", href: "#posts" },
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "ML Projects",
    description: "Open-source projects exploring computer vision, NLP, and generative AI. Building tools for the ML community.",
    features: [
      { icon: <Code className="w-4 h-4" />, title: "Open Source", desc: "Free and accessible for everyone" },
      { icon: <Brain className="w-4 h-4" />, title: "Research-Driven", desc: "Based on latest papers & techniques" },
    ],
    cta: { label: "View on GitHub", href: "https://github.com/krishnadabhi" },
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
            
            <a
              href={project.cta.href}
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              {project.cta.label} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
