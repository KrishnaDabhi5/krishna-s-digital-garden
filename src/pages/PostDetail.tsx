import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { posts } from "@/data/posts";

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-narrow py-16 md:py-24 text-center">
          <h1 className="section-heading">Post not found</h1>
          <Link to="/posts" className="link-accent">
            <ArrowLeft className="h-4 w-4" />
            Back to posts
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container-narrow py-16 md:py-24">
        <Link
          to="/posts"
          className="link-accent mb-8 inline-flex items-center gap-2 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to posts
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-secondary text-sm">{post.date}</p>
          </header>

          <div className="prose-article">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PostDetail;
