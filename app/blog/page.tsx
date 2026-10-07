import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogListClient from "@/components/BlogListClient";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { Sparkles, BookOpen, ArrowRight, ShieldCheck, Flame, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Blog & Industry Insights | Md. Harun or Roshid",
  description:
    "Actionable, data-driven guides on Technical SEO, White-Hat Link Building, Search Intent Optimization, and Local Citations by Md. Harun or Roshid.",
  keywords: [
    "SEO Blog",
    "Technical SEO Guides",
    "Link Building Strategy",
    "Search Intent Optimization",
    "Local SEO Tips",
    "Harun SEO Blog",
    "ScaleUP Ads Agency SEO",
  ],
  alternates: {
    canonical: "https://www.harunseo.com/blog",
  },
  openGraph: {
    title: "SEO Blog & Industry Insights | Md. Harun or Roshid",
    description:
      "Actionable, data-driven guides on Technical SEO, White-Hat Link Building, Search Intent Optimization, and Local Citations.",
    url: "https://www.harunseo.com/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featuredPost = posts.find((p) => p.featured) || posts[0];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Md. Harun or Roshid SEO Blog",
    description:
      "Actionable, data-driven guides on Technical SEO, White-Hat Link Building, Search Intent Optimization, and Local Citations.",
    url: "https://www.harunseo.com/blog",
    author: {
      "@type": "Person",
      name: "Md. Harun or Roshid",
      jobTitle: "Senior SEO Executive",
      worksFor: {
        "@type": "Organization",
        name: "ScaleUP Ads Agency",
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://www.harunseo.com/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  return (
    <main className="min-h-screen dark:bg-[#092328] bg-[#f4f8f7] dark:text-gray-100 text-[#092328] flex flex-col overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-hero-gradient">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] dark:bg-[#2A835F]/15 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] dark:bg-[#8BBB92]/10 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/80 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 backdrop-blur-md mb-4 shadow-sm">
              <BookOpen className="w-4 h-4 text-[#2A835F]" />
              <span className="text-xs sm:text-sm font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">
                SEO Knowledge Hub
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-[#092328] tracking-tight leading-[1.15] mb-5">
              Practical Insights for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-[#8BBB92] dark:via-[#2A835F] dark:to-emerald-400 from-[#2A835F] via-[#12544F] to-emerald-700">
                Organic Search Growth
              </span>
            </h1>

            <p className="text-base sm:text-lg dark:text-gray-300 text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Field-tested strategies, technical audit blueprints, and ethical link acquisition playbooks straight from 5+ years of active agency SEO execution.
            </p>
          </div>

          {/* Featured Post Card */}
          {featuredPost && (
            <div className="max-w-5xl mx-auto mb-12">
              <div className="relative group rounded-3xl p-6 sm:p-10 dark:bg-gradient-to-br dark:from-[#12544F]/80 dark:to-[#092328]/90 bg-white border-2 dark:border-[#8BBB92]/35 border-emerald-600/25 shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#2A835F]">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#2A835F]/20 to-transparent rounded-bl-full pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start justify-between">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2A835F] text-white shadow-md shadow-[#2A835F]/30">
                        <Flame className="w-3.5 h-3.5 fill-white" /> Featured Blueprint
                      </span>
                      <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] px-2.5 py-0.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed]">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-3 text-xs dark:text-gray-300 text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#2A835F]" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#2A835F]" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold dark:text-white text-[#092328] group-hover:text-[#2A835F] dark:group-hover:text-[#8BBB92] transition-colors leading-tight">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base dark:text-gray-300 text-gray-600 leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="btn-primary text-sm font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 group shadow-lg"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <div className="text-xs dark:text-gray-400 text-gray-500 flex items-center gap-2">
                        <span>By {featuredPost.author.name}</span>
                        <span>•</span>
                        <span>{featuredPost.author.agency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Search & List */}
          <div className="max-w-6xl mx-auto">
            <BlogListClient initialPosts={posts} categories={categories} />
          </div>
        </div>
      </section>

      {/* Audit Banner CTA */}
      <section className="py-16 md:py-20 relative bg-section-base border-t dark:border-[#12544F]/40 border-emerald-600/15">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/25 border-emerald-600/20 shadow-xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#092328]/80 bg-[#e2f1ed] text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] mb-4">
              <ShieldCheck className="w-4 h-4 text-[#2A835F]" />
              Need Tailored Recommendations?
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold dark:text-white text-[#092328] mb-4">
              Get a Free Technical &amp; Backlink Audit for Your Website
            </h2>
            <p className="text-sm sm:text-base dark:text-gray-300 text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              Find out why your competitors are outranking you. Receive a 100% manual, actionable audit checklist with zero sales pitch.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#audit-form"
                className="btn-primary text-sm font-bold px-7 py-3.5 rounded-full flex items-center gap-2 shadow-xl group"
              >
                <span>Request Free SEO Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/8801972835738"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm font-semibold px-6 py-3.5 rounded-full flex items-center gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
