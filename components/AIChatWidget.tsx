"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  Phone,
  CheckCircle2,
  Minimize2,
  RefreshCw,
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  isQuickOption?: boolean;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi there! 👋 I am Md. Harun or Roshid's AI SEO Assistant. Ask me anything about Harun's SEO services, 5+ years of experience, pricing, or how we can rank your website on Google!",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const quickPrompts = [
    "Who is Md. Harun or Roshid?",
    "What SEO services do you offer?",
    "How do I get a free SEO audit?",
    "What is your pricing & retainers?",
    "How to contact Harun directly?",
  ];

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    // 1. Identity / Who is Harun / About
    if (
      q.includes("who is") ||
      q.includes("harun") ||
      q.includes("about") ||
      q.includes("intro") ||
      q.includes("ke") ||
      q.includes("tumi ke") ||
      q.includes("parichoy") ||
      q.includes("experience")
    ) {
      return (
        "Md. Harun or Roshid is a Senior SEO Executive with 5+ years of practical search engine optimization experience. " +
        "He currently serves as an SEO Executive at ScaleUP Ads Agency (since July 2025). " +
        "Harun specializes in Technical SEO, ethical White-Hat Link Building, Search Intent Keyword Mapping, and Google Business Profile optimization. " +
        "He has helped optimize 100+ websites across the USA, UK, Australia, Canada, UAE, and Bangladesh."
      );
    }

    // 2. Services / What do you do
    if (
      q.includes("service") ||
      q.includes("kaj") ||
      q.includes("what do you do") ||
      q.includes("offer") ||
      q.includes("help") ||
      q.includes("technical") ||
      q.includes("backlink")
    ) {
      return (
        "Harun provides comprehensive, data-driven SEO solutions, including:\n\n" +
        "1. 🔧 Technical SEO Diagnostics: Fix crawl errors, sitemaps, canonical tags, 404 loops, and indexing failures.\n" +
        "2. 🔗 High-Authority Link Building: 100% manual, ethical backlink acquisition (Web 2.0, niche citations, outreach; zero PBNs).\n" +
        "3. 🎯 Keyword Research & Intent Mapping: Uncovering high-converting commercial & long-tail search terms.\n" +
        "4. 📍 Local SEO & Google Business Profile: Dominating Google 3-Pack map rankings with NAP consistency.\n" +
        "5. 📊 Monthly SEO Management: Continuous Google Search Console tracking and monthly KPI reports."
      );
    }

    // 3. Free SEO Audit
    if (
      q.includes("audit") ||
      q.includes("free") ||
      q.includes("review") ||
      q.includes("check") ||
      q.includes("website review")
    ) {
      return (
        "Yes! Harun offers a 100% Complimentary Manual SEO Audit for your website! 🎯\n\n" +
        "The audit covers:\n" +
        "• Google Search Console crawl & indexation health\n" +
        "• Canonical tags & duplicate content flags\n" +
        "• Core Web Vitals & speed performance\n" +
        "• Backlink toxicity & competitor gap analysis\n\n" +
        "You can request it right on this page via the 'Request Free SEO Audit' form, or send your website URL directly to Harun on WhatsApp (+880 1972-835738)."
      );
    }

    // 4. Pricing / Cost / Rates
    if (
      q.includes("price") ||
      q.includes("cost") ||
      q.includes("rate") ||
      q.includes("fee") ||
      q.includes("dam") ||
      q.includes("taka") ||
      q.includes("dollar") ||
      q.includes("charge")
    ) {
      return (
        "Harun's SEO pricing is flexible and customized to your website size, industry competition, and target markets:\n\n" +
        "• One-time Deep Technical Audit & Roadmap: Custom project rate\n" +
        "• Monthly SEO Retainer & Management: Transparent monthly packages tailored for small businesses, eCommerce, and SaaS\n" +
        "• Link Building Packages: Manual, quality-tier pricing with zero PBN risks\n\n" +
        "First step is always the FREE manual audit to pinpoint exact needs before sending a custom proposal. Message on WhatsApp (+880 1972-835738) for a quick quote!"
      );
    }

    // 5. Contact / WhatsApp / Phone / Email
    if (
      q.includes("contact") ||
      q.includes("whatsapp") ||
      q.includes("phone") ||
      q.includes("email") ||
      q.includes("call") ||
      q.includes("hire") ||
      q.includes("jogajog") ||
      q.includes("number")
    ) {
      return (
        "You can connect directly with Md. Harun or Roshid through any of the following:\n\n" +
        "📱 WhatsApp & Phone: +880 1972-835738 (Instant replies)\n" +
        "📧 Direct Email: harunsha197@gmail.com\n" +
        "🏢 Location: Dhaka, Bangladesh (Working globally across all timezones)\n\n" +
        "Feel free to drop a message right now on WhatsApp for urgent queries!"
      );
    }

    // 6. Time / Duration / How long
    if (
      q.includes("how long") ||
      q.includes("time") ||
      q.includes("duration") ||
      q.includes("koto din") ||
      q.includes("result") ||
      q.includes("ranking time")
    ) {
      return (
        "Here is what you can expect timeline-wise for organic SEO:\n\n" +
        "• Technical fixes & indexing resolutions usually reflect in Google Search Console within 2 to 4 weeks.\n" +
        "• Top keyword ranking jumps and steady organic traffic growth generally compound within 3 to 6 months depending on competition.\n" +
        "SEO is an compounding asset that yields long-term, high-ROI organic leads."
      );
    }

    // 7. PBN / Ethics / Black Hat
    if (q.includes("pbn") || q.includes("black hat") || q.includes("safe") || q.includes("penalty")) {
      return (
        "Harun follows a strict 100% Ethical White-Hat policy: ZERO PBNs (Private Blog Networks), zero automated link spam, and zero dangerous shortcuts. " +
        "Every backlink and technical fix complies with Google Webmaster & Search Essentials guidelines to ensure sustainable, penalty-proof growth."
      );
    }

    // 8. Bengali greetings & queries
    if (
      q.includes("kemon") ||
      q.includes("ki khobor") ||
      q.includes("assalamu") ||
      q.includes("salam") ||
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey")
    ) {
      return (
        "Hello! 👋 Welcome to Harun SEO. Md. Harun or Roshid is a Senior SEO Executive helping businesses achieve top search visibility. " +
        "How can we help your website grow today? You can ask about our technical SEO audits, backlink strategies, or pricing!"
      );
    }

    // Default intelligent consultative fallback
    return (
      "Thank you for your question! As Md. Harun or Roshid's SEO Assistant, I can confirm that Harun specializes in solving organic search and technical ranking hurdles for businesses worldwide.\n\n" +
      "For specific details regarding your project, feel free to submit the 'Request Free SEO Audit' form on this page or reach out directly to Harun on WhatsApp (+880 1972-835738 / harunsha197@gmail.com) for a 1-on-1 consultation!"
    );
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Realistic typing delay (600ms - 900ms)
    setTimeout(() => {
      const botReplyText = generateAnswer(text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 750);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full dark:bg-[#12544F] bg-[#092328] text-white shadow-2xl border-2 dark:border-[#8BBB92]/40 border-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Open Harun SEO AI Chat"
        >
          {/* Animated Glow Halo */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#2A835F] to-emerald-400 opacity-60 blur-md group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Icon Badge */}
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#2A835F] to-[#12544F] flex items-center justify-center border border-white/20 shadow-inner">
            <Bot className="w-5 h-5 text-white animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#092328] animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#092328]" />
          </div>

          <div className="relative hidden sm:flex flex-col text-left">
            <span className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
              Ask Harun SEO AI <Sparkles className="w-3 h-3 text-[#8BBB92]" />
            </span>
            <span className="text-[10px] text-emerald-300 font-medium">Online • Instant Answers</span>
          </div>
        </button>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] rounded-3xl dark:bg-[#092328]/98 bg-white/98 backdrop-blur-2xl border-2 dark:border-[#8BBB92]/35 border-emerald-600/30 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header Bar */}
          <div className="px-5 py-4 bg-gradient-to-r dark:from-[#12544F] dark:to-[#092328] from-[#092328] to-[#12544F] text-white flex items-center justify-between border-b dark:border-[#8BBB92]/20 border-emerald-500/20">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2A835F] to-[#12544F] flex items-center justify-center border border-white/30 shadow-md">
                <Bot className="w-5 h-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#092328]" />
              </div>

              <div>
                <h3 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                  Harun SEO AI Assistant
                </h3>
                <p className="text-[11px] text-emerald-300 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Md. Harun or Roshid (Portfolio Bot)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Chat Window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-4 py-2.5 dark:bg-[#092328] bg-gray-50 border-b dark:border-white/5 border-gray-200 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap px-3 py-1 rounded-full dark:bg-[#12544F]/60 bg-emerald-50 dark:text-emerald-300 text-emerald-800 border dark:border-[#8BBB92]/20 border-emerald-600/20 hover:bg-[#2A835F] hover:text-white transition-all text-[11px] font-medium shrink-0 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-xl bg-[#2A835F] flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-line shadow-sm ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-[#2A835F] to-[#12544F] text-white rounded-tr-none font-medium"
                      : "dark:bg-[#12544F]/40 bg-gray-100 dark:text-gray-100 text-gray-800 border dark:border-[#8BBB92]/20 border-gray-200 rounded-tl-none"
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      msg.sender === "user" ? "text-emerald-200" : "text-gray-400 dark:text-gray-400"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-xl bg-gray-700 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-400">
                <div className="w-7 h-7 rounded-xl bg-[#2A835F] flex items-center justify-center text-white shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="dark:bg-[#12544F]/40 bg-gray-100 rounded-2xl px-4 py-2.5 flex items-center gap-1 border dark:border-[#8BBB92]/20 border-gray-200">
                  <span className="w-2 h-2 rounded-full bg-[#2A835F] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#2A835F] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#2A835F] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp Direct Strip */}
          <div className="px-4 py-2 dark:bg-[#092328] bg-gray-50 border-t dark:border-white/5 border-gray-200 flex items-center justify-between">
            <span className="text-[11px] text-gray-500 dark:text-gray-400">Want to speak to Harun now?</span>
            <a
              href="https://wa.me/8801972835738"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <Phone className="w-3 h-3" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Input Box Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 dark:bg-[#092328]/95 bg-white border-t dark:border-[#8BBB92]/20 border-gray-200 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about Harun's SEO services..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 dark:bg-[#12544F]/40 bg-gray-100 dark:text-white text-gray-800 text-xs sm:text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#2A835F] border dark:border-white/10 border-gray-200"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#2A835F] to-[#12544F] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
