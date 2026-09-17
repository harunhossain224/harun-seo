"use client";

import { Target, Globe2, ShoppingBag, Laptop, Building, Stethoscope, Plane } from "lucide-react";

export default function TargetAudienceSection() {
  const industries = [
    { name: "E-commerce Businesses", desc: "Product schema, category optimization & organic sales growth.", icon: ShoppingBag },
    { name: "SaaS & Tech Startups", desc: "High-intent keyword mapping & product feature SEO landing pages.", icon: Laptop },
    { name: "Local Service Providers", desc: "Google Business Profile optimization & local citation building.", icon: Building },
    { name: "Healthcare & Clinics", desc: "E-E-A-T trust optimization & local medical search rankings.", icon: Stethoscope },
    { name: "Real Estate & Agencies", desc: "Location-based keyword targeting & high-DA link acquisition.", icon: Globe2 },
    { name: "Education & Travel", desc: "Content structure optimization & organic authority building.", icon: Plane },
  ];

  const targetMarkets = [
    { country: "United States (USA)", code: "US" },
    { country: "United Kingdom (UK)", code: "UK" },
    { country: "Australia", code: "AU" },
    { country: "Canada", code: "CA" },
    { country: "Europe", code: "EU" },
    { country: "United Arab Emirates (UAE)", code: "UAE" },
  ];

  return (
    <section id="niches" className="py-20 md:py-28 bg-section-gradient relative scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 mb-4">
            <Target className="w-4 h-4 text-[#2A835F]" />
            <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">Industry Focus & Geography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
            Target Industries & <span className="dark:text-[#8BBB92] text-[#2A835F]">Global Markets</span>
          </h2>
          <p className="mt-4 dark:text-gray-300 text-gray-700 text-base sm:text-lg">
            Delivering tailored SEO strategies for diverse business niches worldwide.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/20 border-emerald-600/20 hover:border-[#2A835F]/40 transition-all flex items-start gap-4 shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl dark:bg-[#12544F] bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 flex items-center justify-center dark:text-[#8BBB92] text-[#2A835F] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold dark:text-white text-[#092328] mb-1">{ind.name}</h3>
                  <p className="text-xs dark:text-gray-300 text-gray-600 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Markets Pill Banner */}
        <div className="glass-panel rounded-3xl p-8 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/25 border-emerald-600/20 text-center shadow-lg">
          <div className="inline-flex items-center gap-2 text-sm font-bold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider mb-4">
            <Globe2 className="w-5 h-5 text-[#2A835F]" /> Primary International Target Markets
          </div>
          <h3 className="text-2xl font-extrabold dark:text-white text-[#092328] mb-6">
            Serving Global & International Clients
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-3">
            {targetMarkets.map((market, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-full dark:bg-[#12544F]/60 bg-[#f0f7f5] border dark:border-[#8BBB92]/30 border-emerald-600/20 text-sm font-semibold dark:text-gray-200 text-[#092328] hover:border-[#2A835F] transition-all flex items-center gap-2 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#2A835F]" />
                <span>{market.country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
