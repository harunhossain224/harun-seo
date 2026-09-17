"use client";

import { Cpu, Search, Activity, Globe, Link2, FileText, Zap, Compass, Eye } from "lucide-react";

export default function ToolsSection() {
  const tools = [
    {
      name: "Google Search Console",
      purpose: "Indexing diagnostics, search performance & technical error monitoring.",
      badge: "Core Technical",
      icon: Search,
    },
    {
      name: "Google Analytics 4 (GA4)",
      purpose: "Organic traffic metrics, conversion tracking & user behavior analysis.",
      badge: "Analytics",
      icon: Activity,
    },
    {
      name: "Google Business Profile",
      purpose: "Local SEO management, GBP verification & map pack rankings.",
      badge: "Local SEO",
      icon: Globe,
    },
    {
      name: "Ahrefs",
      purpose: "Deep backlink audit, competitor profile breakdown & domain authority.",
      badge: "Backlinks & Competitor",
      icon: Link2,
    },
    {
      name: "Semrush",
      purpose: "Keyword difficulty research, search intent mapping & rank tracking.",
      badge: "Keyword Research",
      icon: FileText,
    },
    {
      name: "Screaming Frog",
      purpose: "Desktop website crawler for 404 errors, canonicals & sitemaps.",
      badge: "Audit Crawler",
      icon: Cpu,
    },
    {
      name: "PageSpeed Insights",
      purpose: "Core Web Vitals analysis, page load speed & performance optimization.",
      badge: "Performance",
      icon: Zap,
    },
    {
      name: "Google Keyword Planner",
      purpose: "Commercial search volume & paid/organic keyword forecasting.",
      badge: "Search Intent",
      icon: Compass,
    },
    {
      name: "Microsoft Clarity",
      purpose: "Heatmaps & session recordings for UX & conversion optimization.",
      badge: "UX & Behavior",
      icon: Eye,
    },
  ];

  return (
    <section id="tools" className="py-20 md:py-28 bg-section-gradient relative scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 mb-4">
            <Cpu className="w-4 h-4 text-[#2A835F]" />
            <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">Tech Stack & Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
            SEO Tools & <span className="dark:text-[#8BBB92] text-[#2A835F]">Technologies Used</span>
          </h2>
          <p className="mt-4 dark:text-gray-300 text-gray-700 text-base sm:text-lg">
            Industry-standard SEO audit and analytics tools for maximum precision.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 flex flex-col justify-between hover:border-[#2A835F]/50 transition-all group shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl dark:bg-[#12544F] bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 flex items-center justify-center dark:text-[#8BBB92] text-[#2A835F] group-hover:bg-[#2A835F] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold dark:text-[#8BBB92] text-[#12544F] dark:bg-[#2A835F]/20 bg-[#e2f1ed] px-3 py-1 rounded-full border dark:border-[#8BBB92]/25 border-emerald-600/20">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold dark:text-white text-[#092328] mb-2 group-hover:text-[#2A835F] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs dark:text-gray-300 text-gray-600 leading-relaxed">
                    {tool.purpose}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t dark:border-[#2A835F]/20 border-gray-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2A835F]" />
                  <span className="text-[11px] dark:text-gray-400 text-gray-600 font-semibold">Practical / Professional Level Mastery</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
