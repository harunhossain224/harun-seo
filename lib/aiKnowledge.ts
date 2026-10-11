// Harun SEO Knowledge Base & Intelligent Multilingual Assistant Engine
// Complete question answering for Md. Harun or Roshid's Portfolio across ALL languages

export const HARUN_PROFILE = {
  name: "Md. Harun or Roshid",
  title: "Senior SEO Executive & Specialist",
  agency: "ScaleUP Ads Agency (since July 2025)",
  experience: "5+ Years of practical hands-on SEO experience",
  websitesOptimized: "100+ global websites (USA, UK, Australia, Canada, UAE, Bangladesh)",
  whatsapp: "+880 1972-835738",
  whatsappUrl: "https://wa.me/8801972835738",
  email: "harunsha197@gmail.com",
  location: "Dhaka, Bangladesh (Serving clients globally across all timezones)",
  tools: "Google Search Console, Google Analytics 4, Ahrefs, SEMrush, Screaming Frog, SurferSEO, Moz Pro",
};

export type SupportedLang = "bn" | "ar" | "hi" | "es" | "fr" | "de" | "en";

// Comprehensive language detector for all scripts and Banglish / Hinglish phonetics
export function detectLanguage(text: string, currentSessionLang?: string): SupportedLang {
  const clean = text.trim();
  if (!clean) return (currentSessionLang as SupportedLang) || "en";

  // Explicit Language Switch requests
  const lower = clean.toLowerCase();
  if (
    lower.includes("bangla") ||
    lower.includes("bengali") ||
    lower.includes("banglish") ||
    lower.includes("বাংলা") ||
    lower.includes("বাংলিশ")
  ) {
    return "bn";
  }
  if (
    lower.includes("hindi") ||
    lower.includes("hinglish") ||
    lower.includes("हिंदी") ||
    lower.includes("हिन्दी")
  ) {
    return "hi";
  }
  if (
    lower.includes("arabic") ||
    lower.includes("arabi") ||
    lower.includes("arbi") ||
    lower.includes("عربي") ||
    lower.includes("عربية")
  ) {
    return "ar";
  }
  if (lower.includes("spanish") || lower.includes("español") || lower.includes("espanol")) {
    return "es";
  }
  if (lower.includes("french") || lower.includes("français") || lower.includes("francais")) {
    return "fr";
  }
  if (lower.includes("german") || lower.includes("deutsch")) {
    return "de";
  }
  if (lower.includes("speak english") || lower.includes("english bolo") || lower.includes("talk in english")) {
    return "en";
  }

  // 1. Bengali Script (বাংলা)
  if (/[\u0980-\u09FF]/.test(clean)) {
    return "bn";
  }

  // 2. Arabic Script (العربية)
  if (/[\u0600-\u06FF]/.test(clean)) {
    return "ar";
  }

  // 3. Hindi / Devanagari Script (हिन्दी)
  if (/[\u0900-\u097F]/.test(clean)) {
    return "hi";
  }

  // 4. Comprehensive Banglish Pattern (Bengali written in English letters)
  const isBanglish =
    /\b(bangla|bolo|bolen|bolte|boltecho|bolso|bollam|kotha|katha|basha|vasha|ki|kivabe|kemon|apnar|amar|amader|apnader|tumi|apni|tui|koto|taka|kaj|kam|korbo|korben|korbe|koren|koros|kore|kori|achen|acho|koro|bolun|janan|bhalo|valo|dhonnobad|shuru|parben|parbe|paro|hobe|ore|pore|shob|sob|kisu|kichu|jeno|chai|dekho|dekhso|dekso|bujhso|bujso|vai|bhai|keno|bolci|bolsi|ekhon|akhon|jani|jano|lagbe|lagbo|ashbe|ashbo|khobor|khub|ekta|duto|korte|parbo|hoyeche|hoise|somosh|somossha|thik|daw|dao|shei|shobai|sobai|jigash|jiges|jigges|jante|paro|parben|bosta|obostha|obstha|obosta|bolmu|bolba|bolbo)\b/i.test(
      lower
    );

  if (isBanglish) {
    return "bn";
  }

  // 5. Hinglish Pattern
  const isHinglish =
    /\b(kaise|karo|kitna|paisa|karna|hai|aap|mera|meri|batao|shukriya|namaste|kripya|kya|bhai|karein|kariye)\b/i.test(
      lower
    );

  if (isHinglish) {
    return "hi";
  }

  // 6. Spanish Keywords
  if (
    /\b(hola|cómo|como|cuánto|cuanto|servicios|servicio|gratis|precio|auditoría|auditoria|posicionamiento|puedes|hablar|ayuda|ayúdame)\b/i.test(
      lower
    )
  ) {
    return "es";
  }

  // 7. French Keywords
  if (
    /\b(bonjour|salut|comment|combien|services|service|gratuit|prix|référencement|referencement|pouvez|aide|aidez)\b/i.test(
      lower
    )
  ) {
    return "fr";
  }

  // 8. German Keywords
  if (
    /\b(hallo|guten|wie|wieviel|kosten|preis|kostenlos|optimierung|webseite|können|hilfe|helfen)\b/i.test(
      lower
    )
  ) {
    return "de";
  }

  // Default to English for all standard Latin words (e.g. "halp me", "help me", "who are you")
  return "en";
}

// Multilingual topic responses
export const MULTILINGUAL_CONTENT = {
  // Language Switch & Confirmation
  languageSwitch: {
    bn: `হ্যাঁ, আমি অবশ্যই বাংলায় কথা বলতে পারি! 😊\n\nআমি মোঃ হারুন অর রশিদের এআই এসইও অ্যাসিস্ট্যান্ট। হারুনের ৫+ বছরের অভিজ্ঞতা, টেকনিক্যাল এসইও, ব্যাকলিংক, সার্ভিস প্যাকেজ, প্রাইসিং বা ফ্রি অডিট নিয়ে যেকোনো প্রশ্ন বাংলায় করতে পারেন — আমি বাংলায় উত্তর দিতে প্রস্তুত!`,
    banglish: `হ্যাঁ ভাই, আমি বাংলিশ (Banglish) এবং বাংলা দুটোই বুঝতে ও কথা বলতে পারি! 😊\n\nHarun-এর SEO services, packages, pricing, Google ranking, technical audit ba backlink niye apnar ja proshno ache shob bolte paren!`,
    ar: `نعم، بالتأكيد يمكنني التحدث باللغة العربية بطلاقة! 😊\n\nأنا المساعد الذكي لمحمد هارون الرشيد، خبير تحسين محركات البحث (SEO). يمكنك سؤالي عن خدمات السيو، تدقيق الموقع، والأسعار بالعربية!`,
    hi: `हाँ, मैं हिन्दी में बात कर सकता हूँ! 😊\n\nमैं मोहम्मद हारून और राशिद का AI SEO सहायक हूँ। आप वेबसाइट रैंकिंग, टेक्निकल एसईओ, पैकेज या मुफ़्त ऑडिट के बारे में कुछ भी पूछ सकते हैं!`,
    es: `¡Sí, por supuesto que puedo hablar en español! 😊\n\nSoy el asistente de IA de Md. Harun or Roshid. ¡Puedes hacerme cualquier pregunta sobre servicios de SEO, auditorías gratuitas y posicionamiento en Google en español!`,
    fr: `Oui, je peux tout à fait parler en français! 😊\n\nJe suis l'assistant IA de Md. Harun or Roshid. Posez-moi toutes vos questions sur le référencement naturel et nos services SEO en français!`,
    de: `Ja, natürlich kann ich Deutsch sprechen! 😊\n\nIch bin der KI-Assistent von Md. Harun or Roshid. Fragen Sie mich gerne alles über SEO-Dienstleistungen und Google-Rankings auf Deutsch!`,
    en: `Sure! I can communicate in English fluently. Feel free to ask me anything about Md. Harun or Roshid's SEO services, pricing, or request a free manual audit!`,
  },

  // 1. Identity & About Harun
  about: {
    en: `Md. Harun or Roshid is a Senior SEO Executive with 5+ years of practical search engine optimization experience.\n\n` +
      `• Currently serving as SEO Executive at ScaleUP Ads Agency (since July 2025).\n` +
      `• Successfully optimized 100+ websites across the USA, UK, Australia, Canada, UAE, and Bangladesh.\n` +
      `• Specializes in Technical SEO diagnostics, manual White-Hat backlink building, search intent keyword research, and Google Business Profile optimization.\n\n` +
      `You can chat directly with Harun on WhatsApp (${HARUN_PROFILE.whatsapp})!`,
    bn: `মোঃ হারুন অর রশিদ একজন সিনিয়র এসইও এক্সিকিউটিভ, যার ৫+ বছরের বাস্তব সার্চ ইঞ্জিন অপ্টিমাইজেশন অভিজ্ঞতা রয়েছে।\n\n` +
      `• বর্তমানে ScaleUP Ads এজেন্সিতে SEO Executive হিসেবে কর্মরত (জুলাই ২০২৫ থেকে)।\n` +
      `• যুক্তরাষ্ট্র, যুক্তরাজ্য, অস্ট্রেলিয়া, কানাডা, দুবাই ও বাংলাদেশের ১০০+ ওয়েবসাইটে সফলভাবে কাজ করেছেন।\n` +
      `• টেকনিক্যাল এসইও, হোয়াইট-হ্যাট ব্যাকলিংক ও গুগল র‍্যাংকিংয়ে পারদর্শী।\n\n` +
      `সরাসরি কথা বলতে হোয়াটসঅ্যাপে মেসেজ দিন: ${HARUN_PROFILE.whatsapp}`,
    ar: `محمد هارون الرشيد هو خبير تنفيذي أول في تحسين محركات البحث (Senior SEO Executive) بخبرة تزيد عن 5 سنوات.\n\n` +
      `• يعمل حالياً في وكالة ScaleUP Ads Agency (منذ يوليو 2025).\n` +
      `• قام بتحسين أكثر من 100 موقع إلكتروني في الولايات المتحدة، بريطانيا، أستراليا، كندا، الإمارات وبنغلاديش.\n` +
      `• متخصص في السيو التقني (Technical SEO)، بناء الروابط الخلفية الآمنة، وسيو المتاجر والمواقع المحلية.\n\n` +
      `للتواصل المباشر عبر واتساب: ${HARUN_PROFILE.whatsapp}`,
    hi: `मोहम्मद हारून और राशिद एक सीनियर एसईओ एक्जीक्यूटिव हैं, जिनके पास 5+ वर्षों का व्यावहारिक अनुभव है।\n\n` +
      `• वर्तमान में ScaleUP Ads Agency में SEO Executive के रूप में कार्यरत हैं।\n` +
      `• USA, UK, ऑस्ट्रेलिया, कनाडा, UAE और बांग्लादेश में 100+ वेबसाइटों को सफलतापूर्वक रैंक कराया है।\n` +
      `• टेक्निकल एसईओ, व्हाइट-हैट बैकलिंक्स और गूगल रैंकिंग में विशेषज्ञ हैं।\n\n` +
      `व्हाट्सएप पर संपर्क करें: ${HARUN_PROFILE.whatsapp}`,
    es: `Md. Harun or Roshid es un Ejecutivo Senior de SEO con más de 5 años de experiencia práctica.\n\n` +
      `• Actualmente en ScaleUP Ads Agency (desde julio de 2025).\n` +
      `• Ha optimizado más de 100 sitios web en EE. UU., Reino Unido, Australia, Canadá, Emiratos Árabes y Bangladesh.\n` +
      `• Especialista en SEO técnico, link building ético y posicionamiento en Google.\n\n` +
      `¡Habla directamente con Harun por WhatsApp (${HARUN_PROFILE.whatsapp})!`,
    fr: `Md. Harun or Roshid est un Responsable SEO Senior avec plus de 5 ans d'expérience pratique.\n\n` +
      `• Actuellement chez ScaleUP Ads Agency (depuis juillet 2025).\n` +
      `• Plus de 100 sites web optimisés aux États-Unis, Royaume-Uni, Canada, Émirats et Bangladesh.\n` +
      `• Spécialiste du SEO technique, des backlinks éthiques et du référencement Google.\n\n` +
      `Contact direct sur WhatsApp: ${HARUN_PROFILE.whatsapp}`,
    de: `Md. Harun or Roshid ist ein Senior SEO Executive mit mehr als 5 Jahren praktischer Erfahrung.\n\n` +
      `• Derzeit bei der ScaleUP Ads Agency (seit Juli 2025).\n` +
      `• Über 100 optimierte Websites in den USA, Großbritannien, Kanada, den VAE und Bangladesch.\n` +
      `• Experte für technisches SEO, ethisches Linkbuilding und Google-Rankings.\n\n` +
      `Direkter WhatsApp-Kontakt: ${HARUN_PROFILE.whatsapp}`,
  },

  // 2. Services Overview
  services: {
    en: `Harun offers comprehensive, high-ROI SEO solutions:\n\n` +
      `1. 🔧 Technical SEO Diagnostics: Crawl errors, GSC indexing issues, robots.txt, sitemaps, canonical tags & Core Web Vitals.\n` +
      `2. 🔗 High-Authority Link Building: 100% manual white-hat backlinks (Web 2.0, niche citations, outreach; zero PBNs).\n` +
      `3. 🎯 Keyword Research & Intent Mapping: Uncovering commercial, high-converting search keywords.\n` +
      `4. 📍 Local SEO & Google Business Profile: Dominating Google Maps 3-Pack rankings.\n` +
      `5. 🛍️ eCommerce SEO: Shopify, WooCommerce, WordPress & custom web platforms.\n` +
      `6. 📊 Monthly SEO Retainers: Continuous GSC tracking and weekly/monthly performance reporting.`,
    bn: `হারুন আপনার ওয়েবসাইটের জন্য পূর্ণাঙ্গ এসইও সমাধান দিয়ে থাকেন:\n\n` +
      `১. 🔧 টেকনিক্যাল এসইও (ক্রলিং ও ইনডেক্সিং এরর ফিক্স, সাইটম্যাপ, ক্যানোনিকাল ট্যাগ)\n` +
      `২. 🔗 হোয়াইট-হ্যাট ব্যাকলিংক ও লিঙ্ক বিল্ডিং (১০০% ম্যানুয়াল, জিরো PBN)\n` +
      `৩. 🎯 কিওয়ার্ড রিসার্চ ও সার্চ ইনটেন্ট ম্যাপিং\n` +
      `৪. 📍 লোকাল এসইও ও গুগল বিজনেস প্রোফাইল (ম্যাপ প্যাক র‍্যাংকিং)\n` +
      `৫. 🛍️ ই-কমার্স এসইও (Shopify, WordPress/WooCommerce)\n` +
      `৬. 📊 মান্থলি ফুল এসইও ম্যানেজমেন্ট ও সার্বক্ষণিক ট্র্যাকিং।`,
    ar: `يقدم هارون خدمات سيو شاملة لنمو مستدام:\n\n` +
      `1. 🔧 السيو التقني (Technical SEO): حل مشاكل الزحف والفهرسة، ملفات sitemap و robots.txt، وسرعة الموقع.\n` +
      `2. 🔗 بناء الروابط الخلفية الآمنة: روابط يدوية 100% عالية الجودة بدون أي شبكات PBN خطرة.\n` +
      `3. 🎯 البحث عن الكلمات المفتاحية ذات نية الشراء العالية.\n` +
      `4. 📍 السيو المحلي وملف Google Business Profile للظهور في خرائط جوجل.\n` +
      `5. 🛍️ سيو المتاجر الإلكترونية (Shopify, WooCommerce, WordPress).\n` +
      `6. 📊 إدارة شهرية وتقارير أداء دورية من Google Search Console.`,
    hi: `हारून आपकी वेबसाइट के लिए सम्पूर्ण एसईओ सेवाएं प्रदान करते हैं:\n\n` +
      `1. 🔧 टेक्निकल एसईओ (क्रॉलिंग, इंडेक्सिंग त्रुटियां, साइटमैप, कैनोनिकल टैग समाधान)\n` +
      `2. 🔗 हाई-अथॉरिटी बैकलिंक्स (100% मैन्युअल, बिना किसी PBN के)\n` +
      `3. 🎯 हाई-कन्वर्टिंग कीवर्ड रिसर्च और इंटेंट मैपिंग\n` +
      `4. 📍 लोकल एसईओ और गूगल बिजनेस प्रोफाइल (मैप 3-पैक)\n` +
      `5. 🛍️ ई-कॉमर्स एसईओ (Shopify, WooCommerce, WordPress)\n` +
      `6. 📊 मासिक एसईओ प्रबंधन और विस्तृत रिपोर्टिंग।`,
    es: `Harun ofrece servicios completos de SEO:\n\n` +
      `1. 🔧 SEO Técnico: Corrección de errores de rastreo, indexación, sitemaps y Core Web Vitals.\n` +
      `2. 🔗 Link Building Ético: Backlinks 100% manuales de alta autoridad (cero PBN).\n` +
      `3. 🎯 Investigación de Palabras Clave de alta intención comercial.\n` +
      `4. 📍 SEO Local y Google Business Profile.\n` +
      `5. 🛍️ SEO para Comercio Electrónico (Shopify, WooCommerce, WordPress).\n` +
      `6. 📊 Gestión Mensual de SEO e informes transparentes.`,
    fr: `Harun propose des solutions SEO complètes:\n\n` +
      `1. 🔧 SEO Technique: Résolution des erreurs d'indexation, sitemaps, robots.txt et Core Web Vitals.\n` +
      `2. 🔗 Création de Backlinks: 100% manuel, éthique (aucun PBN).\n` +
      `3. 🎯 Recherche de mots-clés stratégiques et intention de recherche.\n` +
      `4. 📍 SEO Local & Google Business Profile.\n` +
      `5. 🛍️ SEO E-commerce (Shopify, WooCommerce, WordPress).\n` +
      `6. 📊 Gestion mensuelle et rapports de performance détaillés.`,
    de: `Harun bietet umfassende SEO-Dienstleistungen:\n\n` +
      `1. 🔧 Technisches SEO: Behebung von Indexierungs- und Crawling-Fehlern, Core Web Vitals.\n` +
      `2. 🔗 Ethisches Linkbuilding: 100% manuelle, hochwertige Backlinks (ohne PBNs).\n` +
      `3. 🎯 Keyword-Recherche mit kommerzieller Suchintention.\n` +
      `4. 📍 Lokales SEO & Google Unternehmensprofil.\n` +
      `5. 🛍️ E-Commerce SEO (Shopify, WooCommerce, WordPress).\n` +
      `6. 📊 Monatliche Betreuung und transparente Berichte.`,
  },

  // 3. Free SEO Audit
  audit: {
    en: `Yes! Harun offers a 100% Complimentary Manual SEO Audit for your website! 🎯\n\n` +
      `The audit covers:\n` +
      `• Google Search Console crawl & indexation health\n` +
      `• Canonical tags & duplicate content check\n` +
      `• Core Web Vitals & site speed bottlenecks\n` +
      `• Backlink toxicity & competitor authority gap analysis\n` +
      `• Actionable priority roadmap for rapid ranking wins.\n\n` +
      `Submit your URL via the form on this page or send it directly on WhatsApp (${HARUN_PROFILE.whatsapp})!`,
    bn: `হ্যাঁ! হারুন আপনার ওয়েবসাইটের জন্য একটি ১০০% ফ্রি ম্যানুয়াল এসইও অডিট (Free SEO Audit) প্রদান করছেন! 🎯\n\n` +
      `অডিটে যা থাকবে:\n` +
      `• ওয়েবসাইটের ইনডেক্সিং ও ক্রলিং স্বাস্থ্য পরীক্ষা\n` +
      `• স্পিড ও কোর ওয়েব ভাইটালস অ্যানালাইসিস\n` +
      `• ব্যাকলিংক ও কম্পিটিটর গ্যাপ রিপোর্ট\n` +
      `• দ্রুত র‍্যাঙ্ক করার স্টেপ-বাই-স্টেপ গাইডলাইন।\n\n` +
      `ফর্মটি পূরণ করুন অথবা সরাসরি হোয়াটসঅ্যাপে (${HARUN_PROFILE.whatsapp}) ওয়েবসাইটের লিংক পাঠান।`,
    ar: `نعم! يقدم هارون تدقيق سيو مجاني ويدوي 100% لموقعك الإلكتروني! 🎯\n\n` +
      `يشمل التدقيق:\n` +
      `• فحص صحة الزحف والفهرسة في Google Search Console\n` +
      `• فحص سرعة الموقع و Core Web Vitals\n` +
      `• تحليل الروابط الخلفية وجودتها مقارنة بالمنافسين\n` +
      `• خطة عمل واضحة لتحسين الترتيب في جوجل.\n\n` +
      `يمكنك إرسال رابط موقعك عبر النموذج في الصفحة أو عبر واتساب (${HARUN_PROFILE.whatsapp})!`,
    hi: `हाँ! हारून आपकी वेबसाइट के लिए 100% मुफ़्त मैन्युअल एसईओ ऑडिट प्रदान करते हैं! 🎯\n\n` +
      `ऑडिट में शामिल है:\n` +
      `• गूगल सर्च कंसोल क्रॉल और इंडेक्सिंग रिपोर्ट\n` +
      `• साइट स्पीड और कोर वेब वाइटल्स की जांच\n` +
      `• बैकलिंक्स और प्रतिस्पर्धियों का विश्लेषण\n` +
      `• रैंकिंग सुधारने के लिए विस्तृत योजना।\n\n` +
      `इस पेज पर दिए गए फॉर्म से अनुरोध करें या सीधे व्हाट्सएप (${HARUN_PROFILE.whatsapp}) पर वेबसाइट लिंक भेजें!`,
    es: `¡Sí! Harun ofrece una Auditoría SEO Manual 100% Gratuita para tu sitio web. 🎯\n\n` +
      `Incluye análisis de indexación, Core Web Vitals, perfil de backlinks y hoja de ruta para posicionar en Google.\n\n` +
      `¡Envía tu URL a través del formulario o por WhatsApp (${HARUN_PROFILE.whatsapp})!`,
    fr: `Oui! Harun propose un Audit SEO Manuel 100% Gratuit pour votre site web. 🎯\n\n` +
      `Comprend l'analyse de l'indexation, la vitesse, les backlinks et un plan d'action concret.\n\n` +
      `Envoyez votre URL via le formulaire ou directement sur WhatsApp (${HARUN_PROFILE.whatsapp})!`,
    de: `Ja! Harun bietet ein 100% kostenloses manuelles SEO-Audit für Ihre Website an. 🎯\n\n` +
      `Umfasst Indexierungsprüfung, Core Web Vitals, Backlink-Analyse und einen konkreten Maßnahmenplan.\n\n` +
      `Senden Sie Ihre URL über das Formular oder direkt per WhatsApp (${HARUN_PROFILE.whatsapp})!`,
  },

  // 4. Pricing & Packages
  pricing: {
    en: `Harun provides flexible, results-driven SEO packages:\n\n` +
      `1. 🎯 One-Time Deep Technical Audit & Fixes: Complete diagnostic and error resolution.\n` +
      `2. 📈 Monthly SEO Retainers: Full-scale ongoing optimization (Technical, On-Page, Link Building, GSC Tracking) for eCommerce, SaaS, and local businesses.\n` +
      `3. 🔗 Dedicated Backlink Campaigns: 100% manual, high-DA outreach packages.\n\n` +
      `Every project starts with the FREE Manual SEO Audit to evaluate exact site requirements. Message Harun on WhatsApp (${HARUN_PROFILE.whatsapp}) for a custom quote in USD or BDT!`,
    bn: `হারুনের এসইও সার্ভিস প্যাকেজ ওয়েবসাইটের আকার ও লক্ষ্য অনুযায়ী নির্ধারণ করা হয়:\n\n` +
      `১. ওয়ান-টাইম টেকনিক্যাল অডিট ও সমাধান\n` +
      `২. মান্থলি ফুল এসইও ম্যানেজমেন্ট (টেকনিক্যাল + অন-পেজ + ব্যাকলিংক)\n` +
      `৩. ডেডিকেটেড লিংক বিল্ডিং প্যাকেজ।\n\n` +
      `আপনার বাজেটের মধ্যে সেরা কোটেশনের জন্য ফ্রি অডিট নিন অথবা হোয়াটসঅ্যাপে (${HARUN_PROFILE.whatsapp}) সরাসরি কথা বলুন।`,
    ar: `يقدم هارون باقات سيو مخصصة تناسب أهدافك وميزانيتك:\n\n` +
      `1. تدقيق تقني شامل وخطة عمل لمرة واحدة.\n` +
      `2. إدارة سيو شهرية متكاملة (سيو تقني + محتوى + روابط خلفية + تقارير دورية).\n` +
      `3. حملات بناء روابط خلفية عالية الجودة وآمنة 100%.\n\n` +
      `نبدأ دائماً بالتدقيق المجاني لتحديد الاحتياجات بدقة. تواصل عبر واتساب (${HARUN_PROFILE.whatsapp}) للحصول على عرض سعر مخصص!`,
    hi: `हारून वेबसाइट की आवश्यकताओं के अनुसार लचीले एसईओ पैकेज प्रदान करते हैं:\n\n` +
      `1. वन-टाइम डीप टेक्निकल ऑडिट और समाधान\n` +
      `2. मासिक एसईओ रिटेनर (ऑन-पेज, टेक्निकल और बैकलिंक्स)\n` +
      `3. उच्च गुणवत्ता वाले लिंक बिल्डिंग पैकेज।\n\n` +
      `कस्टम कोटेशन के लिए व्हाट्सएप (${HARUN_PROFILE.whatsapp}) पर संपर्क करें!`,
    es: `Harun ofrece paquetes de SEO flexibles y adaptados a tus objetivos:\n\n` +
      `• Auditoría Técnica Única y Correcciones\n` +
      `• Gestión Mensual Completa de SEO\n` +
      `• Campañas de Link Building de Alta Autoridad\n\n` +
      `¡Escríbenos por WhatsApp (${HARUN_PROFILE.whatsapp}) para una cotización personalizada!`,
    fr: `Harun propose des forfaits SEO flexibles et adaptés à vos besoins:\n\n` +
      `• Audit technique ponctuel et résolutions\n` +
      `• Gestion SEO mensuelle complète\n` +
      `• Campagnes de netlinking de haute autorité\n\n` +
      `Contactez Harun sur WhatsApp (${HARUN_PROFILE.whatsapp}) pour un devis personnalisé!`,
    de: `Harun bietet flexible und zielgerichtete SEO-Pakete an:\n\n` +
      `• Einmaliges technisches Audit & Fehlerbehebung\n` +
      `• Monatliche Full-Service-SEO-Betreuung\n` +
      `• Gezielte hochwertige Backlink-Kampagnen\n\n` +
      `Schreiben Sie Harun auf WhatsApp (${HARUN_PROFILE.whatsapp}) für ein individuelles Angebot!`,
  },

  // 5. Contact & WhatsApp
  contact: {
    en: `You can reach Md. Harun or Roshid directly at:\n\n` +
      `📱 WhatsApp: ${HARUN_PROFILE.whatsapp} (Fastest replies)\n` +
      `📧 Direct Email: ${HARUN_PROFILE.email}\n` +
      `🏢 Agency: ScaleUP Ads Agency (SEO Executive)\n` +
      `📍 Location: Dhaka, Bangladesh (Working globally across all timezones)\n\n` +
      `Feel free to send a message on WhatsApp anytime!`,
    bn: `মোঃ হারুন অর রশিদের সাথে সরাসরি যোগাযোগ করার মাধ্যম:\n\n` +
      `📱 হোয়াটসঅ্যাপ: ${HARUN_PROFILE.whatsapp} (দ্রুত উত্তরের জন্য)\n` +
      `📧 ইমেইল: ${HARUN_PROFILE.email}\n` +
      `📍 অবস্থান: ঢাকা, বাংলাদেশ (বিশ্বব্যাপী ক্লায়েন্টদের সাথে কাজ করেন)।\n\n` +
      `হোয়াটসঅ্যাপে যেকোনো প্রশ্ন পাঠাতে পারেন!`,
    ar: `يمكنك التواصل مباشرة مع محمد هارون الرشيد عبر:\n\n` +
      `📱 واتساب: ${HARUN_PROFILE.whatsapp} (الرد الأسرع)\n` +
      `📧 البريد الإلكتروني: ${HARUN_PROFILE.email}\n` +
      `📍 الموقع: دكا، بنغلاديش (يعمل مع عملاء دوليين في جميع المناطق الزمنية).\n\n` +
      `أهلاً بك للتواصل في أي وقت!`,
    hi: `आप सीधे मोहम्मद हारून और राशिद से संपर्क कर सकते हैं:\n\n` +
      `📱 व्हाट्सएप: ${HARUN_PROFILE.whatsapp} (त्वरित उत्तर)\n` +
      `📧 ईमेल: ${HARUN_PROFILE.email}\n` +
      `📍 स्थान: ढाका, बांग्लादेश (वैश्विक ग्राहकों के लिए उपलब्ध)।\n\n` +
      `व्हाट्सएप पर कभी भी मैसेज भेजें!`,
    es: `Puedes contactar directamente a Md. Harun or Roshid:\n\n` +
      `📱 WhatsApp: ${HARUN_PROFILE.whatsapp}\n` +
      `📧 Email: ${HARUN_PROFILE.email}\n\n` +
      `¡Envíanos un mensaje en cualquier momento!`,
    fr: `Vous pouvez contacter directement Md. Harun or Roshid:\n\n` +
      `📱 WhatsApp: ${HARUN_PROFILE.whatsapp}\n` +
      `📧 Email: ${HARUN_PROFILE.email}\n\n` +
      `N'hésitez pas à nous écrire à tout moment!`,
    de: `Sie können Md. Harun or Roshid direkt erreichen:\n\n` +
      `📱 WhatsApp: ${HARUN_PROFILE.whatsapp}\n` +
      `📧 E-Mail: ${HARUN_PROFILE.email}\n\n` +
      `Schreiben Sie uns gerne jederzeit auf WhatsApp!`,
  },

  // 6. Timeline / How Long
  timeline: {
    en: `Here is the realistic SEO ranking timeline:\n\n` +
      `• Weeks 1 to 4: Technical crawl fixes, sitemap indexing, and Search Console impression growth.\n` +
      `• Months 2 to 3: Keyword position jumps from page 4-5 up to page 1-2 as domain authority builds.\n` +
      `• Months 3 to 6: Top 3-5 rankings for commercial search terms, producing steady inbound organic traffic and leads.\n\n` +
      `SEO is a compounding long-term investment that brings sustainable, high-ROI organic revenue.`,
    bn: `একটি ওয়েবসাইটের এসইও ফলাফলের স্বাভাবিক সময়রেখা:\n\n` +
      `• ১ থেকে ৪ সপ্তাহ: টেকনিক্যাল ফিক্স, ইনডেক্সিং সমাধান ও সার্চ কনসোল ইমপ্রেশন বৃদ্ধি।\n` +
      `• ২ থেকে ৩ মাস: কিওয়ার্ড পজিশনে স্পষ্ট অগ্রগতি ও ক্লিক বৃদ্ধি।\n` +
      `• ৩ থেকে ৬ মাস: মূল কমার্শিয়াল কিওয়ার্ডে প্রথম পাতার শীর্ষ র‍্যাংকিং ও নিয়মিত কাস্টমার ট্রাফিক।`,
    ar: `الجدول الزمني الواقعي لنتائج السيو:\n\n` +
      `• من 1 إلى 4 أسابيع: حل الأخطاء التقنية، تحسين الفهرسة وظهور النتائج في Search Console.\n` +
      `• من 2 إلى 3 أشهر: تحسن ملحوظ في ترتيب الكلمات المفتاحية والانتقال للصفحات الأولى.\n` +
      `• من 3 إلى 6 أشهر: الوصول إلى المراكز الأولى وزيادة الزوار والعملاء المستهدفين بشكل مستمر.`,
    hi: `एसईओ परिणामों की वास्तविक समयरेखा:\n\n` +
      `• 1 से 4 सप्ताह: तकनीकी सुधार, इंडेक्सिंग और सर्च कंसोल इंप्रेशन में वृद्धि।\n` +
      `• 2 से 3 महीने: कीवर्ड रैंकिंग में उछाल और ऑर्गेनिक क्लिक्स में सुधार।\n` +
      `• 3 से 6 महीने: गूगल के पहले पेज पर शीर्ष रैंकिंग और लगातार ग्राहक ट्रैफ़िक।`,
    es: `Cronograma realista de resultados de SEO:\n\n` +
      `• Semanas 1 a 4: Correcciones técnicas y aumento de impresiones en Search Console.\n` +
      `• Meses 2 a 3: Movimiento notable de palabras clave hacia la primera y segunda página.\n` +
      `• Meses 3 a 6: Primeros puestos para términos comerciales clave y tráfico orgánico constante.`,
    fr: `Délai réaliste pour les résultats SEO:\n\n` +
      `• Semaines 1 à 4: Corrections techniques et hausse des impressions sur Search Console.\n` +
      `• Mois 2 à 3: Progression des mots-clés vers la première page.\n` +
      `• Mois 3 à 6: Top 3 à 5 sur Google et trafic ciblé durable.`,
    de: `Realistischer Zeitrahmen für SEO-Ergebnisse:\n\n` +
      `• Wochen 1 bis 4: Technische Optimierung und Anstieg der Impressionen in der Search Console.\n` +
      `• Monate 2 bis 3: Deutliche Keyword-Sprünge in Richtung Seite 1.\n` +
      `• Monate 3 bis 6: Top-Platzierungen bei Google und nachhaltiger Traffic.`,
  },

  // 7. Greetings
  greeting: {
    en: `Hello! 👋 Welcome to Harun SEO. I am Md. Harun or Roshid's AI SEO Assistant.\n\n` +
      `How can I help your website today? You can ask me about:\n` +
      `• Technical SEO & indexing issues\n` +
      `• White-Hat link building & backlinks\n` +
      `• Free SEO Audit & website review\n` +
      `• Pricing, monthly retainers, or WhatsApp contact (${HARUN_PROFILE.whatsapp})!`,
    bn: `হ্যালো! 👋 হারুন এসইও-তে স্বাগতম। আমি মোঃ হারুন অর রশিদের এআই এসইও অ্যাসিস্ট্যান্ট।\n\n` +
      `আপনার ওয়েবসাইটের গুগল র‍্যাংকিং বাড়াতে আজ কীভাবে সাহায্য করতে পারি? এসইও সার্ভিস, খরচ, ব্যাকলিংক বা ফ্রি অডিট সম্পর্কে যেকোনো প্রশ্ন করতে পারেন!`,
    ar: `مرحباً بك! 👋 أنا المساعد الذكي لمحمد هارون الرشيد، خبير تحسين محركات البحث.\n\n` +
      `كيف يمكنني مساعدتك اليوم؟ يمكنك سؤالي عن خدمات السيو التقني، بناء الروابط، الأسعار، أو طلب تدقيق سيو مجاني لموقعك!`,
    hi: `नमस्ते! 👋 हारून एसईओ में आपका स्वागत है। मैं मोहम्मद हारून और राशिद का AI SEO सहायक हूँ।\n\n` +
      `आज मैं आपकी वेबसाइट की गूगल रैंकिंग बढ़ाने में कैसे मदद कर सकता हूँ? आप एसईओ सेवाओं, बैकलिंक्स, पैकेज या मुफ़्त ऑडिट के बारे में कुछ भी पूछ सकते हैं!`,
    es: `¡Hola! 👋 Bienvenido a Harun SEO. Soy el asistente de IA de Md. Harun or Roshid.\n\n` +
      `¿Cómo puedo ayudarte hoy con el posicionamiento de tu sitio web? ¡Pregúntame sobre SEO técnico, backlinks, auditoría gratuita o precios!`,
    fr: `Bonjour! 👋 Bienvenue chez Harun SEO. Je suis l'assistant IA de Md. Harun or Roshid.\n\n` +
      `Comment puis-je vous aider aujourd'hui? Posez-moi des questions sur le SEO technique, les backlinks, l'audit gratuit ou les tarifs!`,
    de: `Hallo! 👋 Willkommen bei Harun SEO. Ich bin der KI-Assistent von Md. Harun or Roshid.\n\n` +
      `Wie kann ich Ihnen heute bei Ihren Google-Rankings helfen? Fragen Sie mich gerne nach technischem SEO, Backlinks, Preisen oder einem kostenlosen Audit!`,
  },

  // 8. General fallback for any other question
  fallback: {
    en: `Thank you for your question! As Md. Harun or Roshid's AI SEO Assistant, I can confirm that Harun specializes in solving organic search hurdles, technical ranking roadblocks, and ethical backlink growth for clients worldwide.\n\n` +
      `Harun has 5+ years of experience and has optimized 100+ websites globally (USA, UK, Canada, Australia, UAE, BD).\n\n` +
      `For specific project queries, claim your Free SEO Audit using the form on this page or chat directly with Harun on WhatsApp (${HARUN_PROFILE.whatsapp})!`,
    bn: `হ্যাঁ ভাই, বলুন কীভাবে সাহায্য করতে পারি? 😊 আমি মোঃ হারুন অর রশিদের এআই এসইও অ্যাসিস্ট্যান্ট।\n\nআপনার ওয়েবসাইট র‍্যাংকিং, টেকনিক্যাল অডিট, ব্যাকলিংক বা যেকোনো এসইও বিষয় নিয়ে নির্দ্বিধায় জিজ্ঞেস করতে পারেন! সরাসরি হারুনের সাথে কথা বলতে চাইলে হোয়াটসঅ্যাপেও (${HARUN_PROFILE.whatsapp}) নক দিতে পারেন।`,
    ar: `شكراً لسؤالك! بصفتي المساعد الذكي لمحمد هارون الرشيد، أؤكد لك أن هارون متخصص في حل جميع تحديات السيو وتصدر نتائج البحث في جوجل للعملاء حول العالم.\n\n` +
      `يمتلك هارون أكثر من 5 سنوات من الخبرة وقام بتحسين أكثر من 100 موقع في أمريكا وأوروبا والخليج.\n\n` +
      `لمناقشة تفاصيل مشروعك أو الحصول على تدقيق مجاني، تواصل مباشرة مع هارون عبر واتساب (${HARUN_PROFILE.whatsapp})!`,
    hi: `आपके प्रश्न के लिए धन्यवाद! मोहम्मद हारून और राशिद के AI सहायक के रूप में, मैं आपकी वेबसाइट की गूगल रैंकिंग, टेक्निकल समस्याओं और बैकलिंक्स को हल करने में मदद कर सकता हूँ।\n\n` +
      `हारून के पास 5+ वर्षों का अनुभव है और उन्होंने 100+ वेबसाइटों को रैंक कराया है।\n\n` +
      `अपनी वेबसाइट के बारे में चर्चा करने के लिए सीधे व्हाट्सएप (${HARUN_PROFILE.whatsapp}) पर संपर्क करें या मुफ़्त ऑडिट का अनुरोध करें!`,
    es: `¡Gracias por tu pregunta! Como asistente de IA de Md. Harun or Roshid, puedo ayudarte con cualquier aspecto de SEO técnico, backlinks y posicionamiento en Google.\n\n` +
      `Harun tiene más de 5 años de experiencia y más de 100 sitios web optimizados a nivel global.\n\n` +
      `¡Escríbenos por WhatsApp (${HARUN_PROFILE.whatsapp}) para revisar tu proyecto o solicita tu auditoría gratuita!`,
    fr: `Merci pour votre question! En tant qu'assistant IA de Md. Harun or Roshid, je peux vous aider pour le SEO technique, les backlinks et le classement Google.\n\n` +
      `Harun a plus de 5 ans d'expérience et plus de 100 sites web optimisés dans le monde.\n\n` +
      `Contactez Harun sur WhatsApp (${HARUN_PROFILE.whatsapp}) pour discuter de votre projet!`,
    de: `Vielen Dank für Ihre Frage! Als KI-Assistent von Md. Harun or Roshid helfe ich Ihnen gerne bei technischem SEO, Backlinks und Google-Rankings.\n\n` +
      `Harun verfügt über 5+ Jahre Erfahrung und hat über 100 Websites weltweit optimiert.\n\n` +
      `Schreiben Sie Harun direkt auf WhatsApp (${HARUN_PROFILE.whatsapp}) für ein persönliches Gespräch!`,
  },

  // 9. Help & Assistance
  help: {
    en: `Hello! How can I help you today? 😊\n\nI am Md. Harun or Roshid's AI SEO Assistant. Ask me anything about:\n• Technical SEO diagnostics & indexing fixes\n• Manual white-hat backlink building\n• Getting a 100% Free SEO Audit for your site\n• SEO Pricing & monthly retainers\n• Or message Harun directly on WhatsApp (${HARUN_PROFILE.whatsapp})!`,
    bn: `হ্যালো! কীভাবে সাহায্য করতে পারি বলুন? 😊\n\nআমি মোঃ হারুন অর রশিদের এআই এসইও অ্যাসিস্ট্যান্ট। হারুনের ৫+ বছরের এসইও অভিজ্ঞতা রয়েছে। আপনার ওয়েবসাইট র‍্যাংকিং, টেকনিক্যাল অডিট, ব্যাকলিংক বা যেকোনো বিষয় নিয়ে প্রশ্ন করতে পারেন!`,
    ar: `مرحباً بك! كيف يمكنني مساعدتك اليوم؟ 😊\n\nأنا المساعد الذكي لمحمد هارون الرشيد، خبير تحسين محركات البحث. يمكنك سؤالي عن خدمات السيو، تدقيق الموقع، والأسعار!`,
    hi: `नमस्ते! मैं आपकी किस प्रकार मदद कर सकता हूँ? 😊\n\nमैं मोहम्मद हारून और राशिद का AI SEO सहायक हूँ। आप वेबसाइट रैंकिंग, टेक्निकल এসইও या मुफ़्त ऑडिट के बारे में कुछ भी पूछ सकते हैं!`,
    es: `¡Hola! ¿Cómo puedo ayudarte hoy? 😊\n\nSoy el asistente de IA de Md. Harun or Roshid. Pregúntame sobre servicios de SEO, auditoría gratuita o posicionamiento en Google.`,
    fr: `Bonjour! Comment puis-je vous aider aujourd'hui? 😊\n\nJe suis l'assistant IA de Md. Harun or Roshid. Posez-moi toutes vos questions sur le référencement et l'audit gratuit!`,
    de: `Hallo! Wie kann ich Ihnen heute helfen? 😊\n\nIch bin der KI-Assistent von Md. Harun or Roshid. Fragen Sie mich gerne nach SEO-Dienstleistungen oder einem kostenlosen Audit!`,
  },

  // 10. Casual Bengali Greetings & Everyday Chat
  casualBengali: {
    status: `আলহামদুলিল্লাহ ভাই, সব ভালো! আপনার কি অবস্থা? 😊\n\nআমি মোঃ হারুন অর রশিদের এআই এসইও অ্যাসিস্ট্যান্ট। আপনার ওয়েবসাইট বা প্রজেক্ট কেমন চলছে? কোনো টেকনিক্যাল অডিট বা গুগল র‍্যাংকিং নিয়ে সাহায্য লাগবে?`,
    doing: `এইতো ভাই, ক্লায়েন্টদের ওয়েবসাইটের এসইও, টেকনিক্যাল অডিট আর গুগল র‍্যাংকিং নিয়ে কাজ করছি! 😊 আপনি কেমন আছেন? আপনার ওয়েবসাইটের জন্য কি কোনো পরামর্শ লাগবে?`,
    hey: `আরে ভাই! কি অবস্থা? কেমন আছেন? 👋\n\nআমি হারুনের এআই এসইও অ্যাসিস্ট্যান্ট। আপনার ওয়েবসাইটের কাজ কেমন চলছে? কোনো সার্ভিস বা ফ্রি অডিট নিয়ে আলোচনা করতে চান?`,
    fix: `হ্যাঁ ভাই, কোনো অসুবিধা হলে আমাকে বলুন, আমি ঠিক উত্তর দেওয়ার চেষ্টা করছি! 😊 হারুনের এসইও সার্ভিস, ফ্রি অডিট, ব্যাকলিংক বা প্রাইসিং নিয়ে যেকোনো প্রশ্ন করতে পারেন, কিংবা সরাসরি হারুনের হোয়াটসঅ্যাপেও (${HARUN_PROFILE.whatsapp}) মেসেজ দিতে পারেন!`,
    thanks: `আপনাকে অসংখ্য ধন্যবাদ ভাই! 😊 যেকোনো সময় কোনো সাহায্য লাগলে নক করবেন। শুভকামনা!`,
  },
};

// Universal multilingual answer synthesizer
export function synthesizeAnswer(query: string, sessionLang?: string): string {
  const clean = query.trim().toLowerCase();

  if (!clean) {
    return MULTILINGUAL_CONTENT.greeting.en;
  }

  const lang = detectLanguage(query, sessionLang);

  // 0. Language Request / "bangla bolo" / "banglish"
  if (
    clean.includes("bangla bolo") ||
    clean.includes("banglay bolo") ||
    clean.includes("bangla bolte") ||
    clean.includes("bangla jano") ||
    clean.includes("বাংলা বলো") ||
    clean.includes("বাংলায় বলো") ||
    clean === "bangla" ||
    clean === "বাংলা"
  ) {
    return MULTILINGUAL_CONTENT.languageSwitch.bn;
  }

  if (clean.includes("banglish") || clean.includes("বাংলিশ")) {
    return MULTILINGUAL_CONTENT.languageSwitch.banglish;
  }

  // 0.1 "ki bosta", "ki obostha", "ki obstha", "obostha ki", "ki khobor"
  if (
    clean.includes("bosta") ||
    clean.includes("obostha") ||
    clean.includes("obstha") ||
    clean.includes("obosta") ||
    clean.includes("ki khobor") ||
    clean.includes("khobor ki") ||
    clean.includes("kemon cholte") ||
    clean.includes("kemon choltase") ||
    clean.includes("kemon cholche")
  ) {
    return MULTILINGUAL_CONTENT.casualBengali.status;
  }

  // 0.2 "ki koro", "ki korcho", "ki koren", "ki koros"
  if (
    clean.includes("ki koro") ||
    clean.includes("ki korcho") ||
    clean.includes("ki koren") ||
    clean.includes("ki koros")
  ) {
    return MULTILINGUAL_CONTENT.casualBengali.doing;
  }

  // 0.3 "kire", "kire mama", "bhai", "vai"
  if (
    clean === "kire" ||
    clean === "kire mama" ||
    clean.startsWith("kire ") ||
    clean === "bhai" ||
    clean === "vai" ||
    clean === "bro"
  ) {
    return MULTILINGUAL_CONTENT.casualBengali.hey;
  }

  // 0.4 "thik koro", "thik koro na", "somossa"
  if (
    clean.includes("thik koro") ||
    clean.includes("thik kore") ||
    clean.includes("somossa") ||
    clean.includes("somossha")
  ) {
    return MULTILINGUAL_CONTENT.casualBengali.fix;
  }

  // 0.5 "help", "halp", "help me", "can you help me", "sahajjo"
  if (
    clean.includes("help") ||
    clean.includes("halp") ||
    clean.includes("sahajjo") ||
    clean.includes("সাহায্য") ||
    clean.includes("مساعدة") ||
    clean.includes("ساعدني") ||
    clean.includes("मदद") ||
    clean.includes("ayuda") ||
    clean.includes("aide") ||
    clean.includes("hilfe")
  ) {
    return MULTILINGUAL_CONTENT.help[lang] || MULTILINGUAL_CONTENT.help.en;
  }

  if (clean.includes("hindi bolo") || clean.includes("हिंदी बोलो") || clean === "hindi") {
    return MULTILINGUAL_CONTENT.languageSwitch.hi;
  }

  if (clean.includes("arabic bolo") || clean.includes("تكلم عربي") || clean === "arabic") {
    return MULTILINGUAL_CONTENT.languageSwitch.ar;
  }

  if (clean.includes("speak english") || clean.includes("english bolo") || clean === "english") {
    return MULTILINGUAL_CONTENT.languageSwitch.en;
  }

  // 1. Identity / Who is Harun / About
  if (
    clean.includes("who is") ||
    clean.includes("who are you") ||
    clean.includes("harun") ||
    clean.includes("about") ||
    clean.includes("ke") ||
    clean.includes("tumi ke") ||
    clean.includes("apni ke") ||
    clean.includes("porichoy") ||
    clean.includes("parichoy") ||
    clean.includes("من هو") ||
    clean.includes("من انت") ||
    clean.includes("kaun hai") ||
    clean.includes("quién es") ||
    clean.includes("qui est") ||
    clean.includes("wer ist") ||
    clean.includes("experience")
  ) {
    return MULTILINGUAL_CONTENT.about[lang] || MULTILINGUAL_CONTENT.about.bn;
  }

  // 2. Services
  if (
    clean.includes("service") ||
    clean.includes("services") ||
    clean.includes("what do you do") ||
    clean.includes("offer") ||
    clean.includes("kaj") ||
    clean.includes("ki kaj") ||
    clean.includes("services ki") ||
    clean.includes("خدمات") ||
    clean.includes("خدمة") ||
    clean.includes("seva") ||
    clean.includes("servicios") ||
    clean.includes("leistungen") ||
    clean.includes("technical seo") ||
    clean.includes("backlink")
  ) {
    return MULTILINGUAL_CONTENT.services[lang] || MULTILINGUAL_CONTENT.services.bn;
  }

  // 3. Free SEO Audit
  if (
    clean.includes("audit") ||
    clean.includes("free") ||
    clean.includes("review") ||
    clean.includes("check") ||
    clean.includes("অডিট") ||
    clean.includes("تدقيق") ||
    clean.includes("فحص") ||
    clean.includes("ऑडिट") ||
    clean.includes("auditoría") ||
    clean.includes("auditoria")
  ) {
    return MULTILINGUAL_CONTENT.audit[lang] || MULTILINGUAL_CONTENT.audit.bn;
  }

  // 4. Pricing / Cost / Packages
  if (
    clean.includes("price") ||
    clean.includes("pricing") ||
    clean.includes("cost") ||
    clean.includes("rate") ||
    clean.includes("fee") ||
    clean.includes("dam") ||
    clean.includes("taka") ||
    clean.includes("dollar") ||
    clean.includes("package") ||
    clean.includes("koto taka") ||
    clean.includes("fee koto") ||
    clean.includes("কম") ||
    clean.includes("كم السعر") ||
    clean.includes("تكلفة") ||
    clean.includes("कीमत") ||
    clean.includes("फीस") ||
    clean.includes("precio") ||
    clean.includes("tarif") ||
    clean.includes("preis")
  ) {
    return MULTILINGUAL_CONTENT.pricing[lang] || MULTILINGUAL_CONTENT.pricing.bn;
  }

  // 5. Contact / WhatsApp / Phone / Email
  if (
    clean.includes("contact") ||
    clean.includes("whatsapp") ||
    clean.includes("phone") ||
    clean.includes("email") ||
    clean.includes("hire") ||
    clean.includes("jogajog") ||
    clean.includes("number") ||
    clean.includes("nombor") ||
    clean.includes("تواصل") ||
    clean.includes("واتساب") ||
    clean.includes("رقم") ||
    clean.includes("संपर्क") ||
    clean.includes("contacto")
  ) {
    return MULTILINGUAL_CONTENT.contact[lang] || MULTILINGUAL_CONTENT.contact.bn;
  }

  // 6. Time / Duration / How Long
  if (
    clean.includes("how long") ||
    clean.includes("time") ||
    clean.includes("duration") ||
    clean.includes("koto din") ||
    clean.includes("ranking time") ||
    clean.includes("koto shomoy") ||
    clean.includes("shomoy lagbe") ||
    clean.includes("كم يستغرق") ||
    clean.includes("وقت") ||
    clean.includes("कितना समय") ||
    clean.includes("cuánto tiempo")
  ) {
    return MULTILINGUAL_CONTENT.timeline[lang] || MULTILINGUAL_CONTENT.timeline.bn;
  }

  // 7. Greetings
  if (
    clean.includes("hi") ||
    clean.includes("hello") ||
    clean.includes("hey") ||
    clean.includes("kemon") ||
    clean.includes("salam") ||
    clean.includes("assalamu") ||
    clean.includes("kire") ||
    clean.includes("valo") ||
    clean.includes("bhalo") ||
    clean.includes("مرحبا") ||
    clean.includes("سلام") ||
    clean.includes("namaste") ||
    clean.includes("hola") ||
    clean.includes("bonjour") ||
    clean.includes("hallo")
  ) {
    return MULTILINGUAL_CONTENT.greeting[lang] || MULTILINGUAL_CONTENT.greeting.bn;
  }

  // Fallback in detected language
  return MULTILINGUAL_CONTENT.fallback[lang] || (lang === "bn" ? MULTILINGUAL_CONTENT.fallback.bn : MULTILINGUAL_CONTENT.fallback.en);
}
