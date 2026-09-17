"use client";

import { User, Mail, Phone, MapPin, Building2, Calendar, Target, ShieldCheck, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const infoCards = [
    { label: "Full Name", value: "Md. Harun or Roshid", icon: User },
    { label: "Job Title", value: "SEO Executive", icon: ShieldCheck },
    { label: "Company / Agency", value: "ScaleUP Ads Agency", icon: Building2 },
    { label: "Location", value: "Dhaka, Bangladesh", icon: MapPin },
    { label: "Email", value: "harunsha197@gmail.com", icon: Mail, isLink: "mailto:harunsha197@gmail.com" },
    { label: "Phone / WhatsApp", value: "+880 1972-835738", icon: Phone, isLink: "https://wa.me/8801972835738" },
  ];

  const corePillars = [
    { title: "Technical Precision", desc: "Resolving crawl errors, indexing issues, canonical tags, sitemaps, and robots.txt optimizations." },
    { title: "Quality Link Building", desc: "Strictly acquiring ethical, high-authority backlink profiles through Web 2.0, citations, and manual outreach." },
    { title: "Search Intent Keywords", desc: "Targeting high-converting long-tail and commercial search queries tailored for B2B & B2C." },
    { title: "Continuous Monitoring", desc: "Data-driven tracking using GSC, GA4, Ahrefs, and Semrush to sustain long-term organic growth." },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-section-base scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 mb-4">
            <User className="w-4 h-4 text-[#2A835F]" />
            <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">About The Specialist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
            Meet <span className="dark:text-[#8BBB92] text-[#2A835F]">Md. Harun or Roshid</span>
          </h2>
          <p className="mt-4 dark:text-gray-300 text-gray-700 text-base sm:text-lg leading-relaxed">
            Dedicated SEO Executive driving scalable search engine rankings and sustainable organic traffic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-[#092328] mb-4 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#2A835F]" />
                Professional Background
              </h3>
              <div className="space-y-4 dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  I am <strong className="dark:text-white text-[#092328] font-semibold">Md. Harun or Roshid</strong>, an SEO Executive with extensive expertise in search engine optimization, backlink building, technical SEO, keyword research, and local citation building.
                </p>
                <p>
                  With over <strong className="dark:text-[#8BBB92] text-[#2A835F] font-semibold">5+ years of total career experience</strong> in link building and SEO strategies across various projects, I joined <strong className="dark:text-white text-[#092328] font-semibold">ScaleUP Ads Agency</strong> on 01 July 2025 to lead data-driven client campaigns and organic search expansion.
                </p>
                <p>
                  My methodology combines technical site accuracy, strategic keyword targeting, high-quality link building, content optimization, local citations, and continuous search performance tracking to help businesses strengthen online authority.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="mt-8 pt-6 border-t dark:border-[#2A835F]/30 border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {corePillars.map((pillar, idx) => (
                  <div key={idx} className="dark:bg-[#092328]/60 bg-[#f0f7f5] p-4 rounded-2xl border dark:border-[#8BBB92]/15 border-emerald-600/20">
                    <h4 className="text-sm font-bold dark:text-[#8BBB92] text-[#12544F] mb-1 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2A835F]" /> {pillar.title}
                    </h4>
                    <p className="text-xs dark:text-gray-300 text-gray-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Personal Details Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-3xl p-6 sm:p-8 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 shadow-md">
              <h3 className="text-xl font-bold dark:text-white text-[#092328] mb-6 pb-3 border-b dark:border-[#2A835F]/30 border-gray-200 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#2A835F]" />
                Professional Summary
              </h3>

              <div className="space-y-3.5">
                {infoCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3.5 dark:bg-[#092328]/80 bg-[#f0f7f5] rounded-2xl border dark:border-[#2A835F]/20 border-emerald-600/20 hover:border-[#2A835F]/40 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl dark:bg-[#12544F] bg-[#e2f1ed] flex items-center justify-center dark:text-[#8BBB92] text-[#2A835F]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs dark:text-gray-400 text-gray-600 block font-medium">{card.label}</span>
                          {card.isLink ? (
                            <a
                              href={card.isLink}
                              target={card.isLink.startsWith("http") ? "_blank" : undefined}
                              rel="noopener noreferrer"
                              className="text-sm font-semibold dark:text-[#8BBB92] text-[#2A835F] hover:underline"
                            >
                              {card.value}
                            </a>
                          ) : (
                            <span className="text-sm font-semibold dark:text-white text-[#092328]">{card.value}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
