"use client";

import { ShieldAlert, CheckCircle2, Zap, Star, Quote, ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

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

  const quickReviews = [
    {
      name: "David H. Miller",
      company: "Apex Supply (USA)",
      avatarText: "DM",
      avatarColor: "from-blue-600 to-emerald-600",
      rating: 5,
      solvedTag: "Indexing & Crawl Loops Solved",
      quote: "Our 3,000+ unindexed product pages were completely resolved in 4 weeks. Organic impressions surged +180% and sales doubled.",
      result: "+180% Organic Impressions",
    },
    {
      name: "Sarah Jenkins",
      company: "CloudSync (UK)",
      avatarText: "SJ",
      avatarColor: "from-purple-600 to-teal-600",
      rating: 5,
      solvedTag: "Competitor Outranking Solved",
      quote: "Harun helped us jump from page 3 straight into Google UK's Top 3 for our 14 most valuable commercial SaaS keywords.",
      result: "Top 3 for 14 Core Keywords",
    },
    {
      name: "Marcus Vance",
      company: "Vance Dental (Australia)",
      avatarText: "MV",
      avatarColor: "from-emerald-600 to-[#12544F]",
      rating: 5,
      solvedTag: "Local Map Pack Domination",
      quote: "We went from invisible to #1 across Sydney for high-ticket patient searches. Inbound consultation calls tripled in four months.",
      result: "3x Inbound Patient Calls",
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-section-base relative scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 mb-4">
            <Zap className="w-4 h-4 text-[#2A835F]" />
            <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">
              SEO Pain Points Solved
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
            Common Client <span className="dark:text-[#8BBB92] text-[#2A835F]">Problems I Solve</span>
          </h2>
          <p className="mt-4 dark:text-gray-300 text-gray-700 text-base sm:text-lg">
            Turn technical SEO challenges into long-term organic growth opportunities.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                  &ldquo;{item.symptom}&rdquo;
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

        {/* Real Client Proof on These Problems (Fills the space beautifully!) */}
        <div className="mt-8 pt-10 border-t dark:border-[#12544F]/60 border-emerald-600/15">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-[#12544F]/70 bg-[#e2f1ed] text-[#12544F] dark:text-[#8BBB92] text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#2A835F]" /> Real Client Verifications
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold dark:text-white text-[#092328]">
                Proven Client Outcomes <span className="dark:text-[#8BBB92] text-[#2A835F]">After Fixing These Issues</span>
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold dark:text-gray-300 text-gray-600">
              <ShieldCheck className="w-4 h-4 text-[#2A835F]" />
              <span>100% Ethical White-Hat Results</span>
            </div>
          </div>

          {/* 3 Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickReviews.map((rev, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/25 border-emerald-600/20 flex flex-col justify-between hover:border-[#2A835F]/60 transition-all shadow-lg group"
              >
                <div>
                  {/* Top Bar: Avatar & Rating */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${rev.avatarColor} text-white font-extrabold text-xs flex items-center justify-center shadow-md`}
                      >
                        {rev.avatarText}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm dark:text-white text-[#092328]">{rev.name}</h4>
                        <p className="text-[11px] dark:text-gray-400 text-gray-600">{rev.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Problem Solved Badge */}
                  <div className="inline-block px-2.5 py-1 rounded-md text-[10px] font-semibold dark:bg-[#092328]/80 bg-[#f0f7f5] dark:text-[#8BBB92] text-[#12544F] border dark:border-[#8BBB92]/20 border-emerald-600/20 mb-3">
                    {rev.solvedTag}
                  </div>

                  {/* Quote */}
                  <p className="text-xs dark:text-gray-300 text-gray-700 leading-relaxed italic mb-4">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                {/* Outcome Pill */}
                <div className="pt-3 border-t dark:border-white/10 border-gray-100 flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{rev.result}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-8 p-5 rounded-2xl dark:bg-[#092328]/80 bg-[#e2f1ed]/60 border dark:border-[#2A835F]/30 border-emerald-600/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm dark:text-gray-300 text-gray-700 text-center sm:text-left">
              Facing any of these technical SEO or ranking bottlenecks on your domain?
            </p>
            <a
              href="#audit-form"
              className="btn-primary text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 shrink-0 shadow-md"
            >
              <span>Get Free Diagnostic Audit</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
