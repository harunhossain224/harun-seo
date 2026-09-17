"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What SEO services do you provide?",
      answer: "I specialize in end-to-end SEO solutions including Technical SEO analysis, On-Page metadata & heading optimization, High-Quality manual backlink building, Keyword Research & Search Intent mapping, Competitor analysis, Local SEO & Google Business Profile optimization, and comprehensive SEO audits.",
    },
    {
      question: "How long does SEO take to show ranking results?",
      answer: "Technical crawl and indexing fixes usually reflect in Google Search Console within 2 to 4 weeks. Organic traffic growth and top keyword rank improvements typically manifest within 3 to 6 months depending on your industry competition and existing website authority.",
    },
    {
      question: "Do you use PBNs or automated backlink software?",
      answer: "No, absolutely not. I follow a strict ethical white-hat policy: ZERO PBNs (Private Blog Networks), zero automated link spam, and zero link farms. Every backlink is manually acquired through Web 2.0, high-DA profile building, niche citations, and contextual outreach.",
    },
    {
      question: "Do you offer monthly SEO retainers & management?",
      answer: "Yes! Monthly SEO management includes continuous Google Search Console monitoring, ongoing backlink acquisition, rank position tracking, indexing error resolution, and detailed monthly analytics reports.",
    },
    {
      question: "What is included in your free SEO audit?",
      answer: "The free manual SEO audit examines your website's technical health, Google Search Console indexing status, canonical tags, sitemap/robots.txt configurations, metadata optimization, page speed bottlenecks, and backlink authority compared to top competitors.",
    },
    {
      question: "Can you optimize local businesses for Google Map Pack?",
      answer: "Yes. I optimize Google Business Profiles (GBP), establish NAP (Name, Address, Phone) consistency across verified web directories, build local citations, and target geo-specific search keywords.",
    },
    {
      question: "Can you work with international clients outside Bangladesh?",
      answer: "Yes! I routinely work with international clients and agencies across the United States (USA), United Kingdom (UK), Australia, Canada, Europe, UAE, and other global markets.",
    },
    {
      question: "How do we get started on an SEO project?",
      answer: "Simply fill out the Free SEO Audit Request form or send me a message on WhatsApp (+880 1972-835738). I will review your website and provide a customized SEO action plan and pricing proposal.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-section-base relative scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 mb-4">
            <HelpCircle className="w-4 h-4 text-[#2A835F]" />
            <span className="text-xs font-semibold dark:text-[#8BBB92] text-[#12544F] uppercase tracking-wider">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-[#092328] tracking-tight">
            Common <span className="dark:text-[#8BBB92] text-[#2A835F]">Questions Answered</span>
          </h2>
          <p className="mt-4 dark:text-gray-300 text-gray-700 text-base sm:text-lg">
            Everything you need to know about my SEO methodology, link building ethics, and timelines.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "dark:border-[#8BBB92]/50 border-[#2A835F] dark:bg-[#12544F]/40 bg-white shadow-lg"
                    : "dark:border-[#8BBB92]/20 border-emerald-600/20 dark:bg-[#12544F]/20 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold dark:text-white text-[#092328] flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#2A835F] shrink-0" />
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full dark:bg-[#092328] bg-[#e2f1ed] dark:text-[#8BBB92] text-[#2A835F] transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 bg-[#2A835F] text-white" : ""}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm dark:text-gray-300 text-gray-700 leading-relaxed border-t dark:border-[#2A835F]/20 border-gray-200 mt-2">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
