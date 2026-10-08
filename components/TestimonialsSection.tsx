"use client";

import { useState } from "react";
import { Star, Quote, ShieldCheck, CheckCircle2, TrendingUp, Building2, MapPin, Sparkles } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatarText: string;
  avatarColor: string;
  rating: number;
  projectType: string;
  resultBadge: string;
  feedback: string;
  verified: boolean;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "David H. Miller",
      role: "Founder & CMO",
      company: "Apex Supply & Freight",
      location: "Texas, United States",
      avatarText: "DM",
      avatarColor: "from-blue-600 to-emerald-600",
      rating: 5,
      projectType: "Technical SEO & Indexing",
      resultBadge: "+180% Organic Impressions | 100% Indexing",
      feedback:
        "We were stuck with 3,000+ unindexed product URLs after a complex CMS migration. Harun performed an in-depth technical audit, eliminated our canonical redirect loops, and fixed our sitemaps. Within 6 weeks, our commercial impressions jumped 180% and non-brand sales doubled. Easily the most skilled Technical SEO specialist we have hired.",
      verified: true,
    },
    {
      id: "2",
      name: "Sarah Jenkins",
      role: "Head of Growth",
      company: "CloudSync Software",
      location: "London, United Kingdom",
      avatarText: "SJ",
      avatarColor: "from-purple-600 to-teal-600",
      rating: 5,
      projectType: "White-Hat Link Building",
      resultBadge: "Top 3 Rank for 14 Core Keywords",
      feedback:
        "Finding an ethical link builder who doesn't resort to spammy PBNs or link farms is exceedingly rare. Harun manually acquired high-DA contextual links that moved our primary commercial keywords from page 3 directly into the Google UK Top 3. Transparent communication and spotless weekly reports.",
      verified: true,
    },
    {
      id: "3",
      name: "Marcus Vance",
      role: "Managing Director",
      company: "Vance Dental & Aesthetics",
      location: "Sydney, Australia",
      avatarText: "MV",
      avatarColor: "from-emerald-600 to-[#12544F]",
      rating: 5,
      projectType: "Local SEO & Google Business Profile",
      resultBadge: "3x Inbound Patient Inquiries | #1 Map Pack",
      feedback:
        "Harun transformed our local search presence completely. From being practically invisible on Google Maps, we now consistently dominate the Google 3-Pack across Sydney for high-ticket patient searches. Our inbound consultation calls tripled in four months. A true SEO professional.",
      verified: true,
    },
    {
      id: "4",
      name: "Liam O'Connor",
      role: "Operations Director",
      company: "Elevate Media Partners",
      location: "California, United States",
      avatarText: "LO",
      avatarColor: "from-amber-600 to-emerald-600",
      rating: 5,
      projectType: "White-Label Agency SEO",
      resultBadge: "99.8% Client Retention on SEO Retainers",
      feedback:
        "We regularly white-label Harun for our US marketing agency's client SEO deliverables. His grasp of Core Web Vitals, crawl budget diagnostics, and Search Console errors is exceptional. Every audit he delivers is thorough, client-ready, and brings verifiable traffic results.",
      verified: true,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-section-gradient relative overflow-hidden scroll-mt-20">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] dark:bg-[#2A835F]/10 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] dark:bg-[#12544F]/20 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#2A835F]" />
            <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">
              Client Reviews & Social Proof
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
            Trusted by Business Owners & <span className="dark:text-[#8BBB92] text-[#2A835F]">Global Agencies</span>
          </h2>

          <p className="mt-4 dark:text-gray-300 text-gray-700 text-base sm:text-lg leading-relaxed">
            See how data-driven Technical SEO, ethical link acquisition, and keyword mapping deliver measurable revenue and top Google rankings.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 py-2 px-5 rounded-full dark:bg-[#092328]/80 bg-white border dark:border-[#2A835F]/30 border-emerald-600/20 shadow-md">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold dark:text-white text-[#092328]">
              5.0 / 5.0 Star Rating
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
            <span className="text-xs sm:text-sm font-medium dark:text-gray-300 text-gray-600">
              Across 100+ Optimized Websites
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 dark:bg-[#12544F]/35 bg-white border dark:border-[#8BBB92]/25 border-emerald-600/20 hover:border-[#2A835F]/60 dark:hover:border-[#8BBB92]/50 hover:shadow-2xl hover:shadow-[#2A835F]/10 relative group"
            >
              {/* Top Row: Client Info & Avatar */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    {/* Avatar Pill */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.avatarColor} text-white font-extrabold text-sm flex items-center justify-center shadow-md border border-white/20 shrink-0`}
                    >
                      {item.avatarText}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-base sm:text-lg dark:text-white text-[#092328]">
                          {item.name}
                        </h3>
                        {item.verified && (
                          <span
                            className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full"
                            title="Verified Client Engagement"
                          >
                            <ShieldCheck className="w-3 h-3 text-[#2A835F]" /> Verified
                          </span>
                        )}
                      </div>
                      <p className="text-xs dark:text-gray-300 text-gray-600 font-medium">
                        {item.role} &bull; <span className="font-semibold">{item.company}</span>
                      </p>
                      <p className="text-[11px] text-gray-400 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#2A835F]" /> {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="p-2.5 rounded-xl dark:bg-[#092328]/60 bg-[#e2f1ed] text-[#2A835F] dark:text-[#8BBB92] shrink-0">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Rating Stars & Project Type Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b dark:border-[#2A835F]/20 border-gray-100">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold dark:text-[#8BBB92] text-[#12544F] dark:bg-[#092328]/80 bg-[#f0f7f5] px-2.5 py-1 rounded-md border dark:border-[#8BBB92]/20 border-emerald-600/15">
                    {item.projectType}
                  </span>
                </div>

                {/* Feedback Text */}
                <p className="text-sm dark:text-gray-200 text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{item.feedback}&rdquo;
                </p>
              </div>

              {/* Bottom Result Pill */}
              <div className="p-3.5 rounded-2xl dark:bg-[#092328]/80 bg-[#f0f7f5] border dark:border-[#2A835F]/30 border-emerald-600/20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2A835F]/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-[#2A835F]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-600 dark:text-gray-400 block tracking-wider">
                    Verified Outcome
                  </span>
                  <span className="text-xs font-bold dark:text-white text-[#092328]">
                    {item.resultBadge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/30 border-emerald-600/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2A835F] to-[#12544F] flex items-center justify-center text-white shrink-0 shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold dark:text-white text-[#092328]">
                Ready to Experience Similar Organic Traffic Growth?
              </h4>
              <p className="text-xs sm:text-sm dark:text-gray-300 text-gray-600">
                Get a free manual audit to identify exactly what is holding your website back on Google.
              </p>
            </div>
          </div>

          <a
            href="#audit-form"
            className="btn-primary text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 shrink-0 shadow-lg"
          >
            <span>Request Your Free Audit</span>
          </a>
        </div>
      </div>
    </section>
  );
}
