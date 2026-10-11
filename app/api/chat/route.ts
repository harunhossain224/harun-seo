import { NextResponse } from "next/server";
import { synthesizeAnswer, HARUN_PROFILE } from "@/lib/aiKnowledge";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are the Harun SEO AI Assistant, representing Md. Harun or Roshid — a Senior SEO Executive with 5+ years of practical experience at ScaleUP Ads Agency (since July 2025).

Key Information about Harun:
- Name: Md. Harun or Roshid
- Role: Senior SEO Executive & Specialist
- Current Agency: ScaleUP Ads Agency (since July 2025)
- Experience: 5+ Years of practical SEO experience, 100+ websites optimized globally across USA, UK, Australia, Canada, UAE, and Bangladesh.
- Core Specialties: Technical SEO diagnostics, Manual White-Hat Link Building (zero PBNs), Search Intent Keyword Research, Google Business Profile (Local SEO), eCommerce SEO (Shopify/WooCommerce).
- Free Offer: Complimentary Manual SEO Audit for any website.
- Contact: WhatsApp: ${HARUN_PROFILE.whatsapp} (wa.me/8801972835738), Email: ${HARUN_PROFILE.email}
- Location: Dhaka, Bangladesh (serving global clients across all timezones).

Instructions:
1. Answer ANY question the user asks about SEO, website ranking, technical audits, backlinks, keywords, pricing, or digital marketing in an authoritative, friendly, consultative tone.
2. If the user asks in Bengali or Banglish, answer naturally and fluently in Bengali or Banglish.
3. If the user asks general or conversational questions (greetings, who made you, how are you), respond warmly and guide them toward how Harun can help their website rank.
4. Keep answers concise, clear, and easy to read (use bullet points where appropriate).
5. Always emphasize ethical white-hat SEO and invite them to claim their Free SEO Audit or message Harun on WhatsApp for specific project queries.`;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const message = body?.message;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const cleanMessage = message.trim();

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
                parts: [{ text: SYSTEM_PROMPT }],
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
                { role: "system", content: SYSTEM_PROMPT },
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
              source: "openai",
            });
          }
        }
      } catch (openAiError) {
        console.error("OpenAI call failed, falling back:", openAiError);
      }
    }

    // 3. Fallback to comprehensive built-in knowledge engine
    const synthesizedReply = synthesizeAnswer(cleanMessage);
    return NextResponse.json({
      reply: synthesizedReply,
      source: "knowledge_base",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      reply:
        "Thank you for contacting Harun SEO! You can ask anything about SEO services, technical audits, or contact Harun directly on WhatsApp (+880 1972-835738).",
      source: "fallback",
    });
  }
}
