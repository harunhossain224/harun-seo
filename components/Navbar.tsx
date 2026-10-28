"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Sun,
  Moon,
  Check,
  ChevronDown,
  Sparkles,
  Bot,
  MapPin,
  Layers,
  ShoppingBag,
  Wrench,
  FileCode,
  Link as LinkIcon,
  Video,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["services", "case-studies", "solutions", "testimonials", "tools", "experience", "niches", "faq", "about"];
    const handleScroll = () => {
      if (window.scrollY < 180) {
        setActiveSection("");
        return;
      }

      const scrollPosition = window.scrollY + 250;
      let currentSection = "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    if (window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const serviceItems = [
    {
      name: "AI-First SEO Strategy & GEO",
      desc: "ChatGPT, Gemini, Perplexity & LLMO",
      href: "/#services",
      icon: Bot,
      badge: "AI-Era",
    },
    {
      name: "Local SEO Booster & Maps",
      desc: "Google Maps 3-Pack & GBP rank booster",
      href: "/#services",
      icon: MapPin,
      badge: "Local",
    },
    {
      name: "CMS SEO (WordPress / Shopify)",
      desc: "Platform tuning for WordPress, Shopify, Wix",
      href: "/#services",
      icon: Layers,
      badge: "CMS",
    },
    {
      name: "E-Commerce SEO Dominance",
      desc: "Scale product & category revenue traffic",
      href: "/#services",
      icon: ShoppingBag,
      badge: "E-Com",
    },
    {
      name: "Technical SEO & Crawl Budget",
      desc: "Speed, index traps, 404s & Core Web Vitals",
      href: "/#services",
      icon: Wrench,
      badge: "Tech",
    },
    {
      name: "Semantic & Holistic On-Page",
      desc: "Topical clusters, entity mapping & schema",
      href: "/#services",
      icon: FileCode,
      badge: "Semantic",
    },
    {
      name: "White-Hat Link Building",
      desc: "High-DA manual outreach & tier-1 PR",
      href: "/#services",
      icon: LinkIcon,
      badge: "Links",
    },
    {
      name: "YouTube & Video SEO",
      desc: "Rank on YouTube & Google video SERP",
      href: "/#services",
      icon: Video,
      badge: "Video",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services", isDropdown: true },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Solutions", href: "/#solutions" },
    { name: "SEO Tools", href: "/#tools" },
    { name: "Experience", href: "/#experience" },
    { name: "Reviews", href: "/#testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/#faq" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && activeSection === "";
    }
    if (href === "/about") {
      return pathname === "/about" || (pathname === "/" && activeSection === "about");
    }
    if (href === "/blog") {
      return pathname === "/blog" || pathname.startsWith("/blog/");
    }
    if (href.startsWith("/#")) {
      const hash = href.replace("/#", "");
      return pathname === "/" && activeSection === hash;
    }
    return pathname === href;
  };

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
        <Link href="/" className="flex items-center gap-3 group">
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
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 dark:bg-[#12544F]/40 bg-[#e2f1ed] backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-600/20 dark:border-none shadow-inner">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);

            if (link.isDropdown) {
              return (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    onClick={() => setServicesDropdownOpen((prev) => !prev)}
                    className={`relative px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                      active || servicesDropdownOpen
                        ? "bg-gradient-to-r from-[#2A835F] to-[#12544F] text-white shadow-md shadow-[#2A835F]/30 font-semibold scale-[1.02]"
                        : "dark:text-gray-300 text-gray-700 dark:hover:text-[#8BBB92] hover:text-[#12544F] dark:hover:bg-[#2A835F]/20 hover:bg-emerald-600/10"
                    }`}
                    aria-expanded={servicesDropdownOpen}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Megamenu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[580px] xl:w-[620px] z-50 animate-fadeIn">
                      <div className="dark:bg-[#092328]/98 bg-white/98 backdrop-blur-2xl rounded-3xl p-5 border-2 dark:border-[#8BBB92]/30 border-emerald-600/25 shadow-2xl shadow-emerald-950/40">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b dark:border-[#12544F]/60 border-gray-100">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#2A835F]" />
                            <span className="text-xs font-bold uppercase tracking-wider dark:text-[#8BBB92] text-[#12544F]">
                              Core SEO Services (8 Capabilities)
                            </span>
                          </div>
                          <Link
                            href="/#services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="text-xs font-semibold text-[#2A835F] dark:text-[#8BBB92] hover:underline flex items-center gap-1"
                          >
                            <span>View All Grid</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {/* 2-column Grid of Services */}
                        <div className="grid grid-cols-2 gap-2">
                          {serviceItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="flex items-start gap-2.5 p-2 rounded-2xl dark:hover:bg-[#12544F]/50 hover:bg-[#e2f1ed] transition-all group border border-transparent dark:hover:border-[#8BBB92]/20 hover:border-emerald-600/20"
                              >
                                <div className="w-8 h-8 rounded-xl dark:bg-[#12544F] bg-[#e2f1ed] flex items-center justify-center shrink-0 dark:text-[#8BBB92] text-[#2A835F] group-hover:bg-[#2A835F] group-hover:text-white transition-colors mt-0.5">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <h4 className="text-xs font-bold dark:text-white text-[#092328] group-hover:text-[#2A835F] dark:group-hover:text-[#8BBB92] transition-colors truncate">
                                      {item.name}
                                    </h4>
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md dark:bg-[#092328] bg-emerald-50 dark:text-emerald-300 text-[#12544F] shrink-0">
                                      {item.badge}
                                    </span>
                                  </div>
                                  <p className="text-[11px] dark:text-gray-400 text-gray-600 line-clamp-1 mt-0.5">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Footer Callout */}
                        <div className="mt-3 pt-3 border-t dark:border-[#12544F]/60 border-gray-100 flex items-center justify-between text-xs dark:text-gray-300 text-gray-700 bg-emerald-500/5 dark:bg-[#12544F]/20 p-2.5 rounded-xl">
                          <span className="font-medium">Need a custom AI & SEO ranking plan?</span>
                          <Link
                            href="/#audit-form"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="font-bold text-[#2A835F] dark:text-[#8BBB92] hover:underline flex items-center gap-1"
                          >
                            <span>Get Free Audit</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 flex items-center whitespace-nowrap ${
                  active
                    ? "bg-gradient-to-r from-[#2A835F] to-[#12544F] text-white shadow-md shadow-[#2A835F]/30 font-semibold scale-[1.02]"
                    : "dark:text-gray-300 text-gray-700 dark:hover:text-[#8BBB92] hover:text-[#12544F] dark:hover:bg-[#2A835F]/20 hover:bg-emerald-600/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions & Theme Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full dark:bg-[#12544F]/60 bg-[#e2f1ed] border dark:border-[#8BBB92]/30 border-emerald-600/20 dark:text-[#8BBB92] text-[#12544F] hover:bg-[#2A835F] hover:text-white transition-all shadow-md flex items-center justify-center cursor-pointer"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            aria-label="Toggle Theme Mode"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#12544F]" />}
          </button>

          <Link
            href="/#audit-form"
            className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 group shadow-lg"
          >
            <span>Get Free SEO Audit</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
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
        <div className="lg:hidden dark:bg-[#092328]/98 bg-white/98 backdrop-blur-xl px-6 py-6 transition-all animate-fadeIn shadow-2xl border-b dark:border-[#12544F]/50 border-gray-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);

              if (link.isDropdown) {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className={`text-base transition-all duration-200 py-2.5 px-3.5 rounded-xl flex items-center justify-between w-full cursor-pointer ${
                        active || mobileServicesOpen
                          ? "dark:bg-[#12544F] bg-[#e2f1ed] dark:text-emerald-300 text-[#12544F] font-bold border-l-4 border-[#2A835F] shadow-sm"
                          : "font-medium dark:text-gray-200 text-gray-800 dark:hover:text-[#8BBB92] hover:text-[#2A835F] hover:bg-gray-100/50 dark:hover:bg-[#12544F]/30"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {active && <Check className="w-4 h-4 text-[#2A835F]" />}
                        {link.name}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180 text-[#2A835F]" : "text-gray-400"
                        }`}
                      />
                    </button>

                    {/* Mobile Services Accordion Items */}
                    {mobileServicesOpen && (
                      <div className="pl-3 pr-1 py-2 my-1 flex flex-col gap-1.5 border-l-2 dark:border-[#2A835F]/40 border-emerald-600/20 ml-3">
                        <Link
                          href="/#services"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="py-1.5 px-3 rounded-lg text-xs font-bold text-[#2A835F] dark:text-[#8BBB92] flex items-center justify-between dark:bg-[#12544F]/30 bg-emerald-50"
                        >
                          <span>Explore All Services Grid</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        {serviceItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="py-2 px-3 rounded-lg text-xs font-medium dark:text-gray-300 text-gray-700 hover:text-[#2A835F] dark:hover:text-[#8BBB92] flex items-center gap-2 hover:bg-gray-100/40 dark:hover:bg-[#12544F]/20"
                            >
                              <Icon className="w-3.5 h-3.5 text-[#2A835F] shrink-0" />
                              <span className="truncate">{item.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base transition-all duration-200 py-2.5 px-3.5 rounded-xl flex items-center justify-between ${
                    active
                      ? "dark:bg-[#12544F] bg-[#e2f1ed] dark:text-emerald-300 text-[#12544F] font-bold border-l-4 border-[#2A835F] shadow-sm"
                      : "font-medium dark:text-gray-200 text-gray-800 dark:hover:text-[#8BBB92] hover:text-[#2A835F] hover:bg-gray-100/50 dark:hover:bg-[#12544F]/30"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {active && <Check className="w-4 h-4 text-[#2A835F]" />}
                    {link.name}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${active ? "text-[#2A835F]" : "text-gray-400"}`} />
                </Link>
              );
            })}
            <Link
              href="/#audit-form"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary mt-4 w-full text-center py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <span>Get Free SEO Audit</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
