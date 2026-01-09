import { ExternalLink } from "lucide-react";

export const ConnectSection = () => {
  return (
    <section className="container-narrow py-12">
      <h2 className="section-heading">what excites me</h2>
      <p className="text-foreground/70 mb-12">
        In my spare time, you might find me diving deep into AI research papers, 
        experimenting with new ML architectures, and building side projects. 
        The intersection of creativity and technology fascinates me.
      </p>
      
      <h2 className="section-heading">let's connect</h2>
      <p className="text-foreground/70 mb-4">
        Want to discuss AI, collaborate on projects, or just chat about tech? Feel free to reach out!
      </p>
      
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <a href="mailto:krishnadabhi59@gmail.com" className="link-accent">
          Email me <ExternalLink className="w-3 h-3" />
        </a>
        <span className="text-muted-foreground">•</span>
        <a href="https://www.linkedin.com/in/krishna-dabhi-b35259251/" target="_blank" rel="noopener noreferrer" className="link-accent">
          LinkedIn <ExternalLink className="w-3 h-3" />
        </a>
        <span className="text-muted-foreground">•</span>
        <a href="https://github.com/krishnadabhi5" target="_blank" rel="noopener noreferrer" className="link-accent">
          GitHub <ExternalLink className="w-3 h-3" />
        </a>
      </div>
      
      <p className="text-muted-foreground text-sm">
        feel free to DM me on{" "}
        <a href="https://x.com/KrishnaDabhi59" target="_blank" rel="noopener noreferrer" className="link-accent">
          𝕏 <ExternalLink className="w-3 h-3" />
        </a>
        {" "}for quick chats!
      </p>
    </section>
  );
};
