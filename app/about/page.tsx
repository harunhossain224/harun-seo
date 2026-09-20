import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  User,
  ShieldCheck,
  Building2,
  MapPin,
  Mail,
  Phone,
  Award,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  CheckCircle,
  Briefcase,
  FileCheck,
  Sparkles,
  Search,
  BarChart3,
  Globe,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Md. Harun or Roshid | Senior SEO Executive",
  description:
    "Discover the career, expertise, and SEO methodology of Md. Harun or Roshid — SEO Executive at ScaleUP Ads Agency with 5+ years of experience in Technical SEO, Link Building, and Organic Traffic Growth.",
  keywords: [
    "Md. Harun or Roshid",
    "SEO Executive",
    "About Harun SEO",
    "ScaleUP Ads Agency",
    "SEO Specialist Biography",
    "Technical SEO Expert",
    "Backlink Specialist",
  ],
};

export default function AboutPage() {
  const personalInfo = [
    { label: "Full Name", value: "Md. Harun or Roshid", icon: User },
    { label: "Official Role", value: "SEO Executive", icon: ShieldCheck },
    { label: "Company / Agency", value: "ScaleUP Ads Agency", subValue: "Joined 01 July 2025", icon: Building2 },
    { label: "SEO Experience", value: "5+ Years Practical Exp", icon: Award },
    { label: "Primary Location", value: "Dhaka, Bangladesh", icon: MapPin },
    { label: "Direct Email", value: "harunsha197@gmail.com", icon: Mail, href: "mailto:harunsha197@gmail.com" },
    { label: "WhatsApp / Phone", value: "+880 1972-835738", icon: Phone, href: "https://wa.me/8801972835738" },
  ];

  const stats = [
    { label: "Years Experience", value: "5+", icon: Award, desc: "In Technical & Off-Page SEO" },
    { label: "Websites Optimized", value: "100+", icon: Globe, desc: "Across B2B & E-Commerce" },
    { label: "Backlinks Built", value: "10k+", icon: TrendingUp, desc: "100% Ethical White-Hat Links" },
    { label: "Audit Accuracy", value: "99.8%", icon: BarChart3, desc: "Data-Driven Performance" },
  ];

  const coreSkills = [
    {
      title: "Technical Crawl & Indexing",
      description: "Diagnosing canonical loops, sitemap errors, robots.txt restrictions, page speed bottlenecks, and Core Web Vitals.",
      icon: Zap,
    },
    {
      title: "White-Hat Link Acquisition",
      description: "Acquiring high-DA niche backlinks via manual outreach, Web 2.0 authority hubs, and clean local citation networks.",
      icon: ShieldCheck,
    },
    {
      title: "Keyword & Intent Mapping",
      description: "Targeting transactional and commercial long-tail queries that convert visitors into revenue.",
      icon: Search,
    },
    {
      title: "On-Page SEO Architecture",
      description: "Structuring H1-H6 headings, schema markup, internal link silos, and click-through optimized meta titles.",
      icon: CheckCircle2,
    },
    {
      title: "Local SEO & Citations",
      description: "Building consistent NAP business listings and optimizing Google Business Profiles for local map dominance.",
      icon: MapPin,
    },
    {
      title: "Analytics & Ranking Growth",
      description: "Monitoring keywords, indexation, and traffic metrics with Google Search Console, GA4, Ahrefs, and Semrush.",
      icon: BarChart3,
    },
  ];

  const careerTimeline = [
    {
      period: "01 July 2025 — Present",
      role: "SEO Executive",
      company: "ScaleUP Ads Agency",
      desc: "Leading high-impact organic search strategy for agency clients, executing technical fixes, authority backlink campaigns, and keyword expansion.",
    },
    {
      period: "2020 — 2025 (5+ Yrs)",
      role: "Link Building & SEO Specialist",
      company: "Independent Client Campaigns & Consulting",
      desc: "Delivered customized link acquisition, local business citations, guest outreach, and technical site audits for diverse global brands.",
    },
  ];

  return (
    <main className="min-h-screen dark:bg-[#092328] bg-[#f4f8f7] dark:text-gray-100 text-[#092328] flex flex-col overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero-gradient overflow-hidden border-b dark:border-[#12544F]/40 border-emerald-600/10">
        {/* Background Lights */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] dark:bg-[#2A835F]/20 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] dark:bg-[#8BBB92]/15 bg-teal-500/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-[#12544F]/80 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 backdrop-blur-md mb-6 shadow-sm">
                <span className="text-xs sm:text-sm font-semibold dark:text-gray-200 text-gray-800">
                  SEO Executive — <strong className="dark:text-[#8BBB92] text-[#12544F]">ScaleUP Ads Agency</strong>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-[#092328] tracking-tight leading-[1.15] mb-6">
                Md. Harun or Roshid <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-[#8BBB92] dark:via-[#2A835F] dark:to-emerald-400 from-[#2A835F] via-[#12544F] to-emerald-700">
                  Senior SEO Executive
                </span>
              </h1>

              <p className="text-base sm:text-lg dark:text-gray-300 text-gray-700 max-w-2xl leading-relaxed mb-8">
                Welcome! I am an experienced SEO Executive with <strong className="dark:text-white text-[#092328] font-semibold">5+ years of career experience</strong> specializing in technical SEO, manual link building, local citations, and organic search growth for businesses worldwide.
              </p>

              {/* Quick Hero Highlights Badges */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                <span className="px-3.5 py-2 rounded-xl text-xs font-semibold dark:bg-[#12544F]/50 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 dark:text-[#8BBB92] text-[#12544F] flex items-center gap-2 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-[#2A835F]" /> 5+ Years Exp
                </span>
                <span className="px-3.5 py-2 rounded-xl text-xs font-semibold dark:bg-[#12544F]/50 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 dark:text-[#8BBB92] text-[#12544F] flex items-center gap-2 shadow-sm">
                  <Building2 className="w-4 h-4 text-[#2A835F]" /> ScaleUP Ads Agency
                </span>
                <span className="px-3.5 py-2 rounded-xl text-xs font-semibold dark:bg-[#12544F]/50 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 dark:text-[#8BBB92] text-[#12544F] flex items-center gap-2 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#2A835F]" /> 100% Ethical White-Hat
                </span>
                <span className="px-3.5 py-2 rounded-xl text-xs font-semibold dark:bg-[#12544F]/50 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 dark:text-[#8BBB92] text-[#12544F] flex items-center gap-2 shadow-sm">
                  <Globe className="w-4 h-4 text-[#2A835F]" /> 100+ Sites Rank Boosted
                </span>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/#audit-form"
                  className="btn-primary w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-3 shadow-xl group"
                >
                  <span>Request Free SEO Audit</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
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

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Backlight Aura Glow */}
                <div className="absolute -inset-4 dark:bg-gradient-to-r dark:from-[#2A835F]/40 dark:to-[#12544F]/60 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-3xl blur-2xl opacity-90"></div>

                {/* Main Card Frame */}
                <div className="relative rounded-3xl overflow-hidden border-2 dark:border-[#8BBB92]/40 border-emerald-600/30 shadow-2xl dark:bg-[#092328] bg-white group">
                  <Image
                    src="/harun-seo.png"
                    alt="Md. Harun or Roshid - Senior SEO Executive"
                    width={600}
                    height={750}
                    priority
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t dark:from-[#092328] dark:via-transparent from-black/50 via-transparent to-transparent opacity-85" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 dark:bg-[#092328]/95 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border dark:border-[#8BBB92]/40 border-emerald-600/30 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2A835F] to-[#12544F] flex items-center justify-center text-white font-bold text-base shadow-md">
                      5+
                    </div>
                    <div>
                      <span className="text-xs font-bold dark:text-white text-[#092328] block">Years Experience</span>
                      <span className="text-[11px] dark:text-[#8BBB92] text-[#2A835F] font-semibold">Technical & Link Building</span>
                    </div>
                  </div>

                  {/* Bottom Floating Info */}
                  <div className="absolute bottom-4 left-4 right-4 dark:bg-[#12544F]/95 bg-white/95 backdrop-blur-md p-4 rounded-2xl border dark:border-[#8BBB92]/40 border-emerald-600/30 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-extrabold dark:text-white text-[#092328]">Md. Harun or Roshid</h3>
                        <p className="text-xs dark:text-[#8BBB92] text-[#12544F] font-semibold mt-0.5">
                          SEO Executive @ ScaleUP Ads Agency
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-[#2A835F]/25 flex items-center justify-center border border-[#8BBB92]/30">
                        <ShieldCheck className="w-5 h-5 text-[#2A835F]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Metric Bar */}
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
                    <div className="text-xs font-bold dark:text-gray-200 text-gray-800">{stat.label}</div>
                    <div className="text-[11px] dark:text-gray-400 text-gray-500 font-medium">{stat.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Narrative & Bio */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Narrative Story */}
            <div className="lg:col-span-7 space-y-8">
              <div className="glass-card rounded-3xl p-6 sm:p-8 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 shadow-md">
                <h2 className="text-2xl font-extrabold dark:text-white text-[#092328] mb-4 flex items-center gap-3">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#2A835F]" />
                  Professional Background & Journey
                </h2>
                <div className="space-y-4 dark:text-gray-300 text-gray-700 leading-relaxed text-base">
                  <p>
                    I am <strong className="dark:text-white text-[#092328]">Md. Harun or Roshid</strong>, a results-oriented SEO Executive with over <span className="dark:text-[#8BBB92] text-[#2A835F] font-bold">5+ years of practical experience</span> in search engine optimization, technical web audits, and high-authority link acquisition.
                  </p>
                  <p>
                    On <strong className="dark:text-white text-[#092328] font-semibold">01 July 2025</strong>, I officially joined <span className="dark:text-[#8BBB92] text-[#2A835F] font-bold">ScaleUP Ads Agency</span> as an SEO Executive. In this capacity, I oversee client campaigns, solve complex crawling and indexing bottlenecks, conduct deep competitor keyword research, and execute white-hat link building strategies that yield sustainable search growth.
                  </p>
                  <p>
                    My core methodology centers around **Ethical White-Hat SEO**. I do not use risky PBNs or automated spam tools. Instead, every strategy is tailored around search engine guidelines, high-intent keyword targeting, site speed and technical health, and authentic outreach to secure genuine domain authority.
                  </p>
                </div>
              </div>

              {/* Career Timeline */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 shadow-md">
                <h3 className="text-xl font-bold dark:text-white text-[#092328] mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#2A835F]" />
                  Career Experience Timeline
                </h3>

                <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 dark:before:bg-[#2A835F]/40 before:bg-emerald-600/20">
                  {careerTimeline.map((item, idx) => (
                    <div key={idx} className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#2A835F] -translate-x-1/2 border-2 border-white dark:border-[#092328]" />
                      <div className="inline-block px-3 py-1 rounded-md text-[11px] font-bold dark:bg-[#2A835F]/30 bg-[#e2f1ed] dark:text-[#8BBB92] text-[#12544F] mb-1">
                        {item.period}
                      </div>
                      <h4 className="text-base font-bold dark:text-white text-[#092328]">
                        {item.role} <span className="text-[#2A835F] font-semibold">@ {item.company}</span>
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm dark:text-gray-300 text-gray-700 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Personal Data Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card rounded-3xl p-6 sm:p-8 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 shadow-md">
                <h3 className="text-xl font-bold dark:text-white text-[#092328] mb-6 flex items-center gap-2 pb-3 border-b dark:border-[#2A835F]/30 border-gray-200">
                  <FileCheck className="w-5 h-5 text-[#2A835F]" />
                  Official Profile Info
                </h3>

                <div className="space-y-3.5">
                  {personalInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 dark:bg-[#092328]/80 bg-[#f0f7f5] rounded-2xl border dark:border-[#2A835F]/20 border-emerald-600/20 flex items-center gap-3"
                      >
                        <div className="w-9 h-9 rounded-xl dark:bg-[#12544F] bg-[#e2f1ed] flex items-center justify-center text-[#2A835F] shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[11px] dark:text-gray-400 text-gray-500 font-medium block truncate">
                            {info.label}
                          </span>
                          {info.href ? (
                            <a
                              href={info.href}
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel="noopener noreferrer"
                              className="text-xs sm:text-sm font-bold dark:text-[#8BBB92] text-[#2A835F] hover:underline truncate block"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-xs sm:text-sm font-bold dark:text-white text-[#092328] truncate block">
                              {info.value} {info.subValue && <span className="text-[10px] text-[#2A835F] font-semibold block">({info.subValue})</span>}
                            </span>
                          )}
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

      {/* Core Capabilities Grid */}
      <section className="py-16 md:py-24 dark:bg-[#092328]/60 bg-[#eaf4f1] border-y dark:border-[#12544F]/40 border-emerald-600/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold dark:text-white text-[#092328] tracking-tight">
              Core SEO <span className="text-[#2A835F]">Capabilities</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base dark:text-gray-300 text-gray-700">
              Proven skills developed through 5+ years of real-world search optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="dark:bg-[#12544F]/30 bg-white p-6 rounded-2xl border dark:border-[#8BBB92]/20 border-emerald-600/20 hover:border-[#2A835F]/50 transition-all shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2A835F]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-[#2A835F]" />
                  </div>
                  <h3 className="text-base font-bold dark:text-white text-[#092328] mb-2">{skill.title}</h3>
                  <p className="text-xs sm:text-sm dark:text-gray-300 text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card rounded-3xl p-8 sm:p-12 dark:bg-[#12544F]/50 bg-white border dark:border-[#8BBB92]/30 border-emerald-600/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 dark:bg-[#2A835F]/20 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-[#092328] tracking-tight mb-4">
              Ready to Grow Organic Traffic & Rankings?
            </h2>
            <p className="dark:text-gray-300 text-gray-700 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Get in touch with Md. Harun or Roshid today for an actionable, data-backed SEO strategy.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#audit-form"
                className="btn-primary px-8 py-3.5 rounded-full font-bold text-base flex items-center gap-2 shadow-xl"
              >
                <span>Request Free SEO Audit</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </Link>
              <a
                href="https://wa.me/8801972835738"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full font-semibold text-base dark:bg-[#092328] bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/30 dark:text-white text-[#092328] hover:border-[#2A835F] transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-[#2A835F]" />
                <span>WhatsApp Harun</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
