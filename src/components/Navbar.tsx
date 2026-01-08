import { ThemeToggle } from "./ThemeToggle";
import { ExternalLink } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Posts", href: "#posts" },
  { label: "Projects", href: "#projects" },
  { label: "YouTube", href: "https://youtube.com", external: true },
];

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container-narrow py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link flex items-center gap-1"
              {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {item.label}
              {item.external && <ExternalLink className="w-3 h-3" />}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};
