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
    default: "Md. Harun or Roshid | Senior SEO Executive & Specialist",
    template: "%s | Md. Harun or Roshid",
  },
  description:
    "Official Portfolio of Md. Harun or Roshid (Harun SEO) — Senior SEO Executive at ScaleUP Ads Agency with 5+ years of experience in Technical SEO, Link Building, Keyword Strategy, and Organic Growth.",
  keywords: [
    "Md. Harun or Roshid",
    "Md Harun or Roshid",
    "Harun SEO",
    "Harun",
    "Md. Harun",
    "Md Harun",
    "Harun Roshid",
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
    title: "Md. Harun or Roshid | Senior SEO Executive Portfolio",
    description:
      "Official Portfolio of Md. Harun or Roshid — SEO Executive at ScaleUP Ads Agency. 5+ Years of practical SEO experience driving organic visibility and rankings.",
    url: "https://www.harunseo.com",
    siteName: "Harun SEO — Md. Harun or Roshid",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/harun-seo.png",
        width: 1200,
        height: 630,
        alt: "Md. Harun or Roshid - Senior SEO Executive at ScaleUP Ads Agency",
      },
      {
        url: "/md-harun-or-roshid.png",
        width: 1200,
        height: 630,
        alt: "Md. Harun or Roshid - SEO Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Harun or Roshid | Senior SEO Executive",
    description:
      "Official Portfolio of Md. Harun or Roshid — Senior SEO Executive at ScaleUP Ads Agency with 5+ years of experience.",
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
        "Md Harun or Roshid",
        "Harun",
        "Harun SEO",
        "Md. Harun",
        "Md Harun",
        "Harun Roshid",
      ],
      url: "https://www.harunseo.com",
      image: {
        "@type": "ImageObject",
        "@id": "https://www.harunseo.com/#personimage",
        url: "https://www.harunseo.com/harun-seo.png",
        contentUrl: "https://www.harunseo.com/harun-seo.png",
        caption: "Md. Harun or Roshid - Senior SEO Executive at ScaleUP Ads Agency",
        name: "Md. Harun or Roshid Photo",
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
        "Md. Harun or Roshid is a professional Senior SEO Executive with 5+ years of practical experience driving organic search visibility, high-authority backlink acquisition, and technical SEO growth.",
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
      name: "Md. Harun or Roshid — Official Profile & SEO Portfolio",
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
