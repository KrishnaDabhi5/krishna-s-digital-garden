import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SearchBar from "@/components/posts/SearchBar";
import TagFilter from "@/components/posts/TagFilter";
import PostCard from "@/components/posts/PostCard";
import { posts, allTags } from "@/data/posts";

const Posts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag =
        activeTag === "All" ||
        post.tags.some(
          (tag) => tag.toLowerCase() === activeTag.toLowerCase()
        );

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, activeTag]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container-narrow py-8 md:py-12">
        <h1 className="section-heading mb-8">writings</h1>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <TagFilter
          tags={allTags}
          activeTag={activeTag}
          onTagChange={setActiveTag}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-secondary text-center py-12">
            No posts found matching your criteria.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Posts;
