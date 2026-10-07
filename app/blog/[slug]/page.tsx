import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Quote,
  Lightbulb,
  Share2,
  User,
  Mail,
  Phone,
  MessageCircle,
  Bookmark,
  ChevronRight,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Harun SEO",
    };
  }

  const url = `https://www.harunseo.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Md. Harun or Roshid`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | Md. Harun or Roshid`,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Md. Harun or Roshid`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 2);
  const shareUrl = `https://www.harunseo.com/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        "@type": "Organization",
        name: post.author.agency,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Harun SEO",
      url: "https://www.harunseo.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": shareUrl,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <main className="min-h-screen dark:bg-[#092328] bg-[#f4f8f7] dark:text-gray-100 text-[#092328] flex flex-col overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <article className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#2A835F] dark:hover:text-[#8BBB92] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#2A835F] dark:hover:text-[#8BBB92] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3" />
              </li>
              <li className="font-semibold text-gray-700 dark:text-gray-200 truncate max-w-xs sm:max-w-md">
                {post.category}
              </li>
            </ol>
          </nav>

          {/* Post Header */}
          <header className="max-w-4xl mx-auto mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 dark:bg-[#2A835F]/30 text-[#12544F] dark:text-[#8BBB92] border border-emerald-600/20 dark:border-[#8BBB92]/30 mb-6">
              <Bookmark className="w-3.5 h-3.5" />
              <span>{post.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight leading-[1.2] mb-6">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg dark:text-gray-300 text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              {post.excerpt}
            </p>

            {/* Author and Metadata Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 border-t dark:border-[#12544F]/60 border-emerald-600/15 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2A835F] to-[#12544F] flex items-center justify-center text-white font-bold text-xs shadow-md">
                  <User className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="font-bold dark:text-white text-[#092328] block leading-none">
                    {post.author.name}
                  </span>
                  <span className="text-[11px] dark:text-[#8BBB92] text-[#12544F]">
                    {post.author.role} • {post.author.agency}
                  </span>
                </div>
              </div>

              <span className="hidden sm:inline dark:text-gray-600 text-gray-300">|</span>

              <div className="flex items-center gap-1.5 dark:text-gray-300 text-gray-600">
                <Calendar className="w-4 h-4 text-[#2A835F]" />
                <span>{post.date}</span>
              </div>

              <span className="hidden sm:inline dark:text-gray-600 text-gray-300">|</span>

              <div className="flex items-center gap-1.5 dark:text-gray-300 text-gray-600">
                <Clock className="w-4 h-4 text-[#2A835F]" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Main Layout: Article Body + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-7xl mx-auto">
            {/* Article Content Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="glass-card rounded-3xl p-6 sm:p-10 dark:bg-[#12544F]/30 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 shadow-xl">
                {post.content.map((block, index) => {
                  if (block.type === "h2") {
                    return (
                      <h2
                        key={index}
                        id={block.id}
                        className="text-2xl sm:text-3xl font-extrabold dark:text-white text-[#092328] mt-10 mb-4 pt-4 border-t first:border-t-0 first:mt-0 dark:border-[#2A835F]/20 border-emerald-600/10 scroll-mt-28"
                      >
                        {block.content}
                      </h2>
                    );
                  }

                  if (block.type === "h3") {
                    return (
                      <h3
                        key={index}
                        id={block.id}
                        className="text-xl sm:text-2xl font-bold dark:text-white text-[#092328] mt-6 mb-3 scroll-mt-28"
                      >
                        {block.content}
                      </h3>
                    );
                  }

                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className="text-base sm:text-lg dark:text-gray-300 text-gray-700 leading-relaxed mb-6"
                      >
                        {block.content}
                      </p>
                    );
                  }

                  if (block.type === "callout") {
                    return (
                      <div
                        key={index}
                        className="my-8 p-5 sm:p-6 rounded-2xl dark:bg-[#092328]/80 bg-[#e2f1ed]/60 border-l-4 border-[#2A835F] dark:border-[#8BBB92] shadow-sm"
                      >
                        <div className="flex items-center gap-2 mb-2 font-bold dark:text-[#8BBB92] text-[#12544F] text-sm sm:text-base">
                          <Lightbulb className="w-5 h-5 text-[#2A835F]" />
                          <span>{block.title || "Pro Tip"}</span>
                        </div>
                        <p className="text-sm sm:text-base dark:text-gray-200 text-gray-800 leading-relaxed">
                          {block.content}
                        </p>
                      </div>
                    );
                  }

                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={index}
                        className="my-8 p-6 rounded-2xl dark:bg-[#12544F]/40 bg-[#f0f7f5] border-l-4 border-[#2A835F] italic"
                      >
                        <Quote className="w-8 h-8 text-[#2A835F]/40 mb-2" />
                        <p className="text-base sm:text-lg font-medium dark:text-gray-200 text-gray-800 leading-relaxed">
                          &ldquo;{block.content}&rdquo;
                        </p>
                      </blockquote>
                    );
                  }

                  if (block.type === "checklist" && block.items) {
                    return (
                      <div
                        key={index}
                        className="my-8 p-6 rounded-2xl dark:bg-[#092328]/60 bg-[#f7faf9] border dark:border-[#8BBB92]/20 border-emerald-600/15"
                      >
                        {block.title && (
                          <h4 className="text-base font-bold dark:text-white text-[#092328] mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-[#2A835F]" />
                            {block.title}
                          </h4>
                        )}
                        <ul className="space-y-3">
                          {block.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm sm:text-base dark:text-gray-300 text-gray-700">
                              <CheckCircle2 className="w-5 h-5 text-[#2A835F] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }

                  if (block.type === "list" && block.items) {
                    return (
                      <ul key={index} className="my-6 space-y-2.5 pl-2">
                        {block.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base dark:text-gray-300 text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-[#2A835F] mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return null;
                })}

                {/* Article Tags */}
                <div className="mt-12 pt-8 border-t dark:border-[#2A835F]/20 border-emerald-600/15">
                  <h4 className="text-xs font-bold uppercase tracking-wider dark:text-gray-400 text-gray-500 mb-3">
                    Tagged Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg dark:bg-[#092328]/80 bg-[#f0f7f5] dark:text-gray-200 text-gray-700 border dark:border-[#8BBB92]/15 border-emerald-600/15"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back to Blog Button */}
                <div className="mt-8 pt-6 border-t dark:border-[#2A835F]/20 border-emerald-600/15 flex items-center justify-between">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2A835F] dark:text-[#8BBB92] hover:underline"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to all guides</span>
                  </Link>

                  <Link
                    href="/#audit-form"
                    className="btn-primary text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full inline-flex items-center gap-2"
                  >
                    <span>Request Free SEO Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8 sticky top-24">
              {/* Table of Contents */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <div className="glass-card rounded-3xl p-6 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 shadow-lg">
                  <h3 className="text-base font-bold dark:text-white text-[#092328] mb-4 flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[#2A835F]" />
                    <span>Table of Contents</span>
                  </h3>
                  <nav className="space-y-2">
                    {post.tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-[#2A835F] dark:hover:text-[#8BBB92] transition-colors py-1 pl-2 border-l-2 border-transparent hover:border-[#2A835F]"
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Author Info Card */}
              <div className="glass-card rounded-3xl p-6 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2A835F] to-[#12544F] flex items-center justify-center text-white font-bold text-base shadow-md">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base dark:text-white text-[#092328]">
                      {post.author.name}
                    </h4>
                    <p className="text-xs dark:text-[#8BBB92] text-[#12544F] font-semibold">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm dark:text-gray-300 text-gray-600 leading-relaxed mb-4">
                  5+ years practical SEO experience driving organic visibility and high-authority link acquisitions at {post.author.agency}.
                </p>

                <div className="space-y-2 pt-2 border-t dark:border-[#2A835F]/20 border-gray-200 text-xs">
                  <a
                    href="https://wa.me/8801972835738"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-600 hover:underline font-semibold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp: +880 1972-835738</span>
                  </a>
                  <a
                    href="mailto:harunsha197@gmail.com"
                    className="flex items-center gap-2 dark:text-gray-300 text-gray-700 hover:text-[#2A835F]"
                  >
                    <Mail className="w-4 h-4 text-[#2A835F]" />
                    <span>harunsha197@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Free SEO Audit Widget */}
              <div className="rounded-3xl p-6 bg-gradient-to-br from-[#12544F] to-[#092328] text-white border border-[#8BBB92]/30 shadow-xl text-center space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#2A835F] flex items-center justify-center mx-auto text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold">Need This Implemented?</h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Let me personally run a comprehensive technical crawl &amp; backlink gap analysis on your domain.
                </p>
                <Link
                  href="/#audit-form"
                  className="btn-primary w-full py-2.5 rounded-xl font-bold text-xs inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Claim Free SEO Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 sm:mt-28 max-w-6xl mx-auto pt-12 border-t dark:border-[#12544F]/60 border-emerald-600/15">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-wider dark:text-[#8BBB92] text-[#12544F]">
                  Continue Learning
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold dark:text-white text-[#092328] mt-1">
                  Related Guides &amp; Blueprints
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {relatedPosts.map((related) => (
                  <BlogCard key={related.slug} post={related} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
