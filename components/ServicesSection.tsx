"use client";

import { useState } from "react";
import { Wrench, FileCode, Link, Search, BarChart2, ShieldCheck, MapPin, Layers, X, ArrowUpRight, CheckCircle } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: "technical" | "onpage" | "offpage" | "local";
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
      id: "technical-seo",
      title: "Technical SEO Optimization",
      category: "technical",
      icon: Wrench,
      shortDesc: "Resolve crawl errors, indexing issues, sitemaps, robots.txt, canonical tags, and page speed bottlenecks.",
      fullDesc: "Technical SEO ensures search engine crawlers can properly discover, crawl, and index your website pages without technical friction. I perform end-to-end technical diagnostics to eliminate crawl traps, duplicate content, broken URLs, and HTTPS security flags.",
      deliverables: [
        "Sitemap.xml & Robots.txt audit & creation",
        "Google Search Console indexing fix",
        "Canonicalization & duplicate content resolution",
        "Redirect chain & 404 broken URL repairs",
        "Core Web Vitals & speed optimizations",
        "HTTPS security & URL structure check",
      ],
    },
    {
      id: "onpage-seo",
      title: "On-Page SEO Optimization",
      category: "onpage",
      icon: FileCode,
      shortDesc: "Optimize meta tags, headings, internal linking structure, Open Graph tags, and keyword placement.",
      fullDesc: "On-Page SEO optimizes individual web pages to rank higher and earn more relevant traffic in search engines. I align page elements with target search intent, optimize headings (H1-H3), meta titles, descriptions, and internal linking hierarchy.",
      deliverables: [
        "CTR-focused Meta Titles & Descriptions",
        "Heading Tag (H1, H2, H3) restructuring",
        "Keyword density & LSI placement",
        "Internal linking architecture strategy",
        "Image Alt text & asset compression",
        "Open Graph & Schema Markup implementation",
      ],
    },
    {
      id: "offpage-seo",
      title: "Off-Page SEO & Backlink Building",
      category: "offpage",
      icon: Link,
      shortDesc: "Build high-authority, natural backlink profiles through Web 2.0, profile links, citations, and manual outreach.",
      fullDesc: "Off-Page SEO establishes your domain's online authority and trustworthiness. I focus strictly on acquiring quality, natural-looking backlinks from relevant sources while completely avoiding spammy PBNs, link farms, or automated software.",
      deliverables: [
        "High-DA Profile Link Building",
        "Web 2.0 Tiered Link Structures",
        "Niche-relevant Directory Submissions",
        "Social Bookmarking & Citations",
        "Anchor Text Ratio Optimization",
        "Backlink Profile Cleanup & Monitoring",
      ],
    },
    {
      id: "keyword-research",
      title: "Strategic Keyword Research",
      category: "onpage",
      icon: Search,
      shortDesc: "Discover high-intent keywords based on search volume, difficulty, buyer intent, and competitor gaps.",
      fullDesc: "Effective keyword research identifies what your potential customers are actually searching for. I evaluate search volume, keyword difficulty (KD), search intent (informational, commercial, transactional), and target high-converting opportunities.",
      deliverables: [
        "High-intent long-tail keyword discovery",
        "Search intent classification & mapping",
        "Keyword difficulty & volume analysis",
        "Competitor keyword gap analysis",
        "Primary & secondary keyword mapping",
      ],
    },
    {
      id: "competitor-analysis",
      title: "SEO Competitor Analysis",
      category: "local",
      icon: BarChart2,
      shortDesc: "Deep-dive analysis of top organic competitors to reverse-engineer backlink profiles and content gaps.",
      fullDesc: "Analyze why your competitors are outranking you and uncover their exact SEO strategies. I inspect competitor backlink sources, targeted keywords, content depth, and technical advantages to build your winning SEO playbook.",
      deliverables: [
        "Competitor backlink profile analysis",
        "Keyword overlap & content gap identification",
        "Serp features & ranking positions audit",
        "Competitor technical structure benchmarking",
      ],
    },
    {
      id: "seo-audit",
      title: "Comprehensive SEO Audit",
      category: "technical",
      icon: ShieldCheck,
      shortDesc: "In-depth audit covering technical health, on-page factors, backlink quality, and action plan.",
      fullDesc: "A complete health check of your website to identify critical errors preventing higher rankings. You receive an actionable, prioritized roadmap outlining what needs to be fixed immediately for fast SEO results.",
      deliverables: [
        "Technical & crawlability breakdown",
        "On-page metadata & content audit",
        "Backlink toxicity & penalty risk check",
        "Prioritized SEO fix recommendation report",
      ],
    },
    {
      id: "local-seo",
      title: "Local SEO & Citation Building",
      category: "local",
      icon: MapPin,
      shortDesc: "Optimize Google Business Profile, NAP consistency, and local citations for map pack rankings.",
      fullDesc: "Dominating local search results is crucial for location-based businesses. I optimize Google Business Profiles (GBP), build consistent Name-Address-Phone (NAP) citations across local directories, and target location-based keywords.",
      deliverables: [
        "Google Business Profile (GBP) optimization",
        "NAP consistency check across web directories",
        "Local business citation building",
        "Location keyword & landing page targeting",
      ],
    },
    {
      id: "monthly-management",
      title: "Monthly SEO Management & Reporting",
      category: "local",
      icon: Layers,
      shortDesc: "Ongoing SEO optimization, Google Search Console monitoring, rank tracking, and monthly growth reports.",
      fullDesc: "Continuous monthly SEO management ensures your organic growth keeps scaling while defending existing rankings against search engine algorithm updates.",
      deliverables: [
        "Weekly Google Search Console monitoring",
        "Keyword rank position tracking",
        "Monthly organic traffic & conversion report",
        "Continuous backlink & technical health monitoring",
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
            <Wrench className="w-4 h-4 text-[#2A835F]" />
            <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">Expertise & Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
            Core <span className="dark:text-[#8BBB92] text-[#2A835F]">SEO Services</span>
          </h2>
          <p className="mt-4 dark:text-gray-300 text-gray-700 text-base sm:text-lg">
            Practical, data-backed search engine optimization strategies tailored for sustainable long-term rankings.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Services" },
              { id: "technical", label: "Technical SEO" },
              { id: "onpage", label: "On-Page & Keywords" },
              { id: "offpage", label: "Off-Page & Links" },
              { id: "local", label: "Local & Strategy" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#2A835F] text-white shadow-lg shadow-[#2A835F]/30 border border-[#8BBB92]/50"
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
                className="glass-card rounded-3xl p-6 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 flex flex-col justify-between group hover:border-[#2A835F]/50 shadow-md"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl dark:bg-[#12544F] bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 flex items-center justify-center dark:text-[#8BBB92] text-[#2A835F] mb-5 group-hover:bg-[#2A835F] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white text-[#092328] mb-2 group-hover:text-[#2A835F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm dark:text-gray-300 text-gray-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-2.5 px-4 rounded-xl dark:bg-[#092328]/80 bg-[#f0f7f5] border dark:border-[#2A835F]/30 border-emerald-600/20 text-xs font-semibold dark:text-[#8BBB92] text-[#2A835F] hover:bg-[#2A835F] hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <span>View Deliverables</span>
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
                <span className="text-xs dark:text-[#8BBB92] text-[#2A835F] uppercase font-semibold tracking-wider">Service Scope Breakdown</span>
              </div>
            </div>

            <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <h4 className="text-sm font-bold dark:text-white text-[#092328] uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#2A835F]" /> Key Deliverables & Included Tasks:
            </h4>

            <div className="space-y-2.5 mb-8">
              {selectedService.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl dark:bg-[#12544F]/50 bg-[#f0f7f5] border dark:border-[#8BBB92]/15 border-emerald-600/20">
                  <div className="w-2 h-2 rounded-full bg-[#2A835F]" />
                  <span className="text-sm dark:text-gray-200 text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="btn-secondary px-5 py-2.5 rounded-xl text-xs font-semibold"
              >
                Close Window
              </button>
              <a
                href="#audit-form"
                onClick={() => setSelectedService(null)}
                className="btn-primary px-5 py-2.5 rounded-xl text-xs font-bold"
              >
                Request This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
