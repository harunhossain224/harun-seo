"use client";

import Link from "next/link";
import { Search, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer-base pt-16 pb-12 relative overflow-hidden dark:text-gray-300 text-gray-700 border-t dark:border-[#12544F]/40 border-emerald-600/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b dark:border-[#12544F] border-emerald-600/20">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2A835F] to-[#12544F] flex items-center justify-center border border-[#8BBB92]/40 shadow-md">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl dark:text-white text-[#092328] tracking-wide">
                HARUN <span className="text-[#2A835F] font-extrabold">SEO</span>
              </span>
            </Link>

            <p className="text-sm dark:text-gray-300 text-gray-700 max-w-sm leading-relaxed">
              Official portfolio of <strong className="dark:text-white text-[#092328]">Md. Harun or Roshid</strong>, SEO Executive at <span className="dark:text-[#8BBB92] text-[#2A835F] font-semibold">ScaleUP Ads Agency</span>. Helping businesses gain organic visibility, fix technical SEO issues, and build ethical backlink profiles.
            </p>

            <div className="flex items-center gap-2 text-xs dark:text-[#8BBB92] text-[#12544F] font-medium pt-2">
              <ShieldCheck className="w-4 h-4 text-[#2A835F]" /> 100% Ethical White-Hat SEO | Zero PBNs
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold dark:text-white text-[#092328] uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/about" className="hover:text-[#2A835F] transition-colors">About Specialist</Link></li>
              <li><Link href="/blog" className="hover:text-[#2A835F] transition-colors">SEO Blog & Guides</Link></li>
              <li><Link href="/#services" className="hover:text-[#2A835F] transition-colors">Core SEO Services</Link></li>
              <li><Link href="/#solutions" className="hover:text-[#2A835F] transition-colors">SEO Problems Solved</Link></li>
              <li><Link href="/#tools" className="hover:text-[#2A835F] transition-colors">Tools & Technologies</Link></li>
              <li><Link href="/#experience" className="hover:text-[#2A835F] transition-colors">ScaleUP Experience</Link></li>
              <li><Link href="/#audit-form" className="hover:text-[#2A835F] transition-colors">Free SEO Audit Request</Link></li>
              <li><Link href="/#faq" className="hover:text-[#2A835F] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold dark:text-white text-[#092328] uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a href="mailto:harunsha197@gmail.com" className="flex items-center gap-3 hover:text-[#2A835F] transition-colors">
                <Mail className="w-4 h-4 text-[#2A835F]" /> harunsha197@gmail.com
              </a>
              <a href="https://wa.me/8801972835738" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#2A835F] transition-colors">
                <Phone className="w-4 h-4 text-emerald-600" /> +880 1972-835738 (Call / WhatsApp)
              </a>
              <div className="flex items-center gap-3 dark:text-gray-400 text-gray-600">
                <MapPin className="w-4 h-4 text-[#2A835F]" /> Dhaka, Bangladesh
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs dark:text-gray-400 text-gray-600">
          <p>© {new Date().getFullYear()} Md. Harun or Roshid — SEO Executive. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
