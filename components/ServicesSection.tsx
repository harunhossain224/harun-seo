"use client";

import { useState } from "react";
import {
  Wrench,
  FileCode,
  Link as LinkIcon,
  Search,
  BarChart2,
  ShieldCheck,
  MapPin,
  Layers,
  X,
  ArrowUpRight,
  CheckCircle,
  Sparkles,
  Bot,
  Video,
  ShoppingBag,
  Globe2,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: "ai" | "cms" | "technical" | "local";
  badge: string;
  icon: any;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "ai-first-seo",
      title: "AI-First SEO Strategy & GEO",
      category: "ai",
      badge: "Modern AI Era",
      icon: Bot,
      shortDesc: "Generative Engine Optimization (GEO) & LLMO to secure top visibility on ChatGPT, Google Gemini, Perplexity, and Bing AI.",
      fullDesc: "Modern search extends beyond traditional ten blue links. My AI-First SEO strategy optimizes your website to be recommended, cited, and summarized by LLM engines like ChatGPT Search, Google Gemini AI Overviews (AIO), Perplexity, and Microsoft Copilot.",
      deliverables: [
        "AIO (AI Overviews) & LLMO entity optimization",
        "Generative Engine Optimization (GEO) architecture",
        "Knowledge Graph & Semantic entity mapping",
        "Brand citation acquisition across trusted AI training sources",
        "Conversational query & FAQ structured data integration",
        "AI response ranking monitoring & citation audits",
      ],
    },
    {
      id: "local-seo-booster",
      title: "Local SEO Booster & Google Maps",
      category: "local",
      badge: "High Conversion",
      icon: MapPin,
      shortDesc: "Dominate Google Maps 3-Pack, optimize Google Business Profile (GBP), and capture high-intent local customer calls.",
      fullDesc: "Capture customers searching in your immediate geographic area. I optimize your Google Business Profile (GBP), build consistent Name-Address-Phone (NAP) citations across tier-1 directories, and rank your local service pages in Google's coveted 3-Pack.",
      deliverables: [
        "Google Business Profile (GBP) audit & verification optimization",
        "Google Maps 3-Pack rank booster strategy",
        "NAP consistency check across 50+ tier-1 business directories",
        "Hyper-local citation building & local link outreach",
        "Geo-targeted keyword landing pages & LocalBusiness schema",
        "Review generation velocity & local reputation signals",
      ],
    },
    {
      id: "cms-seo",
      title: "CMS SEO (WordPress, Shopify, Webflow)",
      category: "cms",
      badge: "Platform Specialists",
      icon: Layers,
      shortDesc: "Platform-specific SEO tuning for WordPress, Shopify, Webflow, and Wix to maximize indexing and render speed.",
      fullDesc: "Different CMS platforms have unique technical hurdles, from Shopify's URL structures and collection loops to WordPress plugin bloat and Webflow schema limits. I tailor SEO solutions specifically to your platform's architecture.",
      deliverables: [
        "WordPress SEO: Rank Math / Yoast tuning & asset cleanup",
        "Shopify SEO: Canonical URL fixes & collection hierarchy",
        "Webflow SEO: Dynamic CMS schema & clean metadata bindings",
        "Wix SEO: Structured data and Core Web Vitals optimization",
        "Frictionless indexing and sitemap generation per platform",
      ],
    },
    {
      id: "ecommerce-seo",
      title: "E-Commerce SEO Dominance",
      category: "cms",
      badge: "Revenue Focused",
      icon: ShoppingBag,
      shortDesc: "Scale transactional traffic for products, collections, and buyer-intent category pages to boost sales.",
      fullDesc: "E-commerce SEO targets high-converting commercial and transactional queries. I optimize product facet navigation, schema markup, product reviews, and category authority to transform organic visitors into paying customers.",
      deliverables: [
        "Product & Collection page on-page optimization",
        "Product schema (price, availability, rating) implementation",
        "Faceted navigation & crawl budget duplicate control",
        "Transactional & commercial search intent keyword mapping",
        "E-commerce site architecture & internal silo linking",
      ],
    },
    {
      id: "technical-seo",
      title: "Technical SEO & Crawl Budget",
      category: "technical",
      badge: "Core Foundation",
      icon: Wrench,
      shortDesc: "Eliminate crawl traps, 404 chains, indexing friction, canonical errors, and Core Web Vitals speed bottlenecks.",
      fullDesc: "Technical SEO ensures search engines can effortlessly crawl, understand, and index every critical page on your domain. I conduct in-depth log file and site audits to eradicate technical barriers preventing top rankings.",
      deliverables: [
        "XML Sitemap & Robots.txt architectural optimization",
        "Google Search Console coverage & indexing bug repairs",
        "Canonicalization & duplicate content mitigation",
        "Redirect chain & broken link eradication",
        "Core Web Vitals, LCP, INP, and mobile responsiveness tuning",
        "HTTPS security & modern clean URL hierarchy",
      ],
    },
    {
      id: "semantic-seo",
      title: "Semantic & Holistic On-Page SEO",
      category: "technical",
      badge: "Topical Authority",
      icon: FileCode,
      shortDesc: "Topical authority clusters, entity relationships, CTR-driven metadata, and comprehensive semantic content.",
      fullDesc: "Google and AI engines prioritize topical authority over isolated keywords. I structure content into semantic pillar-cluster hubs, integrate LSI entities, and craft irresistible meta titles that drive high CTR.",
      deliverables: [
        "Topical Authority content clustering & siloing",
        "Search intent classification (informational vs transactional)",
        "CTR-focused Meta Titles & Meta Descriptions",
        "Heading architecture (H1, H2, H3) & entity integration",
        "Advanced JSON-LD Schema Markup (Article, FAQ, HowTo, Service)",
        "Internal contextual link distribution strategy",
      ],
    },
    {
      id: "offpage-links",
      title: "White-Hat Link Building & PR",
      category: "local",
      badge: "Authority & Trust",
      icon: LinkIcon,
      shortDesc: "100% manual high-DA backlinks, contextual tier-1 placements, profile authority, and zero spam PBNs.",
      fullDesc: "Backlinks are search engine votes of confidence. I strictly execute manual, ethical, white-hat link acquisition strategies to grow your domain rating (DR/DA) sustainably without penalty risks.",
      deliverables: [
        "High-DA contextual link outreach & placements",
        "Manual tier-1 business profile and brand mentions",
        "Niche-relevant directory listings & citation distribution",
        "Anchor text diversity & natural distribution balance",
        "Toxic backlink analysis and Google disavow management",
      ],
    },
    {
      id: "youtube-seo",
      title: "YouTube & Video SEO Growth",
      category: "ai",
      badge: "Video Discovery",
      icon: Video,
      shortDesc: "Rank videos on both YouTube search and Google Video SERP carousels for explosive brand exposure.",
      fullDesc: "YouTube is the second largest search engine in the world. I optimize video titles, tags, descriptions, chapter timestamps, and semantic transcripts to rank in YouTube suggested algorithms and Google Video search snippets.",
      deliverables: [
        "Keyword research for high-velocity video queries",
        "Title, description, and tag metadata optimization",
        "Video Chapter timestamps and transcript indexing",
        "VideoObject structured data for Google Search carousels",
        "Thumbnail CTR strategies and audience retention tactics",
      ],
    },
  ];

  const filteredServices = activeTab === "all" ? services : services.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-20 md:py-28 relative bg-section-gradient scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#2A835F]" />
            <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">
              Comprehensive SEO Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
            Future-Ready <span className="dark:text-[#8BBB92] text-[#2A835F]">SEO Services</span>
          </h2>
          <p className="mt-4 dark:text-gray-300 text-gray-700 text-base sm:text-lg">
            Built for modern search engines (Google, Google Maps) and AI discovery platforms (ChatGPT, Gemini, Perplexity).
          </p>

          {/* Filter Tabs matching Sourov's categories */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Services" },
              { id: "ai", label: "AI & GEO SEO" },
              { id: "cms", label: "CMS & E-Commerce" },
              { id: "technical", label: "Technical & Semantic" },
              { id: "local", label: "Local & Link Building" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#2A835F] text-white shadow-lg shadow-[#2A835F]/30 border border-[#8BBB92]/50 scale-105"
                    : "dark:bg-[#12544F]/40 bg-[#e2f1ed] dark:text-gray-300 text-[#092328] dark:hover:text-white hover:text-[#2A835F] border dark:border-[#8BBB92]/15 border-emerald-600/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="glass-card rounded-3xl p-6 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 flex flex-col justify-between group hover:border-[#2A835F]/50 shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl dark:bg-[#12544F] bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 flex items-center justify-center dark:text-[#8BBB92] text-[#2A835F] group-hover:bg-[#2A835F] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded-full dark:bg-[#092328]/80 bg-emerald-50 dark:text-[#8BBB92] text-[#12544F] border dark:border-[#2A835F]/30 border-emerald-600/20">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold dark:text-white text-[#092328] mb-2 group-hover:text-[#2A835F] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm dark:text-gray-300 text-gray-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-2.5 px-4 rounded-xl dark:bg-[#092328]/80 bg-[#f0f7f5] border dark:border-[#2A835F]/30 border-emerald-600/20 text-xs font-semibold dark:text-[#8BBB92] text-[#2A835F] hover:bg-[#2A835F] hover:text-white flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>View Scope & Deliverables</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="dark:bg-[#092328] bg-white border dark:border-[#8BBB92]/40 border-emerald-600/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full dark:bg-[#12544F] bg-gray-100 dark:text-gray-300 text-gray-700 hover:text-[#2A835F]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#2A835F] flex items-center justify-center text-white">
                <selectedService.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold dark:text-white text-[#092328]">{selectedService.title}</h3>
                <span className="text-xs dark:text-[#8BBB92] text-[#2A835F] uppercase font-semibold tracking-wider">
                  {selectedService.badge} • Full Breakdown
                </span>
              </div>
            </div>

            <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <h4 className="text-sm font-bold dark:text-white text-[#092328] uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#2A835F]" /> Included Deliverables & Action Items:
            </h4>

            <div className="space-y-2.5 mb-8">
              {selectedService.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl dark:bg-[#12544F]/50 bg-[#f0f7f5] border dark:border-[#8BBB92]/15 border-emerald-600/20"
                >
                  <div className="w-2 h-2 rounded-full bg-[#2A835F] shrink-0" />
                  <span className="text-sm dark:text-gray-200 text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="btn-secondary px-5 py-2.5 rounded-xl text-xs font-semibold"
              >
                Close
              </button>
              <a
                href="#audit-form"
                onClick={() => setSelectedService(null)}
                className="btn-primary px-5 py-2.5 rounded-xl text-xs font-bold"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
