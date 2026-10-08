import { NextResponse } from "next/server";

interface AuditRequestBody {
  name: string;
  email: string;
  website: string;
  service?: string;
  keywords?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: AuditRequestBody = await request.json();
    const { name, email, website, service, keywords, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !website?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and website URL are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.AUDIT_RECIPIENT_EMAIL || "harunsha197@gmail.com";
    const selectedService = service || "Technical SEO & Audit";
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

    // HTML Email Template
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f8f7; margin: 0; padding: 24px; color: #092328; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2f1ed; }
          .header { background: linear-gradient(135deg, #092328 0%, #12544F 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
          .header p { margin: 8px 0 0 0; font-size: 14px; color: #8BBB92; font-weight: 500; }
          .badge { display: inline-block; background: rgba(42, 131, 95, 0.3); border: 1px solid #8BBB92; color: #ffffff; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; margin-top: 12px; }
          .content { padding: 32px 24px; }
          .info-table { width: 100%; border-collapse: collapse; margin-top: 16px; }
          .info-table th, .info-table td { padding: 12px 14px; text-align: left; border-bottom: 1px solid #eef3f2; font-size: 14px; }
          .info-table th { width: 35%; color: #5a7370; font-weight: 600; background: #f9fbfb; }
          .info-table td { color: #092328; font-weight: 500; }
          .highlight { color: #2A835F; font-weight: 700; text-decoration: none; }
          .message-box { background: #f0f7f5; border-left: 4px solid #2A835F; padding: 16px; margin-top: 20px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #12544F; }
          .cta-btn { display: inline-block; background: linear-gradient(135deg, #2A835F 0%, #12544F 100%); color: #ffffff !important; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 999px; margin-top: 24px; text-align: center; }
          .footer { background: #f9fbfb; padding: 20px; text-align: center; font-size: 12px; color: #7a8f8d; border-top: 1px solid #eef3f2; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New SEO Audit Request</h1>
            <p>HarunSEO.com Lead Generation System</p>
            <div class="badge">🔥 Urgent Lead</div>
          </div>
          <div class="content">
            <p style="font-size: 15px; margin-top: 0; line-height: 1.5;">
              Hello <strong>Md. Harun or Roshid</strong>, a new client has requested a free manual SEO audit from your website portfolio.
            </p>
            
            <table class="info-table">
              <tr>
                <th>Client Name</th>
                <td><strong>${name}</strong></td>
              </tr>
              <tr>
                <th>Email Address</th>
                <td><a href="mailto:${email}" class="highlight">${email}</a></td>
              </tr>
              <tr>
                <th>Target Website</th>
                <td><a href="${website.startsWith("http") ? website : `https://${website}`}" target="_blank" class="highlight">${website}</a></td>
              </tr>
              <tr>
                <th>Service Needed</th>
                <td><span style="background: #e2f1ed; color: #12544F; padding: 4px 8px; border-radius: 6px; font-weight: 600;">${selectedService}</span></td>
              </tr>
              <tr>
                <th>Target Keywords</th>
                <td>${keywords?.trim() ? keywords : "<em>Not specified</em>"}</td>
              </tr>
              <tr>
                <th>Submission Time</th>
                <td>${timestamp} (Bangladesh Time)</td>
              </tr>
            </table>

            ${
              message?.trim()
                ? `
              <div style="margin-top: 20px;">
                <strong style="font-size: 13px; color: #5a7370; text-transform: uppercase; letter-spacing: 0.5px;">Client Project Goals / Notes:</strong>
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
            `
                : ""
            }

            <div style="text-align: center; margin-top: 28px;">
              <a href="mailto:${email}?subject=Your Free SEO Audit for ${encodeURIComponent(website)} — Md. Harun or Roshid" class="cta-btn">
                Reply Directly to ${name} &rarr;
              </a>
            </div>
          </div>
          <div class="footer">
            HarunSEO.com &bull; Official Portfolio of Md. Harun or Roshid &bull; ScaleUP Ads Agency
          </div>
        </div>
      </body>
      </html>
    `;

    let emailDelivered = false;
    let providerUsed = "";

    // Method 1: Resend API (if RESEND_API_KEY is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const fromEmail = process.env.RESEND_FROM_EMAIL || "Harun SEO <onboarding@resend.dev>";
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [recipientEmail],
            reply_to: email,
            subject: `🎯 New SEO Audit Request: ${website} (${name})`,
            html: htmlEmail,
          }),
        });

        if (resendRes.ok) {
          emailDelivered = true;
          providerUsed = "Resend";
        } else {
          const errData = await resendRes.json();
          console.error("Resend API error:", errData);
        }
      } catch (err) {
        console.error("Failed sending via Resend:", err);
      }
    }

    // Method 2: Web3Forms API (Direct mail to harunsha197@gmail.com)
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || "30668f1c-235c-4c9d-ac92-62b07cafa44d";
    if (!emailDelivered && web3Key) {
      try {
        const web3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `🎯 New Free SEO Audit Request: ${website} from ${name}`,
            from_name: "Harun SEO Website",
            to_email: recipientEmail,
            name,
            email,
            replyto: email,
            website,
            service: selectedService,
            target_keywords: keywords || "None specified",
            client_message: message || "None",
            html: htmlEmail,
          }),
        });

        if (web3Res.ok) {
          emailDelivered = true;
          providerUsed = "Web3Forms";
        } else {
          const errData = await web3Res.json();
          console.error("Web3Forms API error:", errData);
        }
      } catch (err) {
        console.error("Failed sending via Web3Forms:", err);
      }
    }

    // Method 3: FormSubmit (Zero-config fallback directly to recipient email)
    if (!emailDelivered) {
      try {
        const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Referer: "https://www.harunseo.com",
            Origin: "https://www.harunseo.com",
          },
          body: JSON.stringify({
            _subject: `🎯 New SEO Audit Request: ${website} from ${name}`,
            _replyto: email,
            _template: "table",
            "Client Name": name,
            "Client Email": email,
            "Target Website": website,
            "Primary Service": selectedService,
            "Target Keywords": keywords || "Not specified",
            "Project Notes": message || "No extra notes",
            "Submission Time": timestamp,
          }),
        });

        const fsData = await formSubmitRes.json();
        if (fsData.success === "true" || fsData.success === true) {
          emailDelivered = true;
          providerUsed = "FormSubmit";
        } else if (fsData.message && fsData.message.includes("Activation")) {
          providerUsed = "FormSubmit (Pending Activation)";
        }
      } catch (fsErr) {
        console.error("Failed sending via FormSubmit:", fsErr);
      }
    }

    // Optional Telegram Notification
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      try {
        const telegramMessage = `🚀 *New SEO Audit Request!*\n\n👤 *Client:* ${name}\n📧 *Email:* ${email}\n🌐 *Website:* ${website}\n🛠️ *Service:* ${selectedService}\n🎯 *Keywords:* ${keywords || "None"}\n💬 *Message:* ${message || "None"}\n⏰ *Time:* ${timestamp}`;

        await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: "Markdown",
          }),
        });
      } catch (tgErr) {
        console.error("Telegram notification failed:", tgErr);
      }
    }

    // Log the request on the server
    console.log("-----------------------------------------");
    console.log("📥 NEW SEO AUDIT REQUEST RECEIVED:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Website: ${website}`);
    console.log(`Service: ${selectedService}`);
    console.log(`Keywords: ${keywords || "N/A"}`);
    console.log(`Message: ${message || "N/A"}`);
    console.log(`Delivered: ${emailDelivered ? `YES (via ${providerUsed})` : `Status: ${providerUsed || "Logged"}`}`);
    console.log("-----------------------------------------");

    return NextResponse.json({
      success: true,
      message: "Audit request received successfully! We will contact you within 24 hours.",
      delivered: emailDelivered,
      provider: providerUsed,
    });
  } catch (error) {
    console.error("Audit form submission server error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or reach out directly via WhatsApp." },
      { status: 500 }
    );
  }
}
