"use client";

import { ShieldAlert, CheckCircle2, Zap } from "lucide-react";

export default function ProblemsSection() {
  const problems = [
    {
      problem: "Low Google Rankings & Visibility",
      symptom: "Website buried on page 2 or lower, failing to attract relevant search buyers.",
      solution: "Comprehensive content gap analysis & high-intent keyword target mapping.",
    },
    {
      problem: "Crawling & Indexing Failures",
      symptom: "New pages or blogs aren't indexed by Google Search Console.",
      solution: "Sitemap structure fix, robots.txt update & canonical URL alignment.",
    },
    {
      problem: "Weak Backlink Profile & Authority",
      symptom: "Low Domain Rating/Authority compared to main competitors.",
      solution: "Manual, high-quality backlink building (Web 2.0, citations, profile links).",
    },
    {
      problem: "Poor Local Search Presence",
      symptom: "Missing out on nearby customers in local Google Map Pack results.",
      solution: "Google Business Profile optimization & NAP consistency across citations.",
    },
    {
      problem: "Competitors Outranking Website",
      symptom: "Competitors capturing all organic leads and top keyword spots.",
      solution: "In-depth competitor backlink & keyword overlap reverse engineering.",
    },
    {
      problem: "Missing or Unoptimized Meta Data",
      symptom: "Low organic Click-Through Rate (CTR) from search engine result pages.",
      solution: "Compelling meta titles, meta descriptions & H1-H3 header tags.",
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-section-base relative scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 mb-4">
            <Zap className="w-4 h-4 text-[#2A835F]" />
            <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">SEO Pain Points Solved</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
            Common Client <span className="dark:text-[#8BBB92] text-[#2A835F]">Problems I Solve</span>
          </h2>
          <p className="mt-4 dark:text-gray-300 text-gray-700 text-base sm:text-lg">
            Turn technical SEO challenges into long-term organic growth opportunities.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 flex flex-col justify-between hover:border-[#2A835F]/40 transition-all shadow-md"
            >
              <div>
                {/* Problem Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b dark:border-[#2A835F]/20 border-gray-200">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold dark:text-white text-[#092328] leading-snug">
                    {item.problem}
                  </h3>
                </div>

                <p className="text-xs dark:text-gray-400 text-gray-600 mb-6 italic">
                  "{item.symptom}"
                </p>

                {/* Solution Box */}
                <div className="dark:bg-[#12544F]/40 bg-[#f0f7f5] p-4 rounded-2xl border dark:border-[#8BBB92]/20 border-emerald-600/20">
                  <div className="flex items-center gap-2 text-xs font-bold dark:text-[#8BBB92] text-[#12544F] mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#2A835F]" />
                    <span>Proven SEO Fix:</span>
                  </div>
                  <p className="text-xs dark:text-gray-200 text-gray-800 font-medium leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
