"use client";

import { useState } from "react";
import { TrendingUp, ArrowUpRight, BarChart3, CheckCircle2, ShieldCheck, Flame, ShoppingBag, MapPin, Video, Bot, ExternalLink, X } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  timeline: string;
  icon: any;
  summary: string;
  challenge: string;
  strategy: string[];
  results: string[];
  tools: string[];
}

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "ai-seo-growth",
      title: "AI-First SEO & Organic Traffic Surge Case Study",
      category: "AI & GEO SEO",
      metric: "+340%",
      metricLabel: "Organic Impressions & AI Discovery",
      timeline: "90 Days Execution",
      icon: Bot,
      summary: "Modern Generative Engine Optimization (GEO) campaign transforming zero AI citations into top brand recommendations across ChatGPT and Google Gemini.",
      challenge: "The client suffered from stagnant traditional organic clicks, high competitor dominance on Google SERPs, and zero presence in emerging AI search answers like ChatGPT, Perplexity, and Google AI Overviews.",
      strategy: [
        "Executed LLMO (Large Language Model Optimization) and entity relationship mapping.",
        "Created topical authority cluster hubs answering conversational intent queries.",
        "Implemented structured FAQPage, HowTo, and Person schema markup.",
        "Acquired brand citations across trusted industry publications indexed in AI training databases.",
      ],
      results: [
        "+340% increase in Google Search Console organic impressions.",
        "Ranked as recommended primary source in ChatGPT and Perplexity queries.",
        "12,500+ monthly targeted organic visits without paying for ads.",
      ],
      tools: ["Google Search Console", "Perplexity AI", "ChatGPT Search", "Ahrefs", "Screaming Frog"],
    },
    {
      id: "ecommerce-seo-growth",
      title: "E-Commerce SEO & Transactional Revenue Surge",
      category: "E-Commerce & CMS SEO",
      metric: "45+ Top 3",
      metricLabel: "Buyer-Intent Transactional Keywords",
      timeline: "4 Months Campaign",
      icon: ShoppingBag,
      summary: "Shopify & WooCommerce architectural overhaul resolving crawl waste, duplicate product loops, and securing top transactional keyword positions.",
      challenge: "High crawl budget waste from faceted navigation filters, duplicate canonical tags, slow mobile Core Web Vitals, and poor product collection rankings.",
      strategy: [
        "Consolidated faceted collection URLs and fixed canonical loop parameters.",
        "Implemented rich Product schema with real-time price, stock availability, and rating badges.",
        "Targeted high-intent long-tail transactional buyer queries instead of vanity keywords.",
        "Built tier-1 contextual backlinks from authority e-commerce lifestyle publications.",
      ],
      results: [
        "45+ primary buyer-intent product terms ranked in Google Top 3.",
        "+280% organic revenue surge within 120 days.",
        "3.8x Return on Organic Marketing Investment (ROI).",
      ],
      tools: ["Shopify SEO", "SEMrush", "Google Analytics 4", "Google Merchant Center"],
    },
    {
      id: "local-seo-booster",
      title: "Local SEO Booster & Google Maps 3-Pack Dominance",
      category: "Local SEO Booster",
      metric: "+240%",
      metricLabel: "Inbound Customer Phone Calls",
      timeline: "60 Days Sprint",
      icon: MapPin,
      summary: "Hyper-local geo-citation strategy and Google Business Profile optimization securing #1 rank in Google Maps across 15 target zip codes.",
      challenge: "The local service business was invisible outside a 1km radius, had inconsistent NAP records on legacy directories, and lost high-value calls to competing local brands.",
      strategy: [
        "Completely rebuilt Google Business Profile (GBP) categories, primary services, and geotagged updates.",
        "Cleaned and harmonized Name-Address-Phone (NAP) consistency across 80+ tier-1 business directories.",
        "Built hyper-local service landing pages with LocalBusiness geo-coordinate schema.",
        "Implemented a systematic 5-star customer review acquisition and response workflow.",
      ],
      results: [
        "#1 rank in Google Maps 3-Pack for 15+ target commercial service keywords.",
        "+240% increase in direct click-to-call phone inquiries.",
        "180+ monthly qualified inbound local customer leads.",
      ],
      tools: ["Google Business Profile", "BrightLocal", "Google Maps", "Local Falcon"],
    },
    {
      id: "youtube-video-growth",
      title: "YouTube & Video SEO Discovery Case Study",
      category: "Video SEO",
      metric: "+420%",
      metricLabel: "Organic Video Search Views",
      timeline: "75 Days Sprint",
      icon: Video,
      summary: "Video SEO strategy ranking client guides in both YouTube suggested algorithms and Google Video SERP snippet carousels.",
      challenge: "High production videos received minimal organic search velocity, lacked keyword alignment, and failed to appear in Google search video carousels.",
      strategy: [
        "Conducted search velocity keyword research for high-intent problem-solving video queries.",
        "Restructured video titles, descriptions, and tag taxonomy for dual YouTube & Google indexing.",
        "Indexed timestamped chapter markers and semantic closed-caption transcripts.",
        "Embedded videos on optimized website pillar posts with VideoObject schema.",
      ],
      results: [
        "+420% increase in organic video views from YouTube Search.",
        "7 client videos indexed in Google Search top video carousels.",
        "Substantial boost in secondary website referral traffic and subscriber retention.",
      ],
      tools: ["YouTube Analytics", "TubeBuddy", "Google SERP Video Carousels", "VidIQ"],
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-28 relative bg-section-base scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 mb-4">
            <Flame className="w-4 h-4 text-[#2A835F]" />
            <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">
              Proven Track Record
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
            SEO Growth <span className="dark:text-[#8BBB92] text-[#2A835F]">Case Studies</span>
          </h2>
          <p className="mt-4 dark:text-gray-300 text-gray-700 text-base sm:text-lg leading-relaxed">
            Real data, verifiable results, and transparent strategies across AI-first search, e-commerce, local maps, and video discovery.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-card rounded-3xl p-6 sm:p-8 dark:bg-[#12544F]/35 bg-white border dark:border-[#8BBB92]/25 border-emerald-600/20 shadow-xl flex flex-col justify-between group hover:border-[#2A835F] transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Category & Metric */}
                  <div className="flex items-center justify-between pb-4 border-b dark:border-[#2A835F]/20 border-gray-100 mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#2A835F]/20 flex items-center justify-center text-[#2A835F]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold dark:text-[#8BBB92] text-[#12544F] block">
                          {item.category}
                        </span>
                        <span className="text-[11px] dark:text-gray-400 text-gray-500">
                          {item.timeline}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#2A835F] dark:text-[#8BBB92] tracking-tight">
                        {item.metric}
                      </div>
                      <div className="text-[10px] font-semibold dark:text-gray-300 text-gray-600">
                        {item.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-[#092328] mb-3 group-hover:text-[#2A835F] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm dark:text-gray-300 text-gray-600 leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  {/* Quick Highlights */}
                  <div className="space-y-2 mb-6">
                    {item.results.slice(0, 2).map((res, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs dark:text-gray-200 text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#2A835F] shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tools & Action Button */}
                <div className="pt-4 border-t dark:border-[#2A835F]/20 border-gray-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md dark:bg-[#092328]/70 bg-emerald-50 dark:text-gray-300 text-gray-700 border dark:border-[#2A835F]/20 border-emerald-600/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCase(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2A835F] dark:text-[#8BBB92] hover:underline"
                  >
                    <span>Read Full Breakdown</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="dark:bg-[#092328] bg-white border dark:border-[#8BBB92]/40 border-emerald-600/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-2 rounded-full dark:bg-[#12544F] bg-gray-100 dark:text-gray-300 text-gray-700 hover:text-[#2A835F]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#2A835F] flex items-center justify-center text-white">
                <selectedCase.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">
                  {selectedCase.category} • {selectedCase.timeline}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-[#092328]">
                  {selectedCase.title}
                </h3>
              </div>
            </div>

            {/* Metric Banner */}
            <div className="p-4 rounded-2xl dark:bg-[#12544F]/50 bg-[#e2f1ed] border dark:border-[#8BBB92]/20 border-emerald-600/20 flex items-center justify-between mb-6">
              <div>
                <span className="text-xs dark:text-gray-300 text-gray-700 block">Core KPI Achievement</span>
                <span className="text-xs font-semibold dark:text-white text-[#092328]">{selectedCase.metricLabel}</span>
              </div>
              <div className="text-3xl font-extrabold text-[#2A835F] dark:text-[#8BBB92]">
                {selectedCase.metric}
              </div>
            </div>

            {/* Challenge */}
            <div className="mb-6">
              <h4 className="text-sm font-bold dark:text-white text-[#092328] uppercase tracking-wider mb-2">
                Initial Problem & Obstacle:
              </h4>
              <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed">
                {selectedCase.challenge}
              </p>
            </div>

            {/* Strategy Applied */}
            <div className="mb-6">
              <h4 className="text-sm font-bold dark:text-white text-[#092328] uppercase tracking-wider mb-3">
                SEO Strategy & Solution Executed:
              </h4>
              <div className="space-y-2">
                {selectedCase.strategy.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm dark:text-gray-300 text-gray-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2A835F] mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable Results */}
            <div className="mb-8">
              <h4 className="text-sm font-bold dark:text-white text-[#092328] uppercase tracking-wider mb-3">
                Verifiable Results:
              </h4>
              <div className="space-y-2">
                {selectedCase.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl dark:bg-[#12544F]/40 bg-[#f0f7f5] border dark:border-[#8BBB92]/15 border-emerald-600/20 text-xs sm:text-sm dark:text-gray-200 text-gray-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2A835F] shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedCase(null)}
                className="btn-secondary px-5 py-2.5 rounded-xl text-xs font-semibold"
              >
                Close Window
              </button>
              <a
                href="#audit-form"
                onClick={() => setSelectedCase(null)}
                className="btn-primary px-5 py-2.5 rounded-xl text-xs font-bold"
              >
                Request Custom Strategy For My Site
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
