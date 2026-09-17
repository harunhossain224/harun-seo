"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, MessageCircle, ShieldCheck, CheckCircle2, Globe, FileSearch } from "lucide-react";

export default function AuditFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    service: "Technical SEO & Audit",
    keywords: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.website) {
      alert("Please fill in your name, email, and website URL.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="audit-form" className="py-20 md:py-28 bg-section-base relative overflow-hidden scroll-mt-20">
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] dark:bg-[#2A835F]/10 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Direct Contact Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/25 border-emerald-600/20 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-[#12544F]/80 bg-[#e2f1ed] dark:text-[#8BBB92] text-[#12544F] text-xs font-semibold mb-4 border dark:border-[#8BBB92]/30 border-emerald-600/20">
                <FileSearch className="w-4 h-4 text-[#2A835F]" /> Free Website Review
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-[#092328] tracking-tight mb-4">
                Request Your <span className="dark:text-[#8BBB92] text-[#2A835F]">Free SEO Audit</span>
              </h2>

              <p className="text-sm sm:text-base dark:text-gray-300 text-gray-700 leading-relaxed mb-8">
                Get a complimentary, manual SEO audit of your website. I will personally analyze your website's technical health, indexing errors, backlink authority, and key ranking bottlenecks.
              </p>

              {/* Direct Info Pills */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:harunsha197@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl dark:bg-[#092328]/80 bg-[#f0f7f5] border dark:border-[#2A835F]/30 border-emerald-600/20 hover:border-[#2A835F] transition-colors group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl dark:bg-[#12544F] bg-[#e2f1ed] flex items-center justify-center dark:text-[#8BBB92] text-[#2A835F] group-hover:bg-[#2A835F] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs dark:text-gray-400 text-gray-600 font-medium block">Direct Email</span>
                    <span className="text-sm font-semibold dark:text-white text-[#092328] group-hover:text-[#2A835F]">harunsha197@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/8801972835738"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl dark:bg-[#092328]/80 bg-[#f0f7f5] border dark:border-[#2A835F]/30 border-emerald-600/20 hover:border-[#2A835F] transition-colors group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl dark:bg-[#12544F] bg-[#e2f1ed] flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs dark:text-gray-400 text-gray-600 font-medium block">Phone & WhatsApp</span>
                    <span className="text-sm font-semibold dark:text-white text-[#092328] group-hover:text-emerald-600">+880 1972-835738</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl dark:bg-[#092328]/80 bg-[#f0f7f5] border dark:border-[#2A835F]/30 border-emerald-600/20 shadow-sm">
                  <div className="w-10 h-10 rounded-xl dark:bg-[#12544F] bg-[#e2f1ed] flex items-center justify-center dark:text-[#8BBB92] text-[#2A835F]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs dark:text-gray-400 text-gray-600 font-medium block">Location</span>
                    <span className="text-sm font-semibold dark:text-white text-[#092328]">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              {/* Security Tag */}
              <div className="p-4 rounded-2xl dark:bg-[#12544F]/40 bg-[#e2f1ed] border dark:border-[#8BBB92]/20 border-emerald-600/20 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#2A835F] shrink-0" />
                <span className="text-xs dark:text-gray-300 text-gray-700">
                  Strict Confidentiality Guarantee: Your website data and credentials remain 100% private.
                </span>
              </div>
            </div>
          </div>

          {/* Right Interactive Audit Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 dark:bg-[#12544F]/40 bg-white border dark:border-[#8BBB92]/30 border-emerald-600/20 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white text-[#092328]">Audit Request Received!</h3>
                  <p className="text-sm dark:text-gray-300 text-gray-700 max-w-md mx-auto">
                    Thank you, <strong className="dark:text-white text-[#092328]">{formData.name}</strong>. I will analyze <span className="dark:text-[#8BBB92] text-[#2A835F] font-semibold">{formData.website}</span> and email your custom SEO audit report to <strong className="dark:text-white text-[#092328]">{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", website: "", service: "Technical SEO & Audit", keywords: "", message: "" });
                    }}
                    className="btn-secondary px-6 py-2.5 rounded-xl text-xs font-semibold mt-4"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold dark:text-white text-[#092328] mb-2">Submit Your Website Info</h3>
                  <p className="text-xs dark:text-gray-300 text-gray-600 mb-6">Fill out the quick form below to initiate your free manual audit.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold dark:text-gray-300 text-gray-700 block mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full dark:bg-[#092328]/90 bg-[#f0f7f5] border dark:border-[#2A835F]/40 border-emerald-600/30 rounded-xl px-4 py-3 text-sm dark:text-white text-[#092328] focus:outline-none focus:border-[#2A835F] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold dark:text-gray-300 text-gray-700 block mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full dark:bg-[#092328]/90 bg-[#f0f7f5] border dark:border-[#2A835F]/40 border-emerald-600/30 rounded-xl px-4 py-3 text-sm dark:text-white text-[#092328] focus:outline-none focus:border-[#2A835F] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold dark:text-gray-300 text-gray-700 block mb-1.5">Website URL *</label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="url"
                        required
                        placeholder="https://yourwebsite.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full dark:bg-[#092328]/90 bg-[#f0f7f5] border dark:border-[#2A835F]/40 border-emerald-600/30 rounded-xl pl-10 pr-4 py-3 text-sm dark:text-white text-[#092328] focus:outline-none focus:border-[#2A835F] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold dark:text-gray-300 text-gray-700 block mb-1.5">Primary Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full dark:bg-[#092328]/90 bg-[#f0f7f5] border dark:border-[#2A835F]/40 border-emerald-600/30 rounded-xl px-4 py-3 text-sm dark:text-white text-[#092328] focus:outline-none focus:border-[#2A835F] transition-colors"
                      >
                        <option className="bg-white dark:bg-[#092328] text-[#092328] dark:text-white" value="Technical SEO & Audit">Technical SEO & Audit</option>
                        <option className="bg-white dark:bg-[#092328] text-[#092328] dark:text-white" value="Backlink Building">High-Quality Backlink Building</option>
                        <option className="bg-white dark:bg-[#092328] text-[#092328] dark:text-white" value="On-Page Optimization">On-Page Optimization</option>
                        <option className="bg-white dark:bg-[#092328] text-[#092328] dark:text-white" value="Keyword & Competitor Strategy">Keyword & Competitor Strategy</option>
                        <option className="bg-white dark:bg-[#092328] text-[#092328] dark:text-white" value="Local SEO & GBP">Local SEO & Google Business Profile</option>
                        <option className="bg-white dark:bg-[#092328] text-[#092328] dark:text-white" value="Monthly SEO Management">Monthly SEO Management</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold dark:text-gray-300 text-gray-700 block mb-1.5">Target Keywords (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. SEO services, local plumber"
                        value={formData.keywords}
                        onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                        className="w-full dark:bg-[#092328]/90 bg-[#f0f7f5] border dark:border-[#2A835F]/40 border-emerald-600/30 rounded-xl px-4 py-3 text-sm dark:text-white text-[#092328] focus:outline-none focus:border-[#2A835F] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold dark:text-gray-300 text-gray-700 block mb-1.5">Project Details / Goals</label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your current SEO challenges or organic traffic goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full dark:bg-[#092328]/90 bg-[#f0f7f5] border dark:border-[#2A835F]/40 border-emerald-600/30 rounded-xl px-4 py-3 text-sm dark:text-white text-[#092328] focus:outline-none focus:border-[#2A835F] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-xl group mt-2"
                  >
                    <span>Request Free SEO Audit Now</span>
                    <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
