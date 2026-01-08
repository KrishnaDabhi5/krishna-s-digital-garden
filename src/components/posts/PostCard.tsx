import { Link } from "react-router-dom";
import { Post } from "@/data/posts";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link
      to={`/posts/${post.id}`}
      className={cn(
        "block p-4 rounded-xl transition-all duration-300",
        post.featured
          ? "bg-primary text-primary-foreground"
          : "hover:bg-card"
      )}
    >
      <h3
        className={cn(
          "font-serif text-lg mb-1 leading-snug",
          post.featured ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {post.title}
      </h3>
      <p
        className={cn(
          "text-sm font-sans",
          post.featured ? "text-primary-foreground/80" : "text-secondary"
        )}
      >
        {post.date}
      </p>
      {post.excerpt && !post.featured && (
        <p className="text-sm text-secondary mt-2 line-clamp-2">
          {post.excerpt}
        </p>
      )}
    </Link>
  );
};

export default PostCard;
