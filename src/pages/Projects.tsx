import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container-narrow py-16 md:py-24">
        <h1 className="section-heading mb-4">Projects</h1>
        <p className="text-muted-foreground mb-12">
          Showcasing my work in machine learning, data science, and automation.
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
