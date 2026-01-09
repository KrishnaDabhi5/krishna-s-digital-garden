import { ArrowRight } from "lucide-react";

const NewsletterCard = () => {
  return (
    <div className="card-style mb-8">
      <div className="flex items-start gap-6">
        <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center text-xl shrink-0">
          📝
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-lg mb-1">
            Subscribe to GradientLogs ✨
          </h3>
          <p className="text-secondary text-sm mb-4">
            Deep dives into ML architectures and thoughts on culture, art, and everything in between.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg font-sans text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            Subscribe to Newsletter
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
