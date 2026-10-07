"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/lib/blog";
import BlogCard from "./BlogCard";
import { Search, Sparkles, SlidersHorizontal, BookOpen } from "lucide-react";

interface BlogListClientProps {
  initialPosts: BlogPost[];
  categories: string[];
}

export default function BlogListClient({ initialPosts, categories }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Search and Filters Bar */}
      <div className="glass-card p-4 sm:p-6 rounded-3xl dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-[#8BBB92]" />
            <input
              type="text"
              placeholder="Search guides, technical fixes, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-sm dark:bg-[#092328]/80 bg-[#f4f8f7] border dark:border-[#8BBB92]/30 border-emerald-600/20 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#2A835F] dark:focus:border-[#8BBB92] transition-colors"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-semibold dark:text-gray-400 text-gray-500 flex items-center gap-1 mr-1 hidden sm:flex">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#2A835F]" />
              Filter:
            </span>
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-[#2A835F] text-white shadow-md shadow-[#2A835F]/30 scale-[1.02]"
                      : "dark:bg-[#092328]/60 bg-[#f0f7f5] dark:text-gray-300 text-gray-700 hover:text-[#2A835F] dark:hover:text-white border dark:border-[#8BBB92]/15 border-emerald-600/15"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-1">
        <p className="text-xs sm:text-sm font-semibold dark:text-gray-300 text-gray-600">
          Showing <span className="text-[#2A835F] dark:text-[#8BBB92] font-bold">{filteredPosts.length}</span>{" "}
          {filteredPosts.length === 1 ? "article" : "articles"}
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>

        {(selectedCategory !== "All" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-xs font-semibold text-[#2A835F] dark:text-[#8BBB92] hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-3xl p-12 text-center dark:bg-[#12544F]/20 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 max-w-xl mx-auto">
          <BookOpen className="w-12 h-12 text-gray-400 dark:text-[#8BBB92]/60 mx-auto mb-4" />
          <h3 className="text-lg font-bold dark:text-white text-[#092328] mb-2">
            No matching articles found
          </h3>
          <p className="text-sm dark:text-gray-300 text-gray-600 mb-6">
            We couldn't find any articles matching your search query. Try searching for different keywords like &quot;Audit&quot;, &quot;Link Building&quot;, or &quot;Local SEO&quot;.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="btn-primary text-xs font-semibold px-5 py-2.5 rounded-full"
          >
            View All Articles
          </button>
        </div>
      )}
    </div>
  );
}
