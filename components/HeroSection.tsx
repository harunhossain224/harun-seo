"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, TrendingUp, Search, Award, MessageCircle, BarChart3, Globe, Sparkles, Bot, Layers, CheckCircle } from "lucide-react";

export default function HeroSection() {
  const searchPlatforms = [
    { name: "Google Search", badge: "SERP Top 1" },
    { name: "Google Maps", badge: "3-Pack Booster" },
    { name: "ChatGPT Search", badge: "AI Citations" },
    { name: "Google Gemini", badge: "AIO Optimization" },
    { name: "Perplexity AI", badge: "Verified Answers" },
    { name: "Bing AI", badge: "Copilot Indexing" },
  ];

  const cmsPlatforms = [
    "WordPress SEO",
    "Shopify SEO",
    "Webflow SEO",
    "Wix SEO",
    "Next.js / Custom CMS",
  ];

  const highlights = [
    "AI-First SEO Strategy & Generative Engine Optimization (GEO)",
    "Local SEO Booster & Google Maps 3-Pack Dominance",
    "CMS SEO Expert (WordPress, Shopify, Webflow, Wix)",
    "Semantic Topical Authority & White-Hat Link Building",
  ];

  const stats = [
    { label: "Years Hands-On SEO", value: "5+", icon: Award },
    { label: "Websites Ranked", value: "100+", icon: Globe },
    { label: "Organic Growth Surge", value: "+340%", icon: TrendingUp },
    { label: "Audit Accuracy Rate", value: "99.8%", icon: BarChart3 },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-gradient">
      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] dark:bg-[#2A835F]/15 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] dark:bg-[#8BBB92]/10 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column: Replicating Sourov's exact hero greeting */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-[#12544F]/80 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2A835F] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold dark:text-gray-200 text-gray-800">
                SEO Executive — <strong className="dark:text-[#8BBB92] text-[#12544F]">ScaleUP Ads Agency</strong>
              </span>
            </div>

            {/* Sourov's Signature "Hello, I'm" Greeting & Headline */}
            <div className="mb-4">
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold dark:text-[#8BBB92] text-[#2A835F] tracking-wide block">
                Hello, I&apos;m
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black dark:text-white text-[#092328] tracking-tight leading-[1.08] mt-1">
                Md. Harun or Roshid
              </h1>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-bold dark:text-emerald-300 text-[#12544F] mt-2">
                (Harun Sha / Harun SEO)
              </span>
            </div>

            {/* Top-Ranked SEO Expert In Bangladesh Sub-headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold dark:text-gray-100 text-[#092328] tracking-tight mb-5 flex items-center gap-2 flex-wrap">
              <span>Top-Ranked SEO Expert in Bangladesh</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#2A835F] text-white font-bold uppercase tracking-wider">
                Google #1
              </span>
            </h2>

            {/* Sourov style main mission statement */}
            <p className="text-base sm:text-lg dark:text-gray-300 text-gray-700 max-w-2xl leading-relaxed mb-6">
              Helping brands and businesses rank higher on <strong className="dark:text-white text-[#092328]">Google Search</strong>, <strong className="dark:text-white text-[#092328]">Google Maps</strong>, and emerging AI platforms like <strong className="dark:text-[#8BBB92] text-[#12544F]">ChatGPT, Google Gemini, Perplexity, and Bing AI</strong> through ethical, data-driven, and performance-focused SEO built for modern search and real business growth.
            </p>

            {/* Platforms Bar */}
            <div className="mb-8 w-full max-w-2xl">
              <div className="text-xs uppercase font-bold tracking-wider dark:text-[#8BBB92] text-[#12544F] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2A835F]" /> Search Engines &amp; AI Discovery Platforms:
              </div>
              <div className="flex flex-wrap gap-2">
                {searchPlatforms.map((platform, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl dark:bg-[#12544F]/50 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 text-xs font-semibold shadow-sm"
                  >
                    <span className="dark:text-white text-[#092328]">{platform.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#2A835F]/20 text-[#2A835F] dark:text-[#8BBB92] font-bold">
                      {platform.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 w-full max-w-xl">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/15 border-emerald-600/20 px-3.5 py-2.5 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#2A835F] shrink-0" />
                  <span className="text-xs sm:text-sm dark:text-gray-200 text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CMS Platforms */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-medium dark:text-gray-300 text-gray-700">
              <span className="font-bold dark:text-[#8BBB92] text-[#12544F] flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> CMS Expertise:
              </span>
              {cmsPlatforms.map((cms, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg dark:bg-[#092328]/70 bg-emerald-50 border dark:border-[#2A835F]/30 border-emerald-600/20 text-[11px]"
                >
                  {cms}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#audit-form"
                className="btn-primary w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-3 shadow-xl group"
              >
                <span>Request Free SEO Audit</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/8801972835738"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-base flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 text-[#2A835F]" />
                <span>WhatsApp Direct (+880 1972-835738)</span>
              </a>
            </div>
          </div>

          {/* Right Card / Visual Widget */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/25 border-emerald-600/20 shadow-2xl">
              {/* Header Badge in Card */}
              <div className="flex items-center justify-between pb-6 border-b dark:border-[#2A835F]/30 border-gray-200 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#2A835F] shadow-md shrink-0 bg-gray-100 dark:bg-[#092328]">
                    <Image
                      src="/harun-seo.png"
                      alt="Harun SEO - Md Harun or Roshid (Harun Sha) Best SEO Specialist in Bangladesh"
                      title="Harun SEO | Md Harun or Roshid (Harun Sha) - Top SEO Consultant"
                      width={140}
                      height={140}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold dark:text-white text-[#092328]">Md. Harun or Roshid</h3>
                    <p className="text-xs dark:text-[#8BBB92] text-[#12544F] font-semibold">Harun Sha (Harun SEO)</p>
                    <span className="text-[11px] dark:text-gray-300 text-gray-600">Senior SEO Executive @ ScaleUP Ads</span>
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 dark:bg-[#2A835F]/30 bg-[#e2f1ed] rounded-2xl border dark:border-[#8BBB92]/30 border-emerald-600/20 shrink-0">
                  <Bot className="w-5 sm:w-6 h-5 sm:h-6 text-[#2A835F]" />
                </div>
              </div>

              {/* Sample SEO Growth Widget Visual */}
              <div className="space-y-4 mb-6">
                <div className="dark:bg-[#092328]/80 bg-[#f0f7f5] p-4 rounded-2xl border dark:border-[#2A835F]/30 border-emerald-600/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold dark:text-gray-300 text-gray-700 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#2A835F]" /> AI &amp; Organic Search Traffic Growth
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-md">+340%</span>
                  </div>
                  <div className="w-full dark:bg-[#12544F]/50 bg-emerald-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#2A835F] to-emerald-400 h-full w-[90%] rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="dark:bg-[#092328]/80 bg-[#f0f7f5] p-4 rounded-2xl border dark:border-[#2A835F]/30 border-emerald-600/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold dark:text-gray-300 text-gray-700 flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-[#2A835F]" /> Google Top 3 &amp; AI Citation Keywords
                    </span>
                    <span className="text-xs font-bold dark:text-[#8BBB92] text-[#12544F] dark:bg-[#2A835F]/20 bg-[#e2f1ed] px-2 py-0.5 rounded-md">95+ Top Terms</span>
                  </div>
                  <div className="w-full dark:bg-[#12544F]/50 bg-emerald-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#12544F] via-[#2A835F] to-emerald-400 h-full w-[94%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Verified Status Tag */}
              <div className="p-3.5 dark:bg-[#12544F]/60 bg-[#e2f1ed] rounded-xl border dark:border-[#8BBB92]/20 border-emerald-600/20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2A835F]/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#2A835F]" />
                </div>
                <p className="text-xs dark:text-gray-300 text-gray-800">
                  <strong className="dark:text-white text-[#092328] font-semibold">100% White-Hat Systems:</strong> No shortcuts, no PBNs. Sustainable SEO compounding over time for long-term search dominance.
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
