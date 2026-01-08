import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="border border-border/40 p-6 transition-all duration-300 hover:border-primary/40">
      <h3 className="font-serif text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-6">{project.description}</p>

      <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-border/30">
        <div>
          <h4 className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
            Problem
          </h4>
          <p className="text-sm text-muted-foreground">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
            Approach
          </h4>
          <p className="text-sm text-muted-foreground">{project.approach}</p>
        </div>
        <div>
          <h4 className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
            Result
          </h4>
          <p className="text-sm text-muted-foreground">{project.result}</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 text-muted-foreground">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-card border border-border/40 rounded-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-card text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-card text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};
