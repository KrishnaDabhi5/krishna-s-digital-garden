import { ExternalLink, Twitter, Youtube, Play } from "lucide-react";

const platforms = [
  {
    icon: <Twitter className="w-5 h-5" />,
    title: "Writing & Discussions",
    description: "Follow my thoughts and insights about AI/ML, architectures, and tech on Twitter.",
    cta: { label: "@krishnadabhi59", href: "https://x.com/KrishnaDabhi59" },
  },
  {
    icon: <Youtube className="w-5 h-5" />,
    title: "Videos & Tutorials",
    description: "Check out AI/ML deep dives and tutorials on complex topics made simple.",
    cta: { label: "Watch Reels", href: "https://www.instagram.com/ai.r.aa/", hasPlay: true },
  },
];

export const FindMeSection = () => {
  return (
    <section className="container-narrow py-12">
      <h2 className="section-heading">find me online</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {platforms.map((platform, index) => (
          <div key={index} className="card-style">
            <div className="flex items-center gap-2 mb-2 text-foreground">
              {platform.icon}
              <h3 className="font-sans font-semibold">{platform.title}</h3>
            </div>
            
            <p className="text-foreground/70 text-sm mb-4">{platform.description}</p>
            
            <a
              href={platform.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors duration-200"
            >
              {platform.cta.label}
              {platform.cta.hasPlay ? <Play className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
