import Link from "next/link";
import { BookOpen, ArrowRight, Sparkles } from "lucide-react";
import BlogCard from "./BlogCard";
import { getAllPosts } from "@/lib/blog";

export default function BlogSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog-preview" className="py-20 md:py-28 relative bg-section-base scroll-mt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] dark:bg-[#2A835F]/10 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 mb-4">
              <BookOpen className="w-4 h-4 text-[#2A835F]" />
              <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">
                SEO Knowledge &amp; Insights
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
              Latest <span className="dark:text-[#8BBB92] text-[#2A835F]">SEO Guides</span> &amp; Case Studies
            </h2>
            <p className="mt-4 dark:text-gray-300 text-gray-700 text-base sm:text-lg leading-relaxed">
              Field-tested strategies, technical audit blueprints, and ethical link acquisition playbooks to help your website outrank competitors.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/blog"
              className="btn-primary text-sm font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 group shadow-lg"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-3xl dark:bg-[#12544F]/30 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/15 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2A835F]/20 border border-[#2A835F]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#2A835F]" />
            </div>
            <div>
              <h4 className="text-base font-bold dark:text-white text-[#092328]">
                Need custom SEO strategies for your niche?
              </h4>
              <p className="text-xs sm:text-sm dark:text-gray-300 text-gray-600">
                Get a comprehensive technical, on-page, and backlink audit for your website.
              </p>
            </div>
          </div>

          <Link
            href="/#audit-form"
            className="btn-secondary text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shrink-0 flex items-center gap-2"
          >
            <span>Request Free Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
