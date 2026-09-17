"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X, ArrowRight, ShieldCheck, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "SEO Tools", href: "#tools" },
    { name: "Experience", href: "#experience" },
    { name: "Target Niches", href: "#niches" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-[#092328]/95 bg-white/95 backdrop-blur-md py-3 shadow-lg shadow-gray-200/50 dark:shadow-[#092328]/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2A835F] to-[#12544F] flex items-center justify-center border border-[#8BBB92]/40 shadow-md shadow-[#2A835F]/20 group-hover:scale-105 transition-transform">
            <Search className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg dark:text-white text-[#092328] tracking-wide flex items-center gap-1.5">
              HARUN <span className="text-[#2A835F] font-extrabold">SEO</span>
            </span>
            <span className="text-[10px] dark:text-[#8BBB92]/90 text-[#12544F] uppercase tracking-widest font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#2A835F]" /> SEO Experts
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 dark:bg-[#12544F]/40 bg-[#e2f1ed] backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-600/20 dark:border-none">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium dark:text-gray-300 text-gray-700 dark:hover:text-[#8BBB92] hover:text-[#12544F] dark:hover:bg-[#2A835F]/20 hover:bg-emerald-600/10 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions & Theme Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 dark:text-[#8BBB92] text-[#12544F] hover:bg-[#2A835F] hover:text-white transition-all shadow-md flex items-center justify-center"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            aria-label="Toggle Theme Mode"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#12544F]" />}
          </button>

          <a
            href="#audit-form"
            className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 group shadow-lg"
          >
            <span>Get Free SEO Audit</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 dark:text-[#8BBB92] text-[#12544F]"
            aria-label="Toggle Theme Mode"
          >
            {theme === "dark" ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-[#12544F]" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg dark:bg-[#12544F]/60 bg-[#e2f1ed] dark:text-gray-200 text-gray-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden dark:bg-[#092328]/98 bg-white/98 backdrop-blur-xl px-6 py-6 transition-all animate-fadeIn shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium dark:text-gray-200 text-gray-800 dark:hover:text-[#8BBB92] hover:text-[#2A835F] py-2 border-b dark:border-[#12544F]/50 border-gray-200 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-[#2A835F]" />
              </a>
            ))}
            <a
              href="#audit-form"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary mt-4 w-full text-center py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <span>Get Free SEO Audit</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
