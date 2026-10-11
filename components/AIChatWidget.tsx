"use client";

import { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Phone,
  RotateCcw,
  ChevronDown,
  Globe,
} from "lucide-react";
import { synthesizeAnswer, HARUN_PROFILE, detectLanguage } from "@/lib/aiKnowledge";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [sessionLang, setSessionLang] = useState<string>("bn");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! 👋 I am Md. Harun or Roshid's AI SEO Assistant.\n\nAsk me anything in English, বাংলা, العربية, हिन्दी, or any language! I can help with Harun's SEO services, technical audits, ranking strategies, or pricing.",
      timestamp: "Just now",
    },
  ]);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (smooth = true) => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: smooth ? "smooth" : "auto",
      });
      setIsScrolledUp(false);
    }
  };

  // Scroll listener to allow free scrolling UP to see past messages
  const handleScroll = () => {
    if (!messagesContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
    // If the user has scrolled up more than 50px away from the bottom
    const distanceToBottom = scrollHeight - scrollTop - clientHeight;
    setIsScrolledUp(distanceToBottom > 50);
  };

  // When opening modal, scroll down to show latest message
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        scrollToBottom(false);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // When new messages arrive, scroll down ONLY if user wasn't actively reading earlier messages
  useEffect(() => {
    if (isOpen && !isScrolledUp) {
      scrollToBottom(true);
    }
  }, [messages, isTyping]);

  const quickPrompts = [
    "Who is Md. Harun or Roshid?",
    "What SEO services do you offer?",
    "How do I get a free SEO audit?",
    "What is your pricing & packages?",
    "বাংলায় পরামর্শ পেতে পারি?",
    "كيف يمكنك تحسين موقعي؟",
    "वेबसाइट रैंक कैसे करें?",
    "How to contact Harun directly?",
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

    const detected = detectLanguage(text, sessionLang);
    setSessionLang(detected);

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // When the user themselves sends a message, scroll down to show it
    setTimeout(() => {
      scrollToBottom(true);
    }, 50);

    try {
      // 1. Attempt API call to /api/chat (Supports Gemini/OpenAI in any language)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionLang: detected }),
      });

      let botReplyText = "";
      if (response.ok) {
        const data = await response.json();
        botReplyText = data?.reply;
        if (data?.detectedLang) {
          setSessionLang(data.detectedLang);
        }
      }

      // If API didn't return a reply, fallback to built-in multilingual synthesizer
      if (!botReplyText) {
        botReplyText = synthesizeAnswer(text, detected);
      }

      // Natural conversational pacing
      await new Promise((resolve) => setTimeout(resolve, 350));

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botReplyText,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } catch {
      // Offline / Network fallback to built-in multilingual engine
      const botReplyText = synthesizeAnswer(text, detected);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botReplyText,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: "Hello! 👋 I am Md. Harun or Roshid's AI SEO Assistant.\n\nAsk me anything in English, বাংলা, العربية, हिन्दी, or any language! How can I help your website today?",
        timestamp: "Just now",
      },
    ]);
    setIsScrolledUp(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full dark:bg-[#12544F] bg-[#092328] text-white shadow-2xl border-2 dark:border-[#8BBB92]/40 border-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer select-none"
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
            <span className="text-[10px] text-emerald-300 font-medium">Online • All Languages (বাংলা, En, Ar)</span>
          </div>
        </button>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="relative w-[92vw] sm:w-[420px] h-[580px] max-h-[88vh] rounded-3xl dark:bg-[#092328]/98 bg-white/98 backdrop-blur-2xl border-2 dark:border-[#8BBB92]/35 border-emerald-600/30 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header Bar */}
          <div className="px-5 py-3.5 bg-gradient-to-r dark:from-[#12544F] dark:to-[#092328] from-[#092328] to-[#12544F] text-white flex items-center justify-between border-b dark:border-[#8BBB92]/20 border-emerald-500/20 shrink-0 select-none">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-br from-[#2A835F] to-[#12544F] flex items-center justify-center border border-white/30 shadow-md">
                <Bot className="w-5 h-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#092328]" />
              </div>

              <div>
                <h3 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                  Harun SEO AI Assistant
                </h3>
                <p className="text-[10.5px] text-emerald-300 font-medium flex items-center gap-1">
                  <Globe className="w-3 h-3 text-emerald-400" />
                  Multilingual • বাংলা, English, العربية
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Restart Conversation"
                title="Restart chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Chat Window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar (Scrollbar completely hidden via .no-scrollbar) */}
          <div
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            className="px-3.5 py-2 dark:bg-[#092328] bg-gray-50 border-b dark:border-white/5 border-gray-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs overscroll-contain shrink-0 select-none"
          >
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap px-3 py-1.5 rounded-full dark:bg-[#12544F]/60 bg-emerald-50 dark:text-emerald-300 text-emerald-800 border dark:border-[#8BBB92]/20 border-emerald-600/20 hover:bg-[#2A835F] hover:text-white transition-all text-[11px] font-medium shrink-0 cursor-pointer shadow-xs active:scale-95"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Scroll Area - Completely isolated for smooth UP and DOWN scrolling */}
          <div
            ref={messagesContainerRef}
            data-lenis-prevent="true"
            onScroll={handleScroll}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="flex-1 min-h-0 chat-scroll-area p-4 space-y-4 text-xs sm:text-sm chat-scrollbar"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-xl bg-[#2A835F] flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5 select-none">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[84%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-line shadow-sm break-words select-text ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-[#2A835F] to-[#12544F] text-white rounded-tr-none font-medium"
                      : "dark:bg-[#12544F]/40 bg-gray-100 dark:text-gray-100 text-gray-800 border dark:border-[#8BBB92]/20 border-gray-200 rounded-tl-none"
                  }`}
                >
                  <p className="select-text">{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1.5 text-right select-none ${
                      msg.sender === "user" ? "text-emerald-200" : "text-gray-400 dark:text-gray-400"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-xl bg-gray-700 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5 select-none">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-400 select-none">
                <div className="w-7 h-7 rounded-xl bg-[#2A835F] flex items-center justify-center text-white shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="dark:bg-[#12544F]/40 bg-gray-100 rounded-2xl px-4 py-2.5 flex items-center gap-1.5 border dark:border-[#8BBB92]/20 border-gray-200">
                  <span className="w-2 h-2 rounded-full bg-[#2A835F] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#2A835F] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#2A835F] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] text-gray-400 ml-1">AI is answering...</span>
                </div>
              </div>
            )}
          </div>

          {/* Floating Jump to Latest Button (shown when user scrolls UP to read earlier conversation) */}
          {isScrolledUp && (
            <button
              onClick={() => scrollToBottom(true)}
              className="absolute bottom-20 right-5 z-20 px-3 py-1.5 rounded-full bg-[#2A835F] hover:bg-[#12544F] text-white text-[11px] font-bold shadow-lg flex items-center gap-1.5 transition-all animate-bounce cursor-pointer border border-white/20 select-none"
            >
              <span>Scroll to latest</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          )}

          {/* WhatsApp Direct Strip */}
          <div className="px-4 py-2 dark:bg-[#092328] bg-gray-50 border-t dark:border-white/5 border-gray-200 flex items-center justify-between shrink-0 select-none">
            <span className="text-[11px] text-gray-500 dark:text-gray-400">Want to speak to Harun now?</span>
            <a
              href={HARUN_PROFILE.whatsappUrl}
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
            className="p-3 dark:bg-[#092328]/95 bg-white border-t dark:border-[#8BBB92]/20 border-gray-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder={
                sessionLang === "bn"
                  ? "বাংলা বা বাংলিশে যেকোনো প্রশ্ন করুন..."
                  : sessionLang === "ar"
                  ? "اسأل أي شيء باللغة العربية..."
                  : sessionLang === "hi"
                  ? "हिंदी में कुछ भी पूछें..."
                  : "Ask anything in English, বাংলা, العربية..."
              }
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 dark:bg-[#12544F]/40 bg-gray-100 dark:text-white text-gray-800 text-xs sm:text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#2A835F] border dark:border-white/10 border-gray-200"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#2A835F] to-[#12544F] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer select-none"
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
