"use client";

import Link from "next/link";
import { BookOpen, ArrowRight, Flame } from "lucide-react";
import BlogCard from "./BlogCard";
import { BLOG_POSTS } from "@/lib/blog";

export default function BlogSection() {
  const displayPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog-preview" className="py-20 md:py-28 relative bg-section-base scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 mb-4">
              <BookOpen className="w-4 h-4 text-[#2A835F]" />
              <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">
                SEO Knowledge &amp; Strategy
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
              Latest <span className="dark:text-[#8BBB92] text-[#2A835F]">SEO Insights</span> &amp; Guides
            </h2>
            <p className="mt-3 dark:text-gray-300 text-gray-700 text-base max-w-2xl">
              Practical blueprints on Technical SEO, White-Hat Link Building, AI Generative Search (GEO), and Local Maps ranking.
            </p>
          </div>

          <Link
            href="/blog"
            className="btn-secondary text-sm font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 self-start md:self-auto group shadow-sm"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4 text-[#2A835F] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
