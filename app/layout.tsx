import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Md. Harun or Roshid | Senior SEO Executive & Specialist",
  description: "Official Portfolio of Md. Harun or Roshid — SEO Executive at ScaleUP Ads Agency with 5+ years of experience in Technical SEO, Link Building, On-Page SEO, Keyword Research, and Organic Search Growth.",
  keywords: ["SEO Executive", "SEO Specialist", "Technical SEO", "Link Building", "ScaleUP Ads Agency", "Harun Roshid", "SEO Portfolio", "Backlink Building", "Local SEO"],
  openGraph: {
    title: "Md. Harun or Roshid — Senior SEO Executive Portfolio",
    description: "5+ Years of practical SEO experience helping businesses grow organic search visibility, fix technical issues, and acquire high-quality backlinks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="dark:bg-[#092328] bg-[#f4f8f7] dark:text-gray-100 text-[#092328] min-h-screen selection:bg-[#2A835F] selection:text-white font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}


