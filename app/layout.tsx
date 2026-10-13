import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import AIChatWidget from "@/components/AIChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.harunseo.com"),
  title: {
    default: "Harun SEO | Md. Harun or Roshid — Senior SEO Specialist",
    template: "%s | Harun SEO — Md. Harun or Roshid",
  },
  description:
    "Official Portfolio of Md. Harun or Roshid (Harun SEO) — Senior SEO Executive at ScaleUP Ads Agency with 5+ years of experience in Technical SEO, Link Building, Keyword Strategy, and Organic Growth.",
  keywords: [
    "Harun SEO",
    "Md Harun or Roshid SEO",
    "Harun",
    "Harun Sha",
    "Harun Sha SEO",
    "Md. Harun or Roshid",
    "Md Harun or Roshid",
    "Md Harun SEO",
    "SEO Harun",
    "Harun Roshid SEO",
    "SEO Executive",
    "SEO Specialist",
    "Senior SEO Executive",
    "ScaleUP Ads Agency",
    "Technical SEO",
    "Link Building Specialist",
    "SEO Expert Bangladesh",
    "SEO Portfolio",
    "harunseo.com",
  ],
  authors: [{ name: "Md. Harun or Roshid", url: "https://www.harunseo.com" }],
  creator: "Md. Harun or Roshid",
  publisher: "Md. Harun or Roshid",
  alternates: {
    canonical: "https://www.harunseo.com",
  },
  openGraph: {
    title: "Harun SEO | Md Harun or Roshid SEO Specialist & Executive",
    description:
      "Official Portfolio of Md. Harun or Roshid (Harun SEO) — Senior SEO Executive at ScaleUP Ads Agency. 5+ Years of practical SEO experience driving organic visibility and rankings.",
    url: "https://www.harunseo.com",
    siteName: "Harun SEO — Md. Harun or Roshid",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/harun-seo.png",
        width: 1200,
        height: 1500,
        alt: "Harun SEO - Md Harun or Roshid SEO Specialist & Senior Executive",
      },
      {
        url: "/harun.png",
        width: 1200,
        height: 1500,
        alt: "Harun - Md. Harun or Roshid Official Photo",
      },
      {
        url: "/harun-sha.png",
        width: 1200,
        height: 1500,
        alt: "Harun Sha - Senior SEO Executive Photo",
      },
      {
        url: "/md-harun-or-roshid.png",
        width: 1200,
        height: 1500,
        alt: "Md. Harun or Roshid - Harun SEO Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harun SEO | Md Harun or Roshid SEO Specialist",
    description:
      "Official Portfolio of Md. Harun or Roshid (Harun SEO) — Senior SEO Executive at ScaleUP Ads Agency with 5+ years of experience.",
    images: ["/harun-seo.png"],
    creator: "@harunseo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.harunseo.com/#person",
      name: "Md. Harun or Roshid",
      alternateName: [
        "Harun SEO",
        "Md Harun or Roshid SEO",
        "Harun",
        "Harun Sha",
        "Md. Harun or Roshid",
        "Md Harun or Roshid",
        "Md. Harun",
        "Md Harun",
        "Harun Roshid",
        "SEO Harun",
      ],
      url: "https://www.harunseo.com",
      image: {
        "@type": "ImageObject",
        "@id": "https://www.harunseo.com/#personimage",
        url: "https://www.harunseo.com/harun-seo.png",
        contentUrl: "https://www.harunseo.com/harun-seo.png",
        caption: "Harun SEO — Md Harun or Roshid SEO Specialist and Senior Executive",
        name: "Harun SEO - Md Harun or Roshid SEO Specialist Photo",
        description: "Official profile photo of Harun SEO (Md. Harun or Roshid), Senior SEO Executive at ScaleUP Ads Agency.",
        width: 1200,
        height: 1500,
      },
      jobTitle: "Senior SEO Executive & Specialist",
      worksFor: {
        "@type": "Organization",
        name: "ScaleUP Ads Agency",
        url: "https://www.harunseo.com",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "Bangladesh",
      },
      email: "harunsha197@gmail.com",
      telephone: "+8801972835738",
      sameAs: [
        "https://www.harunseo.com",
        "https://wa.me/8801972835738",
      ],
      knowsAbout: [
        "Search Engine Optimization (SEO)",
        "Technical SEO",
        "Link Building",
        "On-Page SEO",
        "Local SEO",
        "Google Search Console",
        "Google Analytics",
        "Keyword Research",
        "SEO Audit",
      ],
      description:
        "Md. Harun or Roshid (known as Harun SEO) is a professional Senior SEO Executive with 5+ years of practical experience driving organic search visibility, high-authority backlink acquisition, and technical SEO growth.",
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.harunseo.com/#harunseophoto",
      url: "https://www.harunseo.com/harun-seo.png",
      contentUrl: "https://www.harunseo.com/harun-seo.png",
      name: "Harun SEO - Md Harun or Roshid SEO Specialist",
      caption: "Harun SEO (Md Harun or Roshid) Senior SEO Executive",
      keywords: "Harun SEO, Md Harun or Roshid SEO, Harun, Md. Harun or Roshid, SEO Specialist",
      author: {
        "@id": "https://www.harunseo.com/#person",
      },
      representativeOfPage: true,
      width: 1200,
      height: 1500,
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.harunseo.com/#harunphoto",
      url: "https://www.harunseo.com/harun.png",
      contentUrl: "https://www.harunseo.com/harun.png",
      name: "Harun - Md. Harun or Roshid Photo",
      caption: "Harun (Md. Harun or Roshid) Official Profile Photo",
      keywords: "Harun, Harun SEO, Harun Sha, Md. Harun or Roshid",
      author: {
        "@id": "https://www.harunseo.com/#person",
      },
      representativeOfPage: true,
      width: 1200,
      height: 1500,
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.harunseo.com/#harunshaphoto",
      url: "https://www.harunseo.com/harun-sha.png",
      contentUrl: "https://www.harunseo.com/harun-sha.png",
      name: "Harun Sha - Senior SEO Executive Photo",
      caption: "Harun Sha (Harun SEO) - Senior SEO Executive",
      keywords: "Harun Sha, Harun, Harun SEO, Md Harun or Roshid",
      author: {
        "@id": "https://www.harunseo.com/#person",
      },
      representativeOfPage: true,
      width: 1200,
      height: 1500,
    },
    {
      "@type": "WebSite",
      "@id": "https://www.harunseo.com/#website",
      url: "https://www.harunseo.com",
      name: "Harun SEO — Md. Harun or Roshid Portfolio",
      alternateName: "Harun SEO",
      publisher: {
        "@id": "https://www.harunseo.com/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.harunseo.com/#profilepage",
      url: "https://www.harunseo.com",
      name: "Harun SEO — Md. Harun or Roshid Official Profile",
      isPartOf: {
        "@id": "https://www.harunseo.com/#website",
      },
      about: {
        "@id": "https://www.harunseo.com/#person",
      },
      mainEntity: {
        "@id": "https://www.harunseo.com/#person",
      },
      primaryImageOfPage: {
        "@id": "https://www.harunseo.com/#personimage",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="dark:bg-[#092328] bg-[#f4f8f7] dark:text-gray-100 text-[#092328] min-h-screen selection:bg-[#2A835F] selection:text-white font-sans antialiased">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <AIChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
