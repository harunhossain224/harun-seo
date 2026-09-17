"use client";

import { Briefcase, Building2, Calendar, CheckSquare, ShieldCheck, Award } from "lucide-react";

export default function ExperienceSection() {
  const responsibilities = [
    "Technical SEO analysis and crawl error fixes",
    "On-page metadata and structural heading optimization",
    "Comprehensive keyword research & competitor strategy",
    "High-authority backlink building (Web 2.0, guest posts, citations)",
    "Local SEO, NAP consistency & citation building",
    "Google Search Console & indexing issue analysis",
    "XML Sitemap creation & robots.txt optimization",
    "Canonicalization tags & internal link architecture",
    "Image alt text optimization & Core Web Vitals audits",
    "Monthly client SEO progress updates & analytics reporting",
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-section-base relative scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 mb-4">
            <Briefcase className="w-4 h-4 text-[#2A835F]" />
            <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">Career Timeline & Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
            Professional <span className="dark:text-[#8BBB92] text-[#2A835F]">Experience</span>
          </h2>
          <p className="mt-4 dark:text-gray-300 text-gray-700 text-base sm:text-lg">
            Proven track record of technical precision and ethical backlink growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Current Role Highlight Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/30 border-emerald-600/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2A835F]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 text-xs font-bold mb-6 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Current Position
              </div>

              <h3 className="text-2xl font-bold dark:text-white text-[#092328] mb-1">SEO Executive</h3>
              <p className="text-base font-semibold dark:text-[#8BBB92] text-[#2A835F] flex items-center gap-2 mb-6">
                <Building2 className="w-4 h-4 text-[#2A835F]" /> ScaleUP Ads Agency
              </p>

              <div className="space-y-4 text-xs sm:text-sm dark:text-gray-300 text-gray-700 border-t border-b dark:border-[#2A835F]/30 border-gray-200 py-6 mb-6">
                <div className="flex items-center justify-between">
                  <span className="dark:text-gray-400 text-gray-600 font-medium">Agency Joining Date:</span>
                  <span className="dark:text-white text-[#092328] font-semibold flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#2A835F]" /> 01 July 2025
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="dark:text-gray-400 text-gray-600 font-medium">Total SEO Experience:</span>
                  <span className="dark:text-[#8BBB92] text-[#2A835F] font-bold flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#2A835F]" /> 5+ Years Total Career
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="dark:text-gray-400 text-gray-600 font-medium">Primary Focus:</span>
                  <span className="dark:text-white text-[#092328] font-semibold">Technical SEO & Backlinks</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl dark:bg-[#092328]/80 bg-[#f0f7f5] border dark:border-[#8BBB92]/20 border-emerald-600/20 text-xs dark:text-gray-300 text-gray-700 leading-relaxed">
                <strong className="dark:text-[#8BBB92] text-[#12544F]">Experience Breakdown:</strong> 5+ years of total hands-on experience in link building, technical SEO, and client projects prior to joining ScaleUP Ads Agency as an SEO Executive on 01 July 2025.
              </div>
            </div>
          </div>

          {/* Key Responsibilities Checklist */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 shadow-md">
              <h3 className="text-xl font-bold dark:text-white text-[#092328] mb-6 pb-4 border-b dark:border-[#2A835F]/30 border-gray-200 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-[#2A835F]" />
                Daily SEO Responsibilities & Audit Protocols
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl dark:bg-[#12544F]/40 bg-[#f0f7f5] border dark:border-[#8BBB92]/15 border-emerald-600/20 flex items-start gap-3 hover:border-[#2A835F]/35 transition-all"
                  >
                    <div className="w-5 h-5 rounded-md dark:bg-[#2A835F]/40 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2A835F]" />
                    </div>
                    <span className="text-xs sm:text-sm dark:text-gray-200 text-gray-800 font-medium leading-tight">{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
