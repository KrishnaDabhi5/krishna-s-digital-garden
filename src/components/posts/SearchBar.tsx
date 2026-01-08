import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search posts by title, description, or tags..."
        className="w-full bg-transparent border border-primary/40 rounded-lg py-3 pl-11 pr-4 text-foreground placeholder:text-secondary focus:outline-none focus:border-primary transition-colors duration-200"
      />
    </div>
  );
};

export default SearchBar;
