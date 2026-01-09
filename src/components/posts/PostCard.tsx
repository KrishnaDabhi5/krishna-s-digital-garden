import { Link } from "react-router-dom";
import { Post } from "@/data/posts";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const content = (
    <>
      <h3
        className={cn(
          "font-serif text-lg mb-1 leading-snug transition-colors duration-300",
          post.featured
            ? "text-primary-foreground"
            : "text-foreground group-hover:text-primary-foreground"
        )}
      >
        {post.title}
      </h3>
      <p
        className={cn(
          "text-sm font-sans transition-colors duration-300",
          post.featured
            ? "text-primary-foreground/80"
            : "text-secondary group-hover:text-primary-foreground/80"
        )}
      >
        {post.date}
      </p>
      {post.excerpt && !post.featured && (
        <p className="text-sm text-secondary mt-2 line-clamp-2 transition-colors duration-300 group-hover:text-primary-foreground/80">
          {post.excerpt}
        </p>
      )}
    </>
  );

  const className = cn(
    "block p-4 rounded-none transition-all duration-300",
    post.featured
      ? "bg-primary text-primary-foreground"
      : "hover:bg-primary hover:text-primary-foreground group"
  );

  if (post.externalUrl) {
    return (
      <a href={post.externalUrl} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link
      to={`/posts/${post.id}`}
      className={className}
    >
      {content}
    </Link>
  );
};

export default PostCard;
