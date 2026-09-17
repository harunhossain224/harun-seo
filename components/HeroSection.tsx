"use client";

import { ArrowRight, CheckCircle2, TrendingUp, Search, Award, MessageCircle, BarChart3, Globe } from "lucide-react";

export default function HeroSection() {
  const highlights = [
    "Technical Crawl & Indexing Fixes",
    "Manual High-DA Link Building",
    "Keyword & Competitor Strategy",
    "Local SEO & Citation Building",
  ];

  const stats = [
    { label: "Years Experience", value: "5+", icon: Award },
    { label: "Websites Optimized", value: "100+", icon: Globe },
    { label: "High-Quality Backlinks", value: "10k+", icon: TrendingUp },
    { label: "Audit Accuracy Rate", value: "99.8%", icon: BarChart3 },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-gradient">
      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] dark:bg-[#2A835F]/15 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] dark:bg-[#8BBB92]/10 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-[#12544F]/80 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2A835F] animate-pulse" />
              <span className="text-xs sm:text-sm font-medium dark:text-gray-200 text-gray-800">
                SEO Executive — <strong className="dark:text-[#8BBB92] text-[#12544F]">ScaleUP Ads Agency</strong>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-[#092328] tracking-tight leading-[1.15] mb-6">
              Drive Sustainable <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-[#8BBB92] dark:via-[#2A835F] dark:to-emerald-400 from-[#2A835F] via-[#12544F] to-emerald-700">Organic Growth</span> & Top Rankings
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg dark:text-gray-300 text-gray-700 max-w-2xl leading-relaxed mb-8">
              Hi, I am <strong className="dark:text-white text-[#092328] font-semibold">Md. Harun or Roshid</strong>. With <span className="dark:text-[#8BBB92] text-[#12544F] font-semibold">5+ years of total SEO experience</span>, I help businesses turn search engine visibility into revenue through data-driven <span className="dark:text-[#8BBB92] text-[#12544F] font-semibold">Technical SEO</span>, ethical <span className="dark:text-[#8BBB92] text-[#12544F] font-semibold">Link Building</span>, strategic keyword research, and actionable SEO audits.
            </p>

            {/* Key Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 w-full max-w-xl">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/15 border-emerald-600/20 px-3.5 py-2.5 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#2A835F] shrink-0" />
                  <span className="text-xs sm:text-sm dark:text-gray-200 text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#audit-form"
                className="btn-primary w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-3 shadow-xl group"
              >
                <span>Get Free SEO Audit</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/8801972835738"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-base flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 text-[#2A835F]" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>

          {/* Right Card / Visual Widget */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/25 border-emerald-600/20 shadow-xl">
              {/* Header Badge in Card */}
              <div className="flex items-center justify-between pb-6 border-b dark:border-[#2A835F]/30 border-gray-200 mb-6">
                <div>
                  <h3 className="text-xl font-bold dark:text-white text-[#092328]">Md. Harun or Roshid</h3>
                  <p className="text-xs dark:text-[#8BBB92] text-[#12544F] font-semibold">SEO Specialist | 5+ Yrs Exp</p>
                </div>
                <div className="p-3 dark:bg-[#2A835F]/30 bg-[#e2f1ed] rounded-2xl border dark:border-[#8BBB92]/30 border-emerald-600/20">
                  <Search className="w-6 h-6 text-[#2A835F]" />
                </div>
              </div>

              {/* Sample SEO Growth Widget Visual */}
              <div className="space-y-4 mb-6">
                <div className="dark:bg-[#092328]/80 bg-[#f0f7f5] p-4 rounded-2xl border dark:border-[#2A835F]/30 border-emerald-600/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold dark:text-gray-300 text-gray-700">Organic Traffic Growth</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-md">+248%</span>
                  </div>
                  <div className="w-full dark:bg-[#12544F]/50 bg-emerald-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#2A835F] to-emerald-400 h-full w-[85%] rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="dark:bg-[#092328]/80 bg-[#f0f7f5] p-4 rounded-2xl border dark:border-[#2A835F]/30 border-emerald-600/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold dark:text-gray-300 text-gray-700">Google First Page Keywords</span>
                    <span className="text-xs font-bold dark:text-[#8BBB92] text-[#12544F] dark:bg-[#2A835F]/20 bg-[#e2f1ed] px-2 py-0.5 rounded-md">85+ Top 3 Terms</span>
                  </div>
                  <div className="w-full dark:bg-[#12544F]/50 bg-emerald-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#12544F] via-[#2A835F] to-emerald-400 h-full w-[92%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Verified Status Tag */}
              <div className="p-3.5 dark:bg-[#12544F]/60 bg-[#e2f1ed] rounded-xl border dark:border-[#8BBB92]/20 border-emerald-600/20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2A835F]/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#2A835F]" />
                </div>
                <p className="text-xs dark:text-gray-300 text-gray-800">
                  <strong className="dark:text-white text-[#092328] font-semibold">Strict Ethical SEO:</strong> Zero PBNs, 100% manual high-intent backlink strategies & technical compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="dark:bg-[#12544F]/40 bg-white backdrop-blur-md border dark:border-[#8BBB92]/20 border-emerald-600/20 rounded-2xl p-5 flex items-center gap-4 hover:border-[#2A835F]/40 transition-colors shadow-md"
              >
                <div className="w-12 h-12 rounded-xl dark:bg-[#2A835F]/30 bg-[#e2f1ed] flex items-center justify-center shrink-0 border dark:border-[#8BBB92]/30 border-emerald-600/20">
                  <Icon className="w-6 h-6 text-[#2A835F]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold dark:text-white text-[#092328] tracking-tight">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-medium dark:text-gray-300 text-gray-700">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
