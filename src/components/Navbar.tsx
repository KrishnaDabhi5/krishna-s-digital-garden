import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "https://drive.google.com/file/d/1IepCy6PUi7ubsP3S1h_O3CjBUGqp9OPf/view?usp=drive_link", external: true },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container-narrow py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                className="nav-link flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "nav-link",
                  location.pathname === item.href && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};
