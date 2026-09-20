"use client";

import Image from "next/image";
import Link from "next/link";
import { User, Mail, Phone, MapPin, Building2, Target, ShieldCheck, CheckCircle, ArrowRight, Award } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Harun's Profile Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Ambient Backlight */}
              <div className="absolute -inset-4 dark:bg-gradient-to-r dark:from-[#2A835F]/30 dark:to-[#12544F]/40 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 dark:border-[#8BBB92]/30 border-emerald-600/30 shadow-2xl dark:bg-[#092328] bg-white group">
                <Image
                  src="/harun-seo.png"
                  alt="Md. Harun or Roshid - SEO Executive"
                  width={500}
                  height={650}
                  priority
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlaid Gradient Tint at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t dark:from-[#092328] dark:via-transparent from-black/40 via-transparent to-transparent opacity-80" />

                {/* Overlaid Floating Badge - Experience */}
                <div className="absolute top-4 left-4 dark:bg-[#092328]/90 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border dark:border-[#8BBB92]/40 border-emerald-600/30 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2A835F] flex items-center justify-center text-white font-bold text-sm">
                    5+
                  </div>
                  <div>
                    <span className="text-xs font-bold dark:text-white text-[#092328] block">Years Experience</span>
                    <span className="text-[10px] dark:text-[#8BBB92] text-[#2A835F] font-semibold">SEO & Link Building</span>
                  </div>
                </div>

                {/* Overlaid Floating Badge - Agency */}
                <div className="absolute bottom-4 left-4 right-4 dark:bg-[#12544F]/90 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border dark:border-[#8BBB92]/30 border-emerald-600/30 shadow-xl flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold dark:text-white text-[#092328]">Md. Harun or Roshid</h4>
                    <p className="text-xs dark:text-[#8BBB92] text-[#12544F] font-medium">SEO Executive @ ScaleUP Ads Agency</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#2A835F]/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#2A835F]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-[#092328] mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-[#2A835F] animate-pulse" />
                Professional Background
              </h3>
              <div className="space-y-4 dark:text-gray-300 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  I am <strong className="dark:text-white text-[#092328] font-semibold">Md. Harun or Roshid</strong>, an SEO Executive with extensive expertise in search engine optimization, backlink building, technical SEO, keyword research, and local citation building.
                </p>
                <p>
                  With over <strong className="dark:text-[#8BBB92] text-[#2A835F] font-semibold">5+ years of total career experience</strong> in link building and SEO strategies across various client projects, I joined <strong className="dark:text-white text-[#092328] font-semibold">ScaleUP Ads Agency</strong> on 01 July 2025 to lead data-driven client campaigns and organic search expansion.
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

              {/* Link to Dedicated About Page */}
              <div className="mt-8 pt-6 border-t dark:border-[#2A835F]/30 border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold dark:text-[#8BBB92] text-[#12544F]">
                  <Award className="w-4 h-4 text-[#2A835F]" /> Verified SEO Specialist Credentials
                </div>
                <Link
                  href="/about"
                  className="btn-primary text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 group shadow-lg"
                >
                  <span>Explore Full Profile & Bio</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
