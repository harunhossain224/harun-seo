import { NextResponse } from "next/server";
import { synthesizeAnswer, HARUN_PROFILE, detectLanguage } from "@/lib/aiKnowledge";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are the Harun SEO AI Assistant, representing Md. Harun or Roshid — a Senior SEO Executive with 5+ years of practical experience at ScaleUP Ads Agency (since July 2025).

Core Profile:
- Name: Md. Harun or Roshid
- Role: Senior SEO Executive & Specialist
- Current Agency: ScaleUP Ads Agency (since July 2025)
- Experience: 5+ Years of practical SEO experience, 100+ websites optimized globally across USA, UK, Australia, Canada, UAE, and Bangladesh.
- Core Specialties: Technical SEO diagnostics, Manual White-Hat Link Building (zero PBNs), Search Intent Keyword Research, Google Business Profile (Local SEO), eCommerce SEO (Shopify/WooCommerce).
- Free Offer: Complimentary Manual SEO Audit for any website.
- Contact: WhatsApp: ${HARUN_PROFILE.whatsapp} (wa.me/8801972835738), Email: ${HARUN_PROFILE.email}
- Location: Dhaka, Bangladesh (serving global clients across all timezones).

CRITICAL MULTILINGUAL MANDATE (SPEAK IN ALL LANGUAGES):
1. Detect the user's language and ALWAYS answer in that EXACT SAME LANGUAGE!
   - If the user writes in Bengali (বাংলা) or Banglish (e.g. "bangla bolo", "kemon achen", "koto taka lagbe"), you MUST reply in natural, polite Bengali (বাংলা)!
   - If the user explicitly asks "bangla bolo" or "speak in bangla", immediately switch to Bengali (বাংলা) and confirm warmly!
   - If the user writes in Arabic (العربية), reply in professional Arabic (العربية).
   - If the user writes in Hindi (हिन्दी) or Hinglish, reply in Hindi (हिन्दी).
   - If the user writes in Spanish (Español), reply in Spanish (Español).
   - If the user writes in French (Français), reply in French (Français).
   - If the user writes in German (Deutsch), reply in German (Deutsch).
   - If the user writes in English, reply in English.
2. You can talk about ANY subject the user asks regarding Harun's services, SEO audits, rankings, or general conversation.
3. Keep answers clear, friendly, and helpful. Always invite them to message Harun on WhatsApp (${HARUN_PROFILE.whatsapp}) for a custom project review!`;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const message = body?.message;
    const sessionLang = body?.sessionLang;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const cleanMessage = message.trim();
    const detectedLang = detectLanguage(cleanMessage);

    // 1. Check for Google Gemini API Key
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey) {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: `${SYSTEM_PROMPT}\n\nIMPORTANT: Target language for this reply is '${detectedLang}'. Reply in '${detectedLang}'!` }],
              },
              contents: [
                {
                  role: "user",
                  parts: [{ text: cleanMessage }],
                },
              ],
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 600,
              },
            }),
          }
        );

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const replyText =
            geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (replyText) {
            return NextResponse.json({
              reply: replyText.trim(),
              detectedLang,
              source: "gemini_ai",
            });
          }
        }
      } catch (geminiError) {
        console.error("Gemini API call failed, falling back:", geminiError);
      }
    }

    // 2. Check for OpenAI API Key
    const openAiKey = process.env.OPENAI_API_KEY;
    if (openAiKey) {
      try {
        const openAiRes = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${openAiKey}`,
            },
            body: JSON.stringify({
              model: "gpt-4o-mini",
              messages: [
                { role: "system", content: `${SYSTEM_PROMPT}\nTarget language: ${detectedLang}` },
                { role: "user", content: cleanMessage },
              ],
              temperature: 0.7,
              max_tokens: 600,
            }),
          }
        );

        if (openAiRes.ok) {
          const openAiData = await openAiRes.json();
          const replyText = openAiData?.choices?.[0]?.message?.content;
          if (replyText) {
            return NextResponse.json({
              reply: replyText.trim(),
              detectedLang,
              source: "openai",
            });
          }
        }
      } catch (openAiError) {
        console.error("OpenAI call failed, falling back:", openAiError);
      }
    }

    // 3. Fallback to comprehensive built-in multilingual knowledge engine
    const synthesizedReply = synthesizeAnswer(cleanMessage);
    return NextResponse.json({
      reply: synthesizedReply,
      detectedLang,
      source: "knowledge_base",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      reply:
        "Thank you for reaching out! You can ask anything about SEO services, technical audits, or contact Harun directly on WhatsApp (+880 1972-835738).",
      source: "fallback",
    });
  }
}
