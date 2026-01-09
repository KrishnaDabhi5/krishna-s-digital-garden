import { ExternalLink } from "lucide-react";

const socialLinks = [
  { label: "@krishnadabhi59", href: "https://x.com/KrishnaDabhi59", icon: "𝕏" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/krishna-dabhi-b35259251/", icon: null },
  { label: "GitHub", href: "https://github.com/krishnadabhi5", icon: null },
];

export const HeroSection = () => {
  return (
    <section className="container-narrow py-16 animate-fade-in">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
        🤖
        </div>
        <h1 className="text-3xl md:text-4xl font-serif leading-none">krishna dabhi</h1>
      </div>
      
      <a href="/posts" className="link-accent text-sm mb-6 block">
        Writings <ExternalLink className="w-3 h-3" />
      </a>
      
      <p className="text-foreground/80 leading-relaxed mb-6 max-w-lg">
        hi, i am krishna dabhi, an AI/ML enthusiast passionate about building intelligent systems. 
        i explore deep learning architectures, work on research projects, and love sharing knowledge 
        about the fascinating world of artificial intelligence.
      </p>
      
      <div className="flex flex-wrap items-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent text-sm"
          >
            {link.icon && <span className="mr-1">{link.icon}</span>}
            {link.label} <ExternalLink className="w-3 h-3" />
          </a>
        ))}
      </div>
    </section>
  );
};
