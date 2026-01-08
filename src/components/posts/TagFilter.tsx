import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: string[];
  activeTag: string;
  onTagChange: (tag: string) => void;
}

const TagFilter = ({ tags, activeTag, onTagChange }: TagFilterProps) => {
  return (
    <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={cn(
            "px-4 py-1.5 rounded border text-sm font-sans transition-all duration-200 whitespace-nowrap",
            activeTag === tag
              ? "bg-primary text-primary-foreground border-primary font-medium"
              : "bg-transparent text-primary border-primary/40 hover:border-primary"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
