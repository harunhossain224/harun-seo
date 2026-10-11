// Harun SEO Knowledge Base & Intelligent Assistant Engine
// Comprehensive question answering for Md. Harun or Roshid's Portfolio

export interface KnowledgeItem {
  keywords: string[];
  banglaKeywords?: string[];
  answer: string;
  banglaAnswer?: string;
}

export const HARUN_PROFILE = {
  name: "Md. Harun or Roshid",
  title: "Senior SEO Executive & Specialist",
  agency: "ScaleUP Ads Agency (since July 2025)",
  experience: "5+ Years of practical hands-on SEO experience",
  websitesOptimized: "100+ global websites (USA, UK, Australia, Canada, UAE, Bangladesh)",
  whatsapp: "+880 1972-835738",
  whatsappUrl: "https://wa.me/8801972835738",
  email: "harunsha197@gmail.com",
  location: "Dhaka, Bangladesh (Serving clients globally)",
  tools: "Google Search Console, Google Analytics 4, Ahrefs, SEMrush, Screaming Frog, SurferSEO, Moz Pro",
};

export const KNOWLEDGE_BASE: KnowledgeItem[] = [
  // 1. Identity & Experience
  {
    keywords: ["who is", "about harun", "who are you", "who is harun", "experience", "background", "bio", "portfolio", "profile"],
    banglaKeywords: ["ke", "tumi ke", "apni ke", "harun ke", "porichoy", "parichoy", "oviggota", "অভিজ্ঞতা", "পরিচয়"],
    answer: `Md. Harun or Roshid is a Senior SEO Executive with 5+ years of practical search engine optimization experience.\n\n` +
      `• Currently SEO Executive at ScaleUP Ads Agency (since July 2025).\n` +
      `• Proven track record optimizing 100+ websites across the USA, UK, Australia, Canada, UAE, and Bangladesh.\n` +
      `• Specializes in Technical SEO diagnostics, manual White-Hat backlink building, search intent keyword research, and Google Business Profile optimization.\n\n` +
      `Feel free to message Harun directly on WhatsApp (${HARUN_PROFILE.whatsapp}) for any inquiries!`,
    banglaAnswer: `মোঃ হারুন অর রশিদ একজন সিনিয়র এসইও এক্সিকিউটিভ, যার ৫+ বছরের বাস্তব সার্চ ইঞ্জিন অপ্টিমাইজেশন অভিজ্ঞতা রয়েছে।\n\n` +
      `• বর্তমানে ScaleUP Ads এজেন্সিতে SEO Executive হিসেবে কর্মরত (জুলাই ২০২৫ থেকে)।\n` +
      `• যুক্তরাষ্ট্র, যুক্তরাজ্য, অস্ট্রেলিয়া, কানাডা, দুবাই ও বাংলাদেশের ১০০+ ওয়েবসাইটে সফলভাবে কাজ করেছেন।\n` +
      `• টেকনিক্যাল এসইও, হোয়াইট-হ্যাট ব্যাকলিংক ও গুগল র‍্যাংকিংয়ে পারদর্শী।\n\n` +
      `সরাসরি কথা বলতে হোয়াটসঅ্যাপে মেসেজ দিন: ${HARUN_PROFILE.whatsapp}`,
  },

  // 2. Services Overview
  {
    keywords: ["service", "services", "what do you do", "what can you do", "offer", "help me with", "expertise", "specialty"],
    banglaKeywords: ["ki kaj koren", "service ki", "ki ki service", "kaj ki", "সেবা", "কি কাজ করেন"],
    answer: `Harun provides complete end-to-end SEO solutions tailored for sustainable organic growth:\n\n` +
      `1. 🔧 Technical SEO Diagnostics: Fix crawl errors, indexing issues, sitemaps, robots.txt, 404 loops, canonical tags, and Core Web Vitals.\n` +
      `2. 🔗 High-Authority Link Building: 100% manual, white-hat backlink acquisition (Web 2.0, niche citations, outreach; zero PBNs).\n` +
      `3. 🎯 Keyword Research & Intent Mapping: Uncovering high-intent commercial & long-tail search terms.\n` +
      `4. 📍 Local SEO & Google Business Profile: Dominating Google Maps 3-Pack and local citations.\n` +
      `5. 🛍️ eCommerce & CMS SEO: Shopify, WordPress/WooCommerce, Wix, custom web apps.\n` +
      `6. 📊 Monthly SEO Retainers: Ongoing GSC tracking, backlink growth, and transparent KPI reporting.`,
    banglaAnswer: `হারুন আপনার ওয়েবসাইটের জন্য সব ধরণের প্রফেশনাল এসইও সমাধান দিয়ে থাকেন:\n\n` +
      `১. 🔧 টেকনিক্যাল এসইও (ক্রলিং, ইনডেক্সিং এরর, সাইটম্যাপ, ক্যানোনিকাল ট্যাগ সমাধান)\n` +
      `২. 🔗 হোয়াইট-হ্যাট ব্যাকলিংক ও লিঙ্ক বিল্ডিং (১০০% ম্যানুয়াল, কোনো PBN নেই)\n` +
      `৩. 🎯 কিওয়ার্ড রিসার্চ ও সার্চ ইনটেন্ট ম্যাপিং\n` +
      `৪. 📍 লোকাল এসইও ও গুগল বিজনেস প্রোফাইল (ম্যাপ প্যাক র‍্যাংকিং)\n` +
      `৫. 🛍️ ই-কমার্স এসইও (Shopify, WordPress/WooCommerce)\n` +
      `৬. 📊 মান্থলি এসইও ম্যানেজমেন্ট ও সার্বক্ষণিক ট্র্যাকিং।`,
  },

  // 3. Technical SEO Specifics
  {
    keywords: ["technical seo", "crawl", "crawling", "indexing", "index", "sitemap", "robots.txt", "canonical", "404", "redirect", "core web vitals", "speed", "schema", "schema markup"],
    banglaKeywords: ["technical", "index hocche na", "indexing problem", "site speed", "ইনডেক্স"],
    answer: `Harun's Technical SEO diagnostics resolve the foundational blockers preventing Google from ranking your site:\n\n` +
      `• Google Search Console error fixes ("Discovered - currently not indexed", "Crawled - currently not indexed")\n` +
      `• XML Sitemap & Robots.txt restructuring and validation\n` +
      `• Canonical tag audit to stop duplicate content dilution\n` +
      `• 301 redirect chains and 404 broken link cleanup\n` +
      `• Core Web Vitals (LCP, INP, CLS) and mobile performance optimization\n` +
      `• Schema markup (Organization, Product, FAQ, LocalBusiness) implementation.`,
  },

  // 4. Backlinks & Link Building
  {
    keywords: ["backlink", "backlinks", "link building", "off-page", "off page", "links", "guest post", "citation", "citations", "web 2.0", "authority", "da", "dr"],
    banglaKeywords: ["backlink kivabe", "link building", "ব্যাকলিংক", "লিংক বিল্ডিং"],
    answer: `Harun specializes in 100% Ethical White-Hat Link Building:\n\n` +
      `• Manual Acquisition: Every link is built by hand with unique contextual anchor text.\n` +
      `• High-Authority Sources: High DA/DR Web 2.0 blogs, verified niche business citations, and authority profile platforms.\n` +
      `• Strict Safety Policy: ZERO PBNs (Private Blog Networks), zero automated bot spam, zero link farms.\n` +
      `• High Indexing Rate: Strategic Tier-2 indexing acceleration so your backlinks actually count towards ranking authority.`,
    banglaAnswer: `হারুনের ব্যাকলিংক বিল্ডিং সম্পূর্ণ ১০০% ম্যানুয়াল এবং হোয়াইট-হ্যাট পলিসি মেনে করা হয়:\n\n` +
      `• হাই-অথরিটি Web 2.0 ব্লগ, প্রাসঙ্গিক নিস সাইটেশন ও প্রোফাইল ব্যাকলিংক।\n` +
      `• কোনো PBN বা অটোমেটেড স্প্যাম লিংক সফটওয়্যার ব্যবহার করা হয় না।\n` +
      `• গুগল অ্যালগরিদম পেনাল্টি-মুক্ত এবং দীর্ঘমেয়াদী র‍্যাংকিং সহায়ক।`,
  },

  // 5. Free SEO Audit
  {
    keywords: ["audit", "free audit", "seo audit", "website review", "analyze my site", "check my website", "free review"],
    banglaKeywords: ["audit kivabe", "free audit", "website check", "অডিট"],
    answer: `Yes! Harun offers a 100% Complimentary Manual SEO Audit for your website! 🎯\n\n` +
      `The audit includes:\n` +
      `• Google Search Console crawl & indexation health report\n` +
      `• Canonical tags & duplicate content check\n` +
      `• Core Web Vitals & speed performance breakdown\n` +
      `• Backlink toxicity & competitor authority gap analysis\n` +
      `• Actionable priority roadmap for quick ranking wins\n\n` +
      `Submit your website URL via the form on this page or send it directly on WhatsApp (${HARUN_PROFILE.whatsapp})!`,
    banglaAnswer: `হ্যাঁ! হারুন আপনার ওয়েবসাইটের জন্য একটি সম্পূর্ণ ফ্রি ম্যানুয়াল এসইও অডিট (Free SEO Audit) প্রদান করছেন! 🎯\n\n` +
      `অডিটে যা যা পাবেন:\n` +
      `• ওয়েবসাইটের ইনডেক্সিং ও ক্রলিং স্বাস্থ্য পরীক্ষা\n` +
      `• স্পিড ও কোর ওয়েব ভাইটালস অ্যানালাইসিস\n` +
      `• ব্যাকলিংক ও কম্পিটিটর গ্যাপ রিপোর্ট\n` +
      `• দ্রুত র‍্যাঙ্ক করার স্টেপ-বাই-স্টেপ গাইডলাইন।\n\n` +
      `ফর্মটি পূরণ করুন অথবা সরাসরি হোয়াটসঅ্যাপে (${HARUN_PROFILE.whatsapp}) ওয়েবসাইটের লিংক পাঠান।`,
  },

  // 6. Pricing, Cost & Packages
  {
    keywords: ["price", "pricing", "cost", "rate", "rates", "fee", "fees", "how much", "packages", "package", "charge", "retainer"],
    banglaKeywords: ["dam koto", "koto taka", "taka", "fee koto", "khoroch", "খরচ", "দাম কত", "প্যাকেজ"],
    answer: `Harun offers flexible, value-driven SEO packages tailored to your goals:\n\n` +
      `1. 🎯 One-Time Technical Audit & Roadmap: Deep-dive diagnostic and immediate fix plan.\n` +
      `2. 📈 Monthly SEO Retainer: Full-scale management (Technical fixes, ongoing backlinks, keyword tracking, monthly reporting) for small businesses, eCommerce, and agencies.\n` +
      `3. 🔗 Dedicated Link Building Packages: Manual high-DA link campaigns with zero risk.\n\n` +
      `Every project starts with the FREE Manual SEO Audit to assess exact needs. Contact Harun on WhatsApp (${HARUN_PROFILE.whatsapp}) for a custom quote in USD or BDT!`,
    banglaAnswer: `হারুনের এসইও সার্ভিস প্যাকেজ ওয়েবসাইটের আকার ও লক্ষ্য অনুযায়ী নির্ধারণ করা হয়:\n\n` +
      `১. ওয়ান-টাইম টেকনিক্যাল অডিট ও সমাধান\n` +
      `২. মান্থলি ফুল এসইও ম্যানেজমেন্ট (টেকনিক্যাল + অন-পেজ + ব্যাকলিংক)\n` +
      `৩. ডেডিকেটেড লিংক বিল্ডিং প্যাকেজ।\n\n` +
      `আপনার বাজেটের মধ্যে সেরা কোটেশনের জন্য ফ্রি অডিট নিন অথবা হোয়াটসঅ্যাপে (${HARUN_PROFILE.whatsapp}) সরাসরি কথা বলুন।`,
  },

  // 7. Contact, Phone, WhatsApp, Email, Hire
  {
    keywords: ["contact", "whatsapp", "phone", "email", "call", "hire", "talk to harun", "how to contact", "meeting", "reach"],
    banglaKeywords: ["jogajog", "jogajog korbo kivabe", "number", "phone number", "যোগাযোগ", "ফোন", "হায়ার"],
    answer: `You can connect directly with Md. Harun or Roshid through:\n\n` +
      `📱 WhatsApp: ${HARUN_PROFILE.whatsapp} (Fastest response)\n` +
      `📧 Direct Email: ${HARUN_PROFILE.email}\n` +
      `💼 Agency: ScaleUP Ads Agency (SEO Executive)\n` +
      `📍 Location: Dhaka, Bangladesh (Working globally across all timezones)\n\n` +
      `Send a message on WhatsApp anytime — replies are typically within minutes!`,
    banglaAnswer: `মোঃ হারুন অর রশিদের সাথে সরাসরি যোগাযোগ করার মাধ্যম:\n\n` +
      `📱 হোয়াটসঅ্যাপ: ${HARUN_PROFILE.whatsapp} (দ্রুত উত্তরের জন্য)\n` +
      `📧 ইমেইল: ${HARUN_PROFILE.email}\n` +
      `📍 অবস্থান: ঢাকা, বাংলাদেশ (বিশ্বব্যাপী সব টাইমজোনের ক্লায়েন্টদের সাথে কাজ করেন)।\n\n` +
      `হোয়াটসঅ্যাপে যেকোনো প্রশ্ন পাঠাতে পারেন!`,
  },

  // 8. Ranking Timeline / How Long
  {
    keywords: ["how long", "time", "duration", "when will i rank", "how many days", "how many months", "results time", "timeline"],
    banglaKeywords: ["koto din lagbe", "koto shomoy", "result kobe ashbe", "কত দিন লাগবে", "সময়"],
    answer: `Here is the realistic timeline for white-hat SEO results:\n\n` +
      `• Weeks 1 to 4: Technical crawl fixes, sitemap re-indexing, and initial Search Console impression gains.\n` +
      `• Months 2 to 3: Keyword movements jumping from page 4-5 up to pages 1-2 as backlink authority builds.\n` +
      `• Months 3 to 6+: Top 3 - Top 5 rankings for commercial search terms, producing steady inbound organic traffic and leads.\n\n` +
      `SEO is a compounding digital asset that delivers long-term, high-ROI returns.`,
    banglaAnswer: `একটি ওয়েবসাইটের টেকনিক্যাল ও অর্গানিক এসইও ফলাফলের স্বাভাবিক সময়রেখা:\n\n` +
      `• ১ থেকে ৪ সপ্তাহ: টেকনিক্যাল বাগ ফিক্স, ইনডেক্সিং সমাধান ও ইমপ্রেশন বৃদ্ধি।\n` +
      `• ২ থেকে ৩ মাস: কিওয়ার্ড পজিশনে স্পষ্ট অগ্রগতি ও ক্লিক বৃদ্ধি।\n` +
      `• ৩ থেকে ৬ মাস: মূল কমার্শিয়াল কিওয়ার্ডে প্রথম পাতার শীর্ষ র‍্যাংকিং ও নিয়মিত কাস্টমার ট্রাফিক।`,
  },

  // 9. Guarantee / #1 Ranking Question
  {
    keywords: ["guarantee", "guaranteed", "rank 1", "number 1", "first page guarantee", "promise"],
    banglaKeywords: ["guarantee ache", "first page garantee", "গ্যারান্টি"],
    answer: `Google's official Webmaster Guidelines state that no ethical SEO can 100% guarantee a #1 ranking, because Google's algorithm uses 200+ ranking factors.\n\n` +
      `However, Harun guarantees:\n` +
      `✓ 100% White-Hat, penalty-proof optimization adhering to Google guidelines\n` +
      `✓ Verifiable ranking and organic traffic improvements\n` +
      `✓ 100% manual backlink acquisition with zero PBNs\n` +
      `✓ Transparent bi-weekly/monthly reporting with live GSC metrics.`,
  },

  // 10. eCommerce & CMS (Shopify, WordPress, WooCommerce, Wix)
  {
    keywords: ["shopify", "wordpress", "woocommerce", "wix", "ecommerce", "e-commerce", "online store", "magento", "custom site"],
    banglaKeywords: ["shopify seo", "wordpress seo", "ইকমার্স"],
    answer: `Yes! Harun has extensive experience optimizing both eCommerce and CMS platforms:\n\n` +
      `• Shopify SEO: Collection architecture, product tag deduplication, canonical loops, product schema, and Core Web Vitals speed optimization.\n` +
      `• WordPress & WooCommerce: Yoast/RankMath configuration, category indexing, custom post type optimization, and database cleanup.\n` +
      `• Wix & Custom Web Apps: React/Next.js SEO, clean URL structures, and SSR rendering audit.`,
  },

  // 11. Local SEO & Google Maps
  {
    keywords: ["local seo", "google business profile", "gmb", "gbp", "google map", "map pack", "nap", "citations", "near me"],
    banglaKeywords: ["local seo", "google map", "লোকাল এসইও", "গুগল ম্যাপ"],
    answer: `Harun provides complete Local SEO optimization to get your business into Google's Local 3-Pack:\n\n` +
      `• Google Business Profile (GBP) complete setup and category optimization\n` +
      `• Strict NAP (Name, Address, Phone) consistency across 50+ trusted directory citations\n` +
      `• Geotagged asset optimization and local service area landing pages\n` +
      `• Local customer review generation strategy to build map pack trust.`,
  },

  // 12. PBN, Black Hat & Penalties
  {
    keywords: ["pbn", "black hat", "grey hat", "safe", "penalty", "penalized", "spam", "toxic backlinks", "disavow"],
    banglaKeywords: ["pbn ki", "penalty", "safe naki", "পেনাল্টি"],
    answer: `Harun has a zero-tolerance policy against dangerous SEO shortcuts:\n\n` +
      `• ZERO PBNs (Private Blog Networks) — strictly avoiding risky blog networks that trigger manual actions.\n` +
      `• ZERO automated link spam tools.\n` +
      `• Penalty Recovery: If your site was hit by Google's Helpful Content Update (HCU) or Core Updates, Harun can audit toxic backlinks, submit disavow files, and clean low-quality content.`,
  },

  // 13. Tools Used
  {
    keywords: ["tools", "software", "ahrefs", "semrush", "screaming frog", "what tools do you use"],
    banglaKeywords: ["tool ki use koren", "software ki", "টুলস"],
    answer: `Harun utilizes industry-leading enterprise SEO software:\n\n` +
      `• Google Search Console (GSC) & Google Analytics 4 (GA4) for primary performance data\n` +
      `• Ahrefs & SEMrush for backlink intelligence and competitor keyword gap analysis\n` +
      `• Screaming Frog SEO Spider for comprehensive technical crawling\n` +
      `• SurferSEO & PageSpeed Insights for on-page content relevance and Core Web Vitals.`,
  },

  // 14. Keyword Research
  {
    keywords: ["keyword", "keywords", "keyword research", "search intent", "long tail", "low competition"],
    banglaKeywords: ["keyword research", "কিওয়ার্ড"],
    answer: `Harun's keyword research strategy focuses on Commercial Search Intent:\n\n` +
      `• Identifying high-buyer intent keywords rather than just vanity traffic volume\n` +
      `• Finding low-competition, high-conversion long-tail search queries\n` +
      `• Competitor keyword gap reverse engineering\n` +
      `• Keyword-to-page mapping to eliminate keyword cannibalization across your site.`,
  },

  // 15. Bengali Greetings & Polite Inquiries
  {
    keywords: ["kemon achen", "kemon acho", "ki khobor", "valo achen", "salam", "assalamu alaikum", "valobashi"],
    banglaKeywords: ["কেমন আছেন", "সালাম", "আসসালামু আলাইকুম", "কি খবর", "ভালো আছেন"],
    answer: `Wa Alaikum Assalam! Alhamdulillah, I am doing great! 👋\n\n` +
      `I am Md. Harun or Roshid's AI SEO Assistant. How can I help your website achieve higher Google rankings today? Feel free to ask about our SEO services, pricing, or request a Free SEO Audit!`,
    banglaAnswer: `ওয়ালাইকুম আসসালাম! আলহামদুলিল্লাহ, ভালো আছি! 👋\n\n` +
      `আমি মোঃ হারুন অর রশিদের এআই এসইও অ্যাসিস্ট্যান্ট। আপনার ওয়েবসাইটের গুগল র‍্যাংকিং বাড়াতে আজ কীভাবে সাহায্য করতে পারি? এসইও সার্ভিস, খরচ, ব্যাকলিংক বা ফ্রি অডিট সম্পর্কে যেকোনো প্রশ্ন করতে পারেন!`,
  },

  // 16. General English Greetings
  {
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "howdy", "sup", "yo"],
    answer: `Hello! 👋 Welcome to Harun SEO. I am Md. Harun or Roshid's AI SEO Assistant.\n\n` +
      `How can I help your website today? You can ask me about:\n` +
      `• Technical SEO & Indexing error fixes\n` +
      `• White-Hat Backlink building\n` +
      `• Getting a Free Manual SEO Audit\n` +
      `• Pricing & Monthly SEO management\n` +
      `• Or speak with Harun directly on WhatsApp (${HARUN_PROFILE.whatsapp})!`,
  },

  // 17. Gratitude / Thanks
  {
    keywords: ["thank you", "thanks", "thx", "dhonnobad", "dhonnobaad", "appreciate it"],
    banglaKeywords: ["ধন্যবাদ", "থ্যাংকস"],
    answer: `You are very welcome! 😊 Glad I could help.\n\n` +
      `If you have any more questions or want to review your website, feel free to submit the Free Audit form or text Harun directly on WhatsApp (${HARUN_PROFILE.whatsapp}). Have a great day!`,
    banglaAnswer: `আপনাকে অসংখ্য ধন্যবাদ! 😊\n\n` +
      `ওয়েবসাইট র‍্যাংকিং বা যেকোনো এসইও প্রশ্নের জন্য নির্দ্বিধায় যোগাযোগ করুন। শুভকামনা!`,
  },

  // 18. Why traffic is dropping
  {
    keywords: ["traffic dropping", "lost traffic", "ranking drop", "traffic down", "traffic decrease", "why is my traffic low"],
    banglaKeywords: ["traffic komche", "traffic kom", "ট্রাফিক কমে গেছে", "র‍্যাংক কমে গেছে"],
    answer: `A sudden or gradual organic traffic drop usually happens due to one of these reasons:\n\n` +
      `1. Google Algorithm Update: Helpful Content Update or Core Spam update affecting content quality.\n` +
      `2. Technical Indexing Errors: Accidental noindex tags, robots.txt blocks, or broken canonicals.\n` +
      `3. Lost or Broken Backlinks: High-power referring domains dropped.\n` +
      `4. Competitor Outranking: Competitors updated their content and built newer backlinks.\n\n` +
      `Harun can run a thorough Traffic Drop Diagnosis to pinpoint the exact root cause and formulate a recovery plan. Message Harun on WhatsApp (${HARUN_PROFILE.whatsapp}) to inspect your site!`,
  },

  // 19. What is SEO (Beginner)
  {
    keywords: ["what is seo", "seo ki", "explain seo", "meaning of seo"],
    banglaKeywords: ["এসইও কি", "seo মানে কি"],
    answer: `SEO (Search Engine Optimization) is the process of optimizing your website so that Google and other search engines rank it at the top of organic search results for queries related to your products or services.\n\n` +
      `Unlike paid ads (PPC), traffic from SEO is 100% free and organic, providing consistent, compounding leads 24/7 without paying per click. Harun specializes in making websites rank in the top positions through technical health, quality content, and ethical backlinks.`,
  },

  // 20. Agency details
  {
    keywords: ["scaleup", "scaleup ads", "agency", "company", "current job"],
    answer: `Md. Harun or Roshid is currently an SEO Executive at ScaleUP Ads Agency (working there since July 2025).\n\n` +
      `He manages search engine optimization strategies, technical audits, and high-impact organic ranking campaigns for agency clients globally.`,
  },
];

// Fallback intelligent answer synthesizer
export function synthesizeAnswer(query: string): string {
  const clean = query.trim().toLowerCase();

  if (!clean) {
    return "Hello! How can I help you with your website's SEO and Google ranking today?";
  }

  // Detect Bengali script or Banglish phrasing
  const isBanglaScript = /[\u0980-\u09FF]/.test(query);
  const isBanglish =
    /\b(ki|kivabe|kemon|apnar|amar|koto|taka|kaj|korbo|achen|acho|koro|bolun|janan)\b/i.test(
      query
    );

  // Exact & synonym matching
  for (const item of KNOWLEDGE_BASE) {
    const englishMatch = item.keywords.some((kw) => clean.includes(kw));
    const banglaMatch =
      item.banglaKeywords && item.banglaKeywords.some((bkw) => clean.includes(bkw));

    if (englishMatch || banglaMatch) {
      if ((isBanglaScript || isBanglish) && item.banglaAnswer) {
        return item.banglaAnswer;
      }
      return item.answer;
    }
  }

  // Topic clustering fallback
  if (clean.includes("link") || clean.includes("href") || clean.includes("anchor")) {
    return `Regarding links and SEO: Harun specializes in ethical White-Hat link acquisition (Web 2.0, niche citations, and outreach) with zero PBN risks. Would you like a backlink audit for your website? Feel free to message Harun on WhatsApp (${HARUN_PROFILE.whatsapp})!`;
  }

  if (clean.includes("speed") || clean.includes("slow") || clean.includes("mobile") || clean.includes("performance")) {
    return `Page speed and mobile responsiveness are vital Core Web Vitals ranking signals. Harun diagnoses server response times, image compression, render-blocking resources, and LCP/CLS issues to make your site blaze fast for Google crawlers and users.`;
  }

  if (clean.includes("content") || clean.includes("article") || clean.includes("blog") || clean.includes("write")) {
    return `High-ranking SEO content must fulfill exact Search Intent. Harun helps map topic clusters, eliminate keyword cannibalization, update decaying content, and optimize headings for top Google visibility.`;
  }

  // General fallback for any other question
  if (isBanglaScript || isBanglish) {
    return `ধন্যবাদ আপনার প্রশ্নের জন্য! মোঃ হারুন অর রশিদের এআই অ্যাসিস্ট্যান্ট হিসেবে জানাচ্ছি যে, আমরা যেকোনো ধরণের টেকনিক্যাল এসইও, গুগল র‍্যাংকিং, ব্যাকলিংক ও ওয়েবসাইট অপ্টিমাইজেশনে সাহায্য করি।\n\n` +
      `আপনার নির্দিষ্ট প্রজেক্ট বা ওয়েবসাইট নিয়ে সরাসরি কথা বলতে হোয়াটসঅ্যাপে (${HARUN_PROFILE.whatsapp}) অথবা ইমেইলে (${HARUN_PROFILE.email}) মেসেজ পাঠাতে পারেন!`;
  }

  return `Thank you for your question! As Md. Harun or Roshid's AI SEO Assistant, I can help you with all aspects of website ranking, technical SEO, link building, and organic growth.\n\n` +
    `Harun has optimized 100+ websites across the USA, UK, Canada, Australia, and worldwide with 5+ years of experience.\n\n` +
    `For specific advice regarding your website, claim your Free SEO Audit using the form on this page, or chat directly with Harun on WhatsApp (${HARUN_PROFILE.whatsapp}) / Email (${HARUN_PROFILE.email})!`;
}
